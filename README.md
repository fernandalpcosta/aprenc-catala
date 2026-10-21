# Aprenc català

A free web app for learning Catalan from zero to the **Certificat de nivell bàsic (A2)**, following the three CPNL courses: **Bàsic 1, Bàsic 2 and Bàsic 3**.

## What's inside

- **20 units** across the three levels. Each one has:
  - **Conceptes**: key vocabulary with English meanings (and a listen button when the device has a Catalan voice)
  - **Gramàtica**: short explanations with conjugation tables and examples
  - **Sabies que…?**: a cultural fact
  - **Practice**: multiple choice, fill-in-the-gap (with an accent keyboard) and word-order exercises, about 190 in total
- **Mock tests**: 15 random questions per level
- **Història**: a timeline of the language, from Latin to today
- **Curiositats**: fun facts about Catalan culture and traditions
- **El certificat**: the four parts of the A2 exam, a can-do checklist and tips

Progress is saved in the browser (localStorage). There are no accounts and no server.

## Syllabus

| Bàsic 1 | Bàsic 2 | Bàsic 3 |
|---|---|---|
| Greetings and introductions | Daily routine and reflexive verbs | Periphrastic past (vaig fer) |
| Alphabet and pronunciation | -re / -ir verbs and irregulars | Present perfect (he fet) |
| Numbers, days and months | Shopping, this/that | Future tense |
| Ser, estar, tenir | Likes: m'agrada | Imperative and directions |
| Articles, gender and plural | Home, city, hi ha, al/del/pel | Health and obligation |
| Family and -ar verbs | Weather, clothes, possessives | Comparisons and description |
| Telling the time (quarts) | | Pronouns en and hi |

## Run it

It's plain HTML, CSS and JavaScript with no build step.

- **Locally:** open `index.html`, or serve the folder (`python3 -m http.server`) and go to http://localhost:8000.
- **GitHub Pages:** Settings → Pages → Source: *Deploy from a branch* → `main` / root. The site will be at `https://<user>.github.io/aprenc-catala/`.

## Editing content

All lessons, exercises, history and facts live in `js/content.js`. Add a unit by adding an object to a level's `units` array; the app picks it up automatically.

Exercise formats:

```js
{ t: "mc", q: "Question", o: ["option A", "option B"], a: 0, ex: "Optional explanation" }
{ t: "fill", q: "Jo ___ de Girona.", a: ["soc", "sóc"] }
{ t: "order", w: ["Em", "dic", "Laia"], en: "My name is Laia." }
```

Spelling follows the current IEC norms (2016–2017 reform, e.g. *soc* without an accent). Exam details can change, so always check [cpnl.cat](https://www.cpnl.cat) and [llengua.gencat.cat](https://llengua.gencat.cat) for official dates and requirements.
