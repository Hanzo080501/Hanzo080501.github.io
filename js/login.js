document.getElementById("myButton").addEventListener("click", function (event) {
    event.preventDefault();
    var card = document.getElementById("card");
    var loading = document.getElementById("loading");
    var videoContainer = document.getElementById("videoContainer");
    var loadingVideo = document.getElementById("loading-video");
    var spinner = document.querySelectorAll(".loading-spinner");
    card.style.display = "none";
    loading.style.display = "block";
    videoContainer.style.display = "block";
    loadingVideo.play();
    spinner.forEach(function (spinner) {
        spinner.style.display = "block";
    });
    setTimeout(function () {
        videoContainer.style.display = "none";
        loading.style.display = "none";
        spinner.forEach(function (spinner) {
            spinner.style.display = "none";
        });
        window.location.href = "../dasboard/index2.html";
    }, 5000);
});

function showLoading() {
    var loadingVideo = document.getElementById("loading-video");
    var loading = document.querySelector(".loading");
    loadingVideo.style.display = "block";
    loading.style.display = "none";

    setTimeout(function () {
        loadingVideo.style.display = "none";
        loading.style.display = "none";
        window.location.href = "../dasboard/index2.html";
    }, 5000);
}

var button = document.getElementById("myButton");
button.addEventListener("click", showLoading);