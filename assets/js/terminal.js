// Einmaliger Typewriter-Effekt für die Tagline im Header.
// Respektiert prefers-reduced-motion und degradiert sauber ohne JS.
(function () {
  var el = document.querySelector("[data-typewriter]");
  if (!el) return;

  var text = el.getAttribute("data-typewriter");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !text) {
    el.textContent = text || el.textContent;
    return;
  }

  el.textContent = "";
  var cursor = document.createElement("span");
  cursor.className = "cursor";
  cursor.textContent = "\u00A0";

  var i = 0;
  function tick() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      el.appendChild(cursor);
      i++;
      setTimeout(tick, 28 + Math.random() * 35);
    }
  }
  tick();
})();
