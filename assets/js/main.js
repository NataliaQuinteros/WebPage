/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(!sectionsClass) return
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: "top",
    distance: "40px",
    duration: 600,
    delay: 100,
//     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle",{});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img",{delay: 200});
sr.reveal(".home__social-icon",{ interval: 80});
sr.reveal(".skills__group, .work__img, .contact__input",{interval: 80});
sr.reveal(".about__facts li, .experience__item",{interval: 70});
sr.reveal(".contact__info",{delay: 180});

/*===== FOOTER YEAR =====*/
const yearEl = document.getElementById("year")
if(yearEl) yearEl.textContent = new Date().getFullYear()

/*===== CONTACT FORM FALLBACK =====*/
/* Until a Formspree endpoint is pasted into the form action, submitting
   would hit a dead URL. Hand the message to the visitor's mail client
   instead so the form is never a dead end. */
const contactForm = document.querySelector('.contact__form')

if(contactForm && contactForm.action.includes('YOUR_FORM_ID')){
    contactForm.addEventListener('submit', (e) =>{
        e.preventDefault()

        const data = new FormData(contactForm),
              name = data.get('name') || '',
              email = data.get('email') || '',
              message = data.get('message') || '',
              subject = encodeURIComponent('Portfolio message from ' + name),
              body = encodeURIComponent(message + '\n\n' + name + '\n' + email)

        window.location.href = 'mailto:nataliaquinterosr@gmail.com?subject=' + subject + '&body=' + body
    })
}
