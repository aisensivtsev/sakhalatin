# SakhaLatin — Sakha Cyrillic → Latin Transliterator
# SakhaLatin — Конвертер якутского языка: Кириллица → Латиница

> 🌐 **Live site / Сайт:** [sakhalatin.com](https://sakhalatin.com/)

---

## English

An online converter that transliterates **Yakut (Sakha)** language texts from the Cyrillic alphabet into Latin script — based on three historical writing systems.

### ✨ Features

- 🔤 **Three transliteration standards:**
  - **Novgorodov's Latin** — the original 1920s script by linguist Semyon Andreevich Novgorodov
  - **Yanalif** — the unified Turkic Latin alphabet used 1929–1939
  - **Vengritsa** — the modern Latin-based standard
- ⚡ Instant conversion — type or paste any Yakut Cyrillic text
- 📋 One-click copy of the result
- 🌐 Interface in **Russian**, **English**, and **Sakha**
- 🌙 Light / dark mode
- 📱 Mobile-friendly

**Input (Cyrillic):**
```
Дьокуускайга үөрэхтээх саха уола күндү үтүө кыыһынан кэпсэтэн,
ыалҕа барарга бэлэмнэнэн, үөһээ уорҕа суох олох туһунан
иэстээх санааларын үллэстэ.
```

**Output (Latin — Novgorodov):**
```
зɔku:skajga wreqte:q saqa uola kyndy ytw kɯ:hɯnan kepseten,
ıьlʃa bararga belemnenen, whe: uorʃa suoq ɔlɔq tuhunan
ıeste:q sana:larɯn ylleste.
```

### 🏛️ Historical Background

In the early 20th century, the Sakha language was written in a **Latin script** developed by linguist **Semyon Andreevich Novgorodov**. The language later transitioned to Cyrillic during the Soviet era. This project revives interest in that history and makes historical scripts accessible — especially for younger generations of Sakha people.

### ⚠️ Known Limitations

Some diphthongs cannot be rendered exactly as in the original norms due to limited iOS/Android font support. Adapted forms are used:

| Original | Adapted |
|----------|---------|
| ыа | ıь |
| иэ | ıe |
| уо | uo |
| ө | ɔe |

### 🛠️ Tech Stack

- Pure **HTML / CSS / JavaScript** — no frameworks, no dependencies
- Hosted via **GitHub Pages** with a custom domain

### 🚀 Run Locally

```bash
git clone https://github.com/aisensivtsev/sakhalatin.git
cd sakhalatin
open index.html
```

No build step required.

### 📚 Sources

- [Sakha writing system — Wikipedia (RU)](https://ru.wikipedia.org/wiki/Якутская_письменность)
- [Vengritsa — Wikipedia (SAH)](https://sah.wikipedia.org/wiki/Кыттааччы:Timiriliev/Якутская_венгерица)

### 🤝 Contributing

Feel free to open an **Issue** to report a bug or suggest improvements, or submit a **Pull Request** with changes to the transliteration rules or UI.

### 📬 Contact

- 📷 Instagram: [@sakhalatin](https://www.instagram.com/sakhalatin)
- 📧 Email: sakhalatin@gmail.com

---

## Русский

Онлайн-конвертер для автоматической транслитерации текстов на **якутском (саха)** языке с кириллицы на латиницу — на основе трёх исторических систем письма.

### ✨ Возможности

- 🔤 **Три стандарта транслитерации:**
  - **Латиница Новгородова** — оригинальная система 1920-х годов, разработанная лингвистом С.А. Новгородовым
  - **Яналиф** — единый тюркский латинский алфавит, применявшийся в 1929–1939 гг.
  - **Венгерица** — современный латинизированный стандарт
- ⚡ Мгновенная конвертация — введите или вставьте текст на якутском
- 📋 Копирование результата в один клик
- 🌐 Интерфейс на **русском**, **английском** и **якутском** языках
- 🌙 Светлая / тёмная тема
- 📱 Адаптирован для мобильных устройств

### 🔤 Пример конвертации

**Ввод (кириллица):**
```
Дьокуускайга үөрэхтээх саха уола күндү үтүө кыыһынан кэпсэтэн,
ыалҕа барарга бэлэмнэнэн, үөһээ уорҕа суох олох туһунан
иэстээх санааларын үллэстэ.
```

**Результат (латиница — Новгородов):**
```
зɔku:skajga wreqte:q saqa uola kyndy ytw kɯ:hɯnan kepseten,
ıьlʃa bararga belemnenen, whe: uorʃa suoq ɔlɔq tuhunan
ıeste:q sana:larɯn ylleste.
```

### 🏛️ Историческая справка

В начале XX века якутский язык записывался **латиницей**, разработанной лингвистом **Семёном Андреевичем Новгородовым**. В советский период язык перешёл на кириллицу. Этот проект призван возродить интерес к истории якутской письменности и сделать исторические системы письма доступными — особенно для молодого поколения народа саха.

### ⚠️ Известные ограничения

Некоторые дифтонги не могут быть отображены в точном соответствии с нормами из-за ограниченной поддержки шрифтов на iOS и Android. Используются адаптированные формы:

| Оригинал | Адаптация |
|----------|-----------|
| ыа | ıь |
| иэ | ıe |
| уо | uo |
| ө | ɔe |

### 🛠️ Технологии

- Чистый **HTML / CSS / JavaScript** — без фреймворков и зависимостей
- Хостинг через **GitHub Pages** с подключённым доменом

### 🚀 Запуск локально

```bash
git clone https://github.com/aisensivtsev/sakhalatin.git
cd sakhalatin
open index.html
```

Сборка не требуется.

### 📚 Источники

- [Якутская письменность — Википедия](https://ru.wikipedia.org/wiki/Якутская_письменность)
- [Якутская венгерица — Википедия (саха)](https://sah.wikipedia.org/wiki/Кыттааччы:Timiriliev/Якутская_венгерица)

### 🤝 Участие в проекте

Вы можете открыть **Issue** для сообщения об ошибке или предложения улучшений, а также отправить **Pull Request** с изменениями в правилах транслитерации или интерфейсе.

### 📬 Контакты

- 📷 Instagram: [@sakhalatin](https://www.instagram.com/sakhalatin)
- 📧 Email: sakhalatin@gmail.com

---

## 📄 License / Лицензия

All Rights Reserved © 2026 SakhaLatin.  
Несанкционированное копирование или распространение без письменного разрешения запрещено.
