//===================MENU SHOW Y HIDDEN================
const navMenu = document.getElementById('nav-menu');
      navToggle = document.getElementById('nav-toggle');
      navClose = document.getElementById('nav-close');

//=================MENU SHOW==========================
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })  
};

// ================MENU HIDDEN============================
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
};

// ================REMOVE MENU MOBILE=====================
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
};

navLink.forEach(n => n.addEventListener('click', linkAction));

// =========== Dark/Light theme====================

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uli-moon' : 'uil-sun';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedTheme === 'uli-moon' ? 'add' : 'remove'](iconTheme)
};

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});


// ===============CONTACTS SHOW Y HIDDEN=============


const phoneButton = document.getElementById('phone-btn');
      emailButton = document.getElementById('email-btn');
      phoneData = document.getElementById('phone-data');
      emailData = document.getElementById('email-data');

    phoneButton.addEventListener('click', () =>{
        if(phoneData.style.display === 'none') {  
            phoneData.style.display = 'block';
        } else {
            phoneData.style.display = 'none';
        }
        });
    emailButton.addEventListener('click', () =>{
        if(emailData.style.display === 'none') {  
            emailData.style.display = 'block';
        } else {
            emailData.style.display = 'none';
        }
        });
  


