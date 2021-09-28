/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
// console.log(navLink);
navLink.forEach(n=> n.addEventListener('click',linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader =  document.querySelectorAll('.skills__header')


function toggleSkills(){
    let itemClass = this.parentNode.className;
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
if (itemClass == 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
}
}
// console.log(this.parentNode.className);

skillsHeader.forEach(el=>{
    el.addEventListener('click',toggleSkills)
})
// toggleSkills();
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
       const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active');
       tabs.forEach(tab=>{
           tab.classList.remove('qualification__active')
       })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i);
    })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach(modalView=>{
            modalView.classList.remove('active-modal');
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio =new Swiper('.portfolio__container',{
    cssMode : true,
    loop:true,
    autoplay:true,
    navigation : {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev',
    },
    pagination : {
        el : '.swiper-pagination',
        clickable : true,
    },
})

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial =new Swiper('.testimonial__container',{
    loop:true,
    grabCursor :true,
    spaceBetween : 48,
    pagination : {
        el : '.swiper-pagination',
        clickable : true,
        dynamicBullets : true,
    },
    breakpoints : {
        568 : {
            slidesPerView :2,
        }
    }
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');
console.log(sections[4].getAttribute('id'))
function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight;
        const sectionUp = current.offsetTop- 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionUp && scrollY <= (sectionUp + sectionHeight)){
            document.querySelector(`.nav__menu a[href*=${sectionId} ]`).classList.add('active-link')
        }else {
            document.querySelector(`.nav__menu a[href*=${sectionId} ]`).classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp =document.getElementById('scroll-up');
console.log(scrollUp)
    // When scroll is higher than 560 view port height show scroll class to the a tag with the scroll
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectTheme = localStorage.getItem('selected-theme');
const selectIcon = localStorage.getItem('selected-icon');

//We obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

//We validate if the user previously choose a topic
if (selectTheme){
    document.body.classList[selectTheme === 'dark'? 'add' : 'remove'](darkTheme);
    document.body.classList[selectTheme === 'uil-moon'? 'add' : 'remove'](iconTheme);
}

//Activate / deactivate the theme with the button
themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    //We save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})