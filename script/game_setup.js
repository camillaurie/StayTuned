document.getElementById('game-setup').addEventListener('click', gameSetupScreen);
function gameSetupScreen() {
    document
        .getElementById('menu')
        .style.display = 'none';
    document
        .getElementById("gameSetupScreen")
        .style.display = 'block';
    if (document.getElementById('video')) {
        document
            .getElementById('video')
            .style.display = 'none';
    }
    document
        .getElementById("gameSetupScreen")
        .innerHTML = `
            <div class="settings_screen">
                <audio controls id="testSoundForVoice" autoplay loop  class="SoundOfVoiceTest">
                    <source 
                        src="audio/Ng01.wav" 
                        type="audio/mpeg">
                    </source>
                </audio> 
                <input class="volume_slider volume_slider__voice" type="range" min="0" max="100" id="fader" step="1" oninput="outputUpdateVoice(value)">
            </div>
            <div class="music_volume">
                <audio controls id="testSoundForMusic" autoplay loop  class="SoundOfMusicTest">
                    <source 
                        src="audio/Music_Stage.mp3" 
                        type="audio/mpeg">
                    </source>
                </audio> 
                <input class="volume_slider volume_slider__music" type="range" min="0" max="100" id="fader" step="1" oninput="outputUpdateMusic(value)">
            </div>
            <div class="effects_volume">
                <audio controls id="testSoundForEffects" autoplay loop  class="SoundEffectsTest">
                    <source 
                        src="audio/LIDOFF.wav" 
                        type="audio/mpeg">
                    </source>
                </audio> 
                <input class="volume_slider volume_slider__effects" type="range" min="0" max="100" id="fader" step="1" oninput="outputUpdateEffects(value)">
            </div>
            <div id="backToMainMenuFromSettings" class="backToMainMenuFromSettings active__point"></div>
        </div>`
    
    document.querySelector('.volume_slider__voice').value = sliderForVoiceVolume*100;
    document.querySelector('.volume_slider__music').value = sliderForMusicVolume*100;
    document.querySelector('.volume_slider__effects').value = sliderForEffectsVolume*100;
    setVoiceTestVolume();
    setEffectsTestVolume();
    setMusicTestVolume();
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

function PlayAllTheSoundsOfTheGame() {
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
    if (document.querySelector('.SoundOfVoice')) {
        let voiceVolume = document.querySelector('.SoundOfVoice');
        voiceVolume.volume = sliderForVoiceVolume;
    }
};

function setVoiceTestVolume() {
    if (document.querySelector('.SoundOfVoiceTest')) {
        let voiceVolumeTest = document.querySelector('.SoundOfVoiceTest');
        voiceVolumeTest.volume = sliderForVoiceVolume;
    }
}

function outputUpdateVoice(value) {
    sliderForVoiceVolume = value/100;
    setVoiceVolume();
    setVoiceTestVolume();
}



let sliderForEffectsVolume = 0.75;

function setEffectsVolume() {
    if (document.querySelector('.SoundEffects')) {
        let effectsVolume = document.querySelector('.SoundEffects');
        effectsVolume.volume = sliderForEffectsVolume;
    }
};

function setEffectsTestVolume() {
    if (document.querySelector('.SoundEffectsTest')) {
        let effectsVolumeTest = document.querySelector('.SoundEffectsTest');
        effectsVolumeTest.volume = sliderForEffectsVolume;
    }
};

function outputUpdateEffects(value) {
    sliderForEffectsVolume = value/100;
    setEffectsVolume();
    setEffectsTestVolume();
}



let sliderForMusicVolume = 0.75;

function setMusicVolume() {
    if (document.querySelector('.SoundOfMusic')) {
        let musicVolume = document.querySelector('.SoundOfMusic');
        musicVolume.volume = sliderForMusicVolume;
    }
};

function setMusicTestVolume() {
    if (document.querySelector('.SoundOfMusicTest')) {
        let musicVolumeTest = document.querySelector('.SoundOfMusicTest');
        musicVolumeTest.volume = sliderForMusicVolume;
    }
};

function outputUpdateMusic(value) {
    sliderForMusicVolume = value/100;
    setMusicVolume();
    setMusicTestVolume();
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
    if (event && event.target.id == 'continue_game') {
        document
            .getElementById('video')
            .style.display = 'block';
        document
            .getElementById('menu')
            .style.display = 'none';
        PlayAllTheSoundsOfTheGame();
    }
}
// TODO: after every video there needs to be a static picture. 
// TODO: all the voice audio files should be deleted once they've played