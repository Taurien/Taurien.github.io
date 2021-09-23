const entry = document.getElementById('entry');
const mainMenu = document.getElementById('menu');

const about = document.getElementById('about');
const work = document.getElementById('work');
const contact = document.getElementById('contact');

const aboutContainer = document.getElementById('aboutContainer');
const workContainer = document.getElementById('workContainer');
const contactContainer = document.getElementById('contactContainer');

const homeBtn = document.querySelectorAll('.homeBtn');

const left = document.getElementById('left');
const leftTitle =document.getElementById('leftT');
const right = document.getElementById('right');
const rightTitle =document.getElementById('rightT');
const gback = document.getElementById('back');

const containerL = document.getElementById('containerL');
const containerR = document.getElementById('containerR');

const animationM = document.querySelectorAll('.hvr-back-pulse');

// Clear entry
/*
function clearEntry() {
    entry.style.display = 'none';
}
*/

// Hover Effect PC
function over(e) {
    if (e.target == about) {
        about.innerHTML = `About`
    } else if (e.target == work) {
        work.innerHTML = `Work`
    } else if (e.target == contact) {
        contact.innerHTML = `Contact`
    }
}

function out() {
        about.innerHTML = `Hello.`
        work.innerHTML = `I am`
        contact.innerHTML = `Michel`
}

// Reveal the menu MOBILE
function tap() {
    
        about.innerHTML = `About`
        work.innerHTML = `Work`
        contact.innerHTML = `Contact`        
}

/*function tap2() {
    if (about.textContent == 'About') {
        about.innerHTML = `Hello.`
        work.innerHTML = `I am`
        contact.innerHTML = `Michel`
    }
}*/

// Hide the main menu
function disappear(e) {
    if (e.target == about) {
        mainMenu.style.display = 'none';
        aboutContainer.style.display = 'flex';
    } else if (e.target == work) {
        mainMenu.style.display = 'none';
        workContainer.style.display = 'flex';
    } else if (e.target == contact) {
        mainMenu.style.display = 'none';
        contactContainer.style.display = 'flex';
    }
}

// Main menu again
homeBtn.forEach(/*la clave esta aqui*/img => img.addEventListener('click', showMenu));

function showMenu() {
    mainMenu.style.display = 'flex';
    aboutContainer.style.display = 'none';
    workContainer.style.display = 'none';
    contactContainer.style.display = 'none';

    left.style.display = 'flex';
    right.style.display = 'flex';

    left.style.overflowY = 'hidden';
    right.style.overflowY = 'hidden';

    containerL.style.display = 'none';
    containerR.style.display = 'none';

    gback.style.visibility = 'hidden';


    animationM.forEach.call(animationM, function(el) {
        el.classList.add("hvr-back-pulse");
    });
}

// Work menu
animationM.forEach(section => section.addEventListener('click', menuL_or_R))

function menuL_or_R(e) {
    //remove the class and stops the animation
    animationM.forEach.call(animationM, function(el) {
        el.classList.remove("hvr-back-pulse");
    });


    if (e.target == left || e.target == leftTitle){
        gback.style.visibility = 'visible';
        gback.style.display = 'initial';
        right.style.display = 'none';
        left.style.width = '100%';
        left.style.height = '100vh';
        left.style.overflowY = 'scroll';
        
        containerL.style.display = 'grid';

    } else if (e.target == right || e.target == rightTitle) {
        gback.style.visibility = 'visible';
        gback.style.display = 'initial';
        left.style.display = 'none';
        right.style.width = '100%';
        right.style.height = '100vh';
        right.style.overflowY = 'scroll';

        containerR.style.display = 'grid';

    }
}

function goback(e) {
    if (e.target == gback) {
    workContainer.style.display = 'flex';
    
    gback.style.visibility = 'hidden';
    left.style.display = 'flex';
    right.style.display = 'flex';

    left.style.overflowY = 'hidden';
    right.style.overflowY = 'hidden';

    containerL.style.display = 'none';
    containerR.style.display = 'none';
    //return the class for continue the animation
    animationM.forEach.call(animationM, function(el) {
        el.classList.add("hvr-back-pulse");
    });
    }
}


// Event Listeners
// maybe onload animations to improve the UX

// PC
window.addEventListener('mouseover', over);
window.addEventListener('mouseout', out);
window.addEventListener('click', disappear);
window.addEventListener('click', goback);

/* Find a spot
window.addEventListener('click', clearEntry);
window.addEventListener('keydown', clearEntry);
*/

// MOBILE
// if i touch the screen it reveals the menu -but if i touch again shows "hello im..."-
window.addEventListener('touchend', tap);
//window.addEventListener('touchend', tap2);