document.addEventListener("DOMContentLoaded", function () {

    const firstLoading = document.getElementById("firstLoading");
    const loginPage = document.getElementById("loginPage");
    const secondLoading = document.getElementById("secondLoading");
    const lobby = document.getElementById("lobby");

    const firstBar = document.getElementById("firstBar");
    const firstPercent = document.getElementById("firstPercent");
    const firstStatus = document.getElementById("firstStatus");

    const secondBar = document.getElementById("secondBar");
    const secondPercent = document.getElementById("secondPercent");
    const secondStatus = document.getElementById("secondStatus");


    // ==============================
    // SCREEN CHANGE
    // ==============================

    function showPage(page) {

        document.querySelectorAll(".page").forEach(function (item) {
            item.classList.remove("active");
        });

        page.classList.add("active");
    }


    // ==============================
    // FIRST LOADING
    // ==============================

    let progress = 0;

    firstBar.style.width = "0%";
    firstPercent.textContent = "0%";

    const firstTimer = setInterval(function () {

        progress += 2;

        if (progress > 100) {
            progress = 100;
        }

        firstBar.style.width = progress + "%";
        firstPercent.textContent = progress + "%";

        if (progress < 25) {
            firstStatus.textContent = "STARTING LEOBATTLE...";
        }
        else if (progress < 50) {
            firstStatus.textContent = "LOADING GAME SYSTEM...";
        }
        else if (progress < 75) {
            firstStatus.textContent = "AWAKENING THE BATTLE...";
        }
        else if (progress < 100) {
            firstStatus.textContent = "PREPARING YOUR JOURNEY...";
        }
        else {
            firstStatus.textContent = "LEOBATTLE READY";
        }

        if (progress >= 100) {

            clearInterval(firstTimer);

            setTimeout(function () {
                showPage(loginPage);
            }, 800);
        }

    }, 60);


    // ==============================
    // GOOGLE
    // ==============================

    window.loginGoogle = function () {
        startSecondLoading("Google Player");
    };


    // ==============================
    // FACEBOOK
    // ==============================

    window.loginFacebook = function () {
        startSecondLoading("Facebook Player");
    };


    // ==============================
    // GUEST
    // ==============================

    window.loginGuest = function () {

        const number =
            Math.floor(100000 + Math.random() * 900000);

        const guestName = "Guest_" + number;

        document.getElementById("playerName").textContent =
            guestName;

        document.getElementById("playerId").textContent =
            "ID: " + number;

        startSecondLoading(guestName);
    };


    // ==============================
    // SIGN UP
    // ==============================

    window.openSignup = function () {

        alert(
            "CREATE NEW ACCOUNT\n\n" +
            "Real account system will be connected soon."
        );
    };


    // ==============================
    // SECOND LOADING
    // ==============================

    function startSecondLoading(playerName) {

        showPage(secondLoading);

        let progress2 = 0;

        secondBar.style.width = "0%";
        secondPercent.textContent = "0%";

        secondStatus.textContent =
            "CONNECTING PLAYER...";

        const secondTimer = setInterval(function () {

            progress2 += 2;

            if (progress2 > 100) {
                progress2 = 100;
            }

            secondBar.style.width =
                progress2 + "%";

            secondPercent.textContent =
                progress2 + "%";


            if (progress2 < 25) {

                secondStatus.textContent =
                    "CONNECTING PLAYER...";

            }
            else if (progress2 < 50) {

                secondStatus.textContent =
                    "LOADING PLAYER DATA...";

            }
            else if (progress2 < 75) {

                secondStatus.textContent =
                    "PREPARING BATTLEFIELD...";

            }
            else if (progress2 < 100) {

                secondStatus.textContent =
                    "PREPARING LEOBATTLE LOBBY...";

            }
            else {

                secondStatus.textContent =
                    "ENTERING LEOBATTLE...";

            }


            if (progress2 >= 100) {

                clearInterval(secondTimer);

                setTimeout(function () {

                    document.getElementById(
                        "welcomeName"
                    ).textContent =
                        "WELCOME " +
                        playerName.toUpperCase();

                    showPage(lobby);

                }, 800);
            }

        }, 60);
    }


    // ==============================
    // LOBBY MENU
    // ==============================

    window.openFeature = function (feature) {

        alert(
            feature +
            "\n\nComing Soon 🔥"
        );

    };


    // ==============================
    // START BATTLE
    // ==============================

    window.startBattle = function () {

        alert(
            "🪂 DROP INTO BATTLE\n\n" +
            "Battle system is coming next!"
        );

    };

});
