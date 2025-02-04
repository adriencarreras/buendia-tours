// ALL TOURS
const tours =  [

    {
        // template
        name: "",
        id: "",
        link: "",
        image: "",
        alt: "",
        duration: "", //ex: Duration: 4 hours
        specialTagClass:"",
        specialTagSpan:"",
        description: "",
        price: "",
        tags: []
    },
    {
        name: "ATV Cultural Ride",
        id: "atv",
        link: "",
        image: "media/activities/atv_00-min.jpeg",
        alt: "",
        duration: "Duration: 4 hours", //to correct
        specialTagClass:"hide",
        specialTagSpan:"",
        description: "",
        price: "",
        tags: ['local-tour', 'culture','family', 'adrenaline']
    },
    {
        name: "Catamaran Tour",
        id: "catamaran",
        link: "",
        image: "media/activities/catamaran_00-min.jpeg",
        alt: "",
        duration: "", 
        specialTagClass:"hide",
        specialTagSpan:"",
        description: "",
        price: "",
        tags: ['local-tour', 'ocean','family', 'relaxing']
    },
    {
        name: "Horseback Riding",
        id: "horse-riding",
        link: "",
        image: "media/activities/horse_00-min.jpeg",
        alt: "",
        duration: "", 
        specialTagClass:"hide",
        specialTagSpan:"",
        description: "",
        price: "",
        tags: ['local-tour', 'animals','family']
    },
    {
        name: "Scuba Diving",
        id: "scuba-diving",
        link: "",
        image: "media/activities/scuba_00.jpg",
        alt: "",
        duration: "", 
        specialTagClass:"hide",
        specialTagSpan:"",
        description: "",
        price: "",
        tags: ['local-tour', 'ocean','animals', 'family', 'adrenaline']
    },
    {
        name: "Snorkeling",
        id: "snorkeling",
        link: "",
        image: "",
        alt: "",
        duration: "", 
        specialTagClass:"hide",
        specialTagSpan:"",
        description: "",
        price: "",
        tags: ['local-tour', 'ocean','animals', 'family', 'relaxing']
    },
    // {
    //     name: "Buenavista Family Adventure",
    //     id: "buenavista",
        
    // }, 
    {
        name: "Wild Canyon Adrenaline Combo",
        id: "canyon",
        link: "",
        image: "media/activities/rafting_00-min.jpeg",
        alt: "",
        duration: "", 
        specialTagClass:"hide",
        specialTagSpan:"",
        description: "",
        price: "",
        tags: ['day-trip', 'family', 'adrenaline']
    }
]


// ------------------------- Mobile Sidebar animation

const sidebarBtn = document.querySelector('.expand-sidebar')
const sidebarEl = document.querySelector('.sidebar');
let sidebarStatus = 'hidden'

sidebarBtn.addEventListener('click', () => {
    if(sidebarStatus === "hidden"){
        sidebarEl.classList.add('expanded');
        document.querySelector("body").style.overflow = "hidden";
        sidebarStatus = 'expanded';

        document.addEventListener('mouseup', onClickOutside)
    }
})

function onClickOutside(event){
    const withinBoundaries = event.composedPath().includes(sidebarEl)
    if (!withinBoundaries) {
    sidebarEl.classList.remove('expanded');
    document.querySelector("body").style.overflow = "scroll";
    sidebarStatus = 'hidden';
    document.removeEventListener('mouseup', onClickOutside);
    }
}

const closeBtn = document.querySelector('.js-close-btn')
closeBtn.addEventListener('click', () => {
    sidebarEl.classList.remove('expanded');
    document.querySelector("body").style.overflow = "scroll";
    sidebarStatus = 'hidden';
    document.removeEventListener('mouseup', onClickOutside);
    
})


// ---------------------------------- FILTER SEARCH FUNCTIONALITY

const allFiltersBtn = document.querySelector('.all-filters-btn')
const NoFiltersBtn = document.querySelector('.no-filters-btn')
const checkboxes = document.querySelectorAll(".checkbox")
let filtersSelected = [];
let toursDisplayed = ['atv', 'horse-riding', 'catamaran', 'scuba-diving', 'snorkeling', 'buenavista', 'canyon'];


// Sidebar boxes animation

const boxEl = document.querySelectorAll('.js-box')

boxEl.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('hidden')
    })
})


// select-all-filters button:
allFiltersBtn.addEventListener('click', () => {
    filtersSelected = [];
    checkboxes.forEach(box => {
        box.checked = true;
        filtersSelected.push(box.id);
    })
    
    filterTours();
})

// Deselect-all-filters button:
NoFiltersBtn.addEventListener('click', () => {
    filtersSelected = [];
    checkboxes.forEach(box => {
        box.checked = false;
    })
    
    filterTours();
})


// checkbox inputs 
checkboxes.forEach(boxClicked => {
    boxClicked.addEventListener('click', () => {
        // create array of filters
        filtersSelected = [];
        checkboxes.forEach(box => {
            box.checked ? filtersSelected.push(box.id)
            : null
        })
        filterTours();
    })
    
})

function filterTours(){
    // reset tours displayed
    toursDisplayed = [];

    // create array of tours based on filters
    filtersSelected.forEach(filter => {
        for (let i = 0; i < tours.length; i++){
            let tour = tours[i];
            if (tour.tags.includes(filter)){
                toursDisplayed.includes(tour.id)
                    ? console.log("duplicate")
                    : toursDisplayed.push(tour.id)
            }
        }
    })
    renderTourPage();
}


function renderTourPage(){
    let toursHTML = "";
    tours.forEach(tour => {
        if (toursDisplayed.includes(tour.id)){
            let tourhtml = `
            <a href="${tour.link}" class="card">
                <div class="image-container">
                    <img class="lazy-image" src="" data-src="${tour.image}" alt="">
                    <div class="overlay"></div>
                    <div class="special-tag ${tour.specialTagClass}">
                        <i class="fa-solid fa-ranking-star"></i>
                        <span>${tour.specialTagSpan}</span>
                    </div>
                    
                </div>
    
                <div class="content">
                    <div>
                        <div class="top-row">
                            <span class="tour-name">${tour.name}</span>
                            <span class="duration">${tour.duration}</span>
                        </div>
                        <div class="description">
                            <p>${tour.description}</p>
                        </div>
                    </div>
                    
                    <div class="bottom-row">
                        <div class="left-col">
                            <span class="tour-name">${tour.name}</span>
                            <div class="pricing">
                                <span class="from">From:</span>
                                <span class="tour-price">$${tour.price} per person</span>
                            </div>
                        </div>
                        <div class="right-col">
                            <button class="info-button">
                                <i class="fa-solid fa-circle-info"></i>
                                <span>Info</span>
                            </button>
                        </div>
    
                    </div>
                </div>
            </a>
            `;

            toursHTML += tourhtml;
        }
    })
        
    cardsContainer = document.querySelector(".main")
    
    if (toursDisplayed.length === 0){
        cardsContainer.innerHTML = 
        `<h3 class="warning">Adjust your search filters to find tours!</h3>`
    } else {
        cardsContainer.innerHTML = toursHTML
    }

    renderLazyImages()
}

function renderLazyImages(){
    const lazyImages = document.querySelectorAll(".lazy-image");

    // Set up the IntersectionObserver with rootMargin for preloading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => {
                    img.style.opacity = 1; 
                };
                observer.unobserve(img); 
            }
        });
    }, {
        rootMargin: "100px 0px" 
    });

    // Observe all lazy images
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

// renderTourPage();