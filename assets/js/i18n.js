/* =============================================================
   Spanish and French translations.

   English is not listed here: it lives inline in index.html and is
   captured on load, so switching back to EN restores the original text.
   To change English, edit index.html. To change es or fr, edit below.

   A key ending in nothing special replaces textContent. Keys used by
   data-i18n-placeholder, data-i18n-value, data-i18n-aria and
   data-i18n-alt replace those attributes instead.
   ============================================================= */

const I18N = {

  es: {
    'nav.logo': 'Portafolio',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.work': 'Proyectos',
    'nav.extras': 'Extracurriculares',
    'nav.contact': 'Contacto',

    'hero.role': 'Ingeniera de Software',
    'hero.subtitle': 'Lausana, Suiza · Abierta a nuevas oportunidades',
    'hero.cta': 'Contacto',

    'about.title': 'Sobre mí',
    'about.hello': 'Hola',
    'about.p1': 'Soy ingeniera civil en computación de la Universidad de Chile, titulada con distinción máxima. He pasado los últimos años construyendo aplicaciones web full-stack de principio a fin. Mi mayor experiencia está en APIs con Express y FastAPI, interfaces en React y Vue, y las integraciones que unen ambas partes. En Crazycake Technologies trabajé directamente con clientes, desde la planificación del proyecto hasta la entrega.',
    'about.p2': 'Mi otra pasión es la ciberseguridad. Escribí mi tesis sobre la detección de dispositivos espía ocultos mediante sniffing de paquetes. He sido ayudante durante siete semestres, incluyendo un taller de hacking competitivo, y he creado material de curso enfocado en ciberseguridad.',
    'about.fact1': 'Ingeniería Civil en Computación, Universidad de Chile · distinción máxima',
    'about.fact2': 'Licenciatura en Ciencias de la Computación, Universidad de Chile · distinción',
    'about.imgAlt': 'Ilustración provisional, pendiente de reemplazar por una foto',

    'skills.title': 'Habilidades',
    'skills.subtitle': 'Habilidades profesionales',
    'skills.languages': 'Lenguajes',
    'skills.frameworks': 'Frameworks y librerías',
    'skills.data': 'Datos',
    'skills.cloud': 'Nube y herramientas',
    'skills.security': 'Seguridad',
    'skills.practices': 'Prácticas',
    'skills.spoken': 'Idiomas',
    'chip.sniffing': 'Sniffing de paquetes',
    'chip.spanish': 'Español (nativo)',
    'chip.english': 'Inglés (C1)',
    'chip.french': 'Francés (B2)',

    'exp.title': 'Experiencia',
    'exp.date1': 'sept. 2024 ‐ jun. 2026',
    'exp.role1': 'Desarrolladora Full-Stack',
    'exp.text1': 'Desarrollé APIs RESTful con Express.js y Node.js y las integré con servicios de terceros como Webpay Transbank y PedidosYa, conectándolas luego con interfaces responsivas en Vue.js. Desarrollé embeddings con Atlas Vector Search para una API en React acoplada a modelos de lenguaje de OpenAI, y planificadores de producción usando el solver CP-SAT de Google. Gestioné la relación con los clientes durante la planificación y el desarrollo.',
    'exp.date2': '2021 ‐ 2024',
    'exp.role2': 'Ayudante de cátedra',
    'exp.text2': 'Taller de Hacking Competitivo (dos semestres), Bases de Datos, Diseño y Análisis de Algoritmos, y Herramientas Computacionales para Ingeniería y Ciencias (tres semestres).',
    'exp.date3': 'ene. 2023 ‐ mar. 2023',
    'exp.role3': 'Desarrolladora Full-Stack, práctica',
    'exp.text3': 'Construí módulos de spread de bonos y curvas de rendimiento para la plataforma Infobonos usando ReactJS y FastAPI, y modifiqué una API GraphQL para conectarlos con endpoints de AWS.',
    'exp.date4': 'ene. 2022 ‐ mar. 2022',
    'exp.role4': 'Desarrolladora Front-End, práctica',
    'exp.text4': 'Desarrollé pruebas y un módulo en Ruby on Rails para la aplicación web PMSystem, mostrando los KPI medidos de empresas productoras de bienes.',

    'work.title': 'Proyectos',
    'work.houndText': 'Proyecto de tesis para Hackerlab. Detecta dispositivos espía ocultos capturando paquetes de dispositivos cercanos en modo monitor, y muestra lo que encuentra a través de una interfaz web.',
    'work.github': 'Ver en GitHub',
    'work.zoomHound': 'Abrir una imagen más grande de Hound',

    'extras.title': 'Extracurriculares',
    'extras.date1': 'abr. 2023 ‐ dic. 2024',
    'extras.role1': 'Investigadora en Ciberseguridad',
    'extras.text1': 'Miembro del laboratorio de Criptografía Aplicada y Ciberseguridad. Difusión voluntaria sobre buenas prácticas y riesgos en internet, además del desarrollo de servicios enfocados en ciberseguridad.',
    'extras.date2': 'jun. 2024 ‐ dic. 2024',
    'extras.role2': 'Creación de contenido para SheHacks',
    'extras.text2': 'Creé clases, ejercicios y actividades para SheHacks, una iniciativa de la organización sin fines de lucro Niñas Pro que motiva a estudiantes de enseñanza media a acercarse a la programación, y en particular a la ciberseguridad.',
    'extras.org3': 'Hacking competitivo',
    'extras.ctf1': '1er lugar en NIVEL4',
    'extras.ctf2': '5º lugar en CTF PDI, Campo de Marte',
    'extras.ctf3': '7º lugar en Hack.ing',

    'contact.title': 'Contacto',
    'contact.name': 'Nombre',
    'contact.email': 'Correo',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar',
    'contact.subtitle': 'O escríbeme directamente',
    'contact.text': 'Estoy abierta a puestos full-stack y de seguridad en Suiza y en remoto.',

    'footer.template': 'Plantilla de',

    'lightbox.label': 'Imagen del proyecto',
    'lightbox.close': 'Cerrar imagen',

    'meta.title': 'Natalia Quinteros-Retamal · Ingeniera de Software',
    'meta.description': 'Ingeniera de software y computación. APIs REST en Express y FastAPI, interfaces en React y Vue, además de investigación en ciberseguridad y CTFs.'
  },

  fr: {
    'nav.logo': 'Portfolio',
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.work': 'Projets',
    'nav.extras': 'Engagements',
    'nav.contact': 'Contact',

    'hero.role': 'Ingénieure logiciel',
    'hero.subtitle': 'Lausanne, Suisse · Ouverte à de nouvelles opportunités',
    'hero.cta': 'Contact',

    'about.title': 'À propos',
    'about.hello': 'Bonjour',
    'about.p1': "Je suis ingénieure en informatique diplômée de l'Universidad de Chile, avec les félicitations du jury. J'ai passé ces dernières années à construire des applications web full-stack de bout en bout. Mon expérience porte surtout sur les API en Express et FastAPI, les interfaces en React et Vue, et les intégrations qui relient les deux. Chez Crazycake Technologies, j'ai travaillé directement avec les clients, de la planification du projet jusqu'à la livraison.",
    'about.p2': "Ma seconde passion est la cybersécurité. J'ai rédigé mon mémoire sur la détection d'appareils espions cachés par analyse de paquets. J'ai été assistante d'enseignement pendant sept semestres, dont un atelier de hacking compétitif, et j'ai créé du matériel de cours axé sur la cybersécurité.",
    'about.fact1': 'Ingénierie informatique, Universidad de Chile · félicitations du jury',
    'about.fact2': 'Licence en informatique, Universidad de Chile · mention',
    'about.imgAlt': 'Illustration provisoire, à remplacer par une photo',

    'skills.title': 'Compétences',
    'skills.subtitle': 'Compétences professionnelles',
    'skills.languages': 'Langages',
    'skills.frameworks': 'Frameworks et bibliothèques',
    'skills.data': 'Données',
    'skills.cloud': 'Cloud et outils',
    'skills.security': 'Sécurité',
    'skills.practices': 'Pratiques',
    'skills.spoken': 'Langues',
    'chip.sniffing': 'Analyse de paquets',
    'chip.spanish': 'Espagnol (langue maternelle)',
    'chip.english': 'Anglais (C1)',
    'chip.french': 'Français (B2)',

    'exp.title': 'Expérience',
    'exp.date1': 'sept. 2024 ‐ juin 2026',
    'exp.role1': 'Développeuse Full-Stack',
    'exp.text1': "J'ai développé des API RESTful avec Express.js et Node.js et les ai intégrées à des services tiers comme Webpay Transbank et PedidosYa, puis reliées à des interfaces Vue.js responsives. J'ai développé des embeddings avec Atlas Vector Search pour une API React couplée à des modèles de langage OpenAI, ainsi que des planificateurs de production avec le solveur CP-SAT de Google. J'ai géré la relation client tout au long de la planification et du développement.",
    'exp.date2': '2021 ‐ 2024',
    'exp.role2': "Assistante d'enseignement",
    'exp.text2': "Atelier de hacking compétitif (deux semestres), Bases de données, Conception et analyse d'algorithmes, et Outils informatiques pour l'ingénierie et les sciences (trois semestres).",
    'exp.date3': 'janv. 2023 ‐ mars 2023',
    'exp.role3': 'Développeuse Full-Stack, stage',
    'exp.text3': "J'ai construit des modules de spread obligataire et de courbes de rendement pour la plateforme Infobonos avec ReactJS et FastAPI, et modifié une API GraphQL pour les relier aux endpoints AWS.",
    'exp.date4': 'janv. 2022 ‐ mars 2022',
    'exp.role4': 'Développeuse Front-End, stage',
    'exp.text4': "J'ai développé des tests et un module Ruby on Rails pour l'application web PMSystem, affichant les KPI mesurés d'entreprises de production de biens.",

    'work.title': 'Projets',
    'work.houndText': 'Projet de mémoire pour Hackerlab. Détecte les appareils espions cachés en capturant les paquets des appareils proches en mode moniteur, puis présente ses résultats dans une interface web.',
    'work.github': 'Voir sur GitHub',
    'work.zoomHound': 'Ouvrir une image plus grande de Hound',

    'extras.title': 'Engagements',
    'extras.date1': 'avr. 2023 ‐ déc. 2024',
    'extras.role1': 'Chercheuse en cybersécurité',
    'extras.text1': 'Membre du laboratoire de cryptographie appliquée et de cybersécurité. Sensibilisation bénévole aux bonnes pratiques et aux risques en ligne, et développement de services axés sur la cybersécurité.',
    'extras.date2': 'juin 2024 ‐ déc. 2024',
    'extras.role2': 'Création de contenu pour SheHacks',
    'extras.text2': "J'ai créé des cours, des exercices et des activités pour SheHacks, une initiative de l'association chilienne Niñas Pro qui encourage les lycéennes à découvrir la programmation, et la cybersécurité en particulier.",
    'extras.org3': 'Hacking compétitif',
    'extras.ctf1': '1re place à NIVEL4',
    'extras.ctf2': '5e place au CTF PDI, Campo de Marte',
    'extras.ctf3': '7e place à Hack.ing',

    'contact.title': 'Contact',
    'contact.name': 'Nom',
    'contact.email': 'E-mail',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.subtitle': 'Ou écrivez-moi directement',
    'contact.text': 'Je suis ouverte à des postes full-stack et en sécurité en Suisse et à distance.',

    'footer.template': 'Modèle par',

    'lightbox.label': 'Image du projet',
    'lightbox.close': "Fermer l'image",

    'meta.title': 'Natalia Quinteros-Retamal · Ingénieure logiciel',
    'meta.description': "Ingénieure logiciel et informaticienne. API REST en Express et FastAPI, interfaces en React et Vue, et recherche en cybersécurité."
  }
};

/* ---------- switcher ---------- */

(function () {
  'use strict';

  const STORE = 'portfolio-lang';
  const root = document.documentElement;
  const buttons = document.querySelectorAll('.lang__btn');
  const metaDesc = document.querySelector('meta[name="description"]');

  // English originals, captured once so switching back needs no dictionary.
  const originals = new Map();

  function original(el, slot, current) {
    if (!originals.has(el)) originals.set(el, {});
    const store = originals.get(el);
    if (!(slot in store)) store[slot] = current;
    return store[slot];
  }

  function swap(selector, attr, slot) {
    document.querySelectorAll(selector).forEach(el => {
      const key = el.getAttribute(attr);
      const base = original(el, slot, slot === 'text' ? el.textContent : el.getAttribute(slot));
      const dict = I18N[root.dataset.lang] || null;
      const value = dict && dict[key] ? dict[key] : base;
      if (slot === 'text') el.textContent = value;
      else el.setAttribute(slot, value);
    });
  }

  function apply(lang) {
    root.dataset.lang = I18N[lang] ? lang : 'en';

    swap('[data-i18n]', 'data-i18n', 'text');
    swap('[data-i18n-placeholder]', 'data-i18n-placeholder', 'placeholder');
    swap('[data-i18n-value]', 'data-i18n-value', 'value');
    swap('[data-i18n-aria]', 'data-i18n-aria', 'aria-label');
    swap('[data-i18n-alt]', 'data-i18n-alt', 'alt');

    const dict = I18N[lang];
    const baseTitle = original(document.head, 'title', document.title);
    document.title = (dict && dict['meta.title']) || baseTitle;
    if (metaDesc) {
      const baseDesc = original(metaDesc, 'content', metaDesc.content);
      metaDesc.content = (dict && dict['meta.description']) || baseDesc;
    }

    root.lang = root.dataset.lang;
    buttons.forEach(b => b.classList.toggle('is-active', b.dataset.lang === root.dataset.lang));

    try { localStorage.setItem(STORE, root.dataset.lang); } catch (e) {}
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => apply(btn.dataset.lang));
  });

  let saved = null;
  try { saved = localStorage.getItem(STORE); } catch (e) {}
  apply(saved || 'en');
})();
