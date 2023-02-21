document.getElementById('game-setup').addEventListener('click', gameSetupScreen);

function gameSetupScreen() {
    document
        .getElementById("gameSetupScreen")
        .style.display = 'block';
    document
        .getElementById("gameSetupScreen")
        .innerHTML = `
            <div class="settings_screen">
                <audio id="testSoundForVoice" autoplay loop controls class="SoundOfVoice"">
                    <source 
                        src="audio/Ng01.wav" 
                        type="audio/mpeg">
                    </source>
                </audio> 
                <input class="volume_slider volume_slider__voice" type="range" min="0" max="100" value="75" id="fader" step="1" oninput="outputUpdateVoice(value)">
            </div>
            <div class="music_volume">
                <audio id="testSoundForMusic" autoplay loop controls class="SoundOfMusic"">
                    <source 
                        src="audio/Music_Stage.mp3" 
                        type="audio/mpeg">
                    </source>
                </audio> 
                <input class="volume_slider volume_slider__music" type="range" min="0" max="100" value="75" id="fader" step="1" oninput="outputUpdateMusic(value)">
            </div>
            <div class="effects_volume">
                <audio id="testSoundForEffects" autoplay loop controls class="SoundEffects"">
                    <source 
                        src="audio/LIDOFF.wav" 
                        type="audio/mpeg">
                    </source>
                </audio> 
                <input class="volume_slider volume_slider__effects" type="range" min="0" max="100" value="75" id="fader" step="1" oninput="outputUpdateEffects(value)">
            </div>
            <div id="backToMainMenuFromSettings" class="backToMainMenuFromSettings active__point"></div>
        </div>`
    setVoiceVolume();
    setEffectsVolume();
    setMusicVolume();
    PauseAllTheSoundsOfTheGame();
}

function PauseAllTheSoundsOfTheGame() {
    if (document.getElementById('currentVideo')) {
        document
            .getElementById('currentVideo') 
            .pause();
    }
    if (document.querySelector('.SoundOfMusic')) {
        document
            .querySelector('.SoundOfMusic')
            .pause();
    }
    if (document.querySelector('.SoundOfVoice')) {
        document
            .querySelector('.SoundOfVoice')
            .pause();
    }
    if (document.querySelector('.PersistentSoundEffects')) {
        document
            .querySelector('.PersistentSoundEffects')
            .pause();
    }
}

document
    .getElementById("gameSetupScreen")
    .addEventListener("click", backToMainMenuFromSettings);
function backToMainMenuFromSettings(event) {
    if (event && event.target.id == 'backToMainMenuFromSettings') {
        document
            .getElementById("gameSetupScreen")
            .style.display = 'none';
        document
            .getElementById("menu")
            .style.display = 'block';
        document
            .getElementById("testSoundForEffects")
            .remove();
        document
            .getElementById("testSoundForVoice")
            .remove();
        document
            .getElementById("testSoundForMusic")
            .remove();
    }
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
    .addEventListener("click", pauseTheGameInMainMenu);
function pauseTheGameInMainMenu(event) {
    if (event && event.target.id == 'menu_button') {
        document
            .getElementById('menu')
            .style.display = 'block';
        document
            .getElementById('main_menu_bg')
            .src = `pics/MAIN_MENU_2.png`;
        document
            .querySelector('.continue_game') 
            .classList.add('active__point');
        PauseAllTheSoundsOfTheGame();
    }
}

document
    .getElementById("menu")
    .addEventListener("click", continueGame);
function continueGame(event) {
    document
        .getElementById('menu')
        .style.display = 'none';
    if (document.getElementById('currentVideo')) {
        document
            .getElementById('currentVideo') 
            .play();
    }
    if (document.querySelector('.SoundOfMusic')) {
        document
            .querySelector('.SoundOfMusic')
            .play();
    }
    if (document.querySelector('.SoundOfVoice')) {
        document
            .querySelector('.SoundOfVoice')
            .play();
    }
    if (document.querySelector('.PersistentSoundEffects')) {
        document
            .querySelector('.PersistentSoundEffects')
            .play();
    }
}

//TODO: after every video there needs to be a static picture. 
//TODO: all the voice audio files should be deleted once they've played
//TODO: fix the bugs later. I'm too tired.