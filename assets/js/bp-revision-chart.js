/**
 * Chart.js para la diapositiva "Asi empezo la revision".
 * Requiere Chart (UMD global) y el evento deckslidechange del deck.
 */
(function () {
  var CHART_ID = "bpRevisionChart";
  var SLIDE_SEL = ".slide-visual--process";

  var chartInstance = null;
  var reducedMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var labels = ["L\u00e1minas", "Libro", "Autonom\u00eda", "Iconos", "Estilo"];
  var lineData = [62, 70, 58, 82, 96];
  var barData = [88, 84, 52, 72, 90];

  function parseNumList(s) {
    if (!s || !String(s).trim()) return null;
    var parts = String(s).split(",");
    var out = [];
    for (var i = 0; i < parts.length; i++) {
      var n = parseFloat(parts[i].trim(), 10);
      if (!isNaN(n)) out.push(n);
    }
    return out.length ? out : null;
  }

  /** Lee #bp-revision-data: data-chart-labels (|), data-chart-bar y data-chart-line (comas). Requiere misma longitud que etiquetas. */
  function readChartDataFromDom() {
    var panel = document.getElementById("bp-revision-data");
    if (!panel) return;
    var rawLabels = panel.getAttribute("data-chart-labels");
    if (rawLabels) {
      var lab = rawLabels
        .split("|")
        .map(function (x) {
          return x.trim();
        })
        .filter(Boolean);
      if (lab.length) labels = lab;
    }
    var nextBar = parseNumList(panel.getAttribute("data-chart-bar"));
    var nextLine = parseNumList(panel.getAttribute("data-chart-line"));
    if (nextBar && nextBar.length === labels.length) barData = nextBar;
    if (nextLine && nextLine.length === labels.length) lineData = nextLine;
  }
  var barFill = [
    "rgba(127, 174, 58, 0.52)",
    "rgba(92, 138, 38, 0.48)",
    "rgba(56, 189, 248, 0.42)",
    "rgba(234, 179, 8, 0.45)",
    "rgba(127, 174, 58, 0.58)",
  ];

  function barGradient(ctx, chartArea, dataIndex) {
    if (!chartArea) return barFill[dataIndex] || barFill[0];
    var top = chartArea.top;
    var bottom = chartArea.bottom;
    var g = ctx.createLinearGradient(0, bottom, 0, top);
    var stops = [
      ["rgba(74, 111, 34, 0.92)", "rgba(127, 174, 58, 0.78)", "rgba(163, 205, 102, 0.55)"],
      ["rgba(58, 92, 28, 0.9)", "rgba(92, 138, 38, 0.75)", "rgba(127, 174, 58, 0.5)"],
      ["rgba(3, 105, 161, 0.88)", "rgba(14, 165, 233, 0.65)", "rgba(56, 189, 248, 0.45)"],
      ["rgba(180, 83, 9, 0.88)", "rgba(234, 179, 8, 0.72)", "rgba(250, 204, 21, 0.48)"],
      ["rgba(74, 111, 34, 0.9)", "rgba(127, 174, 58, 0.8)", "rgba(163, 205, 102, 0.52)"],
    ];
    var s = stops[dataIndex % stops.length];
    g.addColorStop(0, s[0]);
    g.addColorStop(0.55, s[1]);
    g.addColorStop(1, s[2]);
    return g;
  }

  function buildChart() {
    if (typeof Chart === "undefined") return;
    var el = document.getElementById(CHART_ID);
    if (!el) return;

    readChartDataFromDom();

    if (chartInstance) {
      chartInstance.destroy();
      chartInstance = null;
    }

    var ctx = el.getContext("2d");
    if (!ctx) return;

    chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            type: "bar",
            label: "Foco documental (\u00edndice ilustrativo)",
            data: barData,
            backgroundColor: function (c) {
              var chart = c.chart;
              var area = chart.chartArea;
              return barGradient(chart.ctx, area, c.dataIndex);
            },
            borderColor: "rgba(255, 255, 255, 0.35)",
            borderWidth: 1,
            borderRadius: { topLeft: 12, topRight: 12, bottomLeft: 6, bottomRight: 6 },
            borderSkipped: false,
            maxBarThickness: 48,
            order: 1,
          },
          {
            type: "line",
            label: "Profundidad del an\u00e1lisis (\u00edndice ilustrativo)",
            data: lineData,
            borderColor: "#4a6f22",
            backgroundColor: function (c) {
              var chart = c.chart;
              var area = chart.chartArea;
              if (!area) return "rgba(127, 174, 58, 0.12)";
              var g = chart.ctx.createLinearGradient(0, area.bottom, 0, area.top);
              g.addColorStop(0, "rgba(127, 174, 58, 0.22)");
              g.addColorStop(0.5, "rgba(127, 174, 58, 0.1)");
              g.addColorStop(1, "rgba(255, 255, 255, 0)");
              return g;
            },
            borderWidth: 2.75,
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 8,
            pointBackgroundColor: "#ffffff",
            pointBorderColor: "#4a6f22",
            pointBorderWidth: 2.25,
            order: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: { left: 4, right: 6, top: 8, bottom: 4 },
        },
        animation: reducedMotion ? false : { duration: 900, easing: "easeOutQuart" },
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 12,
              boxHeight: 12,
              padding: 16,
              font: { family: '"DM Sans", system-ui, sans-serif', size: 11, weight: "600" },
              color: "#3f3f46",
            },
          },
          tooltip: {
            backgroundColor: "rgba(24, 24, 27, 0.92)",
            titleFont: { family: '"DM Sans", system-ui', size: 12, weight: "600" },
            bodyFont: { family: '"DM Sans", system-ui', size: 11 },
            padding: 10,
            cornerRadius: 8,
            callbacks: {
              footer: function () {
                return "Valores orientativos para visualizar la secuencia.";
              },
            },
          },
        },
        scales: {
          x: {
            offset: false,
            grid: { display: false },
            ticks: {
              font: { family: '"DM Sans", system-ui', size: 11, weight: "600" },
              color: "#3f3f46",
              maxRotation: 0,
              autoSkip: false,
            },
          },
          y: {
            position: "right",
            min: 0,
            max: 100,
            border: { display: false },
            grid: {
              color: "rgba(24, 24, 27, 0.055)",
              lineWidth: 1,
              drawTicks: false,
            },
            ticks: {
              stepSize: 25,
              font: { family: '"DM Sans", system-ui', size: 10, weight: "500" },
              color: "#71717a",
              padding: 6,
              callback: function (v) {
                return v + "%";
              },
            },
          },
        },
      },
    });
  }

  function resizeChart() {
    if (chartInstance) chartInstance.resize();
  }

  function isProcessSlide(slide) {
    return slide && slide.matches && slide.matches(SLIDE_SEL);
  }

  document.addEventListener("deckslidechange", function (e) {
    var slide = e.detail && e.detail.slide;
    if (!isProcessSlide(slide)) return;
    if (!document.getElementById(CHART_ID)) return;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        if (!chartInstance) buildChart();
        else resizeChart();
      });
    });
  });

  window.addEventListener(
    "resize",
    function () {
      var active = document.querySelector(SLIDE_SEL + ".is-active");
      if (active && chartInstance) requestAnimationFrame(resizeChart);
    },
    { passive: true }
  );

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      if (document.querySelector(SLIDE_SEL + ".is-active")) buildChart();
    });
  } else if (document.querySelector(SLIDE_SEL + ".is-active")) {
    buildChart();
  }
})();
