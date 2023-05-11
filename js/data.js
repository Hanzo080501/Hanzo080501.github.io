//dark mod
document.getElementById('toggleBtn1').addEventListener('click', toggleDarkMode);
document.getElementById('toggleBtn2').addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    const body = document.body;
    const isDark = body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : '');
}

function toggleDarkMode2() {
    const body = document.body;
    const isDark = body.classList.toggle('dark2');
    localStorage.setItem('theme2', isDark ? 'dark2' : '');
}


// Memeriksa local storage untuk memastikan apakah mode gelap aktif
const theme = localStorage.getItem('theme');
if (theme === 'dark') {
    document.body.classList.add('dark');
}

const theme2 = localStorage.getItem('theme2');
if (theme2 === 'dark2') {
    document.body.classList.add('dark2');
};
//dark mod end




//carousel triggers & control
const galeriContainer = document.querySelector('.galeri-container');
const galeriControlContainer = document.querySelector('.galeri-control');
const galeriControl = ['previous', 'next'];
const galeri = document.querySelectorAll('.galeri');

class Carousel {

    constructor(container, galeri, control) {
        this.carouselContainer = container;
        this.carouselControl = control;
        this.carouselArray = [...galeri];
    }

    updateGaleri() {
        this.carouselArray.forEach(el => {
            el.classList.remove('galeri-1');
            el.classList.remove('galeri-2');
            el.classList.remove('galeri-3');
            el.classList.remove('galeri-4');
            el.classList.remove('galeri-5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`galeri-${i+1}`);
        });

    }

    setCurrentState(direction) {
        if (direction.className == 'galeri-control-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }

        this.updateGaleri();
    }

    setControl() {
        this.carouselControl.forEach(control => {
            galeriControlContainer.appendChild(document.createElement('button')).className = `galeri-control-${control}`;
            document.querySelector(`.galeri-control-${control}`).innerText = control;
        });
    }

    useControl() {
        const triggers = [...galeriControlContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });


    }

}

const exampleCarousel = new Carousel(galeriContainer, galeri, galeriControl);

exampleCarousel.setControl();
exampleCarousel.useControl();
//carousel triggers end 



// lading lazy
const images = document.querySelectorAll('img');

const options = {
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            img.setAttribute('src', src);
            observer.unobserve(img);
        }
    });
}, options);

images.forEach(img => {
    observer.observe(img);
});
//loading lazy end


//tombol contact
const buttons = document.querySelectorAll('.social a');

buttons.forEach(button => {

    button.addEventListener('mousemove', e => {
        const x = e.layerX - 70;
        const y = e.layerY - 70;
        const i = e.target.querySelector('i');
        const bg = e.target.querySelector('.bg');
        i.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
        bg.style.transform = `translate(${x / 8}px, ${y / 8}px)`;
    });

    button.addEventListener('mouseenter', e => {
        const i = e.target.querySelector('i');
        const bg = e.target.querySelector('.bg');
        i.style.transition = 'all .15s ease';
        bg.style.transition = 'all .15s ease';
        setTimeout(() => {
            i.style.transition = '';
            bg.style.transition = '';
        }, 150);
    });

    button.addEventListener('mouseleave', e => {
        const i = e.target.querySelector('i');
        const bg = e.target.querySelector('.bg');
        i.style.transition = 'all .25s ease';
        bg.style.transition = 'all .25s ease';
        i.style.transform = `translate(${0}px, ${0}px)`;
        bg.style.transform = `translate(${0}px, ${0}px)`;
        setTimeout(() => {
            i.style.transition = '';
            bg.style.transition = '';
        }, 250);
    });

});
//tombol contact end