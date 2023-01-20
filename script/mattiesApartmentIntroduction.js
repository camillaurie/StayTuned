document
    .getElementById("wrapper")
    .addEventListener("click", knockingOnMattiesDoor);


function knockingOnMattiesDoor(event) {
    // LAA - Location Active Area
    if (event.target.id == 'LAAbuttontomattiesapartment') {
        document
        .getElementById("video")
        .innerHTML = `
            <div>
                <img src="pics/ME0N_0.png">
                <div id="LAAapartmentfrontdoor" style="
                    height: 110px;
                    width: 70px;
                    background-color: red;
                    position: absolute;
                    top: 70px;
                    left: 380px;
                "></div>
            </div>
        `
        document
        .getElementById("LAAapartmentfrontdoor")
        .addEventListener("click", getInvitedByMattie);
    }
}

function getInvitedByMattie() {
    document
    .getElementById("audio")
    .innerHTML = `
        <audio id="currentAudio" autoplay controls"><source src="audio/mattie_comeoninnancy.mp3" type="audio/mpeg"></audio>
    `
    document.getElementById("wholedialogue")
    .innerHTML = `
        <p class='dialogue__character'>
            Come on in, Nancy! The door is open. 
        </p>
    `

    document.getElementById('currentAudio')
    .addEventListener('ended', mattiesHallwayExploration, false);
}

function mattiesHallwayExploration() {
    document.getElementById("wholedialogue")
        .innerHTML = `
        
        `
    document
    .getElementById("video")
    .innerHTML = `
        <div>
            <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_0.png">
            <div id="sasa" style="
                height: 110px;
                width: 70px;
                background-color: red;
                position: absolute;
                top: 70px;
                left: 380px;
            "></div>
            <div id="turnleftincircle" style="
                background: transparent;
                height: 292px;
                box-shadow: inset 20px 0 20px white;
                position: absolute;
                width: 50px;
                top: 0;
            "></div>
            <div id="turnrightincircle" style="
                background: transparent;
                height: 292px;
                box-shadow: inset -20px 0 20px white;
                width: 50px;
                position: absolute;
                top: 0;
                left: 608px;
            "></div>
        </div>
    `
}

document
    .getElementById("wrapper")
    .addEventListener("mouseover", Turning); 

function Turning(event) {
    if (event.target.id == 'turnleftincircle') {
        if (currentScreenNumber >=18) {
            currentScreenNumber = -1;
            increaseScreenNumber();
        } else {
            increaseScreenNumber();
        }
    }
    if (event.target.id == 'turnrightincircle') {
        if (currentScreenNumber <=0) {
            currentScreenNumber = 17;
            increaseScreenNumber();
        } else {
            decreaseScreenNumber();
        }
    }
}

let currentScreenNumber = 0;

function increaseScreenNumber() {
    document
            .getElementById("circlingPicture")
            .src = "pics/mattie_day_circle/ME1X_" + ++currentScreenNumber + ".png";
            console.log(currentScreenNumber)
}
function decreaseScreenNumber() {
    document
            .getElementById("circlingPicture")
            .src = "pics/mattie_day_circle/ME1X_" + --currentScreenNumber + ".png";
            console.log(currentScreenNumber)
}