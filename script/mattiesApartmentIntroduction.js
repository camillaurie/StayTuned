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
            <div id="ME1S_0" style="
                height: 110px;
                width: 70px;
                background-color: red;
                position: absolute;
                top: 70px;
                left: 380px;
            "></div>
            <div id="turnleftincircle" class ="activesides activeleftside"></div>
            <div id="turnrightincircle" class ="activesides activerightside"></div>
        </div>
    `
}

document
    .getElementById("wrapper")
    .addEventListener("mouseover", Turning); 

    //то что наверху написано как-то логически связано с тем что внизу написано? 
    // мне надо на верхнее если тру повесить нижнее
    // чтобы если уже не тру то функция перестала выполняться

function Turning(event) {
    if (event.target.id == 'turnleftincircle') { // while true???
        if (currentScreenNumber >=19) {
            currentScreenNumber = -1;
            increaseScreenNumber();
        } else {
            increaseScreenNumber();
        }
    }
    if (event.target.id == 'turnrightincircle') {
        if (currentScreenNumber <=0) {
            currentScreenNumber = 18;
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


// addEventListener

// document
//     .getElementById("video")
//     .innerHTML = ``

//     document
//     .getElementById("wrapper")
//     .addEventListener("click", knockingOnMattiesDoor);


document
    .getElementById("wrapper")
    .addEventListener("click", MovingInsideMattiesApartment); 

function MovingInsideMattiesApartment(event) {
    if (event.target.id == 'ME1S_0') {
        document
        .getElementById("video")
        .innerHTML = `
            <div>
                <img id="circlingPicture" src="pics/apartment/ME1S_0.png">
                <div id="ME1H_0" style="
                    height: 258px;
                    width: 119px;
                    background-color: #873b9b69;
                    position: absolute;
                    left: 178px;
                    top: 18px;
                "></div>
            </div>
        `
    }

    if (event.target.id == 'ME1H_0') {
        if (haveISpokenWithMattie == false) {
            firstInteractionWithMattie()
        } else {
            document
                .getElementById("video")
                .innerHTML = `
                    <img id="circlingPicture" src="pics/apartment/ME1S_0.png">
                `
        }
    }
}