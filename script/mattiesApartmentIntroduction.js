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
                <div class="activelocationspot">
                    <div id="LAAapartmentfrontdoor" style="
                        height: 190px;
                        width: 130px;
                        top: 50px;
                        left: 280px;
                    "></div>
                </div>
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
            <div class="activelocationspot">
            <div id="ME1S_0" style="
                height: 201px;
                width: 133px;
                top: 37px;
                left: 229px;
            "></div></div>
            <div id="turnleftincircle" class ="activesides activeleftside"></div>
            <div id="turnrightincircle" class ="activesides activerightside"></div>
        </div>
    `
}

document
    .getElementById("wrapper")
    .addEventListener("mouseover", Turning); 

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


document
    .getElementById("wrapper")
    .addEventListener("mouseover", inTheCircleChangeActiveSpots); 

    function inTheCircleChangeActiveSpots(event) {
        if (event) {
            if (event.target.id == 'turnleftincircle' || event.target.id == 'turnrightincircle') {
                let thingy = document.getElementById("circlingPicture").getAttribute("src");
                if (thingy == "pics/mattie_day_circle/ME1X_0.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="ME1S_0" style="
                            height: 201px;
                            width: 133px;
                            top: 37px;
                            left: 229px;">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_1.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="ME1S_0" style="
                            height: 194px;
                            width: 140px;
                            top: 32px;
                            left: 331px;">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_2.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="ME1A_0" style="
                            height: 86px;
                            width: 112px;
                            top: 173px;
                            left: 56px;">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_3.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="ME1A_0" style="
                            height: 116px;
                            width: 230px;
                            top: 138px;
                            left: 52px;">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_4.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="ME1A_0" style="
                            height: 138px;
                            width: 253px;
                            top: 140px;
                            left: 148px;">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_5.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="ME1A_0" style="
                            height: 125px;
                            width: 236px;
                            top: 149px;
                            left: 248px;">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_6.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="mapLATER" style="
                            height: 260px;
                            width: 113px;
                            top: 10px;
                            left: 75px;">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_7.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="mapLATER" style="
                            height: 268px;
                            width: 93px;
                            top: 8px;
                            left: 206px;">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_8.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="mapLATER" style="
                            height: 271px;
                            width: 95px;
                            top: 9px;
                            left: 322px;">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_9.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="ME1S_0" style="">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_10.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="ME1S_0" style="">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_11.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="stairsLATER" style="
                            height: 164px;
                            width: 120px;
                            top: 125px;
                            left: 56px;">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_12.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="stairsLATER" style="
                            height: 207px;
                            width: 200px;
                            top: 81px;
                            left: 57px;">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_13.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="stairsLATER" style="
                            height: 247px;
                            width: 285px;
                            top: 41px;
                            left: 52px;">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_14.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="stairsLATER" style="
                            height: 262px;
                            width: 334px;
                            top: 15px;
                            left: 106px;">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_15.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="stairsLATER" style="
                            height: 248px;
                            width: 135px;
                            top: 39px;
                            left: 349px;">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_16.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="ME1S_0" style="">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_17.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="wallwithpics" style="
                            height: 180px;
                            width: 200px;
                            top: 43px;
                            left: 62px;">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_18.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                        <div id="wallwithpics" style="
                            height: 175px;
                            width: 244px;
                            top: 55px;
                            left: 168px;">
                        </div>
                    `
                } else if (thingy == "pics/mattie_day_circle/ME1X_19.png") {
                    document.querySelector('.activelocationspot').innerHTML = `
                    <div id="wallwithpics" style="
                        height: 120px;
                        width: 137px;
                        top: 93px;
                        left: 295px;">
                    </div>
                    <div id="ME1S_0" style="
                        height: 171px;
                        width: 85px;
                        top: 50px;
                        left: 133px;">
                    </div>
                    `
                }
            }
        }
    }

let currentScreenNumber = 0;

function increaseScreenNumber() {
    document
            .getElementById("circlingPicture")
            .src = "pics/mattie_day_circle/ME1X_" + ++currentScreenNumber + ".png";
            console.log(currentScreenNumber)
            inTheCircleChangeActiveSpots();
}
function decreaseScreenNumber() {
    document
            .getElementById("circlingPicture")
            .src = "pics/mattie_day_circle/ME1X_" + --currentScreenNumber + ".png";
            console.log(currentScreenNumber)
            inTheCircleChangeActiveSpots();
}
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
                <div class="activelocationspot">
                    <div id="ME1H_0" style="
                        height: 258px;
                        width: 119px;
                        left: 178px;
                        top: 18px;
                    "></div>
                </div>
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
