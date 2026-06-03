const samuelNavLinks = document.querySelectorAll(".site-nav a");
const samuelSections = [...document.querySelectorAll("main section[id]")];
const samuelRevealItems = document.querySelectorAll(".reveal");
const samuelLangButtons = document.querySelectorAll("[data-lang-button]");
const samuelI18nNodes = document.querySelectorAll("[data-i18n]");

const samuelTranslations = {
  en: {
    "meta.title": "Juan Caro Vaquero",
    "meta.description": "Line-art indie manga styled portfolio variant for Juan Caro Vaquero.",
    "nav.aria": "Main navigation",
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.stack": "Stack",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "lang.selector": "Language selector",
    "hero.subtitle": "Fullstack Dev & Law",
    "hero.note": "Fullstack developer with a background in law, focused on building clean, maintainable products with thoughtful UX.",
    "hero.ctaProjects": "View Projects",
    "hero.ctaContact": "Contact",
    "hero.ctaCv": "CV coming soon",
    "hero.socialAria": "Social media",
    "hero.sideAria": "Side notes",
    "hero.sideLabel": "side note",
    "hero.lookAria": "Black and white line-art illustration of a person sitting and reading",
    "hero.listTitle": "reminders:",
    "hero.list1": "better done than perfect",
    "hero.list2": "be the best you can be",
    "hero.list3": "think before code",
    "hero.list4": "buy 500 Monster White",
    "about.eyebrow": "About Me",
    "about.title": "Why I Do What I Do",
    "about.p1": "I had always been intrigued by coding, and I didn't want to live with the regret of never trying it. Once I took the leap, I fell in love with it and decided to pivot from my legal background to tech",
    "about.p2": "I like building software that looks good, runs fast, and is clean. I enjoy learning from others and always try to be helpful.",
    "about.p3": "When I get stuck on a tough problem, I like to take my time to think it through. To break through roadblocks, I usually do one of two things: I write about the problem to organize my thoughts, or I explain it to my friends and peers to gain a completely new perspective.",
    "about.doodleAria": "Kitty placeholder",
    "stack.eyebrow": "Stack",
    "stack.title": "Skills",
    "stack.languages": "Languages",
    "stack.frameworks": "Frameworks / Tech",
    "stack.frameworksAria": "Frameworks and technologies",
    "projects.eyebrow": "Personal Projects",
    "projects.title": "My works",
    "projects.ploteaAria": "Plotea visual placeholder",
    "projects.ploteaP1": "I HATE LETTERBOXD!",
    "projects.ploteaP2": "So I created the version of Letterboxd I wanted to use: a clean, intuitive app. The point wasn't just to clone an app I disliked, but to rebuild the experience around cleaner navigation, clearer structure, and a better foundation.",
    "projects.imageMissing": "Image missing here",
    "projects.spainAria": "S-Pain visual placeholder",
    "projects.spainP1": "I built S-Pain to turn public housing-price data into something easier to explore and compare. It scrapes data from MIVAU, processes it with Python, and presents it in an interactive Streamlit dashboard.",
    "experience.eyebrow": "Experience",
    "experience.title": "My Journey",
    "experience.tecnosisRole": "Software Development Internship",
    "experience.tecnosisDesc": "Backend/Frontend development using .NET, Blazor, MySQL, and JavaScript for a web & app notification management.",
    "experience.sevillajamRole": "Game Developer & Producer",
    "experience.sevillajamDesc": "Core logic in C# and Unity during a 48-hour event under pressure.",
    "experience.doodleAria": "Kitty placeholder",
    "footer.eyebrow": "Contact me!",
    "footer.code": "console.log(\"Thanks!.\");",
  },
  es: {
    "meta.title": "Juan Caro Vaquero",
    "meta.description": "Portfolio de Juan Caro Vaquero con una estética line-art inspirada en indie manga.",
    "nav.aria": "Navegacion principal",
    "nav.home": "Inicio",
    "nav.about": "Sobre mi",
    "nav.stack": "Stack",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "lang.selector": "Selector de idioma",
    "hero.subtitle": "Dev Fullstack y Derecho",
    "hero.note": "Desarrollador fullstack con base en derecho, centrado en crear productos limpios, mantenibles y con una UX cuidada.",
    "hero.ctaProjects": "Ver proyectos",
    "hero.ctaContact": "Contacto",
    "hero.ctaCv": "CV pronto",
    "hero.socialAria": "Redes sociales",
    "hero.sideAria": "Notas laterales",
    "hero.sideLabel": "nota lateral",
    "hero.lookAria": "Ilustracion line-art en blanco y negro de una persona sentada leyendo",
    "hero.listTitle": "recordatorios:",
    "hero.list1": "mejor hecho que perfecto",
    "hero.list2": "da lo mejor de ti",
    "hero.list3": "piensa antes de programar",
    "hero.list4": "comprar 500 Monster White",
    "about.eyebrow": "Sobre mi",
    "about.title": "Por que hago lo que hago",
    "about.p1": "Siempre me habia intrigado programar y no queria vivir con la duda de no haberlo intentado nunca. Cuando di el salto, me enamore del proceso y decidi pasar del mundo juridico al tecnologico.",
    "about.p2": "Me gusta construir software que se vea bien, vaya rapido y este limpio. Disfruto aprendiendo de los demas e intento ser util siempre que puedo.",
    "about.p3": "Cuando me atasco con un problema complicado, prefiero bajar el ritmo y pensarlo bien. Normalmente escribo para ordenar mis ideas o se lo explico a amigos y companeros para encontrar una perspectiva nueva.",
    "about.doodleAria": "Ilustracion decorativa de Punpun",
    "stack.eyebrow": "Stack",
    "stack.title": "Habilidades",
    "stack.languages": "Lenguajes",
    "stack.frameworks": "Frameworks / Tech",
    "stack.frameworksAria": "Frameworks y tecnologias",
    "projects.eyebrow": "Proyectos personales",
    "projects.title": "Mis proyectos",
    "projects.ploteaAria": "Imagen de Plotea",
    "projects.ploteaP1": "ODIO LETTERBOXD.",
    "projects.ploteaP2": "Asi que cree la version de Letterboxd que a mi me gustaria usar: una app limpia e intuitiva. La idea no era solo clonar una app que no me convence, sino rehacer la experiencia con una navegacion mas clara, una estructura mejor pensada y una base mas solida.",
    "projects.imageMissing": "Aqui falta imagen",
    "projects.spainAria": "Imagen de S-Pain",
    "projects.spainP1": "Cree S-Pain para convertir datos publicos sobre el precio de la vivienda en algo mas facil de explorar y comparar. Hace scraping de datos del MIVAU, los procesa con Python y los presenta en un dashboard interactivo hecho con Streamlit.",
    "experience.eyebrow": "Experiencia",
    "experience.title": "Mi recorrido",
    "experience.tecnosisRole": "Practicas de desarrollo de software",
    "experience.tecnosisDesc": "Desarrollo backend y frontend con .NET, Blazor, MySQL y JavaScript para la gestion de notificaciones web y app.",
    "experience.sevillajamRole": "Desarrollador y productor de videojuegos",
    "experience.sevillajamDesc": "Logica principal en C# y Unity durante un evento de 48 horas bajo presion.",
    "experience.doodleAria": "Ilustracion decorativa de gato",
    "footer.eyebrow": "Contactame",
    "footer.code": "console.log(\"Gracias.\");",
  },
};

const samuelLanguageStorageKey = "samuel-language";

const applySamuelLanguage = (language) => {
  const strings = samuelTranslations[language] ?? samuelTranslations.en;

  samuelI18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = strings[key];

    if (!value) {
      return;
    }

    const attrName = node.dataset.i18nAttr;

    if (attrName) {
      node.setAttribute(attrName, value);
      if (node.tagName === "TITLE") {
        document.title = value;
      }
      return;
    }

    node.textContent = value;
  });

  document.documentElement.lang = language;

  samuelLangButtons.forEach((button) => {
    const isActive = button.dataset.langButton === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  window.localStorage.setItem(samuelLanguageStorageKey, language);
};

const getInitialSamuelLanguage = () => {
  const savedLanguage = window.localStorage.getItem(samuelLanguageStorageKey);

  if (savedLanguage && samuelTranslations[savedLanguage]) {
    return savedLanguage;
  }

  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
};

samuelNavLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const syncSamuelActiveLink = () => {
  const offset = window.scrollY + window.innerHeight * 0.25;
  let currentId = samuelSections[0]?.id ?? "";

  samuelSections.forEach((section) => {
    if (offset >= section.offsetTop) {
      currentId = section.id;
    }
  });

  samuelNavLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
  });
};

const samuelRevealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        samuelRevealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -30px 0px",
  }
);

samuelRevealItems.forEach((item) => samuelRevealObserver.observe(item));

samuelLangButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applySamuelLanguage(button.dataset.langButton);
  });
});

window.addEventListener("scroll", syncSamuelActiveLink, { passive: true });
window.addEventListener("load", () => {
  applySamuelLanguage(getInitialSamuelLanguage());
  syncSamuelActiveLink();
});

applySamuelLanguage(getInitialSamuelLanguage());
syncSamuelActiveLink();
