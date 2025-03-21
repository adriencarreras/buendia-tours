const headerBG = document.querySelector('.js-header-black-bg')
const header = document.querySelector(".js-header")

const navLinks = document.querySelectorAll('.js-nav-link')
const dropdownCont = document.querySelector('.js-dropdown-container')
const dropdownText = document.querySelectorAll('.js-dropdown-text')
const mobileReturnBtn = document.querySelector('.js-mobile-return-btn')

const modal = document.querySelector('.js-modal');
const modalBtns = document.querySelectorAll('.modal-btn')
const modalBG = document.querySelector('.js-modal-black-bg')
const copyButtons = document.querySelectorAll('.js-copy-button')

const faqs = document.querySelectorAll('.js-faq')

let lastLinkClicked;

let burgerStatus = "close";


// Detect scroll to change padding and color of header
document.addEventListener('scroll', () => {
    
    if (window.scrollY > 50){
        header.classList.add('scrolled')
        dropdownCont.classList.add('scrolled')

    } else {
        header.classList.remove('scrolled')
        dropdownCont.classList.remove('scrolled')
    }
    changeHeaderBg()
})


// dropdown menu
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        let linkClicked = link.dataset.id
        
        navLinks.forEach(l => {l.classList.remove('underline')}) // reset previous underline
        
        if (linkClicked === lastLinkClicked){   // if same navLink is clicked twice
            closeDropdown()
        } else {
            dropdownCont.classList.add('show');
            headerBG.style.display = "block";
            changeHeaderBg()

            link.classList.add('underline');
            showText(linkClicked)

            lastLinkClicked = linkClicked;
        }
        
        // CLOSE DROPDOWN if same user clicks outside of the dropdown, on the header background.
        document.addEventListener("click", (event) => {
            const elementUnderClick = document.elementFromPoint(event.clientX, event.clientY);
            if (elementUnderClick === headerBG){
                closeDropdown()
            }
          });
    })
})

function changeHeaderBg(){

    if (window.scrollY > 50 || dropdownCont.classList.contains('show') || burgerStatus === "open") {
        header.classList.add('dark');
    }

    else  {
        header.classList.remove('dark');
    }
}

function showText(section){
    dropdownText.forEach(dropdown => {
        dropdown.classList.remove('show')  // reset previous show

        // setTimeout() --------------------------- code this to 500ms
        if (dropdown.dataset.id == section){
            dropdown.classList.add('show')
        }
    })    
}

function closeDropdown(){
    // hide and reset dropdown
    dropdownCont.classList.remove('show');
    dropdownText.forEach(dropdown => {
        dropdown.classList.remove('show')  // reset previous show
    })
    navLinks.forEach(l => {l.classList.remove('underline')}) // reset previous underline
    headerBG.style.display = "none";
    lastLinkClicked = undefined;

    changeHeaderBg()
}


const burgerBtn = document.querySelector('.js-burger-btn')

burgerBtn.addEventListener('click', () => {
    if (burgerStatus === "close"){
        document.querySelector('.js-extended').classList.add('open');
        burgerBtn.classList.add('close')

        burgerStatus = "open";
    
    } else { // if burger is open
        document.querySelector('.js-extended').classList.remove('open');
        burgerBtn.classList.remove('close')

        burgerStatus = "close"
    }        

    changeHeaderBg()
})


mobileReturnBtn.addEventListener('click', () => {
    closeDropdown();
})



// Modal ------------------
modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        modal.classList.add('open');
        modalBG.style.display = "block";
        
        modal.querySelector('.close').addEventListener('click', () => {
            modal.classList.remove('open');
            modalBG.style.display = "none";
        })

    })
})

copyButtons.forEach(btn => {
    btn.addEventListener('mouseup', () => {
        if (btn.dataset.id === 'whatsapp'){
            navigator.clipboard.writeText('87440011')        
        }
        
        if (btn.dataset.id === 'email'){
            navigator.clipboard.writeText('info@buendiatours.com')
        }
        btn.classList.add('copied')
        console.log(`saved to clipboard`)

        setTimeout(() => {
            btn.classList.remove('copied');
        }, 2000);
    })
})


// FAQs animation

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faqs.forEach(f => {
            f.classList.remove('active')
        })
        faq.classList.toggle('active')
    })
})




// ----------------------------------------------------------------
// lazy image loading

const lazyImages = document.querySelectorAll(".lazy-image");

// Set up the IntersectionObserver with rootMargin for preloading
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; // Set the actual image source
            img.onload = () => {
                img.style.opacity = 1; // Fade-in effect
            };
            observer.unobserve(img); // Stop observing the loaded image
        }
    });
}, {
    rootMargin: "100px 0px" // Preload images 100px before they enter the viewport
});

// Observe all lazy images
lazyImages.forEach(img => {
    imageObserver.observe(img);
});