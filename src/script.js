// The Header --Section
// get variables for mobile header pop-up
const hamburgerButtonOpen = document.querySelector('.hamburgerButtonOpen');
const hamburgerButtonClose = document.querySelector('.hamburgerButtonClose');
const mobileSecton = document.querySelector('.mobileSecton');

// oepn the mobile header
hamburgerButtonOpen.addEventListener('click', openMobileSection);
function openMobileSection() {
    mobileSecton.style.transform = 'translateX(0%)';
    mobileSecton.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
    hamburgerButtonOpen.style.transform = 'scale(0%) rotate(900deg)';
    hamburgerButtonClose.style.transform = 'scale(1) rotate(0deg)';
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

// Icon Parallax code
// Get all the elements to be parallaxed
const parallaxElements = document.querySelectorAll('.socialMediaIcon')

// The parallax function
window.addEventListener('scroll', () => {
  
    let socialMediaIcons = document.querySelectorAll('.socialMediaIcon');
        
    socialMediaIcons.forEach((icon) => {

      let rect = icon.getBoundingClientRect();
      let progress = 20 /  rect.y

    //   icon.style.marginTop = `${progress}rem`;

    });
});

// animation for the services --Section

