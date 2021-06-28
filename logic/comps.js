const header = document.querySelector('header');
const toggler = document.querySelector('.ham');
const nav = document.querySelector('.navbar');
const anchors = nav.querySelectorAll('a');
toggler.addEventListener('click', () => {
    document.body.classList.toggle('navbar-open');
    nav.classList.toggle('toggle');
    toggler.classList.toggle('reverse');
})

anchors.forEach(a => {
    a.addEventListener('click', () => {
        if (!a.parentElement.classList.contains('drop')) {
            document.body.classList.remove('navbar-open');
            nav.classList.toggle('toggle');
            toggler.classList.toggle('reverse');
        }
    })
})

const cats = document.querySelectorAll('.category');
let activeul = document.querySelector('.active');
cats.forEach(cat => {
    cat.addEventListener('click', () => {
        if (activeul === cat.children[1]) {
            activeul.classList.toggle('active');
        } else if (!cat.children[1].classList.contains('active')) {
            cat.children[1].classList.add('active');
            activeul.classList.remove('active');
            activeul = cat.children[1];
        }

    })
})