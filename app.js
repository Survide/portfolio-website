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
//     // y = window.innerHeight / 2;
//     // x = window.innerWidth / 2;

//     // console.log(x,y)

//     cY = window.scrollY;
//     cX = window.scrollX;
//     console.log(cX, cY)
// });
