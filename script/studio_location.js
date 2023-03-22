
document
    .getElementById("wrapper")
    .addEventListener("click", seeingTheStudioEntrance);
function seeingTheStudioEntrance(event) {
    if (event && event.target.id == 'fromMapGoToTheStudio' && myLocationRightNow != 2) {  
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio 
                    controls 
                    autoplay 
                    class="SoundOfVoice" 
                    onended="seeStudioEntrance(); 
                    myLocationRightNow = 2;
                    clearTheAudio();">
                    <source 
                        src="audio/tax02.wav" 
                        type="audio/mpeg">
                </audio>
        `
    ;
    setVoiceVolume();
    } else if (event && event.target.id == 'fromMapGoToTheStudio') {
        seeStudioEntrance();
    }
};

function seeStudioEntrance() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SE0A_0.png">
                <div class="backpointer" onclick="goBackToMap()" style="
                    height: 80px;
                    width: 536px;
                    top: 212px;
                    left: 0px;
                "></div>
                <div class="redmagnifying" id="getInsideTheStudio" style="
                    height: 176px;
                    width: 178px;
                    top: 107px;
                    left: 178px;
                "></div>
            </div>
        `
    ;
    document
        .getElementById("getInsideTheStudio")
        .addEventListener("click", getInsideTheStudio)
    ;
}

function getInsideTheStudio() {
    currentMusicFile.innerHTML = musicInTheStudio;
    setMusicVolume();
    s = 0;
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SE1V_0.png">
                <div class="redmagnifying" id="exploringTheStudioDay" style="
                    height: 172px;
                    width: 210px;
                    top: 40px;
                    left: 160px;
                "></div>
                <div class="backpointer" id="goToMap" style="
                    height: 80px;
                    width: 536px;
                    top: 212px;
                    left: 0px;
                "></div>
            </div>
        `
    ;
    document
        .getElementById("exploringTheStudioDay")
        .addEventListener("click", exploringTheStudioDay, false)
    ;
};


let SE1X_all = `
        <div>
            <div id="activelocationspot">
            </div>
            <div id="turnleftincirclestudio1" class ="activesides activeleftside"></div>
            <div id="turnrightincirclestudio1" class ="activesides activerightside"></div>
        </div>
        <video id="talkToRalph" playsinline muted loop autoplay onclick="interaction_ralph()">
            <source src="video/ralph.webm" type="video/webm">
        </video>;
    `
;

let SE1X_0 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_0.png">
    <div class="redmagnifying" id="beStoppedByRalph" style="
        height: 217px;
        width: 355px;
        top: 15px;
        left: 99px;
        ">
    </div>`;

let SE1X_1 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_1.png">
    <div class="redmagnifying" id="SE1W_0" style="
        height: 136px;
        width: 118px;
        top: 84px;
        left: 116px;
        ">
    </div>
    <div class="redmagnifying" id="beStoppedByRalph" style="
        height: 189px;
        width: 180px;
        top: 41px;
        left: 306px;
        ">
    </div>`;

let SE1X_2 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_2.png">
    <div class="redmagnifying" id="SE1W_0" style="
        height: 136px;
        width: 118px;
        top: 84px;
        left: 304px;
        ">
    </div>`;
    // <video id="talkToRalph" playsinline mute loop autoplay style="
    //     position: absolute;
    //     top: 70px;
    //     left: 0px;
    //     width: 145px;">
    //     <source src="video/ralph.webm" type="video/webm">
    // </video>

let SE1X_3 = `<img id="circlingPicture" src="pics/studio_first_circle/SE1X_3.png">`;
    // <video id="talkToRalph" playsinline mute loop autoplay style="
    //     position: absolute;
    //     top: 70px;
    //     left: 204px;
    //     width: 145px;">
    //     <source src="video/ralph.webm" type="video/webm">
    // </video>;

let SE1X_4 = `<img id="circlingPicture" src="pics/studio_first_circle/SE1X_4.png">`;
    // <video id="talkToRalph" playsinline mute loop autoplay style="
    //     position: absolute;
    //     top: 70px;
    //     left: 391px;
    //     width: 145px;">
    //     <source src="video/ralph.webm" type="video/webm">
    // </video>;

let SE1X_5 = `<img id="circlingPicture" src="pics/studio_first_circle/SE1X_5.png">`;

let SE1X_6 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_6.png">
    <div class="redmagnifying" id="SE1G_0" style="
        height: 94px;
        width: 75px;
        top: 149px;
        left: 50px;
        ">
    </div>`;

let SE1X_7 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_7.png">
    <div class="redmagnifying" id="SE1G_0" style="
        height: 94px;
        width: 81px;
        top: 149px;
        left: 245px;
        ">
    </div>`;

let SE1X_8 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_8.png">
    <div class="redmagnifying" id="SE1G_0" style="
        height: 94px;
        width: 51px;
        top: 149px;
        left: 435px;
        ">
    </div>`;

let SE1X_9 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_9.png">
    <div class="redmagnifying" id="goToMap" style="
        height: 241px;
        width: 135px;
        top: 30px;
        left: 50px;
        ">
    </div>`;

let SE1X_10 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_10.png">
    <div class="redmagnifying" id="goToMap" style="
        height: 241px;
        width: 195px;
        top: 30px;
        left: 171px;
        ">
    </div>`;

let SE1X_11 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_11.png">
    <div class="redmagnifying" id="goToMap" style="
        height: 241px;
        width: 125px;
        top: 30px;
        left: 361px;
        ">
    </div>`;

let SE1X_12 = `<img id="circlingPicture" src="pics/studio_first_circle/SE1X_12.png">`;

let SE1X_13 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_13.png">
    <div class="redmagnifying" id="SE1H_0" style="
        height: 94px;
        width: 120px;
        top: 198px;
        left: 120px;
        ">
    </div>`;

let SE1X_14 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_14.png">
    <div class="redmagnifying" id="SE1H_0" style="
        height: 94px;
        width: 120px;
        top: 198px;
        left: 310px;
        ">
    </div>`;

let SE1X_15 = `<img id="circlingPicture" src="pics/studio_first_circle/SE1X_15.png">`;

let SE1X_16 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_16.png">
    <div class="redmagnifying" id="SE1U_0" style="
        height: 68px;
        width: 119px;
        top: 110px;
        left: 60px;
        ">
    </div>`;

let SE1X_17 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_17.png">
    <div class="redmagnifying" id="SE1U_0" style="
        height: 68px;
        width: 119px;
        top: 110px;
        left: 251px;
        ">
    </div>`;

let SE1X_18 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_18.png">
    <div class="redmagnifying" id="SE1U_0" style="
        height: 68px;
        width: 40px;
        top: 110px;
        left: 446px;
        ">
    </div>`;

let SE1X_19 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_19.png">
    <div class="redmagnifying" id="beStoppedByRalph" style="
        height: 189px;
        width: 210px;
        top: 41px;
        left: 50px;
        ">
    </div>`;

let sequenceOfScreensInStudio1 = [SE1X_0, SE1X_1, SE1X_2, SE1X_3, SE1X_4, SE1X_5, SE1X_6, SE1X_7, SE1X_8, SE1X_9, SE1X_10, SE1X_11, SE1X_12, SE1X_13, SE1X_14, SE1X_15, SE1X_16, SE1X_17, SE1X_18, SE1X_19];



function exploringTheStudioDay() {
    document.getElementById("wholedialogue")
        .innerHTML = ``;
    document
        .getElementById("video")
        .innerHTML = ME1X_all;
    document
        .getElementById("activelocationspot")
        .innerHTML = sequenceOfScreensInHallway[i]; 
};


let s = 0;
document
    .getElementById("wrapper")
    .addEventListener("mousedown", startTheCycleInStudio1);
document
    .getElementById("wrapper")
    .addEventListener("mouseup", endTheCycleInStudio1);
async function startTheCycleInStudio1(event) {
    if (event && event.target.id == 'turnleftincirclestudio1') {
        isSidePressed = true;
        while (isSidePressed == true) {
            if (s > 18) {
                s = -1;
            }
            document
                .getElementById("activelocationspot")
                .innerHTML = sequenceOfScreensInStudio1[++s];
            console.log(s);

            if (s == 2) {
                if (document.getElementById("talkToRalph")) {
                    document
                        .getElementById("talkToRalph")
                        .style = `
                            position: absolute;
                            top: 70px;
                            left: 0px;
                            width: 145px;`;
                };
            } else if (s == 3) {
                document
                    .getElementById("talkToRalph")
                    .style = `
                        position: absolute;
                        top: 70px;
                        left: 204px;
                        width: 145px;`;
            } else if (s == 4) {
                document
                    .getElementById("talkToRalph")
                    .style = `
                        position: absolute;
                        top: 70px;
                        left: 391px;
                        width: 145px;`;
            } else {
                if (document
                        .getElementById("talkToRalph")) {
                    document
                        .getElementById("talkToRalph")
                        .style = `display: none;`;
                };
            };
            await delay(500);
        }
    }
    if (event && event.target.id == 'turnrightincirclestudio1') {
        isSidePressed = true;
        while (isSidePressed == true) {
            if (s < 1) {
                s = 20;
            }
            document
                .getElementById("activelocationspot")
                .innerHTML = sequenceOfScreensInStudio1[--s];
            console.log(s);
            if (document.getElementById("talkToRalph")) {
                if (s == 2) {
                    document
                        .getElementById("talkToRalph")
                        .style = `
                            position: absolute;
                            top: 70px;
                            left: 0px;
                            width: 145px;`;
                } else if (s == 3) {
                    document
                        .getElementById("talkToRalph")
                        .style = `
                            position: absolute;
                            top: 70px;
                            left: 200px;
                            width: 145px;`;
                } else if (s == 4) {
                    document
                        .getElementById("talkToRalph")
                        .style = `
                            position: absolute;
                            top: 70px;
                            left: 391px;
                            width: 145px;`;
                } else {
                    if (document
                            .getElementById("talkToRalph")) {
                        document
                            .getElementById("talkToRalph")
                            .style = `display: none;`;
                    };
                };
                await delay(500);
            }
        }
    }
}
function endTheCycleInStudio1() {
    isSidePressed = false;
}

function exploringTheStudioDay() {
    document.getElementById("wholedialogue")
        .innerHTML = ``;
    document
        .getElementById("video")
        .innerHTML = SE1X_all;
    if (s == 4) {
        document.getElementById('talkToRalph').style = `
            position: absolute;
            top: 70px;
            left: 391px;
            width: 145px;`;
    } else if (s == 3) {
        document.getElementById('talkToRalph').style = `
            position: absolute;
            top: 70px;
            left: 200px;
            width: 145px;`;
    } else if (s == 2) {
        document.getElementById('talkToRalph').style = `
            position: absolute;
            top: 70px;
            left: 0px;
            width: 145px;`;
    } else {
        document.getElementById('talkToRalph').style = `display: none;`
    }
    document
        .getElementById("activelocationspot")
        .innerHTML = sequenceOfScreensInStudio1[s]; 
};

function RalphJustLetUsIn() {
    document
        .getElementById("wholedialogue")
        .innerHTML = ``;
    document
        .getElementById("media_elements")
        .innerHTML = ``;
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
            <img src="pics/studio_hallways/SE1R_0.png">
            <div class="backpointer" onclick="s = 0; exploringTheStudioDay()" style="
                height: 67px;
                width: 536px;
                left: 0px;
                top: 225px;
            "></div>
            <div class="redmagnifying" id="SE1Z_0" style="
                height: 70px;
                width: 52px;
                top: 89px;
                left: 306px;
            "></div>
            <div class="redmagnifying" onclick="exploringTheStudio2Day()" id="SH2X_17" style="
                height: 159px;
                width: 112px;
                top: 66px;
                left: 86px;
            "></div>`;
};

document
    .getElementById("wrapper")
    .addEventListener("click", goToADifferentScreenInStudio1); 
function goToADifferentScreenInStudio1(event) {
    if (event && event.target.id == 'goBackToSpinningStudio1') {
        exploringTheStudioDay();
        if (s == 2) {
            if (document.getElementById("talkToRalph")) {
                document
                    .getElementById("talkToRalph")
                    .style = `
                        position: absolute;
                        top: 70px;
                        left: 0px;
                        width: 145px;`;
            };
        };
    };
   

document
    .getElementById("wrapper")
    .addEventListener("click", goToADifferentScreenInStudioHalf); 
function goToADifferentScreenInStudioHalf(event) {
    if (event && event.target.id == 'goBackToSpinningStudioHalf') {
        exploringTheHalfCircleDay();
        };
    };

    if (event && event.target.id == 'SE1W_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SE1W_0.png">
                <div class="backpointer" id="goBackToSpinningStudio1" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>`;
    };

    if (event && event.target.id == 'SE1H_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SE1H_0.png">
                <div class="redmagnifying" id="SE1J_0" style="
                    height: 110px;
                    width: 129px;
                    top: 55px;
                    left: 288px;
                "></div>
                <div class="backpointer" id="goBackToSpinningStudio1" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>`;
    };

    if (event && event.target.id == 'SE1J_0_fromInside') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio autoplay controls onended="magazine2Cover();" class="SoundEffects" id="currentAudio"">
                    <source 
                        src="audio/Magazine.wav" 
                        type="audio/mpeg">
                </audio>`
        setEffectsVolume();
    };

    if (event && event.target.id == 'SE1J_0') {
        magazine2Cover();
    };

    if (event && event.target.id == 'SE1K_0') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio autoplay controls onended="magazine2Page1();" class="SoundEffects" id="currentAudio"">
                    <source 
                        src="audio/Magazine.wav" 
                        type="audio/mpeg">
                </audio>`
        setEffectsVolume();
    };

    if (event && event.target.id == 'SE1L_0') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio autoplay controls onended="magazine2Page2();" class="SoundEffects" id="currentAudio"">
                    <source 
                        src="audio/Magazine.wav" 
                        type="audio/mpeg">
                </audio>`
        setEffectsVolume();
    };

    if (event && event.target.id == 'SE1G_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SE1G_0.png">
                <div class="redmagnifying" id="SE1M_0" style="
                    height: 94px;
                    width: 127px;
                    top: 102px;
                    left: 111px;
                "></div>
                <div class="backpointer" id="goBackToSpinningStudio1" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>`;
    };

    if (event && event.target.id == 'SE1M_0_fromInside') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio autoplay controls onended="magazineCover();" class="SoundEffects" id="currentAudio"">
                    <source 
                        src="audio/Magazine.wav" 
                        type="audio/mpeg">
                </audio>`
                setEffectsVolume();
    };

    if (event && event.target.id == 'SE1M_0') {
        magazineCover();
    };

    if (event && event.target.id == 'SE1N_0') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio autoplay controls onended="magazinePage1();" class="SoundEffects" id="currentAudio"">
                    <source 
                        src="audio/Magazine.wav" 
                        type="audio/mpeg">
                </audio>`
                setEffectsVolume();
    };

    if (event && event.target.id == 'SE1O_0') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio autoplay controls onended="magazinePage2();" class="SoundEffects" id="currentAudio"">
                    <source 
                        src="audio/Magazine.wav" 
                        type="audio/mpeg">
                </audio>`
                setEffectsVolume();
    };
    
    if (event && event.target.id == 'SE1U_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SE1U_0.png">
                <div class="backpointer" id="goBackToSpinningStudio1" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>`;
    };

    if (event && event.target.id == 'SE1R_0') {
        RalphJustLetUsIn();
    };

    if (event && event.target.id == 'SE1Z_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SE1Z_0.png">
                <div class="backpointer" id="SE1R_0" style="
                    height: 67px;
                    width: 159px;
                    left: 0px;
                    top: 225px;
                "></div><div class="backpointer" id="SE1R_0" style="
                    height: 67px;
                    width: 159px;
                    left: 377px;
                    top: 225px;
                "></div><div class="redmagnifying" id="SE2B_0" style="
                    height: 47px;
                    width: 99px;
                    left: 220px;
                    top: 245px;
                "></div>`;
    };

    if (event && event.target.id == 'SE2B_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SE2B_0.png">
                <div class="backpointer" id="SE1Z_0" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>`;
    };

    if (event && event.target.id == 'SH1N_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SH1N_0.png">
                <div class="backpointer" id="SH3A_0" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>`;
    };

    if (event && event.target.id == 'SH1N_0_fromHalf') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SH1N_0.png">
                <div class="backpointer" id="goBackToSpinningStudioHalf" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>`;
    };

    if (event && event.target.id == 'SH3A_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SH3A_0.png">
                <div class="redmagnifying" id="exploringTheHalfCircleDay" style="
                    height: 181px;
                    width: 206px;
                    top: 44px;
                    left: 167px;
                "></div>
                <div class="backpointer" onclick="z = 5; exploringTheStudio2Day();" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>`;
    };

    if (event && event.target.id == 'exploringTheHalfCircleDay') {
        h = 15;
        exploringTheHalfCircleDay();
        if (hasWilliamPappasComplained == false) {
            document
                .getElementById("media_elements")
                .innerHTML = `
                    <audio autoplay controls class="SoundOfVoice" onended="clearTheDialogueBox(); clearTheAudio();" id="currentAudio">
                    <source 
                        src="audio/Pap01.wav" 
                        type="audio/mpeg">
                    </audio>`;
                    setVoiceVolume();
            document.getElementById("wholedialogue")
                .innerHTML = `
                    <p class="dialogue__character">
                        I don't care who he is. No one breaks a contract with Bill Pappas. I'll kill him before he runs out on me.
                    </p>`;
            hasWilliamPappasComplained = true;
        };
    };
    
    if (event && event.target.id == 'beStoppedByRalph') {
        document
        .getElementById("media_elements")
        .innerHTML = `
            <audio autoplay controls onended="clearTheAudio(); clearTheDialogueBox();" class="SoundOfVoice" id="currentAudio">
            <source 
                src="audio/Ral01.wav" 
                type="audio/mpeg">
            </audio>`;
            setVoiceVolume();
        document.getElementById("wholedialogue")
            .innerHTML = `
                <p class="dialogue__character">Can I help you?</p>`;
    };

    if (event && event.target.id == 'SH3H_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SH3H_0.png">
                <div class="redmagnifying" onclick="z = 15; exploringTheStudio2Day()" style="
                    height: 163px;
                    width: 196px;
                    left: 170px;
                    top: 62px;
                "></div>
                <div class="backpointer" id="goBackToSpinningStudioHalf" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>`;
    };

    if (event && event.target.id == 'StDoAc') {
        if (isTheShowOnAir == true) {
            document
                .getElementById("video")
                .innerHTML = `
                    <div class="thisScreenThisTime">
                    <img src="pics/studio_hallways/SH1K_0.png">
                    <div id="swipeInStudio" class="redmagnifying" style="
                        height: 169px;
                        width: 64px;
                        left: 316px;
                        top: 90px;
                        z-index: 2;
                    "></div>
                    <div id="SH1E_0" class="redmagnifying" style="
                        height: 109px;
                        width: 104px;
                        left: 200px;
                        top: 90px;
                    "></div>
                    <div class="backpointer" onclick="exploringTheStudio2Day();" style="
                        height: 67px;
                        width: 536px;
                        left: 0px;
                        top: 225px;
                    "></div>
                `
            ;
        } else {
            document
                .getElementById("video")
                .innerHTML = `
                    <div class="thisScreenThisTime">
                    <img src="pics/studio_hallways/SH1L_0.png">
                    <div id="SH1E_0" class="redmagnifying" style="
                        height: 109px;
                        width: 104px;
                        left: 200px;
                        top: 90px;
                    "></div>
                    <div class="backpointer" onclick="exploringTheStudio2Day();" style="
                        height: 67px;
                        width: 536px;
                        left: 0px;
                        top: 225px;
                    "></div>
                `
            ;
        };
    }

    if (event && event.target.id == 'SH1E_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SH1E_0.png">
                <div class="backpointer" id="StDoAc" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
            `
        ;
    };

    if (event && event.target.id == 'swipeInStudio') {
        if (onHandRightNow == 'pass') {
            if (isTheShowOnAir == true) {
                document
                    .getElementById("media_elements")
                    .innerHTML = `
                        <audio autoplay="" controls="" class="SoundEffects" id="currentAudio">
                            <source src="audio/SLIDER3.wav" type="audio/mpeg">
                        </audio>
                    `;
                    setEffectsVolume()
                ;
            } else {
                // TODO: what does happen in this scenario?
            }
        } else {
            document
                .getElementById("media_elements")
                .innerHTML = `
                    <audio autoplay="" controls="" onended="clearTheAudio();" class="SoundOfVoice" id="currentAudio">
                        <source src="audio/Icant.wav" type="audio/mpeg">
                    </audio>
                `;
                setVoiceVolume()
            ;
        }
    };

    if (event && event.target.id == 'SH1R_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SH1R_0.png">
                <div class="backpointer" onclick="h=10;exploringTheHalfCircleDay()" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
            `
        ;
    };

    if (event && event.target.id == 'SH1M_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SH1M_0.png">
                <div class="backpointer" onclick="exploringTheHalfCircleDay();" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
            `
        ;
    }

    if (event && event.target.id == 'SH2B_0') {
        mattieSaidItsOpen = false;
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/studio_hallways/SH2B_0.png">
                    <div class="backpointer" onclick="h=10; exploringTheHalfCircleDay()" style="
                        height: 67px;
                        width: 536px;
                        left: 0px;
                        top: 225px;
                    "></div>
                    <div class="redmagnifying" id="SH2C_0" style="
                        height: 109px;
                        width: 104px;
                        left: 200px;
                        top: 90px;
                    "></div>
                    <div class="redmagnifying" id="SH1B_0" style="
                        height: 219px;
                        width: 54px;
                        left: 60px;
                        top: 50px;
                    "></div>
                    <div class="redmagnifying" id="SH1D_0" style="
                        height: 122px;
                        width: 30px;
                        left: 157px;
                        top: 96px;
                    "></div>
                </div>
            `
        ;
    };

    if (event && event.target.id == 'SH2G_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SH2G_0.png">
                <div class="backpointer" id="SH2B_0" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
                <div class="redmagnifying" onclick="h = 0; exploringTheHalfCircleDay();" style="
                    height: 109px;
                    width: 123px;
                    left: 200px;
                    top: 90px;
                "></div>
            `
        ;
    };

    if (event && event.target.id == 'SH2C_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/studio_hallways/SH2C_0.png">
                    <div class="backpointer" id="SH2B_0" style="
                        height: 67px;
                        width: 536px;
                        left: 0px;
                        top: 225px;
                    "></div>
                    <div class="redmagnifying" id="SH3D_0" style="
                        height: 267px;
                        width: 193px;
                        left: 47px;
                        top: 0px;
                    "></div>
                </div>
            `
        ;
    };

    if (event && event.target.id == 'SH1F_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/studio_hallways/SH1F_0.png">
                    <div class="backpointer" id="SH2C_0" style="
                        height: 67px;
                        width: 536px;
                        left: 0px;
                        top: 225px;
                    "></div>
                    <div class="redmagnifying" id="SH2G_0" style="
                        height: 109px;
                        width: 123px;
                        left: 200px;
                        top: 90px;
                    "></div>
                    <div class="redmagnifying" id="SH1B_0" style="
                        height: 115px;
                        width: 17px;
                        left: 348px;
                        top: 79px;
                    "></div>
                </div>
            `
        ;
    };

    if (event && event.target.id == 'SH1B_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/studio_hallways/SH1B_0.png">
                    <div class="backpointer" id="SH2B_0" style="
                        height: 67px;
                        width: 116px;
                        left: 0px;
                        top: 225px;
                    "></div>
                    <div class="redmagnifying" id="knockingOnMattiesDoor" style="
                        height: 169px;
                        width: 203px;
                        left: 170px;
                        top: 10px;
                    "></div>
                    <div class="backpointer" id="SH2B_0" style="
                        height: 67px;
                        width: 346px;
                        left: 190px;
                        top: 225px;
                    "></div>
                    <div class="theendpointer" id="!!!" style="
                        height: 67px;
                        width: 74px;
                        left: 116px;
                        top: 225px;
                    "></div>
                </div>
            `
        ;
    }

    if (event && event.target.id == 'knockingOnMattiesDoor') {
        if (mattieSaidItsOpen == false) {
            document
                .getElementById("media_elements")
                .innerHTML = `
                    <audio 
                        controls 
                        autoplay 
                        class="SoundOfVoice" 
                        onended="clearTheAudio(); mattieSaidItsOpen = true;">
                        <source 
                            src="audio/Mv19.wav" 
                            type="audio/mpeg">
                    </audio>
                    <audio 
                        controls 
                        autoplay 
                        class="SoundEffects">
                        <source 
                            src="audio/knock.wav" 
                            type="audio/mpeg">
                    </audio>
                `
            ;
            mattieSaidItsOpen = true;
        } else {
            document
                .getElementById("media_elements")
                .innerHTML = `
                    <audio 
                        controls 
                        autoplay 
                        class="SoundOfVoice" 
                        onended="clearTheAudio(); mattieSaidItsOpen = true;">
                        <source 
                            src="audio/knock.wav" 
                            type="audio/mpeg">
                    </audio>
                `
            ;
        }
        setVoiceVolume();
        setEffectsVolume();
    }

    if (event && event.target.id == 'knockingOnPropDoor') {
        if (propSaidItsOpen == false) {
            document
                .getElementById("media_elements")
                .innerHTML = `
                    <audio 
                        controls 
                        autoplay 
                        class="SoundOfVoice" 
                        onended="clearTheAudio(); propSaidItsOpen = true;">
                        <source 
                            src="audio/Pv01.wav" 
                            type="audio/mpeg">
                    </audio>
                    <audio 
                        controls 
                        autoplay 
                        class="SoundEffects">
                        <source 
                            src="audio/knock.wav" 
                            type="audio/mpeg">
                    </audio>
                `
            ;
            propSaidItsOpen = true;
        } else {
            document
                .getElementById("media_elements")
                .innerHTML = `
                    <audio 
                        controls 
                        autoplay 
                        class="SoundOfVoice" 
                        onended="clearTheAudio(); propSaidItsOpen = true;">
                        <source 
                            src="audio/knock.wav" 
                            type="audio/mpeg">
                    </audio>
                `
            ;
        }
        setVoiceVolume();
        setEffectsVolume();
    }

    if (event && event.target.id == 'SH1D_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/studio_hallways/SH1D_0.png">
                    <div class="backpointer" id="SH2B_0" style="
                        height: 67px;
                        width: 346px;
                        left: 0px;
                        top: 225px;
                    "></div>
                    <div class="redmagnifying" id="knockingOnRicksDoor" style="
                        height: 169px;
                        width: 203px;
                        left: 170px;
                        top: 10px;
                    "></div>
                    <div class="backpointer" id="SH2B_0" style="
                        height: 67px;
                        width: 116px;
                        left: 420px;
                        top: 225px;
                    "></div>
                    <div class="theendpointer" id="!!!" style="
                        height: 67px;
                        width: 74px;
                        left: 346px;
                        top: 225px;
                    "></div>
                </div>
            `
        ;
    };

    if (event && event.target.id == 'knockingOnRicksDoor') {
        document
            .getElementById("media_elements")
            .innerHTML = `
                <audio 
                    controls 
                    autoplay
                    class="SoundEffects"
                    onended="clearTheAudio();">
                    <source 
                        src="audio/knock.wav" 
                        type="audio/mpeg">
                </audio>
            `
        ;
        setEffectsVolume();
    };

    if (event && event.target.id == 'SH3D_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SH3D_0.png">
                <div class="backpointer" id="SH2C_0" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
                <div class="redmagnifying" onclick="z=17; goBackToMap(); currentMusicFile.innerHTML = musicOnTheMapScreen; setMusicVolume(); setEffectsVolume();" style="
                    height: 205px;
                    width: 50px;
                    left: 240px;
                    top: 20px;
                "></div>
            `
        ;
    }; 

    if (event && event.target.id == 'SH3E_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SH3E_0.png">
                <div class="backpointer" id="SH3D_0" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
                <div class="redmagnifying" id="SH1F_0" style="
                    height: 225px;
                    width: 173px;
                    left: 200px;
                    top: 0px;
                "></div>
                <div class="redmagnifying" id="SH1Q_0" style="
                    height: 67px;
                    width: 71px;
                    left: 465px;
                    top: 94px;
                "></div>
            `
        ;
    };

    if (event && event.target.id == 'SH1Q_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SH1Q_0.png">
                <div class="backpointer" id="SH3E_0" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
            `
        ;
    };

    if (event && event.target.id == 'SH3I_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SH3I_0.png">
                <div class="backpointer" onclick="z = 15; exploringTheStudio2Day();" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
                <div class="redmagnifying" onclick="g = 0; exploringTheHalfCircle2Day();" style="
                    height: 121px;
                    width: 181px;
                    left: 173px;
                    top: 90px;
                "></div>
            `
        ;
    };

    if (event && event.target.id == 'SH3K_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SH3K_0.png">
                <div class="backpointer" onclick="g = 0; exploringTheHalfCircle2Day();" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
                <div class="redmagnifying" onclick="z = 5; exploringTheStudio2Day();" style="
                    height: 121px;
                    width: 181px;
                    left: 173px;
                    top: 90px;
                "></div>
            `
        ;
    };

    if (event && event.target.id == 'SH1O_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SH1O_0.png">
                <div class="backpointer" onclick="exploringTheHalfCircle2Day();" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
            `
        ;
    };

    if (event && event.target.id == 'SH1P_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SH1P_0.png">
                <div class="backpointer" onclick="exploringTheHalfCircle2Day();" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
            `
        ;
    };

    if (event && event.target.id == 'SH1S_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/studio_hallways/SH1S_0.png">
                    <div class="backpointer" onclick="exploringTheHalfCircle2Day();" style="
                        height: 67px;
                        width: 536px;
                        left: 0px;
                        top: 225px;
                    "></div>
                </div>
            `
        ;
    };

    if (event && event.target.id == 'SH1U_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/studio_hallways/SH1U_0.png">
                    <div class="backpointer" onclick="propSaidItsOpen = false; exploringTheHalfCircle2Day();" style="
                        height: 67px;
                        width: 106px;
                        left: 0px;
                        top: 225px;
                    "></div>
                    <div class="backpointer" onclick="propSaidItsOpen = false; exploringTheHalfCircle2Day();" style="
                        height: 67px;
                        width: 336px;
                        left: 200px;
                        top: 225px;
                    "></div>
                    <div class="redmagnifying" id="knockingOnPropDoor" style="
                        height: 177px;
                        width: 336px;
                        left: 100px;
                        top: 0px;
                    "></div>
                    <div class="theendpointer" id="!!!" style="
                        height: 67px;
                        width: 94px;
                        left: 106px;
                        top: 225px;
                    "></div>
                </div>
            `
        ;
    };

    if (event && event.target.id == 'SH1G_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/studio_hallways/SH1G_0.png">
                    <div class="backpointer" onclick="exploringTheHalfCircle2Day();" style="
                        height: 67px;
                        width: 346px;
                        left: 0px;
                        top: 225px;
                    "></div>
                    <div class="redmagnifying" id="knockingOnRicksDoor" style="
                        height: 169px;
                        width: 203px;
                        left: 170px;
                        top: 10px;
                    "></div>
                    <div class="backpointer" onclick="exploringTheHalfCircle2Day();" style="
                        height: 67px;
                        width: 116px;
                        left: 420px;
                        top: 225px;
                    "></div>
                    <div class="theendpointer" id="!!!" style="
                        height: 67px;
                        width: 74px;
                        left: 346px;
                        top: 225px;
                    "></div>
                </div>
            `
        ;
    };
};







let SH2X_all = `
    <div>
        <div id="activelocationspot">
        </div>
        <div id="turnleftincirclestudio2" class ="activesides activeleftside"></div>
        <div id="turnrightincirclestudio2" class ="activesides activerightside"></div>
    </div>`;

let SH2X_0 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_0.png">`;

let SH2X_1 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_1.png">`;

let SH2X_2 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_2.png">`;

let SH2X_3 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_3.png">`;

let SH2X_4 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_4.png">
    <div class="redmagnifying" id="SH3A_0" style="
        height: 183px;
        width: 177px;
        top: 44px;
        left: 50px;
        ">
    </div>`;

let SH2X_5 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_5.png">
    <div class="redmagnifying" id="SH3A_0" style="   
        height: 183px;
        width: 206px;
        top: 44px;
        left: 167px;
        ">
    </div>`;

let SH2X_6 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_6.png">
    <div class="redmagnifying" id="SH3A_0" style="
        height: 183px;
        width: 167px;
        top: 44px;
        left: 319px;
        ">
    </div>`;

let SH2X_7 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_7.png">`;

let SH2X_8 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_8.png">`;

let SH2X_9 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_9.png">
    <div class="redmagnifying" onclick="z = 17; s = 10; exploringTheStudioDay()" style="
        height: 163px;
        width: 168px;
        top: 42px;
        left: 50px;
        ">
    </div>`;

let SH2X_10 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_10.png">
    <div class="redmagnifying" onclick="z = 17; s = 10; exploringTheStudioDay()" style="
        height: 163px;
        width: 168px;
        top: 42px;
        left: 184px;
        ">
    </div>`;

let SH2X_11 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_11.png">
    <div class="redmagnifying" onclick="z = 17; s = 10; exploringTheStudioDay()" style="
        height: 163px;
        width: 168px;
        top: 42px;
        left: 318px;
        ">
    </div>`;

let SH2X_12 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_12.png">`;

let SH2X_13 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_13.png">`;

let SH2X_14 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_14.png">
    <div class="redmagnifying" id="SH3I_0" style="
        width: 127px;
        height: 95px;
        top: 95px;
        left: 63px;
    "></div>`;

let SH2X_15 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_15.png">
    <div class="redmagnifying" id="SH3I_0" style="
        width: 127px;
        height: 95px;
        top: 95px;
        left: 203px;
    "></div>`;

let SH2X_16 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_16.png">
    <div class="redmagnifying" id="SH3I_0" style="
        width: 127px;
        height: 95px;
        top: 95px;
        left: 333px;
    "></div>`;

let SH2X_17 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_17.png">
    <div class="redmagnifying" id="StDoAc" style="
        width: 77px;
        height: 95px;
        top: 115px;
        left: 122px;
        z-index: 3;
    "></div>`;

let SH2X_18 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_18.png">
    <div class="redmagnifying" id="StDoAc" style="
        width: 77px;
        height: 95px;
        top: 115px;
        left: 258px;
        z-index: 3;
    "></div>`;

let SH2X_19 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_19.png">
    <div class="redmagnifying" id="StDoAc" style="
        width: 77px;
        height: 95px;
        top: 115px;
        left: 395px;
        z-index: 3;
    "></div>`;

let sequenceOfScreensInStudio2 = [SH2X_0, SH2X_1, SH2X_2, SH2X_3, SH2X_4, SH2X_5, SH2X_6, SH2X_7, SH2X_8, SH2X_9, SH2X_10, SH2X_11, SH2X_12, SH2X_13, SH2X_14, SH2X_15, SH2X_16, SH2X_17, SH2X_18, SH2X_19];



function exploringTheStudio2Day() {
    document.getElementById("wholedialogue")
        .innerHTML = ``;
    document
        .getElementById("video")
        .innerHTML = SH2X_all;
    document
        .getElementById("activelocationspot")
        .innerHTML = sequenceOfScreensInStudio2[z]; 
    if (isTheShowOnAir == true) {
        if (z == 17) {
            document
                .getElementById("activelocationspot")
                .innerHTML = document
                .getElementById("activelocationspot")
                .innerHTML + `
                    <img id="onair_17" src="pics/studio_second_circle/onair_17.png" style="
                        position: absolute;
                        left: 143px;
                        top: 128px;
                    ">
                `
            ;
        } else if (z == 18 && isTheShowOnAir == true) {
            document
                .getElementById("activelocationspot")
                .innerHTML = document
                .getElementById("activelocationspot")
                .innerHTML + `
                    <img id="onair_18" src="pics/studio_second_circle/onair_18.png" style="
                        position: absolute;
                        left: 277px;
                        top: 129px;
                    ">
                `
            ;
        } else if (z == 19 && isTheShowOnAir == true) {
            document
                .getElementById("activelocationspot")
                .innerHTML = document
                .getElementById("activelocationspot")
                .innerHTML + `
                    <img id="onair_19" src="pics/studio_second_circle/onair_19.png" style="
                        position: absolute;
                        left: 408px;
                        top: 122px;
                    ">
                `
            ;
        }}
    };

let z = 17;
document
    .getElementById("wrapper")
    .addEventListener("mousedown", startTheCycleInStudio2);
document
    .getElementById("wrapper")
    .addEventListener("mouseup", endTheCycleInStudio2);
async function startTheCycleInStudio2(event) {
    if (event && event.target.id == 'turnleftincirclestudio2') {
        isSidePressed = true;
        while (isSidePressed == true) {
            if (z > 18) {
                z = -1;
            };
            document
                .getElementById("activelocationspot")
                .innerHTML = sequenceOfScreensInStudio2[++z];
            if (isTheShowOnAir == true) {
                if (z == 16) {
                    document
                        .getElementById("activelocationspot")
                        .innerHTML += `<img id="onair_16" src="pics/studio_second_circle/onair_16.png" style="
                            position: absolute;
                            left: 0px;
                            top: 120px;
                        ">`
                }
                if (z == 17) {
                    document
                        .getElementById("activelocationspot")
                        .innerHTML += `<img id="onair_17" src="pics/studio_second_circle/onair_17.png" style="
                            position: absolute;
                            left: 143px;
                            top: 128px;
                        ">`
                }
                if (z == 18) {
                    document
                        .getElementById("activelocationspot")
                        .innerHTML += `<img id="onair_18" src="pics/studio_second_circle/onair_18.png" style="
                            position: absolute;
                            left: 277px;
                            top: 129px;
                        ">`
                }
                if (z == 19) {
                    document
                        .getElementById("activelocationspot")
                        .innerHTML += `<img id="onair_19" src="pics/studio_second_circle/onair_19.png" style="
                            position: absolute;
                            left: 408px;
                            top: 122px;
                        ">`
                }
            }
            console.log(z);
            await delay(500);
        }
    } else if (event && event.target.id == 'turnrightincirclestudio2') {
        isSidePressed = true;
        while (isSidePressed == true) {
            if (z < 1) {
                z = 20;
            };
            document
                .getElementById("activelocationspot")
                .innerHTML = sequenceOfScreensInStudio2[--z];
            if (isTheShowOnAir == true) {
                if (z == 16) {
                    document
                        .getElementById("activelocationspot")
                        .innerHTML += `<img id="onair_16" src="pics/studio_second_circle/onair_16.png" style="
                            position: absolute;
                            left: 0px;
                            top: 120px;
                        ">`
                }
                if (z == 17) {
                    document
                        .getElementById("activelocationspot")
                        .innerHTML += `<img id="onair_17" src="pics/studio_second_circle/onair_17.png" style="
                            position: absolute;
                            left: 143px;
                            top: 128px;
                        ">`
                }
                if (z == 18) {
                    document
                        .getElementById("activelocationspot")
                        .innerHTML += `<img id="onair_18" src="pics/studio_second_circle/onair_18.png" style="
                            position: absolute;
                            left: 277px;
                            top: 129px;
                        ">`
                }
                if (z == 19) {
                    document
                        .getElementById("activelocationspot")
                        .innerHTML += `<img id="onair_19" src="pics/studio_second_circle/onair_19.png" style="
                            position: absolute;
                            left: 408px;
                            top: 122px;
                        ">`
                }
            }
            console.log(z);
            await delay(500);
        }
    }
}
function endTheCycleInStudio2() {
    isSidePressed = false;
}

function clearTheDialogueBox() {
    document.getElementById("wholedialogue")
    .innerHTML = ``;
}

function clearTheAudio() {
    document.getElementById("media_elements")
    .innerHTML = ``;
}














let SH1X_all = `
    <div>
        <div id="activelocationspot">
        </div>
        <div id="turnleftincirclehalf" class ="activesides activeleftside"></div>
        <div id="turnrightincirclehalf" class ="activesides activerightside"></div>
    </div>`;

let SH1X_0 = `
    <img id="circlingPicture" src="pics/studio_half_circle/SH1X_0.png">
    <div id="turnrightincirclehalf" class ="greymagnifying greymagnifyingright"></div>`;

let SH1X_1 = `
    <img id="circlingPicture" src="pics/studio_half_circle/SH1X_1.png">`;

let SH1X_2 = `
    <img id="circlingPicture" src="pics/studio_half_circle/SH1X_2.png">`;

let SH1X_3 = `
    <img id="circlingPicture" src="pics/studio_half_circle/SH1X_3.png">`;

let SH1X_4 = `
    <img id="circlingPicture" src="pics/studio_half_circle/SH1X_4.png">
    <div class="redmagnifying" id="SH3H_0" style="
        height: 122px;
        width: 152px;
        top: 80px;
        left: 56px;
        ">
    </div>`;

let SH1X_5 = `
    <img id="circlingPicture" src="pics/studio_half_circle/SH1X_5.png">
    <div class="redmagnifying" id="SH3H_0" style="
        height: 122px;
        width: 152px;
        top: 80px;
        left: 190px;
        ">
    </div>
    <div class="redmagnifying" id="SH1N_0_fromHalf" style="
        height: 89px;
        width: 73px;
        top: 120px;
        left: 93px;
    "></div>`;

let SH1X_6 = `
    <img id="circlingPicture" src="pics/studio_half_circle/SH1X_6.png">
    <div class="redmagnifying" id="SH3H_0" style="
        height: 122px;
        width: 152px;
        top: 80px;
        left: 328px;
        ">
    </div>
    <div class="redmagnifying" id="SH1N_0_fromHalf" style="
        height: 89px;
        width: 73px;
        top: 120px;
        left: 230px;
    "></div>`;

let SH1X_7 = `
    <img id="circlingPicture" src="pics/studio_half_circle/SH1X_7.png">
    <div class="redmagnifying" id="SH1N_0_fromHalf" style="
        height: 89px;
        width: 73px;
        top: 120px;
        left: 366px;
    "></div>`;

let SH1X_8 = `
    <img id="circlingPicture" src="pics/studio_half_circle/SH1X_8.png">
    <div class="redmagnifying" id="SH1M_0" style="
        height: 74px;
        width: 50px;
        top: 123px;
        left: 86px;
    "></div>`;

let SH1X_9 = `
    <img id="circlingPicture" src="pics/studio_half_circle/SH1X_9.png">
    <div class="redmagnifying" id="SH1M_0" style="
        height: 74px;
        width: 50px;
        top: 123px;
        left: 223px;
    "></div>
    <div class="redmagnifying" id="SH2B_0" style="
        height: 92px;
        width: 122px;
        top: 97px;
        left: 70px;
    "></div>`;

let SH1X_10 = `
    <img id="circlingPicture" src="pics/studio_half_circle/SH1X_10.png">
    <div class="redmagnifying" id="SH1M_0" style="
        height: 74px;
        width: 50px;
        top: 123px;
        left: 358px;
    "></div>
    <div class="redmagnifying" id="SH2B_0" style="
        height: 92px;
        width: 122px;
        top: 97px;
        left: 206px;
    "></div>`;

let SH1X_11 = `
    <img id="circlingPicture" src="pics/studio_half_circle/SH1X_11.png">
    <div class="redmagnifying" id="SH2B_0" style="
        height: 92px;
        width: 122px;
        top: 97px;
        left: 340px;
    "></div>
    <div class="redmagnifying" id="SH1R_0" style="
        height: 59px;
        width: 48px;
        top: 106px;
        left: 50px;
    "></div>`;

let SH1X_12 = `
    <img id="circlingPicture" src="pics/studio_half_circle/SH1X_12.png">
    <div class="redmagnifying" id="SH1R_0" style="
        height: 59px;
        width: 71px;
        top: 106px;
        left: 169px;
    "></div>`;

let SH1X_13 = `
    <img id="circlingPicture" src="pics/studio_half_circle/SH1X_13.png">
    <div class="redmagnifying" id="SH1R_0" style="
        height: 59px;
        width: 71px;
        top: 106px;
        left: 303px;
    "></div>`;

let SH1X_14 = `
    <img id="circlingPicture" src="pics/studio_half_circle/SH1X_14.png">
    <div class="redmagnifying" id="SH1R_0" style="
        height: 59px;
        width: 41px;
        top: 106px;
        left: 445px;
    "></div>`;

let SH1X_15 = `
    <img id="circlingPicture" src="pics/studio_half_circle/SH1X_15.png">
    <div id="turnleftincirclehalf" class ="greymagnifying greymagnifyingleft"></div>`;

let sequenceOfScreensInTheHalf = [SH1X_0, SH1X_1, SH1X_2, SH1X_3, SH1X_4, SH1X_5, SH1X_6, SH1X_7, SH1X_8, SH1X_9, SH1X_10, SH1X_11, SH1X_12, SH1X_13, SH1X_14, SH1X_15];




function exploringTheHalfCircleDay() {
    document.getElementById("wholedialogue")
        .innerHTML = ``;
    document
        .getElementById("video")
        .innerHTML = SH1X_all;
    document
        .getElementById("activelocationspot")
        .innerHTML = sequenceOfScreensInTheHalf[h]; 
};

let h = 6;
document
    .getElementById("wrapper")
    .addEventListener("mousedown", startTheCycleInHalfACircleStudio);
document
    .getElementById("wrapper")
    .addEventListener("mouseup", endTheCycleInHalfACircleStudio);
async function startTheCycleInHalfACircleStudio(event) {
    if (event && event.target.id == 'turnleftincirclehalf') {
        isSidePressed = true;
        while (isSidePressed == true) {
            if (h > 14) {
                return;
                // or break; in this case doesn't really matter. 
                // Although return in this case is better because 
                // it doesn't check if the next condition is true.
            }
            document
                .getElementById("activelocationspot")
                .innerHTML = sequenceOfScreensInTheHalf[++h];
            console.log(h);
            await delay(500);
        }
    } else if (event && event.target.id == 'turnrightincirclehalf') {
        isSidePressed = true;
        while (isSidePressed == true) {
            if (h < 1) {
                return;
                // here doesn't matter since there are no conditions further.
            }
            document
                .getElementById("activelocationspot")
                .innerHTML = sequenceOfScreensInTheHalf[--h];
            console.log(h);
            await delay(500);
        }
    }
}
function endTheCycleInHalfACircleStudio() {
    isSidePressed = false;
}










let SH3X_all = `
    <div>
        <div id="activelocationspot">
        </div>
        <div id="turnleftincirclehalf2" class ="activesides activeleftside"></div>
        <div id="turnrightincirclehalf2" class ="activesides activerightside"></div>
    </div>`;

let SH3X_0 = `
    <img id="circlingPicture" src="pics/studio_half_circle2/SH3X_0.png">
    <div id="turnrightincirclehalf2" class ="greymagnifying greymagnifyingright"></div>`;

let SH3X_1 = `
    <img id="circlingPicture" src="pics/studio_half_circle2/SH3X_1.png">
    <div id="SH1S_0" class="redmagnifying" style="
        width: 43px;
        height: 58px;
        left: 50px;
        top: 106px;
    "></div>`;

let SH3X_2 = `
    <img id="circlingPicture" src="pics/studio_half_circle2/SH3X_2.png">
    <div id="SH1S_0" class="redmagnifying" style="
        width: 68px;
        height: 58px;
        left: 166px;
        top: 106px;
    "></div>`;

let SH3X_3 = `
    <img id="circlingPicture" src="pics/studio_half_circle2/SH3X_3.png">
    <div id="SH1S_0" class="redmagnifying" style="
        width: 68px;
        height: 58px;
        left: 298px;
        top: 106px;
    "></div>
    <div id="SH1G_0" class="redmagnifying" style="
        width: 48px;
        height: 218px;
        left: 134px;
        top: 58px;
    "></div>`;

let SH3X_4 = `
    <img id="circlingPicture" src="pics/studio_half_circle2/SH3X_4.png">
    <div id="SH1S_0" class="redmagnifying" style="
        width: 48px;
        height: 58px;
        left: 438px;
        top: 106px;
    "></div>
    <div id="SH1G_0" class="redmagnifying" style="
        width: 48px;
        height: 218px;
        left: 266px;
        top: 58px;
    "></div>
    <div id="SH1U_0" class="redmagnifying" style="
        width: 52px;
        height: 78px;
        left: 108px;
        top: 111px;
    "></div>`;

let SH3X_5 = `
    <img id="circlingPicture" src="pics/studio_half_circle2/SH3X_5.png">
    <div id="SH1P_0" class="redmagnifying" style="
        width: 55px;
        height: 78px;
        left: 126px;
        top: 121px;
    "></div>
    <div id="SH1G_0" class="redmagnifying" style="
        width: 48px;
        height: 218px;
        left: 406px;
        top: 58px;
    "></div>
    <div id="SH1U_0" class="redmagnifying" style="
        width: 52px;
        height: 78px;
        left: 245px;
        top: 111px;
    "></div>`;

let SH3X_6 = `
    <img id="circlingPicture" src="pics/studio_half_circle2/SH3X_6.png">
    <div id="SH1P_0" class="redmagnifying" style="
        width: 55px;
        height: 78px;
        left: 259px;
        top: 121px;
    "></div>
    <div id="SH1U_0" class="redmagnifying" style="
        width: 52px;
        height: 78px;
        left: 380px;
        top: 111px;
    "></div>`;

let SH3X_7 = `
    <img id="circlingPicture" src="pics/studio_half_circle2/SH3X_7.png">
    <div id="SH1P_0" class="redmagnifying" style="
        width: 55px;
        height: 78px;
        left: 398px;
        top: 121px;
    "></div>`;

let SH3X_8 = `
    <img id="circlingPicture" src="pics/studio_half_circle2/SH3X_8.png">
    <div id="SH1O_0" class="redmagnifying" style="
        width: 73px;
        height: 93px;
        left: 99px;
        top: 118px;
    "></div>`;

let SH3X_9 = `
    <img id="circlingPicture" src="pics/studio_half_circle2/SH3X_9.png">
    <div id="SH1O_0" class="redmagnifying" style="
        width: 73px;
        height: 93px;
        left: 235px;
        top: 118px;
    "></div>
    <div class="redmagnifying" id="SH3K_0" style="
        width: 110px;
        height: 90px;
        left: 74px;
        top: 100px;
    "></div>`;

let SH3X_10 = `
    <img id="circlingPicture" src="pics/studio_half_circle2/SH3X_10.png">
    <div id="SH1O_0" class="redmagnifying" style="
        width: 73px;
        height: 93px;
        left: 370px;
        top: 118px;
    "></div>
    <div class="redmagnifying" id="SH3K_0" style="
        width: 110px;
        height: 90px;
        left: 214px;
        top: 100px;
    "></div>`;

let SH3X_11 = `
    <img id="circlingPicture" src="pics/studio_half_circle2/SH3X_11.png">
    <div class="redmagnifying" id="SH3K_0" style="
        width: 110px;
        height: 90px;
        left: 350px;
        top: 100px;
    "></div>`;

let SH3X_12 = `
    <img id="circlingPicture" src="pics/studio_half_circle2/SH3X_12.png">`;

let SH3X_13 = `
    <img id="circlingPicture" src="pics/studio_half_circle2/SH3X_13.png">`;

let SH3X_14 = `
    <img id="circlingPicture" src="pics/studio_half_circle2/SH3X_14.png">`;

let SH3X_15 = `
    <img id="circlingPicture" src="pics/studio_half_circle2/SH3X_15.png">
    <div id="turnleftincirclehalf2" class ="greymagnifying greymagnifyingleft"></div>`;

let sequenceOfScreensInTheHalf2 = [SH3X_0, SH3X_1, SH3X_2, SH3X_3, SH3X_4, SH3X_5, SH3X_6, SH3X_7, SH3X_8, SH3X_9, SH3X_10, SH3X_11, SH3X_12, SH3X_13, SH3X_14, SH3X_15];




function exploringTheHalfCircle2Day() {
    document.getElementById("wholedialogue")
        .innerHTML = ``;
    document
        .getElementById("video")
        .innerHTML = SH3X_all;
    document
        .getElementById("activelocationspot")
        .innerHTML = sequenceOfScreensInTheHalf2[g]; 
};

let g = 0;
document
    .getElementById("wrapper")
    .addEventListener("mousedown", startTheCycleInHalfACircleStudio2);
document
    .getElementById("wrapper")
    .addEventListener("mouseup", endTheCycleInHalfACircleStudio2);
async function startTheCycleInHalfACircleStudio2(event) {
    if (event && event.target.id == 'turnleftincirclehalf2') {
        isSidePressed = true;
        while (isSidePressed == true) {
            if (g > 14) {
                return;
                // or break; in this case doesn't really matter. 
                // Although return in this case is better because 
                // it doesn't check if the next condition is true.
            }
            document
                .getElementById("activelocationspot")
                .innerHTML = sequenceOfScreensInTheHalf2[++g];
            console.log(g);
            await delay(500);
        }
    } else if (event && event.target.id == 'turnrightincirclehalf2') {
        isSidePressed = true;
        while (isSidePressed == true) {
            if (g < 1) {
                return;
                // here doesn't matter since there are no conditions further.
            }
            document
                .getElementById("activelocationspot")
                .innerHTML = sequenceOfScreensInTheHalf2[--g];
            console.log(g);
            await delay(500);
        }
    }
}
function endTheCycleInHalfACircleStudio2() {
    isSidePressed = false;
}





function magazineCover() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SE1M_0.png">
                <div class="redmagnifying" id="SE1N_0" style="
                    height: 225px;
                    width: 225px;
                    top: 0px;
                    left: 157px;
                "></div>
                <div class="backpointer" id="SE1G_0" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>
            </div>`;
    }

function magazinePage1() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SE1N_0.png">
                <div class="redmagnifying" id="SE1O_0" style="
                    height: 292px;
                    width: 129px;
                    top: 0px;
                    left: 358px;
                "></div>
                <div class="redmagnifying" id="SE1M_0_fromInside" style="
                    height: 292px;
                    width: 70px;
                    top: 0px;
                    left: 50px;
                "></div>
            </div>`;
}


function magazinePage2() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
            <img src="pics/studio_hallways/SE1O_0.png">
            <div class="redmagnifying" id="SE1N_0" style="
                height: 292px;
                width: 130px;
                top: 0px;
                left: 48px;
            "></div>`;
}

function magazine2Page1() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
            <img src="pics/studio_hallways/SE1K_0.png">
            <div class="redmagnifying" id="SE1L_0" style="
                height: 292px;
                width: 129px;
                top: 0px;
                left: 348px;
            "></div>
            <div class="redmagnifying" id="SE1J_0_fromInside" style="
                height: 292px;
                width: 70px;
                top: 0px;
                left: 60px;
            "></div>`;
};

function magazine2Page2() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
            <img src="pics/studio_hallways/SE1L_0.png">
            <div class="redmagnifying" id="SE1K_0" style="
                height: 292px;
                width: 70px;
                top: 0px;
                left: 60px;
            "></div>`;
}

function magazine2Cover() {
    document
    .getElementById("video")
    .innerHTML = `
        <div class="thisScreenThisTime">
        <img src="pics/studio_hallways/SE1J_0.png">
        <div class="redmagnifying" id="SE1K_0" style="
            height: 225px;
            width: 224px;
            top: 0px;
            left: 150px;
        "></div>
        <div class="backpointer" id="SE1H_0" style="
            height: 67px;
            width: 536px;
            left: 0px;
            top: 225px;
        "></div>`;
}