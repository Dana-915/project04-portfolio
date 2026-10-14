const languageButton = document.getElementById("language-toggle");

const translations = {
    en: {
        siteTitle: "My Personal Portfolio",
        button: "العربية",
        aboutTitle: "About Me",
        aboutText: "Hello! I am a web development student learning HTML, CSS, and JavaScript.",
        skillsTitle: "My Skills",
        projectsTitle: "My Projects",
        projectsText: "I have completed projects in HTML, CSS, and JavaScript.",
        contactTitle: "Contact Me",
        contactText: "Thank you for visiting my portfolio!",
        footerText: "© 2026 My Personal Portfolio"
    },

    ar: {
        siteTitle: "معرض أعمالي الشخصي",
        button: "English",
        aboutTitle: "نبذة عني",
        aboutText: "مرحبًا! أنا طالبة تطوير ويب أتعلم HTML وCSS وJavaScript.",
        skillsTitle: "مهاراتي",
        projectsTitle: "مشاريعي",
        projectsText: "أنجزت مشاريع باستخدام HTML وCSS وJavaScript.",
        contactTitle: "تواصل معي",
        contactText: "شكرًا لزيارتك معرض أعمالي!",
        footerText: "© 2026 معرض أعمالي الشخصي"
    }
};

let currentLanguage = "en";

languageButton.addEventListener("click", function () {
    if (currentLanguage === "en") {
        currentLanguage = "ar";
    } else {
        currentLanguage = "en";
    }

    const text = translations[currentLanguage];

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";

    document.getElementById("site-title").textContent = text.siteTitle;
    languageButton.textContent = text.button;

    document.getElementById("about-title").textContent = text.aboutTitle;
    document.getElementById("about-text").textContent = text.aboutText;

    document.getElementById("skills-title").textContent = text.skillsTitle;

    document.getElementById("projects-title").textContent = text.projectsTitle;
    document.getElementById("projects-text").textContent = text.projectsText;

    document.getElementById("contact-title").textContent = text.contactTitle;
    document.getElementById("contact-text").textContent = text.contactText;

    document.getElementById("footer-text").textContent = text.footerText;
});
