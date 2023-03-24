// The Day Screens
// The Circle Screens

let theScreenThatWasBefore;

let ME1X_all = `
<div>
    <div id="activelocationspot">
    </div>
    <div id="turnleftincirclehallway" class ="activesides activeleftside"></div>
    <div id="turnrightincirclehallway" class ="activesides activerightside"></div>
</div>`;

let ME1X_0 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_0.png">
    <div class="redmagnifying" id="ME1S_0" style="
        height: 201px;
        width: 133px;
        top: 37px;
        left: 229px;">
    </div>`;

let ME1X_1 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_1.png">
    <div class="redmagnifying" id="ME1S_0" style="
        height: 194px;
        width: 140px;
        top: 32px;
        left: 331px;">
    </div>`;

let ME1X_2 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_2.png">
    <div class="redmagnifying" id="ME1A_0" style="
        height: 86px;
        width: 112px;
        top: 173px;
        left: 56px;">
    </div>`;

let ME1X_3 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_3.png">
    <div class="redmagnifying" id="ME1A_0" style="
        height: 116px;
        width: 230px;
        top: 138px;
        left: 52px;">
    </div>`;

let ME1X_4 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_4.png">
    <div class="redmagnifying" id="ME1A_0" style="
        height: 138px;
        width: 253px;
        top: 140px;
        left: 148px;">
    </div>`;

let ME1X_5 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_5.png">
    <div class="redmagnifying" id="ME1A_0" style="
        height: 125px;
        width: 236px;
        top: 149px;
        left: 248px;">
    </div>`;

let ME1X_6 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_6.png">
    <div class="redmagnifying" id="goToMap" style="
        height: 260px;
        width: 113px;
        top: 10px;
        left: 75px;">
    </div>`;

let ME1X_7 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_7.png">
    <div class="redmagnifying" id="goToMap" style="
        height: 268px;
        width: 93px;
        top: 8px;
        left: 206px;">
    </div>`;

let ME1X_8 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_8.png">
    <div class="redmagnifying" id="goToMap" style="
        height: 271px;
        width: 95px;
        top: 9px;
        left: 322px;">
    </div>`;

let ME1X_9 = `<img id="circlingPicture" src="pics/mattie_day_circle/ME1X_9.png">`;

let ME1X_10 = `<img id="circlingPicture" src="pics/mattie_day_circle/ME1X_10.png">`;

let ME1X_11 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_11.png">
    <div id="stairsLATER" style="
        height: 164px;
        width: 120px;
        top: 125px;
        left: 56px;">
    </div>`;

let ME1X_12 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_12.png">
    <div id="stairsLATER" style="
        height: 207px;
        width: 200px;
        top: 81px;
        left: 57px;">
    </div>`;

let ME1X_13 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_13.png">
    <div id="stairsLATER" style="
        height: 247px;
        width: 285px;
        top: 41px;
        left: 52px;">
    </div>`;

let ME1X_14 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_14.png">
    <div id="stairsLATER" style="
        height: 262px;
        width: 334px;
        top: 15px;
        left: 106px;">
    </div>`;

let ME1X_15 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_15.png">
    <div id="stairsLATER" style="
        height: 248px;
        width: 135px;
        top: 39px;
        left: 349px;">
    </div>`;

let ME1X_16 = `<img id="circlingPicture" src="pics/mattie_day_circle/ME1X_16.png">`;

let ME1X_17 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_17.png">
    <div class="redmagnifying" id="ME4D_0" style="
        height: 180px;
        width: 200px;
        top: 43px;
        left: 62px;">
    </div>`;

let ME1X_18 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_18.png">
    <div class="redmagnifying" id="ME4D_0" style="
        height: 175px;
        width: 244px;
        top: 55px;
        left: 168px;">
    </div>`;

let ME1X_19 = `
    <img id="circlingPicture" src="pics/mattie_day_circle/ME1X_19.png">
    <div class="redmagnifying" id="ME4D_0" style="
        height: 120px;
        width: 137px;
        top: 93px;
        left: 295px;">
    </div>
    <div class="redmagnifying" id="ME1S_0" style="
        height: 171px;
        width: 85px;
        top: 50px;
        left: 133px;">
    </div>`;

let sequenceOfScreensInHallway = [ME1X_0, ME1X_1, ME1X_2, ME1X_3, ME1X_4, ME1X_5, ME1X_6, ME1X_7, ME1X_8, ME1X_9, ME1X_10, ME1X_11, ME1X_12, ME1X_13, ME1X_14, ME1X_15, ME1X_16, ME1X_17, ME1X_18, ME1X_19];

// The Hallway 

let ME1S_0 = `<img id="ME1S_0" src="pics/apartment/ME1S_0.png">`

let ME1S_1 = `<img id="ME1S_1" src="pics/apartment/ME1S_1.png">`

let ME4D_0 = `<img id="ME4D_0" src="pics/apartment/ME4D_0.png">`

let ME4A_0 = `<img id="ME4A_0" src="pics/apartment/ME4A_0.png">`

let ME4B_0 = `<img id="ME4B_0" src="pics/apartment/ME4B_0.png">`

let ME4C_0 = `<img id="ME4C_0" src="pics/apartment/ME4C_0.png">`

let ME1L_0 = `<img id="ME1L_0" src="pics/apartment/ME1L_0.png">`

let ME1M_0 = `<img id="ME1L_0" src="pics/apartment/ME1M_0.png">`

let ME2N_0 = `<img id="ME1L_0" src="pics/apartment/ME2N_0.png">`

let ME2O_0 = `<img id="ME1L_0" src="pics/apartment/ME1O_0.png">`

let ME2P_0 = `<img id="ME1L_0" src="pics/apartment/ME1P_0.png">`

let ME4F_0 = `<img id="ME1L_0" src="pics/apartment/ME4F_0.png">`

let ME4K_0 = `<img id="ME1L_0" src="pics/apartment/ME4K_0.png">`

// Functions 

async function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
let currentHallwayIndex = 0;

// The below one is a very important thing, leave it here.

let i = 0;
let isSidePressed = false;
document
    .getElementById("wrapper")
    .addEventListener("mousedown", startTheCycleInTheHallway);
document
    .getElementById("wrapper")
    .addEventListener("mouseup", endTheCycleInTheHallway);
async function startTheCycleInTheHallway(event) {
    if (event && event.target.id == 'turnleftincirclehallway') {
        isSidePressed = true;
        while (isSidePressed == true) {
            if (i > 18) {
                i = -1;
            }
            document
                .getElementById("activelocationspot")
                .innerHTML = sequenceOfScreensInHallway[++i];
            console.log(i);
            await delay(500);
        }
    }
    if (event && event.target.id == 'turnrightincirclehallway') {
        isSidePressed = true;
        while (isSidePressed == true) {
            if (i < 1) {
                i = 20;
            }
            document
                .getElementById("activelocationspot")
                .innerHTML = sequenceOfScreensInHallway[--i];
            console.log(i);
            await delay(500);
        }
    }
}
function endTheCycleInTheHallway() {
    isSidePressed = false;
}

// как вариант на mouseIn врубить цикл кручения, а на mouseOut вырубать его 





document
    .getElementById("wrapper")
    .addEventListener("click", goToADifferentScreenInMattiesHallway); 
function goToADifferentScreenInMattiesHallway(event) {
    if (event && event.target.id == 'ME1S_0') {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/ME1S_0.png">
                <div class="redmagnifying" onclick="r = 6" id="MD1X_6" style="
                    height: 246px;
                    width: 162px;
                    top: 0px;
                    left: 100px;
                "></div>
                <div class="backpointer" id="goBackToSpinning" style="
                    height: 46px;
                    width: 536px;
                    top: 246px;
                    left: 0;
                "></div>
            </div>
        `;
    }

    if (event && event.target.id == 'ME1A_0') {
        document
            .getElementById("video")
            .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/ME1A_0.png">
                <div class="redmagnifying" id="ME1L_0" style="
                    height: 183px;
                    width: 162px;
                    top: 109px;
                    left: 317px;
                "></div>
                <div class="redmagnifying" id="noteNextToPhone" style="
                    height: 93px;
                    width: 57px;
                    top: 199px;
                    left: 479px;
                "></div>
                <div class="backpointer" id="goBackToSpinning" style="
                    height: 46px;
                    width: 317px;
                    top: 246px;
                    left: 0;
                "></div>
            </div>
            `;
    }

    if (event && event.target.id == 'goBackToSpinning') {
        exploringTheHallwayDay();
    }

    if (event && event.target.id == 'goBackToSpinningRoom') {
        exploringTheRoomDay();
    }

    if (event && event.target.id == 'MD1X_6') {
        if (haveISpokenWithMattie == false) {
            seeingMattieForTheFirstTime();
        } else if (haveISpokenWithMattie == true) {
            exploringTheRoomDay();
        }
    }

    if (event && event.target.id == 'ME4D_0') {
        document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/ME4D_0.png">
                <div class="redmagnifying" id="ME4A_0" style="
                    height: 127px;
                    width: 142px;
                    left: 174px;
                    top: 16px;
                "></div>
                <div class="redmagnifying" id="ME4B_0" style="
                    height: 124px;
                    width: 173px;
                    left: 348px;
                    top: 8px;
                "></div>
                <div class="redmagnifying" id="ME4C_0" style="
                    height: 108px;
                    width: 107px;
                    left: 84px;
                    top: 173px;
                "></div>
                <div class="backpointer" id="goBackToSpinning" style="
                    height: 67px;
                    width: 345px;
                    left: 191px;
                    top: 225px;
                "></div>
            </div>
        `;  
    }

    if (event && event.target.id == 'ME4A_0') {
        document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/ME4A_0.png">
                <div class="backpointer" id="ME4D_0" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
            </div>
        `;
    }
    if (event && event.target.id == 'ME4B_0') {
        document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/ME4B_0.png">
                <div class="backpointer" id="ME4D_0" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
            </div>
        `
    }
    if (event && event.target.id == 'ME4C_0') {
        document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/ME4C_0.png">
                <div class="backpointer" id="ME4D_0" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
            </div>
        `
    }

    if (event && event.target.id == 'ME1L_0') {
        document
            .getElementById("media_elements")
            .innerHTML = ``;
        document.getElementById("wholedialogue")
            .innerHTML = ``;
        currentPhoneNumber = '';
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/ME1L_0.png">
                    <div class="redmagnifying" id="ME1M_0" style="
                        height: 150px;
                        width: 142px;
                        left: 245px;
                        top: 75px;
                    "></div>
                    <div class="redmagnifying" id="noteNextToPhone" style="
                        height: 116px;
                        width: 128px;
                        left: 408px;
                        top: 109px;
                    "></div>
                    <div class="backpointer" id="ME1A_0" style="
                        height: 67px;
                        width: 536px;
                        left: 0px;
                        top: 225px;
                    "></div>
                </div>
            `
        ;
    }

    if (event && event.target.id == 'noteNextToPhone') {
        if (noteNextToThePhone == 'Ned') {
            document
                .getElementById("video")
                .innerHTML = `
                    <div class="thisScreenThisTime">
                        <img src="pics/apartment/ME1P_0.png">
                        <div class="backpointer" id="ME1L_0" style="
                            height: 67px;
                            width: 536px;
                            left: 0px;
                            top: 225px;
                        "></div>
                    </div>
                `
            ;
        } else if (noteNextToThePhone == 'Bess') {
            document
                .getElementById("video")
                .innerHTML = `
                    <div class="thisScreenThisTime">
                        <img src="pics/apartment/ME1N_0.png">
                        <div class="backpointer" id="ME1L_0" style="
                            height: 67px;
                            width: 536px;
                            left: 0px;
                            top: 225px;
                        "></div>
                    </div>
                `
            ;
        } else if (noteNextToThePhone == 'George') {
            document
                .getElementById("video")
                .innerHTML = `
                    <div class="thisScreenThisTime">
                        <img src="pics/apartment/ME1O_0.png">
                        <div class="backpointer" id="ME1L_0" style="
                            height: 67px;
                            width: 536px;
                            left: 0px;
                            top: 225px;
                        "></div>
                    </div>
                `
            ;
        }
    }

    if (event && event.target.id == 'ME1M_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/ME1M_0.png">
                    <div class="redmagnifying" id="phoneButton1" style="
                        height: 32px;
                        width: 63px;
                        left: 164px;
                        top: 117px;
                    "></div>
                    <div class="redmagnifying" id="phoneButton2" style="
                        height: 32px;
                        width: 63px;
                        left: 236px;
                        top: 117px;
                    "></div>
                    <div class="redmagnifying" id="phoneButton3" style="
                        height: 32px;
                        width: 63px;
                        left: 309px;
                        top: 117px;
                    "></div>
                    <div class="redmagnifying" id="phoneButton4" style="
                        height: 32px;
                        width: 63px;
                        left: 160px;
                        top: 156px;
                    "></div>
                    <div class="redmagnifying" id="phoneButton5" style="
                        height: 32px;
                        width: 63px;
                        left: 237px;
                        top: 156px;
                    "></div>
                    <div class="redmagnifying" id="phoneButton6" style="
                        height: 32px;
                        width: 63px;
                        left: 313px;
                        top: 156px;
                    "></div>
                    <div class="redmagnifying" id="phoneButton7" style="
                        height: 32px;
                        width: 63px;
                        left: 155px;
                        top: 198px;
                    "></div>
                    <div class="redmagnifying" id="phoneButton8" style="
                        height: 32px;
                        width: 63px;
                        left: 236px;
                        top: 198px;
                    "></div>
                    <div class="redmagnifying" id="phoneButton9" style="
                        height: 32px;
                        width: 63px;
                        left: 319px;
                        top: 198px;
                    "></div>
                    <div class="redmagnifying" id="phoneButton0" style="
                        height: 32px;
                        width: 63px;
                        left: 237px;
                        top: 242px;
                    "></div>
                    <div class="backpointer" id="ME1L_0" style="
                        height: 67px;
                        width: 139px;
                        left: 0px;
                        top: 225px;
                    "></div>
                    <div class="backpointer" id="ME1L_0" style="
                        height: 67px;
                        width: 139px;
                        left: 397px;
                        top: 225px;
                    "></div>
                </div>
            `
        ;
        console.log('phoneCalling');
        phoneCalling();
    }
}

// start
let currentPhoneNumber;
document
    .getElementById("wrapper")
    .addEventListener("click", phoneCalling); 
function phoneCalling(event) {
    if (event && event.target.id == 'ME1M_0') {
        currentPhoneNumber = '';
        document
        .getElementById("media_elements")
        .innerHTML = `
            <audio controls autoplay loop class="PersistentSoundEffects SoundEffects" id="currentAudio">
                <source 
                    src="audio/DialTone.wav" 
                    type="audio/mpeg">
            </audio> 
        `
        setEffectsVolume();
        document.getElementById("wholedialogue")
            .innerHTML = `
                <p class="dialogue__character">Address Book:</p>
                <p class="dialogue__character" style="width: 293px; height: 10px;"></p>
                <p class="dialogue__character">Bess Marvin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1-523-555-4468</p>
                <p class="dialogue__character">George Fayne&nbsp;&nbsp;&nbsp;&nbsp;1-523-555-2583</p>
                <p class="dialogue__character">Ned Nickerson&nbsp;&nbsp;&nbsp;1-523-555-4357</p>
            `
        ;
    }
    if (event && event.target.id == 'phoneButton1') {
        document
        .getElementById("media_elements")
        .innerHTML = `
            <audio controls autoplay class="SoundEffects" id="currentAudio">
                <source 
                    src="audio/Dial1.wav" 
                    type="audio/mpeg">
            </audio>
        `
        setEffectsVolume();
        currentPhoneNumber += '1';
        console.log(currentPhoneNumber);
    }
    if (event && event.target.id == 'phoneButton2') {
        document
        .getElementById("media_elements")
        .innerHTML = `
            <audio controls autoplay class="SoundEffects" id="currentAudio">
                <source 
                    src="audio/Dial2.wav" 
                    type="audio/mpeg">
            </audio>
        `
        setEffectsVolume();
        currentPhoneNumber += '2';
        console.log(currentPhoneNumber);
    }
    if (event && event.target.id == 'phoneButton3') {
        document
        .getElementById("media_elements")
        .innerHTML = `
            <audio controls autoplay class="SoundEffects" id="currentAudio">
                <source 
                    src="audio/Dial3.wav" 
                    type="audio/mpeg">
            </audio>
        `
        setEffectsVolume();
        currentPhoneNumber += '3';
        console.log(currentPhoneNumber);
    }
    if (event && event.target.id == 'phoneButton4') {
        document
        .getElementById("media_elements")
        .innerHTML = `
            <audio controls autoplay class="SoundEffects" id="currentAudio">
            <source 
                src="audio/Dial4.wav" 
                type="audio/mpeg">
            </audio>
        `
        setEffectsVolume();
        currentPhoneNumber += '4';
        console.log(currentPhoneNumber);
    }
    if (event && event.target.id == 'phoneButton5') {
        document
        .getElementById("media_elements")
        .innerHTML = `
            <audio controls autoplay class="SoundEffects" id="currentAudio">
            <source 
                src="audio/Dial5.wav" 
                type="audio/mpeg">
            </audio>
        `
        setEffectsVolume();
        currentPhoneNumber += '5';
        console.log(currentPhoneNumber);
    }
    if (event && event.target.id == 'phoneButton6') {
        document
        .getElementById("media_elements")
        .innerHTML = `
            <audio controls autoplay class="SoundEffects" id="currentAudio">
            <source 
                src="audio/Dial6.wav" 
                type="audio/mpeg">
            </audio>
        `
        setEffectsVolume();
        currentPhoneNumber += '6';
        console.log(currentPhoneNumber);
    }
    if (event && event.target.id == 'phoneButton7') {
        document
        .getElementById("media_elements")
        .innerHTML = `
            <audio controls autoplay class="SoundEffects" id="currentAudio">
            <source 
                src="audio/Dial7.wav" 
                type="audio/mpeg">
            </audio>
        `
        setEffectsVolume();
        currentPhoneNumber += '7';
        console.log(currentPhoneNumber);
    }
    if (event && event.target.id == 'phoneButton8') {
        document
        .getElementById("media_elements")
        .innerHTML = `
            <audio controls autoplay class="SoundEffects" id="currentAudio">
            <source 
                src="audio/Dial8.wav" 
                type="audio/mpeg">
            </audio>
        `
        setEffectsVolume();
        currentPhoneNumber += '8';
        console.log(currentPhoneNumber);
    }
    if (event && event.target.id == 'phoneButton9') {
        document
        .getElementById("media_elements")
        .innerHTML = `
            <audio controls autoplay class="SoundEffects" id="currentAudio">
            <source 
                src="audio/Dial9.wav" 
                type="audio/mpeg">
            </audio>
        `
        setEffectsVolume();
        currentPhoneNumber += '9';
        console.log(currentPhoneNumber);
    }
    if (event && event.target.id == 'phoneButton0') {
        document
        .getElementById("media_elements")
        .innerHTML = `
            <audio controls autoplay class="SoundEffects" id="currentAudio">
            <source 
                src="audio/Dial0.wav" 
                type="audio/mpeg">
            </audio>
        `
        setEffectsVolume();
        currentPhoneNumber += '0';
        console.log(currentPhoneNumber);
    }
    if (currentPhoneNumber && currentPhoneNumber.length == 11) {
        if (currentPhoneNumber == '15235554468') {
            document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay class="SoundEffects" id="currentAudio">
                <source 
                    src="audio/TelRing.wav" 
                    type="audio/mpeg">
                </audio>
            `
            setEffectsVolume();
            console.log('Calling Bess');
            currentPhoneNumber = ``;
        } else if (currentPhoneNumber == '15235552583') {
            document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay class="SoundEffects" id="currentAudio">
                <source 
                    src="audio/TelRing.wav" 
                    type="audio/mpeg">
                </audio>
            `
            setEffectsVolume();
            console.log('Calling George');
            currentPhoneNumber = ``;
        } else if (currentPhoneNumber == '15235554357') {
            document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay class="SoundEffects"o id="currentAudio">
                <source 
                    src="audio/TelRing.wav" 
                    type="audio/mpeg">
                </audio>
            `
            setEffectsVolume();
            console.log('Calling Ned');
            currentPhoneNumber = ``;
        } else {
            console.log("wrong number")
            document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay class="SoundEffects" id="currentAudio">
                <source 
                    src="audio/TelRing.wav" 
                    type="audio/mpeg">
                </audio>
            `
            setEffectsVolume();
            currentPhoneNumber = ``;
            document.getElementById('currentAudio')
                .addEventListener('ended', dialAgain, false);
        }
        document.getElementById("wholedialogue")
            .innerHTML = `
                <p class='dialogue__character'>
                    ringing...
                </p>
            `
    }
}

function dialAgain() {
    // !!! change the subtitle.
    document.getElementById("wholedialogue")
        .innerHTML = `
            <p class='dialogue__character'>
                We're sorry...
            </p>
        `
    document
        .getElementById("media_elements")
        .innerHTML = `
            <audio controls autoplay class="SoundEffects" id="currentAudio">
            <source 
                src="audio/DialAgin.wav" 
                type="audio/mpeg">
            </audio>
        `
        setEffectsVolume();
        document.getElementById('currentAudio')
            .addEventListener('ended', tryDialingAgain, false);
}

function tryDialingAgain() {
    currentPhoneNumber = '';
    document.getElementById("wholedialogue")
        .innerHTML = `
            <p class="dialogue__character">Address Book:</p>
            <p class="dialogue__character" style="width: 293px; height: 10px;"></p>
            <p class="dialogue__character">Bess Marvin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1-523-555-4468</p>
            <p class="dialogue__character">George Fayne&nbsp;&nbsp;&nbsp;&nbsp;1-523-555-2583</p>
            <p class="dialogue__character">Ned Nickerson&nbsp;&nbsp;&nbsp;1-523-555-4357</p>
        `;
        document
        .getElementById("media_elements")
        .innerHTML = `
            <audio controls autoplay loop class="SoundEffects" id="currentAudio">
            <source 
                src="audio/DialTone.wav" 
                type="audio/mpeg">
            </audio> 
        `
        setEffectsVolume();
    phoneCalling();
}

// Get Inside The Apartment 

function seeMattiesFrontDoor() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/ME0N_0.png">
                <div class="redmagnifying" id="frontDoorOfTheApartment" style="
                    height: 190px;
                    width: 130px;
                    top: 50px;
                    left: 280px;
                "></div>
                <div class="backpointer" onclick="goBackToMap()" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
            </div>
        `
    ;
    if (haveISpokenWithMattie == false) {
        document
            .getElementById("frontDoorOfTheApartment")
            .addEventListener("click", invitationIntoTheApartment);
    } else {
        document
            .getElementById("frontDoorOfTheApartment")
            .addEventListener("click", openingApartmentWithKeys);
    }
}

document
    .getElementById("wrapper")
    .addEventListener("click", knockingOnTheApartmentDoor);
function knockingOnTheApartmentDoor(event) {
    if (event && event.target.id == 'fromMapGoToTheApartment' && myLocationRightNow != 1) {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls 
                    autoplay 
                    class="SoundOfVoice" 
                    onended="seeMattiesFrontDoor();
                    myLocationRightNow = 1; 
                    clearTheAudio();">
                    <source 
                        src="audio/tax01.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setVoiceVolume();
    } else if (event && event.target.id == 'fromMapGoToTheApartment') {
        seeMattiesFrontDoor();
    }
}

function openingApartmentWithKeys() {
    if (onHandRightNow == 'keys') {
        document
        .getElementById("media_elements")
        .innerHTML = `
            <audio controls autoplay class="SoundEffects" id="currentAudio" onended="doorToTheApartmentOpened()">
                <source 
                    src="audio/dooropn.wav" 
                    type="audio/mpeg">
            </audio>`
        setEffectsVolume();
    } else {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay class="SoundOfVoice" id="currentAudio">
                    <source 
                        src="audio/Nv18.wav" 
                        type="audio/mpeg">
                </audio>`
        setVoiceVolume();
    }
}

function doorToTheApartmentOpened() {
    currentMusicFile.innerHTML = musicInMattiesApartmentDay;
    setMusicVolume();
    i = 0;
    exploringTheHallwayDay();
    onHandRightNow = '';
    if (inventoryContains.length == 0) {
        closedInventoryToInventoryWithKeys();
    } else if (inventoryContains.includes('keys') == true) {
        return;
    } else {
        document.getElementById('inventory__place').innerHTML = keysInInventory + document.getElementById('inventory__place').innerHTML;
        document.getElementById("pointers").href = "style/pointers_default.css";
        document.getElementById("inventoryclicksound").play();
        inventoryContains.push('keys');
    }
}

function invitationIntoTheApartment() {
    document
    .getElementById("media_elements")
    .innerHTML = `
        <audio controls autoplay onended="currentMusicFile.innerHTML = musicInMattiesApartmentDay; setMusicVolume(); clearTheAudio();" class="SoundOfVoice" id="currentAudio">
        <source 
            src="audio/mattie_comeoninnancy.mp3" 
            type="audio/mpeg">
        </audio>
    `
    
    setVoiceVolume();
    document.getElementById("wholedialogue")
    .innerHTML = `
        <p class='dialogue__character'>
            Come on in, Nancy! The door is open. 
        </p>
    `
    document.getElementById('currentAudio')
    .addEventListener('ended', exploringTheHallwayDay, false);
    i = 0;
}

// The spinning screen

function exploringTheHallwayDay() {
    document.getElementById("wholedialogue")
        .innerHTML = ``
    document
        .getElementById("video")
        .innerHTML = ME1X_all;
        document
            .getElementById("activelocationspot")
            .innerHTML = sequenceOfScreensInHallway[i]; 
}







let MD1X_all = `
<div>
    <div id="activelocationspot">
    </div>
    <div id="turnleftincircleroom" class ="activesides activeleftside"></div>
    <div id="turnrightincircleroom" class ="activesides activerightside"></div>
</div>`;

let MD1X_0 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_0.png">
    <div class="redmagnifying" id="MD3S_0" style="
        height: 211px;
        width: 165px;
        top: 7px;
        left: 88px;
        ">
    </div>
    `;

let MD1X_1 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_1.png">
    <div class="redmagnifying" id="MD3S_0" style="
        height: 205px;
        width: 144px;
        top: 12px;
        left: 220px;
        ">
    </div>
    <div class="redmagnifying" id="MD1P_0" style="
        height: 185px;
        width: 129px;
        top: 37px;
        left: 50px;
        ">
    </div>
    `;

let MD1X_2 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_2.png">
    <div class="redmagnifying" id="MD3S_0" style="
        height: 215px;
        width: 154px;
        top: 4px;
        left: 332px;
        ">
    </div>
    <div class="redmagnifying" id="MD1P_0" style="
        height: 176px;
        width: 160px;
        top: 34px;
        left: 142px;
        ">
    </div>
    `;

let MD1X_3 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_3.png">
    <div class="redmagnifying" id="MD6R_0" style="
        height: 99px;
        width: 127px;
        top: 70px;
        left: 96px;
        ">
    </div>
    <div class="redmagnifying" id="MD1P_0" style="
        height: 193px;
        width: 142px;
        top: 31px;
        left: 269px;
        ">
    </div>`;

let MD1X_4 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_4.png">
    <div class="redmagnifying" id="MD6Q_0" style="
        height: 99px;
        width: 126px;
        top: 70px;
        left: 69px;
        ">
    </div>
    <div class="redmagnifying" id="MD6R_0" style="
        height: 99px;
        width: 115px;
        top: 70px;
        left: 227px;
        ">
    </div>
    <div class="redmagnifying" id="MD1P_0" style="
        height: 209px;
        width: 114px;
        top: 16px;
        left: 372px;
        ">
    </div>`;

let MD1X_5 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_5.png">
    <div class="redmagnifying" id="MD6Q_0" style="
        height: 99px;
        width: 154px;
        top: 70px;
        left: 172px;
        ">
    </div>
    <div class="redmagnifying" id="MD6R_0" style="
        height: 99px;
        width: 154px;
        top: 70px;
        left: 326px;
        ">
    </div>`;

let MD1X_6 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_6.png">
    <div class="redmagnifying" id="MD6Q_0" style="
        height: 99px;
        width: 154px;
        top: 70px;
        left: 299px;
        ">
    </div>
    <div class="redmagnifying" id="MD8C_0" style="
        height: 74px;
        width: 74px;
        top: 218px;
        left: 79px;
        ">
    </div>`;

let MD1X_7 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_7.png">
    <div class="redmagnifying" id="MD1S_0" style="
        height: 83px;
        width: 165px;
        top: 111px;
        left: 96px;
        ">
    </div>
    <div class="redmagnifying" id="MD8C_0" style="
        height: 74px;
        width: 74px;
        top: 218px;
        left: 198px;
        ">
    </div>
    `;

let MD1X_8 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_8.png">
    <div class="redmagnifying" id="MD1S_0" style="
        height: 83px;
        width: 162px;
        top: 111px;
        left: 218px;">
    </div>
    <div class="redmagnifying" id="MD3E_0" style="
        height: 91px;
        width: 115px;
        top: 162px;
        left: 50px;
        ">
    </div>
    <div class="redmagnifying" id="MD8C_0" style="
        height: 74px;
        width: 74px;
        top: 218px;
        left: 299px;
        ">
    </div>`;

let MD1X_9 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_9.png">
    <div class="redmagnifying" id="MD1S_0" style="
        height: 83px;
        width: 165px;
        top: 111px;
        left: 321px;
        ">
    </div>
    <div class="redmagnifying" id="MD3E_0" style="
        height: 91px;
        width: 115px;
        top: 153px;
        left: 153px;
        ">
    </div>
    <div class="redmagnifying" id="MD8C_0" style="
        height: 74px;
        width: 74px;
        top: 218px;
        left: 412px;
        ">
    </div>`;

let MD1X_10 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_10.png">
    <div class="redmagnifying" id="MD3E_0" style="
        height: 91px;
        width: 115px;
        top: 162px;
        left: 266px;
        ">
    </div>`;

let MD1X_11 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_11.png">
    <div class="redmagnifying" id="MD3E_0" style="
        height: 91px;
        width: 115px;
        top: 174px;
        left: 371px;
        ">
    </div>
    `;

let MD1X_12 = `<img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_12.png">`;

let MD1X_13 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_13.png">
    <div class="redmagnifying" id="MD6V_0" style="
        height: 74px;
        width: 136px;
        top: 218px;
        left: 50px;
        ">
    </div>
    `;

let MD1X_14 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_14.png">
    <div class="redmagnifying" id="MD6V_0" style="
        height: 54px;
        width: 158px;
        top: 238px;
        left: 123px;
        ">
    </div>
    <div class="redmagnifying" id="md1z_0" style="
        height: 78px;
        width: 97px;
        top: 160px;
        left: 50px;
        ">
    </div>
    `;

let MD1X_15 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_15.png">
    <div class="redmagnifying" id="MD6V_0" style="
        height: 64px;
        width: 164px;
        top: 228px;
        left: 232px;
        ">
    </div>
    <div class="redmagnifying" id="ME1E_0" style="
        height: 185px;
        width: 76px;
        top: 38px;
        left: 89px;
        ">
    </div>
    <div class="redmagnifying" id="md1z_0" style="
        height: 75px;
        width: 87px;
        top: 153px;
        left: 172px;
        ">
    </div>
    `;

let MD1X_16 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_16.png">
    <div class="redmagnifying" id="MD6V_0" style="
        height: 64px;
        width: 115px;
        top: 228px;
        left: 371px;
        ">
    </div>
    <div class="redmagnifying" id="MD3P_0" style="
        height: 208px;
        width: 100px;
        top: 20px;
        left: 40px;
        ">
    </div>
    <div class="redmagnifying" id="ME1E_0" style="
        height: 173px;
        width: 73px;
        top: 41px;
        left: 211px;
        ">
    </div>
    <div class="redmagnifying" id="md1z_0" style="
        height: 117px;
        width: 87px;
        top: 153px;
        left: 284px;
        ">
    </div>
    `;

let MD1X_17 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_17.png">
    <div class="redmagnifying" id="MD3P_0" style="
        height: 210px;
        width: 92px;
        top: 12px;
        left: 168px;
        ">
    </div>
    <div class="redmagnifying" id="ME1E_0" style="
        height: 187px;
        width: 94px;
        top: 36px;
        left: 313px;
        ">
    </div>
    <div class="redmagnifying" id="md1z_0" style="
        height: 117px;
        width: 79px;
        top: 153px;
        left: 407px;
        ">
    </div>
    `;

let MD1X_18 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_18.png">
    <div class="redmagnifying" id="MD3P_0" style="
        height: 205px;
        width: 93px;
        top: 12px;
        left: 283px;
        ">
    </div>
    `;

let MD1X_19 = `
    <img id="circlingPicture" src="pics/mattie-room_day_circle/MD1X_19.png">
    `;

let sequenceOfScreensInRoom = [MD1X_0, MD1X_1, MD1X_2, MD1X_3, MD1X_4, MD1X_5, MD1X_6, MD1X_7, MD1X_8, MD1X_9, MD1X_10, MD1X_11, MD1X_12, MD1X_13, MD1X_14, MD1X_15, MD1X_16, MD1X_17, MD1X_18, MD1X_19];



let r = 6;
document
    .getElementById("wrapper")
    .addEventListener("mousedown", startTheCycleInMattiesRoom);
document
    .getElementById("wrapper")
    .addEventListener("mouseup", endTheCycleInMattiesRoom);
async function startTheCycleInMattiesRoom(event) {
    if (event && event.target.id == 'turnleftincircleroom') {
        isSidePressed = true;
        while (isSidePressed == true) {
            if (r > 18) {
                r = -1;
            }
            document
                .getElementById("activelocationspot")
                .innerHTML = sequenceOfScreensInRoom[++r];
            console.log(r);
            await delay(500);
        }
    }
    if (event && event.target.id == 'turnrightincircleroom') {
        isSidePressed = true;
        while (isSidePressed == true) {
            if (r < 1) {
                r = 20;
            }
            document
                .getElementById("activelocationspot")
                .innerHTML = sequenceOfScreensInRoom[--r];
            console.log(r);
            await delay(500);
        }
    }
}
function endTheCycleInMattiesRoom() {
    isSidePressed = false;
}

function exploringTheRoomDay() {
    document.getElementById("wholedialogue")
        .innerHTML = ``
    document
        .getElementById("video")
        .innerHTML = MD1X_all;
        document
            .getElementById("activelocationspot")
            .innerHTML = sequenceOfScreensInRoom[r]; 
}

document
    .getElementById("wrapper")
    .addEventListener("click", goToADifferentScreenInMattiesRoom); 
function goToADifferentScreenInMattiesRoom(event) {
    if (event && event.target.id == 'MD1S_0') {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD1S_0.png">
                <div class="backpointer" id="goBackToSpinningRoom" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
                <div class="redmagnifying" onclick="calendar();" style="
                    height: 30px;
                    width: 95px;
                    left: 288px;
                    top: 171px;
                "></div>
                <div class="redmagnifying" id="MD1R_0" style="
                    height: 64px;
                    width: 85px;
                    left: 196px;
                    top: 69px;
                "></div>
                <div class="redmagnifying" id="MD6F_0" style="
                    height: 44px;
                    width: 115px;
                    left: 90px;
                    top: 133px;
                "></div>
                <div class="redmagnifying" id="MD9F_0" style="
                    height: 56px;
                    width: 65px;
                    left: 209px;
                    top: 0px;
                "></div>
                <div class="redmagnifying" id="MD6N_0" style="
                    height: 70px;
                    width: 95px;
                    left: 308px;
                    top: 81px;
                "></div>
            </div>`
        ;    
    }
    if (event && event.target.id == 'MD6N_0') {
        showClosedDrawer();
    }
    if (event && event.target.id == 'MD6N_0_close') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay onended="showClosedDrawer(); clearTheAudio();" class="SoundEffects" id="currentAudio">
                    <source 
                        src="audio/drwropen.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }
    if (event && event.target.id == 'MD6P_0_open') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay onended="showOpenedDrawer(); clearTheAudio();" class="SoundEffects" id="currentAudio">
                    <source 
                        src="audio/drwropen.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }
    if (event && event.target.id == 'MD6P_0_close') {
        showOpenedDrawer();
    }
    if (event && event.target.id == 'MD6O_0') {
        letterFromTallDrawer();
    }
    if (event && event.target.id == 'MD6O_0_show') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay onended="letterFromTallDrawer(); clearTheAudio();" class="SoundEffects" id="currentAudio">
                    <source 
                        src="audio/mag.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }
    if (event && event.target.id == 'MD9F_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD9F_0.png">
                    <div class="backpointer" id="MD1S_0" style="
                        height: 58px;
                        width: 536px;
                        left: 0px;
                        top: 234px;
                    "></div>
                    <div class="redmagnifying" id="MD9G_0" style="
                        height: 116px;
                        width: 160px;
                        left: 172px;
                        top: 85px;
                    "></div>
                </div>
            `
        ;
    }
    if (event && event.target.id == 'MD9G_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD9G_0.png">
                    <div class="backpointer" id="MD9F_0" style="
                        height: 58px;
                        width: 536px;
                        left: 0px;
                        top: 234px;
                    "></div>
                </div>
            `
        ;
    }
    if (event && event.target.id == 'MD6F_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD6F_0.png">
                    <div class="backpointer" id="MD1S_0" style="
                        height: 58px;
                        width: 536px;
                        left: 0px;
                        top: 234px;
                    "></div>
                    <div class="redmagnifying" id="MD6G_0" style="
                        height: 92px;
                        width: 164px;
                        left: 190px;
                        top: 130px;
                    "></div>
                    <div class="redmagnifying" id="MD6I_0" style="
                        height: 92px;
                        width: 114px;
                        left: 60px;
                        top: 130px;
                    "></div>
                </div>
            `
        ;
    }
    if (event && event.target.id == 'MD6I_0') {
        MattiesMomLetter1page();
    }
    if (event && event.target.id == 'MD6I_0_back') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls 
                    autoplay 
                     
                    onended="MattiesMomLetter1page(); clearTheAudio();" 
                    class="SoundEffects" 
                    id="currentAudio">
                    <source 
                        src="audio/Crdshfl.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }
    if (event && event.target.id == 'MD6J_0') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls 
                    autoplay 
                     
                    onended="MattiesMomLetter2page(); clearTheAudio();" 
                    class="SoundEffects" 
                    id="currentAudio">
                    <source 
                        src="audio/Crdshfl.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }
    if (event && event.target.id == 'MD6G_0') {
        showEnvelopeAfterLetter();
    }
    if (event && event.target.id == 'MD6G_0_close') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay onended="showEnvelopeAfterLetter(); clearTheAudio();" class="SoundEffects" id="currentAudio">
                    <source 
                        src="audio/envelope.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }
    if (event && event.target.id == 'MD6H_0') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay onended="showLetterFromEnvelope(); clearTheAudio();" class="SoundEffects" id="currentAudio">
                    <source 
                        src="audio/envelope.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }
    if (event && event.target.id == 'MD1R_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD1R_0.png">
                    <div class="backpointer" id="MD1S_0" style="
                        height: 58px;
                        width: 426px;
                        left: 0px;
                        top: 234px;
                    "></div>
                    <div class="redmagnifying" id="MD6E_0" style="
                        height: 88px;
                        width: 110px;
                        left: 426px;
                        top: 204px;
                    "></div>
                    <div class="redmagnifying" id="theLockedDrawer" style="
                        height: 98px;
                        width: 220px;
                        left: 176px;
                        top: 104px;
                        rotate: 20deg;
                    "></div>
                </div>
            `
        ;
    }
    if (event && event.target.id == 'theLockedDrawer') {
        if (onHandRightNow != 'forgotten_key') {
            document
                .getElementById("media_elements")
                .innerHTML = `
                    <audio controls 
                        ="" 
                        autoplay="" 
                        class="SoundOfVoice" 
                        onended="clearTheAudio();"
                    >
                        <source 
                            src="audio/Nv18.wav" 
                            type="audio/mpeg"
                        >
                    </audio>
                `
            ;
        } else {
            showOpenForgottenDrawer();
        }
    }
    if (event && event.target.id == 'MD6M_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD6M_0.png">
                    <div class="backpointer" onclick="showOpenForgottenDrawer();" style="
                        height: 58px;
                        width: 536px;
                        left: 0px;
                        top: 234px;
                    "></div>
                    <div class="redmagnifying" id="MD6K_0" style="
                        height: 234px;
                        width: 438px;
                        left: 50px;
                        top: 0px;
                    "></div>
                </div>
            `
        ;
    }
    if (event && event.target.id == 'MD6K_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD6K_0.png">
                    <div class="redmagnifying" id="MD6L_0" style="
                        height: 264px;
                        width: 275px;
                        left: 230px;
                        top: 21px;
                    "></div>
                </div>
            `
        ;
    }
    if (event && event.target.id == 'MD6L_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD6L_0.png">
                    <div class="backpointer" id="MD6M_0" style="
                        height: 58px;
                        width: 536px;
                        left: 0px;
                        top: 234px;
                    "></div>
                    <div class="redmagnifying" id="MD6K_0" style="
                        height: 213px;
                        width: 268px;
                        left: 33px;
                        top: 21px;
                    "></div>
                </div>
            `
        ;
    }
    if (event && event.target.id == 'MD7C_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD7C_0.png">
                    <div class="backpointer" onclick="showOpenForgottenDrawer();" style="
                        height: 58px;
                        width: 536px;
                        left: 0px;
                        top: 234px;
                    "></div>
                    <div class="redmagnifying" id="MD7D_0" style="
                        height: 234px;
                        width: 130px;
                        left: 310px;
                        top: 0px;
                    "></div>
                </div>
            `
        ;
    }
    if (event && event.target.id == 'MD7D_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD7D_0.png">
                    <div class="backpointer" onclick="showOpenForgottenDrawer();" style="
                        height: 58px;
                        width: 536px;
                        left: 0px;
                        top: 234px;
                    "></div>
                    <div class="redmagnifying" id="MD7C_0" style="
                        height: 234px;
                        width: 130px;
                        left: 97px;
                        top: 0px;
                    "></div>
                </div>
            `
        ;
    }
    if (event && event.target.id == 'MD6E_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD6E_0.png">
                    <div class="backpointer" id="MD1R_0" style="
                        height: 58px;
                        width: 536px;
                        left: 0px;
                        top: 234px;
                    "></div>
                </div>
            `
        ;
    }
    if (event && event.target.id == 'MD3E_0') {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD3E_0.png">
                <div class="redmagnifying" id="MD6W_0" style="
                    height: 110px;
                    width: 146px;
                    left: 110px;
                    top: 115px;
                "></div>
                <div class="redmagnifying" id="MD3C_0" style="
                    height: 145px;
                    width: 156px;
                    left: 340px;
                    top: 25px;
                "></div>
                <div class="backpointer" id="goBackToSpinningRoom" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
            </div>
        `    
    }

    if (event && event.target.id == 'MD3C_0_close') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay onended="showClosedBasket(); clearTheAudio();" class="SoundEffects" id="currentAudio">
                    <source 
                        src="audio/lidclse.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }

    if (event && event.target.id == 'MD3C_0') {
        showClosedBasket();
    }

    if (event && event.target.id == 'willISeeRemote') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay onended="willIseeRemoteScreen(); clearTheAudio();" class="SoundEffects" id="currentAudio">
                    <source 
                        src="audio/lidopen.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }

    if (event && event.target.id == 'MD3N_0') {
        magazineUnderTheRemoteCover();
    }

    if (event && event.target.id == 'MD3N_0_close') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay onended="magazineUnderTheRemoteCover(); clearTheAudio();" class="SoundEffects" id="currentAudio">
                    <source 
                        src="audio/magazine.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }

    if (event && event.target.id == 'MD3O_0') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay onended="magazineUnderTheRemotePage(); clearTheAudio();" class="SoundEffects" id="currentAudio">
                    <source 
                        src="audio/magazine.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }

    if (event && event.target.id == 'MD6W_0') {
        openedTheAlbumScreenPage2();
    }

    if (event && event.target.id == 'MD6W_0_close') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay onended="openedTheAlbumScreenPage2(); clearTheAudio();" class="SoundEffects" id="currentAudio">
                    <source 
                        src="audio/wickclse.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }

    if (event && event.target.id == 'MD6X_0') {
        openedTheAlbumScreen();
    }

    if (event && event.target.id == 'MD6X_0_fromFurther') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay onended="openedTheAlbumScreen(); clearTheAudio();" class="SoundEffects" id="currentAudio">
                    <source 
                        src="audio/paper2.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }

    if (event && event.target.id == 'MD6X_0_open') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay onended="openedTheAlbumScreen(); clearTheAudio();" class="SoundEffects" id="currentAudio">
                    <source 
                        src="audio/wickopn.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }
    if (event && event.target.id == 'MD6Y_0') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay onended="openedTheAlbumScreenPage3(); clearTheAudio();" class="SoundEffects" id="currentAudio">
                    <source 
                        src="audio/paper2.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }
    if (event && event.target.id == 'MD6Z_0') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay onended="openedTheAlbumScreenPage4(); clearTheAudio();" class="SoundEffects" id="currentAudio">
                    <source 
                        src="audio/paper2.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }
    if (event && event.target.id == 'MD6V_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD6V_0.png">
                    <div class="backpointer" id="goBackToSpinningRoom" style="
                        height: 67px;
                        width: 536px;
                        left: 0px;
                        top: 225px;
                    "></div>
                    <div class="redmagnifying" id="MD6T_0" style="
                        height: 81px;
                        width: 131px;
                        left: 150px;
                        top: 85px;
                    "></div>
                </div>
            `
        ;
    }
    if (event && event.target.id == 'MD6T_0') {
        closedMagazine3();
    }
    if (event && event.target.id == 'MD6T_0_fromInside') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay onended="closedMagazine3(); clearTheAudio();" class="SoundEffects" id="currentAudio">
                    <source 
                        src="audio/magazine.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }
    if (event && event.target.id == 'MD6U_0_fromCover') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls autoplay onended="magazine3page1(); clearTheAudio();" class="SoundEffects" id="currentAudio">
                    <source 
                        src="audio/magazine.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    }
    if (event && event.target.id == 'MD6U_0') {
        magazine3page1();
    }
    if (event && event.target.id == 'MD6S_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD6S_0.png">
                    <div class="backpointer" id="MD6U_0" style="
                        height: 67px;
                        width: 536px;
                        left: 0px;
                        top: 225px;
                    "></div>
                </div>
            `
        ;
    }
    if (event && event.target.id == 'MD3S_0') {
    document
        .getElementById("video")
        .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/apartment/MD3S_0.png">
        <div class="backpointer" id="goBackToSpinningRoom" style="
            height: 67px;
            width: 536px;
            left: 0px;
            top: 225px;
        "></div>
        <div class="redmagnifying" id="MD3T_0" style="   
            height: 150px;
            width: 150px;
            top: 35px;
            left: 315px;
            ">
        </div>`
    }
    if (event && event.target.id == 'MD3P_0') {
    document
        .getElementById("video")
        .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/apartment/MD3P_0.png">
        <div class="backpointer" id="goBackToSpinningRoom" style="
            height: 37px;
            width: 536px;
            left: 0px;
            top: 255px;
        "></div>
        <div class="redmagnifying" id="MD3R_0" style="   
            height: 91px;
            width: 154px;
            top: 65px;
            left: 278px;
            ">
        </div>
        <div class="redmagnifying" id="MD3Q_0" style="
            height: 82px;
            width: 149px;
            top: 173px;
            left: 247px;
            ">
        </div>`    
    }
    if (event && event.target.id == 'ME1E_0') {
    document
        .getElementById("video")
        .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/apartment/ME1E_0.png">
        <div class="backpointer" id="goBackToSpinningRoom" style="
            height: 67px;
            width: 536px;
            left: 0px;
            top: 225px;
        "></div>
        <div class="redmagnifying" onclick="i = 10" id="goBackToSpinning" style="
            height: 225px;
            width: 320px;
            top: 0px;
            left: 120px;
            ">
        </div>`    
    }
    if (event && event.target.id == 'md1z_0') {
    document
        .getElementById("video")
        .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/apartment/md1z_0.png">
        <div class="backpointer" id="goBackToSpinningRoom" style="
            height: 37px;
            width: 536px;
            left: 0px;
            top: 255px;
        "></div>
        <div class="redmagnifying" id="MD3U_0" style="
            height: 102px;
            width: 279px;
            top: 153px;
            left: 137px;
            ">
        </div>`        
    }
    if (event && event.target.id == 'MD3U_0') {
    document
        .getElementById("video")
        .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/apartment/MD3U_0.png">
        <div class="backpointer" id="md1z_0" style="
            height: 67px;
            width: 536px;
            left: 0px;
            top: 225px;
        "></div>
        <div class="redmagnifying" id="MD3V_0" style="
            height: 152px;
            width: 103px;
            top: 45px;
            left: 147px;
            ">
        </div>  
        <div class="redmagnifying" id="MD3W_0" style="
            height: 120px;
            width: 132px;
            top: 68px;
            left: 285px;
            ">
        </div>
        <div class="redmagnifying" id="MD3Y_0" style="
            height: 123px;
            width: 104px;
            top: 105px;
            left: 432px;
            ">
        </div>`    
    }
    if (event && event.target.id == 'MD3V_0') {
    document
        .getElementById("video")
        .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/apartment/MD3V_0.png">
        <div class="backpointer" id="MD3U_0" style="
            height: 67px;
            width: 536px;
            left: 0px;
            top: 225px;
        "></div>`    
    }
    if (event && event.target.id == 'MD3W_0') {
    document
        .getElementById("video")
        .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/apartment/MD3W_0.png">
        <div class="backpointer" id="MD3U_0" style="
            height: 67px;
            width: 536px;
            left: 0px;
            top: 225px;
        "></div>`    
    }
    if (event && event.target.id == 'MD3Y_0') {
    document
        .getElementById("video")
        .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/apartment/MD3Y_0.png">
        <div class="backpointer" id="MD3U_0" style="
            height: 67px;
            width: 536px;
            left: 0px;
            top: 225px;
        "></div>`    
    }
    if (event && event.target.id == 'MD3Q_0') {
    document
        .getElementById("video")
        .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/apartment/MD3Q_0.png">
        <div class="backpointer" id="MD3P_0" style="
            height: 67px;
            width: 536px;
            left: 0px;
            top: 225px;
        "></div>`    
    }
    if (event && event.target.id == 'MD3R_0') {
    document
        .getElementById("video")
        .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/apartment/MD3R_0.png">
        <div class="backpointer" id="MD3P_0" style="
            height: 67px;
            width: 536px;
            left: 0px;
            top: 225px;
        "></div>`    
    }
    if (event && event.target.id == 'MD3T_0') {
    document
        .getElementById("video")
        .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/apartment/MD3T_0.png">
        <div class="backpointer" id="MD3S_0" style="
            height: 37px;
            width: 536px;
            left: 0px;
            top: 255px;
        "></div>`    
    }
    if (event && event.target.id == 'MD6Q_0') {
    document
        .getElementById("video")
        .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/apartment/MD6Q_0.png">
        <div class="backpointer" id="goBackToSpinningRoom" style="
            height: 37px;
            width: 536px;
            left: 0px;
            top: 255px;
        "></div>`    
    }
    if (event && event.target.id == 'MD6R_0') {
    document
        .getElementById("video")
        .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/apartment/MD6R_0.png">
        <div class="backpointer" id="goBackToSpinningRoom" style="
            height: 37px;
            width: 536px;
            left: 0px;
            top: 255px;
        "></div>`    
    }
    if (event && event.target.id == 'MD1P_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD1P_0.png">
                    <div class="backpointer" id="goBackToSpinningRoom" style="
                        height: 67px;
                        width: 536px;
                        left: 0px;
                        top: 225px;
                    "></div>
                    <div class="redmagnifying" onclick="usingTheTV();" style="
                        height: 215px;
                        width: 229px;
                        left: 149px;
                        top: 10px;
                    "></div>
                </div>
            `
        ;
    }
    if (event && event.target.id == 'MD8C_0') {
    document
        .getElementById("video")
        .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/apartment/MD8C_0.png">
        <div class="backpointer" id="goBackToSpinningRoom" style="
            height: 67px;
            width: 536px;
            left: 0px;
            top: 225px;
        "></div>
        <div class="redmagnifying" id="MD8A_0" style="
            height: 200px;
            width: 276px;
            top: 25px;
            left: 142px;
            ">
        </div>`    
    }
    if (event && event.target.id == 'MD8A_0') {
    document
        .getElementById("video")
        .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/apartment/MD8A_0.png">
        <div class="arrowdown" id="MD8B_0" style="
            height: 67px;
            width: 536px;
            left: 0px;
            top: 225px;
            ">
        </div>`    
    }
    if (event && event.target.id == 'MD8B_0') {
    document
        .getElementById("video")
        .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/apartment/MD8B_0.png">
        <div class="backpointer" id="MD8C_0" style="
            height: 67px;
            width: 536px;
            left: 0px;
            top: 225px;
            ">
        </div>
        <div class="arrowup" id="MD8A_0" style="
            height: 67px;
            width: 536px;
            left: 0px;
            top: 0px;
            ">
        </div>`  
    }
}


function closedMagazine3() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD6T_0.png">
                <div class="backpointer" id="MD6V_0" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
                <div class="redmagnifying" id="MD6U_0_fromCover" style="
                    height: 225px;
                    width: 178px;
                    left: 200px;
                    top: 0px;
                "></div>
            </div>
        `
    ;
}

function showBasketWithNoRemote() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD3G_0.png">
                <div class="redmagnifying" id="MD3C_0_close" style="
                    height: 58px;
                    width: 300px;
                    left: 118px;
                    top: 0px;
                "></div>
                <div class="redmagnifying" id="MD3N_0" style="
                    height: 90px;
                    width: 256px;
                    left: 140px;
                    top: 95px;
                ">
            </div>
        </div>
    `    
}

function magazine3page1() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD6U_0.png">
                <div class="redmagnifying" id="MD6T_0_fromInside" style="
                    height: 292px;
                    width: 140px;
                    left: 54px;
                    top: 0px;
                "></div>
                <div class="redmagnifying" id="MD6S_0" style="
                    height: 130px;
                    width: 213px;
                    left: 270px;
                    top: 0px;
                "></div>
            </div>
        `
    ;
}

function gettingTheRemoteControl() {
    acquiredRemoteControl = true;
    document.getElementById("inventoryclicksound").play();
    document.getElementById("inventory__place")
        .innerHTML = remoteInInventory + document.getElementById("inventory__place").innerHTML;
    setEffectsVolume();
    inventoryContains.push('remote');
}

function calendar() {
    let c = Math.floor(Math.random() * 10);
    if (c > 7) {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD6A_0.png">
                    <div class="backpointer" id="MD1S_0" style="
                        height: 58px;
                        width: 536px;
                        left: 0px;
                        top: 234px;
                    "></div>
                </div>
            `
        ;
    } else {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD6B_0.png">
                    <div class="backpointer" id="MD1S_0" style="
                        height: 58px;
                        width: 536px;
                        left: 0px;
                        top: 234px;
                    "></div>
                </div>
            `
        ;
    }
}

function showOpenForgottenDrawer() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD1T_0.png">
                <div class="backpointer" id="MD1R_0" style="
                    height: 58px;
                    width: 536px;
                    left: 0px;
                    top: 234px;
                "></div>
                <div class="redmagnifying" id="MD7C_0" style="
                    height: 68px;
                    width: 114px;
                    left: 240px;
                    top: 144px;
                "></div>
                <div class="redmagnifying" id="MD6M_0" style="
                    height: 68px;
                    width: 66px;
                    left: 160px;
                    top: 124px;
                "></div>
            </div>
        `
    ;
}




function usingTheTV() {
    if (onHandRightNow == 'remote') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD9V_0.png">
                    <div class="redmagnifying" onclick="turnOffTheTV();" style="
                        height: 270px;
                        width: 229px;
                        left: 149px;
                        top: 10px;
                        z-index: 5;
                    "></div>
                    <video playsinline autoplay controls mute loop style="
                        position: absolute;
                        top: 115px;
                        left: 178px;">
                        <source src="video/MDTV_1.webm" type="video/webm">
                    </video>
                </div>
            `
        ;
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls 
                    
                    autoplay 
                    loop
                    class="SoundEffects" 
                    id="currentAudio">
                    <source 
                        src="audio/noise1.wav" 
                        type="audio/mpeg">
                </audio>
                <audio controls 
                     
                    id="ICantOverTV">
                    <source 
                        src="audio/Icant.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
        setVoiceVolume();
        onHandRightNow = '';
        inventoryContains.push('remote');
        document.getElementById('inventory__place').innerHTML = remoteInInventory + document.getElementById('inventory__place').innerHTML;
        document.getElementById("inventoryclicksound").play();
        document.getElementById("pointers").href = "style/pointers_default.css";
    } else {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio controls 
                    
                    autoplay 
                    class="SoundOfVoice" 
                    id="currentAudio">
                    <source 
                        src="audio/Icant.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setVoiceVolume();
    }
}




function turnOffTheTV() {
    if (onHandRightNow == 'remote') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD1P_0.png">
                    <div class="backpointer" id="goBackToSpinningRoom" style="
                        height: 67px;
                        width: 536px;
                        left: 0px;
                        top: 225px;
                    "></div>
                    <div class="redmagnifying" onclick="usingTheTV();" style="
                        height: 215px;
                        width: 229px;
                        left: 149px;
                        top: 10px;
                    "></div>
                </div>
            `
        ;
        document
            .getElementById("media_elements")
            .innerHTML = ``
        ;
        onHandRightNow = '';
        inventoryContains.push('remote');
        document.getElementById('inventory__place').innerHTML = remoteInInventory + document.getElementById('inventory__place').innerHTML;
        document.getElementById("inventoryclicksound").play();
        document.getElementById("pointers").href = "style/pointers_default.css";
    } else {
        document
            .getElementById("ICantOverTV")
            .play();
    }
}

function showLetterFromEnvelope() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD6H_0.png">
                <div class="redmagnifying" id="MD6G_0_close" style="
                    height: 202px;
                    width: 358px;
                    left: 107px;
                    top: 69px;
                    rotate: 5deg;
                "></div>
            </div>
        `
    ;
}

function showEnvelopeAfterLetter() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD6G_0.png">
                <div class="backpointer" id="MD6F_0" style="
                    height: 58px;
                    width: 536px;
                    left: 0px;
                    top: 234px;
                "></div>
                <div class="redmagnifying" id="MD6H_0" style="
                    height: 88px;
                    width: 205px;
                    left: 172px;
                    top: 105px;
                "></div>
            </div>
        `
    ;
}

function showOpenedDrawer() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD6P_0.png">
                <div class="backpointer" id="MD6N_0_close" style="
                    height: 58px;
                    width: 536px;
                    left: 0px;
                    top: 234px;
                "></div>
                <div class="redmagnifying" id="MD6O_0_show" style="
                    height: 219px;
                    width: 180px;
                    left: 0px;
                    top: 15px;
                "></div>
            </div>
        `
    ;
}

function showClosedDrawer() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD6N_0.png">
                <div class="backpointer" id="MD1S_0" style="
                    height: 58px;
                    width: 536px;
                    left: 0px;
                    top: 234px;
                "></div>
                <div class="redmagnifying" id="MD6P_0_open" style="
                    height: 219px;
                    width: 120px;
                    left: 82px;
                    top: 15px;
                "></div>
            </div>
        `
    ;
}

function letterFromTallDrawer() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD6O_0.png">
                <div class="backpointer" id="MD6P_0_close" style="
                    height: 58px;
                    width: 536px;
                    left: 0px;
                    top: 234px;
                "></div>
            </div>
        `
    ;
}

function MattiesMomLetter2page() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD6J_0.png">
                <div class="redmagnifying" id="MD6I_0_back" style="
                    height: 292px;
                    width: 130px;
                    left: 55px;
                    top: 0px;
                "></div>
            </div>
        `
    ;
}

function MattiesMomLetter1page() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD6I_0.png">
                <div class="backpointer" id="MD6F_0" style="
                    height: 58px;
                    width: 536px;
                    left: 0px;
                    top: 234px;
                "></div>
                <div class="redmagnifying" id="MD6J_0" style="
                    height: 234px;
                    width: 130px;
                    left: 352px;
                    top: 0px;
                "></div>
            </div>
        `
    ;
}

function magazineUnderTheRemoteCover() {
    document
            .getElementById("video")
            .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD3N_0.png">
                <div class="backpointer" onclick="showBasketWithNoRemote()" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                    ">
                </div>
                <div class="redmagnifying" id="MD3O_0" style="
                    height: 225px;
                    width: 212px;
                    left: 157px;
                    top: 0px;
                    ">
                </div>
            </div>
        `  
}

function magazineUnderTheRemotePage() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD3O_0.png">
                <div class="redmagnifying" id="MD3N_0_close" style="
                    height: 292px;
                    width: 196px;
                    left: 68px;
                    top: 0px;
                    ">
                </div>
            </div>
        `  
    ;
}

function willIseeRemoteScreen() {
    if (acquiredRemoteControl == false) {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/apartment/MD3A_0.png">
                    <div class="redmagnifying" id="MD3C_0_close" style="
                        height: 58px;
                        width: 300px;
                        left: 118px;
                        top: 0px;
                    "></div>
                    <div class="redmagnifying" onclick="gettingTheRemoteControl(); showBasketWithNoRemote();" style="
                        height: 80px;
                        width: 196px;
                        left: 170px;
                        top: 95px;
                    "></div>
                </div>
            `
        ;
    } else if (acquiredRemoteControl == true) {
        showBasketWithNoRemote();
    }
}

function showClosedBasket() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD3C_0.png">
                <div class="backpointer" id="MD3E_0" style="
                    height: 58px;
                    width: 536px;
                    left: 0px;
                    top: 234px;
                "></div>
                <div class="redmagnifying" id="willISeeRemote" style="
                    height: 110px;
                    width: 146px;
                    left: 196px;
                    top: 124px;
                "></div>
            </div>
        `
    ;
}

function openedTheAlbumScreen() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD6X_0.png">
                <div class="redmagnifying" id="MD6Y_0" style="
                    height: 202px;
                    width: 185px;
                    left: 299px;
                    top: 26px;
                "></div>
                <div class="redmagnifying" id="MD6W_0_close" style="
                    height: 218px;
                    width: 146px;
                    left: 32px;
                    top: 42px;
                "></div>
            </div>
        `
    ;
}

function openedTheAlbumScreenPage2() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD6W_0.png">
                <div class="backpointer" id="MD3E_0" style="
                    height: 58px;
                    width: 536px;
                    left: 0px;
                    top: 234px;
                "></div>
                <div class="redmagnifying" id="MD6X_0_open" style="
                    height: 210px;
                    width: 206px;
                    left: 150px;
                    top: 15px;
                "></div>
            </div>
        `
    ;
}

function openedTheAlbumScreenPage3() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD6Y_0.png">
                <div class="redmagnifying" id="MD6Z_0" style="
                    height: 202px;
                    width: 185px;
                    left: 299px;
                    top: 26px;
                "></div>
                <div class="redmagnifying" id="MD6X_0_fromFurther" style="
                    height: 218px;
                    width: 146px;
                    left: 32px;
                    top: 42px;
                "></div>
            </div>
        `
    ;
}

function openedTheAlbumScreenPage4() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/apartment/MD6Z_0.png">
                <div class="redmagnifying" id="MD6Y_0" style="
                    height: 218px;
                    width: 146px;
                    left: 32px;
                    top: 42px;
                "></div>
            </div>
        `
    ;
}