const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.prgress-bars-wrapper');
const progreeBarPercents = [97, 89, 85, 87, 80, 70, 50];

window.addEventListener('scroll', () => {
    if (window.scrollY >= navbarOffsetTop) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    sections.forEach((section, i) => {
        if (window.scrollY >= section.offsetTop - 10) {
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('change');
            })
            navbarLinks[i].classList.add('change');
        }
    });

    if (window.scrollY + window.innerHeight >= progress.offsetTop) {
        
    }
});