// ----------- Nav bar

// Get all section elements and nav links
const sections = document.querySelectorAll('.js-section');
const navSectionLinks = document.querySelectorAll('.js-nav-a');

// Function to detect which section is in view
function updateActiveLink() {
    let currentSection = '';

    // Loop through sections to determine which is in the viewport
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight) {
            if (section.getAttribute('id') === "overview"){
                currentSection = section.getAttribute('id');
            }
        }
        
        if (window.scrollY >= sectionTop - sectionHeight * .2) {
            currentSection = section.getAttribute('id');
        }
    });

    // Update active class on nav links
    navSectionLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Attach scroll event listener
window.addEventListener('scroll', updateActiveLink);





// --------- Review Slider

const arrowBtns = document.querySelectorAll('.js-arrow-btn')
const slider = document.querySelector('.js-slider')
const firstSlideWidth = document.querySelector('.slide').offsetWidth;

arrowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        slider.scrollLeft += btn.id === 'left' 
        ? - firstSlideWidth 
        : firstSlideWidth;
    })
})

