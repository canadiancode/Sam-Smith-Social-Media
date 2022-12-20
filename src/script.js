// The Header --Section
// get variables for mobile header pop-up
const hamburgerButtonOpen = document.querySelector('.hamburgerButtonOpen');
const hamburgerButtonClose = document.querySelector('.hamburgerButtonClose');
const mobileSecton = document.querySelector('.mobileSecton');

function stopScrolling() {
    const siteBody = document.querySelector('body');
    if (siteBody.style.overflow === "hidden") {
        siteBody.style.overflow = "auto";
    } else {
        siteBody.style.overflow = "hidden";
    }
}

// oepn the mobile header
hamburgerButtonOpen.addEventListener('click', openMobileSection);
function openMobileSection() {
    mobileSecton.style.transform = 'translateX(0%)';
    mobileSecton.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
    hamburgerButtonOpen.style.transform = 'scale(0%) rotate(900deg)';
    hamburgerButtonClose.style.transform = 'scale(1) rotate(0deg)';
    stopScrolling();
};

//close the mobile header
hamburgerButtonClose.addEventListener('click', closeMobileSection);
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMobileSection();
    };
});
function closeMobileSection() {
    mobileSecton.style.transform = 'translateX(-120%)';
    mobileSecton.style.clipPath = 'polygon(0 0, 9% 91%, 100% 100%, 0% 100%)';
    hamburgerButtonOpen.style.transform = 'scale(1) rotate(0deg)';
    hamburgerButtonClose.style.transform = 'scale(0%) rotate(900deg)';
    stopScrolling();
};


// The Hero --Section for the text color change 
const heroSectionTextObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('textShowing');
        } else {
            entry.target.classList.remove('textShowing');
        }
    });
});
const heroSectionTextEl = document.querySelectorAll('.SuperchargedText');
heroSectionTextEl.forEach((el) => heroSectionTextObserver.observe(el));

// Services --Section

const servicesSections = document.querySelectorAll('.serviceSteps');

const servicesOption = {
    rootMargin: "0px",
    threshold: 1
};

const servicesObserver = new IntersectionObserver(function(entries, servicesObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showingServices');
        }
    });
}, servicesOption);
servicesSections.forEach(section => {
    servicesObserver.observe(section);
});


// hero social media icon section
document.addEventListener('scroll', socialMediaIconParallax);

function socialMediaIconParallax() {

    let scrollheight = window.scrollY;

    // Social media icons
    const socialMediaIconContainer = document.querySelector('.socialMediaIconContainer');

    let socialMediaParallaxValue = scrollheight * 0.2;
    socialMediaIconContainer.style.transform = `translateY(${socialMediaParallaxValue}px)`;

    let opacityValue = 100 * (1 - (scrollheight / 400));
    socialMediaIconContainer.style.opacity = `${opacityValue}%`;

    // emoji icons
    const socialIconContainer = document.querySelector('.socialIconContainer');

    let emojiParallaxvalue = scrollheight * 0.1;
    socialIconContainer.style.transform = `translateY(${emojiParallaxvalue}px)`;
}