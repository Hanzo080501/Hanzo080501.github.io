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


//box read more start
const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
    text.classList.toggle("show-more");
    if (readMoreBtn.innerText === "Read More") {
        readMoreBtn.innerText = "Read Less";
    } else {
        readMoreBtn.innerText = "Read More";
    }
});

// *********************
// This Code is for only the floating card in right bottom corner
// **********************

// const touchButton = document.querySelector(".float-text");
// const card = document.querySelector(".float-card-info");
// const close = document.querySelector(".gg-close-r");

// touchButton.addEventListener("click", moveCard);
// close.addEventListener("click", moveCard);

// function moveCard() {
//     card.classList.toggle("active");
// }

// box read more end


//
const playButton = document.querySelector('.play-button');
const videoContainer = document.querySelector('.video-container');
const closeButton = document.querySelector('.close-button');
const videoPlayer = videoContainer.querySelector('video');

playButton.addEventListener('click', function () {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        videoPlayer.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
    videoContainer.classList.add('playing');
});

closeButton.addEventListener('click', function () {
    videoContainer.classList.remove('playing');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    playButton.innerHTML = '<i class="fas fa-play"></i>';
});

videoPlayer.addEventListener('ended', function () {
    videoContainer.classList.remove('playing');
});