
document
    .getElementById("wrapper")
    .addEventListener("click", seeingTheStudioEntrance);
function seeingTheStudioEntrance(event) {
    if (event && event.target.id == 'fromMapGoToTheStudio') {    
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                    <img src="pics/studio_hallways/SE0A_0.png">
                    <div class="forwardpointer" id="getInsideTheStudio" style="
                        height: 176px;
                        width: 178px;
                        top: 107px;
                        left: 178px;
                    "></div>
                </div>`;
        document
            .getElementById("getInsideTheStudio")
            .addEventListener("click", getInsideTheStudio);
    };
};

function getInsideTheStudio() {
    s = 0;
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SE1V_0.png">
                <div class="forwardpointer" id="exploringTheStudioDay" style="
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
            </div>`;
    document
        .getElementById("exploringTheStudioDay")
        .addEventListener("click", exploringTheStudioDay, false);
};


let SE1X_all = `
<div>
    <div id="activelocationspot">
    </div>
    <div id="turnleftincirclestudio1" class ="activesides activeleftside"></div>
    <div id="turnrightincirclestudio1" class ="activesides activerightside"></div>
</div>
<video id="talkToRalph" playsinline muted loop autoplay onclick="interaction_ralph()" style="
    display: none;">
    <source src="video/ralph.webm" type="video/webm">
</video>;`;

let SE1X_0 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_0.png">
    <div class="forwardpointer" id="beStoppedByRalph" style="
        height: 217px;
        width: 355px;
        top: 15px;
        left: 99px;
        ">
    </div>`;

let SE1X_1 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_1.png">
    <div class="forwardpointer" id="SE1W_0" style="
        height: 136px;
        width: 118px;
        top: 84px;
        left: 116px;
        ">
    </div>
    <div class="forwardpointer" id="beStoppedByRalph" style="
        height: 189px;
        width: 180px;
        top: 41px;
        left: 306px;
        ">
    </div>`;

let SE1X_2 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_2.png">
    <div class="forwardpointer" id="SE1W_0" style="
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
    <div class="forwardpointer" id="SE1G_0" style="
        height: 94px;
        width: 75px;
        top: 149px;
        left: 50px;
        ">
    </div>`;

let SE1X_7 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_7.png">
    <div class="forwardpointer" id="SE1G_0" style="
        height: 94px;
        width: 81px;
        top: 149px;
        left: 245px;
        ">
    </div>`;

let SE1X_8 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_8.png">
    <div class="forwardpointer" id="SE1G_0" style="
        height: 94px;
        width: 51px;
        top: 149px;
        left: 435px;
        ">
    </div>`;

let SE1X_9 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_9.png">
    <div class="forwardpointer" id="goToMap" style="
        height: 241px;
        width: 135px;
        top: 30px;
        left: 50px;
        ">
    </div>`;

let SE1X_10 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_10.png">
    <div class="forwardpointer" id="goToMap" style="
        height: 241px;
        width: 195px;
        top: 30px;
        left: 171px;
        ">
    </div>`;

let SE1X_11 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_11.png">
    <div class="forwardpointer" id="goToMap" style="
        height: 241px;
        width: 125px;
        top: 30px;
        left: 361px;
        ">
    </div>`;

let SE1X_12 = `<img id="circlingPicture" src="pics/studio_first_circle/SE1X_12.png">`;

let SE1X_13 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_13.png">
    <div class="forwardpointer" id="SE1H_0" style="
        height: 94px;
        width: 120px;
        top: 198px;
        left: 120px;
        ">
    </div>`;

let SE1X_14 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_14.png">
    <div class="forwardpointer" id="SE1H_0" style="
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
    <div class="forwardpointer" id="beStoppedByRalph" style="
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
    .addEventListener("mouseover", studio1Turning); 
async function studio1Turning(event) {
    if (event && event.target.id == 'turnleftincirclestudio1') {
        if (s > 18) {
            s = -1;
        };
        document
            .getElementById("activelocationspot")
            .innerHTML = sequenceOfScreensInStudio1[++s];
            console.log(s);
    };

    if (event && event.target.id == 'turnrightincirclestudio1') {
        if (s < 1) {
            s = 20;
        };
        document
            .getElementById("activelocationspot")
            .innerHTML = sequenceOfScreensInStudio1[--s];
            console.log(s);
    };

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
};

function exploringTheStudioDay() {
    document.getElementById("wholedialogue")
        .innerHTML = ``;
    document
        .getElementById("video")
        .innerHTML = SE1X_all;
    document
        .getElementById("activelocationspot")
        .innerHTML = sequenceOfScreensInStudio1[s]; 
};

function RalphJustLetUsIn() {
    document
        .getElementById("wholedialogue")
        .innerHTML = ``;
    document
        .getElementById("audio")
        .innerHTML = ``;
    document
        .getElementById("video")
        .innerHTML = `
            <div class="thisScreenThisTime">
            <img src="pics/studio_hallways/SE1R_0.png">
            <div class="backpointer" id="!!!" style="
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

    if (event && event.target.id == 'SE1J_0') {
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
    };

    if (event && event.target.id == 'SE1K_0') {
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
                <div class="redmagnifying" id="SE1J_0" style="
                    height: 292px;
                    width: 70px;
                    top: 0px;
                    left: 60px;
                "></div>`;
    };

    if (event && event.target.id == 'SE1L_0') {
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

    if (event && event.target.id == 'SE1M_0') {
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
                "></div>`;
    };

    if (event && event.target.id == 'SE1N_0') {
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
                <div class="redmagnifying" id="SE1M_0" style="
                    height: 292px;
                    width: 70px;
                    top: 0px;
                    left: 50px;
                "></div>`;
    };

    if (event && event.target.id == 'SE1O_0') {
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
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SE1R_0.png">
                <div class="backpointer" id="!!!" style="
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
                <div class="redmagnifying" id="SH2X_17" style="
                    height: 159px;
                    width: 112px;
                    top: 66px;
                    left: 86px;
                "></div>`;
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

    if (event && event.target.id == 'SH3A_0') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_hallways/SH3A_0.png">
                <div class="forwardpointer" id="SH1X_15" style="
                    height: 181px;
                    width: 206px;
                    top: 44px;
                    left: 167px;
                "></div>
                <div class="redmagnifying" id="SH1N_0" style="
                    height: 123px;
                    width: 133px;
                    top: 102px;
                    left: 403px;
                "></div>
                <div class="backpointer" onclick="z = 15; exploringTheStudio2Day();" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>`;
    };

    if (event && event.target.id == 'SH1X_15') {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="thisScreenThisTime">
                <img src="pics/studio_half_circle/SH1X_15.png">
                <div class="backpointer" id="!!!" style="
                    height: 67px;
                    width: 536px;
                    left: 0px;
                    top: 225px;
                "></div>`;
        if (hasWilliamPappasComplained == false) {
            document
                .getElementById("audio")
                .innerHTML = `
                    <audio onended="clearTheDialogueBox();" id="currentAudio" autoplay controls">
                    <source 
                        src="audio/Pap01.wav" 
                        type="audio/mpeg">
                    </audio>`;
            document.getElementById("wholedialogue")
                .innerHTML = `
                    <p class="dialogue__character">I don't care who he is. No one breaks a contract with Bill Pappas. I'll kill him before he runs out on me.</p>`;
            hasWilliamPappasComplained = true;
        };
    };
    
    if (event && event.target.id == 'beStoppedByRalph') {
        document
        .getElementById("audio")
        .innerHTML = `
            <audio onended="interaction_ralph()" id="currentAudio" autoplay controls">
            <source 
                src="audio/Ral01.wav" 
                type="audio/mpeg">
            </audio>`;
        document.getElementById("wholedialogue")
            .innerHTML = `
                <p class="dialogue__character">Can I help you?</p>`;
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
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_0.png">
    <div class="forwardpointer" id="beStoppedByRalph" style="
        height: 217px;
        width: 355px;
        top: 15px;
        left: 99px;
        ">
    </div>`;

let SH2X_1 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_1.png">
    <div class="forwardpointer" id="SE1W_0" style="
        height: 136px;
        width: 118px;
        top: 84px;
        left: 116px;
        ">
    </div>
    <div class="forwardpointer" id="beStoppedByRalph" style="
        height: 189px;
        width: 180px;
        top: 41px;
        left: 306px;
        ">
    </div>`;

let SH2X_2 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_2.png">
    <div class="forwardpointer" id="SE1W_0" style="
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

let SH2X_3 = `<img id="circlingPicture" src="pics/studio_second_circle/SH2X_3.png">`;
    // <video id="talkToRalph" playsinline mute loop autoplay style="
    //     position: absolute;
    //     top: 70px;
    //     left: 204px;
    //     width: 145px;">
    //     <source src="video/ralph.webm" type="video/webm">
    // </video>;

let SH2X_4 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_4.png">
    <div class="forwardpointer" id="SH3A_0" style="
        height: 183px;
        width: 177px;
        top: 44px;
        left: 50px;
        ">
    </div>`;

let SH2X_5 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_5.png">
    <div class="forwardpointer" id="SH3A_0" style="   
        height: 183px;
        width: 206px;
        top: 44px;
        left: 167px;
        ">
    </div>`;

let SH2X_6 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_6.png">
    <div class="forwardpointer" id="SH3A_0" style="
        height: 183px;
        width: 167px;
        top: 44px;
        left: 319px;
        ">
    </div>`;

let SH2X_7 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_7.png">
    <div class="forwardpointer" id="SE1G_0" style="
        height: 94px;
        width: 81px;
        top: 149px;
        left: 245px;
        ">
    </div>`;

let SH2X_8 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_8.png">
    <div class="forwardpointer" id="SE1G_0" style="
        height: 94px;
        width: 51px;
        top: 149px;
        left: 435px;
        ">
    </div>`;

let SH2X_9 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_9.png">
    <div class="forwardpointer" id="goToMap" style="
        height: 241px;
        width: 135px;
        top: 30px;
        left: 50px;
        ">
    </div>`;

let SH2X_10 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_10.png">
    <div class="forwardpointer" id="goToMap" style="
        height: 241px;
        width: 195px;
        top: 30px;
        left: 171px;
        ">
    </div>`;

let SH2X_11 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_11.png">
    <div class="forwardpointer" id="goToMap" style="
        height: 241px;
        width: 125px;
        top: 30px;
        left: 361px;
        ">
    </div>`;

let SH2X_12 = `<img id="circlingPicture" src="pics/studio_second_circle/SH2X_12.png">`;

let SH2X_13 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_13.png">
    <div class="forwardpointer" id="SE1H_0" style="
        height: 94px;
        width: 120px;
        top: 198px;
        left: 120px;
        ">
    </div>`;

let SH2X_14 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_14.png">`;

let SH2X_15 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_15.png">`;

let SH2X_16 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_16.png">`;

let SH2X_17 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_17.png">
    <div class="redmagnifying" id="SE1U_0" style="
        height: 68px;
        width: 119px;
        top: 110px;
        left: 251px;
        ">
    </div>`;

let SH2X_18 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_18.png">
    <div class="redmagnifying" id="SE1U_0" style="
        height: 68px;
        width: 40px;
        top: 110px;
        left: 446px;
        ">
    </div>`;

let SH2X_19 = `
    <img id="circlingPicture" src="pics/studio_second_circle/SH2X_19.png">
    <div class="forwardpointer" id="beStoppedByRalph" style="
        height: 189px;
        width: 210px;
        top: 41px;
        left: 50px;
        ">
    </div>`;

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
};


let z = 17;
document
    .getElementById("wrapper")
    .addEventListener("mouseover", studio2Turning); 
async function studio2Turning(event) {
    if (event && event.target.id == 'turnleftincirclestudio2') {
        if (z > 18) {
            z = -1;
        }
        document
            .getElementById("activelocationspot")
            .innerHTML = sequenceOfScreensInStudio2[++z];
            console.log(z);
    }
    if (event && event.target.id == 'turnrightincirclestudio2') {
        if (z < 1) {
            z = 20;
        }
        document
            .getElementById("activelocationspot")
            .innerHTML = sequenceOfScreensInStudio2[--z];
            console.log(z);
    }
}

function clearTheDialogueBox() {
    document.getElementById("wholedialogue")
    .innerHTML = ``;
}