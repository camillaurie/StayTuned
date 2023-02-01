
document
.getElementById("wrapper")
.addEventListener("click", knockingOnTheStudioDoor);
function knockingOnTheStudioDoor(event) {
if (event && event.target.id == 'fromMapGoToTheStudio') {
    console.log('knicking');
    
    document
    .getElementById("video")
    .innerHTML = `
        <div class="thisScreenThisTime">
            <img src="pics/studio_hallways/SE0A_0.png">
            <div class="forwardpointer" id="frontDoorOfTheStudio" style="
                height: 190px;
                width: 130px;
                top: 50px;
                left: 280px;
            "></div>
        </div>
    `
    document
    .getElementById("frontDoorOfTheStudio")
    .addEventListener("click", invitationIntoTheStudio);
}
}

function invitationIntoTheStudio() {
    console.log('invitation');
    document
    .getElementById("video")
    .innerHTML = `
        <div class="thisScreenThisTime">
            <img src="pics/studio_hallways/SE1V_0.png">
            <div class="forwardpointer" id="enterTheStudio" style="
                height: 190px;
                width: 130px;
                top: 50px;
                left: 280px;
            "></div>
        </div>
    `
}


let SE1X_all = `
<div>
    <div id="activelocationspot">
    </div>
    <div id="turnleftincirclestudio1" class ="activesides activeleftside"></div>
    <div id="turnrightincirclestudio1" class ="activesides activerightside"></div>
</div>`;

let SE1X_0 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_0.png">
    <div class="forwardpointer" id="!!!" style="
        height: 211px;
        width: 165px;
        top: 7px;
        left: 88px;
        ">
    </div>
    `;

let SE1X_1 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_1.png">
    <div class="forwardpointer" id="!!!" style="
        height: 205px;
        width: 144px;
        top: 12px;
        left: 220px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 185px;
        width: 129px;
        top: 37px;
        left: 50px;
        ">
    </div>
    `;

let SE1X_2 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_2.png">
    <div class="forwardpointer" id="!!!" style="
        height: 215px;
        width: 154px;
        top: 4px;
        left: 332px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 176px;
        width: 160px;
        top: 34px;
        left: 142px;
        ">
    </div>
    `;

let SE1X_3 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_3.png">
    <div class="forwardpointer" id="!!!" style="
        height: 99px;
        width: 127px;
        top: 70px;
        left: 96px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 193px;
        width: 142px;
        top: 31px;
        left: 269px;
        ">
    </div>`;

let SE1X_4 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_4.png">
    <div class="forwardpointer" id="!!!" style="
        height: 99px;
        width: 126px;
        top: 70px;
        left: 69px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 99px;
        width: 115px;
        top: 70px;
        left: 227px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 209px;
        width: 114px;
        top: 16px;
        left: 372px;
        ">
    </div>`;

let SE1X_5 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_5.png">
    <div class="forwardpointer" id="!!!" style="
        height: 99px;
        width: 154px;
        top: 70px;
        left: 172px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 99px;
        width: 154px;
        top: 70px;
        left: 326px;
        ">
    </div>`;

let SE1X_6 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_6.png">
    <div class="forwardpointer" id="!!!" style="
        height: 99px;
        width: 154px;
        top: 70px;
        left: 299px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 74px;
        width: 74px;
        top: 218px;
        left: 79px;
        ">
    </div>`;

let SE1X_7 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_7.png">
    <div class="forwardpointer" id="!!!" style="
        height: 83px;
        width: 165px;
        top: 111px;
        left: 96px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 74px;
        width: 74px;
        top: 218px;
        left: 198px;
        ">
    </div>
    `;

let SE1X_8 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_8.png">
    <div class="forwardpointer" id="!!!" style="
        height: 83px;
        width: 162px;
        top: 111px;
        left: 218px;">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 91px;
        width: 115px;
        top: 162px;
        left: 50px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 74px;
        width: 74px;
        top: 218px;
        left: 299px;
        ">
    </div>`;

let SE1X_9 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_9.png">
    <div class="forwardpointer" id="!!!" style="
        height: 83px;
        width: 165px;
        top: 111px;
        left: 321px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 91px;
        width: 115px;
        top: 153px;
        left: 153px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 74px;
        width: 74px;
        top: 218px;
        left: 412px;
        ">
    </div>`;

let SE1X_10 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_10.png">
    <div class="forwardpointer" id="!!!" style="
        height: 91px;
        width: 115px;
        top: 162px;
        left: 266px;
        ">
    </div>`;

let SE1X_11 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_11.png">
    <div class="forwardpointer" id="!!!" style="
        height: 91px;
        width: 115px;
        top: 174px;
        left: 371px;
        ">
    </div>
    `;

let SE1X_12 = `<img id="circlingPicture" src="pics/studio_first_circle/SE1X_12.png">`;

let SE1X_13 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_13.png">
    <div class="forwardpointer" id="!!!" style="
        height: 74px;
        width: 136px;
        top: 218px;
        left: 50px;
        ">
    </div>
    `;

let SE1X_14 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_14.png">
    <div class="forwardpointer" id="!!!" style="
        height: 54px;
        width: 158px;
        top: 238px;
        left: 123px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 78px;
        width: 97px;
        top: 160px;
        left: 50px;
        ">
    </div>
    `;

let SE1X_15 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_15.png">
    <div class="forwardpointer" id="!!!" style="
        height: 64px;
        width: 164px;
        top: 228px;
        left: 232px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 185px;
        width: 76px;
        top: 38px;
        left: 89px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 75px;
        width: 87px;
        top: 153px;
        left: 172px;
        ">
    </div>
    `;

let SE1X_16 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_16.png">
    <div class="forwardpointer" id="!!!" style="
        height: 64px;
        width: 115px;
        top: 228px;
        left: 371px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 208px;
        width: 100px;
        top: 20px;
        left: 40px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 173px;
        width: 73px;
        top: 41px;
        left: 211px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 117px;
        width: 87px;
        top: 153px;
        left: 284px;
        ">
    </div>
    `;

let SE1X_17 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_17.png">
    <div class="forwardpointer" id="!!!" style="
        height: 210px;
        width: 92px;
        top: 12px;
        left: 168px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 187px;
        width: 94px;
        top: 36px;
        left: 313px;
        ">
    </div>
    <div class="forwardpointer" id="!!!" style="
        height: 117px;
        width: 79px;
        top: 153px;
        left: 407px;
        ">
    </div>
    `;

let SE1X_18 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_18.png">
    <div class="forwardpointer" id="!!!" style="
        height: 205px;
        width: 93px;
        top: 12px;
        left: 283px;
        ">
    </div>
    `;

let SE1X_19 = `
    <img id="circlingPicture" src="pics/studio_first_circle/SE1X_19.png">
    `;

let sequenceOfScreensInStudio1 = [SE1X_0, SE1X_1, SE1X_2, SE1X_3, SE1X_4, SE1X_5, SE1X_6, SE1X_7, SE1X_8, SE1X_9, SE1X_10, SE1X_11, SE1X_12, SE1X_13, SE1X_14, SE1X_15, SE1X_16, SE1X_17, SE1X_18, SE1X_19];



let s = 6;
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
