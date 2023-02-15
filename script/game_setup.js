document.getElementById('game-setup').addEventListener('click', gameSetupScreen);

function gameSetupScreen() {
    document
        .getElementById("wrapper")
        .innerHTML = `
            <div class="settings_screen">
                <audio autoplay loop controls class="SoundOfVoice"">
                    <source 
                        src="audio/Ng01.wav" 
                        type="audio/mpeg">
                    </source>
                </audio> 
                <input class="volume_slider volume_slider__voice" type="range" min="0" max="100" value="75" id="fader" step="1" oninput="outputUpdateVoice(value)">
            </div>
            <div class="music_volume">
                <audio autoplay loop controls class="SoundOfMusic"">
                    <source 
                        src="audio/music__STFD.wav" 
                        type="audio/mpeg">
                    </source>
                </audio> 
                <input class="volume_slider volume_slider__music" type="range" min="0" max="100" value="75" id="fader" step="1" oninput="outputUpdateMusic(value)">
            </div>
            <div class="effects_volume">
                <audio autoplay loop controls class="SoundEffects"">
                    <source 
                        src="audio/LIDOFF.wav" 
                        type="audio/mpeg">
                    </source>
                </audio> 
                <input class="volume_slider volume_slider__effects" type="range" min="0" max="100" value="75" id="fader" step="1" oninput="outputUpdateEffects(value)">
            </div>
            <div id="backToMainMenu" class="backToMainMenu active__point"></div>
        </div>`
    setVoiceVolume();
    setEffectsVolume();
    setMusicVolume();
}



let sliderForVoiceVolume = 0.75;

function setVoiceVolume() {
    let voiceVolume = document.querySelector('.SoundOfVoice');
    voiceVolume.volume = sliderForVoiceVolume;
};

function outputUpdateVoice(value) {
    sliderForVoiceVolume = value/100;
    setVoiceVolume();
}



let sliderForEffectsVolume = 0.75;

function setEffectsVolume() {
    let effectsVolume = document.querySelector('.SoundEffects');
    effectsVolume.volume = sliderForEffectsVolume;
};

function outputUpdateEffects(value) {
    sliderForEffectsVolume = value/100;
    setEffectsVolume();
}



let sliderForMusicVolume = 0.75;

function setMusicVolume() {
    let musicVolume = document.querySelector('.SoundOfMusic');
    musicVolume.volume = sliderForMusicVolume;
};

function outputUpdateMusic(value) {
    sliderForMusicVolume = value/100;
    setMusicVolume();
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