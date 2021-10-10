"use strict"

/* Solve the  100vh behavior on mobile */
function resetHeight(){
    // reset the body height to that of the inner browser
    document.body.style.height = window.innerHeight + 'px'
}
// reset the height whenever the window's resized
window.addEventListener('resize', resetHeight)

const mobileQuery = window.matchMedia('(max-width: 767px)')
// called to initially set the height.
if (mobileQuery.matches) resetHeight()

/* index */
const nav = document.querySelectorAll('.introUP')
const about = document.getElementById('about')
const work = document.getElementById('work')
const contact = document.getElementById('contact')
/* work */
const left = document.getElementById('left_sect')
const leftSidebar = document.getElementById('sidebarL')
const leftTitle = document.getElementById('leftT')
const right = document.getElementById('right_sect')
const rightSidebar = document.getElementById('sidebarR')
const rightTitle =document.getElementById('rightT')
const gback = document.getElementById('back')
const containerL = document.getElementById('containerL')
const containerR = document.getElementById('containerR')
const animationPc = document.querySelectorAll('.hvr-back-pulse')
const animationMob = document.querySelectorAll('.tracking-in-expand')

// Main Menu slide up effect
nav.forEach(function (el, index) {
    setTimeout(function () {
      el.style.animation = 'animH1 1s ease 0s 1 normal forwards'
    }, index * 320)
})

// Main Menu hover effects
function over(e) {
    if (e.target === about) {
        about.textContent = `About`
        about.parentNode.setAttribute('href', './about.html')
    } else if (e.target === work) {
        work.textContent = `Work`
        work.parentNode.setAttribute('href', './work.html')
    } else if (e.target === contact) {
        contact.textContent = `Contact`
        contact.parentNode.setAttribute('href', './contact.html')
    }
}

function out() {
    about.textContent = `Hello.`
    work.textContent = `I am`
    contact.textContent = `Michel`
}

// Reveal the menu MOBILE
let count = 0
function tap() {
    if ((count % 2) === 0 /*|| e.target === animationMob*/) {
    about.textContent = `About`
    about.parentNode.setAttribute('href', './about.html')
    work.textContent = `Work`
    work.parentNode.setAttribute('href', './work.html')
    contact.textContent = `Contact`
    contact.parentNode.setAttribute('href', './contact.html')
    count++
    //console.log('here');
    } else /*if (count % 2) !== 0 /*|| e.target === animationMob)*/ {
    about.textContent = `Hello.`
    //about.parentNode.removeAttribute('href', './about.html')
    work.textContent = `I am`
    //work.parentNode.removeAttribute('href', './work.html')
    contact.textContent = `Michel`
    //contact.parentNode.removeAttribute('href', './contact.html')
    //console.log(`here ${count}`);
    count++
    }
}

// Work interaction

animationPc.forEach(section => section.addEventListener('click', menuL_or_R))

function menuL_or_R(e) {
    //remove the class n stops the animations
    animationPc.forEach.call(animationPc, function(el) {
        el.classList.remove("hvr-back-pulse")
    })
    animationMob.forEach.call(animationMob, function(el) {
        el.classList.remove("tracking-in-expand")
    })


    if (e.target === left || e.target === leftSidebar || e.target === leftTitle){
        
        gback.style.visibility = 'visible'
        right.style.display = 'none'

        left.style.justifyContent = 'unset'
        left.style.height = 'auto'
        leftSidebar.style.height = '100vh'
        
        containerL.style.display = 'grid'

        work.style.height = 'auto'

    } else if (e.target === right || e.target === rightSidebar || e.target === rightTitle) {
        
        gback.style.visibility = 'visible'
        left.style.display = 'none'

        right.style.justifyContent = 'unset'
        right.style.height = 'auto'
        rightSidebar.style.height = '100vh'

        containerR.style.display = 'grid'
        
        work.style.height = 'auto'
    }
}

function goback(e) {
    if (e.target === gback) {
        /* "default" properties of workContainer */
        gback.style.visibility = 'hidden'

        left.style.display = 'flex'
        left.style.justifyContent = 'center'
        left.style.height = '100%'
        leftSidebar.style.height = 'auto'

        right.style.display = 'flex'
        right.style.justifyContent = 'center'
        right.style.height = '100%'
        rightSidebar.style.height = 'auto'

        containerL.style.display = 'none'
        containerR.style.display = 'none'
        
        //give back the class n continue the animations
        animationPc.forEach.call(animationPc, function(el) {
            el.classList.add("hvr-back-pulse")
        })
        animationMob.forEach.call(animationMob, function(el) {
            el.classList.add("tracking-in-expand")
        })

        //pc query 
        if (window.matchMedia('(min-width: 768px)').matches) {
            rightSidebar.style.height = '100vh'
            leftSidebar.style.height = '100vh'
        }

    }
}


// Event Listeners
//Add onload animations to improve the UX

// PC
window.addEventListener('mouseover', over)
window.addEventListener('mouseout', out)
window.addEventListener('click', goback)

// MOBILE
// if i touch the screen it reveals the menu -but if i touch again shows "hello im..."-
window.addEventListener('touchend', tap)