const STORAGE_KEY = "prof_riasec_v1";
const HERO_IMG =
  "https://www.figma.com/api/mcp/asset/40734e31-e6d7-4208-b341-d5ca01c1dfa1";

const state = {
  lang: "kk",
  questions: null,
  catalog: null,
  answers: [],
  startedAt: null,
  profile: { firstName: "", lastName: "", grade: "10" }
};

const i18n = {
  kk: {
    nav_home: "Басты бет",
    nav_about: "Тест туралы",
    nav_start: "Тестті бастау",
    nav_catalog: "Мамандықтар",
    nav_schools: "Оқу орындары",
    nav_riasec: "RIASEC",
    nav_contact: "Байланыс",
    footer_copy: "© 2025 МамандықТест — Барлық құқықтар қорғалған",
    footer_contact: "Байланыс",
    footer_privacy: "Құпиялылық",
    footer_note:
      "Бұл сайт – бағыт беретін құрал. Нақты шешім қабылдағанда мұғалім/ата-ана/тәлімгермен ақылдасқан дұрыс.",

    home_title: "Өзіңе сәйкес бағытты тап!",
    home_lead:
      "Бұл тест сенің қызығушылығың мен мінезіңе жақын бағыттарды көрсетеді. Дұрыс/қате жоқ — тек өзің сияқты жауап берсең болды.",
    home_pill_1: "8–9 сыныпқа түсінікті",
    home_pill_2: "RIASEC (Holland Code)",
    home_pill_3: "Нәтиже + ұсыныс",
    home_cta_primary: "Тестті бастау",
    home_cta_secondary: "Алдымен оқып алайын",

    about_title: "Бұл тест не үшін керек?",
    about_p1:
      "Мамандық таңдау — бір күнде шешілетін нәрсе емес. Бірақ өзіңді жақсырақ танысаң, таңдау да жеңілдейді.",
    about_p2:
      "RIASEC теориясы адамдардың қызығушылықтарын 6 типке бөледі. Сенің жауаптарыңнан біз ең күшті 2–3 типті табамыз да, соған сай мамандықтар мен оқу орындарын ұсынамыз.",
    about_list_title: "Тестте не болады?",
    about_li_1: "Сұрақтарға шынайы жауап бересің",
    about_li_2: "Әр жауап белгілі бір типке балл қосады",
    about_li_3: "Соңында сенің код шығады (мысалы: IAS)",
    about_motivation:
      "Дайынсың ба? Уайымдама — бұл емтихан емес. Бұл сен туралы кішкентай зерттеу ғана.",
    about_start: "Тестті бастау",

    test_title: "RIASEC тест",
    test_meta: "Сұрақ",
    test_hint: "Қатты ойланып кетпе. Бірінші келген шынайы ой — ең дұрыс.",
    ans_1: "Мүлдем келіспеймін",
    ans_2: "Келіспеймін",
    ans_3: "Білмеймін / орташа",
    ans_4: "Келісемін",
    ans_5: "Толық келісемін",
    btn_back: "Артқа",
    btn_next: "Келесі сұрақ",
    btn_finish: "Нәтижені көру",
    btn_restart: "Қайта тапсыру",

    result_title: "Сенің нәтижең",
    result_code: "Код",
    result_top: "Ең күшті типтер",
    result_map: "Қызығушылық картасы",
    result_reco: "Саған сәйкес мамандықтар",
    result_schools: "Оқу орындары (үлгі)",
    result_pdf: "PDF ретінде сақтау",
    result_note:
      "Нәтиже — бағыт. Егер екі типің жақын шықса, бұл да жақсы: сенде бірнеше жол бар деген сөз.",

    catalog_title: "Мамандықтар",
    schools_title: "Оқу орындары",
    empty_data: "Әзірге дерек аз. Кейін толықтыра аламыз.",

    start_badge: "🚀 Бастамас бұрын",
    start_title: "Сәлем!",
    start_title_accent: "Танысайық",
    start_lead:
      "Тестті бастау үшін аты-жөніңді енгіз. Нәтиже саған жеке дайындалады.",
    label_first: "Атың",
    label_last: "Тегің",
    label_grade: "Сынып",
    ph_first: "Мысалы: Айдос",
    ph_last: "Мысалы: Сейітов",
    ph_grade: "Сыныбыңды таңда",
    grade_9: "9 сынып",
    grade_10: "10 сынып",
    grade_11: "11 сынып",
    start_submit: "Тестті бастау",
    start_duration: "⏱ Тест шамамен 10–15 минут алады",
    start_questions: "сұрақ",
    start_progress_hint: "Өзің туралы → Тест → Нәтиже",
    start_sidebar_title: "🎯 Тест соңында сен білесің:",
    start_sidebar_1: "Саған сәйкес мамандықтарды",
    start_sidebar_2: "Оқу орындарын (колледж, университет)",
    start_sidebar_3: "Болашақта сұранысқа ие салаларды",
    start_riasec_label: "RIASEC БАҒЫТТАРЫ",
    start_social_proof: "10 000+ оқушы тапсырды",
    start_social_sub: "Ғылыми RIASEC теориясына негізделген",
    start_err_name: "Атыңды енгіз"
  },
  ru: {
    nav_home: "Главная",
    nav_about: "О тесте",
    nav_start: "Начать тест",
    nav_catalog: "Профессии",
    nav_schools: "Учебные заведения",
    nav_riasec: "RIASEC",
    nav_contact: "Контакты",
    footer_copy: "© 2025 МамандықТест — Все права защищены",
    footer_contact: "Контакты",
    footer_privacy: "Конфиденциальность",
    footer_note:
      "Этот сайт — инструмент для ориентира. Для важных решений лучше обсудить с учителем/родителями/наставником.",

    home_title: "Найди своё направление!",
    home_lead:
      "Тест покажет направления, которые ближе твоим интересам и характеру. Здесь нет “правильно/неправильно” — просто отвечай честно.",
    home_pill_1: "Понятно для 8–9 класса",
    home_pill_2: "RIASEC (Holland Code)",
    home_pill_3: "Результат + рекомендации",
    home_cta_primary: "Начать тест",
    home_cta_secondary: "Сначала прочитаю",

    about_title: "Зачем нужен этот тест?",
    about_p1:
      "Выбор профессии — не решение за один день. Но если лучше понять себя, выбирать становится легче.",
    about_p2:
      "RIASEC делит интересы на 6 типов. По твоим ответам мы найдём 2–3 самых сильных типа и предложим подходящие профессии и учебные заведения.",
    about_list_title: "Что будет в тесте?",
    about_li_1: "Отвечаешь честно",
    about_li_2: "Каждый ответ добавляет баллы типам",
    about_li_3: "В конце получишь код (например: IAS)",
    about_motivation:
      "Готов(а)? Не переживай — это не экзамен. Это маленькое исследование про тебя.",
    about_start: "Начать тест",

    test_title: "Тест RIASEC",
    test_meta: "Вопрос",
    test_hint: "Не переумывай. Первая честная мысль — обычно самая точная.",
    ans_1: "Совсем не согласен(на)",
    ans_2: "Не согласен(на)",
    ans_3: "Не знаю / средне",
    ans_4: "Согласен(на)",
    ans_5: "Полностью согласен(на)",
    btn_back: "Назад",
    btn_next: "Следующий вопрос",
    btn_finish: "Показать результат",
    btn_restart: "Пройти заново",

    result_title: "Твой результат",
    result_code: "Код",
    result_top: "Самые сильные типы",
    result_map: "Карта интересов",
    result_reco: "Подходящие профессии",
    result_schools: "Учебные заведения (пример)",
    result_pdf: "Сохранить как PDF",
    result_note:
      "Результат — это ориентир. Если два типа близки, это тоже хорошо: значит у тебя несколько вариантов.",

    catalog_title: "Профессии",
    schools_title: "Учебные заведения",
    empty_data: "Данных пока мало. Можно расширить позже.",

    start_badge: "🚀 Перед стартом",
    start_title: "Привет!",
    start_title_accent: "Познакомимся",
    start_lead:
      "Введи имя и фамилию, чтобы начать тест. Результат будет подготовлен лично для тебя.",
    label_first: "Имя",
    label_last: "Фамилия",
    label_grade: "Класс",
    ph_first: "Например: Айдос",
    ph_last: "Например: Сеитов",
    ph_grade: "Выбери класс",
    grade_9: "9 класс",
    grade_10: "10 класс",
    grade_11: "11 класс",
    start_submit: "Начать тест",
    start_duration: "⏱ Тест займёт около 10–15 минут",
    start_questions: "вопросов",
    start_progress_hint: "О себе → Тест → Результат",
    start_sidebar_title: "🎯 После теста ты узнаешь:",
    start_sidebar_1: "Подходящие профессии",
    start_sidebar_2: "Учебные заведения (колледж, университет)",
    start_sidebar_3: "Востребованные направления в будущем",
    start_riasec_label: "НАПРАВЛЕНИЯ RIASEC",
    start_social_proof: "10 000+ учеников прошли тест",
    start_social_sub: "На основе научной теории RIASEC",
    start_err_name: "Введи имя"
  }
};

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
}

function t(key) {
  return i18n[state.lang]?.[key] ?? key;
}

function loadPersisted() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      state.lang = parsed.lang === "ru" ? "ru" : "kk";
      state.answers = Array.isArray(parsed.answers) ? parsed.answers : [];
      state.startedAt = parsed.startedAt ?? null;
      if (parsed.profile && typeof parsed.profile === "object") {
        state.profile = {
          firstName: parsed.profile.firstName ?? "",
          lastName: parsed.profile.lastName ?? "",
          grade: parsed.profile.grade ?? "10"
        };
      }
    }
  } catch {
    // ignore
  }
}

function persist() {
  const payload = {
    lang: state.lang,
    answers: state.answers,
    startedAt: state.startedAt,
    profile: state.profile
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

const FALLBACK_QUESTIONS = {
  version: 1,
  scale: ["R", "I", "A", "S", "E", "C"],
  questions: [
    { id: "q1", type: "R", kk: "Бір нәрсені өз қолыммен құрастырып, жөндеп көргенді ұнатамын.", ru: "Мне нравится собирать и чинить вещи своими руками." },
    { id: "q2", type: "I", kk: "Неге олай болатынын зерттеп, себеп-салдарын түсінгім келеді.", ru: "Мне интересно разбираться, почему так происходит, искать причины." },
    { id: "q3", type: "A", kk: "Мен идея ойлап тауып, оны сурет, мәтін немесе музыка арқылы жеткізгенді жақсы көремін.", ru: "Мне нравится придумывать идеи и выражать их через рисунок, текст или музыку." },
    { id: "q4", type: "S", kk: "Адамдарға көмектескенде өзімді пайдалы сезінемін.", ru: "Мне нравится помогать людям — я чувствую себя полезным." },
    { id: "q5", type: "E", kk: "Бір нәрсені ұйымдастырып, басқаларды қызықтырып, жетелеген ұнайды.", ru: "Мне нравится организовывать и вдохновлять других." },
    { id: "q6", type: "C", kk: "Маған жоспар, тәртіп, нақты ереже болғаны ұнайды.", ru: "Мне нравится, когда есть план, порядок и чёткие правила." },
    { id: "q7", type: "R", kk: "Техника, құрал-сайман, механизмдер туралы видеоларды қызығып көремін.", ru: "Мне интересно смотреть про технику, инструменты и механизмы." },
    { id: "q8", type: "I", kk: "Күрделі есеп/тапсырма болса, оны бөліп-бөліп шешкен ұнайды.", ru: "Мне нравится решать сложные задачи, разбивая их на части." },
    { id: "q9", type: "A", kk: "Дизайн, стиль, әдемілікке мән беремін.", ru: "Мне важны дизайн, стиль и эстетика." },
    { id: "q10", type: "S", kk: "Сөйлесіп, түсіндіріп, біреуді тыңдай алғанды жақсы көремін.", ru: "Мне нравится общаться, объяснять и уметь слушать." },
    { id: "q11", type: "E", kk: "Командада бастамашыл болып, шешім қабылдауға тырысамын.", ru: "В команде я часто проявляю инициативу и принимаю решения." },
    { id: "q12", type: "C", kk: "Кесте, тізім, жүйелеу жұмыстарын істей аламын.", ru: "Мне нравится работать со списками, таблицами и систематизацией." },
    { id: "q13", type: "R", kk: "Спорт, қозғалыс, белсенді жұмыс маған көбірек ұнайды.", ru: "Мне больше нравится активная работа, движение, спорт." },
    { id: "q14", type: "I", kk: "Эксперимент жасап, нәтижесін салыстырған қызық.", ru: "Мне интересно проводить эксперименты и сравнивать результаты." },
    { id: "q15", type: "A", kk: "Бір нәрсеге ерекше көзқараспен қарап, жаңа шешім ұсынғым келеді.", ru: "Мне нравится смотреть нестандартно и предлагать новые решения." },
    { id: "q16", type: "S", kk: "Топта атмосфера жақсы болса, мен одан да жақсы жұмыс істеймін.", ru: "Когда в группе хорошая атмосфера, я работаю лучше." },
    { id: "q17", type: "E", kk: "Сату/жоба/іс бастағанда мақсат қойып, нәтижеге жеткізгім келеді.", ru: "Мне нравится ставить цель и доводить дело до результата (проект/дело/продажи)." },
    { id: "q18", type: "C", kk: "Ереже бойынша жұмыс істесем, қателік аз болады деп ойлаймын.", ru: "Я считаю, что работа по правилам уменьшает ошибки." },
    { id: "q19", type: "R", kk: "Табиғатта, далада немесе шеберханада істейтін жұмыс менікі сияқты.", ru: "Мне ближе работа на природе, в мастерской или “в поле”." },
    { id: "q20", type: "I", kk: "Маған сұрақ қойса, дәлелмен, дерекпен жауап бергім келеді.", ru: "Мне нравится отвечать на вопросы с аргументами и фактами." },
    { id: "q21", type: "A", kk: "Контент түсіру/жазу/монтаждау сияқты істер қызық.", ru: "Мне интересны создание контента: писать, снимать, монтировать." },
    { id: "q22", type: "S", kk: "Достарым кеңес сұраса, көмектесуге дайынмын.", ru: "Если друзья просят совет, я готов помочь." },
    { id: "q23", type: "E", kk: "Пікірталаста өз ойымды сенімді жеткізе аламын.", ru: "Я умею уверенно выражать своё мнение в обсуждении." },
    { id: "q24", type: "C", kk: "Маған ұқыптылық, дәлдік маңызды (құжат, есеп, тапсырма).", ru: "Для меня важны аккуратность и точность (документы, расчёты, задания)." },
    { id: "q25", type: "R", kk: "Қол еңбегі қажет болса (жинау, өлшеу, құрастыру), қиналмаймын.", ru: "Если нужна работа руками (собирать, измерять, делать), мне это нормально." },
    { id: "q26", type: "I", kk: "Мен үшін “неге?” деген сұрақ өте маңызды.", ru: "Для меня очень важен вопрос “почему?”." },
    { id: "q27", type: "A", kk: "Мен еркіндік болғанда (қалай істесем де болады) жақсырақ ашыламын.", ru: "Я раскрываюсь лучше, когда есть свобода и можно делать по-своему." },
    { id: "q28", type: "S", kk: "Мен адамдармен жұмыс істейтін мамандықтарды жиі ойлаймын.", ru: "Мне часто интересны профессии, где работа с людьми." },
    { id: "q29", type: "E", kk: "Мен бір нәрсені алға жылжытып, нәтижені көрсеткенді ұнатамын.", ru: "Мне нравится продвигать дело и показывать результат." },
    { id: "q30", type: "C", kk: "Маған жауапкершілік алып, тәртіппен жұмыс істеген ұнайды.", ru: "Мне нравится брать ответственность и работать дисциплинированно." }
  ]
};

const FALLBACK_CATALOG = {
  version: 1,
  types: {
    R: { kkName: "Realistic (Практик)", ruName: "Realistic (Практик)", kkDesc: "Саған нақты іс, қолмен жасау, техника, қозғалыс жақын. “Көрсет — істеймін” стилі сенің күшің.", ruDesc: "Тебе ближе практика: делать руками, техника, движение. Твоя сила — “покажи, и я сделаю”.", kkStrengths: ["Қол икемі", "Төзімділік", "Техникаға қызығу", "Нақты нәтиже"], ruStrengths: ["Практичность", "Выносливость", "Интерес к технике", "Ориентация на результат"] },
    I: { kkName: "Investigative (Зерттеуші)", ruName: "Investigative (Исследователь)", kkDesc: "Саған ойлану, зерттеу, логика, “неге?” деген сұрақ ұнайды. Қиын нәрсені түсінгенде кайф аласың.", ruDesc: "Тебе нравится анализ, исследования, логика и вопрос “почему?”. Ты кайфуешь, когда понял сложное.", kkStrengths: ["Логика", "Талдау", "Зерттеу", "Дәлелмен ойлау"], ruStrengths: ["Логика", "Аналитика", "Исследования", "Аргументированность"] },
    A: { kkName: "Artistic (Шығармашыл)", ruName: "Artistic (Творческий)", kkDesc: "Саған идея, қиял, стиль, өзінше жасау ұнайды. Еркіндік болса, жақсы ашыласың.", ruDesc: "Тебе ближе идеи, фантазия, стиль и самовыражение. Ты лучше раскрываешься в свободе.", kkStrengths: ["Қиял", "Креатив", "Эстетика", "Өзін-өзі көрсету"], ruStrengths: ["Воображение", "Креатив", "Эстетика", "Самовыражение"] },
    S: { kkName: "Social (Көмекші)", ruName: "Social (Социальный)", kkDesc: "Саған адамдармен жұмыс, түсіндіру, көмектесу, қолдау көрсету жақын. Сен “адамдар энергиясынан” қуат аласың.", ruDesc: "Тебе близка работа с людьми: объяснять, помогать, поддерживать. Ты заряжаешься от общения.", kkStrengths: ["Эмпатия", "Коммуникация", "Сабыр", "Түсіндіру"], ruStrengths: ["Эмпатия", "Коммуникация", "Терпение", "Умение объяснять"] },
    E: { kkName: "Enterprising (Көшбасшы)", ruName: "Enterprising (Предпринимательский)", kkDesc: "Саған ұйымдастыру, сендіру, бастама, мақсат қою ұнайды. “Жүр, жасайық!” деген адамсың.", ruDesc: "Тебе нравится организовывать, убеждать, брать инициативу и ставить цели. Ты человек “поехали, сделаем!”.", kkStrengths: ["Көшбасшылық", "Бастама", "Сендіру", "Нәтиже"], ruStrengths: ["Лидерство", "Инициативность", "Умение убеждать", "Результативность"] },
    C: { kkName: "Conventional (Жүйелеуші)", ruName: "Conventional (Конвенциональный)", kkDesc: "Саған тәртіп, жүйе, ұқыптылық, нақты ереже жақсы. Сен “бәрі орны-орнымен болсын” дейсің.", ruDesc: "Тебе близки порядок, система, аккуратность и правила. Ты за “пусть всё будет по полочкам”.", kkStrengths: ["Ұқыптылық", "Жүйелеу", "Жауапкершілік", "Дәлдік"], ruStrengths: ["Аккуратность", "Системность", "Ответственность", "Точность"] }
  },
  careers: [
    { id: "career_engineer", codes: ["R", "IR", "RI"], kkName: "Инженер (механика/электроника)", ruName: "Инженер (механика/электроника)", kkAbout: "Құрылғы, техника, механизм қалай жұмыс істейтінін жасап/жөндеп/жобалайды.", ruAbout: "Проектирует, собирает и улучшает технику, механизмы, устройства.", kkSkills: ["Математика", "Физика", "Құрастыру", "Техникалық ойлау"], ruSkills: ["Математика", "Физика", "Конструирование", "Техническое мышление"], demand: "high" },
    { id: "career_dev", codes: ["I", "IC", "CI", "IE", "EI"], kkName: "Бағдарламашы (Software Developer)", ruName: "Разработчик (программист)", kkAbout: "Қосымша/сайт/жүйе жасайды, логика құрады, қате тапса түзетеді.", ruAbout: "Создаёт приложения/сайты/системы, строит логику и исправляет ошибки.", kkSkills: ["Логика", "Табандылық", "Оқу дағдысы", "Командалық жұмыс"], ruSkills: ["Логика", "Усидчивость", "Умение учиться", "Командная работа"], demand: "high" },
    { id: "career_designer", codes: ["A", "AS", "SA"], kkName: "UI/UX дизайнер", ruName: "UI/UX дизайнер", kkAbout: "Қолданушыға ыңғайлы әрі әдемі интерфейс ойлап табады.", ruAbout: "Продумывает удобный и красивый интерфейс для пользователя.", kkSkills: ["Креатив", "Эмпатия", "Дизайн ойлау", "Прототип жасау"], ruSkills: ["Креатив", "Эмпатия", "Дизайн-мышление", "Прототипирование"], demand: "high" },
    { id: "career_teacher", codes: ["S", "SE", "ES"], kkName: "Мұғалім / Тьютор", ruName: "Учитель / Тьютор", kkAbout: "Түсіндіреді, үйретеді, мотивация береді, бағыттайды.", ruAbout: "Объясняет, обучает, мотивирует и направляет.", kkSkills: ["Коммуникация", "Сабыр", "Жоспарлау", "Жауапкершілік"], ruSkills: ["Коммуникация", "Терпение", "Планирование", "Ответственность"], demand: "medium" },
    { id: "career_manager", codes: ["E", "ES", "SE"], kkName: "Жоба менеджері / Продакт", ruName: "Менеджер проектов / Продакт", kkAbout: "Команданы ұйымдастырады, жоспар құрады, нәтижеге жеткізеді.", ruAbout: "Организует команду, планирует и доводит проект до результата.", kkSkills: ["Көшбасшылық", "Коммуникация", "Жоспар", "Жауапкершілік"], ruSkills: ["Лидерство", "Коммуникация", "Планирование", "Ответственность"], demand: "high" },
    { id: "career_accountant", codes: ["C", "CI", "IC"], kkName: "Бухгалтер / Қаржы маманы", ruName: "Бухгалтер / Финансист", kkAbout: "Есеп-қисап, құжат, тәртіп, сандармен жұмыс.", ruAbout: "Учёт, документы, порядок и работа с цифрами.", kkSkills: ["Ұқыптылық", "Математика", "Жүйелеу", "Тәртіп"], ruSkills: ["Аккуратность", "Математика", "Системность", "Дисциплина"], demand: "medium" }
  ],
  schools: [
    { id: "sdu", kkName: "SDU University (Алматы)", ruName: "SDU University (Алматы)", kkAbout: "IT, инженерия, бизнес бағыттары.", ruAbout: "Направления IT, инженерии и бизнеса.", tags: ["IT", "Engineering", "Business"] },
    { id: "nu", kkName: "Nazarbayev University (Астана)", ruName: "Nazarbayev University (Астана)", kkAbout: "Зерттеу бағыты күшті, STEM және басқа бағдарламалар.", ruAbout: "Сильное исследовательское направление, STEM и другие программы.", tags: ["STEM", "Research"] },
    { id: "satbayev", kkName: "Satbayev University (Алматы)", ruName: "Satbayev University (Алматы)", kkAbout: "Инженерлік және техникалық мамандықтарға мықты.", ruAbout: "Сильные инженерные и технические направления.", tags: ["Engineering", "Tech"] },
    { id: "aitu", kkName: "Astana IT University (Астана)", ruName: "Astana IT University (Астана)", kkAbout: "IT мамандықтары: software, data, киберқауіпсіздік.", ruAbout: "IT-направления: software, data, кибербезопасность.", tags: ["IT", "Data", "Security"] },
    { id: "college_it", kkName: "IT колледж (үлгі)", ruName: "IT колледж (пример)", kkAbout: "Колледж форматы: практикалық дағды, тез старт.", ruAbout: "Колледж: больше практики, быстрый старт.", tags: ["College", "IT"] }
  ]
};

async function loadData() {
  try {
    const [qResp, cResp] = await Promise.all([fetch("./data/questions.json"), fetch("./data/catalog.json")]);
    if (!qResp.ok || !cResp.ok) throw new Error("Data fetch failed");
    const [q, c] = await Promise.all([qResp.json(), cResp.json()]);
    state.questions = q;
    state.catalog = c;
  } catch {
    // file:// режимінде fetch бұғатталуы мүмкін — сонда fallback деректі қолданамыз
    state.questions = FALLBACK_QUESTIONS;
    state.catalog = FALLBACK_CATALOG;
  }
}

function setLang(lang) {
  state.lang = lang === "ru" ? "ru" : "kk";
  document.documentElement.lang = state.lang === "ru" ? "ru" : "kk";
  persist();
  render();
}

function currentRoute() {
  const hash = location.hash || "#/home";
  const [path, query = ""] = hash.replace(/^#/, "").split("?");
  const params = new URLSearchParams(query);
  return { path, params };
}

function el(html) {
  const tmp = document.createElement("template");
  tmp.innerHTML = html.trim();
  return tmp.content.firstElementChild;
}

function mount(node) {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(node);
  applyI18n();

  if (location.hash.includes("#riasec")) {
    requestAnimationFrame(() => {
      document.getElementById("riasec")?.scrollIntoView({ behavior: "smooth" });
    });
  }
  if (location.hash.includes("#contact")) {
    requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    });
  }
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((n) => {
    const key = n.getAttribute("data-i18n");
    if (!key) return;
    n.textContent = t(key);
  });
}

function homeView() {
  const node = el(`
    <div class="landing">
      <section class="landing-hero">
        <div class="container landing-hero__grid">
          <div>
            <span class="landing-badge">🚀 RIASEC теориясына негізделген</span>
            <h1 class="landing-hero__title">
              Болашағыңды <span>бүгіннен</span><br />баста!
            </h1>
            <p class="landing-hero__lead">
              Қандай мамандық саған сәйкес? Профориентациялық тест арқылы өзіңе жақын бағытты тап!
            </p>
            <div class="landing-hero__actions">
              <a class="btn btn--primary btn--lg" href="#/test">Тестті бастау →</a>
              <a class="btn btn--ghost" href="#/about">Тест туралы білу</a>
            </div>
            <div class="landing-stats">
              <div class="stat-pill stat-pill--yellow">
                <span>🎓</span>
                <div>
                  <div class="stat-pill__value">10 000+</div>
                  <div class="stat-pill__label">Тест тапсырды</div>
                </div>
              </div>
              <div class="stat-pill stat-pill--gray">
                <span>🏫</span>
                <div>
                  <div class="stat-pill__value">200+</div>
                  <div class="stat-pill__label">Оқу орны</div>
                </div>
              </div>
              <div class="stat-pill stat-pill--orange">
                <span>⏱️</span>
                <div>
                  <div class="stat-pill__value">15 мин</div>
                  <div class="stat-pill__label">Орташа уақыт</div>
                </div>
              </div>
            </div>
          </div>
          <div class="landing-hero__visual">
            <div class="hero-image-wrap">
              <img src="${HERO_IMG}" alt="Оқушы" width="560" height="480" loading="eager" />
              <div class="hero-float hero-float--result">
                <span>🎯</span>
                <div>
                  <span class="muted" style="font-size:12px">Тест нәтижесі</span>
                  <strong>Artistic (A) — 87%</strong>
                </div>
              </div>
              <div class="hero-float hero-float--top">🏅 Top сәйкестік</div>
              <div class="hero-float hero-float--careers">✅ Дизайнер, Суретші</div>
            </div>
            <span class="hero-dot hero-dot--orange" aria-hidden="true"></span>
            <span class="hero-dot hero-dot--yellow" aria-hidden="true"></span>
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--gray" id="about">
        <div class="container two-col">
          <div>
            <p class="section-label">❓ ПРОФОРИЕНТАЦИЯ</p>
            <h2 class="section-title">Профориентация<br />деген не?</h2>
            <p class="section-lead">
              Профориентация — адамның қызығушылығы, қабілеті және мінезіне сәйкес мамандық таңдауға көмектесетін бағыт.
            </p>
            <ul class="bullet-list">
              <li><span>🎨</span> Біреу шығармашылықты жақсы көреді</li>
              <li><span>⚙️</span> Біреу техникамен жұмыс істегенді ұнатады</li>
              <li><span>🤝</span> Ал біреу адамдарға көмектескенді қалайды</li>
            </ul>
          </div>
          <div class="benefit-card">
            <h3>Дұрыс мамандық таңдасаң:</h3>
            <div class="benefit-row benefit-row--gray">
              <span class="benefit-row__icon">😊</span> Жұмыстан ләззат аласың
            </div>
            <div class="benefit-row benefit-row--orange">
              <span class="benefit-row__icon">🚀</span> Өзіңді үнемі дамытасың
            </div>
            <div class="benefit-row benefit-row--yellow">
              <span class="benefit-row__icon">💰</span> Болашақта табысты боласың
            </div>
          </div>
        </div>
      </section>

      <section class="landing-section" id="riasec">
        <div class="container">
          <p class="section-label section-title--center" style="text-align:center">🧠 ҒЫЛЫМИ НЕГІЗ</p>
          <h2 class="section-title section-title--center">RIASEC тесті қалай жұмыс істейді?</h2>
          <p class="section-lead section-lead--center" style="margin-bottom:48px">
            John Holland ұсынған ғылыми теорияға негізделген тест — сенің қызығушылықтарың мен мінез ерекшеліктеріңді анықтайды.
          </p>
          <div class="riasec-grid">
            <div class="riasec-card riasec-card--orange"><span class="riasec-card__icon">🔧</span><span class="riasec-card__title">Realistic</span><span class="riasec-card__sub">Техника, практика</span></div>
            <div class="riasec-card riasec-card--gray"><span class="riasec-card__icon">🔬</span><span class="riasec-card__title">Investigative</span><span class="riasec-card__sub">Зерттеу, анализ</span></div>
            <div class="riasec-card riasec-card--yellow"><span class="riasec-card__icon">🎨</span><span class="riasec-card__title">Artistic</span><span class="riasec-card__sub">Шығармашылық</span></div>
            <div class="riasec-card riasec-card--gray"><span class="riasec-card__icon">🤝</span><span class="riasec-card__title">Social</span><span class="riasec-card__sub">Адамдарға көмек</span></div>
            <div class="riasec-card riasec-card--orange"><span class="riasec-card__icon">📈</span><span class="riasec-card__title">Enterprising</span><span class="riasec-card__sub">Көшбасшылық</span></div>
            <div class="riasec-card riasec-card--gray"><span class="riasec-card__icon">📋</span><span class="riasec-card__title">Conventional</span><span class="riasec-card__sub">Тәртіп, ұйым</span></div>
          </div>
          <div class="result-box">
            <div>
              <h3>Тестті тапсыру соңында сен аласың:</h3>
              <ul>
                <li><span>👤</span> Өзіңе сәйкес мамандықтарды</li>
                <li><span>🏫</span> Сол мамандықтарды оқытатын колледждер мен университеттерді</li>
                <li><span>📊</span> Болашақта сұранысқа ие салаларды</li>
              </ul>
            </div>
            <a class="btn btn--primary btn--lg" href="#/test">Тестті бастау →</a>
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--gray">
        <div class="container steps-layout">
          <div>
            <p class="section-label">📝 НҰСҚАУЛЫҚ</p>
            <h2 class="section-title">Тестті қалай<br />тапсырамын?</h2>
            <p class="section-lead">Тек 4 қадам, шамамен 10–15 минут.</p>
            <div class="time-card">
              <span class="time-card__icon">⏳</span>
              <div>
                <div class="time-card__label">Орташа уақыт</div>
                <div class="time-card__value">10–15 минут</div>
              </div>
            </div>
          </div>
          <div class="step-list">
            <div class="step-item"><span class="step-num">1</span> Сұрақтарды мұқият оқы</div>
            <div class="step-item"><span class="step-num">2</span> Өзіңе жақын жауапты таңда</div>
            <div class="step-item"><span class="step-num">3</span> Шынайы жауап беруге тырыс — дұрыс немесе қате жауап жоқ!</div>
            <div class="step-item"><span class="step-num">4</span> Тест соңында мамандықтарды, оқу орындарын және кәсіби бағыттарды көресің</div>
          </div>
        </div>
      </section>

      <section class="container">
        <div class="cta-banner">
          <div>
            <h2 class="cta-banner__title">Болашағыңды бүгіннен баста!</h2>
            <p class="cta-banner__text">
              10 000-нан астам оқушы бізбен бірге мамандығын тапты.<br />Сен де таба аласың!
            </p>
          </div>
          <a class="btn btn--yellow" href="#/test">🎯 Тестті бастау</a>
        </div>
      </section>
    </div>
  `);
  return node;
}

function aboutView() {
  const node = el(`
    <div class="container">
    <div class="grid grid--single">
      <section class="card">
        <div class="card__inner">
          <h2 class="h2">${t("about_title")}</h2>
          <p class="muted">${t("about_p1")}</p>
          <p class="muted">${t("about_p2")}</p>
          <div class="sep"></div>
          <div class="row">
            <div class="row__left">
              <span class="badge">${t("about_list_title")}</span>
            </div>
          </div>
          <ul class="muted" style="line-height:1.6; margin:10px 0 0 18px;">
            <li>${t("about_li_1")}</li>
            <li>${t("about_li_2")}</li>
            <li>${t("about_li_3")}</li>
          </ul>
          <div class="sep"></div>
          <p class="muted">${t("about_motivation")}</p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#/test">${t("about_start")}</a>
          </div>
        </div>
      </section>
    </div>
    </div>
  `);
  return node;
}

function ensureTestState() {
  if (!Array.isArray(state.answers)) state.answers = [];
  const total = state.questions?.questions?.length ?? 0;
  if (state.answers.length > total) state.answers = state.answers.slice(0, total);
}

function answerLabels() {
  return [t("ans_1"), t("ans_2"), t("ans_3"), t("ans_4"), t("ans_5")];
}

function startTestView() {
  const qCount = state.questions?.questions?.length ?? 30;
  const p = state.profile;
  const fn = escapeHtml(p.firstName);
  const ln = escapeHtml(p.lastName);

  const node = el(`
    <div class="test-start">
      <div class="container test-start__grid">
        <div class="test-start__main">
          <div class="progress-steps" aria-label="Прогресс">
            <span class="progress-steps__dot progress-steps__dot--active">1</span>
            <span class="progress-steps__line"></span>
            <span class="progress-steps__dot">2</span>
            <span class="progress-steps__line"></span>
            <span class="progress-steps__dot">3</span>
            <span class="progress-steps__hint">${t("start_progress_hint")}</span>
          </div>

          <span class="landing-badge">${t("start_badge")}</span>
          <h1 class="test-start__title">
            ${t("start_title")} <span>${t("start_title_accent")}</span> 👋
          </h1>
          <p class="test-start__lead">${t("start_lead")}</p>

          <form class="test-start__form" id="startForm" novalidate>
            <div class="form-field">
              <label class="form-field__label" for="firstName">${t("label_first")}</label>
              <div class="form-field__input-wrap">
                <span class="form-field__icon" aria-hidden="true">👤</span>
                <input class="form-field__input" id="firstName" name="firstName" type="text"
                  autocomplete="given-name" placeholder="${t("ph_first")}" value="${fn}" required />
              </div>
            </div>

            <div class="form-field">
              <label class="form-field__label" for="lastName">${t("label_last")}</label>
              <div class="form-field__input-wrap">
                <span class="form-field__icon" aria-hidden="true">👤</span>
                <input class="form-field__input" id="lastName" name="lastName" type="text"
                  autocomplete="family-name" placeholder="${t("ph_last")}" value="${ln}" />
              </div>
            </div>

            <div class="form-field">
              <label class="form-field__label">${t("label_grade")}</label>
              <div class="form-field__input-wrap form-field__input-wrap--static">
                <span class="form-field__icon" aria-hidden="true">🎓</span>
                <span class="form-field__select-text">${t("ph_grade")}</span>
              </div>
              <div class="grade-chips" role="group" aria-label="${t("label_grade")}">
                <button type="button" class="grade-chip${p.grade === "9" ? " grade-chip--active" : ""}" data-grade="9">${t("grade_9")}</button>
                <button type="button" class="grade-chip${p.grade === "10" ? " grade-chip--active" : ""}" data-grade="10">${t("grade_10")}</button>
                <button type="button" class="grade-chip${p.grade === "11" ? " grade-chip--active" : ""}" data-grade="11">${t("grade_11")}</button>
              </div>
            </div>

            <p class="form-error" id="formError" hidden>${t("start_err_name")}</p>

            <button type="submit" class="btn btn--primary btn--block btn--lg">
              ${t("start_submit")} →
            </button>
            <p class="test-start__meta">${t("start_duration")} · ${qCount} ${t("start_questions")}</p>
          </form>
        </div>

        <aside class="test-start__aside">
          <div class="info-panel">
            <h3 class="info-panel__title">${t("start_sidebar_title")}</h3>
            <ul class="info-panel__list">
              <li><span class="info-panel__icon info-panel__icon--orange">💼</span>${t("start_sidebar_1")}</li>
              <li><span class="info-panel__icon info-panel__icon--green">🏫</span>${t("start_sidebar_2")}</li>
              <li><span class="info-panel__icon info-panel__icon--yellow">📈</span>${t("start_sidebar_3")}</li>
            </ul>
          </div>

          <div class="riasec-mini">
            <p class="riasec-mini__label">${t("start_riasec_label")}</p>
            <div class="riasec-mini__grid">
              <span class="riasec-mini__tag riasec-mini__tag--orange">🔧 Realistic</span>
              <span class="riasec-mini__tag riasec-mini__tag--gray">🔬 Investigative</span>
              <span class="riasec-mini__tag riasec-mini__tag--yellow">🎨 Artistic</span>
              <span class="riasec-mini__tag riasec-mini__tag--gray">🤝 Social</span>
              <span class="riasec-mini__tag riasec-mini__tag--orange">📈 Enterprising</span>
              <span class="riasec-mini__tag riasec-mini__tag--gray">📋 Conventional</span>
            </div>
          </div>

          <div class="social-proof">
            <span class="social-proof__icon">🏅</span>
            <div>
              <strong>${t("start_social_proof")}</strong>
              <p>${t("start_social_sub")}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `);

  node.querySelectorAll(".grade-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.profile.grade = btn.getAttribute("data-grade");
      node.querySelectorAll(".grade-chip").forEach((b) => {
        b.classList.toggle("grade-chip--active", b === btn);
      });
      persist();
    });
  });

  node.querySelector("#startForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const first = node.querySelector("#firstName").value.trim();
    const last = node.querySelector("#lastName").value.trim();
    const err = node.querySelector("#formError");

    if (!first) {
      err.hidden = false;
      node.querySelector("#firstName").focus();
      return;
    }
    err.hidden = true;

    state.profile = {
      firstName: first,
      lastName: last,
      grade: state.profile.grade || "10"
    };
    state.answers = [];
    state.startedAt = Date.now();
    persist();
    location.hash = "#/test/quiz";
  });

  return node;
}

function testView() {
  ensureTestState();
  const qs = state.questions.questions;
  if (!qs?.length) return el(`<div class="card"><div class="card__inner">${t("empty_data")}</div></div>`);

  const idx = Math.min(state.answers.length, qs.length - 1);
  const q = qs[idx];
  const selected = state.answers[idx] ?? null;
  const labels = answerLabels();
  const greeting = state.profile?.firstName
    ? `${escapeHtml(state.profile.firstName)}, `
    : "";

  const node = el(`
    <div class="container">
    <div class="grid">
      <section class="card">
        <div class="card__inner q">
          <div class="progress-steps progress-steps--compact" aria-label="Прогресс">
            <span class="progress-steps__dot progress-steps__dot--done">1</span>
            <span class="progress-steps__line progress-steps__line--done"></span>
            <span class="progress-steps__dot progress-steps__dot--active">2</span>
            <span class="progress-steps__line"></span>
            <span class="progress-steps__dot">3</span>
          </div>
          <div class="q__top">
            <div>
              <h2 class="q__title">${greeting}${t("test_title")}</h2>
              <div class="q__meta">${t("test_meta")} ${idx + 1}/${qs.length}</div>
            </div>
            <span class="badge">${q.type}</span>
          </div>
          <div class="sep"></div>
          <div class="muted" style="font-size:18px; line-height:1.5;">
            ${state.lang === "ru" ? q.ru : q.kk}
          </div>
          <div class="answers" id="answers"></div>
          <div class="sep"></div>
          <div class="row">
            <div class="row__left">
              <button class="btn" id="backBtn">${t("btn_back")}</button>
              <button class="btn btn--danger" id="restartBtn">${t("btn_restart")}</button>
            </div>
            <div class="row__right">
              <span class="muted">${t("test_hint")}</span>
              <button class="btn btn--primary" id="nextBtn"></button>
            </div>
          </div>
        </div>
      </section>

      <aside class="card">
        <div class="card__inner">
          <h2 class="h2">${t("result_top")}</h2>
          <div class="muted" style="margin-bottom:10px;">
            ${t("result_note")}
          </div>
          <div id="miniScores" class="scorebar"></div>
        </div>
      </aside>
    </div>
    </div>
  `);

  const answersNode = node.querySelector("#answers");
  labels.forEach((label, i) => {
    const value = i + 1;
    const btn = document.createElement("button");
    btn.className = "answer" + (selected === value ? " answer--selected" : "");
    btn.type = "button";
    btn.textContent = label;
    btn.addEventListener("click", () => {
      state.answers[idx] = value;
      persist();
      render();
    });
    answersNode.appendChild(btn);
  });

  const backBtn = node.querySelector("#backBtn");
  backBtn.disabled = idx === 0;
  backBtn.addEventListener("click", () => {
    if (idx <= 0) return;
    state.answers = state.answers.slice(0, idx);
    persist();
    render();
  });

  node.querySelector("#restartBtn").addEventListener("click", () => {
    state.answers = [];
    state.startedAt = null;
    persist();
    location.hash = "#/test";
  });

  const nextBtn = node.querySelector("#nextBtn");
  const isLast = idx === qs.length - 1;
  nextBtn.textContent = isLast ? t("btn_finish") : t("btn_next");
  nextBtn.disabled = selected == null;
  nextBtn.addEventListener("click", () => {
    if (selected == null) return;
    if (isLast) {
      location.hash = "#/result";
      return;
    }
    // move forward by ensuring next index exists
    if (state.answers.length === idx + 1) state.answers.push(null);
    persist();
    render();
  });

  renderMiniScores(node.querySelector("#miniScores"));
  return node;
}

function computeScores() {
  const qs = state.questions?.questions ?? [];
  const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  const maxPerQ = 5;
  let answered = 0;
  qs.forEach((q, idx) => {
    const v = state.answers[idx];
    if (typeof v === "number" && v >= 1 && v <= 5) {
      scores[q.type] += v;
      answered += 1;
    }
  });
  const max = (qs.filter((q) => q.type === "R").length || 0) * maxPerQ;
  return { scores, answered, total: qs.length, maxPerType: max };
}

function topCode(scores) {
  const entries = Object.entries(scores);
  entries.sort((a, b) => b[1] - a[1]);
  const top3 = entries.slice(0, 3).map(([k]) => k);
  return top3.join("");
}

function renderMiniScores(host) {
  const { scores, maxPerType } = computeScores();
  host.innerHTML = "";
  const order = ["R", "I", "A", "S", "E", "C"];
  order.forEach((k) => {
    const v = scores[k];
    const pct = maxPerType ? Math.round((v / maxPerType) * 100) : 0;
    const row = el(`
      <div class="score">
        <div class="score__k">${k}</div>
        <div class="bar"><div style="width:${Math.max(0, Math.min(100, pct))}%"></div></div>
        <div class="score__v">${v}</div>
      </div>
    `);
    host.appendChild(row);
  });
}

function drawRadar(canvas, scores, maxPerType) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.floor(rect.width * dpr);
  canvas.height = Math.floor(rect.height * dpr);
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;
  ctx.clearRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(w, h) * 0.34;

  const labels = ["R", "I", "A", "S", "E", "C"];
  const angle0 = -Math.PI / 2;

  // grid
  ctx.strokeStyle = "rgba(0,0,0,0.08)";
  ctx.lineWidth = 1;
  for (let ring = 1; ring <= 4; ring++) {
    const rr = (r * ring) / 4;
    ctx.beginPath();
    labels.forEach((_, i) => {
      const a = angle0 + (i * Math.PI * 2) / labels.length;
      const x = cx + Math.cos(a) * rr;
      const y = cy + Math.sin(a) * rr;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.stroke();
  }
  // axes
  labels.forEach((lab, i) => {
    const a = angle0 + (i * Math.PI * 2) / labels.length;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
    ctx.stroke();
    const tx = cx + Math.cos(a) * (r + 16);
    const ty = cy + Math.sin(a) * (r + 16);
    ctx.fillStyle = "rgba(26,26,46,0.75)";
    ctx.font = "600 12px system-ui, Segoe UI, Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(lab, tx, ty);
  });

  // polygon
  ctx.beginPath();
  labels.forEach((lab, i) => {
    const a = angle0 + (i * Math.PI * 2) / labels.length;
    const v = scores[lab] ?? 0;
    const p = maxPerType ? v / maxPerType : 0;
    const rr = r * Math.max(0, Math.min(1, p));
    const x = cx + Math.cos(a) * rr;
    const y = cy + Math.sin(a) * rr;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(255,107,53,0.2)";
  ctx.strokeStyle = "rgba(255,107,53,0.65)";
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();
}

function recommendations(codeTop3) {
  const careers = state.catalog?.careers ?? [];
  const schools = state.catalog?.schools ?? [];
  const first = codeTop3[0];
  const second = codeTop3[1];
  const third = codeTop3[2];

  const scored = careers
    .map((c) => {
      const codes = new Set((c.codes ?? []).flatMap((x) => x.split("")));
      let s = 0;
      if (codes.has(first)) s += 3;
      if (codes.has(second)) s += 2;
      if (codes.has(third)) s += 1;
      if (c.demand === "high") s += 1;
      return { c, s };
    })
    .sort((a, b) => b.s - a.s)
    .slice(0, 6)
    .map((x) => x.c);

  return { careers: scored, schools: schools.slice(0, 6) };
}

function resultView() {
  const { scores, answered, total, maxPerType } = computeScores();
  if (!total || answered < total) {
    // if not finished, redirect to test
    location.hash = "#/test";
    return el(`<div></div>`);
  }

  const code = topCode(scores);
  const types = state.catalog?.types ?? {};
  const first = code[0];
  const second = code[1];
  const third = code[2];

  const { careers, schools } = recommendations(code);

  const node = el(`
    <div class="container">
    <div class="grid">
      <section class="card">
        <div class="card__inner">
          <div class="row">
            <div class="row__left">
              <h2 class="h2" style="margin:0;">${t("result_title")}</h2>
              <span class="badge">${t("result_code")}: <strong style="color:var(--text)">${code}</strong></span>
            </div>
            <div class="row__right">
              <button class="btn" id="pdfBtn">${t("result_pdf")}</button>
              <a class="btn btn--primary" href="#/test">${t("btn_restart")}</a>
            </div>
          </div>

          <div class="sep"></div>
          <div class="scorebar" id="scores"></div>
          <div class="sep"></div>

          <h3 class="h2">${t("result_top")}</h3>
          <div class="list" id="topTypes"></div>
        </div>
      </section>

      <aside class="card">
        <div class="card__inner">
          <h3 class="h2">${t("result_map")}</h3>
          <canvas class="radar" id="radar"></canvas>
          <div class="sep"></div>
          <h3 class="h2">${t("result_reco")}</h3>
          <div class="list" id="careers"></div>
          <div class="sep"></div>
          <h3 class="h2">${t("result_schools")}</h3>
          <div class="list" id="schools"></div>
        </div>
      </aside>
    </div>
    </div>
  `);

  renderMiniScores(node.querySelector("#scores"));

  const topHost = node.querySelector("#topTypes");
  [first, second, third].forEach((k) => {
    const info = types[k];
    const name = state.lang === "ru" ? info?.ruName : info?.kkName;
    const desc = state.lang === "ru" ? info?.ruDesc : info?.kkDesc;
    const strengths = state.lang === "ru" ? info?.ruStrengths : info?.kkStrengths;
    topHost.appendChild(
      el(`
        <div class="item">
          <div class="row">
            <div class="row__left">
              <span class="badge"><strong style="color:var(--text)">${k}</strong></span>
              <div class="item__title" style="margin:0; font-weight:700;">${name ?? k}</div>
            </div>
          </div>
          <p class="item__meta">${desc ?? ""}</p>
          <div class="muted" style="display:flex; gap:8px; flex-wrap:wrap; margin-top:8px;">
            ${(strengths ?? []).map((s) => `<span class="badge">${s}</span>`).join("")}
          </div>
        </div>
      `)
    );
  });

  const careersHost = node.querySelector("#careers");
  careers.forEach((c) => {
    careersHost.appendChild(
      el(`
        <div class="item">
          <div class="row">
            <div class="row__left">
              <div class="item__title">${state.lang === "ru" ? c.ruName : c.kkName}</div>
            </div>
            <div class="row__right">
              <span class="badge">${(c.codes ?? [])[0] ?? ""}</span>
              <span class="badge">${c.demand === "high" ? "🔥" : c.demand === "medium" ? "↗" : ""}</span>
            </div>
          </div>
          <p class="item__meta">${state.lang === "ru" ? c.ruAbout : c.kkAbout}</p>
          <div class="muted" style="display:flex; gap:8px; flex-wrap:wrap; margin-top:8px;">
            ${(state.lang === "ru" ? c.ruSkills : c.kkSkills).map((s) => `<span class="badge">${s}</span>`).join("")}
          </div>
        </div>
      `)
    );
  });

  const schoolsHost = node.querySelector("#schools");
  schools.forEach((s) => {
    schoolsHost.appendChild(
      el(`
        <div class="item">
          <div class="item__title">${state.lang === "ru" ? s.ruName : s.kkName}</div>
          <p class="item__meta">${state.lang === "ru" ? s.ruAbout : s.kkAbout}</p>
          <div class="muted" style="display:flex; gap:8px; flex-wrap:wrap; margin-top:8px;">
            ${(s.tags ?? []).map((tag) => `<span class="badge">${tag}</span>`).join("")}
          </div>
        </div>
      `)
    );
  });

  node.querySelector("#pdfBtn").addEventListener("click", () => {
    window.print();
  });

  const radar = node.querySelector("#radar");
  const rerenderRadar = () => drawRadar(radar, scores, maxPerType);
  rerenderRadar();
  window.addEventListener("resize", rerenderRadar, { passive: true });

  return node;
}

function catalogView(kind) {
  const isSchools = kind === "schools";
  const title = isSchools ? t("schools_title") : t("catalog_title");
  const items = isSchools ? state.catalog?.schools ?? [] : state.catalog?.careers ?? [];

  const node = el(`
    <div class="container">
    <div class="grid grid--single">
      <section class="card">
        <div class="card__inner">
          <div class="row">
            <div class="row__left">
              <h2 class="h2" style="margin:0;">${title}</h2>
            </div>
            <div class="row__right">
              <a class="btn btn--primary" href="#/test">${t("nav_start")}</a>
            </div>
          </div>
          <div class="sep"></div>
          <div class="list" id="list"></div>
        </div>
      </section>
    </div>
    </div>
  `);
  const host = node.querySelector("#list");

  if (!items.length) {
    host.appendChild(el(`<div class="muted">${t("empty_data")}</div>`));
    return node;
  }

  items.forEach((it) => {
    if (isSchools) {
      host.appendChild(
        el(`
          <div class="item">
            <div class="item__title">${state.lang === "ru" ? it.ruName : it.kkName}</div>
            <p class="item__meta">${state.lang === "ru" ? it.ruAbout : it.kkAbout}</p>
            <div class="muted" style="display:flex; gap:8px; flex-wrap:wrap; margin-top:8px;">
              ${(it.tags ?? []).map((tag) => `<span class="badge">${tag}</span>`).join("")}
            </div>
          </div>
        `)
      );
      return;
    }

    host.appendChild(
      el(`
        <div class="item">
          <div class="row">
            <div class="row__left">
              <div class="item__title">${state.lang === "ru" ? it.ruName : it.kkName}</div>
            </div>
            <div class="row__right">
              <span class="badge">${(it.codes ?? [])[0] ?? ""}</span>
              <span class="badge">${it.demand === "high" ? "🔥" : it.demand === "medium" ? "↗" : ""}</span>
            </div>
          </div>
          <p class="item__meta">${state.lang === "ru" ? it.ruAbout : it.kkAbout}</p>
        </div>
      `)
    );
  });

  return node;
}

function updateNavActive(path) {
  document.querySelectorAll(".nav__link[data-nav]").forEach((link) => {
    const key = link.getAttribute("data-nav");
    let active = false;
    if (key === "home" && path === "/home") active = true;
    if (key === "about" && path === "/about") active = true;
    if (key === "riasec" && path === "/home") active = false;
    link.classList.toggle("is-active", active);
  });
}

function render() {
  const langSelect = document.getElementById("langSelect");
  if (langSelect && langSelect.value !== state.lang) langSelect.value = state.lang;

  const { path } = currentRoute();
  document.body.className =
    path === "/home" ? "page-home" : path.startsWith("/test") ? "page-test" : "page-app";
  updateNavActive(path);
  if (!state.questions || !state.catalog) {
    mount(el(`<div class="card"><div class="card__inner muted">Loading...</div></div>`));
    return;
  }

  switch (path) {
    case "/home":
      mount(homeView());
      break;
    case "/about":
      mount(aboutView());
      break;
    case "/test":
      mount(startTestView());
      break;
    case "/test/quiz":
      if (!state.profile?.firstName) {
        location.hash = "#/test";
        return;
      }
      mount(testView());
      break;
    case "/result":
      mount(resultView());
      break;
    case "/catalog":
      mount(catalogView("catalog"));
      break;
    case "/schools":
      mount(catalogView("schools"));
      break;
    default:
      location.hash = "#/home";
  }
}

async function main() {
  loadPersisted();
  document.getElementById("langSelect")?.addEventListener("change", (e) => {
    const value = e.target?.value;
    setLang(value);
  });
  await loadData();
  setLang(state.lang);
  window.addEventListener("hashchange", render);
  render();
}

main();

