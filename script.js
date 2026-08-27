/* ==========================================
   LEOBATTLE GAME SYSTEM
   ========================================== */


/* ================= BASIC SCREEN SYSTEM ================= */

function showScreen(id) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });

    const target =
        document.getElementById(id);

    if (target) {

        target.classList.add("active");

    }
}


/* ================= FIRST LOADING ================= */

function startFirstLoading() {

    let progress = 0;

    const bar =
        document.getElementById("bar1");

    const percent =
        document.getElementById("percent1");

    const status =
        document.getElementById("status1");


    const timer =
        setInterval(function() {

            progress += 1;

            if (progress > 100) {

                progress = 100;

            }


            bar.style.width =
                progress + "%";

            percent.textContent =
                progress + "%";


            if (progress < 20) {

                status.textContent =
                    "STARTING LEOBATTLE...";

            }
            else if (progress < 40) {

                status.textContent =
                    "LOADING GAME ENGINE...";

            }
            else if (progress < 60) {

                status.textContent =
                    "LOADING CHARACTERS...";

            }
            else if (progress < 80) {

                status.textContent =
                    "LOADING BATTLE SYSTEM...";

            }
            else if (progress < 100) {

                status.textContent =
                    "PREPARING YOUR JOURNEY...";

            }
            else {

                status.textContent =
                    "LEOBATTLE READY!";
            }


            if (progress >= 100) {

                clearInterval(timer);

                setTimeout(function() {

                    showScreen("login");

                }, 700);

            }

        }, 35);
}


/* ================= LOGIN ================= */

function googleLogin() {

    startSecondLoading(
        "Google_Player",
        "GOOGLE"
    );

}


function facebookLogin() {

    startSecondLoading(
        "Facebook_Player",
        "FACEBOOK"
    );

}


function guestLogin() {

    const id =
        Math.floor(
            100000 +
            Math.random() * 900000
        );

    const name =
        "Guest_" + id;


    document.getElementById(
        "playerName"
    ).textContent = name;


    document.getElementById(
        "playerId"
    ).textContent =
        "ID: " + id;


    startSecondLoading(
        name,
        "GUEST"
    );

}


function signup() {

    alert(
        "🔥 LeoBattle Account\n\n" +
        "Sign Up system is ready for Firebase connection."
    );

}


/* ================= SECOND LOADING ================= */

function startSecondLoading(
    playerName,
    loginType
) {

    showScreen("loading2");


    let progress = 0;


    const bar =
        document.getElementById("bar2");

    const percent =
        document.getElementById("percent2");

    const status =
        document.getElementById("status2");


    /* RESET */

    bar.style.width = "0%";

    percent.textContent = "0%";

    status.textContent =
        "CONNECTING PLAYER...";


    const timer =
        setInterval(function() {

            progress += 1;


            if (progress > 100) {

                progress = 100;

            }


            bar.style.width =
                progress + "%";

            percent.textContent =
                progress + "%";


            if (progress < 20) {

                status.textContent =
                    "CONNECTING PLAYER...";

            }
            else if (progress < 40) {

                status.textContent =
                    "AUTHENTICATING ACCOUNT...";

            }
            else if (progress < 60) {

                status.textContent =
                    "LOADING PLAYER DATA...";

            }
            else if (progress < 80) {

                status.textContent =
                    "LOADING MAPS & WEAPONS...";

            }
            else if (progress < 100) {

                status.textContent =
                    "PREPARING BATTLEFIELD...";

            }
            else {

                status.textContent =
                    "BATTLEFIELD READY!";
            }


            if (progress >= 100) {

                clearInterval(timer);


                document.getElementById(
                    "playerName"
                ).textContent =
                    playerName;


                setTimeout(function() {

                    showScreen("lobby");

                }, 700);

            }

        }, 35);

}


/* ================= GAME MODES ================= */

function selectMode(mode) {

    document.getElementById(
        "modeTitle"
    ).textContent = mode;


    const map =
        document.getElementById(
            "mapTitle"
        );


    if (mode === "CLASSIC") {

        map.textContent =
            "RANDOM MAP";

    }

    else if (mode === "MILITARY") {

        map.textContent =
            "MILITARY ZONE";

    }

    else if (mode === "TRAINING") {

        map.textContent =
            "TRAINING GROUND";

    }

    else if (mode === "DRIVE") {

        map.textContent =
            "DRIVE ZONE";

    }

}


/* ================= CHARACTER PHOTO ================= */

function changeCharacter(event) {

    const file =
        event.target.files[0];


    if (!file) {

        return;

    }


    const reader =
        new FileReader();


    reader.onload =
        function(e) {

            const box =
                document.getElementById(
                    "characterImage"
                );


            box.innerHTML =
                '<img src="' +
                e.target.result +
                '" alt="Character">';

        };


    reader.readAsDataURL(file);

}


/* ================= FEATURE PANELS ================= */

function openPanel(feature) {

    const overlay =
        document.getElementById(
            "featurePanel"
        );

    const title =
        document.getElementById(
            "panelTitle"
        );

    const content =
        document.getElementById(
            "panelContent"
        );


    title.textContent =
        feature;


    let html = "";


    if (feature === "CHARACTER") {

        html = `
            <div class="panelGrid">

                <div class="panelItem">
                    🦁
                    <b>LEO</b>
                    FREE
                </div>

                <div class="panelItem">
                    ⚡
                    <b>KAIRO</b>
                    300 💎
                </div>

                <div class="panelItem">
                    🔥
                    <b>RYDEN</b>
                    500 💎
                </div>

                <div class="panelItem">
                    🌑
                    <b>NAIRO</b>
                    700 💎
                </div>

                <div class="panelItem">
                    👑
                    <b>ZAYVEN</b>
                    1000 💎
                </div>

                <div class="panelItem">
                    🎮
                    <b>JD</b>
                    400 💎
                </div>

            </div>
        `;

    }


    else if (feature === "WEAPONS") {

        html = `
            <div class="panelGrid">

                <div class="panelItem">
                    🔫
                    <b>ASSAULT</b>
                    LEVEL 1
                </div>

                <div class="panelItem">
                    🎯
                    <b>SNIPER</b>
                    LEVEL 1
                </div>

                <div class="panelItem">
                    🔥
                    <b>SMG</b>
                    LEVEL 1
                </div>

                <div class="panelItem">
                    💥
                    <b>SHOTGUN</b>
                    LEVEL 1
                </div>

            </div>
        `;

    }


    else if (feature === "MAPS") {

        html = `
            <div class="panelGrid">

                <div class="panelItem">
                    🌍
                    <b>LEOWORLD</b>
                    AVAILABLE
                </div>

                <div class="panelItem">
                    🍫
                    <b>CHOCOLATE WORLD</b>
                    LOCKED
                </div>

                <div class="panelItem">
                    🏙️
                    <b>CITY ZONE</b>
                    AVAILABLE
                </div>

                <div class="panelItem">
                    🏜️
                    <b>DESERT ZONE</b>
                    LOCKED
                </div>

            </div>
        `;

    }


    else if (feature === "MISSIONS") {

        html = `
            <div class="panelGrid">

                <div class="panelItem">
                    🎯
                    <b>FIRST BATTLE</b>
                    +100 GOLD
                </div>

                <div class="panelItem">
                    🏆
                    <b>WIN 5 MATCHES</b>
                    +50 💎
                </div>

                <div class="panelItem">
                    🔫
                    <b>WEAPON MASTER</b>
                    +200 GOLD
                </div>

            </div>
        `;

    }


    else if (feature === "INVENTORY") {

        html = `
            <div class="panelGrid">

                <div class="panelItem">
                    🎒
                    <b>BACKPACK</b>
                    EMPTY
                </div>

                <div class="panelItem">
                    💣
                    <b>BOMBS</b>
                    0
                </div>

                <div class="panelItem">
                    🪂
                    <b>PARACHUTE</b>
                    BASIC
                </div>

            </div>
        `;

    }


    else if (feature === "SKINS") {

        html = `
            <div class="panelGrid">

                <div class="panelItem">
                    👕
                    <b>LEO SKIN</b>
                    EQUIPPED
                </div>

                <div class="panelItem">
                    ⚡
                    <b>KAIRO SKIN</b>
                    300 💎
                </div>

                <div class="panelItem">
                    🔥
                    <b>RYDEN SKIN</b>
                    500 💎
                </div>

            </div>
        `;

    }


    else if (feature === "VEHICLES") {

        html = `
            <div class="panelGrid">

                <div class="panelItem">
                    🚗
                    <b>SPORT CAR</b>
                    LOCKED
                </div>

                <div class="panelItem">
                    🚙
                    <b>JEEP</b>
                    AVAILABLE
                </div>

                <div class="panelItem">
                    🏍️
                    <b>BIKE</b>
                    800 💎
                </div>

            </div>
        `;

    }


    else if (feature === "SHOP") {

        html = `
            <div class="panelGrid">

                <div class="panelItem">
                    💎
                    <b>100 DIAMONDS</b>
                    ₹49
                </div>

                <div class="panelItem">
                    💎
                    <b>500 DIAMONDS</b>
                    ₹199
                </div>

                <div class="panelItem">
                    🪙
                    <b>1000 GOLD</b>
                    FREE
                </div>

            </div>
        `;

    }


    else if (feature === "RANK") {

        html = `
            <div class="panelGrid">

                <div class="panelItem">
                    🥉
                    <b>BRONZE</b>
                    0–999
                </div>

                <div class="panelItem">
                    🥈
                    <b>SILVER</b>
                    1000–1999
                </div>

                <div class="panelItem">
                    🥇
                    <b>GOLD</b>
                    2000+
                </div>

            </div>
        `;

    }


    else if (feature === "PROFILE") {

        html = `
            <div class="panelGrid">

                <div class="panelItem">
                    👤
                    <b>PLAYER</b>
                    <span id="profilePlayer">
                        LeoBattle Player
                    </span>
                </div>

                <div class="panelItem">
                    🏆
                    <b>RANK</b>
                    ROOKIE
                </div>

                <div class="panelItem">
                    ⚔
                    <b>MATCHES</b>
                    0
                </div>

            </div>
        `;

    }


    else if (feature === "SETTINGS") {

        html = `
            <div class="panelGrid">

                <div class="panelItem">
                    🔊
                    <b>SOUND</b>
                    ON
                </div>

                <div class="panelItem">
                    🎮
                    <b>CONTROLS</b>
                    DEFAULT
                </div>

                <div class="panelItem">
                    🌐
                    <b>LANGUAGE</b>
                    ENGLISH
                </div>

            </div>
        `;

    }


    else {

        html = `
            <div class="panelItem">
                🔥
                <b>${feature}</b>
                Coming Soon
            </div>
        `;

    }


    content.innerHTML =
        html;


    overlay.classList.add("show");

}


/* ================= CLOSE PANEL ================= */

function closePanel() {

    document
        .getElementById("featurePanel")
        .classList.remove("show");

}


/* ================= START BATTLE ================= */

function startBattle() {

    const mode =
        document.getElementById(
            "modeTitle"
        ).textContent;

    const map =
        document.getElementById(
            "mapTitle"
        ).textContent;


    document.getElementById(
        "battleMode"
    ).textContent =
        mode;


    document.getElementById(
        "battleMap"
    ).textContent =
        map;


    document
        .getElementById("battleScreen")
        .classList.add("show");

}


/* ================= RETURN ================= */

function returnLobby() {

    document
        .getElementById("battleScreen")
        .classList.remove("show");

}


/* ================= START WHEN PAGE LOADS ================= */

window.addEventListener(
    "load",
    function() {

        showScreen("loading1");

        startFirstLoading();

    }
);
