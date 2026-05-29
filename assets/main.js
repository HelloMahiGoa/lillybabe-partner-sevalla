(function () {
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
    }
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 900px)").matches) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      if (!text || !navigator.clipboard) return;
      navigator.clipboard.writeText(text).then(function () {
        var label = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(function () {
          btn.textContent = label;
        }, 1600);
      });
    });
  });
})();
