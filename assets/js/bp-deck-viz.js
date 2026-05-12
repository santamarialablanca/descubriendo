/**
 * Visualizaciones ligeras para la presentacion (canvas + listeners).
 * Requiere que el script del deck emita `deckslidechange` en document.
 */
(function () {
  var ACCENT = "rgba(127, 174, 58, 0.55)";
  var ACCENT_SOFT = "rgba(127, 174, 58, 0.18)";
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function dist(a, b) {
    var dx = b.x - a.x;
    var dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function polylineLength(points) {
    var L = 0;
    for (var i = 1; i < points.length; i++) {
      L += dist(points[i - 1], points[i]);
    }
    return L;
  }

  function pointAlongPolyline(points, targetDist) {
    if (points.length === 0) return null;
    if (points.length === 1 || targetDist <= 0) return { x: points[0].x, y: points[0].y };
    var acc = 0;
    for (var i = 1; i < points.length; i++) {
      var a = points[i - 1];
      var b = points[i];
      var seg = dist(a, b);
      if (acc + seg >= targetDist) {
        var t = (targetDist - acc) / seg;
        return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
      }
      acc += seg;
    }
    var last = points[points.length - 1];
    return { x: last.x, y: last.y };
  }

  function setupFlow(flowEl) {
    var canvas = flowEl.querySelector(".process-flow__canvas");
    if (!canvas || !canvas.getContext) return;

    var ctx = canvas.getContext("2d");
    var steps = Array.from(flowEl.querySelectorAll(".step"));
    var rafId = null;
    var animStart = 0;
    var durationMs = reducedMotion ? 0 : 980;

    function layoutCanvas() {
      var fr = flowEl.getBoundingClientRect();
      var dpr = window.devicePixelRatio || 1;
      canvas.style.width = fr.width + "px";
      canvas.style.height = fr.height + "px";
      canvas.width = Math.floor(fr.width * dpr);
      canvas.height = Math.floor(fr.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function getCenters() {
      var fr = flowEl.getBoundingClientRect();
      return steps.map(function (el) {
        var r = el.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - fr.left,
          y: r.top + r.height / 2 - fr.top,
        };
      });
    }

    function drawProgress(points, t) {
      var cw = canvas.clientWidth;
      var ch = canvas.clientHeight;
      ctx.clearRect(0, 0, cw, ch);

      var total = polylineLength(points);
      if (total < 1 || points.length < 2) return;

      var drawLen = total * Math.min(1, Math.max(0, t));

      ctx.strokeStyle = ACCENT_SOFT;
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (var i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();

      ctx.strokeStyle = ACCENT;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      var walk = 0;
      ctx.moveTo(points[0].x, points[0].y);
      for (var j = 1; j < points.length; j++) {
        var a = points[j - 1];
        var b = points[j];
        var seg = dist(a, b);
        if (walk + seg <= drawLen) {
          ctx.lineTo(b.x, b.y);
          walk += seg;
        } else {
          var rem = drawLen - walk;
          var ratio = rem / seg;
          ctx.lineTo(a.x + (b.x - a.x) * ratio, a.y + (b.y - a.y) * ratio);
          break;
        }
      }
      ctx.stroke();

      var endPt = pointAlongPolyline(points, drawLen);
      if (endPt && t > 0.02) {
        ctx.fillStyle = ACCENT;
        ctx.beginPath();
        ctx.arc(endPt.x, endPt.y, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      for (var k = 0; k < points.length; k++) {
        var along = 0;
        for (var m = 1; m <= k; m++) {
          along += dist(points[m - 1], points[m]);
        }
        if (along <= drawLen + 0.5) {
          ctx.fillStyle = "#fff";
          ctx.strokeStyle = ACCENT;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(points[k].x, points[k].y, 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
      }
    }

    function tick(now) {
      var elapsed = now - animStart;
      var t = durationMs <= 0 ? 1 : Math.min(1, elapsed / durationMs);
      var pts = getCenters();
      drawProgress(pts, t);
      if (t < 1 && durationMs > 0) {
        rafId = requestAnimationFrame(tick);
      }
    }

    function runAnimation() {
      if (rafId) cancelAnimationFrame(rafId);
      layoutCanvas();
      var pts = getCenters();
      if (pts.length < 2) return;
      if (reducedMotion || durationMs === 0) {
        drawProgress(pts, 1);
        return;
      }
      drawProgress(pts, 0);
      animStart = performance.now();
      rafId = requestAnimationFrame(tick);
    }

    function onResize() {
      var slide = flowEl.closest(".slide");
      if (!slide || !slide.classList.contains("is-active")) return;
      layoutCanvas();
      var pts = getCenters();
      if (pts.length >= 2) {
        drawProgress(pts, 1);
      }
    }

    var ro = new ResizeObserver(function () {
      onResize();
    });
    ro.observe(flowEl);

    flowEl._bpFlowRedraw = runAnimation;
    flowEl._bpFlowResize = onResize;
  }

  document.querySelectorAll("[data-bp-flow]").forEach(setupFlow);

  document.addEventListener("deckslidechange", function (e) {
    var slide = e.detail && e.detail.slide;
    if (!slide) return;
    slide.querySelectorAll("[data-bp-flow]").forEach(function (flow) {
      if (typeof flow._bpFlowRedraw === "function") {
        requestAnimationFrame(function () {
          flow._bpFlowRedraw();
        });
      }
    });
  });

  window.addEventListener("resize", function () {
    document.querySelectorAll("[data-bp-flow]").forEach(function (flow) {
      if (flow._bpFlowResize && flow.closest(".slide.is-active")) flow._bpFlowResize();
    });
  });
})();
