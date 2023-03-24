document
.getElementById("wrapper")
.addEventListener("click", goToMap); 

function goToMap(event) {
    if (event.target.id == 'goToMap') {
        if (haveISpokenWithMattie == false) {
            map1();
        }
        if (haveISpokenWithMattie == true) {
            if (doIKnowDwaynePlace == false) {
                map2()
            } else if (doIKnowDwaynePlace == true) {
                map3();
            }
        }
        currentMusicFile.innerHTML = musicOnTheMapScreen;
        setMusicVolume();
        setEffectsVolume();
    }
}

function goBackToMap() {
    if (haveISpokenWithMattie == false) {
        document
            .getElementById("video")
            .innerHTML = `
                <div class="map1logics" style="position: relative;">
                    <img src="pics/map1.png">
                    <div class="redmagnifying" id="fromMapGoToTheApartment" style="
                        height: 90px;
                        width: 240px;
                        top: 50px;
                        left: 280px;
                    "></div>
                </div>
            `
        ;
    }
    if (haveISpokenWithMattie == true) {
        if (doIKnowDwaynePlace == false) {
            map2()
        } else if (doIKnowDwaynePlace == true) {
            map3();
        }
    }
}

function map1() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="map1logics" style="position: relative;">
                <img src="pics/map1.png">
                <div class="redmagnifying" id="fromMapGoToTheApartment" style="
                    height: 90px;
                    width: 240px;
                    top: 50px;
                    left: 280px;
                "></div>
            </div>
        `
    ;
    currentMusicFile.innerHTML = musicOnTheMapScreen;
    setMusicVolume();
    setEffectsVolume();
}
function map2() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="map2logics" style="position: relative;">
                <img src="pics/map2.png">
                <div class="preload_images_studio"></div>
                <div class="redmagnifying" id="fromMapGoToTheApartment" style="
                    height: 90px;
                    width: 240px;
                    top: 50px;
                    left: 280px;
                "></div>
                <div class="redmagnifying" id="fromMapGoToTheStudio" style="
                    height: 90px;
                    width: 240px;
                    top: 15px;
                    left: 3px;
                "></div>
            </div>
        `
    ;
}
function map3() {
    document
        .getElementById("video")
        .innerHTML = `
            <div class="map3logics" style="position: relative;">
                <img src="pics/map3.png">
                <div class="redmagnifying" id="fromMapGoToTheApartment" style="
                    height: 90px;
                    width: 240px;
                    top: 50px;
                    left: 280px;
                "></div>
                <div class="redmagnifying" id="fromMapGoToTheStudio" style="
                    height: 90px;
                    width: 240px;
                    top: 15px;
                    left: 3px;
                "></div>
                <div class="redmagnifying" id="fromMapGoToDwaynePlace" style="
                    height: 90px;
                    width: 240px;
                    top: 50px;
                    left: 280px;
                "></div>
            </div>
        `
    ;
}