// Order: ?lang= in the address, saved choice, browser language, then en.
(function () {
  "use strict";

  var langs = window.MANUAL_LANGS || [];
  var KEY = window.MANUAL_LANG_KEY || "phd_lang";

  function ok(code) {
    code = String(code || "").toLowerCase();
    for (var i = 0; i < langs.length; i++) {
      if (langs[i].code === code) return code;
    }
    return "";
  }

  function pick() {
    var q = "";
    try { q = ok(new URLSearchParams(location.search).get("lang")); } catch (e) {}
    if (q) return q;

    try {
      var s = ok(localStorage.getItem(KEY));
      if (s) return s;
    } catch (e) {}

    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    for (var i = 0; i < list.length; i++) {
      var b = ok(String(list[i]).split("-")[0]);
      if (b) return b;
    }

    return "en";
  }

  function load(src, done, fail) {
    var s = document.createElement("script");
    s.src = src;
    s.onload = done;
    s.onerror = fail;
    document.head.appendChild(s);
  }

  function loadManual() {
    load("manual.js");
  }

  var code = pick();
  load(code + ".js", loadManual, function () {
    // text file missing: fall back to English so the page is never empty
    if (code !== "en") load("en.js", loadManual, loadManual);
    else loadManual();
  });
})();
