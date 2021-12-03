//===================MENU SHOW Y HIDDEN===============

if('#nav-toggle'){
    $('#nav-toggle').click(function () {
        $('#nav-menu').addClass('show-menu')
    })  
};


if('#nav-close'){
    $('#nav-close').click (function() {
        $('#nav-menu').removeClass('show-menu')
    })
};

// ================REMOVE MENU MOBILE=====================

$('.nav__link').click (function linkAction(){
    $('#nav-menu').removeClass('show-menu')
});

// =========== Dark/Light theme====================

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => $('body').hasClass('dark-theme') ? 'dark' : 'light';
const getCurrentIcon = () => $('#theme-button').hasClass('uil-sun') ? 'uli-moon' : 'uil-sun';

if(selectedTheme){
    $('body').hasClass(selectedTheme === 'dark' ? $('body').addClass('dark-theme') : $('body').removeClass('dark-theme'))
    $('#theme-button').hasClass(selectedTheme === 'uli-moon' ? $('#theme-button').addClass : $('#theme-button').removeClass('uil-sun'))
};

$('#theme-button').click(function () {
    $('body').toggleClass('dark-theme')
    $('#theme-button').toggleClass('uil-sun')
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});


// ===============CONTACTS SHOW Y HIDDEN=============

$('#nav-contacts').click(function() {
    contactsToggle ('#phone-data');
    contactsToggle ('#email-data');
});

$('#phone-btn').click(function() {
    contactsToggle ('#phone-data');
});
  
$('#email-btn').click(function() {
    contactsToggle ('#email-data');
});

function contactsToggle (data){
    $(data).fadeToggle( "fast", "linear" );
} 

