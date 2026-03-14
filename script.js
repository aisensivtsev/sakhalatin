// ─────────────────────────────────────────────
// Transliteration data
// ─────────────────────────────────────────────

const alphabetSystems = {
    'yanalif': {
        applyLongVowels: false,
        map: {
            'А': 'A', 'а': 'a', 'Б': 'B', 'б': 'b',
            'В': 'V', 'в': 'v', 'Г': 'G', 'г': 'g',
            'Д': 'D', 'д': 'd', 'И': 'I', 'и': 'i',
            'Й': 'J', 'й': 'j', 'К': 'K', 'к': 'k',
            'Л': 'L', 'л': 'l', 'М': 'M', 'м': 'm',
            'Н': 'N', 'н': 'n', 'О': 'O', 'о': 'o',
            'П': 'P', 'п': 'p', 'Р': 'R', 'р': 'r',
            'С': 'S', 'с': 's', 'Т': 'T', 'т': 't',
            'У': 'U', 'у': 'u', 'Х': 'Q', 'х': 'q',
            'Ч': 'C', 'ч': 'c',
            'Ы': 'Ь', 'ы': 'ь',
            'Э': 'E', 'э': 'e',
            'Ҕ': 'Ƣ', 'ҕ': 'ƣ', 'Ҥ': 'Ꞑ', 'ҥ': 'ꞑ',
            'Һ': 'H', 'һ': 'h', 'Ө': 'Ө', 'ө': 'ɵ',
            'Ү': 'Y', 'ү': 'y',
        },
        combinations: [
            { cyrillic: 'Аа', latin: 'Aa' }, { cyrillic: 'аа', latin: 'aa' },
            { cyrillic: 'Оо', latin: 'Oo' }, { cyrillic: 'оо', latin: 'oo' },
            { cyrillic: 'Ыы', latin: 'Ьь' }, { cyrillic: 'ыы', latin: 'ьь' },
            { cyrillic: 'Уу', latin: 'Uu' }, { cyrillic: 'уу', latin: 'uu' },
            { cyrillic: 'Ии', latin: 'Ii' }, { cyrillic: 'ии', latin: 'ii' },
            { cyrillic: 'Өө', latin: 'Өө' }, { cyrillic: 'өө', latin: 'ɵɵ' },
            { cyrillic: 'Үү', latin: 'Yy' }, { cyrillic: 'үү', latin: 'yy' },
            { cyrillic: 'Ээ', latin: 'Ee' }, { cyrillic: 'ээ', latin: 'ee' },
            { cyrillic: 'Ҥҥ', latin: 'Ꞑꞑ' }, { cyrillic: 'ҥҥ', latin: 'ꞑꞑ' },
            { cyrillic: 'Дь', latin: 'Ç' }, { cyrillic: 'дь', latin: 'ç' },
            { cyrillic: 'Нь', latin: 'Nj' }, { cyrillic: 'нь', latin: 'nj' },
        ]
    },
    'novgorodov': {
        applyLongVowels: true,
        map: {
            'А': 'a', 'а': 'a',
            'Б': 'b', 'б': 'b',
            'В': '—', 'в': '—',
            'Г': 'g', 'г': 'g',
            'Ҕ': 'ʃ', 'ҕ': 'ʃ',
            'Д': 'd', 'д': 'd',
            'И': 'i', 'и': 'i',
            'Й': 'j', 'й': 'j',
            'Ҋ': 'ɟ', 'ҋ': 'ɟ',
            'К': 'k', 'к': 'k',
            'Л': 'l', 'л': 'l',
            'М': 'm', 'м': 'm',
            'Н': 'n', 'н': 'n',
            'Ҥ': 'ŋ', 'ҥ': 'ŋ',
            'О': 'ɔ', 'о': 'ɔ',
            'Ө': 'ɔe', 'ө': 'ɔe',
            'П': 'p', 'п': 'p',
            'Р': 'r', 'р': 'r',
            'С': 's', 'с': 's',
            'Һ': 'h', 'һ': 'h',
            'Т': 't', 'т': 't',
            'У': 'u', 'у': 'u',
            'Ү': 'y', 'ү': 'y',
            'Х': 'q', 'х': 'q',
            'Ч': 'c', 'ч': 'c',
            'Ы': 'ɯ', 'ы': 'ɯ',
            'Э': 'e', 'э': 'e',
        },
        combinations: [
            { cyrillic: 'Ыа', latin: 'ıь' }, { cyrillic: 'ыа', latin: 'ıь' },
            { cyrillic: 'Иэ', latin: 'ıe' }, { cyrillic: 'иэ', latin: 'ıe' },
            { cyrillic: 'Уо', latin: 'uo' }, { cyrillic: 'уо', latin: 'uo' },
            { cyrillic: 'Үө', latin: 'w' },  { cyrillic: 'үө', latin: 'w' },
            { cyrillic: 'Дь', latin: 'з' },  { cyrillic: 'дь', latin: 'з' },
            { cyrillic: 'Ль', latin: 'ʎ' },  { cyrillic: 'ль', latin: 'ʎ' },
            { cyrillic: 'Нь', latin: 'ɲ' },  { cyrillic: 'нь', latin: 'ɲ' },
        ]
    },
    'vengeritsa': {
        applyLongVowels: false,
        map: {
            'А': 'A', 'а': 'a',
            'Б': 'B', 'б': 'b',
            'В': 'V', 'в': 'v',
            'Г': 'g', 'г': 'g',
            'Ҕ': 'Gh', 'ҕ': 'gh',
            'Д': 'D', 'д': 'd',
            'Е': '—', 'е': '—',
            'Ё': '—', 'ё': '—',
            'Ж': 'Jh', 'ж': 'jh',
            'З': 'Z', 'з': 'z',
            'И': 'I', 'и': 'i',
            'Й': 'Ÿ', 'й': 'ÿ',
            'Ҋ': '—', 'ҋ': '—',
            'К': 'K', 'к': 'k',
            'Л': 'L', 'л': 'l',
            'М': 'M', 'м': 'm',
            'Н': 'N', 'н': 'n',
            'Ҥ': 'Ng', 'ҥ': 'ng',
            'О': 'O', 'о': 'o',
            'Ө': 'Ö', 'ө': 'ö',
            'П': 'P', 'п': 'p',
            'Р': 'R', 'р': 'r',
            'С': 'S', 'с': 's',
            'Һ': 'H', 'һ': 'h',
            'Т': 'T', 'т': 't',
            'У': 'U', 'у': 'u',
            'Ү': 'Ü', 'ү': 'ü',
            'Ф': 'F', 'ф': 'f',
            'Х': 'Q', 'х': 'q',
            'Ц': 'Tz', 'ц': 'tz',
            'Ч': 'C', 'ч': 'c',
            'Ш': 'Sh', 'ш': 'sh',
            'Щ': 'Sc', 'щ': 'sc',
            'Ъ': '—', 'ъ': '—',
            'Ы': 'y', 'ы': 'y',
            'Ь': '—', 'ь': '—',
            'Э': 'E', 'э': 'e',
            'Ю': '—', 'ю': '—',
            'Я': '—', 'я': '—',
        },
        combinations: [
            { cyrillic: 'Аа', latin: 'Á' }, { cyrillic: 'аа', latin: 'á' },
            { cyrillic: 'Оо', latin: 'Ó' }, { cyrillic: 'оо', latin: 'ó' },
            { cyrillic: 'Ыы', latin: 'Ý' }, { cyrillic: 'ыы', latin: 'ý' },
            { cyrillic: 'Уу', latin: 'Ú' }, { cyrillic: 'уу', latin: 'ú' },
            { cyrillic: 'Ии', latin: 'Í' }, { cyrillic: 'ии', latin: 'í' },
            { cyrillic: 'Өө', latin: 'Ő' }, { cyrillic: 'өө', latin: 'ő' },
            { cyrillic: 'Үү', latin: 'Ű' }, { cyrillic: 'үү', latin: 'ű' },
            { cyrillic: 'Ээ', latin: 'É' }, { cyrillic: 'ээ', latin: 'é' },
            { cyrillic: 'Ыа', latin: 'Ë' }, { cyrillic: 'ыа', latin: 'ë' },
            { cyrillic: 'Иэ', latin: 'Ê' }, { cyrillic: 'иэ', latin: 'ê' },
            { cyrillic: 'Уо', latin: 'Ô' }, { cyrillic: 'уо', latin: 'ô' },
            { cyrillic: 'Үө', latin: 'Œ' }, { cyrillic: 'үө', latin: 'œ' },
            { cyrillic: 'Ҥҥ', latin: 'Nng' }, { cyrillic: 'ҥҥ', latin: 'nng' },
            { cyrillic: 'Дь', latin: 'J' }, { cyrillic: 'дь', latin: 'j' },
            { cyrillic: 'Нь', latin: 'Nh' }, { cyrillic: 'нь', latin: 'nh' },
            { cyrillic: 'Е', latin: 'Ÿe' }, { cyrillic: 'е', latin: 'ÿe' },
            { cyrillic: 'Я', latin: 'Ÿa' }, { cyrillic: 'я', latin: 'ÿa' },
            { cyrillic: 'Ё', latin: 'Ÿo' }, { cyrillic: 'ё', latin: 'ÿo' },
            { cyrillic: 'Ю', latin: 'Ÿu' }, { cyrillic: 'ю', latin: 'ÿu' },
        ]
    },
};

// Long-vowel collapse map (Novgorodov only)
const longVowelMap = {
    'aa': 'a:', 'ii': 'i:', 'uu': 'u:',
    'ɯɯ': 'ɯ:', 'ɔɔ': 'ɔ:', 'ee': 'e:',
    'yy': 'y:', 'ɔeɔe': 'ɔe:'
};

// ─────────────────────────────────────────────
// Transliteration engine
// ─────────────────────────────────────────────

/**
 * Transliterate Sakha Cyrillic text to Latin using the given system.
 * @param {string} text - Input Cyrillic text
 * @param {string} systemKey - One of 'novgorodov' | 'vengeritsa' | 'yanalif'
 * @returns {string} Transliterated Latin text
 */
function transliterate(text, systemKey) {
    if (!text) return '';

    const rules = alphabetSystems[systemKey];
    if (!rules) {
        console.error('Invalid transliteration system key:', systemKey);
        return text;
    }

    const { map: transliterationMap, combinations, applyLongVowels } = rules;

    // Apply multi-character combinations first (longest first to avoid partial matches)
    let result = text;
    const sortedCombinations = [...combinations].sort((a, b) => b.cyrillic.length - a.cyrillic.length);
    for (const combo of sortedCombinations) {
        const escaped = combo.cyrillic.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        result = result.replace(new RegExp(escaped, 'g'), combo.latin);
    }

    // Apply single-character map
    let transliterated = '';
    for (const char of result) {
        transliterated += transliterationMap[char] !== undefined ? transliterationMap[char] : char;
    }

    // Collapse long vowels (Novgorodov only)
    if (applyLongVowels) {
        for (const [pattern, replacement] of Object.entries(longVowelMap)) {
            const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            transliterated = transliterated.replace(new RegExp(escaped, 'g'), replacement);
        }
    }

    return transliterated;
}

// ─────────────────────────────────────────────
// i18n translations
// ─────────────────────────────────────────────

const translations = {
    'ru': {
        'meta_description': 'SakhaLatin — инструмент для транслитерации саха (якутской) кириллицы в латиницу, основанный на историческом алфавите Новгородова.',
        'title': 'SakhaLatin — Кириллица → Латиница',
        'subtitle': 'Якутская Кириллица → Якутская Латиница',
        'intro_title': 'Конвертер якутского языка с кириллицы на латиницу',
        'intro_text': 'Онлайн-конвертер позволяет выполнить автоматическую транслитерацию текстов на якутском языке с кириллического алфавита на латинскую графику. Вы можете конвертировать как текст, который вводите вручную или же вставить скопированный текст.',
        'intro_p3': 'Некоторые дифтонги — <b>ыа</b>, <b>иэ</b>, <b>уο</b>, а также буква <b>ө</b> — не могут быть отображены в точном соответствии с нормами, поскольку эти символы не поддерживаются на iOS и Android. Поэтому в конвертере используются адаптированные формы, максимально близкие к оригинальным:',
        'input_label': 'Введите текст на якутском (кириллица):',
        'input_placeholder': 'Например: Киэн тутун, эн саха буоларгынан!',
        'clear_title': 'Очистить',
        'special_chars_label': 'Специальные символы (нажмите, чтобы вставить):',
        'select_label': 'Выберите стандарт транслитерации:',
        'option_novgorodov': 'Латиница Семёна Новгородова',
        'option_vengeritsa': 'Венгерица',
        'option_yanalif': 'Яналиф',
        'translate_btn': 'Перевести',
        'output_label': 'Результат (латиница):',
        'output_placeholder': 'Результат появится здесь...',
        'copy_title': 'Копировать',
        'contact_title': 'Свяжитесь со мной в Instagram',
        'footer_copyright': '© 2026 SakhaLatin. Все права защищены.',
        'toast_copied': 'Скопировано в буфер обмена!',
        'toast_nothing': 'Нечего копировать',
        'faq_title': 'Часто задаваемые вопросы',
        'faq_q1': 'О цели создания сайта',
        'faq_a1': 'Этот сайт создан не для коммерческого использования, а для всеобщего доступа. Моя цель — чтобы люди интересовались историей якутского языка и сами популяризировали его. Я хочу, чтобы молодое поколение саха находило вдохновение создавать полезные проекты, сохранять и развивать наш язык и культуру.',
        'faq_q2': 'Откуда взят способ транслитерации?',
        'faq_a2': 'Транслитерация основана на исторических системах латинизации якутского языка: алфавите С.А. Новгородова (1920-е), системе Яналиф (1929–1939 годов), алфавите Хитрова и современном стандарте «Венгерица». Эти системы были переосмыслены и адаптированы под современные цифровые и визуальные задачи.',
        'faq_q3': 'По каким правилам работает транслитерация?',
        'faq_a3': 'Система основана на соответствии один-к-одному между кириллическими и латинскими символами. Каждый знак преобразуется по заданному набору правил с учётом структуры и особенностей якутского языка. При этом сохраняется читаемость текста, визуальная логика и лингвистическая последовательность.',
        'faq_q4': 'Как можно поддержать проект?',
        'faq_a4': 'Поддержать проект можно через репосты в социальных сетях, рассказы о нём друзьям и знакомым, а также упоминания в своих творческих и образовательных инициативах. Самая ценная поддержка — это живой интерес, вовлечённость и распространение идеи среди людей.',
        'faq_sources_title': 'Источники:',
        'faq_source1': 'Якутская письменность — Википедия',
        'faq_source2': 'Якутская венгерица — Википедия (саха)',
        'chars': 'симв.',
    },
    'en': {
        'meta_description': 'SakhaLatin — A tool to transliterate Sakha (Yakut) Cyrillic to Latin, based on the historical Novgorodov alphabet.',
        'title': 'SakhaLatin — Cyrillic → Latin',
        'subtitle': 'Yakut Cyrillic → Yakut Latin',
        'intro_title': 'Yakut Language Cyrillic to Latin Converter',
        'intro_text': 'This online converter allows you to automatically transliterate texts in the Yakut language from the Cyrillic alphabet to Latin script. You can convert text that you type manually or paste copied text.',
        'intro_p3': 'Some diphthongs — <b>ыа</b>, <b>иэ</b>, <b>уο</b>, as well as the letter <b>ө</b> — cannot be displayed in exact accordance with the standards, as these symbols are not supported on iOS and Android. Therefore, the converter uses adapted forms that are as close as possible to the originals:',
        'input_label': 'Enter text in Yakut (Cyrillic):',
        'input_placeholder': 'Example: Киэн тутун, эн саха буоларгынан!',
        'clear_title': 'Clear',
        'special_chars_label': 'Special Characters (click to insert):',
        'select_label': 'Choose transliteration standard:',
        'option_novgorodov': "Semyon Novgorodov's Latin",
        'option_vengeritsa': 'Vengeritsa',
        'option_yanalif': 'Yanalif',
        'translate_btn': 'Translate',
        'output_label': 'Result (Latin):',
        'output_placeholder': 'The result will appear here...',
        'copy_title': 'Copy',
        'contact_title': 'Contact me on Instagram',
        'footer_copyright': '© 2026 SakhaLatin. All rights reserved.',
        'toast_copied': 'Copied to clipboard!',
        'toast_nothing': 'Nothing to copy',
        'faq_title': 'Frequently Asked Questions',
        'faq_q1': 'About the purpose of creating this site',
        'faq_a1': "This website is not intended for commercial use, but rather for free and open access. The project's primary goal is to spark interest in the history of the Yakut language and inspire people to promote it independently. Particular attention is paid to the younger generation of Sakha people: the project aims to motivate them to create useful initiatives, as well as to preserve, develop, and reimagine their native language and culture.",
        'faq_q2': 'Where does the transliteration method come from?',
        'faq_a2': 'The transliteration is based on historical systems of Yakut latinization: the alphabet of S.A. Novgorodov (1920s), the Yanalif system (1929–1939), Khitrov\'s alphabet, and the modern "Vengeritsa" standard. These systems have been reimagined and adapted for modern digital and visual applications.',
        'faq_q3': 'What rules does the transliteration follow?',
        'faq_a3': 'The system is based on a one-to-one correspondence between Cyrillic and Latin characters. Each sign is converted according to a given set of rules, taking into account the structure and features of the Yakut language. At the same time, text readability, visual logic, and linguistic consistency are preserved.',
        'faq_q4': 'How can I support the project?',
        'faq_a4': 'You can support the project through reposts on social networks, sharing it with friends and acquaintances, as well as mentioning it in your creative and educational initiatives. The most valuable support is genuine interest, engagement, and spreading the idea among people.',
        'faq_sources_title': 'Sources:',
        'faq_source1': 'Yakut writing — Wikipedia',
        'faq_source2': 'Yakut Vengeritsa — Wikipedia (Sakha)',
        'chars': 'chars',
    },
    'sah': {
        'meta_description': 'SakhaLatin — Саха (якут) кириллицатын латыын алпабыытыгар көһөрөр тэрил, С.А. Новгородов историябыт алпабыытыгар олоҕуран.',
        'title': 'SakhaLatin — Кириллица → Латыын',
        'subtitle': 'Саха Кириллицата → Саха Латыына',
        'intro_title': 'Саха тылын кириллицаттан латыын алпабыытыгар көһөрөөччү',
        'intro_text': 'Бу онлайн-көһөрөөччү сахалыы тиэкистэри кириллицаттан латыын суругар-бичигэр тута көһөрөргө аналлаах. Бэйэҕит бэчээттиир эбэтэр атын сиртэн киллэрбит тиэкискитин көһөрүөххүтүн сөп.',
        'intro_p3': 'Сорох дифтоҥнар — <b>ыа</b>, <b>иэ</b>, <b>уο</b>, уонна <b>ө</b> буукуба — iOS уонна Android-ка өйөммөт буоланнарын, табатык көстүбэттэр. Ол иһин манна кинилэргэ чугас, сөптөөх солбуктар туттуллаллар:',
        'input_label': 'Сахалыы тиэкиһи киллэр (кириллица):',
        'input_placeholder': 'Холобур: Киэн тутун, эн саха буоларгынан!',
        'clear_title': 'Ыраастаа',
        'special_chars_label': 'Анал бэлиэлэр (баттаан киллэр):',
        'select_label': 'Транслитерация стандартын тал:',
        'option_novgorodov': 'Сэмэн Новгородов Латыына',
        'option_vengeritsa': 'Венгерица',
        'option_yanalif': 'Яналиф',
        'translate_btn': 'Көһөр',
        'output_label': 'Түмүк (латыын):',
        'output_placeholder': 'Түмүк манна тахсыа...',
        'copy_title': 'Куопуйалаа',
        'contact_title': 'Instagram-ҥа сибээстэс',
        'footer_copyright': '© 2026 SakhaLatin. Барыта көмүскэллээх.',
        'toast_copied': 'Буферга куопуйданда!',
        'toast_nothing': 'Куопуйдуур туох да суох',
        'faq_title': 'Элбэхтик ыйытыллар ыйытыктар',
        'faq_q1': 'Ситим-сир айыллыбыт сыалын туһунан',
        'faq_a1': 'Бу ситим-сир коммерческай туһаҕа аналлана илигин, босхо уонна аһаҕас туһаҕа аналлаах. Тэрил сүрүн сыала — саха тылын историятыгар кыһаллыыны үөскэтии уонна дьону бэйэлэрэ тарҕаталларыгар күүһүрдүү. Эдэр көлүөнэ саха дьонугар аналлаах: тэрил кинилэргэ туһалаах инициативалар оҥорорго, ону тэҥэ төрүт тылбытын уонна култуурабытын харыстыырга, сайыннарарга уонна билиҥҥи кэмҥэ саҥанан толкуйдааһыҥҥа күүһүрдүүнү булунарга аналлаах.',
        'faq_q2': 'Транслитерация ньымата хантан ылыллыбыт?',
        'faq_a2': 'Транслитерация саха тылын латыыннааһын историябыт тиһиктэригэр олоҕурар: С.А. Новгородов алпабыыта (1920-с сс.), Яналиф тиһигэ (1929–1939 сс.), Хитров алпабыыта уонна билиҥҥи "Венгерица" стандара. Бу тиһиктэр билиҥҥи цифровой уонна визуальнай задачаларга сөптөөхтүк саҥанан толкуйданан уонна адаптацияланан туһаныллаллар.',
        'faq_q3': 'Транслитерация ханнык дьаһабыллары тутуһар?',
        'faq_a3': 'Тиһик кириллица уонна латыын бэлиэлэрин биир-бииргэ сөп түбэһиитигэр олоҕурар. Бэлиэ барыта саха тылын структуратын уонна ойуулуурун ааҕан биэриллэр дьаһабылларга сөп түбэһиннэрэн көһөрүллэр. Ону тэҥэ тиэкис ааҕыллар кыаҕа, визуальнай логика уонна лингвистическай последовательноһа харыстаныллар.',
        'faq_q4': 'Тэрили хайдах көмүскээххин сөп?',
        'faq_a4': 'Тэрили социальнай ситимнэргэ репост оҥорон, доҕотторугар уонна билэр дьоҥҥо кэпсээн, ону тэҥэ бэйэҕит творческай уонна үөрэх инициативаларыгар ахтынан көмүскээххин сөп. Ордук кэрэхтээх көмө — бу кыратык кыһаллыы, кыттыы уонна санааны дьон ортотугар тарҕатыы.',
        'faq_sources_title': 'Источниктар:',
        'faq_source1': 'Саха суруга — Википедия',
        'faq_source2': 'Саха венгерицата — Википедия (саха)',
        'chars': 'бэлиэ',
    }
};

// ─────────────────────────────────────────────
// Special characters for the insert buttons
// ─────────────────────────────────────────────

const specialCharacters = [
    { cyrillic: 'Ҕ', label: 'Ҕ' },
    { cyrillic: 'ҕ', label: 'ҕ' },
    { cyrillic: 'Һ', label: 'Һ' },
    { cyrillic: 'һ', label: 'һ' },
    { cyrillic: 'Ҥ', label: 'Ҥ' },
    { cyrillic: 'ҥ', label: 'ҥ' },
    { cyrillic: 'Ө', label: 'Ө' },
    { cyrillic: 'ө', label: 'ө' },
    { cyrillic: 'Ү', label: 'Ү' },
    { cyrillic: 'ү', label: 'ү' },
];

// ─────────────────────────────────────────────
// URL state: encode/decode text + system in the URL
// so users can share links to their conversion
// ─────────────────────────────────────────────

function getStateFromURL() {
    const params = new URLSearchParams(window.location.search);
    return {
        text: params.get('text') || '',
        system: params.get('system') || 'novgorodov',
    };
}

function pushStateToURL(text, system) {
    const params = new URLSearchParams();
    if (text) params.set('text', text);
    if (system && system !== 'novgorodov') params.set('system', system);
    const newUrl = params.toString()
        ? `${window.location.pathname}?${params.toString()}`
        : window.location.pathname;
    history.replaceState(null, '', newUrl);
}

// ─────────────────────────────────────────────
// App initialisation
// ─────────────────────────────────────────────

let currentLang = 'ru';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    const strings = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (!strings[key]) return;
        if (el.hasAttribute('placeholder')) {
            el.setAttribute('placeholder', strings[key]);
        } else if (el.hasAttribute('title')) {
            el.setAttribute('title', strings[key]);
        } else if (el.tagName === 'META' && el.hasAttribute('name')) {
            el.setAttribute('content', strings[key]);
        } else {
            el.innerHTML = strings[key];
        }
    });

    document.title = strings['title'];
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('language', lang);
    updateCharCount(); // re-render count label in correct language
}

function updateThemeUI(theme) {
    document.getElementById('theme-icon').textContent = theme === 'light' ? '🌙' : '☀️';
    document.getElementById('theme-text').textContent = theme === 'light' ? 'Dark' : 'Light';
}

function showToast(messageKey) {
    const toast = document.getElementById('toast');
    toast.textContent = translations[currentLang][messageKey] || messageKey;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

function insertAtCursor(textarea, text) {
    const { selectionStart: start, selectionEnd: end, value } = textarea;
    textarea.value = value.substring(0, start) + text + value.substring(end);
    const pos = start + text.length;
    textarea.setSelectionRange(pos, pos);
    textarea.focus();
}

function updateCharCount() {
    const input = document.getElementById('input-text');
    const counter = document.getElementById('char-count');
    const label = translations[currentLang]['chars'] || 'chars';
    counter.textContent = `${input.value.length} ${label}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const inputTextarea   = document.getElementById('input-text');
    const outputTextarea  = document.getElementById('output-text');
    const translateBtn    = document.getElementById('translate-btn');
    const clearBtn        = document.getElementById('clear-btn');
    const copyBtn         = document.getElementById('copy-btn');
    const themeToggle     = document.getElementById('theme-toggle');
    const alphabetSelect  = document.getElementById('alphabet-select');
    const upperGrid       = document.getElementById('special-chars-grid-uppercase');
    const lowerGrid       = document.getElementById('special-chars-grid-lowercase');

    // ── Init theme ──
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme);

    // ── Init language ──
    const savedLang = localStorage.getItem('language') || 'ru';
    setLanguage(savedLang);

    // ── Restore URL state ──
    const urlState = getStateFromURL();
    if (urlState.text) {
        inputTextarea.value = urlState.text;
    }
    if (alphabetSelect.querySelector(`option[value="${urlState.system}"]`)) {
        alphabetSelect.value = urlState.system;
    }
    if (urlState.text) {
        outputTextarea.value = transliterate(urlState.text, alphabetSelect.value);
    }
    updateCharCount();

    // ── Theme toggle ──
    themeToggle.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeUI(next);
    });

    // ── Clear ──
    clearBtn.addEventListener('click', () => {
        inputTextarea.value = '';
        outputTextarea.value = '';
        updateCharCount();
        pushStateToURL('', alphabetSelect.value);
        inputTextarea.focus();
    });

    // ── Copy ──
    copyBtn.addEventListener('click', () => {
        const text = outputTextarea.value;
        if (!text) { showToast('toast_nothing'); return; }
        navigator.clipboard.writeText(text)
            .then(() => showToast('toast_copied'))
            .catch(() => {
                outputTextarea.select();
                document.execCommand('copy');
                showToast('toast_copied');
            });
    });

    // ── Special character buttons ──
    const uppercase = specialCharacters.filter(c => c.cyrillic === c.cyrillic.toUpperCase() && c.cyrillic !== c.cyrillic.toLowerCase());
    const lowercase = specialCharacters.filter(c => c.cyrillic === c.cyrillic.toLowerCase() && c.cyrillic !== c.cyrillic.toUpperCase());

    [{ chars: uppercase, grid: upperGrid }, { chars: lowercase, grid: lowerGrid }].forEach(({ chars, grid }) => {
        chars.forEach(({ cyrillic, label }) => {
            const btn = document.createElement('button');
            btn.className = 'char-btn';
            btn.innerHTML = `<span class="char-cyrillic">${label}</span>`;
            btn.addEventListener('click', () => insertAtCursor(inputTextarea, cyrillic));
            grid.appendChild(btn);
        });
    });

    // ── Core transliteration ──
    function performTransliteration() {
        const text = inputTextarea.value;
        const system = alphabetSelect.value;
        outputTextarea.value = transliterate(text, system);
        pushStateToURL(text, system);
    }

    // ── Auto-transliterate on input (live) ──
    inputTextarea.addEventListener('input', () => {
        updateCharCount();
        performTransliteration();
    });

    // ── Re-transliterate when system changes ──
    alphabetSelect.addEventListener('change', performTransliteration);

    // ── Ctrl/Cmd+Enter still works ──
    inputTextarea.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            performTransliteration();
        }
    });

    // ── Language switcher ──
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });

    // ── FAQ accordion ──
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
});
