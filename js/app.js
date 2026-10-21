/* Aprenc català: hash router, lesson pages and the exercise engine. No build step. */
(function () {
  "use strict";

  const STORE = "aprenc-catala-v1";
  const SPECIAL = ["à", "è", "é", "í", "ï", "ò", "ó", "ú", "ü", "ç", "l·l", "'"];
  const app = document.getElementById("app");

  /* ---------- Progress (per browser) ---------- */
  function load() {
    try { return JSON.parse(localStorage.getItem(STORE)) || { scores: {} }; } catch (e) { return { scores: {} }; }
  }
  const progress = load();
  if (!progress.scores) progress.scores = {};
  function saveScore(key, pct) {
    if ((progress.scores[key] || 0) >= pct) return;
    progress.scores[key] = pct;
    try { localStorage.setItem(STORE, JSON.stringify(progress)); } catch (e) {}
  }
  function levelProgress(level) {
    const done = level.units.filter((u, i) => (progress.scores[level.id + "-" + (i + 1)] || 0) >= 70).length;
    return { done, total: level.units.length };
  }

  /* ---------- DOM helpers ---------- */
  function h(tag, attrs, kids) {
    const el = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      const v = attrs[k];
      if (v === false || v == null) continue;
      if (k === "class") el.className = v;
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else if (k === "text") el.textContent = v;
      else el.setAttribute(k, v === true ? "" : v);
    }
    [].concat(kids || []).forEach((c) => {
      if (c == null || c === false) return;
      el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return el;
  }
  // Supports **bold** in content strings without using innerHTML.
  function rich(text) {
    const frag = document.createDocumentFragment();
    String(text).split("**").forEach((part, i) => {
      if (!part) return;
      frag.appendChild(i % 2 ? h("strong", { text: part }) : document.createTextNode(part));
    });
    return frag;
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  /* ---------- Speech (only if a Catalan voice exists) ---------- */
  let caVoice = null;
  function findVoice() {
    try {
      const vs = window.speechSynthesis ? speechSynthesis.getVoices() : [];
      const v = vs.find((x) => /^ca([-_]|$)/i.test(x.lang)) || null;
      const changed = !!v !== !!caVoice;
      caVoice = v;
      if (changed) route();
    } catch (e) {}
  }
  if (window.speechSynthesis) { findVoice(); speechSynthesis.addEventListener("voiceschanged", findVoice); }
  function speakBtn(text) {
    if (!caVoice) return null;
    return h("button", { type: "button", class: "speak", "aria-label": "Listen: " + text, title: "Listen", onclick: () => {
      const u = new SpeechSynthesisUtterance(text.replace(/\s*\/\s*/g, ", "));
      u.voice = caVoice; u.lang = caVoice.lang; u.rate = 0.9;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    } }, h("span", { "aria-hidden": "true", text: "▶" }));
  }

  /* ---------- Answer checking ---------- */
  function norm(s) {
    return String(s).toLowerCase()
      .replace(/[’`´]/g, "'")
      .replace(/l[.•·]l/g, "l·l")
      .replace(/[¿¡?!.,;:«»"]/g, "")
      .replace(/\s+/g, " ").trim();
  }
  function bare(s) { return norm(s).normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function checkFill(input, accepted) {
    const n = norm(input);
    if (accepted.some((a) => norm(a) === n)) return "ok";
    if (accepted.some((a) => bare(a) === bare(input))) return "accent";
    return "no";
  }

  /* ---------- Layout ---------- */
  function crumbs(items) {
    return h("nav", { class: "crumbs", "aria-label": "Breadcrumb" }, items.map((it, i) =>
      i < items.length - 1 ? h("span", null, [h("a", { href: it[1], text: it[0] }), h("span", { class: "sep", "aria-hidden": "true", text: "›" })]) : h("span", { "aria-current": "page", text: it[0] })
    ));
  }
  function setActiveNav(key) {
    document.querySelectorAll(".topnav a").forEach((a) => a.classList.toggle("on", a.dataset.nav === key));
  }
  function mount(nodes, title, navKey) {
    app.textContent = "";
    [].concat(nodes).forEach((n) => n && app.appendChild(n));
    document.title = title ? title + " · Aprenc català" : "Aprenc català";
    setActiveNav(navKey || "");
    window.scrollTo(0, 0);
    const h1 = app.querySelector("h1");
    if (h1) { h1.setAttribute("tabindex", "-1"); h1.focus({ preventScroll: true }); }
  }

  /* ---------- Pages ---------- */
  function pageHome() {
    const levels = LEVELS.map((lv, i) => {
      const p = levelProgress(lv);
      return h("a", { class: "level-card l" + (i + 1), href: "#/" + lv.id }, [
        h("span", { class: "level-num", text: String(i + 1) }),
        h("div", null, [
          h("h3", { text: lv.name }),
          h("p", { text: lv.tagline }),
          h("div", { class: "bar", role: "img", "aria-label": p.done + " of " + p.total + " units completed" }, h("i", { style: "width:" + (100 * p.done / p.total) + "%" })),
          h("span", { class: "small", text: p.done + " / " + p.total + " units" })
        ])
      ]);
    });
    return mount([
      h("section", { class: "hero" }, [
        h("p", { class: "eyebrow", text: "Bàsic 1 · 2 · 3 → Certificat A2" }),
        h("h1", null, ["Aprenc ", h("span", { class: "accent", text: "català" })]),
        h("p", { class: "lead", text: "A free, self-paced path through the three Bàsic levels that lead to your first Catalan certificate. Each unit has vocabulary, grammar, a cultural fact and exercises." })
      ]),
      h("h2", { class: "section-title", text: "Your path" }),
      h("div", { class: "levels" }, levels),
      h("h2", { class: "section-title", text: "Beyond the lessons" }),
      h("div", { class: "extras" }, [
        extraCard("#/history", "Història", "From Latin to 10 million speakers, in eleven moments."),
        extraCard("#/facts", "Curiositats", "Human towers, a pooping log and other fun facts."),
        extraCard("#/exam", "El certificat", "What the A2 exam looks like and a checklist to get ready.")
      ])
    ], null, "home");
  }
  function extraCard(href, title, text) {
    return h("a", { class: "extra", href }, [h("h3", { text: title }), h("p", { text })]);
  }

  function pageLevel(lv) {
    const idx = LEVELS.indexOf(lv);
    const items = lv.units.map((u, i) => {
      const key = lv.id + "-" + (i + 1), best = progress.scores[key];
      return h("li", null, h("a", { class: "unit-row", href: "#/" + lv.id + "/" + (i + 1) }, [
        h("span", { class: "unit-num", text: String(i + 1) }),
        h("span", { class: "unit-text" }, [h("strong", { text: u.title }), h("span", { text: u.en })]),
        h("span", { class: "badge" + (best >= 70 ? " done" : best != null ? " tried" : ""), text: best != null ? best + "%" : "New" })
      ]));
    });
    const testBest = progress.scores[lv.id + "-test"];
    return mount([
      crumbs([["Home", "#/"], [lv.name]]),
      h("header", { class: "page-head l" + (idx + 1) }, [h("p", { class: "eyebrow", text: "Level " + (idx + 1) + " of 3" }), h("h1", { text: lv.name }), h("p", { class: "lead", text: lv.tagline })]),
      h("ol", { class: "units" }, items),
      h("a", { class: "test-card", href: "#/" + lv.id + "/test" }, [
        h("div", null, [h("h3", { text: "Mock test: " + lv.name }), h("p", { text: "15 random questions from every unit of this level." })]),
        h("span", { class: "badge" + (testBest >= 70 ? " done" : ""), text: testBest != null ? "Best " + testBest + "%" : "Start" })
      ])
    ], lv.name, lv.id);
  }

  function pageUnit(lv, n, tab) {
    const u = lv.units[n - 1];
    const idx = LEVELS.indexOf(lv);
    const base = "#/" + lv.id + "/" + n;
    const tabs = [["learn", "Learn"], ["practice", "Practice"]];
    const tabBar = h("div", { class: "tabs", role: "tablist" }, tabs.map((t) =>
      h("a", { role: "tab", href: base + (t[0] === "learn" ? "" : "/practice"), "aria-selected": tab === t[0] ? "true" : "false", text: t[1] })
    ));
    const head = h("header", { class: "page-head l" + (idx + 1) }, [
      h("p", { class: "eyebrow", text: lv.name + " · Unit " + n }),
      h("h1", { text: u.title }),
      h("p", { class: "lead", text: u.en })
    ]);
    let body;
    if (tab === "practice") {
      body = h("div", { class: "quiz-host" });
      runQuiz(body, u.ex.map((e) => e), lv.id + "-" + n, {
        next: n < lv.units.length ? ["Next unit", "#/" + lv.id + "/" + (n + 1)] : ["Mock test", "#/" + lv.id + "/test"],
        back: ["Review the lesson", base]
      });
    } else {
      body = h("div", { class: "lesson" }, [
        h("section", { class: "panel goals" }, [h("h2", { text: "In this unit you will…" }), h("ul", null, u.goals.map((g) => h("li", { text: g })))]),
        h("section", { class: "panel" }, [
          h("h2", { text: "Conceptes · Vocabulary" }),
          h("ul", { class: "vocab" }, u.vocab.map((v) => h("li", null, [h("span", { class: "ca", lang: "ca" }, [v[0]]), speakBtn(v[0]), h("span", { class: "en", text: v[1] })])))
        ]),
        h("section", { class: "panel" }, [h("h2", { text: "Gramàtica · Grammar" })].concat(u.grammar.map(grammarBlock))),
        h("aside", { class: "fact" }, [h("h2", { text: "Sabies que…? · Did you know?" }), h("p", { text: u.fact })]),
        h("div", { class: "cta-row" }, h("a", { class: "btn main", href: base + "/practice", text: "Practise this unit →" }))
      ]);
    }
    return mount([crumbs([["Home", "#/"], [lv.name, "#/" + lv.id], ["Unit " + n]]), head, tabBar, body], u.title, lv.id);
  }

  function grammarBlock(g) {
    const kids = [h("h3", { text: g.h })];
    (g.p || []).forEach((p) => kids.push(h("p", null, rich(p))));
    if (g.table) {
      kids.push(h("div", { class: "table-wrap" }, h("table", null, [
        h("thead", null, h("tr", null, g.table.head.map((c) => h("th", { scope: "col", text: c })))),
        h("tbody", null, g.table.rows.map((r) => h("tr", null, r.map((c, i) => i === 0 ? h("th", { scope: "row", text: c }) : h("td", { lang: "ca", text: c })))))
      ])));
    }
    if (g.ex) {
      kids.push(h("ul", { class: "examples" }, g.ex.map((e) => h("li", null, [h("span", { class: "ca", lang: "ca", text: e[0] }), speakBtn(e[0]), h("span", { class: "en", text: e[1] })]))));
    }
    return h("div", { class: "grammar" }, kids);
  }

  function pageTest(lv) {
    const idx = LEVELS.indexOf(lv);
    const pool = [];
    lv.units.forEach((u) => u.ex.forEach((e) => pool.push(e)));
    const host = h("div", { class: "quiz-host" });
    runQuiz(host, shuffle(pool).slice(0, 15), lv.id + "-test", {
      next: idx < LEVELS.length - 1 ? [LEVELS[idx + 1].name, "#/" + LEVELS[idx + 1].id] : ["Certificate guide", "#/exam"],
      back: [lv.name, "#/" + lv.id]
    });
    return mount([
      crumbs([["Home", "#/"], [lv.name, "#/" + lv.id], ["Mock test"]]),
      h("header", { class: "page-head l" + (idx + 1) }, [h("p", { class: "eyebrow", text: lv.name }), h("h1", { text: "Mock test" }), h("p", { class: "lead", text: "15 mixed questions. Aim for 70% or more." })]),
      host
    ], "Mock test · " + lv.name, lv.id);
  }

  function pageHistory() {
    return mount([
      crumbs([["Home", "#/"], ["Història"]]),
      h("header", { class: "page-head" }, [h("p", { class: "eyebrow", text: "History" }), h("h1", { text: "Història de la llengua" }), h("p", { class: "lead", text: "How a language from the Pyrenees spread across the Mediterranean, nearly disappeared from public life, and came back." })]),
      h("ol", { class: "timeline" }, HISTORY.map((e) => h("li", null, [h("span", { class: "when", text: e.when }), h("h3", { text: e.title }), h("p", { text: e.text })])))
    ], "Història", "history");
  }

  function pageFacts() {
    return mount([
      crumbs([["Home", "#/"], ["Curiositats"]]),
      h("header", { class: "page-head" }, [h("p", { class: "eyebrow", text: "Fun facts" }), h("h1", { text: "Curiositats" }), h("p", { class: "lead", text: "Culture, traditions and quirks that make Catalan unique." })]),
      h("div", { class: "facts" }, FACTS.map((f) => h("article", { class: "fact-card" }, [h("h3", { text: f.title }), h("p", { text: f.text })])))
    ], "Curiositats", "facts");
  }

  function pageExam() {
    let checks = {};
    try { checks = JSON.parse(localStorage.getItem(STORE + "-cando")) || {}; } catch (e) {}
    const list = h("ul", { class: "cando" }, EXAM.cando.map((c, i) => {
      const id = "cando-" + i;
      return h("li", null, [
        h("input", { type: "checkbox", id, checked: !!checks[i], onchange: (ev) => {
          checks[i] = ev.target.checked;
          try { localStorage.setItem(STORE + "-cando", JSON.stringify(checks)); } catch (e) {}
        } }),
        h("label", { for: id, text: c })
      ]);
    }));
    return mount([
      crumbs([["Home", "#/"], ["El certificat"]]),
      h("header", { class: "page-head" }, [h("p", { class: "eyebrow", text: "Certificat de nivell bàsic · A2" }), h("h1", { text: "El certificat" }), h("p", { class: "lead", text: EXAM.intro })]),
      h("section", { class: "panel" }, [h("h2", { text: "The four parts" }), h("div", { class: "parts" }, EXAM.parts.map((p) => h("div", { class: "part" }, [h("h3", null, [p.title, h("span", { class: "en", text: " · " + p.en })]), h("p", { text: p.text })])))]),
      h("section", { class: "panel" }, [h("h2", { text: "Can-do checklist" }), h("p", { class: "small", text: "Tick what you can already do. Saved in this browser." }), list]),
      h("section", { class: "panel" }, [h("h2", { text: "Tips" }), h("ul", null, EXAM.tips.map((t) => h("li", { text: t })))]),
      h("div", { class: "cta-row" }, LEVELS.map((lv) => h("a", { class: "btn", href: "#/" + lv.id + "/test", text: "Mock test " + lv.name })))
    ], "El certificat", "exam");
  }

  /* ---------- Exercise engine ---------- */
  function runQuiz(host, items, key, links) {
    const qs = items.map((e) => {
      if (e.t === "mc") {
        const order = shuffle(e.o.map((_, i) => i));
        return Object.assign({}, e, { order });
      }
      if (e.t === "order") return Object.assign({}, e, { pool: shuffleDistinct(e.w) });
      return e;
    });
    let i = 0, score = 0, answered = false;

    function shuffleDistinct(w) {
      if (w.length < 2) return w.slice();
      let s;
      do { s = shuffle(w); } while (s.join(" ") === w.join(" "));
      return s;
    }

    function render() {
      host.textContent = "";
      if (i >= qs.length) return renderEnd();
      const q = qs[i];
      answered = false;
      const feedback = h("div", { class: "feedback", role: "status", "aria-live": "polite" });
      const nextBtn = h("button", { type: "button", class: "btn main", hidden: true, text: i < qs.length - 1 ? "Next →" : "See results", onclick: () => { i++; render(); } });
      const card = h("div", { class: "quiz-card" }, [
        h("div", { class: "quiz-meta" }, [
          h("span", { text: "Question " + (i + 1) + " of " + qs.length }),
          h("span", { text: "Score " + score })
        ]),
        h("div", { class: "bar thin" }, h("i", { style: "width:" + (100 * i / qs.length) + "%" }))
      ]);

      function finish(ok, msg) {
        if (answered) return;
        answered = true;
        if (ok) score++;
        feedback.className = "feedback " + (ok ? "ok" : "no");
        feedback.textContent = "";
        feedback.appendChild(h("strong", { text: ok ? "Correcte! " : "Not quite. " }));
        if (msg) feedback.appendChild(document.createTextNode(msg + " "));
        if (q.ex) feedback.appendChild(h("span", { class: "why", text: q.ex }));
        nextBtn.hidden = false;
        nextBtn.focus();
      }

      if (q.t === "mc") {
        card.appendChild(h("p", { class: "prompt", lang: "ca" }, q.q));
        const opts = h("div", { class: "options" });
        q.order.forEach((oi) => {
          const b = h("button", { type: "button", class: "opt", lang: "ca", text: q.o[oi], onclick: () => {
            if (answered) return;
            opts.querySelectorAll("button").forEach((x) => { x.disabled = true; });
            b.classList.add(oi === q.a ? "right" : "wrong");
            if (oi !== q.a) opts.querySelectorAll("button")[q.order.indexOf(q.a)].classList.add("right");
            finish(oi === q.a, oi === q.a ? "" : "Answer: " + q.o[q.a] + ".");
          } });
          opts.appendChild(b);
        });
        card.appendChild(opts);
      } else if (q.t === "fill") {
        const parts = q.q.split("___");
        card.appendChild(h("p", { class: "prompt", lang: "ca" }, [parts[0], h("span", { class: "gap", text: "____" }), parts[1] || ""]));
        const input = h("input", { type: "text", class: "answer", lang: "ca", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": "Your answer" });
        const check = () => {
          if (answered) return;
          if (!input.value.trim()) { input.focus(); return; }
          const r = checkFill(input.value, q.a);
          input.disabled = true; checkBtn.disabled = true; keys.querySelectorAll("button").forEach((x) => { x.disabled = true; });
          input.classList.add(r === "no" ? "wrong" : "right");
          if (r === "ok") finish(true, "");
          else if (r === "accent") finish(true, "Watch the accents: " + q.a[0] + ".");
          else finish(false, "Answer: " + q.a.join(" / ") + ".");
        };
        input.addEventListener("keydown", (ev) => { if (ev.key === "Enter") { ev.preventDefault(); answered ? nextBtn.click() : check(); } });
        const checkBtn = h("button", { type: "button", class: "btn main", text: "Check", onclick: check });
        const keys = h("div", { class: "keys", "aria-label": "Special characters" }, SPECIAL.map((ch) => h("button", { type: "button", lang: "ca", text: ch, onclick: () => {
          const s = input.selectionStart ?? input.value.length, e = input.selectionEnd ?? input.value.length;
          input.value = input.value.slice(0, s) + ch + input.value.slice(e);
          input.focus(); input.setSelectionRange(s + ch.length, s + ch.length);
        } })));
        card.appendChild(h("div", { class: "fill-row" }, [input, checkBtn]));
        card.appendChild(keys);
        setTimeout(() => input.focus(), 0);
      } else if (q.t === "order") {
        card.appendChild(h("p", { class: "prompt" }, ["Put the words in order: ", h("em", { text: q.en })]));
        const chosen = [];
        const line = h("div", { class: "built", "aria-label": "Your sentence" });
        const bank = h("div", { class: "bank" });
        const checkBtn = h("button", { type: "button", class: "btn main", disabled: true, text: "Check", onclick: () => {
          const ok = norm(chosen.map((c) => c.w).join(" ")) === norm(q.w.join(" "));
          line.classList.add(ok ? "right" : "wrong");
          bank.querySelectorAll("button").forEach((x) => { x.disabled = true; });
          line.querySelectorAll("button").forEach((x) => { x.disabled = true; });
          checkBtn.disabled = true;
          finish(ok, ok ? "" : "Answer: " + q.w.join(" ") + ".");
        } });
        function draw() {
          line.textContent = ""; bank.textContent = "";
          if (!chosen.length) line.appendChild(h("span", { class: "placeholder", text: "Tap the words below" }));
          chosen.forEach((c, k) => line.appendChild(h("button", { type: "button", class: "chip on", lang: "ca", text: c.w, onclick: () => { if (!answered) { chosen.splice(k, 1); draw(); } } })));
          q.pool.forEach((w, k) => {
            const used = chosen.some((c) => c.k === k);
            bank.appendChild(h("button", { type: "button", class: "chip", lang: "ca", disabled: used || answered, text: w, onclick: () => { chosen.push({ w, k }); draw(); } }));
          });
          checkBtn.disabled = answered || chosen.length !== q.pool.length;
        }
        draw();
        card.appendChild(line); card.appendChild(bank); card.appendChild(h("div", { class: "row" }, checkBtn));
      }

      card.appendChild(feedback);
      card.appendChild(h("div", { class: "row" }, nextBtn));
      host.appendChild(card);
    }

    function renderEnd() {
      const pct = Math.round(100 * score / qs.length);
      saveScore(key, pct);
      const msg = pct >= 90 ? "Excel·lent! 🎉" : pct >= 70 ? "Molt bé! You've passed this one." : pct >= 50 ? "Bé! Review the lesson and try again." : "Ànims! Go back to the lesson and have another go.";
      host.appendChild(h("div", { class: "quiz-card end" }, [
        h("p", { class: "big", text: pct + "%" }),
        h("p", { class: "end-msg", text: score + " of " + qs.length + " correct. " + msg }),
        h("div", { class: "row wrap" }, [
          h("button", { type: "button", class: "btn", text: "Try again", onclick: () => { i = 0; score = 0; qs.forEach((q) => { if (q.t === "mc") q.order = shuffle(q.o.map((_, k) => k)); if (q.t === "order") q.pool = shuffleDistinct(q.w); }); render(); } }),
          h("a", { class: "btn", href: links.back[1], text: links.back[0] }),
          h("a", { class: "btn main", href: links.next[1], text: links.next[0] + " →" })
        ])
      ]));
    }

    render();
  }

  /* ---------- Router ---------- */
  function route() {
    const path = (location.hash || "#/").replace(/^#\/?/, "").split("?")[0].split("/").filter(Boolean);
    const lv = LEVELS.find((l) => l.id === path[0]);
    if (!path.length) return pageHome();
    if (path[0] === "history") return pageHistory();
    if (path[0] === "facts") return pageFacts();
    if (path[0] === "exam") return pageExam();
    if (lv && !path[1]) return pageLevel(lv);
    if (lv && path[1] === "test") return pageTest(lv);
    const n = lv ? parseInt(path[1], 10) : NaN;
    if (lv && n >= 1 && n <= lv.units.length) return pageUnit(lv, n, path[2] === "practice" ? "practice" : "learn");
    return pageHome();
  }
  window.addEventListener("hashchange", route);
  route();
})();
