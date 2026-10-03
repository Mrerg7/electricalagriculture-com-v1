(function () {
  var root = document.documentElement;
  var theme = document.getElementById("theme");
  if (theme) {
    theme.addEventListener("click", function () {
      var dark = root.classList.toggle("dark");
      try { localStorage.setItem("ea-theme", dark ? "dark" : "light"); } catch (e) {}
    });
  }
  var menu = document.getElementById("menu");
  var mobile = document.getElementById("mobile");
  if (menu && mobile) {
    menu.addEventListener("click", function () {
      var open = mobile.classList.toggle("open");
      menu.setAttribute("aria-expanded", open ? "true" : "false");
      menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  document.querySelectorAll("[data-filters]").forEach(function (bar) {
    var list = document.querySelector(bar.getAttribute("data-filters"));
    if (!list) return;
    bar.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-filter]");
      if (!button) return;
      bar.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
      button.setAttribute("aria-pressed", "true");
      var filter = button.getAttribute("data-filter");
      list.querySelectorAll("[data-pathway]").forEach(function (card) {
        card.classList.toggle("hidden", filter !== "All" && card.getAttribute("data-pathway") !== filter);
      });
    });
  });

  document.querySelectorAll("[data-search]").forEach(function (input) {
    var list = document.querySelector(input.getAttribute("data-search"));
    if (!list) return;
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      list.querySelectorAll("[data-hay]").forEach(function (card) {
        var hay = (card.getAttribute("data-hay") || "").toLowerCase();
        card.classList.toggle("hidden", q && hay.indexOf(q) === -1);
      });
    });
  });

  var share = document.getElementById("share");
  if (share) {
    var out = function () {
      var s = Number(share.value);
      var freed = s * (1 - 1 / 18);
      document.getElementById("share-label").textContent = s + "%";
      document.getElementById("m-today").textContent = s + "%";
      document.getElementById("m-need").textContent = (s / 18).toFixed(1) + "%";
      document.getElementById("m-free").textContent = freed.toFixed(1) + "%";
    };
    share.addEventListener("input", out);
    out();
  }

  var form = document.getElementById("inquiry");
  if (form) {
    var intent = "offer";
    form.querySelectorAll("[data-intent]").forEach(function (button) {
      button.addEventListener("click", function () {
        intent = button.getAttribute("data-intent");
        form.querySelectorAll("[data-intent]").forEach(function (b) {
          b.setAttribute("aria-pressed", b === button ? "true" : "false");
        });
        form.querySelector("[data-offer-field]").classList.toggle("hidden", intent === "buy");
      });
    });
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var offer = form.offer.value.trim();
      var use = form.use.value.trim();
      var err = form.querySelector("[role=alert]");
      if (name.length < 2) return (err.textContent = "Add your name.");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return (err.textContent = "Add a real email so a reply can reach you.");
      if (intent === "offer" && !offer) return (err.textContent = "Name a figure, or switch to Buy at list.");
      err.textContent = "";
      var subject = intent === "buy"
        ? "Buy now — electricalagriculture.com at $33,000"
        : "Offer " + offer + " — electricalagriculture.com";
      var body = "Name: " + name + "\nEmail: " + email + "\nIntent: " + (intent === "buy" ? "Buy at $33,000" : "Offer " + offer) + "\nIntended use: " + (use || "—") + "\n\nPlease reply with escrow steps.";
      var href = "mailto:sales@desertrich.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      var note = document.getElementById("sent");
      note.classList.remove("hidden");
      note.querySelector("a").href = href;
      location.href = href;
    });
  }

  if (!sessionStorage.getItem("ea-exit")) {
    document.addEventListener("mouseout", function onOut(event) {
      if (event.clientY > 12) return;
      sessionStorage.setItem("ea-exit", "1");
      document.getElementById("exit").classList.remove("hidden");
      document.removeEventListener("mouseout", onOut);
    });
  }
  var close = document.getElementById("exit-close");
  if (close) close.addEventListener("click", function () { document.getElementById("exit").classList.add("hidden"); });
})();
