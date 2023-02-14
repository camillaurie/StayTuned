document.getElementById('game-setup').addEventListener('click', gameSetupScreen);

function gameSetupScreen() {
    document
        .getElementById("wrapper")
        .innerHTML = `
            <div class="settings_screen">
                <div id="audio"></div>
                    <audio class="SoundOfVoice" id="currentAudio" autoplay loop controls">
                        <source 
                            src="audio/nancy_bigapple.mp3" 
                            type="audio/mpeg">
                    </audio> 
                    <input class="volume_slider volume_slider__voice" type="range" min="0" max="100" value="75" id="fader" step="1" oninput="outputUpdate(value)">
                </div>
                <div class="music_volume">
                
                </div>
                <div class="effects_volume">
                
                </div>
                <div id="backToMainMenu" class="backToMainMenu active__point"></div>
            </div>`
    setVoiceVolume();
}

function setVoiceVolume() {
    let voiceVolume = document.querySelector('.SoundOfVoice');
    voiceVolume.volume = sliderForVoiceVolume;
};
 
let sliderForVoiceVolume = 0.75;

function outputUpdate(value) {
    sliderForVoiceVolume = value/100;
    setVoiceVolume();
}

function setEffectsVolume() {
    let effectsVolume = document.querySelector('.SoundEffects');
    effectsVolume.volume = sliderForEffectsVolume;
};

let sliderForEffectsVolume = 0.75;

function outputUpdate(value) {
    sliderForEffectsVolume = value/100;
    setEffectsVolume();
}

document
    .getElementById("wrapper")
    .addEventListener("click", backToMainMenu);
function backToMainMenu(event) {
    if (event && event.target.id == 'backToMainMenu') {
        document.getElementById('wrapper').innerHTML = `
        <div class="menu__screen">
            <img alt="" src="pics/MAIN_MENU_1.png">
            <ul class="menu__list">
                <li id="NewGame" class="active__point menu__item new-game"></li>
                <li class="active__point menu__item load-and-save"></li>
                <li class="menu__item continue-game"></li>
                <li class="active__point menu__item second-chance"></li>
                <li id ="game-setup" class="active__point menu__item game-setup"></li>
                <li class="active__point menu__item credits-menu"></li>
                <li class="active__point menu__item help-menu"></li>
                <li class="active__point menu__item more-nancy-drew"></li>
                <li class="active__point menu__item exit-game"></li>
            </ul>
        </div>`
    }
}