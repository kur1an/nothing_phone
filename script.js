// Translations
const translations = {
    en: {
        hero_title: "Welcome to the Future",
        hero_description: "Experience the simplicity and elegance of the Nothing Phone interface.",
        hero_button: "Learn More",
        about_title: "About Us",
        about_description: "We are dedicated to creating minimalist, user-friendly designs that push the boundaries of technology.",
        services_title: "Our Services",
        service_1_title: "Minimalist Design",
        service_1_description: "Clean, simple, and intuitive design.",
        service_2_title: "Futuristic Interface",
        service_2_description: "A glimpse into the future of mobile interfaces.",
        service_3_title: "User-Friendly",
        service_3_description: "Easy to navigate and use.",
        testimonials_title: "What Our Users Say",
        testimonial_1: "\"The Nothing Phone interface is incredibly intuitive and sleek.\"",
        testimonial_2: "\"A truly revolutionary design. Minimalist yet powerful.\"",
        testimonial_3: "\"I've never used anything so simple and elegant.\""
    },
    es: {
        hero_title: "Bienvenido al Futuro",
        hero_description: "Experimente la simplicidad y elegancia de la interfaz de Nothing Phone.",
        hero_button: "Aprender Más",
        about_title: "Sobre Nosotros",
        about_description: "Nos dedicamos a crear diseños minimalistas y fáciles de usar que empujan los límites de la tecnología.",
        services_title: "Nuestros Servicios",
        service_1_title: "Diseño Minimalista",
        service_1_description: "Diseño limpio, simple e intuitivo.",
        service_2_title: "Interfaz Futurista",
        service_2_description: "Un vistazo al futuro de las interfaces móviles.",
        service_3_title: "Fácil de Usar",
        service_3_description: "Fácil de navegar y usar.",
        testimonials_title: "Lo Que Dicen Nuestros Usuarios",
        testimonial_1: "\"La interfaz de Nothing Phone es increíblemente intuitiva y elegante.\"",
        testimonial_2: "\"Un diseño verdaderamente revolucionario. Minimalista pero poderoso.\"",
        testimonial_3: "\"Nunca he usado algo tan simple y elegante.\""
    },
    fr: {
        hero_title: "Bienvenue dans le Futur",
        hero_description: "Découvrez la simplicité et l'élégance de l'interface Nothing Phone.",
        hero_button: "En Savoir Plus",
        about_title: "À Propos de Nous",
        about_description: "Nous nous consacrons à créer des designs minimalistes et conviviaux qui repoussent les limites de la technologie.",
        services_title: "Nos Services",
        service_1_title: "Design Minimaliste",
        service_1_description: "Design propre, simple et intuitif.",
        service_2_title: "Interface Futuriste",
        service_2_description: "Un aperçu du futur des interfaces mobiles.",
        service_3_title: "Facile à Utiliser",
        service_3_description: "Facile à naviguer et à utiliser.",
        testimonials_title: "Ce Que Disent Nos Utilisateurs",
        testimonial_1: "\"L'interface de Nothing Phone est incroyablement intuitive et élégante.\"",
        testimonial_2: "\"Un design vraiment révolutionnaire. Minimaliste mais puissant.\"",
        testimonial_3: "\"Je n'ai jamais utilisé quelque chose d'aussi simple et élégant.\""
    },
    de: {
        hero_title: "Willkommen in der Zukunft",
        hero_description: "Erleben Sie die Einfachheit und Eleganz der Nothing Phone-Oberfläche.",
        hero_button: "Mehr Erfahren",
        about_title: "Über Uns",
        about_description: "Wir widmen uns der Erstellung minimalistischer, benutzerfreundlicher Designs, die die Grenzen der Technologie erweitern.",
        services_title: "Unsere Dienstleistungen",
        service_1_title: "Minimalistisches Design",
        service_1_description: "Sauberes, einfaches und intuitives Design.",
        service_2_title: "Futuristische Schnittstelle",
        service_2_description: "Ein Blick in die Zukunft der mobilen Schnittstellen.",
        service_3_title: "Benutzerfreundlich",
        service_3_description: "Einfach zu navigieren und zu verwenden.",
        testimonials_title: "Was Unsere Benutzer Sagen",
        testimonial_1: "\"Die Nothing Phone-Oberfläche ist unglaublich intuitiv und elegant.\"",
        testimonial_2: "\"Ein wirklich revolutionäres Design. Minimalistisch, aber leistungsstark.\"",
        testimonial_3: "\"Ich habe noch nie etwas so Einfaches und Elegantes verwendet.\""
    }
};

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Language switcher functionality
document.getElementById('languageSwitcher').addEventListener('change', function() {
    const selectedLanguage = this.value;
    applyTranslations(selectedLanguage);
});

function applyTranslations(language) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });
}

// Set default language to English
applyTranslations('en');
document.addEventListener('DOMContentLoaded', () => {
    fetch('translations.json')
        .then(response => response.json())
        .then(data => {
            window.translations = data;
            applyTranslations('en');  // Set default language to English
        });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Language switcher functionality
    document.getElementById('languageSwitcher').addEventListener('change', function() {
        const selectedLanguage = this.value;
        applyTranslations(selectedLanguage);
    });

    function applyTranslations(language) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = window.translations[language][key];
        });
    }
});
