/* Course content: Bàsic 1–3 (CEFR A2), history, fun facts and certificate info.
   Exercise types:
     mc    – multiple choice: q, o (options), a (index of the right option)
     fill  – type the answer: q (use ___ for the gap), a (accepted answers)
     order – put the words in order: w (words in the right order), en (meaning)
   Every exercise can carry ex: a short explanation shown after answering. */

const LEVELS = [
  {
    id: "b1",
    name: "Bàsic 1",
    tagline: "First words: greetings, sounds, numbers, the key verbs and telling the time.",
    units: [
      {
        title: "Hola! Salutacions i presentacions",
        en: "Greetings and introductions",
        goals: ["Say hello and goodbye at any time of day", "Ask and say your name and where you are from", "Use tu (informal) and vostè (formal)"],
        vocab: [
          ["Hola", "Hello / Hi"],
          ["Bon dia", "Good morning (until lunchtime)"],
          ["Bona tarda", "Good afternoon (after lunch)"],
          ["Bon vespre", "Good evening"],
          ["Bona nit", "Good night / Good evening"],
          ["Adéu", "Goodbye"],
          ["Fins demà", "See you tomorrow"],
          ["Fins aviat", "See you soon"],
          ["A reveure", "Goodbye (more formal)"],
          ["Si us plau", "Please"],
          ["Gràcies / Moltes gràcies", "Thank you / Thank you very much"],
          ["De res", "You're welcome"],
          ["Perdó / Perdoni", "Sorry / Excuse me (formal)"],
          ["Com et dius?", "What's your name?"],
          ["Em dic Anna", "My name is Anna"],
          ["Com estàs?", "How are you?"],
          ["Molt bé, i tu?", "Very well, and you?"],
          ["D'on ets?", "Where are you from?"],
          ["Soc de Lisboa", "I'm from Lisbon"],
          ["Encantat / Encantada", "Nice to meet you (said by a man / a woman)"]
        ],
        grammar: [
          {
            h: "Tu or vostè?",
            p: ["Catalan has an informal **tu** and a formal **vostè** (which takes the same verb form as ell/ella). Use tu with friends, family and people your age; use vostè with older people or in formal situations."],
            table: { head: ["", "Informal (tu)", "Formal (vostè)"], rows: [
              ["What's your name?", "Com et dius?", "Com es diu?"],
              ["How are you?", "Com estàs?", "Com està?"],
              ["Where are you from?", "D'on ets?", "D'on és?"]
            ] }
          },
          {
            h: "Greetings through the day",
            p: ["**Bon dia** is used until lunch (around 2 pm). After lunch you say **bona tarda**. In the evening you can say **bon vespre**, and **bona nit** both for good evening and good night."]
          },
          {
            h: "Agreement with the speaker",
            p: ["Adjectives agree with the person they describe. A man says **encantat**, a woman says **encantada**."],
            ex: [["Encantat de conèixer-te.", "Nice to meet you. (a man speaking)"], ["Encantada!", "Nice to meet you! (a woman speaking)"]]
          },
          {
            h: "Spelling note: soc",
            p: ["Since the 2017 spelling reform, **soc** (I am) is written without an accent. In older books you will see **sóc**."]
          }
        ],
        fact: "«Adéu» is not only goodbye: when people pass each other quickly in the street they often say «adéu» as a quick hello-and-bye.",
        ex: [
          { t: "mc", q: "It's 4 pm. How do you greet someone?", o: ["Bon dia", "Bona tarda", "Bona nit", "Adéu"], a: 1, ex: "After lunch you switch from «bon dia» to «bona tarda»." },
          { t: "mc", q: "Someone says «Gràcies!». You answer:", o: ["De res", "Perdó", "Bon dia", "Si us plau"], a: 0 },
          { t: "fill", q: "— Com et dius? — ___ dic Jordi.", a: ["Em"] },
          { t: "fill", q: "— D'on ets? — ___ de Barcelona.", a: ["Soc", "Sóc"], ex: "«Soc» = I am. Written «sóc» before 2017." },
          { t: "order", w: ["Em", "dic", "Laia"], en: "My name is Laia." },
          { t: "mc", q: "Who says «Encantada»?", o: ["A woman", "A man", "Anyone"], a: 0, ex: "A man says «encantat»." },
          { t: "mc", q: "Which one means 'See you tomorrow'?", o: ["Fins aviat", "Fins demà", "A reveure", "Bona nit"], a: 1 },
          { t: "mc", q: "You meet your partner's grandmother for the first time. You ask her name:", o: ["Com et dius?", "Com es diu?", "D'on ets?"], a: 1, ex: "With older people, use vostè: «Com es diu?»" },
          { t: "order", w: ["Bon", "dia", "com", "estàs"], en: "Good morning, how are you?" }
        ]
      },
      {
        title: "L'alfabet i la pronúncia",
        en: "Alphabet and pronunciation",
        goals: ["Read the special letters of Catalan", "Know the three accent marks", "Spell words aloud"],
        vocab: [
          ["any", "year · ny sounds like Portuguese nh / Spanish ñ"],
          ["llibre", "book · ll sounds like Portuguese lh"],
          ["col·legi", "school · l·l is a long, double l"],
          ["peix", "fish · final ix sounds 'sh'"],
          ["caixa", "box · x after i sounds 'sh'"],
          ["cotxe", "car · tx sounds 'ch' as in church"],
          ["maig", "May · final ig sounds 'ch'"],
          ["plaça", "square · ç sounds 's'"],
          ["rosa", "rose / pink · single s between vowels sounds 'z'"],
          ["passar", "to pass · ss sounds 's'"],
          ["pingüí", "penguin · ü means the u is pronounced"],
          ["aigua", "water · gu before a: the u is pronounced"]
        ],
        grammar: [
          {
            h: "Letters with a special sound",
            table: { head: ["Spelling", "Sounds like", "Example"], rows: [
              ["ny", "Portuguese nh, Spanish ñ", "any, Catalunya"],
              ["ll", "Portuguese lh", "llibre, ella"],
              ["l·l", "a long double l", "col·legi, il·lusió"],
              ["ix / x", "sh", "peix, caixa, xocolata"],
              ["tx", "ch (church)", "cotxe, cartutx"],
              ["-ig (end of word)", "ch (church)", "maig, mig"],
              ["ç", "s", "plaça, Barça"],
              ["s between vowels", "z", "rosa, casa"],
              ["ss", "s", "passar, classe"],
              ["j / g + e, i", "like French j (Portuguese j)", "jove, gent"]
            ] }
          },
          {
            h: "Three accent marks",
            p: ["**Grave accent** (à, è, ò): à always has it; è and ò mark an open vowel.", "**Acute accent** (é, í, ó, ú): é and ó mark a closed vowel; i and u always take the acute.", "**Dieresis** (ï, ü): ü means the u is pronounced (pingüí, qüestió); ï breaks a diphthong (veïna)."],
            table: { head: ["Accent", "Letters", "Examples"], rows: [
              ["Grave", "à è ò", "català, cafè, això"],
              ["Acute", "é í ó ú", "també, així, camió, últim"],
              ["Dieresis", "ï ü", "veïna, pingüí"]
            ] }
          },
          {
            h: "Unstressed vowels",
            p: ["In central Catalan (Barcelona), unstressed **a** and **e** both sound like a soft 'uh', and unstressed **o** sounds like **u**: casa sounds like 'cah-zuh', Barcelona like 'bur-suh-LOH-nuh'. In Valencia vowels are pronounced more as written."]
          }
        ],
        fact: "The ela geminada (l·l), with its little middle dot, is found in no other language. It tells you to say a long l, as in col·legi or il·lusió.",
        ex: [
          { t: "mc", q: "In «col·legi», the l·l is called…", o: ["ela geminada", "ela doble", "ce trencada"], a: 0, ex: "Ce trencada is the ç." },
          { t: "mc", q: "How is the final -ig in «maig» pronounced?", o: ["Like 'ch' in church", "Like 'g' in go", "It is silent"], a: 0 },
          { t: "mc", q: "Choose the correct spelling of 'school':", o: ["colegi", "col·legi", "collegi"], a: 1 },
          { t: "mc", q: "The ç in «plaça» sounds like…", o: ["s", "k", "ch"], a: 0 },
          { t: "mc", q: "Which accent does the letter a take in Catalan?", o: ["Always grave: à", "Always acute: á", "Both"], a: 0 },
          { t: "mc", q: "Why does «pingüí» have ü?", o: ["To show the u is pronounced", "To mark the stress", "Because it is plural"], a: 0 },
          { t: "fill", q: "Write the Catalan word for 'year' (it has ny):", a: ["any"] },
          { t: "mc", q: "In «cotxe», tx sounds like…", o: ["ch in church", "x in taxi", "sh in shop"], a: 0 },
          { t: "mc", q: "Which has an open e?", o: ["cafè", "també"], a: 0, ex: "Grave è = open; acute é = closed." }
        ]
      },
      {
        title: "Els números i el calendari",
        en: "Numbers, days and months",
        goals: ["Count from 0 to 100", "Say the days of the week and the months", "Say today's date"],
        vocab: [
          ["zero, u, dos, tres", "0, 1, 2, 3"],
          ["quatre, cinc, sis, set", "4, 5, 6, 7"],
          ["vuit, nou, deu", "8, 9, 10"],
          ["onze, dotze, tretze", "11, 12, 13"],
          ["catorze, quinze, setze", "14, 15, 16"],
          ["disset, divuit, dinou", "17, 18, 19"],
          ["vint, trenta, quaranta", "20, 30, 40"],
          ["cinquanta, seixanta, setanta", "50, 60, 70"],
          ["vuitanta, noranta, cent", "80, 90, 100"],
          ["dilluns, dimarts, dimecres", "Monday, Tuesday, Wednesday"],
          ["dijous, divendres", "Thursday, Friday"],
          ["dissabte, diumenge", "Saturday, Sunday"],
          ["gener, febrer, març, abril", "January, February, March, April"],
          ["maig, juny, juliol, agost", "May, June, July, August"],
          ["setembre, octubre", "September, October"],
          ["novembre, desembre", "November, December"],
          ["Quin dia és avui?", "What day is it today?"],
          ["avui, demà, ahir", "today, tomorrow, yesterday"]
        ],
        grammar: [
          {
            h: "Building numbers",
            p: ["From 21 to 29 you join with **-i-**: vint-i-u, vint-i-dos, vint-i-nou.", "From 31 to 99, just a hyphen: trenta-dos, quaranta-cinc, noranta-nou."],
            table: { head: ["Number", "Catalan"], rows: [["21", "vint-i-u (vint-i-un)"], ["25", "vint-i-cinc"], ["32", "trenta-dos"], ["47", "quaranta-set"], ["68", "seixanta-vuit"], ["99", "noranta-nou"]] }
          },
          {
            h: "One and two have a feminine form",
            p: ["**u** is used when counting; before a noun you say **un** (masculine) or **una** (feminine). Two is **dos** (masculine) or **dues** (feminine)."],
            ex: [["un noi, una noia", "a boy, a girl"], ["dos gats, dues gates", "two (male) cats, two (female) cats"], ["vint-i-una persones", "twenty-one people"]]
          },
          {
            h: "Dates",
            p: ["Days and months are written in lowercase. Use **de** before the month, **d'** before a vowel."],
            ex: [["Avui és dilluns, 5 de maig.", "Today is Monday, 5 May."], ["El meu aniversari és el 12 d'octubre.", "My birthday is on 12 October."], ["Els dissabtes vaig al mercat.", "On Saturdays I go to the market."]]
          }
        ],
        fact: "The days of the week come from Latin: dilluns is the Moon's day, dimarts Mars', dimecres Mercury's, dijous Jupiter's, divendres Venus', dissabte the Sabbath and diumenge the Lord's day (dies dominicus).",
        ex: [
          { t: "fill", q: "21 = vint-i-___", a: ["u", "un"] },
          { t: "mc", q: "How do you write 32?", o: ["trenta-dos", "trenta-i-dos", "trenta dos"], a: 0, ex: "Only 21–29 use -i-." },
          { t: "mc", q: "Which is correct?", o: ["dues noies", "dos noies"], a: 0, ex: "Noia is feminine, so: dues." },
          { t: "fill", q: "The day after dilluns is ___.", a: ["dimarts"] },
          { t: "mc", q: "Saturday is…", o: ["dissabte", "diumenge", "divendres"], a: 0 },
          { t: "fill", q: "Avui és el 15 ___ abril.", a: ["d'"], ex: "Before a vowel, de becomes d'." },
          { t: "mc", q: "How do you say 17?", o: ["disset", "setze", "dinou"], a: 0 },
          { t: "mc", q: "Months in Catalan are written…", o: ["in lowercase", "with a capital letter"], a: 0 },
          { t: "order", w: ["Avui", "és", "dijous"], en: "Today is Thursday." },
          { t: "fill", q: "50 = ___", a: ["cinquanta"] }
        ]
      },
      {
        title: "Ser, estar i tenir",
        en: "To be, to be (state) and to have",
        goals: ["Use the subject pronouns", "Conjugate ser, estar, tenir and dir-se", "Talk about your age and job"],
        vocab: [
          ["jo, tu, ell, ella", "I, you, he, she"],
          ["vostè", "you (formal, singular)"],
          ["nosaltres, vosaltres", "we, you (plural)"],
          ["ells, elles, vostès", "they (m.), they (f.), you (formal plural)"],
          ["Quants anys tens?", "How old are you?"],
          ["Tinc trenta anys", "I'm thirty years old"],
          ["A què et dediques?", "What do you do (for a living)?"],
          ["Soc metge / metgessa", "I'm a doctor (m. / f.)"],
          ["professor / professora", "teacher"],
          ["estudiant", "student"],
          ["cansat / cansada", "tired"],
          ["content / contenta", "happy"],
          ["casat / casada", "married"]
        ],
        grammar: [
          {
            h: "The present tense of four key verbs",
            table: { head: ["", "ser (to be)", "estar (to be)", "tenir (to have)", "dir-se (to be called)"], rows: [
              ["jo", "soc", "estic", "tinc", "em dic"],
              ["tu", "ets", "estàs", "tens", "et dius"],
              ["ell / ella / vostè", "és", "està", "té", "es diu"],
              ["nosaltres", "som", "estem", "tenim", "ens diem"],
              ["vosaltres", "sou", "esteu", "teniu", "us dieu"],
              ["ells / elles / vostès", "són", "estan", "tenen", "es diuen"]
            ] }
          },
          {
            h: "Ser or estar?",
            p: ["**Ser**: who or what something is: identity, origin, job, character. **Estar**: temporary states and how you feel.", "For location, Catalan accepts both: «Soc a casa» and «Estic a casa» (I'm at home)."],
            ex: [["La Marta és infermera.", "Marta is a nurse."], ["Estic cansat.", "I'm tired."], ["Som de Porto.", "We're from Porto."]]
          },
          {
            h: "Age uses tenir",
            p: ["Like Portuguese and Spanish, you 'have' years: **Tinc vint-i-cinc anys.**"]
          },
          {
            h: "Subject pronouns are often dropped",
            p: ["The verb ending already tells who is speaking, so «Soc de Lisboa» is more natural than «Jo soc de Lisboa». Use the pronoun for emphasis or contrast."]
          }
        ],
        fact: "Catalan is regulated by the Institut d'Estudis Catalans (founded in 1907). In the Valencian Community, the Acadèmia Valenciana de la Llengua regulates the same language under the name valencià.",
        ex: [
          { t: "fill", q: "Nosaltres ___ de Lleida. (ser)", a: ["som"] },
          { t: "fill", q: "Ells ___ cansats. (estar)", a: ["estan"] },
          { t: "fill", q: "Jo ___ trenta anys. (tenir)", a: ["tinc"] },
          { t: "fill", q: "Ella ___ diu Núria. (dir-se)", a: ["es"] },
          { t: "mc", q: "How do you ask 'How old are you?'", o: ["Quants anys tens?", "Quants anys ets?", "Quin any tens?"], a: 0 },
          { t: "mc", q: "The formal singular 'you' is…", o: ["vostè", "vosaltres", "tu"], a: 0 },
          { t: "fill", q: "Vosaltres ___ estudiants? (ser)", a: ["sou"] },
          { t: "mc", q: "En Marc ___ metge.", o: ["és", "està", "té"], a: 0, ex: "Profession → ser." },
          { t: "order", w: ["Tinc", "dos", "germans"], en: "I have two brothers / siblings." },
          { t: "fill", q: "Tu ___ un gos? (tenir)", a: ["tens"] }
        ]
      },
      {
        title: "Articles, gènere i nombre",
        en: "Articles, gender and plural",
        goals: ["Use el, la, l', els, les and un, una, uns, unes", "Make nouns feminine and plural", "Use the article with people's names"],
        vocab: [
          ["l'home / la dona", "the man / the woman"],
          ["el noi / la noia", "the boy / the girl"],
          ["l'amic / l'amiga", "the friend (m. / f.)"],
          ["la casa / les cases", "the house / the houses"],
          ["el gat / els gats", "the cat / the cats"],
          ["el camió / els camions", "the lorry / the lorries"],
          ["el país / els països", "the country / the countries"],
          ["la universitat", "the university"],
          ["l'aigua", "the water"],
          ["en Pere / la Maria", "Pere / Maria (with personal article)"]
        ],
        grammar: [
          {
            h: "Articles",
            table: { head: ["", "Masculine", "Feminine"], rows: [
              ["the (singular)", "el · l' before a vowel or h", "la · l' before a vowel or h"],
              ["the (plural)", "els", "les"],
              ["a / some", "un / uns", "una / unes"]
            ] },
            p: ["Exception: feminine **la** does not shorten before an unstressed i or u: **la universitat**, **la història**, **la Isabel**."]
          },
          {
            h: "The personal article",
            p: ["People's names usually take an article: **en** for men (l' before a vowel) and **la** for women (l' before a vowel). In the Balearic Islands you will also hear **na** for women."],
            ex: [["En Pere i la Maria són germans.", "Pere and Maria are siblings."], ["L'Anna viu a Vic.", "Anna lives in Vic."]]
          },
          {
            h: "Feminine and plural",
            p: ["Most feminines add **-a**: amic → amiga, nen → nena. Plurals usually add **-s**; feminine -a becomes **-es**, sometimes with a spelling change to keep the sound."],
            table: { head: ["Rule", "Singular", "Plural"], rows: [
              ["add -s", "gat", "gats"],
              ["-a → -es", "casa", "cases"],
              ["-ga → -gues", "amiga", "amigues"],
              ["-ça → -ces", "plaça", "places"],
              ["-ja → -ges", "platja", "platges"],
              ["stressed vowel → -ns", "camió", "camions"],
              ["stressed -s, -x, -ç → -os", "país, peix", "països, peixos"]
            ] }
          }
        ],
        fact: "Putting an article before a person's name (en Marc, la Júlia) is completely normal in Catalan. It sounds friendly, not rude.",
        ex: [
          { t: "mc", q: "___ home", o: ["el", "l'", "la"], a: 1 },
          { t: "mc", q: "___ universitat", o: ["la", "l'"], a: 0, ex: "Feminine la doesn't shorten before an unstressed u." },
          { t: "fill", q: "Plural of «casa»: ___", a: ["cases"] },
          { t: "fill", q: "Plural of «amiga»: ___", a: ["amigues"] },
          { t: "fill", q: "Plural of «camió»: ___", a: ["camions"] },
          { t: "mc", q: "___ Pere ha arribat.", o: ["En", "El", "La"], a: 0 },
          { t: "mc", q: "Plural of «país»:", o: ["països", "paíss", "païses"], a: 0 },
          { t: "fill", q: "Feminine of «noi»: ___", a: ["noia"] },
          { t: "mc", q: "___ aigua", o: ["l'", "la"], a: 0 },
          { t: "fill", q: "Plural of «plaça»: ___", a: ["places"] }
        ]
      },
      {
        title: "La família i els verbs en -ar",
        en: "Family and regular -ar verbs",
        goals: ["Talk about your family", "Conjugate regular -ar verbs in the present", "Make negative sentences and questions"],
        vocab: [
          ["el pare / la mare", "father / mother"],
          ["els pares", "parents"],
          ["el germà / la germana", "brother / sister"],
          ["el fill / la filla", "son / daughter"],
          ["l'avi / l'àvia", "grandfather / grandmother"],
          ["l'oncle / la tia", "uncle / aunt"],
          ["el cosí / la cosina", "cousin (m. / f.)"],
          ["el nebot / la neboda", "nephew / niece"],
          ["el marit / la dona", "husband / wife"],
          ["la parella", "partner, couple"],
          ["parlar, treballar, estudiar", "to speak, to work, to study"],
          ["escoltar, mirar, cantar", "to listen, to watch, to sing"]
        ],
        grammar: [
          {
            h: "Regular -ar verbs: parlar",
            table: { head: ["", "parlar", "treballar"], rows: [
              ["jo", "parlo", "treballo"],
              ["tu", "parles", "treballes"],
              ["ell / ella / vostè", "parla", "treballa"],
              ["nosaltres", "parlem", "treballem"],
              ["vosaltres", "parleu", "treballeu"],
              ["ells / elles / vostès", "parlen", "treballen"]
            ] },
            p: ["The «jo» ending varies by region: **parlo** (Barcelona), **parle** (Valencia), **parl** (Mallorca). All are correct."]
          },
          {
            h: "Negation",
            p: ["Put **no** before the verb: **No parlo alemany.** (I don't speak German.)"]
          },
          {
            h: "Question words",
            table: { head: ["Catalan", "English", "Example"], rows: [
              ["què", "what", "Què estudies?"],
              ["qui", "who", "Qui és aquell noi?"],
              ["on", "where", "On treballes?"],
              ["quan", "when", "Quan arriba el tren?"],
              ["com", "how", "Com et dius?"],
              ["quant / quanta / quants / quantes", "how much / how many", "Quants germans tens?"],
              ["per què", "why", "Per què estudies català?"]
            ] }
          }
        ],
        fact: "«Per què» (why, two words) and «perquè» (because, one word) sound the same: — Per què estudies català? — Perquè m'agrada!",
        ex: [
          { t: "fill", q: "Jo ___ català. (parlar)", a: ["parlo"] },
          { t: "fill", q: "Nosaltres ___ a Girona. (treballar)", a: ["treballem"] },
          { t: "fill", q: "Vosaltres ___ molt. (estudiar)", a: ["estudieu"] },
          { t: "mc", q: "Your mother's brother is your…", o: ["oncle", "tia", "cosí", "nebot"], a: 0 },
          { t: "mc", q: "«La germana» means…", o: ["the sister", "the brother", "the cousin"], a: 0 },
          { t: "fill", q: "Make it negative: ___ parlo anglès.", a: ["No"] },
          { t: "mc", q: "Which question word means 'where'?", o: ["On", "Quan", "Com", "Qui"], a: 0 },
          { t: "order", w: ["Què", "estudies", "tu"], en: "What do you study?" },
          { t: "mc", q: "La mare de la meva mare és la meva…", o: ["àvia", "tia", "cosina"], a: 0 },
          { t: "fill", q: "Ells ___ música. (escoltar)", a: ["escolten"] }
        ]
      },
      {
        title: "Quina hora és?",
        en: "Telling the time",
        goals: ["Ask and say the time", "Use the traditional quarter system", "Talk about parts of the day"],
        vocab: [
          ["Quina hora és?", "What time is it?"],
          ["És la una", "It's one o'clock"],
          ["Són les dues", "It's two o'clock"],
          ["en punt", "o'clock, sharp"],
          ["un quart de…", "a quarter towards… (xx:15)"],
          ["dos quarts de…", "two quarters towards… (xx:30)"],
          ["tres quarts de…", "three quarters towards… (xx:45)"],
          ["A quina hora…?", "At what time…?"],
          ["a les nou", "at nine"],
          ["el matí", "morning"],
          ["el migdia", "midday (around 12–3 pm)"],
          ["la tarda", "afternoon"],
          ["el vespre", "evening"],
          ["la nit", "night"]
        ],
        grammar: [
          {
            h: "Hours",
            p: ["One o'clock is singular: **és la una**. All other hours are plural: **són les dues, són les tres…**"]
          },
          {
            h: "The traditional quarter system",
            p: ["Catalan counts quarters **towards the next hour**. Think of the hour as a cake being eaten: at 8:15 one quarter of the 9 o'clock hour has gone."],
            table: { head: ["Time", "Traditional Catalan", "Also heard"], rows: [
              ["8:00", "són les vuit (en punt)", ""],
              ["8:15", "és un quart de nou", "les vuit i quart"],
              ["8:30", "són dos quarts de nou", "les vuit i mitja"],
              ["8:45", "són tres quarts de nou", "les nou menys quart"],
              ["12:15", "és un quart d'una", "les dotze i quart"],
              ["10:45", "són tres quarts d'onze", "les onze menys quart"]
            ] }
          },
          {
            h: "Minutes in between",
            p: ["Around the quarters you can add or subtract five minutes: **un quart i cinc de nou** (8:20), **dos quarts menys cinc de nou** (8:25). Most people will also understand «les vuit i vint»."]
          }
        ],
        fact: "The quarter system is one of the most typical (and confusing!) features of Catalan. «Dos quarts de deu» is not 10:30 but 9:30.",
        ex: [
          { t: "mc", q: "8:30 in the traditional system:", o: ["dos quarts de nou", "dos quarts de vuit", "un quart de nou"], a: 0 },
          { t: "mc", q: "«Un quart de deu» is…", o: ["9:15", "10:15", "9:45"], a: 0 },
          { t: "mc", q: "«Tres quarts de dues» is…", o: ["1:45", "2:45", "2:15"], a: 0 },
          { t: "fill", q: "1:00 → És ___ una.", a: ["la"] },
          { t: "fill", q: "4:00 → ___ les quatre.", a: ["Són"] },
          { t: "mc", q: "12:15 is…", o: ["un quart d'una", "un quart de dotze"], a: 0 },
          { t: "mc", q: "«El vespre» is…", o: ["the evening", "the morning", "midday"], a: 0 },
          { t: "order", w: ["A", "quina", "hora", "dines"], en: "What time do you have lunch?" },
          { t: "mc", q: "«Són dos quarts de sis» is…", o: ["5:30", "6:30", "6:15"], a: 0 }
        ]
      }
    ]
  },
  {
    id: "b2",
    name: "Bàsic 2",
    tagline: "Everyday life: routines, irregular verbs, shopping, likes, the city and the weather.",
    units: [
      {
        title: "Un dia normal",
        en: "Daily routine and reflexive verbs",
        goals: ["Describe your day", "Use reflexive verbs", "Say how often you do things"],
        vocab: [
          ["despertar-se", "to wake up"],
          ["llevar-se", "to get up"],
          ["dutxar-se", "to shower"],
          ["vestir-se", "to get dressed"],
          ["esmorzar", "to have breakfast"],
          ["dinar", "to have lunch"],
          ["berenar", "to have an afternoon snack"],
          ["sopar", "to have dinner"],
          ["anar a dormir", "to go to bed"],
          ["sempre", "always"],
          ["sovint", "often"],
          ["de vegades", "sometimes"],
          ["no… mai", "never"],
          ["cada dia", "every day"]
        ],
        grammar: [
          {
            h: "Reflexive verbs",
            p: ["Reflexive verbs carry a pronoun that matches the subject. Before a vowel or h, the pronoun shortens: **m'**, **t'**, **s'**."],
            table: { head: ["", "llevar-se", "afaitar-se (to shave)"], rows: [
              ["jo", "em llevo", "m'afaito"],
              ["tu", "et lleves", "t'afaites"],
              ["ell / ella / vostè", "es lleva", "s'afaita"],
              ["nosaltres", "ens llevem", "ens afaitem"],
              ["vosaltres", "us lleveu", "us afaiteu"],
              ["ells / elles / vostès", "es lleven", "s'afaiten"]
            ] }
          },
          {
            h: "How often?",
            p: ["Frequency words usually go at the start or end of the sentence. **Mai** (never) goes with **no**: **No esmorzo mai.** (I never have breakfast.)"],
            ex: [["Sempre em dutxo al matí.", "I always shower in the morning."], ["De vegades sopem fora.", "Sometimes we have dinner out."]]
          }
        ],
        fact: "In Catalonia lunch (dinar) is the main meal, usually between 1:30 and 3 pm, and dinner (sopar) is often at 9 pm or later. The afternoon snack is called berenar.",
        ex: [
          { t: "fill", q: "Jo ___ llevo a les set.", a: ["em"] },
          { t: "fill", q: "Ella ___ dutxa al matí.", a: ["es"] },
          { t: "fill", q: "Nosaltres ___ llevem tard el diumenge.", a: ["ens"] },
          { t: "mc", q: "'To have lunch' is…", o: ["dinar", "sopar", "esmorzar"], a: 0 },
          { t: "mc", q: "«No… mai» means…", o: ["never", "always", "sometimes"], a: 0 },
          { t: "fill", q: "Tu ___ vesteixes molt ràpid.", a: ["et"] },
          { t: "order", w: ["Sempre", "esmorzo", "a", "casa"], en: "I always have breakfast at home." },
          { t: "mc", q: "Jo em ___ a les sis. (despertar-se)", o: ["desperto", "despertes", "desperta"], a: 0 },
          { t: "mc", q: "Before a vowel, «es afaita» becomes…", o: ["s'afaita", "es'afaita", "se afaita"], a: 0 }
        ]
      },
      {
        title: "Verbs en -er, -re, -ir i irregulars",
        en: "Other verb groups and key irregular verbs",
        goals: ["Conjugate -re and -ir verbs", "Use -eix- verbs like llegir", "Use anar, fer, voler, poder and saber"],
        vocab: [
          ["anar", "to go"],
          ["fer", "to do, to make"],
          ["voler", "to want"],
          ["poder", "can, to be able to"],
          ["saber", "to know (a fact)"],
          ["beure", "to drink"],
          ["viure", "to live"],
          ["entendre", "to understand"],
          ["dormir", "to sleep"],
          ["llegir", "to read"],
          ["preferir", "to prefer"],
          ["servir", "to serve"]
        ],
        grammar: [
          {
            h: "-re and -ir verbs",
            table: { head: ["", "perdre (to lose)", "dormir", "llegir (-eix-)"], rows: [
              ["jo", "perdo", "dormo", "llegeixo"],
              ["tu", "perds", "dorms", "llegeixes"],
              ["ell / ella / vostè", "perd", "dorm", "llegeix"],
              ["nosaltres", "perdem", "dormim", "llegim"],
              ["vosaltres", "perdeu", "dormiu", "llegiu"],
              ["ells / elles / vostès", "perden", "dormen", "llegeixen"]
            ] },
            p: ["Most -ir verbs add **-eix-** in the singular and in «ells»: llegir, preferir, servir, vestir, construir."]
          },
          {
            h: "Irregular verbs you will use every day",
            table: { head: ["", "anar", "fer", "voler", "poder", "saber"], rows: [
              ["jo", "vaig", "faig", "vull", "puc", "sé"],
              ["tu", "vas", "fas", "vols", "pots", "saps"],
              ["ell / ella / vostè", "va", "fa", "vol", "pot", "sap"],
              ["nosaltres", "anem", "fem", "volem", "podem", "sabem"],
              ["vosaltres", "aneu", "feu", "voleu", "podeu", "sabeu"],
              ["ells / elles / vostès", "van", "fan", "volen", "poden", "saben"]
            ] }
          },
          {
            h: "More irregular «jo» forms",
            table: { head: ["Verb", "jo", "tu", "ell", "nosaltres", "vosaltres", "ells"], rows: [
              ["beure", "bec", "beus", "beu", "bevem", "beveu", "beuen"],
              ["viure", "visc", "vius", "viu", "vivim", "viviu", "viuen"],
              ["entendre", "entenc", "entens", "entén", "entenem", "enteneu", "entenen"]
            ] }
          }
        ],
        fact: "«Fer» is everywhere in Catalan: fer un cafè (have a coffee), fer vacances (be on holiday), fer fred (be cold weather) and fer-la petar (have a good chat).",
        ex: [
          { t: "fill", q: "Jo ___ al cinema. (anar)", a: ["vaig"] },
          { t: "fill", q: "Què ___ tu? (fer)", a: ["fas"] },
          { t: "fill", q: "Jo no ___ venir. (poder)", a: ["puc"] },
          { t: "fill", q: "Jo ___ un cafè, si us plau. (voler)", a: ["vull"] },
          { t: "fill", q: "Ells ___ a Tarragona. (viure)", a: ["viuen"] },
          { t: "fill", q: "Jo ___ el diari cada dia. (llegir)", a: ["llegeixo"] },
          { t: "mc", q: "Jo no ho ___. (saber)", o: ["sé", "sap", "saps"], a: 0 },
          { t: "mc", q: "Jo ___ aigua. (beure)", o: ["bec", "beu", "bevo"], a: 0 },
          { t: "mc", q: "Tu ___ el català? (entendre)", o: ["entens", "entén", "entenc"], a: 0 },
          { t: "fill", q: "Nosaltres ___ vuit hores. (dormir)", a: ["dormim"] }
        ]
      },
      {
        title: "Al mercat",
        en: "Shopping and food",
        goals: ["Buy food at the market", "Ask for prices and quantities", "Use this / that (aquest, aquell)"],
        vocab: [
          ["Quant costa? / Quant val?", "How much is it?"],
          ["Em posa…?", "Can I have…? (at a shop)"],
          ["Alguna cosa més?", "Anything else?"],
          ["Res més, gràcies", "Nothing else, thanks"],
          ["el pa", "bread"],
          ["la llet", "milk"],
          ["el formatge", "cheese"],
          ["el pernil", "ham"],
          ["els ous", "eggs"],
          ["la poma / la taronja", "apple / orange"],
          ["el tomàquet / la ceba", "tomato / onion"],
          ["la patata", "potato"],
          ["un quilo / mig quilo", "a kilo / half a kilo"],
          ["una dotzena", "a dozen"],
          ["una ampolla / un paquet", "a bottle / a packet"]
        ],
        grammar: [
          {
            h: "This and that",
            table: { head: ["", "Masc. sing.", "Fem. sing.", "Masc. pl.", "Fem. pl."], rows: [
              ["this / these (here)", "aquest", "aquesta", "aquests", "aquestes"],
              ["that / those (there)", "aquell", "aquella", "aquells", "aquelles"]
            ] },
            p: ["For things without a noun, use **això** (this) and **allò** (that): **Què és això?**"]
          },
          {
            h: "Hundreds",
            p: ["Hundreds agree with feminine nouns: **dos-cents euros**, **dues-centes persones**. 1,000 is **mil**."],
            table: { head: ["Number", "Catalan"], rows: [["100", "cent"], ["200", "dos-cents / dues-centes"], ["300", "tres-cents"], ["500", "cinc-cents"], ["1.000", "mil"], ["2.500", "dos mil cinc-cents"]] }
          },
          {
            h: "First look at «en»",
            p: ["When you talk about a quantity of something already mentioned, use **en** instead of repeating the noun."],
            ex: [["— Quantes pomes vol? — En vull tres.", "— How many apples do you want? — I want three (of them)."]]
          }
        ],
        fact: "La Boqueria market in Barcelona was first mentioned in 1217, when it was an open-air market outside the city walls.",
        ex: [
          { t: "mc", q: "___ pomes (these)", o: ["Aquestes", "Aquests", "Aquelles"], a: 0 },
          { t: "mc", q: "___ formatge (that, over there)", o: ["Aquell", "Aquella", "Aquest"], a: 0 },
          { t: "fill", q: "How much is it? → Quant ___?", a: ["costa", "val"] },
          { t: "mc", q: "«Una dotzena d'ous» is…", o: ["12 eggs", "10 eggs", "2 eggs"], a: 0 },
          { t: "fill", q: "200 euros = dos-___ euros", a: ["cents"] },
          { t: "mc", q: "Polite way to ask in a shop:", o: ["Em posa un quilo de tomàquets?", "Tinc un quilo de tomàquets.", "Soc un quilo de tomàquets."], a: 0 },
          { t: "fill", q: "— Vol pomes? — Sí, ___ vull dues.", a: ["en"] },
          { t: "mc", q: "«Res més, gràcies» means…", o: ["Nothing else, thanks", "Anything else?", "Thanks a lot"], a: 0 },
          { t: "mc", q: "Què és ___? (this thing here)", o: ["això", "allò", "aquest"], a: 0 },
          { t: "fill", q: "Dues-___ persones (200 people)", a: ["centes"] }
        ]
      },
      {
        title: "M'agrada!",
        en: "Likes and dislikes",
        goals: ["Say what you like and don't like", "Use indirect object pronouns", "Agree and disagree: també, tampoc"],
        vocab: [
          ["m'agrada", "I like (one thing / an action)"],
          ["m'agraden", "I like (several things)"],
          ["m'encanta", "I love it"],
          ["no m'agrada gens", "I don't like it at all"],
          ["prefereixo", "I prefer"],
          ["ballar, cuinar, viatjar", "to dance, to cook, to travel"],
          ["llegir, córrer, nedar", "to read, to run, to swim"],
          ["el futbol, la música", "football, music"],
          ["les pel·lícules", "films"],
          ["A mi també", "Me too"],
          ["A mi tampoc", "Me neither"]
        ],
        grammar: [
          {
            h: "Agradar works backwards",
            p: ["The thing you like is the subject. Use **agrada** for one thing or an action (infinitive), **agraden** for several things."],
            table: { head: ["", "Pronoun", "One thing / verb", "Several things"], rows: [
              ["(a mi)", "m'", "m'agrada el cafè", "m'agraden els gats"],
              ["(a tu)", "t'", "t'agrada ballar", "t'agraden les pel·lícules"],
              ["(a ell / ella / vostè)", "li", "li agrada la música", "li agraden els llibres"],
              ["(a nosaltres)", "ens", "ens agrada viatjar", "ens agraden les platges"],
              ["(a vosaltres)", "us", "us agrada cuinar", "us agraden els concerts"],
              ["(a ells / elles / vostès)", "els", "els agrada el futbol", "els agraden els animals"]
            ] }
          },
          {
            h: "Reacting",
            table: { head: ["They say", "You agree", "You disagree"], rows: [
              ["M'agrada el mar.", "A mi també.", "A mi no."],
              ["No m'agrada el fred.", "A mi tampoc.", "A mi sí."]
            ] }
          }
        ],
        fact: "Before eating, Catalans say «Bon profit!», the equivalent of 'Enjoy your meal!' or Portuguese «Bom proveito!».",
        ex: [
          { t: "mc", q: "M'___ les pel·lícules.", o: ["agraden", "agrada"], a: 0 },
          { t: "mc", q: "M'___ ballar.", o: ["agrada", "agraden"], a: 0, ex: "Infinitives take the singular." },
          { t: "fill", q: "A ella ___ agrada el futbol.", a: ["li"] },
          { t: "fill", q: "A nosaltres ___ agrada viatjar.", a: ["ens"] },
          { t: "mc", q: "— No m'agrada el fred. — A mi ___. (me neither)", o: ["tampoc", "també"], a: 0 },
          { t: "mc", q: "— M'agrada la música. — A mi ___. (me too)", o: ["també", "tampoc"], a: 0 },
          { t: "fill", q: "A vosaltres ___ agraden els gats?", a: ["us"] },
          { t: "order", w: ["Ens", "agrada", "molt", "cuinar"], en: "We really like cooking." },
          { t: "fill", q: "Als meus pares ___ agrada caminar.", a: ["els"] }
        ]
      },
      {
        title: "La casa i la ciutat",
        en: "Home, the city and places",
        goals: ["Describe your home", "Say where things are", "Use hi ha and the contractions al, del, pel"],
        vocab: [
          ["la cuina", "kitchen"],
          ["el menjador", "dining room"],
          ["la sala d'estar", "living room"],
          ["l'habitació", "bedroom, room"],
          ["el bany", "bathroom"],
          ["el pis", "flat, apartment"],
          ["el carrer / la plaça", "street / square"],
          ["el banc / la farmàcia", "bank / pharmacy"],
          ["l'estació", "station"],
          ["a prop de / lluny de", "near / far from"],
          ["davant de / darrere de", "in front of / behind"],
          ["al costat de", "next to"],
          ["entre", "between"],
          ["a dalt / a baix", "upstairs / downstairs"]
        ],
        grammar: [
          {
            h: "Hi ha: there is, there are",
            p: ["**Hi ha** never changes, even with plurals: **Hi ha dues farmàcies.** («Hi han» is a common mistake.)"]
          },
          {
            h: "Contractions",
            table: { head: ["", "+ el", "+ els"], rows: [
              ["a", "al", "als"],
              ["de", "del", "dels"],
              ["per", "pel", "pels"]
            ] },
            p: ["No contraction with la, les or l': **a la plaça**, **de l'estació**."],
            ex: [["Vaig al mercat.", "I'm going to the market."], ["La casa del meu germà.", "My brother's house."], ["Passegem pel parc.", "We walk through the park."]]
          }
        ],
        fact: "Barcelona's Eixample, designed by Ildefons Cerdà in 1859, has blocks with cut corners called xamfrans, so drivers can see round the corner.",
        ex: [
          { t: "fill", q: "Vaig ___ cinema. (a + el)", a: ["al"] },
          { t: "fill", q: "La casa ___ meu germà. (de + el)", a: ["del"] },
          { t: "mc", q: "There is a bank → ___ un banc.", o: ["Hi ha", "Hi han", "És"], a: 0 },
          { t: "mc", q: "Which is correct?", o: ["Hi ha dues farmàcies.", "Hi han dues farmàcies."], a: 0 },
          { t: "mc", q: "«A prop de» means…", o: ["near", "far from", "behind"], a: 0 },
          { t: "fill", q: "Passem ___ parc. (per + el)", a: ["pel"] },
          { t: "mc", q: "Where do you cook?", o: ["a la cuina", "al bany", "al menjador"], a: 0 },
          { t: "order", w: ["El", "banc", "és", "al", "costat", "de", "la", "farmàcia"], en: "The bank is next to the pharmacy." },
          { t: "mc", q: "Vinc ___ estació.", o: ["de l'", "del", "dels"], a: 0 }
        ]
      },
      {
        title: "El temps, la roba i els possessius",
        en: "Weather, clothes and possessives",
        goals: ["Talk about the weather and seasons", "Describe clothes and colours", "Use possessives: el meu, la teva…"],
        vocab: [
          ["Quin temps fa?", "What's the weather like?"],
          ["fa sol / fa calor / fa fred", "it's sunny / hot / cold"],
          ["fa vent", "it's windy"],
          ["plou / neva", "it's raining / snowing"],
          ["està ennuvolat", "it's cloudy"],
          ["la primavera, l'estiu", "spring, summer"],
          ["la tardor, l'hivern", "autumn, winter"],
          ["la samarreta, la camisa", "T-shirt, shirt"],
          ["els pantalons, la faldilla", "trousers, skirt"],
          ["la jaqueta, l'abric", "jacket, coat"],
          ["les sabates, els mitjons", "shoes, socks"],
          ["blanc, negre, vermell", "white, black, red"],
          ["groc, blau, verd, gris", "yellow, blue, green, grey"]
        ],
        grammar: [
          {
            h: "Weather with fer",
            p: ["Most weather expressions use **fer**: fa sol, fa calor, fa fred, fa vent, fa bon temps, fa mal temps. Rain and snow are verbs: **plou**, **neva**.", "For people, use tenir: **Tinc fred.** (I'm cold.)"]
          },
          {
            h: "Colours agree",
            table: { head: ["Masculine", "Feminine", "Plural (m. / f.)"], rows: [
              ["blanc", "blanca", "blancs / blanques"],
              ["negre", "negra", "negres / negres"],
              ["vermell", "vermella", "vermells / vermelles"],
              ["groc", "groga", "grocs / grogues"],
              ["blau", "blava", "blaus / blaves"],
              ["gris", "grisa", "grisos / grises"]
            ] }
          },
          {
            h: "Possessives",
            p: ["Possessives agree with the thing owned and normally go with the article."],
            table: { head: ["Owner", "Masc. sing.", "Fem. sing.", "Masc. pl.", "Fem. pl."], rows: [
              ["my", "el meu", "la meva", "els meus", "les meves"],
              ["your (tu)", "el teu", "la teva", "els teus", "les teves"],
              ["his / her / your (vostè)", "el seu", "la seva", "els seus", "les seves"],
              ["our", "el nostre", "la nostra", "els nostres", "les nostres"],
              ["your (vosaltres)", "el vostre", "la vostra", "els vostres", "les vostres"],
              ["their", "el seu", "la seva", "els seus", "les seves"]
            ] }
          }
        ],
        fact: "«Ploure a bots i barrals» is how Catalans say 'rain cats and dogs': literally, to rain wineskins and barrels.",
        ex: [
          { t: "mc", q: "It's raining:", o: ["Plou", "Fa pluja", "Està plou"], a: 0 },
          { t: "mc", q: "It's cold (weather):", o: ["Fa fred", "És fred", "Té fred"], a: 0 },
          { t: "fill", q: "Una camisa ___ (groc)", a: ["groga"] },
          { t: "fill", q: "Una faldilla ___ (blau)", a: ["blava"] },
          { t: "mc", q: "my books:", o: ["els meus llibres", "les meves llibres", "el meu llibres"], a: 0 },
          { t: "fill", q: "la ___ mare (my)", a: ["meva"] },
          { t: "mc", q: "Autumn is…", o: ["la tardor", "l'hivern", "la primavera"], a: 0 },
          { t: "mc", q: "our house:", o: ["la nostra casa", "el nostre casa", "les nostres casa"], a: 0 },
          { t: "mc", q: "I'm cold (my body):", o: ["Tinc fred", "Fa fred", "Soc fred"], a: 0 },
          { t: "fill", q: "Les sabates ___ (negre)", a: ["negres"] }
        ]
      }
    ]
  },
  {
    id: "b3",
    name: "Bàsic 3",
    tagline: "Past and future, directions, health, comparisons and the pronouns en and hi. Ready for the A2 certificate.",
    units: [
      {
        title: "Ahir: el passat perifràstic",
        en: "Talking about the past (I went, I did)",
        goals: ["Tell what you did yesterday, last week or last year", "Use the periphrastic past vaig + infinitive"],
        vocab: [
          ["ahir", "yesterday"],
          ["abans-d'ahir", "the day before yesterday"],
          ["la setmana passada", "last week"],
          ["el mes passat", "last month"],
          ["l'any passat", "last year"],
          ["dilluns passat", "last Monday"],
          ["fa dos dies", "two days ago"],
          ["aquell dia", "that day"],
          ["després", "afterwards"],
          ["primer… després… al final", "first… then… in the end"]
        ],
        grammar: [
          {
            h: "Periphrastic past: vaig + infinitive",
            p: ["This is the everyday past for finished actions. It looks like «anar» in the present, but it means the past!"],
            table: { head: ["", "anar (aux.)", "+ infinitive", "Meaning"], rows: [
              ["jo", "vaig", "parlar", "I spoke"],
              ["tu", "vas", "menjar", "you ate"],
              ["ell / ella / vostè", "va", "venir", "he / she came"],
              ["nosaltres", "vam (vàrem)", "viatjar", "we travelled"],
              ["vosaltres", "vau (vàreu)", "dormir", "you slept"],
              ["ells / elles / vostès", "van (varen)", "sortir", "they went out"]
            ] }
          },
          {
            h: "Watch out!",
            p: ["**Vaig parlar** means 'I spoke', not 'I'm going to speak'. To talk about the future, use the future tense (Bàsic 3, unit 3)."]
          },
          {
            h: "With pronouns",
            p: ["Reflexive pronouns go before the auxiliary: **Em vaig llevar tard.** (I got up late.)"]
          }
        ],
        fact: "The periphrastic past is a hallmark of Catalan. In Valencia and the Balearic Islands you'll also hear a simple past, like «parlí» (I spoke).",
        ex: [
          { t: "fill", q: "Ahir jo ___ treballar molt.", a: ["vaig"] },
          { t: "fill", q: "Nosaltres ___ anar a la platja.", a: ["vam", "vàrem"] },
          { t: "fill", q: "Ells ___ sopar tard.", a: ["van", "varen"] },
          { t: "mc", q: "«Vaig menjar» means…", o: ["I ate", "I'm going to eat", "I eat"], a: 0 },
          { t: "mc", q: "Which time marker goes with the periphrastic past?", o: ["ahir", "avui", "demà"], a: 0 },
          { t: "fill", q: "Tu ___ venir a la festa?", a: ["vas"] },
          { t: "order", w: ["L'any", "passat", "vam", "viatjar", "a", "Itàlia"], en: "Last year we travelled to Italy." },
          { t: "mc", q: "«Fa tres dies» means…", o: ["three days ago", "in three days", "for three days"], a: 0 },
          { t: "order", w: ["Em", "vaig", "llevar", "molt", "tard"], en: "I got up very late." }
        ]
      },
      {
        title: "Avui he fet…: el perfet",
        en: "The present perfect (I have done)",
        goals: ["Talk about today, this week and life experiences", "Form participles", "Choose between perfet and perifràstic"],
        vocab: [
          ["avui", "today"],
          ["aquest matí", "this morning"],
          ["aquesta setmana", "this week"],
          ["aquest any", "this year"],
          ["ja", "already"],
          ["encara no", "not yet"],
          ["mai", "ever / never"],
          ["alguna vegada", "ever, at some point"]
        ],
        grammar: [
          {
            h: "haver + participle",
            table: { head: ["", "haver", "example"], rows: [
              ["jo", "he", "he parlat"],
              ["tu", "has", "has menjat"],
              ["ell / ella / vostè", "ha", "ha dormit"],
              ["nosaltres", "hem", "hem perdut"],
              ["vosaltres", "heu", "heu vist"],
              ["ells / elles / vostès", "han", "han fet"]
            ] }
          },
          {
            h: "Participles",
            p: ["Regular: **-ar → -at** (parlat), **-er/-re → -ut** (perdut), **-ir → -it** (dormit)."],
            table: { head: ["Verb", "Participle", "Verb", "Participle"], rows: [
              ["fer", "fet", "tenir", "tingut"],
              ["dir", "dit", "venir", "vingut"],
              ["veure", "vist", "beure", "begut"],
              ["escriure", "escrit", "viure", "viscut"],
              ["ser", "estat", "obrir", "obert"]
            ] }
          },
          {
            h: "Perfet or perifràstic?",
            p: ["Use the **perfet** for time that is not over yet (today, this week, this year) and for experiences without a date. Use the **perifràstic** for finished time (yesterday, last year, in 2020)."],
            ex: [["Aquest matí he esmorzat a les vuit.", "This morning I had breakfast at eight."], ["Ahir vaig esmorzar a les nou.", "Yesterday I had breakfast at nine."], ["Has estat mai a Menorca?", "Have you ever been to Menorca?"]]
          }
        ],
        fact: "Ramon Llull (c. 1232–1316), from Mallorca, wrote philosophy, science and novels in Catalan, at a time when such works were almost always written in Latin.",
        ex: [
          { t: "fill", q: "Avui ___ parlat amb la Marta. (jo)", a: ["he"] },
          { t: "fill", q: "Participle of «fer»: ___", a: ["fet"] },
          { t: "fill", q: "Participle of «veure»: ___", a: ["vist"] },
          { t: "fill", q: "Participle of «tenir»: ___", a: ["tingut"] },
          { t: "mc", q: "Aquest matí ___ esmorzat a les vuit.", o: ["he", "vaig"], a: 0, ex: "This morning = time not over → perfet." },
          { t: "mc", q: "Ja ___ dinat? (vosaltres)", o: ["heu", "han", "hem"], a: 0 },
          { t: "mc", q: "Ahir ___ al cinema.", o: ["vaig anar", "he anat"], a: 0, ex: "Ahir = finished time → perifràstic." },
          { t: "fill", q: "Participle of «escriure»: ___", a: ["escrit"] },
          { t: "order", w: ["Encara", "no", "he", "acabat"], en: "I haven't finished yet." }
        ]
      },
      {
        title: "Demà: el futur",
        en: "The future tense",
        goals: ["Talk about plans and predictions", "Form the regular and irregular future"],
        vocab: [
          ["demà", "tomorrow"],
          ["demà passat", "the day after tomorrow"],
          ["la setmana que ve", "next week"],
          ["l'any que ve", "next year"],
          ["d'aquí a dos dies", "in two days"],
          ["potser", "maybe"],
          ["segurament", "probably"],
          ["les vacances", "holidays"]
        ],
        grammar: [
          {
            h: "Regular future: infinitive + ending",
            table: { head: ["", "parlar", "perdre", "dormir"], rows: [
              ["jo", "parlaré", "perdré", "dormiré"],
              ["tu", "parlaràs", "perdràs", "dormiràs"],
              ["ell / ella / vostè", "parlarà", "perdrà", "dormirà"],
              ["nosaltres", "parlarem", "perdrem", "dormirem"],
              ["vosaltres", "parlareu", "perdreu", "dormireu"],
              ["ells / elles / vostès", "parlaran", "perdran", "dormiran"]
            ] }
          },
          {
            h: "Irregular stems",
            table: { head: ["Verb", "jo", "Verb", "jo"], rows: [
              ["fer", "faré", "anar", "aniré"],
              ["tenir", "tindré", "venir", "vindré"],
              ["voler", "voldré", "poder", "podré"],
              ["saber", "sabré", "ser", "seré"]
            ] }
          },
          {
            h: "Don't use «anar a» for the future",
            p: ["In standard Catalan, **vaig a fer** is not a future: it would be understood as a Spanish calque. Say **faré** or simply use the present: **Demà et truco.** (I'll call you tomorrow.)"]
          }
        ],
        fact: "Tirant lo Blanc, a Catalan novel of chivalry by Joanot Martorell published in Valencia in 1490, is praised in Don Quixote as 'the best book in the world' for its style.",
        ex: [
          { t: "fill", q: "Demà jo ___ amb tu. (parlar)", a: ["parlaré"] },
          { t: "fill", q: "L'any que ve ells ___ a Mallorca. (anar)", a: ["aniran"] },
          { t: "fill", q: "Nosaltres ___ una festa. (fer)", a: ["farem"] },
          { t: "mc", q: "Future of tenir (jo):", o: ["tindré", "teniré", "tenré"], a: 0 },
          { t: "mc", q: "Standard Catalan for 'I'll call you tomorrow':", o: ["Demà et trucaré.", "Demà vaig a trucar-te."], a: 0, ex: "«Vaig a + infinitive» is not used for the future." },
          { t: "mc", q: "«La setmana que ve» means…", o: ["next week", "last week", "this week"], a: 0 },
          { t: "fill", q: "Tu ___ venir dissabte? (poder)", a: ["podràs"] },
          { t: "order", w: ["Demà", "plourà", "a", "Barcelona"], en: "Tomorrow it will rain in Barcelona." },
          { t: "fill", q: "Vosaltres ___ a les vuit. (venir)", a: ["vindreu"] }
        ]
      },
      {
        title: "Viatges i direccions",
        en: "Travel, transport and directions",
        goals: ["Ask for and give directions", "Use the imperative", "Talk about means of transport"],
        vocab: [
          ["Perdoni, on és…?", "Excuse me, where is…?"],
          ["gira a la dreta / a l'esquerra", "turn right / left"],
          ["segueix tot recte", "go straight on"],
          ["travessa el carrer", "cross the street"],
          ["agafa la segona", "take the second (street)"],
          ["la cantonada", "the corner"],
          ["el semàfor", "the traffic light"],
          ["amb tren / amb autobús", "by train / by bus"],
          ["amb metro / amb cotxe", "by metro / by car"],
          ["a peu", "on foot"],
          ["el bitllet (d'anada i tornada)", "(return) ticket"],
          ["l'andana", "platform"]
        ],
        grammar: [
          {
            h: "The imperative",
            table: { head: ["", "girar", "seguir", "travessar"], rows: [
              ["tu", "gira", "segueix", "travessa"],
              ["vostè", "giri", "segueixi", "travessi"],
              ["vosaltres", "gireu", "seguiu", "travesseu"],
              ["vostès", "girin", "segueixin", "travessin"]
            ] }
          },
          {
            h: "Common irregular imperatives (tu)",
            table: { head: ["Verb", "tu", "Verb", "tu"], rows: [
              ["venir", "vine", "anar", "ves"],
              ["fer", "fes", "dir", "digues"],
              ["tenir", "tingues", "ser", "sigues"]
            ] }
          },
          {
            h: "Transport",
            p: ["Use **amb** (also **en**) for vehicles: amb tren, amb bicicleta. But on foot is **a peu**."]
          }
        ],
        fact: "The Camí de Ronda is a network of old coastal paths along the Costa Brava, once walked by guards watching for smugglers and now popular hiking trails.",
        ex: [
          { t: "mc", q: "Turn right (tu):", o: ["Gira a la dreta", "Gira a l'esquerra", "Segueix tot recte"], a: 0 },
          { t: "fill", q: "___ més a poc a poc, si us plau! (parlar, tu)", a: ["Parla"] },
          { t: "fill", q: "Nois, ___ això! (mirar, vosaltres)", a: ["mireu"] },
          { t: "mc", q: "Imperative tu of «venir»:", o: ["vine", "vén", "venis"], a: 0 },
          { t: "mc", q: "Imperative tu of «fer»:", o: ["fes", "fa", "faig"], a: 0 },
          { t: "mc", q: "«Segueix tot recte» means…", o: ["go straight on", "turn back", "stop here"], a: 0 },
          { t: "mc", q: "On foot:", o: ["a peu", "amb peu", "en peus"], a: 0 },
          { t: "fill", q: "Senyora, ___ a la dreta, si us plau. (girar, vostè)", a: ["giri"] },
          { t: "order", w: ["Agafa", "la", "segona", "a", "l'esquerra"], en: "Take the second on the left." }
        ]
      },
      {
        title: "La salut",
        en: "Health, the body and obligation",
        goals: ["Say what hurts", "Go to the doctor or pharmacy", "Express obligation: haver de, cal"],
        vocab: [
          ["el cap", "head"],
          ["el coll", "neck, throat"],
          ["l'esquena", "back"],
          ["la panxa", "belly, tummy"],
          ["el braç / la mà", "arm / hand"],
          ["la cama / el peu", "leg / foot"],
          ["l'ull / l'orella", "eye / ear"],
          ["la boca / les dents", "mouth / teeth"],
          ["el metge / la metgessa", "doctor (m. / f.)"],
          ["la farmàcia", "pharmacy"],
          ["la febre / la tos", "fever / cough"],
          ["estar refredat", "to have a cold"],
          ["la recepta", "prescription"]
        ],
        grammar: [
          {
            h: "Em fa mal…",
            p: ["Like agradar, the body part is the subject: **fa mal** for one, **fan mal** for several."],
            ex: [["Em fa mal el cap.", "I have a headache."], ["Em fan mal els peus.", "My feet hurt."], ["Li fa mal l'esquena.", "His / her back hurts."]]
          },
          {
            h: "Obligation",
            table: { head: ["Structure", "Use", "Example"], rows: [
              ["haver de + inf.", "someone has to", "He d'anar al metge."],
              ["cal + inf.", "it's necessary (general)", "Cal beure molta aigua."],
              ["s'ha de + inf.", "one must", "S'ha de descansar."]
            ] },
            p: ["haver de: he de, has de, ha de, hem de, heu de, han de."]
          }
        ],
        fact: "«Estar fet pols» (literally 'to be made of dust') means to be exhausted, and «estar com un llum» ('to be like a lamp') means to be a bit crazy.",
        ex: [
          { t: "mc", q: "Em ___ mal els peus.", o: ["fan", "fa"], a: 0 },
          { t: "mc", q: "Em ___ mal el cap.", o: ["fa", "fan"], a: 0 },
          { t: "fill", q: "Jo ___ d'anar al metge. (haver)", a: ["he"] },
          { t: "fill", q: "Nosaltres ___ de treballar dissabte. (haver)", a: ["hem"] },
          { t: "mc", q: "«Cal beure molta aigua» means…", o: ["It's necessary to drink a lot of water", "I want to drink water", "There is a lot of water"], a: 0 },
          { t: "mc", q: "'Back' (body) is…", o: ["l'esquena", "la panxa", "el coll"], a: 0 },
          { t: "mc", q: "I have a cold:", o: ["Estic refredat", "Soc refredat"], a: 0 },
          { t: "order", w: ["Has", "de", "descansar", "més"], en: "You have to rest more." },
          { t: "fill", q: "A la Laia ___ fa mal la panxa.", a: ["li"] }
        ]
      },
      {
        title: "Comparar i descriure",
        en: "Describing people and comparing",
        goals: ["Describe appearance and character", "Compare: més… que, tan… com", "Use superlatives"],
        vocab: [
          ["alt / baix", "tall / short"],
          ["prim / gros", "thin / fat"],
          ["jove / gran", "young / old"],
          ["ros / morè", "blond / dark-haired"],
          ["els cabells llargs / curts", "long / short hair"],
          ["simpàtic / antipàtic", "nice / unfriendly"],
          ["divertit / avorrit", "fun / boring"],
          ["treballador / mandrós", "hard-working / lazy"],
          ["tímid / obert", "shy / outgoing"],
          ["millor / pitjor", "better / worse"]
        ],
        grammar: [
          {
            h: "Comparatives",
            table: { head: ["Meaning", "Structure", "Example"], rows: [
              ["more… than", "més + adj. + que", "La Marta és més alta que el Pau."],
              ["less… than", "menys + adj. + que", "Aquest pis és menys car que l'altre."],
              ["as… as", "tan + adj. + com", "Ets tan alt com el teu pare."],
              ["as much as", "verb + tant com", "Treballo tant com tu."]
            ] },
            p: ["Irregular: **millor** (better), **pitjor** (worse)."]
          },
          {
            h: "Superlatives",
            p: ["**El més / la més + adjective**: és el més alt de la classe. For 'very very', add **-íssim**: boníssim, altíssima, caríssims."]
          }
        ],
        fact: "To praise something, people often say it is «de categoria» (first-class). Among young people, «brutal» means 'amazing'.",
        ex: [
          { t: "fill", q: "La Marta és ___ alta que el Pau. (more)", a: ["més"] },
          { t: "mc", q: "as tall as:", o: ["tan alt com", "tant alt com", "tan alt que"], a: 0 },
          { t: "mc", q: "'Better' is…", o: ["millor", "pitjor", "més"], a: 0 },
          { t: "fill", q: "Very, very good (bo) → bon___", a: ["íssim"], ex: "Boníssim!" },
          { t: "mc", q: "Opposite of «alt»:", o: ["baix", "prim", "gran"], a: 0 },
          { t: "fill", q: "Feminine of «simpàtic»: ___", a: ["simpàtica"] },
          { t: "mc", q: "'Lazy' is…", o: ["mandrós", "treballador", "divertit"], a: 0 },
          { t: "order", w: ["El", "meu", "germà", "és", "més", "gran", "que", "jo"], en: "My brother is older than me." },
          { t: "mc", q: "Treballo ___ tu.", o: ["tant com", "tan com", "més com"], a: 0 }
        ]
      },
      {
        title: "Els pronoms en i hi",
        en: "The pronouns en and hi",
        goals: ["Replace places with hi", "Replace quantities with en", "Place the pronouns correctly"],
        vocab: [
          ["Hi vaig", "I go there"],
          ["Hi visc", "I live there"],
          ["En tinc dos", "I have two (of them)"],
          ["No en tinc", "I don't have any"],
          ["N'hi ha molts", "There are many (of them)"],
          ["Vull anar-hi", "I want to go there"],
          ["En vull més", "I want more (of it)"]
        ],
        grammar: [
          {
            h: "Hi: there",
            p: ["**Hi** replaces a place introduced by a, en, dins…: — Vas a la platja? — Sí, **hi** vaig."]
          },
          {
            h: "En: of it, of them, some",
            p: ["**En** replaces a noun used with a quantity or without an article: — Tens germans? — Sí, **en** tinc dos. Before a vowel or h it becomes **n'**: **n'he comprat tres**."]
          },
          {
            h: "Position",
            p: ["Before a conjugated verb: **hi vaig**, **en vull**. After an infinitive, joined with a hyphen: **anar-hi**, **comprar-ne**. With a modal verb both work: **Hi vull anar** = **Vull anar-hi**."],
            ex: [["— Hi ha pomes? — Sí, n'hi ha moltes.", "— Are there apples? — Yes, there are many."], ["— Menges carn? — No, no en menjo.", "— Do you eat meat? — No, I don't (eat any)."]]
          }
        ],
        fact: "The pronouns en and hi are a hallmark of Catalan. French has them too (en, y) and Italian has ne and ci, but Spanish and Portuguese don't.",
        ex: [
          { t: "mc", q: "— Vas a la platja? — Sí, ___ vaig.", o: ["hi", "en", "la"], a: 0 },
          { t: "mc", q: "— Tens germans? — Sí, ___ tinc dos.", o: ["en", "hi", "els"], a: 0 },
          { t: "fill", q: "— Quants llibres vols? — ___ vull tres.", a: ["En"] },
          { t: "mc", q: "— Vius a Girona? — Sí, ___ visc.", o: ["hi", "en"], a: 0 },
          { t: "mc", q: "— Hi ha pomes? — Sí, ___ ha moltes.", o: ["n'hi", "hi", "en hi"], a: 0 },
          { t: "mc", q: "Which is correct?", o: ["Vull anar-hi.", "Vull hi anar.", "Vull anar hi."], a: 0, ex: "«Hi vull anar» is also correct." },
          { t: "fill", q: "— Menges carn? — No, no ___ menjo.", a: ["en"] },
          { t: "order", w: ["Demà", "hi", "anirem"], en: "We'll go there tomorrow." },
          { t: "mc", q: "— Has comprat pa? — Sí, ___ he comprat.", o: ["n'", "en", "hi"], a: 0, ex: "Before a vowel or h, en → n'." }
        ]
      }
    ]
  }
];

const HISTORY = [
  { when: "8th–10th c.", title: "A new language is born", text: "Catalan develops from the spoken Latin of the eastern Pyrenees, on both sides of today's French–Spanish border." },
  { when: "c. 1200", title: "The first literary text", text: "The Homilies d'Organyà, a set of sermons, are the oldest known literary text written entirely in Catalan." },
  { when: "13th c.", title: "Jaume I and Ramon Llull", text: "King Jaume I conquers Mallorca (1229) and Valencia (1238), spreading the language south and to the islands. Ramon Llull writes philosophy and novels in Catalan." },
  { when: "14th–15th c.", title: "A Mediterranean language", text: "The Crown of Aragon reaches Sicily, Sardinia and Naples. Catalan settlers arrive in L'Alguer (Sardinia), where it is still spoken. The poet Ausiàs March and the novel Tirant lo Blanc (1490) mark a golden age." },
  { when: "1659", title: "Treaty of the Pyrenees", text: "Northern Catalonia (Roussillon) passes to France. Catalan is still spoken there, around Perpignan." },
  { when: "1707–1716", title: "Nueva Planta decrees", text: "After the War of the Spanish Succession, Valencia, Mallorca and Catalonia lose their institutions and Castilian replaces Catalan in government." },
  { when: "19th c.", title: "La Renaixença", text: "A cultural revival brings Catalan back to literature: the Jocs Florals poetry contests (restored in 1859) and poets like Jacint Verdaguer." },
  { when: "1907–1932", title: "The modern standard", text: "The Institut d'Estudis Catalans is founded (1907). Pompeu Fabra writes the spelling rules (1913), the grammar (1918) and the general dictionary (1932)." },
  { when: "1939–1975", title: "Repression", text: "Under Franco, Catalan is banned from schools, media and public life. It survives at home, in the church and through culture, like the Nova Cançó singers Raimon and Lluís Llach." },
  { when: "1978–1983", title: "Back in public life", text: "Democracy returns. Catalan becomes co-official, the 1983 language law brings it back to schools, and TV3 begins broadcasting." },
  { when: "Today", title: "Around 10 million speakers", text: "Catalan is the only official language of Andorra and co-official in Catalonia, the Valencian Community (as valencià) and the Balearic Islands. It is also spoken in La Franja (Aragon), Northern Catalonia (France), L'Alguer (Italy) and El Carxe (Murcia). A new IEC grammar and spelling update came in 2016–2017." }
];

const FACTS = [
  { title: "A country of its own", text: "Andorra is the only country in the world where Catalan is the sole official language." },
  { title: "Books and roses", text: "On 23 April, Sant Jordi (Saint George's Day), people give each other books and roses. This tradition inspired UNESCO's choice of the date for World Book Day." },
  { title: "Human towers", text: "Castells, towers of people up to ten levels high, were declared UNESCO Intangible Cultural Heritage in 2010. The motto is «força, equilibri, valor i seny» (strength, balance, courage and common sense)." },
  { title: "The Christmas log", text: "At Christmas, children hit the Tió (a log with a face and a blanket) with sticks while singing, and it 'poops out' presents." },
  { title: "The caganer", text: "Catalan nativity scenes hide a little figure called the caganer, a man squatting with his trousers down. Today there are caganers of footballers and politicians." },
  { title: "Its own internet domain", text: "In 2005, .cat became the first internet domain approved for a language and culture community." },
  { title: "An early Wikipedia", text: "The Catalan Wikipedia, Viquipèdia, started in March 2001 and was one of the very first language editions after English." },
  { title: "Déu n'hi do", text: "A hard-to-translate expression of amazement: «Déu n'hi do!» can mean 'Wow!', 'Not bad at all!' or 'That's a lot!' depending on the tone." },
  { title: "Same language, two names", text: "Valencian (valencià) and Catalan are the same language. The Acadèmia Valenciana de la Llengua recognises this, while keeping its own name and some forms." },
  { title: "Bigger than you think", text: "Catalan has more speakers than several official EU languages, such as Danish or Finnish." },
  { title: "Calçotada", text: "In late winter, people grill calçots (long sweet onions) over a fire, peel off the burnt layer and dip them in romesco sauce, wearing a bib." },
  { title: "Fire runs", text: "In a correfoc (fire run), people dressed as devils dance through the streets with fireworks, and brave spectators run under the sparks." },
  { title: "The sardana", text: "The sardana is a circle dance where everyone holds hands. Anyone can join, as long as they count the steps right!" },
  { title: "Catalan in Sardinia", text: "In the Italian city of L'Alguer (Alghero), street signs are in Catalan and Italian. Catalan settlers arrived there in the 14th century." }
];

const EXAM = {
  intro: "The CPNL (Consorci per a la Normalització Lingüística) runs the Bàsic 1, 2 and 3 courses. Together they cover level A2 of the Common European Framework. If you pass the final exam of Bàsic 3, you get the Certificat de nivell bàsic de català (A2), your first official certificate. You can also take the official A2 exam on its own; check dates and registration on cpnl.cat and llengua.gencat.cat.",
  parts: [
    { title: "Comprensió oral", en: "Listening", text: "Short dialogues, announcements and messages. Listen for numbers, times, places and what people want." },
    { title: "Comprensió escrita", en: "Reading", text: "Notices, short emails, ads and simple texts. Find specific information and the main idea." },
    { title: "Expressió escrita", en: "Writing", text: "A short message, email or note: invite a friend, describe your weekend, answer an ad." },
    { title: "Expressió oral", en: "Speaking", text: "Introduce yourself and talk with the examiner or another candidate about everyday topics." }
  ],
  cando: [
    "Introduce myself and others, and ask basic personal questions",
    "Tell the time (traditional quarters too) and talk about dates",
    "Describe my daily routine, my home and my family",
    "Buy things, ask prices and order in a bar or restaurant",
    "Say what I like and don't like, and agree or disagree",
    "Ask for and understand directions in the street",
    "Talk about what I did (vaig fer, he fet) and what I will do (faré)",
    "Explain a simple health problem at the doctor or pharmacy",
    "Use en and hi in short answers",
    "Write a short email or message to a friend"
  ],
  tips: [
    "Practise the quarter system until it's automatic: it almost always shows up in listening.",
    "Learn the irregular «jo» forms by heart: vaig, faig, vull, puc, sé, tinc, bec, visc, entenc.",
    "In writing, check accents and the personal article (en Pere, la Maria).",
    "Don't use «vaig a + infinitive» for the future: say faré or use the present.",
    "In the speaking test, it's fine to ask «Com? Pot repetir, si us plau?»"
  ]
};
