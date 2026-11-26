/* ==========================================================================
   BYWAY LMS — ОСНОВНА ЛОГІКА JAVASCRIPT
   - Перемикання мови (EN <-> UA) зі збереженням у localStorage
   - Мобільне меню (Burger Menu)
   - Кнопка «Вгору» (Scroll to Top)
   - Динамічне формування DOM-елементів із масивів об'єктів
   - Інтерактивні фільтри, сортування, таби, акордеон, слайдер відгуків та кошик
   ========================================================================== */

let currentLang = localStorage.getItem("byway_lang") || "en";
let cartCount = parseInt(localStorage.getItem("byway_cart_count") || "0", 10);
let testimonialOffset = 0;
let mentorCoursesOffset = 0;
let visibleReviewsCount = 3;

function t(key) {
    return (UI_TRANSLATIONS[currentLang] && UI_TRANSLATIONS[currentLang][key]) || key;
}

/* --------------------------------------------------------------------------
   ДОПОМІЖНА ФУНКЦІЯ ДЛЯ ФОТО (якщо фото ще не додано у папку img/)
   Показує акуратну заглушку з назвою файлу, який треба покласти у img/
   -------------------------------------------------------------------------- */
function attachImageFallback(imgElement, originalSrc) {
    imgElement.addEventListener("error", function handleErr() {
        imgElement.removeEventListener("error", handleErr);
        const label = originalSrc || "img/photo.jpg";
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="260" viewBox="0 0 400 260">
            <rect width="400" height="260" fill="#e2e8f0"/>
            <rect x="16" y="16" width="368" height="228" rx="12" fill="#f8fafc" stroke="#94a3b8" stroke-dasharray="6 6"/>
            <text x="200" y="122" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#334155" text-anchor="middle">Byway Image Placeholder</text>
            <text x="200" y="148" font-family="monospace" font-size="13" fill="#3b82f6" text-anchor="middle">${label}</text>
        </svg>`;
        imgElement.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
    });
}

function initAllStaticImageFallbacks() {
    document.querySelectorAll("img").forEach((img) => {
        const rawSrc = img.getAttribute("src");
        if (rawSrc && !rawSrc.startsWith("data:")) {
            attachImageFallback(img, rawSrc);
        }
    });
}
// Вкажіть тут назви всіх HTML-файлів, які реально є у вашій папці
const existingPages = [
    'index.html',
    'course.html',
    'category.html',
    'mentor.html',
    '404.html'
];

document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

    const pageName = href.replace(/^\.?\//, '').split('#')[0].split('?')[0];

    // Якщо це заглушка '#' або сторінки немає у списку existingPages — відкриваємо 404.html
    if (href === '#' || (pageName && !existingPages.includes(pageName))) {
        e.preventDefault();
        window.location.href = '404.html';
    }
});

/* --------------------------------------------------------------------------
   ПЕРЕМИКАННЯ МОВИ (EN / UA)
   -------------------------------------------------------------------------- */
function applyLanguage(lang) {
    currentLang = lang === "uk" ? "uk" : "en";
    localStorage.setItem("byway_lang", currentLang);
    document.documentElement.lang = currentLang;

    // Оновлюємо активний стан кнопок перемикача мови
    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
        btn.classList.toggle("is-active", btn.dataset.lang === currentLang);
    });

    // Переклад статичних текстів через data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        if (UI_TRANSLATIONS[currentLang][key]) {
            el.textContent = UI_TRANSLATIONS[currentLang][key];
        }
    });

    // Переклад placeholder у полях вводу
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.dataset.i18nPlaceholder;
        if (UI_TRANSLATIONS[currentLang][key]) {
            el.placeholder = UI_TRANSLATIONS[currentLang][key];
        }
    });

    // Перемальовуємо динамічні блоки на поточній сторінці
    renderDynamicSections();
}

function initLanguageSwitcher() {
    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            applyLanguage(btn.dataset.lang);
        });
    });
}

/* --------------------------------------------------------------------------
   МОБІЛЬНЕ БУРГЕР-МЕНЮ
   -------------------------------------------------------------------------- */
function initBurgerMenu() {
    const burgerButton = document.querySelector(".header__burger");
    const headerWrapper = document.querySelector(".header__wrapper");

    if (!burgerButton || !headerWrapper) return;

    burgerButton.addEventListener("click", () => {
        const isOpen = headerWrapper.classList.toggle("is-open");
        burgerButton.textContent = isOpen ? "✕" : "☰";
        burgerButton.setAttribute("aria-expanded", String(isOpen));
        burgerButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && headerWrapper.classList.contains("is-open")) {
            headerWrapper.classList.remove("is-open");
            burgerButton.textContent = "☰";
            burgerButton.setAttribute("aria-expanded", "false");
        }
    });
}

/* --------------------------------------------------------------------------
   КНОПКА «ВГОРУ» (SCROLL TO TOP) ТА ПОВІДОМЛЕННЯ (TOAST)
   -------------------------------------------------------------------------- */
function initScrollToTop() {
    let btn = document.getElementById("scrollTopBtn");
    if (!btn) {
        btn = document.createElement("button");
        btn.id = "scrollTopBtn";
        btn.className = "scroll-top-btn";
        btn.type = "button";
        btn.setAttribute("aria-label", "Scroll to top");
        btn.textContent = "↑";
        document.body.appendChild(btn);
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 280) {
            btn.classList.add("is-visible");
        } else {
            btn.classList.remove("is-visible");
        }
    });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

function showToast(message) {
    let toast = document.getElementById("bywayToast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "bywayToast";
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("is-visible");

    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
        toast.classList.remove("is-visible");
    }, 2800);
}

/* --------------------------------------------------------------------------
   КОШИК ТА ПОШУК У ШАПЦІ
   -------------------------------------------------------------------------- */
function updateCartBadges() {
    document.querySelectorAll(".cart-badge").forEach((badge) => {
        badge.textContent = String(cartCount);
    });
}

function addToCart() {
    cartCount += 1;
    localStorage.setItem("byway_cart_count", String(cartCount));
    updateCartBadges();
    showToast(t("toast_added_cart"));
}

function initHeaderSearchAndActions() {
    updateCartBadges();

    document.querySelectorAll(".search-form").forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const input = form.querySelector(".search-form__input");
            const query = input ? input.value.trim() : "";
            window.location.href = `category.html?q=${encodeURIComponent(query)}`;
        });
    });

    document.querySelectorAll("[data-demo-auth]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            showToast(t("toast_demo_auth"));
        });
    });
}

/* --------------------------------------------------------------------------
   ДОПОМІЖНІ ФУНКЦІЇ СТВОРЕННЯ DOM-КАРТОК
   -------------------------------------------------------------------------- */
function createCourseCardElement(course) {
    const article = document.createElement("article");
    article.className = "course-card";

    const title = course.title[currentLang];
    const level = course.level[currentLang];
    const starsStr = "★".repeat(course.stars) + "☆".repeat(5 - course.stars);
    const detailsText =
        currentLang === "uk"
            ? `${course.hours} год. · ${course.lectures} лекцій · ${level}`
            : `${course.hours} Total Hours. ${course.lectures} Lectures. ${level}`;

    article.innerHTML = `
        <a href="course.html?id=${course.id}" class="course-card__link">
            <img src="${course.image}" alt="${title}" class="course-card__image">
            <div class="course-card__content">
                <h3 class="course-card__title">${title}</h3>
                <p class="course-card__author">${currentLang === "uk" ? "Автор:" : "By"} ${course.author}</p>
                <div class="course-card__rating">
                    ${starsStr}
                    <span>(${course.ratingsCount} ${t("ratings_word")})</span>
                </div>
                <p class="course-card__details">${detailsText}</p>
                <span class="course-card__price">$${course.price}</span>
            </div>
        </a>
    `;

    const img = article.querySelector("img");
    attachImageFallback(img, course.image);
    return article;
}

function createInstructorCardElement(mentor) {
    const link = document.createElement("a");
    link.href = `mentor.html?id=${mentor.id}`;
    link.className = "instructor-card";

    link.innerHTML = `
        <img src="${mentor.image}" alt="${mentor.name}" class="instructor-card__image">
        <h3 class="instructor-card__name">${mentor.name}</h3>
        <p class="instructor-card__profession">${mentor.shortRole[currentLang]}</p>
        <div class="instructor-card__footer">
            <span>⭐ ${mentor.rating}</span>
            <span>${mentor.students} ${t("students_word")}</span>
        </div>
    `;

    const img = link.querySelector("img");
    attachImageFallback(img, mentor.image);
    return link;
}

function renderTestimonialsCarousel(containerId) {
    const grid = document.getElementById(containerId);
    if (!grid) return;

    grid.innerHTML = "";
    const total = TESTIMONIALS_DATA.length;
    for (let i = 0; i < 3; i++) {
        const item = TESTIMONIALS_DATA[(testimonialOffset + i) % total];
        const card = document.createElement("article");
        card.className = "testimonial-card";
        card.innerHTML = `
            <div class="testimonial-card__quote">“</div>
            <p class="testimonial-card__text">${item.text[currentLang]}</p>
            <div class="testimonial-card__author">
                <img src="${item.avatar}" alt="${item.name}" class="testimonial-card__avatar">
                <div>
                    <h3 class="testimonial-card__name">${item.name}</h3>
                    <p class="testimonial-card__job">${item.role[currentLang]}</p>
                </div>
            </div>
        `;
        attachImageFallback(card.querySelector("img"), item.avatar);
        grid.appendChild(card);
    }
}

/* --------------------------------------------------------------------------
   1. ГОЛОВНА СТОРІНКА (index.html)
   -------------------------------------------------------------------------- */
function renderHomePage() {
    // Топ категорії
    const categoriesGrid = document.getElementById("categories-grid");
    if (categoriesGrid) {
        categoriesGrid.innerHTML = "";
        CATEGORIES_DATA.forEach((cat) => {
            const card = document.createElement("a");
            card.href = `category.html?cat=${encodeURIComponent(cat.filterKey)}`;
            card.className = "category-card";
            card.innerHTML = `
                <div class="category-card__icon">
                    <img src="${cat.image}" alt="${cat.title[currentLang]}">
                </div>
                <h3 class="category-card__title">${cat.title[currentLang]}</h3>
                <p class="category-card__courses">${cat.count} ${t("courses_word")}</p>
            `;
            attachImageFallback(card.querySelector("img"), cat.image);
            categoriesGrid.appendChild(card);
        });
    }

    // Топ курси (4 картки)
    const coursesGrid = document.getElementById("courses-grid");
    if (coursesGrid) {
        coursesGrid.innerHTML = "";
        COURSES_DATA.slice(0, 4).forEach((course) => {
            coursesGrid.appendChild(createCourseCardElement(course));
        });
    }

    // Топ викладачі (4 картки)
    const instructorsGrid = document.getElementById("instructors-grid");
    if (instructorsGrid) {
        instructorsGrid.innerHTML = "";
        INSTRUCTORS_DATA.slice(0, 4).forEach((mentor) => {
            instructorsGrid.appendChild(createInstructorCardElement(mentor));
        });
    }

    // Відгуки клієнтів
    renderTestimonialsCarousel("testimonials-grid");
}

/* --------------------------------------------------------------------------
   2. СТОРІНКА КАТЕГОРІЙ ТА КАТАЛОГУ (category.html)
   -------------------------------------------------------------------------- */
function getFilteredAndSortedCourses() {
    const ratingRadio = document.querySelector('input[name="filter-rating"]:checked');
    const chaptersRadio = document.querySelector('input[name="filter-chapters"]:checked');
    const priceRadio = document.querySelector('input[name="filter-price"]:checked');
    const categoryRadio = document.querySelector('input[name="filter-category"]:checked');
    const sortSelect = document.getElementById("catalog-sort-select");
    const searchInput = document.getElementById("catalog-search-input");

    const minStars = ratingRadio ? parseInt(ratingRadio.value, 10) : 0;
    const chaptersRange = chaptersRadio ? chaptersRadio.value : "all";
    const priceRange = priceRadio ? priceRadio.value : "all";
    const selectedCategory = categoryRadio ? categoryRadio.value : "all";
    const sortBy = sortSelect ? sortSelect.value : "relevance";
    const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : "";

    let filtered = COURSES_DATA.filter((course) => {
        if (minStars > 0 && course.stars < minStars) return false;

        if (chaptersRange === "1-10" && !(course.chapters >= 1 && course.chapters <= 10)) return false;
        if (chaptersRange === "10-15" && !(course.chapters > 10 && course.chapters <= 15)) return false;
        if (chaptersRange === "15-20" && !(course.chapters > 15 && course.chapters <= 20)) return false;
        if (chaptersRange === "20-25" && !(course.chapters > 20 && course.chapters <= 25)) return false;

        if (priceRange === "under100" && !(course.price < 100)) return false;
        if (priceRange === "100-150" && !(course.price >= 100 && course.price <= 150)) return false;
        if (priceRange === "over150" && !(course.price > 150)) return false;

        if (selectedCategory !== "all" && course.category.toLowerCase() !== selectedCategory.toLowerCase()) {
            return false;
        }

        if (searchQuery) {
            const matchEn = course.title.en.toLowerCase().includes(searchQuery);
            const matchUk = course.title.uk.toLowerCase().includes(searchQuery);
            const matchAuthor = course.author.toLowerCase().includes(searchQuery);
            if (!matchEn && !matchUk && !matchAuthor) return false;
        }

        return true;
    });

    if (sortBy === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
}

function renderCategoryPage() {
    const catalogGrid = document.getElementById("catalog-courses-grid");
    if (!catalogGrid) return;

    const courses = getFilteredAndSortedCourses();
    catalogGrid.innerHTML = "";

    if (courses.length === 0) {
        const emptyMsg = document.createElement("p");
        emptyMsg.style.gridColumn = "1 / -1";
        emptyMsg.style.padding = "32px";
        emptyMsg.style.textAlign = "center";
        emptyMsg.style.background = "#f8fafc";
        emptyMsg.style.borderRadius = "12px";
        emptyMsg.textContent = t("no_courses_found");
        catalogGrid.appendChild(emptyMsg);
    } else {
        courses.forEach((course) => {
            catalogGrid.appendChild(createCourseCardElement(course));
        });
    }

    // Popular Mentors (5 карток як у макеті)
    const popularMentorsGrid = document.getElementById("popular-mentors-grid");
    if (popularMentorsGrid) {
        popularMentorsGrid.innerHTML = "";
        INSTRUCTORS_DATA.slice(0, 5).forEach((mentor) => {
            popularMentorsGrid.appendChild(createInstructorCardElement(mentor));
        });
    }

    // Featured Courses (4 картки як у макеті)
    const featuredCoursesGrid = document.getElementById("featured-courses-grid");
    if (featuredCoursesGrid) {
        featuredCoursesGrid.innerHTML = "";
        COURSES_DATA.slice(0, 4).forEach((course) => {
            featuredCoursesGrid.appendChild(createCourseCardElement(course));
        });
    }
}

function initCategoryPageControls() {
    const catalogGrid = document.getElementById("catalog-courses-grid");
    if (!catalogGrid) return;

    // Зчитуємо ?cat= та ?q= з URL
    const params = new URLSearchParams(window.location.search);
    const urlCat = params.get("cat");
    const urlQuery = params.get("q");

    if (urlCat) {
        const targetRadio = document.querySelector(`input[name="filter-category"][value="${urlCat}"]`);
        if (targetRadio) targetRadio.checked = true;
    }

    if (urlQuery) {
        const headerSearch = document.getElementById("catalog-search-input");
        if (headerSearch) headerSearch.value = urlQuery;
    }

    // Кнопка приховування/показу бічної панелі фільтрів
    const toggleFilterBtn = document.getElementById("toggle-filter-btn");
    const sidebar = document.getElementById("catalog-sidebar");
    if (toggleFilterBtn && sidebar) {
        toggleFilterBtn.addEventListener("click", () => {
            sidebar.classList.toggle("is-hidden");
        });
    }

    // Акордеон секцій фільтрів
    document.querySelectorAll(".filter-group__header").forEach((headerBtn) => {
        headerBtn.addEventListener("click", () => {
            headerBtn.closest(".filter-group").classList.toggle("is-collapsed");
        });
    });

    // Слухачі змін фільтрів та сортування
    document.querySelectorAll('#catalog-sidebar input[type="radio"]').forEach((radio) => {
        radio.addEventListener("change", renderCategoryPage);
    });

    const sortSelect = document.getElementById("catalog-sort-select");
    if (sortSelect) {
        sortSelect.addEventListener("change", renderCategoryPage);
    }

    const searchInput = document.getElementById("catalog-search-input");
    if (searchInput) {
        searchInput.addEventListener("input", renderCategoryPage);
    }

    const resetBtn = document.getElementById("reset-filters-btn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            document.querySelectorAll('#catalog-sidebar input[value="all"], #catalog-sidebar input[value="0"]').forEach((r) => {
                r.checked = true;
            });
            if (searchInput) searchInput.value = "";
            if (sortSelect) sortSelect.value = "relevance";
            renderCategoryPage();
        });
    }
}

/* --------------------------------------------------------------------------
   3. СТОРІНКА КУРСУ (course.html)
   -------------------------------------------------------------------------- */
function renderCoursePage() {
    const courseTitleEl = document.getElementById("course-title");
    if (!courseTitleEl) return;

    const params = new URLSearchParams(window.location.search);
    const courseId = parseInt(params.get("id") || "1", 10);
    const course = COURSES_DATA.find((c) => c.id === courseId) || COURSES_DATA[0];
    const mentor = INSTRUCTORS_DATA.find((m) => m.id === course.mentorId) || INSTRUCTORS_DATA[0];

    document.title = `${course.title[currentLang]} — Byway`;
    courseTitleEl.textContent = course.title[currentLang];

    const breadcrumbTitle = document.getElementById("breadcrumb-course-title");
    if (breadcrumbTitle) breadcrumbTitle.textContent = course.title[currentLang];

    const descEl = document.getElementById("course-description-lead");
    if (descEl) descEl.textContent = course.description[currentLang];

    const fullDescEl = document.getElementById("course-full-description");
    if (fullDescEl) fullDescEl.textContent = course.description[currentLang];

    const metaEl = document.getElementById("course-meta-stats");
    if (metaEl) {
        const level = course.level[currentLang];
        metaEl.innerHTML = `
            <span class="course-hero__rating-val">${course.rating} ★★★★★</span>
            <span>(${course.ratingsCount} ${t("ratings_word")})</span>
            <span>|</span>
            <span>${currentLang === "uk" ? `${course.hours} год. · ${course.lectures} лекцій · ${level}` : `${course.hours} Total Hours. ${course.lectures} Lectures. ${level}`}</span>
        `;
    }

    const authorLink = document.getElementById("course-author-link");
    if (authorLink) {
        authorLink.textContent = mentor.name;
        authorLink.href = `mentor.html?id=${mentor.id}`;
    }

    const priceNowEl = document.getElementById("course-price-now");
    const priceOldEl = document.getElementById("course-price-old");
    if (priceNowEl) priceNowEl.textContent = `$${course.price}`;
    if (priceOldEl) priceOldEl.textContent = `$${course.oldPrice}`;

    // Блок інструктора всередині сторінки курсу
    const instNameEl = document.getElementById("course-instructor-name");
    const instRoleEl = document.getElementById("course-instructor-role");
    const instBioEl = document.getElementById("course-instructor-bio");
    if (instNameEl) {
        instNameEl.textContent = mentor.name;
        instNameEl.href = `mentor.html?id=${mentor.id}`;
    }
    if (instRoleEl) instRoleEl.textContent = mentor.shortRole[currentLang];
    if (instBioEl) instBioEl.textContent = mentor.about[currentLang];

    // Програма курсу (Акордеон)
    const syllabusContainer = document.getElementById("syllabus-list");
    if (syllabusContainer) {
        const syllabusItems = course.syllabus && course.syllabus.length > 0 ? course.syllabus : COURSES_DATA[0].syllabus;
        syllabusContainer.innerHTML = "";

        syllabusItems.forEach((mod, idx) => {
            const item = document.createElement("div");
            item.className = "syllabus-item" + (idx === 0 ? " is-open" : "");

            const lessonsHtml = mod.lessons[currentLang]
                .map((lesson) => `<li>▶ ${lesson}</li>`)
                .join("");

            item.innerHTML = `
                <button type="button" class="syllabus-item__header">
                    <span class="syllabus-item__left">
                        <span>⌄</span>
                        <span>${mod.title[currentLang]}</span>
                    </span>
                    <span class="syllabus-item__meta">${mod.meta[currentLang]}</span>
                </button>
                <div class="syllabus-item__body">
                    <ul class="syllabus-lessons">${lessonsHtml}</ul>
                </div>
            `;

            item.querySelector(".syllabus-item__header").addEventListener("click", () => {
                item.classList.toggle("is-open");
            });

            syllabusContainer.appendChild(item);
        });
    }

    // Відгуки студентів
    renderReviewsList("course-reviews-list");

    // Карусель відгуків клієнтів
    renderTestimonialsCarousel("course-testimonials-grid");

    // Схожі курси
    const relatedGrid = document.getElementById("related-courses-grid");
    if (relatedGrid) {
        relatedGrid.innerHTML = "";
        COURSES_DATA.slice(0, 4).forEach((c) => {
            relatedGrid.appendChild(createCourseCardElement(c));
        });
    }
}

function initCoursePageControls() {
    // Таби на сторінці курсу
    const tabs = document.querySelectorAll(".course-tab");
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((tBtn) => tBtn.classList.remove("is-active"));
            tab.classList.add("is-active");
            const targetId = tab.dataset.target;
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    const addCartBtn = document.getElementById("course-add-cart-btn");
    if (addCartBtn) addCartBtn.addEventListener("click", addToCart);

    const buyNowBtn = document.getElementById("course-buy-now-btn");
    if (buyNowBtn) {
        buyNowBtn.addEventListener("click", () => {
            addToCart();
        });
    }

    document.querySelectorAll(".share-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href).catch(() => {});
            }
            showToast(t("toast_link_copied"));
        });
    });
}

/* --------------------------------------------------------------------------
   4. СТОРІНКА МЕНТОРА (mentor.html)
   -------------------------------------------------------------------------- */
function renderMentorPage() {
    const mentorNameEl = document.getElementById("mentor-name");
    if (!mentorNameEl) return;

    const params = new URLSearchParams(window.location.search);
    const mentorId = parseInt(params.get("id") || "1", 10);
    const mentor = INSTRUCTORS_DATA.find((m) => m.id === mentorId) || INSTRUCTORS_DATA[0];

    document.title = `${mentor.name} — Byway`;
    mentorNameEl.textContent = mentor.name;

    const roleEl = document.getElementById("mentor-role");
    if (roleEl) roleEl.textContent = mentor.role[currentLang];

    const studentsEl = document.getElementById("mentor-students-count");
    const reviewsEl = document.getElementById("mentor-reviews-count");
    if (studentsEl) studentsEl.textContent = mentor.students;
    if (reviewsEl) reviewsEl.textContent = mentor.reviews;

    const aboutHeading = document.getElementById("mentor-about-heading");
    if (aboutHeading) aboutHeading.textContent = `${t("mentor_about_prefix")} ${mentor.name}`;

    const aboutText = document.getElementById("mentor-about-text");
    if (aboutText) aboutText.textContent = mentor.about[currentLang];

    const expertiseList = document.getElementById("mentor-expertise-list");
    if (expertiseList) {
        expertiseList.innerHTML = mentor.expertise[currentLang]
            .map((item) => `<li>${item}</li>`)
            .join("");
    }

    const expText = document.getElementById("mentor-experience-text");
    if (expText) expText.textContent = mentor.experience[currentLang];

    const moreCoursesHeading = document.getElementById("mentor-courses-heading");
    if (moreCoursesHeading) {
        moreCoursesHeading.textContent = `${t("mentor_more_courses")} ${mentor.name}`;
    }

    const avatarImg = document.getElementById("mentor-avatar-img");
    if (avatarImg) {
        avatarImg.src = mentor.image;
        avatarImg.alt = mentor.name;
        attachImageFallback(avatarImg, mentor.image);
    }

    // Курси цього ментора (4 картки зі слайдером)
    const mentorCoursesGrid = document.getElementById("mentor-courses-grid");
    if (mentorCoursesGrid) {
        mentorCoursesGrid.innerHTML = "";
        const total = COURSES_DATA.length;
        for (let i = 0; i < 4; i++) {
            const c = COURSES_DATA[(mentorCoursesOffset + i) % total];
            mentorCoursesGrid.appendChild(createCourseCardElement(c));
        }
    }

    // Відгуки про ментора
    renderReviewsList("mentor-reviews-list");
}

/* --------------------------------------------------------------------------
   СПІЛЬНИЙ РЕНДЕР ВІДГУКІВ СТУДЕНТІВ (course.html & mentor.html)
   -------------------------------------------------------------------------- */
function renderReviewsList(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";
    REVIEWS_DATA.slice(0, visibleReviewsCount).forEach((rev) => {
        const card = document.createElement("article");
        card.className = "review-card";
        card.innerHTML = `
            <div class="review-card__user">
                <img src="${rev.avatar}" alt="${rev.name}" class="review-card__avatar">
                <h4 class="review-card__name">${rev.name}</h4>
            </div>
            <div class="review-card__content">
                <div class="review-card__meta">
                    <span class="review-card__rating">⭐ ${rev.rating}</span>
                    <span class="review-card__date">${t("reviewed_on")} ${rev.date[currentLang]}</span>
                </div>
                <p class="review-card__text">${rev.text[currentLang]}</p>
            </div>
        `;
        attachImageFallback(card.querySelector("img"), rev.avatar);
        container.appendChild(card);
    });
}

function initSharedCarouselsAndButtons() {
    // Карусель відгуків клієнтів
    document.querySelectorAll("[data-testimonials-prev]").forEach((btn) => {
        btn.addEventListener("click", () => {
            testimonialOffset = (testimonialOffset - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length;
            renderTestimonialsCarousel("testimonials-grid");
            renderTestimonialsCarousel("course-testimonials-grid");
        });
    });

    document.querySelectorAll("[data-testimonials-next]").forEach((btn) => {
        btn.addEventListener("click", () => {
            testimonialOffset = (testimonialOffset + 1) % TESTIMONIALS_DATA.length;
            renderTestimonialsCarousel("testimonials-grid");
            renderTestimonialsCarousel("course-testimonials-grid");
        });
    });

    // Слайдер курсів ментора
    const mPrev = document.getElementById("mentor-courses-prev");
    const mNext = document.getElementById("mentor-courses-next");
    if (mPrev) {
        mPrev.addEventListener("click", () => {
            mentorCoursesOffset = (mentorCoursesOffset - 1 + COURSES_DATA.length) % COURSES_DATA.length;
            renderMentorPage();
        });
    }
    if (mNext) {
        mNext.addEventListener("click", () => {
            mentorCoursesOffset = (mentorCoursesOffset + 1) % COURSES_DATA.length;
            renderMentorPage();
        });
    }

    // Кнопка "View more Reviews"
    document.querySelectorAll("[data-load-more-reviews]").forEach((btn) => {
        btn.addEventListener("click", () => {
            visibleReviewsCount = visibleReviewsCount >= REVIEWS_DATA.length ? 3 : REVIEWS_DATA.length;
            renderReviewsList("course-reviews-list");
            renderReviewsList("mentor-reviews-list");
        });
    });

    // Кнопка Play у Hero-секції
    const heroPlayBtn = document.querySelector(".hero__play");
    if (heroPlayBtn) {
        heroPlayBtn.addEventListener("click", () => {
            showToast(t("toast_video_demo"));
        });
    }
}

function renderDynamicSections() {
    renderHomePage();
    renderCategoryPage();
    renderCoursePage();
    renderMentorPage();
}

/* --------------------------------------------------------------------------
   ІНІЦІАЛІЗАЦІЯ ПІСЛЯ ЗАВАНТАЖЕННЯ DOM
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    initAllStaticImageFallbacks();
    initBurgerMenu();
    initLanguageSwitcher();
    initHeaderSearchAndActions();
    initCategoryPageControls();
    initCoursePageControls();
    initSharedCarouselsAndButtons();
    initScrollToTop();
    applyLanguage(currentLang);
});
