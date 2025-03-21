// ALL TOURS
const tours =  [
    {
        name: "Catamaran Tour",
        id: "catamaran",
        link: "catamaran.html",
        image: "media/activities/catamaran_00-min.jpeg",
        alt: "",
        duration: "Duration: 4 hours", 
        specialTagClass:"",
        specialTagSpan:"Most recommended",
        description: "Sail the Guanacaste coast on a catamaran, snorkel, kayak, or relax with a drink. Enjoy fresh snacks and a stunning sunset, with chances to spot dolphins, rays, or whales. Every trip is unique!",
        price: "85",
        tags: ['local-tour', 'ocean','family', 'relaxing']
    },
    {
        name: "ATV Cultural Ride",
        id: "atv",
        link: "atv.html",
        image: "media/activities/atv/WhatsApp Image 2025-02-23 at 13.57.58_6e3a4fd4.jpg",
        alt: "",
        duration: "Duration: 2-3 hours",
        specialTagClass:"hide",
        specialTagSpan:"",
        description: "Pick between a 2.5-hour tour with historic sites, a dragon fruit farm, and wildlife sightings, or a 3-hour Senderos ride through rivers and remote trails, with a delicious local lunch. Both offer a true adventure!",
        price: "100",
        tags: ['local-tour', 'culture','family', 'adrenaline']
    },
    {
        name: "Buenavista Family Adventure",
        id: "buenavista",
        link: "buenavista.html",
        image: "media/activities/buenavista/Screenshot 2025-03-01 085913.png",
        alt: "",
        duration: "Full day excursion", 
        specialTagClass:"hide",
        specialTagSpan:"",
        description: "The perfect mix of adventure and relaxation: the tour takes you through canopy bridges, 10 zip lines, a jungle waterslide, and a buffet lunch. Choose horseback riding or a hike, then unwind with a volcanic sauna and hot springs!",
        price: "185",
        tags: ['day-trip', 'family', 'adrenaline', 'relaxing', 'hiking']
    },

    {
        name: "Horseback Riding",
        id: "horse-riding",
        link: "horse.html",
        image: "media/activities/horse_00-min.jpeg",
        alt: "",
        duration: "Duration: 1.5 hours", 
        specialTagClass:"hide",
        specialTagSpan:"",
        description: "Ride along Playa Conchal, one of the world’s most beautiful beaches! This tour takes you through sandy shores and shaded trails, perfect for all riders. A relaxing way to explore nature.",
        price: "65",
        tags: ['local-tour','animals','family']
    },
    {
        name: "La Leona Waterfall",
        id: "leona",
        link: "leona.html",
        image: "/media/activities/leona/Screenshot 2025-03-01 101558.png",
        alt: "",
        duration: "Full day excusion", 
        specialTagClass:"hide",
        specialTagSpan:"",
        description: "Explore La Leona Waterfall on a thrilling 2.5-hour trek with river crossings, caves, and canyons. Swim in its hidden pools, enjoy a Costa Rican lunch, and opt for a volcanic mud bath and hot springs to unwind!",
        price: "180",
        tags: ['day-trip','family', 'hiking', 'relaxing']
    },
    {
        name: "Scuba Diving",
        id: "scuba-diving",
        link: "scuba.html",
        image: "media/activities/scuba/pascal-van-de-vendel-gcG_b9ijyqU-unsplash.jpg",
        alt: "",
        duration: "Duration: 4-5 hours", 
        specialTagClass:"hide",
        specialTagSpan:"",
        description: "Dive Las Catalinas Islands for encounters with turtles, octopuses, rays, and reef sharks. A trusted dive shop with 20+ years of experience offers a spacious boat, snacks, and an unforgettable experience!",
        price: "120",
        tags: ['local-tour', 'ocean','animals', 'family']
    },
    // {
    //     name: "Snorkeling",
    //     id: "snorkeling",
    //     link: "snorkeling.html",
    //     image: "",
    //     alt: "",
    //     duration: "Duration: 4-5 hours", 
    //     specialTagClass:"hide",
    //     specialTagSpan:"",
    //     description: "Explore underwater life at two different sites and unwind on the boat with snacks.  You can spot angelfish, pufferfish, rays, and even reef sharks. A perfect mix of adventure and relaxation!",
    //     price: "",
    //     tags: ['local-tour', 'ocean','animals', 'family', 'relaxing']
    // }
    {
        name: "Rio Celeste",
        id: "celeste",
        link: "celeste.html",
        image: "media/activities/celeste/celeste_00-min.jpeg",
        alt: "",
        duration: "Full day excusion", 
        specialTagClass:"hide",
        specialTagSpan:"",
        description: "Trek through the rainforest and explore the famous Rio Celeste, with waterfalls and lagoons, then explore a wildlife-rich private reserve. Finish with a tasty Costa Rican lunch. A tough but rewarding journey!",
        price: "210",
        tags: ['day-trip','family','waterfalls', 'jungle']
    },
    {
        name: "Wild Canyon Adrenaline Combo",
        id: "canyon",
        link: "canyon.html",
        image: "media/activities/canyon/Screenshot 2025-03-02 072204.png",
        alt: "woman having fun zip-lining through the jungle",
        duration: "Full day excursion", 
        specialTagClass:"hide",
        specialTagSpan:"",
        description: "Adrenaline-packed day: 8 zip lines, rappelling, and a climbing wall. Then enjoy rafting or tubing down Class 2-3 rapids, a swim at a waterfall, and a tasty buffet lunch. Perfect for adventure lovers!",
        price: "195",
        tags: ['day-trip', 'family', 'adrenaline', 'jungle']
    },
    {
        name: "Wildlife River Float & Sloth Trip",
        id: "river-float",
        link: "river-float.html",
        image: "media/activities/river-float/Screenshot 2025-03-01 133240.png",
        alt: "",
        duration: "Full day excusion", 
        specialTagClass:"hide",
        specialTagSpan:"",
        description: "Float 2 hours down the Rio Corobici spotting monkeys, iguanas, and crocs. After a tasty Costa Rican lunch, enjoy a rainforest walk to see sloths, frogs, and birds. A full day of nature and wildlife!",
        price: "185",
        tags: ['day-trip','family', 'animals', 'jungle']
    },
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
let toursDisplayed = [];

tours.forEach(tour => {
    toursDisplayed.push(tour.id)
} )



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


renderTourPage();
