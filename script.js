// ===============================
// LEOBATTLE MAIN SYSTEM
// ===============================

const pages = document.querySelectorAll(".page");

function showPage(id) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const target = document.getElementById(id);

    if (target) {
        target.classList.add("active");
    }
}


// ===============================
// FIRST LOADING
// ===============================

function firstLoading() {

    let progress = 0;

    const bar = document.getElementById("firstBar");
    const percent = document.getElementById("firstPercent");
    const status = document.getElementById("firstStatus");

    const messages = [
        "STARTING LEOBATTLE...",
        "LOADING GAME SYSTEM...",
        "AWAKENING BATTLE SYSTEM...",
        "PREPARING YOUR JOURNEY...",
        "LEOBATTLE READY!"
    ];

    const timer = setInterval(() => {

        progress += 1;

        if (progress > 100) {
            progress = 100;
        }

        bar.style.width = progress + "%";
        percent.textContent = progress + "%";

        if (progress < 25) {
            status.textContent = messages[0];
        }
        else if (progress < 50) {
            status.textContent = messages[1];
        }
        else if (progress < 75) {
            status.textContent = messages[2];
        }
        else if (progress < 100) {
            status.textContent = messages[3];
        }
        else {
            status.textContent = messages[4];
        }

        if (progress >= 100) {

            clearInterval(timer);

            setTimeout(() => {
                showPage("loginPage");
            }, 700);
        }

    }, 40);
}


// ===============================
// LOGIN
// ===============================

function loginGoogle() {

    const name = "Google_Player";

    startSecondLoading(name);
}


function loginFacebook() {

    const name = "Facebook_Player";

    startSecondLoading(name);
}


function loginGuest() {

    const id =
        Math.floor(100000 + Math.random() * 900000);

    const name = "Guest_" + id;

    document.getElementById("playerName").textContent =
        name;

    document.getElementById("playerId").textContent =
        "ID: " + id;

    startSecondLoading(name);
}


function openSignup() {

    alert(
        "LeoBattle Account System 🔥\n\n" +
        "Sign Up system will be connected next."
    );
}


// ===============================
// SECOND LOADING
// ===============================

function startSecondLoading(playerName) {

    showPage("secondLoading");

    let progress = 0;

    const bar =
        document.getElementById("secondBar");

    const percent =
        document.getElementById("secondPercent");

    const status =
        document.getElementById("secondStatus");

    bar.style.width = "0%";
    percent.textContent = "0%";

    const timer = setInterval(() => {

        progress += 1;

        if (progress > 100) {
            progress = 100;
        }

        bar.style.width = progress + "%";
        percent.textContent = progress + "%";

        if (progress < 25) {

            status.textContent =
                "CONNECTING PLAYER...";

        } else if (progress < 50) {

            status.textContent =
                "LOADING PLAYER DATA...";

        } else if (progress < 75) {

            status.textContent =
                "PREPARING BATTLEFIELD...";

        } else if (progress < 100) {

            status.textContent =
                "ENTERING LEOBATTLE...";

        } else {

            status.textContent =
                "BATTLEFIELD READY!";
        }


        if (progress >= 100) {

            clearInterval(timer);

            // Set player information
            document.getElementById("playerName")
                .textContent = playerName;

            setTimeout(() => {

                showPage("lobby");

            }, 700);
        }

    }, 40);
}


// ===============================
// LOBBY FEATURES
// ===============================

function openFeature(feature) {

    alert(
        feature +
        "\n\nLeoBattle feature coming next 🔥"
    );
}


function startBattle() {

    alert(
        "⚔️ BATTLE STARTING!\n\n" +
        "Battle system will be connected next."
    );
}


// ===============================
// START GAME
// ===============================

window.addEventListener("load", () => {

    // Always start from loading screen
    showPage("firstLoading");

    // Start immediately
    firstLoading();

});
