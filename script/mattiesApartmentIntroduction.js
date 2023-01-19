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
                <img src="pics/apartmentexterior.png">
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
            <img src="pics/mattieshallway1.png">
            <div id="sasa" style="
                height: 110px;
                width: 70px;
                background-color: red;
                position: absolute;
                top: 70px;
                left: 380px;
            "></div>
        </div>
    `
}