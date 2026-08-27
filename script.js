// =====================================
// LEOBATTLE START SYSTEM
// =====================================

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


// =====================================
// SCREEN CONTROL
// =====================================

function showPage(page) {

    document.querySelectorAll(".page").forEach(item => {
        item.classList.remove("active");
    });

    page.classList.add("active");
}


// =====================================
// FIRST LOADING
// =====================================

let firstProgress = 0;

const firstTimer = setInterval(() => {

    firstProgress++;

    firstBar.style.width = firstProgress + "%";
    firstPercent.textContent = firstProgress + "%";

    if (firstProgress < 30) {
        firstStatus.textContent =
            "STARTING LEOBATTLE...";
    }
    else if (firstProgress < 60) {
        firstStatus.textContent =
            "LOADING GAME SYSTEM...";
    }
    else if (firstProgress < 85) {
        firstStatus.textContent =
            "PREPARING CHARACTER SYSTEM...";
    }
    else {
        firstStatus.textContent =
            "ALMOST READY...";
    }

    if (firstProgress >= 100) {

        clearInterval(firstTimer);

        firstStatus.textContent =
            "WELCOME TO LEOBATTLE";

        setTimeout(() => {
            showPage(loginPage);
        }, 900);
    }

}, 35);


// =====================================
// GOOGLE
// =====================================

function loginGoogle() {

    startSecondLoading("Google Player");

}


// =====================================
// FACEBOOK
// =====================================

function loginFacebook() {

    startSecondLoading("Facebook Player");

}


// =====================================
// GUEST
// =====================================

function loginGuest() {

    const number =
        Math.floor(100000 + Math.random() * 900000);

    const guestName =
        "Guest_" + number;

    document.getElementById("playerName").textContent =
        guestName;

    document.getElementById("playerId").textContent =
        "ID: " + number;

    startSecondLoading(guestName);

}


// =====================================
// SIGN UP
// =====================================

function openSignup() {

    alert(
        "LeoBattle Account System\n\n" +
        "Full Sign Up system will be connected next."
    );

}


// =====================================
// SECOND LOADING
// =====================================

function startSecondLoading(playerName) {

    showPage(secondLoading);

    secondBar.style.width = "0%";
    secondPercent.textContent = "0%";

    let progress = 0;

    secondStatus.textContent =
        "CONNECTING PLAYER...";

    const timer = setInterval(() => {

        progress++;

        secondBar.style.width =
            progress + "%";

        secondPercent.textContent =
            progress + "%";

        if (progress < 25) {

            secondStatus.textContent =
                "CONNECTING PLAYER...";

        }
        else if (progress < 50) {

            secondStatus.textContent =
                "LOADING PLAYER DATA...";

        }
        else if (progress < 75) {

            secondStatus.textContent =
                "PREPARING BATTLEFIELD...";

        }
        else if (progress < 95) {

            secondStatus.textContent =
                "LOADING LOBBY...";

        }
        else {

            secondStatus.textContent =
                "ENTERING LEOBATTLE...";

        }

        if (progress >= 100) {

            clearInterval(timer);

            setTimeout(() => {

                document.getElementById(
                    "welcomeName"
                ).textContent =
                    "WELCOME " +
                    playerName.toUpperCase();

                showPage(lobby);

            }, 700);
        }

    }, 30);

}


// =====================================
// LOBBY FEATURES
// =====================================

function openFeature(feature) {

    alert(
        feature +
        "\n\nComing Soon 🔥"
    );

}


// =====================================
// START BATTLE
// =====================================

function startBattle() {

    alert(
        "🪂 DROP INTO BATTLE\n\n" +
        "Battle system is coming next!"
    );

}
