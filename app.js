const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const about_me_description = document.querySelectorAll('#about-me-description');
about_me_description.forEach((el) => observer.observe(el));

const about_me_title = document.querySelectorAll('#about-me-title');
about_me_title.forEach((el) => observer.observe(el));

const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el) => observer.observe(el));


box = document.getElementById("sfmspan")

document.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;

    if (boxPosition < windowHeight * 0.75) {
        box.classList.add('show');
    } else {
        box.classList.remove('show');
    }
});

