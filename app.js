function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// document.addEventListener('scroll', () => {
//     cards = document.querySelector("#cards");

//     card_1 = document.querySelector('#card_1');
//     card_2 = document.querySelector('#card_2');

//     rect1 = card_1.getBoundingClientRect();
//     rect2 = card_2.getBoundingClientRect();

//     console.log(window.innerHeight);

//     console.log("rect1:" + rect1.y);
//     console.log("rect2:" + rect2.y);

// });

const navbar = document.getElementById('navbar');
let prevScrollPos = window.scrollY;
let isAnimating = false;

function animateNavbar() {
    if (!isAnimating) {
        isAnimating = true;
        const currentScrollPos = window.scrollY;
        if (prevScrollPos > currentScrollPos) {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        } else {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        }
        prevScrollPos = currentScrollPos;
        setTimeout(() => {
            isAnimating = false;
        }); // Add a slight delay to prevent rapid animations
    }
}

window.addEventListener('scroll', animateNavbar);


const topElement = document.getElementById('card_1');
const bottomElement = document.getElementById('card_2');


topElement.style.opacity = 1; 
bottomElement.style.opacity = 0.2;

function AnimFade(topEl, botEl) {
    const topRect = topEl.getBoundingClientRect();
    const topPosition = topRect.top;

    if (topPosition <= 1) {
        const distanceToTop = Math.abs(topPosition);
        topEl.style.opacity = 1 - distanceToTop * 0.005; // Adjust fading rate
        botEl.style.opacity = 1 - topEl.style.opacity;
        if (topEl.style.opacity <= 0.2) {
            topEl.style.opacity = 0.2;
        }
        if (botEl.style.opacity <= 0.2) {
            botEl.style.opacity = 0.2;
        }
    }

    // Brighten the bottom element when the top one dims
    // botEl.style.opacity = 1 - topEl.style.opacity;
}

function handleScroll() {
    AnimFade(topElement, bottomElement);
    requestAnimationFrame(handleScroll); // Smooth animation during scrolling
}

window.addEventListener('scroll', handleScroll);


