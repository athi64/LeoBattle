// ===============================
// LEOBATTLE STARTUP
// ===============================

let loading = 0;

const loadingBar = document.getElementById("loadingBar");
const loadingText = document.getElementById("loadingText");

const loadingTimer = setInterval(() => {

    loading += 2;

    loadingBar.style.width = loading + "%";
    loadingText.textContent = "Loading " + loading + "%";

    if (loading >= 100) {

        clearInterval(loadingTimer);

        setTimeout(() => {
            showScreen("loginScreen");
        }, 500);
    }

}, 50);


// ===============================
// SCREEN SYSTEM
// ===============================

function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.add("hidden");
    });

    document.getElementById(screenId).classList.remove("hidden");
}


// ===============================
// GOOGLE LOGIN
// ===============================

function loginWithGoogle() {

    alert(
        "Google Login will be connected with Firebase later. 🌐"
    );

}


// ===============================
// FACEBOOK LOGIN
// ===============================

function loginWithFacebook() {

    alert(
        "Facebook Login will be connected with Firebase later. 🔵"
    );

}


// ===============================
// GUEST LOGIN
// ===============================

function continueAsGuest() {

    const guestNumber =
        Math.floor(100000 + Math.random() * 900000);

    const guestName = "Guest_" + guestNumber;

    document.getElementById("playerName").textContent =
        guestName;

    document.getElementById("playerId").textContent =
        "ID: " + guestNumber;

    document.getElementById("welcomeName").textContent =
        "WELCOME " + guestName.toUpperCase();

    showScreen("lobbyScreen");

}


// ===============================
// START BATTLE
// ===============================

function startBattle() {

    alert(
        "⚔️ Battle Mode is coming next!"
    );

}


// ===============================
// MENU
// ===============================

function openMenu(menu) {

    const names = {
        character: "Character",
        weapons: "Weapons",
        maps: "Maps",
        inventory: "Inventory",
        settings: "Settings"
    };

    alert(
        names[menu] + " system is coming next! 🎮"
    );

}
