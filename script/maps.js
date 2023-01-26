document
.getElementById("wrapper")
.addEventListener("click", goToMap); 

function goToMap(event) {
    if (event.target.id == 'goToMap') {
        if (haveISpokenWithMattie == false) {
            map1();
        }
    }
}



function map1() {
    document
    .getElementById("video")
    .innerHTML = `
        <div class="map1logics" style="position: relative;">
            <img src="pics/map1.png">
            <div class="activemapspot" id="fromMapGoToTheApartment" style="
                height: 90px;
                width: 240px;
                top: 50px;
                left: 280px;
            "></div>
        </div>
    `
}
