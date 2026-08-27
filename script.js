/* =====================================================
   LEOBATTLE COMPLETE PROTOTYPE
===================================================== */

"use strict";


/* =====================================================
   PLAYER DATA
===================================================== */

let player = {
    name: "Guest",
    id: "000000",
    email: "",
    diamond: 500,
    gold: 1000,
    level: 1,
    xp: 0,
    wins: 0,
    photo: "",
    character: "LEO",
    characterIcon: "🦁",
    cartoon: false,
    sound: true,
    effects: true,
    map: "LEOWORLD",
    mode: "CLASSIC",
    inventory: ["STARTER PACK"],
    rewardClaimed: false
};


/* =====================================================
   SAVE / LOAD
===================================================== */

function saveGame() {

    localStorage.setItem(
        "LeoBattlePlayer",
        JSON.stringify(player)
    );

}


function loadGame() {

    const saved =
        localStorage.getItem("LeoBattlePlayer");

    if (saved) {

        try {

            player = JSON.parse(saved);

        } catch (error) {

            console.log("Save data error");

        }

    }

}


/* =====================================================
   SCREEN
===================================================== */

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    const target =
        document.getElementById(id);

    if (target) {

        target.classList.add("active");

    }

}


/* =====================================================
   FIRST LOADING
===================================================== */

function firstLoading() {

    let progress = 0;

    const bar =
        document.getElementById("firstBar");

    const percent =
        document.getElementById("firstPercent");

    const text =
        document.getElementById("firstText");


    const timer =
        setInterval(() => {

            progress += 2;


            if (progress > 100) {
                progress = 100;
            }


            bar.style.width =
                progress + "%";

            percent.textContent =
                progress + "%";


            if (progress < 20) {

                text.textContent =
                    "STARTING LEOBATTLE...";

            }

            else if (progress < 40) {

                text.textContent =
                    "LOADING GAME SYSTEM...";

            }

            else if (progress < 60) {

                text.textContent =
                    "LOADING CHARACTER SYSTEM...";

            }

            else if (progress < 80) {

                text.textContent =
                    "PREPARING BATTLE WORLD...";

            }

            else if (progress < 100) {

                text.textContent =
                    "ALMOST READY...";

            }

            else {

                text.textContent =
                    "LEOBATTLE READY";

            }


            if (progress >= 100) {

                clearInterval(timer);

                setTimeout(() => {

                    showScreen("auth");

                }, 800);

            }

        }, 60);

}


/* =====================================================
   AUTH TABS
===================================================== */

function showAuth(type) {

    const signin =
        document.getElementById("signinForm");

    const signup =
        document.getElementById("signupForm");

    const signInTab =
        document.getElementById("signInTab");

    const signUpTab =
        document.getElementById("signUpTab");


    if (type === "signin") {

        signin.classList.remove("hidden");
        signup.classList.add("hidden");

        signInTab.classList.add("active");
        signUpTab.classList.remove("active");

    } else {

        signin.classList.add("hidden");
        signup.classList.remove("hidden");

        signInTab.classList.remove("active");
        signUpTab.classList.add("active");

    }

}


/* =====================================================
   EMAIL SIGN UP
===================================================== */

function emailSignup() {

    const name =
        document.getElementById("signupName")
            .value.trim();

    const email =
        document.getElementById("signupEmail")
            .value.trim();

    const password =
        document.getElementById("signupPassword")
            .value;


    if (!name || !email || password.length < 4) {

        showAuthMessage(
            "Enter name, email and a 4+ character password."
        );

        return;
    }


    player.name = name;

    player.email = email;

    player.id =
        generateID();


    saveGame();

    showAuthMessage(
        "Account created! Entering LeoBattle..."
    );


    setTimeout(() => {

        startSecondLoading();

    }, 700);

}


/* =====================================================
   EMAIL LOGIN
===================================================== */

function emailLogin() {

    const email =
        document.getElementById("loginEmail")
            .value.trim();

    const password =
        document.getElementById("loginPassword")
            .value;


    if (!email || !password) {

        showAuthMessage(
            "Enter your email and password."
        );

        return;
    }


    const saved =
        localStorage.getItem("LeoBattlePlayer");


    if (saved) {

        try {

            const old =
                JSON.parse(saved);

            if (old.email === email) {

                player = old;

            }

        } catch (error) {}

    }


    player.email = email;


    if (!player.name ||
        player.name === "Guest") {

        player.name =
            email.split("@")[0];

    }


    if (!player.id ||
        player.id === "000000") {

        player.id =
            generateID();

    }


    saveGame();

    showAuthMessage(
        "Sign in successful..."
    );


    setTimeout(() => {

        startSecondLoading();

    }, 500);

}


/* =====================================================
   SOCIAL LOGIN
===================================================== */

function socialLogin(provider) {

    player.name =
        provider + " Player";

    player.id =
        generateID();

    saveGame();


    showAuthMessage(
        provider +
        " login demo successful..."
    );


    setTimeout(() => {

        startSecondLoading();

    }, 500);

}


/* =====================================================
   GUEST
===================================================== */

function guestLogin() {

    const id =
        generateID();


    player.name =
        "Guest_" + id;

    player.id =
        id;

    player.email = "";


    saveGame();


    startSecondLoading();

}


/* =====================================================
   GENERATE PLAYER ID
===================================================== */

function generateID() {

    return String(
        Math.floor(
            100000 +
            Math.random() * 900000
        )
    );

}


/* =====================================================
   AUTH MESSAGE
===================================================== */

function showAuthMessage(message) {

    const element =
        document.getElementById(
            "authMessage"
        );

    element.textContent =
        message;

}


/* =====================================================
   SECOND LOADING
===================================================== */

function startSecondLoading() {

    showScreen("loading2");


    let progress = 0;


    const bar =
        document.getElementById(
            "secondBar"
        );

    const percent =
        document.getElementById(
            "secondPercent"
        );

    const text =
        document.getElementById(
            "secondText"
        );


    bar.style.width = "0%";

    percent.textContent = "0%";


    const timer =
        setInterval(() => {

            progress += 2;


            if (progress > 100) {

                progress = 100;

            }


            bar.style.width =
                progress + "%";


            percent.textContent =
                progress + "%";


            if (progress < 20) {

                text.textContent =
                    "CONNECTING PLAYER...";

            }

            else if (progress < 40) {

                text.textContent =
                    "LOADING PLAYER DATA...";

            }

            else if (progress < 60) {

                text.textContent =
                    "LOADING CHARACTER...";

            }

            else if (progress < 80) {

                text.textContent =
                    "PREPARING WORLD...";

            }

            else if (progress < 100) {

                text.textContent =
                    "ENTERING LOBBY...";

            }

            else {

                text.textContent =
                    "LEOBATTLE READY";

            }


            if (progress >= 100) {

                clearInterval(timer);


                setTimeout(() => {

                    updateLobby();

                    showScreen("lobby");

                }, 700);

            }

        }, 55);

}


/* =====================================================
   UPDATE LOBBY
===================================================== */

function updateLobby() {

    document.getElementById(
        "topPlayerName"
    ).textContent =
        player.name.toUpperCase();


    document.getElementById(
        "topPlayerId"
    ).textContent =
        "ID: " + player.id;


    document.getElementById(
        "diamond"
    ).textContent =
        player.diamond;


    document.getElementById(
        "gold"
    ).textContent =
        player.gold;


    document.getElementById(
        "level"
    ).textContent =
        player.level;


    document.getElementById(
        "heroName"
    ).textContent =
        player.character;


    updateXP();


    const avatar =
        document.getElementById(
            "topAvatar"
        );

    const defaultAvatar =
        document.getElementById(
            "defaultAvatar"
        );


    if (player.photo) {

        avatar.src =
            player.photo;

        avatar.style.display =
            "block";

        defaultAvatar.style.display =
            "none";

    } else {

        avatar.style.display =
            "none";

        defaultAvatar.style.display =
            "flex";

    }


    updateHeroCharacter();

}


/* =====================================================
   XP
===================================================== */

function updateXP() {

    const required =
        player.level * 500;

    const percentage =
        Math.min(
            100,
            (player.xp / required) * 100
        );


    document.getElementById(
        "xpBar"
    ).style.width =
        percentage + "%";


    document.getElementById(
        "statLevel"
    ).textContent =
        player.level;


    document.getElementById(
        "statXP"
    ).textContent =
        player.xp;


    document.getElementById(
        "statWins"
    ).textContent =
        player.wins;

}


/* =====================================================
   PANEL
===================================================== */

const panelMap = {

    character: "characterPanel",
    weapons: "weaponsPanel",
    maps: "mapsPanel",
    missions: "missionsPanel",
    inventory: "inventoryPanel",
    shop: "shopPanel",
    rewards: "rewardsPanel",
    profile: "profilePanel",
    settings: "settingsPanel"

};


function openPanel(name) {

    const id =
        panelMap[name];

    if (!id) return;


    if (name === "profile") {

        updateProfile();

    }


    showScreen(id);

}


function closePanels() {

    updateLobby();

    showScreen("lobby");

}


/* =====================================================
   CHARACTER SELECT
===================================================== */

function selectCharacter(name, icon) {

    player.character =
        name;

    player.characterIcon =
        icon;

    saveGame();

    updateHeroCharacter();

    document.getElementById(
        "characterName"
    ).textContent =
        name;

}


/* =====================================================
   HERO CHARACTER
===================================================== */

function updateHeroCharacter() {

    const hero =
        document.getElementById(
            "heroCharacter"
        );


    if (player.photo) {

        hero.innerHTML =
            `<img src="${player.photo}"
             class="${player.cartoon ? "cartoon" : ""}">`;

    } else {

        hero.innerHTML =
            player.characterIcon;

    }

}


/* =====================================================
   PHOTO UPLOAD
===================================================== */

function uploadCharacterPhoto(event) {

    const file =
        event.target.files[0];


    if (!file) return;


    if (!file.type.startsWith("image/")) {

        alert("Please select an image.");

        return;

    }


    const reader =
        new FileReader();


    reader.onload = function(e) {

        player.photo =
            e.target.result;


        saveGame();


        const preview =
            document.getElementById(
                "characterPreview"
            );


        preview.innerHTML =
            `<img src="${player.photo}"
             class="${player.cartoon ? "cartoon" : ""}">`;


        updateHeroCharacter();


        updateLobby();

    };


    reader.readAsDataURL(file);

}


/* =====================================================
   CARTOON EFFECT
===================================================== */

function toggleCartoon() {

    if (!player.photo) {

        alert(
            "First upload your photo."
        );

        return;

    }


    player.cartoon =
        !player.cartoon;


    saveGame();


    const image =
        document.querySelector(
            "#characterPreview img"
        );


    if (image) {

        image.classList.toggle(
            "cartoon",
            player.cartoon
        );

    }


    updateHeroCharacter();

}


/* =====================================================
   MAP
===================================================== */

function selectMap(map) {

    player.map =
        map;

    saveGame();


    document.getElementById(
        "selectedMap"
    ).textContent =
        map;


    alert(
        map +
        " selected!"
    );

}


/* =====================================================
   MODE
===================================================== */

function selectMode(mode) {

    player.mode =
        mode;

    saveGame();


    document.getElementById(
        "selectedMode"
    ).textContent =
        mode;

}


/* =====================================================
   SHOP / BUY
===================================================== */

function buyItem(item, price) {

    let paid = false;


    if (item.includes("DIAMONDS")) {

        player.diamond += 500;

        paid = true;

    }

    else if (price > 0 &&
             item.includes("SKY")) {

        if (player.diamond < price) {

            alert("Not enough diamonds.");

            return;

        }

        player.diamond -= price;

        paid = true;

    }

    else {

        if (player.gold < price) {

            alert("Not enough gold.");

            return;

        }

        player.gold -= price;

        paid = true;

    }


    if (paid) {

        player.inventory.push(item);

        player.xp += 50;

        checkLevel();

        saveGame();

        updateLobby();

        alert(
            item +
            " added to inventory!"
        );

    }

}


/* =====================================================
   LEVEL
===================================================== */

function checkLevel() {

    const required =
        player.level * 500;


    if (player.xp >= required) {

        player.xp -= required;

        player.level++;

        alert(
            "🔥 LEVEL UP!\n\n" +
            "You reached Level " +
            player.level
        );

    }

}


/* =====================================================
   INVENTORY
===================================================== */

function renderInventory() {

    const grid =
        document.getElementById(
            "inventoryGrid"
        );


    grid.innerHTML = "";


    player.inventory.forEach(item => {

        const card =
            document.createElement("div");

        card.className =
            "game-card";


        card.innerHTML =
            `
            🎒
            <h3>${item}</h3>
            <p>OWNED ITEM</p>
            `;


        grid.appendChild(card);

    });

}


/* =====================================================
   DAILY REWARD
===================================================== */

function claimReward() {

    if (player.rewardClaimed) {

        alert(
            "Today's reward already claimed."
        );

        return;

    }


    player.gold += 250;

    player.diamond += 25;

    player.xp += 100;

    checkLevel();


    player.rewardClaimed =
        true;


    saveGame();

    updateLobby();


    alert(
        "🎁 REWARD CLAIMED!\n\n" +
        "+250 Gold\n" +
        "+25 Diamonds\n" +
        "+100 XP"
    );

}


/* =====================================================
   PROFILE
===================================================== */

function updateProfile() {

    document.getElementById(
        "profileName"
    ).textContent =
        player.name;


    document.getElementById(
        "profileID"
    ).textContent =
        "ID: " + player.id;


    document.getElementById(
        "statLevel"
    ).textContent =
        player.level;


    document.getElementById(
        "statXP"
    ).textContent =
        player.xp;


    document.getElementById(
        "statWins"
    ).textContent =
        player.wins;


    const avatar =
        document.getElementById(
            "profileAvatar"
        );


    if (player.photo) {

        avatar.innerHTML =
            `<img src="${player.photo}">`;

    } else {

        avatar.innerHTML =
            "👤";

    }


    renderInventory();

}


/* =====================================================
   START BATTLE
===================================================== */

function startBattle() {

    document.getElementById(
        "battleMode"
    ).textContent =
        player.mode;


    document.getElementById(
        "battleMap"
    ).textContent =
        player.map;


    showScreen("battleScreen");

}


/* =====================================================
   LAND PLAYER
===================================================== */

function landPlayer() {

    showScreen("lootScreen");

}


/* =====================================================
   COLLECT LOOT
===================================================== */

function collectLoot() {

    const reward =
        Math.floor(
            100 + Math.random() * 250
        );


    player.gold += reward;

    player.xp += 100;


    checkLevel();


    saveGame();

    updateLobby();


    alert(
        "📦 LOOT COLLECTED!\n\n" +
        "+" + reward +
        " Gold\n" +
        "+100 XP"
    );

}


/* =====================================================
   VEHICLE
===================================================== */

function useVehicle() {

    alert(
        "🚗 VEHICLE SYSTEM\n\n" +
        "Vehicle prototype activated!"
    );

}


/* =====================================================
   BATTLE MESSAGE
===================================================== */

function showBattleMessage() {

    alert(
        "🔫 WEAPON SYSTEM\n\n" +
        "Combat prototype will be expanded next."
    );

}


/* =====================================================
   EXIT BATTLE
===================================================== */

function leaveBattle() {

    updateLobby();

    showScreen("lobby");

}


/* =====================================================
   SOUND
===================================================== */

function toggleSound() {

    player.sound =
        !player.sound;


    document.getElementById(
        "soundStatus"
    ).textContent =
        player.sound ?
        "ON" :
        "OFF";


    saveGame();

}


/* =====================================================
   EFFECTS
===================================================== */

function toggleEffects() {

    player.effects =
        !player.effects;


    document.getElementById(
        "effectsStatus"
    ).textContent =
        player.effects ?
        "ON" :
        "OFF";


    saveGame();

}


/* =====================================================
   RESET
===================================================== */

function resetProgress() {

    const ok =
        confirm(
            "Reset all LeoBattle local progress?"
        );


    if (!ok) return;


    localStorage.removeItem(
        "LeoBattlePlayer"
    );


    location.reload();

}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    saveGame();

    showScreen("auth");

}


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadGame();

        firstLoading();

    }
);
