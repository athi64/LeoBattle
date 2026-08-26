let progress = 0;

const loadingBar =
    document.getElementById("loadingBar");

const loadingText =
    document.getElementById("loadingText");

const loading =
    setInterval(function () {

        progress += 2;

        loadingBar.style.width =
            progress + "%";

        if (progress < 30) {

            loadingText.textContent =
                "INITIALIZING...";

        } else if (progress < 60) {

            loadingText.textContent =
                "LOADING WORLD...";

        } else if (progress < 90) {

            loadingText.textContent =
                "PREPARING BATTLE...";

        } else {

            loadingText.textContent =
                "READY";
        }

        if (progress >= 100) {

            clearInterval(loading);

            loadingText.textContent =
                "LEOBATTLE READY";
        }

    }, 80);
