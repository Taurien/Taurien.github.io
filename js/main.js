/* index */
const about = document.getElementById('about');
const work = document.getElementById('work');
const contact = document.getElementById('contact');
/* work */
const left = document.getElementById('left_sect');
const leftSidebar = document.getElementById('sidebarL');
const leftTitle = document.getElementById('leftT');
const right = document.getElementById('right_sect');
const rightSidebar = document.getElementById('sidebarR');
const rightTitle =document.getElementById('rightT');
const gback = document.getElementById('back');
const containerL = document.getElementById('containerL');
const containerR = document.getElementById('containerR');
const animationPc = document.querySelectorAll('.hvr-back-pulse');
const animationMob = document.querySelectorAll('.tracking-in-expand')

// Main Menu hover effects
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

// Work interaction

animationPc.forEach(section => section.addEventListener('click', menuL_or_R))

function menuL_or_R(e) {
    //remove the class n stops the animation
        animationPc.forEach.call(animationPc, function(el) {
            el.classList.remove("hvr-back-pulse");
        })
        animationMob.forEach.call(animationMob, function(el) {
            el.classList.remove("tracking-in-expand");
        })


    if (e.target == left || e.target == leftSidebar || e.target == leftTitle){
        gback.style.visibility = 'visible';
        right.style.display = 'none';
        left.style.width = '100%';
        leftSidebar.style.border = 'none';//for display only
        //leftSidebar.style.height = '100vh';
        
        containerL.style.display = 'grid';

    } else if (e.target == right || e.target == rightSidebar || e.target == rightTitle) {
        gback.style.visibility = 'visible';
        left.style.display = 'none';
        right.style.width = '100%';
        rightSidebar.style.border = 'none';//for display only
        //rightSidebar.style.height = '100vh';

        containerR.style.display = 'grid';

    }
}

function goback(e) {
    if (e.target == gback) {
        
        gback.style.visibility = 'hidden';
        left.style.display = 'flex';
        leftSidebar.style.borderBottom = '1px solid white';//for display only
        //leftSidebar.style.height = '50vh';
        right.style.display = 'flex';
        rightSidebar.style.borderTop = '1px solid white';//for display only
        //rightSidebar.style.height = '50vh';

        containerL.style.display = 'none';
        containerR.style.display = 'none';
        //give back the class n continue the animation
            animationPc.forEach.call(animationPc, function(el) {
                el.classList.add("hvr-back-pulse");
            })
            animationMob.forEach.call(animationMob, function(el) {
                el.classList.add("tracking-in-expand");
            })
    }
}


// Event Listeners
//Add onload animations to improve the UX

// PC
window.addEventListener('mouseover', over);
window.addEventListener('mouseout', out);
window.addEventListener('click', goback);

// MOBILE
// if i touch the screen it reveals the menu -but if i touch again shows "hello im..."-
window.addEventListener('touchend', tap);