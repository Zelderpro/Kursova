/* ==========================================================================
   BYWAY LMS — МАСИВИ ОБ'ЄКТІВ (ДАНІ ДЛЯ ДИНАМІЧНОГО DOM-РЕНДЕРИНГУ + ПЕРЕКЛАД EN/UA)
   ========================================================================== */

const UI_TRANSLATIONS = {
    en: {
        nav_categories: "Categories",
        nav_courses: "Courses",
        nav_mentors: "Mentors",
        search_placeholder: "Search courses",
        teach_on_byway: "Teach on Byway",
        btn_login: "Log In",
        btn_signup: "Sign Up",
        hero_title: "Unlock Your Potential with Byway",
        hero_text: "Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success.",
        hero_btn: "Start your instructor journey",
        hero_community: "Join our community of 1200+ Students",
        stat_label_1: "Courses by our best mentors",
        stat_label_2: "Students learning worldwide",
        stat_label_3: "Experienced industry mentors",
        stat_label_4: "Positive student reviews",
        sec_top_categories: "Top Categories",
        sec_top_courses: "Top Courses",
        sec_top_instructors: "Top Instructors",
        sec_testimonials: "What Our Customer Say About Us",
        see_all: "See All",
        cta_inst_title: "Become an Instructor",
        cta_inst_text: "Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.",
        cta_inst_btn: "Start Your Instructor Journey →",
        cta_edu_title: "Transform your life through education",
        cta_edu_text: "Learners around the world are launching new careers, advancing in their fields, and enriching their lives.",
        cta_edu_btn: "Checkout Courses →",
        footer_desc: "Empowering learners through accessible and engaging online education. Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.",
        footer_help: "Get Help",
        footer_contact: "Contact Us",
        footer_articles: "Latest Articles",
        footer_faq: "FAQ",
        footer_404_demo: "Page 404 (Demo)",
        footer_programs: "Programs",
        footer_prog_design: "Art & Design",
        footer_prog_business: "Business",
        footer_prog_it: "IT & Software",
        footer_prog_lang: "Languages",
        footer_prog_dev: "Programming",
        footer_address: "Address: 123 Main Street, Anytown, CA 12345",
        footer_tel: "Tel: +(123) 456-7890",
        footer_mail: "Mail: bywayedu@webkul.in",

        // Category / Catalog Page
        cat_page_title: "Design Courses",
        cat_page_subtitle: "All Development & Design Courses",
        btn_filter: "Filter",
        sort_by: "Sort By",
        sort_relevance: "Relevance",
        sort_price_low: "Price: Low to High",
        sort_price_high: "Price: High to Low",
        sort_rating: "Highest Rated",
        filter_rating: "Rating",
        filter_chapters: "Number of Chapters",
        filter_price: "Price",
        filter_category: "Category",
        price_all: "All Prices",
        price_under_100: "Under $100",
        price_100_150: "$100 – $150",
        price_over_150: "Over $150",
        cat_all: "All Categories",
        cat_design: "Design",
        cat_dev: "Development",
        cat_marketing: "Marketing",
        cat_physics: "Physics",
        cat_astrology: "Astrology",
        btn_reset_filters: "Reset Filters",
        sec_popular_mentors: "Popular Mentors",
        sec_featured_courses: "Featured Courses",
        no_courses_found: "No courses match your selected filters. Try resetting filters.",

        // Course Page
        breadcrumb_home: "Home",
        breadcrumb_categories: "Categories",
        created_by: "Created by",
        course_langs_label: "English, Spanish, Italian, German, Ukrainian",
        discount_off: "50% Off",
        btn_add_to_cart: "Add To Cart",
        btn_buy_now: "Buy Now",
        share_label: "Share",
        tab_description: "Description",
        tab_instructor: "Instructor",
        tab_syllabus: "Syllabus",
        tab_reviews: "Reviews",
        course_desc_heading: "Course Description",
        course_cert_heading: "Certification",
        course_cert_text: "At Byway, we understand the significance of formal recognition for your hard work and dedication to continuous learning. Upon successful completion of our courses, you will earn a prestigious certification that not only validates your expertise but also opens doors to new opportunities in your chosen field.",
        instructor_heading: "Instructor",
        syllabus_heading: "Syllabus",
        reviews_heading: "Learner Reviews",
        btn_more_reviews: "View more Reviews",
        sec_more_courses: "More Courses Like This",

        // Mentor Page
        mentor_label: "Instructor",
        mentor_total_students: "Total Students",
        mentor_reviews_label: "Reviews",
        mentor_about_prefix: "About",
        mentor_expertise_title: "Areas of Expertise",
        mentor_exp_title: "Professional Experience",
        mentor_more_courses: "More Courses by",
        btn_website: "Website",
        btn_twitter: "Twitter",
        btn_youtube: "Youtube",

        // 404 Page
        err_title: "Oops! Page Not Found",
        err_text: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
        err_btn_home: "Back to Home",
        err_btn_courses: "Browse All Courses",

        // Dynamic / Toasts
        courses_word: "Courses",
        students_word: "Students",
        ratings_word: "Ratings",
        reviews_word: "reviews",
        reviewed_on: "Reviewed on",
        toast_added_cart: "Course added to cart!",
        toast_link_copied: "Link copied to clipboard!",
        toast_demo_auth: "Demo mode: Authentication window opened.",
        toast_video_demo: "Intro video preview is ready!"
    },
    uk: {
        nav_categories: "Категорії",
        nav_courses: "Курси",
        nav_mentors: "Ментори",
        search_placeholder: "Пошук курсів",
        teach_on_byway: "Викладати на Byway",
        btn_login: "Увійти",
        btn_signup: "Реєстрація",
        hero_title: "Розкрийте свій потенціал разом із Byway",
        hero_text: "Ласкаво просимо до Byway — платформи, де навчання не має меж. Ми віримо, що освіта є ключем до особистого та професійного зростання, і допоможемо вам на шляху до успіху.",
        hero_btn: "Почати шлях викладача",
        hero_community: "Приєднуйтесь до спільноти 1200+ студентів",
        stat_label_1: "Курсів від найкращих менторів",
        stat_label_2: "Студентів навчаються по всьому світу",
        stat_label_3: "Досвідчених менторів-практиків",
        stat_label_4: "Позитивних відгуків студентів",
        sec_top_categories: "Популярні категорії",
        sec_top_courses: "Топ курси",
        sec_top_instructors: "Найкращі викладачі",
        sec_testimonials: "Що кажуть наші студенти про нас",
        see_all: "Дивитись всі",
        cta_inst_title: "Станьте викладачем",
        cta_inst_text: "Викладачі з усього світу навчають мільйони студентів на Byway. Ми надаємо інструменти та підтримку, щоб ви ділилися своїми знаннями.",
        cta_inst_btn: "Стати викладачем →",
        cta_edu_title: "Змініть своє життя завдяки освіті",
        cta_edu_text: "Студенти по всьому світу опановують нові професії, розвивають кар'єру та досягають нових вершин.",
        cta_edu_btn: "Переглянути курси →",
        footer_desc: "Надихаємо студентів через доступну та інтерактивну онлайн-освіту. Byway — сучасна освітня платформа для якісного та гнучкого навчання.",
        footer_help: "Допомога",
        footer_contact: "Контакти",
        footer_articles: "Останні статті",
        footer_faq: "Часті запитання",
        footer_404_demo: "Сторінка 404 (Тест)",
        footer_programs: "Напрямки",
        footer_prog_design: "Мистецтво та дизайн",
        footer_prog_business: "Бізнес",
        footer_prog_it: "IT та ПЗ",
        footer_prog_lang: "Іноземні мови",
        footer_prog_dev: "Програмування",
        footer_address: "Адреса: вул. Головна, 123, Івано-Франківськ",
        footer_tel: "Тел: +(123) 456-7890",
        footer_mail: "Пошта: bywayedu@webkul.in",

        // Category / Catalog Page
        cat_page_title: "Курси дизайну та розробки",
        cat_page_subtitle: "Усі популярні навчальні програми",
        btn_filter: "Фільтри",
        sort_by: "Сортувати:",
        sort_relevance: "За релевантністю",
        sort_price_low: "Ціна: від низької до високої",
        sort_price_high: "Ціна: від високої до низької",
        sort_rating: "За найвищим рейтингом",
        filter_rating: "Рейтинг",
        filter_chapters: "Кількість розділів",
        filter_price: "Ціна",
        filter_category: "Категорія",
        price_all: "Будь-яка ціна",
        price_under_100: "До $100",
        price_100_150: "$100 – $150",
        price_over_150: "Понад $150",
        cat_all: "Усі категорії",
        cat_design: "Дизайн",
        cat_dev: "Розробка",
        cat_marketing: "Маркетинг",
        cat_physics: "Фізика",
        cat_astrology: "Астрологія",
        btn_reset_filters: "Скинути фільтри",
        sec_popular_mentors: "Популярні ментори",
        sec_featured_courses: "Рекомендовані курси",
        no_courses_found: "За обраними фільтрами курсів не знайдено. Спробуйте скинути фільтри.",

        // Course Page
        breadcrumb_home: "Головна",
        breadcrumb_categories: "Категорії",
        created_by: "Автор курсу:",
        course_langs_label: "Англійська, Українська, Іспанська, Німецька",
        discount_off: "Знижка 50%",
        btn_add_to_cart: "Додати в кошик",
        btn_buy_now: "Купити зараз",
        share_label: "Поділитися",
        tab_description: "Опис",
        tab_instructor: "Викладач",
        tab_syllabus: "Програма",
        tab_reviews: "Відгуки",
        course_desc_heading: "Опис курсу",
        course_cert_heading: "Сертифікація",
        course_cert_text: "У Byway ми цінуємо офіційне визнання вашої наполегливої праці та прагнення до розвитку. Після успішного завершення курсу ви отримаєте іменний сертифікат, який підтвердить вашу кваліфікацію для роботодавців.",
        instructor_heading: "Викладач курсу",
        syllabus_heading: "Програма навчання",
        reviews_heading: "Відгуки студентів",
        btn_more_reviews: "Показати більше відгуків",
        sec_more_courses: "Схожі курси",

        // Mentor Page
        mentor_label: "Викладач",
        mentor_total_students: "Усього студентів",
        mentor_reviews_label: "Відгуків",
        mentor_about_prefix: "Про викладача:",
        mentor_expertise_title: "Сфери експертизи",
        mentor_exp_title: "Професійний досвід",
        mentor_more_courses: "Інші курси від",
        btn_website: "Вебсайт",
        btn_twitter: "Twitter / X",
        btn_youtube: "YouTube",

        // 404 Page
        err_title: "Ой! Сторінку не знайдено",
        err_text: "Можливо, сторінку було видалено, змінено її адресу або вона тимчасово недоступна.",
        err_btn_home: "На головну",
        err_btn_courses: "До каталогу курсів",

        // Dynamic / Toasts
        courses_word: "Курсів",
        students_word: "Студентів",
        ratings_word: "Оцінок",
        reviews_word: "відгуків",
        reviewed_on: "Дата відгуку:",
        toast_added_cart: "Курс додано до кошика!",
        toast_link_copied: "Посилання скопійовано в буфер обміну!",
        toast_demo_auth: "Демо-режим: вікно авторизації відкрито.",
        toast_video_demo: "Відео-прев'ю курсу готове до перегляду!"
    }
};

/* ==========================================================================
   МАСИВ КАТЕГОРІЙ (CATEGORIES_DATA)
   ========================================================================== */
const CATEGORIES_DATA = [
    {
        id: "astrology",
        filterKey: "Astrology",
        title: { en: "Astrology", uk: "Астрологія" },
        count: 11,
        image: "img/category-astrology.png" // <--- [ВСТАВТЕ ФОТО]: впишіть назву вашого файлу для категорії Astrology
    },
    {
        id: "development",
        filterKey: "Development",
        title: { en: "Development", uk: "Розробка" },
        count: 12,
        image: "img/category-development.png" // <--- [ВСТАВТЕ ФОТО]: впишіть назву вашого файлу для категорії Development
    },
    {
        id: "marketing",
        filterKey: "Marketing",
        title: { en: "Marketing", uk: "Маркетинг" },
        count: 12,
        image: "img/category-marketing.png" // <--- [ВСТАВТЕ ФОТО]: впишіть назву вашого файлу для категорії Marketing
    },
    {
        id: "physics",
        filterKey: "Physics",
        title: { en: "Physics", uk: "Фізика" },
        count: 14,
        image: "img/category-physics.png" // <--- [ВСТАВТЕ ФОТО]: впишіть назву вашого файлу для категорії Physics
    }
];

/* ==========================================================================
   МАСИВ КУРСІВ (COURSES_DATA)
   ========================================================================== */
const COURSES_DATA = [
    {
        id: 1,
        title: {
            en: "Introduction to User Experience Design",
            uk: "Вступ до дизайну користувацького досвіду (UX)"
        },
        description: {
            en: "This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.",
            uk: "Цей курс створений для того, щоб дати вам фундаментальне розуміння принципів, методологій та інструментів сучасного UX/UI-дизайну цифрових продуктів."
        },
        author: "Ronald Richards",
        mentorId: 1,
        category: "Design",
        rating: 4.9,
        stars: 5,
        ratingsCount: 1200,
        hours: 22,
        lectures: 155,
        chapters: 18,
        level: { en: "Beginner", uk: "Початковий" },
        price: 49.5,
        oldPrice: 99.5,
        image: "img/course-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу обкладинки курсу 1
        syllabus: [
            {
                title: { en: "Introduction to UX Design", uk: "Вступ до UX-дизайну" },
                meta: { en: "5 Lessons · 1 hour", uk: "5 уроків · 1 год" },
                lessons: {
                    en: ["What is User Experience?", "UX vs UI Design", "Design Thinking Overview", "User Research Basics", "Module Quiz"],
                    uk: ["Що таке User Experience?", "Різниця між UX та UI", "Огляд Design Thinking", "Основи дослідження користувачів", "Підсумковий тест"]
                }
            },
            {
                title: { en: "Basics of User-Centered Design", uk: "Основи людиноцентричного дизайну" },
                meta: { en: "5 Lessons · 1 hour", uk: "5 уроків · 1 год" },
                lessons: {
                    en: ["Creating User Personas", "Empathy Mapping", "Customer Journey Maps", "Defining Problem Statements", "Practical Workshop"],
                    uk: ["Створення персон користувачів", "Карта емпатії", "Карта шляху клієнта (CJM)", "Формулювання задач", "Практичний воркшоп"]
                }
            },
            {
                title: { en: "Elements of User Experience", uk: "Елементи користувацького досвіду" },
                meta: { en: "5 Lessons · 1 hour", uk: "5 уроків · 1 год" },
                lessons: {
                    en: ["Information Architecture", "User Flows & Sitemaps", "Low-Fidelity Wireframing", "Interactive Prototyping", "Usability Heuristics"],
                    uk: ["Інформаційна архітектура", "Користувацькі сценарії", "Створення вайрфреймів", "Інтерактивне прототипування", "Евристики юзабіліті"]
                }
            },
            {
                title: { en: "Visual Design Principles", uk: "Принципи візуального дизайну" },
                meta: { en: "5 Lessons · 1 hour", uk: "5 уроків · 1 год" },
                lessons: {
                    en: ["Typography & Hierarchy", "Color Theory in UI", "Grid Systems & Spacing", "Figma Components", "Final Portfolio Project"],
                    uk: ["Типографіка та ієрархія", "Теорія кольору в інтерфейсах", "Сітки та відступи", "Компоненти у Figma", "Фінальний проєкт у портфоліо"]
                }
            }
        ]
    },
    {
        id: 2,
        title: {
            en: "Beginner's Guide to Design",
            uk: "Посібник для початківців у вебдизайні"
        },
        description: {
            en: "Learn layout composition, Figma prototyping, typography, and modern responsive UI systems from scratch with hands-on projects.",
            uk: "Опануйте композицію, прототипування у Figma, типографіку та сучасні адаптивні інтерфейси з нуля на реальних прикладах."
        },
        author: "Ronald Richards",
        mentorId: 1,
        category: "Design",
        rating: 4.8,
        stars: 5,
        ratingsCount: 1200,
        hours: 22,
        lectures: 155,
        chapters: 16,
        level: { en: "Beginner", uk: "Початковий" },
        price: 149.9,
        oldPrice: 199.9,
        image: "img/course-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу обкладинки курсу 2
        syllabus: []
    },
    {
        id: 3,
        title: {
            en: "Full-Stack Web Development Bootcamp",
            uk: "Повний курс Full-Stack веб-розробки"
        },
        description: {
            en: "Build responsive websites and web apps using HTML5, CSS3, modern JavaScript (ES6+), REST APIs, and relational databases.",
            uk: "Створюйте адаптивні вебсайти та додатки за допомогою HTML5, CSS3, сучасного JavaScript (ES6+), REST API та баз даних."
        },
        author: "Alex Morgan",
        mentorId: 2,
        category: "Development",
        rating: 4.9,
        stars: 5,
        ratingsCount: 980,
        hours: 34,
        lectures: 210,
        chapters: 22,
        level: { en: "All Levels", uk: "Усі рівні" },
        price: 129.0,
        oldPrice: 179.0,
        image: "img/course-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу обкладинки курсу 3
        syllabus: []
    },
    {
        id: 4,
        title: {
            en: "Digital Marketing & Brand Strategy",
            uk: "Цифровий маркетинг та стратегія бренду"
        },
        description: {
            en: "Master SEO, content marketing, social media campaigns, and conversion analytics to scale modern digital businesses.",
            uk: "Опануйте SEO, контент-маркетинг, таргетовану рекламу та аналітику конверсій для масштабування сучасного бізнесу."
        },
        author: "Sophia Chen",
        mentorId: 3,
        category: "Marketing",
        rating: 4.7,
        stars: 4,
        ratingsCount: 740,
        hours: 18,
        lectures: 120,
        chapters: 12,
        level: { en: "Beginner", uk: "Початковий" },
        price: 89.9,
        oldPrice: 139.9,
        image: "img/course-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу обкладинки курсу 4
        syllabus: []
    },
    {
        id: 5,
        title: {
            en: "Modern JavaScript & DOM Architecture",
            uk: "Сучасний JavaScript та робота з DOM"
        },
        description: {
            en: "Deep dive into asynchronous JavaScript, dynamic DOM manipulation, modular architecture, and interactive UI components.",
            uk: "Поглиблене вивчення асинхронного JavaScript, динамічного формування DOM-елементів та інтерактивних компонентів."
        },
        author: "Alex Morgan",
        mentorId: 2,
        category: "Development",
        rating: 4.9,
        stars: 5,
        ratingsCount: 1540,
        hours: 26,
        lectures: 168,
        chapters: 19,
        level: { en: "Intermediate", uk: "Середній" },
        price: 119.0,
        oldPrice: 169.0,
        image: "img/course-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу обкладинки курсу 5
        syllabus: []
    },
    {
        id: 6,
        title: {
            en: "Applied Physics & Electronics Fundamentals",
            uk: "Прикладна фізика та основи електроніки"
        },
        description: {
            en: "Understand semiconductor devices, circuit analysis, signal processing, and practical laboratory measurements.",
            uk: "Вивчайте напівпровідникові прилади, аналіз електричних кіл, обробку сигналів та практичні вимірювання."
        },
        author: "Dr. Liam Vance",
        mentorId: 4,
        category: "Physics",
        rating: 4.8,
        stars: 5,
        ratingsCount: 615,
        hours: 28,
        lectures: 140,
        chapters: 15,
        level: { en: "All Levels", uk: "Усі рівні" },
        price: 95.0,
        oldPrice: 145.0,
        image: "img/course-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу обкладинки курсу 6
        syllabus: []
    },
    {
        id: 7,
        title: {
            en: "UI Design Systems & Component Libraries",
            uk: "Дизайн-системи та бібліотеки компонентів"
        },
        description: {
            en: "Create scalable design tokens, accessible UI kits, and developer-ready documentation in Figma.",
            uk: "Створюйте масштабовані дизайн-токени, доступні UI-кіти та документацію для розробників у Figma."
        },
        author: "Ronald Richards",
        mentorId: 1,
        category: "Design",
        rating: 4.9,
        stars: 5,
        ratingsCount: 1105,
        hours: 20,
        lectures: 132,
        chapters: 14,
        level: { en: "Intermediate", uk: "Середній" },
        price: 159.0,
        oldPrice: 210.0,
        image: "img/course-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу обкладинки курсу 7
        syllabus: []
    },
    {
        id: 8,
        title: {
            en: "Astrology & Celestial Navigation",
            uk: "Астрологія та основи небесної навігації"
        },
        description: {
            en: "Explore historical star charts, planetary cycles, and classical astronomical observation techniques.",
            uk: "Досліджуйте історичні зоряні карти, планетарні цикли та класичні методи астрономічних спостережень."
        },
        author: "Elena Rostova",
        mentorId: 5,
        category: "Astrology",
        rating: 4.5,
        stars: 4,
        ratingsCount: 430,
        hours: 14,
        lectures: 85,
        chapters: 9,
        level: { en: "Beginner", uk: "Початковий" },
        price: 69.0,
        oldPrice: 110.0,
        image: "img/course-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу обкладинки курсу 8
        syllabus: []
    },
    {
        id: 9,
        title: {
            en: "Mobile-First Responsive Web Design",
            uk: "Адаптивна верстка за підходом Mobile First"
        },
        description: {
            en: "Master CSS Grid, Flexbox, fluid typography, and mobile-first breakpoints for flawless cross-device websites.",
            uk: "Опануйте CSS Grid, Flexbox, гнучку типографіку та підхід Mobile First для ідеального відображення на будь-якому пристрої."
        },
        author: "Ronald Richards",
        mentorId: 1,
        category: "Design",
        rating: 4.9,
        stars: 5,
        ratingsCount: 1390,
        hours: 19,
        lectures: 128,
        chapters: 17,
        level: { en: "Beginner", uk: "Початковий" },
        price: 139.9,
        oldPrice: 189.9,
        image: "img/course-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу обкладинки курсу 9
        syllabus: []
    }
];

/* ==========================================================================
   МАСИВ ВИКЛАДАЧІВ / МЕНТОРІВ (INSTRUCTORS_DATA)
   ========================================================================== */
const INSTRUCTORS_DATA = [
    {
        id: 1,
        name: "Ronald Richards",
        role: { en: "Web developer, UX/UI Designer, and Teacher", uk: "Веб-розробник, UX/UI-дизайнер та викладач" },
        shortRole: { en: "UI/UX Designer", uk: "UI/UX Дизайнер" },
        rating: 4.9,
        students: 2400,
        reviews: 154,
        image: "img/instructor-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу фото викладача 1 (Ronald Richards)
        about: {
            en: "Ronald Richards is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions. With a background in graphic design and a keen eye for detail, Ronald specializes in creating intuitive interfaces that delight users and drive business results.",
            uk: "Рональд Річардс — висококваліфікований UX/UI-дизайнер із понад десятирічним досвідом створення зручних цифрових продуктів. Маючи базу в графічному дизайні та увагу до деталей, Рональд спеціалізується на інтуїтивних інтерфейсах."
        },
        expertise: {
            en: [
                "User Experience (UX) Design",
                "User Interface (UI) Design",
                "Information Architecture",
                "Interaction Design",
                "Visual Design",
                "Usability Testing",
                "Wireframing and Prototyping",
                "Design Thinking"
            ],
            uk: [
                "Проєктування користувацького досвіду (UX Design)",
                "Дизайн інтерфейсів (UI Design)",
                "Інформаційна архітектура",
                "Інтерактивний дизайн",
                "Візуальний дизайн",
                "Юзабіліті-тестування",
                "Вайрфреймінг та прототипування",
                "Дизайн-мислення (Design Thinking)"
            ]
        },
        experience: {
            en: "Ronald Richards has an extensive professional background in UX/UI design, having worked with renowned global tech companies and startups. His portfolio includes a diverse range of projects spanning web applications, mobile apps, and e-commerce platforms.",
            uk: "Рональд Річардс має багаторічний професійний досвід у сфері UX/UI-дизайну, співпрацюючи з провідними технологічними компаніями. Його портфоліо охоплює вебдодатки, мобільні застосунки та освітні платформи."
        }
    },
    {
        id: 2,
        name: "Alex Morgan",
        role: { en: "Senior Frontend & Full-Stack Engineer", uk: "Senior Frontend та Full-Stack розробник" },
        shortRole: { en: "Full-Stack Developer", uk: "Full-Stack Розробник" },
        rating: 4.9,
        students: 3100,
        reviews: 210,
        image: "img/instructor-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу фото викладача 2
        about: {
            en: "Alex Morgan is a full-stack web architect passionate about clean JavaScript, accessible web standards, and scalable cloud applications.",
            uk: "Алекс Морган — архітектор вебдодатків, який спеціалізується на сучасному JavaScript, доступності вебу та масштабованих системах."
        },
        expertise: {
            en: ["HTML5 & Semantic Web", "Modern CSS & Mobile First", "JavaScript (ES6+)", "Node.js & PostgreSQL"],
            uk: ["HTML5 та семантична верстка", "Сучасний CSS та Mobile First", "JavaScript (ES6+)", "Node.js та PostgreSQL"]
        },
        experience: {
            en: "Over 9 years building production web platforms and mentoring thousands of junior developers worldwide.",
            uk: "Понад 9 років досвіду розробки комерційних вебплатформ та менторства тисяч розробників."
        }
    },
    {
        id: 3,
        name: "Sophia Chen",
        role: { en: "Digital Marketing Lead & Brand Strategist", uk: "Керівниця відділу цифрового маркетингу" },
        shortRole: { en: "Marketing Strategist", uk: "Маркетинг-стратег" },
        rating: 4.8,
        students: 1950,
        reviews: 128,
        image: "img/instructor-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу фото викладача 3
        about: {
            en: "Sophia helps EdTech and SaaS companies grow organic reach and build meaningful customer relationships.",
            uk: "Софія допомагає технологічним та освітнім проєктам масштабувати аудиторію та вибудовувати ефективну комунікацію."
        },
        expertise: {
            en: ["SEO & Content Strategy", "Performance Marketing", "Product Positioning", "Web Analytics"],
            uk: ["SEO та контент-стратегія", "Performance-маркетинг", "Позиціонування продукту", "Вебаналітика"]
        },
        experience: {
            en: "8+ years leading international digital growth campaigns across Europe and North America.",
            uk: "Понад 8 років управління міжнародними маркетинговими кампаніями в Європі та Північній Америці."
        }
    },
    {
        id: 4,
        name: "Dr. Liam Vance",
        role: { en: "PhD in Applied Physics & Electronics", uk: "Кандидат фізико-математичних наук, електроніка" },
        shortRole: { en: "Physics & Electronics", uk: "Фізика та електроніка" },
        rating: 4.9,
        students: 1620,
        reviews: 96,
        image: "img/instructor-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу фото викладача 4
        about: {
            en: "Dr. Liam Vance bridges theoretical physics and practical electronic circuit engineering for students of all backgrounds.",
            uk: "Доктор Ліам Венс поєднує теоретичну фізику та практичну схемотехніку в доступному форматі для студентів."
        },
        expertise: {
            en: ["Semiconductor Physics", "Digital & Analog Circuits", "Metrology & Instrumentation", "Signal Processing"],
            uk: ["Фізика напівпровідників", "Цифрова та аналогова схемотехніка", "Метрологія та вимірювання", "Обробка сигналів"]
        },
        experience: {
            en: "12 years of university lecturing and hardware R&D engineering experience.",
            uk: "12 років викладацької діяльності та інженерних розробок у галузі електроніки."
        }
    },
    {
        id: 5,
        name: "Elena Rostova",
        role: { en: "Astronomy & Classical Astrology Researcher", uk: "Дослідниця астрономії та класичної астрології" },
        shortRole: { en: "Astronomy & Astrology", uk: "Астрономія та астрологія" },
        rating: 4.7,
        students: 1400,
        reviews: 84,
        image: "img/instructor-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу фото викладача 5
        about: {
            en: "Elena teaches the history of celestial mapping, planetary movements, and observational astronomy.",
            uk: "Олена викладає історію зоряних карт, рух планет та основи спостережної астрономії."
        },
        expertise: {
            en: ["Celestial Mechanics", "Historical Star Charts", "Planetary Cycles"],
            uk: ["Небесна механіка", "Історичні карти неба", "Планетарні цикли"]
        },
        experience: {
            en: "Author of interactive sky-mapping guides and popular science lectures.",
            uk: "Авторка інтерактивних путівників зоряним небом та науково-популярних лекцій."
        }
    }
];

/* ==========================================================================
   МАСИВ ВІДГУКІВ НА ГОЛОВНІЙ ТА СТОРІНЦІ КУРСУ (TESTIMONIALS_DATA)
   ========================================================================== */
const TESTIMONIALS_DATA = [
    {
        text: {
            en: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.",
            uk: "Технічні курси на Byway — просто на найвищому рівні! Як людина, яка прагне постійно розвиватися в IT, я дуже ціную актуальний контент і зручну подачу матеріалу."
        },
        name: "Jane Doe",
        role: { en: "UI/UX Designer", uk: "UI/UX Дизайнерка" },
        avatar: "img/customer-1.jpg" // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу аватара клієнта 1
    },
    {
        text: {
            en: "The structured syllabus and hands-on projects helped me build a real portfolio in just two months. The instructors explain complex topics clearly and practically.",
            uk: "Чітка програма навчання та практичні завдання допомогли мені зібрати сильне портфоліо всього за два місяці. Викладачі пояснюють складні речі просто і зрозуміло."
        },
        name: "Michael Brown",
        role: { en: "Frontend Developer", uk: "Frontend-розробник" },
        avatar: "img/customer-1.jpg" // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу аватара клієнта 2
    },
    {
        text: {
            en: "Learning on Byway fits easily into my daily schedule. Being able to switch languages and review lessons on both my phone and laptop makes studying effortless.",
            uk: "Навчання на Byway легко поєднується з моїм графіком. Зручно відкривати уроки як зі смартфона, так і з ноутбука в будь-який вільний час."
        },
        name: "Olena Kovalenko",
        role: { en: "Product Manager", uk: "Продакт-менеджерка" },
        avatar: "img/customer-1.jpg" // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу аватара клієнта 3
    },
    {
        text: {
            en: "Amazing community and practical feedback from mentors. Every module ends with real exercises that solidify everything you just learned.",
            uk: "Чудова спільнота та корисний фідбек від менторів. Кожен модуль завершується практичними вправами, які закріплюють знання."
        },
        name: "David Wilson",
        role: { en: "Software Engineer", uk: "Інженер-програміст" },
        avatar: "img/customer-1.jpg" // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу аватара клієнта 4
    }
];

/* ==========================================================================
   МАСИВ ВІДГУКІВ СТУДЕНТІВ ПРО КУРС / МЕНТОРА (REVIEWS_DATA)
   ========================================================================== */
const REVIEWS_DATA = [
    {
        name: "Mark Doe",
        rating: 5,
        date: { en: "22nd March, 2026", uk: "22 березня 2026" },
        avatar: "img/customer-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу аватара студента 1
        text: {
            en: "I was initially apprehensive, having no prior design experience. But the instructor, Ronald Richards, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
            uk: "Спочатку я хвилювався, оскільки не мав попереднього досвіду в дизайні. Але викладач Рональд Річардс чудово розбив складні концепції на зрозумілі модулі. Відеолекції захопливі, а реальні приклади допомогли закріпити матеріал."
        }
    },
    {
        name: "Anna Petrenko",
        rating: 5,
        date: { en: "14th April, 2026", uk: "14 квітня 2026" },
        avatar: "img/customer-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу аватара студента 2
        text: {
            en: "Very well-structured course! Every lesson builds logically on the previous one, and the practical tasks gave me confidence to create my first full responsive prototype.",
            uk: "Дуже добре структурований курс! Кожен урок логічно продовжує попередній, а практичні завдання дали впевненість для створення першого повноцінного адаптивного прототипу."
        }
    },
    {
        name: "Taras Melnyk",
        rating: 5,
        date: { en: "2nd May, 2026", uk: "2 травня 2026" },
        avatar: "img/customer-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу аватара студента 3
        text: {
            en: "Great balance between theory and practice. Highly recommended for anyone starting their career in digital product design or frontend development.",
            uk: "Чудовий баланс між теорією та практикою. Щиро рекомендую всім, хто починає свій шлях у дизайні цифрових продуктів або веб-розробці."
        }
    },
    {
        name: "Sarah Jenkins",
        rating: 5,
        date: { en: "19th June, 2026", uk: "19 червня 2026" },
        avatar: "img/customer-1.jpg", // <--- [ВСТАВТЕ ФОТО]: впишіть назву файлу аватара студента 4
        text: {
            en: "Clear explanations, responsive support, and high-quality downloadable resources. Worth every minute!",
            uk: "Зрозумілі пояснення, швидка підтримка та якісні навчальні матеріали. Вартий кожної хвилини!"
        }
    }
];
