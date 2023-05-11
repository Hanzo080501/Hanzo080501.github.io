const sliderTrack = document.querySelector('.slider-track');
const sliderItems = document.querySelectorAll('.slider-item');
const sliderPrevBtn = document.querySelector('.slider-prev');
const sliderNextBtn = document.querySelector('.slider-next');

let currentSlide = 0;
const slideWidth = sliderItems[0].clientWidth + 20; // add margin-right value
const slideMarginRight = parseInt(window.getComputedStyle(sliderItems[0]).marginRight);

// set the width of slider track
sliderTrack.style.width = `${slideWidth * sliderItems.length}px`;
//slider card end


// tombol slider sebelum
sliderPrevBtn.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = sliderItems.length - 5;
    }
    sliderTrack.children[currentSlide].scrollIntoView({
        behavior: 'smooth'
    });
});

// tombol slider selanjutnya
sliderNextBtn.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= sliderItems.length) {
        currentSlide = 0;
    }
    sliderTrack.children[currentSlide].scrollIntoView({
        behavior: 'smooth'
    });
});

//tombol end


//loading lazy start
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



//rating start
$(document).ready(function () {
    // Ketika salah satu elemen bintang diklik
    $('.rating i').click(function () {
        // Ubah rating dari elemen yang diklik
        var rating = $(this).data('rating');
        $(this).removeClass('far').addClass('fas');
        $(this).prevAll().removeClass('far').addClass('fas');
        $(this).nextAll().removeClass('fas').addClass('far');

        // Tampilkan rating pada console log
        console.log('Rating: ' + rating);
    });
});
//rating end