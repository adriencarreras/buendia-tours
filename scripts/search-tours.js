// ALL TOURS
const tours =  [
    {
        name: "ATV Cultural Ride",
        id: "atv",
        tags: ["local-tours", "cultural-animals", "easy"],
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero, nihil, quas quisquam cupiditate, omnis a esse sint assumenda fugit nostrum beatae. Voluptatem fuga ullam pariatur cum culpa vel harum saepe quaerat asperiores laborum praesentium delectus unde recusan quaerat asperiores laborum praesentium delectus unde recusan quaerat asperiores laborum praesentium delectus unde recusandae, doloribus.",
        price: "",
        link: "/activities/atv.html",
        image: "/media/activities/atv_00-min.jpeg",
        alt: "atv adventure image"
    },
    {
        name: "Catamaran Tour",
        id: "catamaran",
        tags: ["local-tours", "sea", "relax", "none", "easy"],
        description: "",
        price: "",
        link: "/activities/catamaran.html",
        image: "/media/activities/catamaran_00-min.jpeg",
        alt: "catamaran relaxing day image"
    },
    {
        name: "Horseback Riding",
        id: "horse-riding",
        tags: ["local-tours", "cultural-animals", "easy", "moderate"],
        description: "",
        price: "",
        link: "/activities/horse.html",
        image: "/media/activities/horse_00-min.jpeg",
        alt: "sunset horse riding image"
    },
    {
        name: "Scuba Diving",
        id: "scuba-diving",
        tags: ["local-tours", "sea"],
        description: "",
        price: "",
        link: "/activities/scuba.html",
        image: "/media/activities/scuba_00.jpg",
        alt: "scuba diving image"
    },
    {
        name: "Snorkeling",
        id: "snorkeling",
        tags: ["local-tours", "sea", "easy"],
        description: "",
        price: "",
        alt: "",
        link: "/activities/snorkeling.html",
        image: "/media/default-image.jpg"
    },
    {
        name: "Buenavista Family Adventure",
        id: "buenavista",
        tags: ["day-trips", "rainforest-waterfalls", "adrenaline", "relax", "none", "easy", "moderate", "hard"],
        description: "",
        price: "",
        alt: "",
        link: "/activities/buenavista.html",
        image: "/media/default-image.jpg"
    }, 
    {
        name: "Wild Canyon Adrenaline Combo",
        id: "canyon",
        tags: ["day-trips", "rainforest-waterfalls", "adrenaline", "moderate", "hard"],
        description: "",
        price: "",
        alt: "",
        link: "/activities/canyon.html",
        image: "/media/default-image.jpg"
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
                <div class="card-content">
                    <h2 class="card-title">${tour.name}</h2>
                    <div class="card-price">$${tour.price} per person</div>
                    <p class="card-description">${tour.description}</p>
                </div>
                <div class="image-container">
                    <img class="lazy-image" src="" data-src="${tour.image}" alt="${tour.alt}">
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

renderTourPage();