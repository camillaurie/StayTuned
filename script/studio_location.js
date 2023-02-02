
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
                </div>
            `
        document
            .getElementById("getInsideTheStudio")
            .addEventListener("click", getInsideTheStudio);
    }
}

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
        </div>
    `
    document
        .getElementById("exploringTheStudioDay")
        .addEventListener("click", exploringTheStudioDay, false);
}


let SE1X_all = `
<div>
    <div id="activelocationspot">
    </div>
    <div id="turnleftincirclestudio1" class ="activesides activeleftside"></div>
    <div id="turnrightincirclestudio1" class ="activesides activerightside"></div>
</div>
<video id="talkToRalph" playsinline mute loop autoplay style="
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
        width: 180px;
        top: 41px;
        left: 306px;
        ">
    </div>`;

let sequenceOfScreensInStudio1 = [SE1X_0, SE1X_1, SE1X_2, SE1X_3, SE1X_4, SE1X_5, SE1X_6, SE1X_7, SE1X_8, SE1X_9, SE1X_10, SE1X_11, SE1X_12, SE1X_13, SE1X_14, SE1X_15, SE1X_16, SE1X_17, SE1X_18, SE1X_19];



function exploringTheStudioDay() {
    document.getElementById("wholedialogue")
        .innerHTML = ``
    document
        .getElementById("video")
        .innerHTML = ME1X_all;
        document
            .getElementById("activelocationspot")
            .innerHTML = sequenceOfScreensInHallway[i]; 
}


let s = 0;
document
    .getElementById("wrapper")
    .addEventListener("mouseover", studio1Turning); 
async function studio1Turning(event) {
    if (event && event.target.id == 'turnleftincirclestudio1') {
        if (s > 18) {
            s = -1;
        }
        document
            .getElementById("activelocationspot")
            .innerHTML = sequenceOfScreensInStudio1[++s];
            console.log(s);
    }
    if (event && event.target.id == 'turnrightincirclestudio1') {
        if (s < 1) {
            s = 20;
        }
        document
            .getElementById("activelocationspot")
            .innerHTML = sequenceOfScreensInStudio1[--s];
            console.log(s);
    }
    if (s == 2) {
        document
            .getElementById("talkToRalph")
            .style = `
                position: absolute;
                top: 70px;
                left: 0px;
                width: 145px;`
    } else if (s == 3) {
        document
            .getElementById("talkToRalph")
            .style = `
                position: absolute;
                top: 70px;
                left: 204px;
                width: 145px;`
    } else if (s == 4) {
        document
            .getElementById("talkToRalph")
            .style = `
                position: absolute;
                top: 70px;
                left: 391px;
                width: 145px;`
    } else {
        document
            .getElementById("talkToRalph")
            .style = `
                display: none;`
    }
}

function exploringTheStudioDay() {
    document.getElementById("wholedialogue")
        .innerHTML = ``
    document
        .getElementById("video")
        .innerHTML = SE1X_all;
        document
            .getElementById("activelocationspot")
            .innerHTML = sequenceOfScreensInStudio1[s]; 
}


document
    .getElementById("wrapper")
    .addEventListener("click", goToADifferentScreenInStudio1); 
function goToADifferentScreenInStudio1(event) {
    if (event && event.target.id == 'goBackToSpinningStudio1') {
        console.log('d')
        exploringTheStudioDay();
    }

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
            "></div>`    
    }

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
            "></div>`    
    }

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
            "></div>`   
    }

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
            "></div>`
    }

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
            "></div>`
    }

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
            "></div>`
    }

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
            "></div>`
    }

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
            "></div>`
    }

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
            "></div>`
    }

    
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
            "></div>`
    }
}