document.getElementById('menu').addEventListener('click', theOpeningLetter);

function theOpeningLetter(event) {
    if (event && event.target.id == 'NewGame') {
        // TODO: after everything's done add here all the variables that need to be set to their default values.
        document
            .getElementById("menu")
            .style.display = 'none';
        document
            .getElementById('game_music')
            .innerHTML = `
                <audio controls  autoplay loop class="SoundOfMusic"">
                    <source 
                        src="audio/Music_Stage.mp3" 
                        type="audio/mpeg">
                    </source>
                </audio>
            `
        document
            .getElementById("wrapper")
            .innerHTML = `
                <div class="game">
                    <div id="menu_button" class="game__menu"></div>
                    <div id="video" class="game__scene">
                        <video playsinline autoplay controls class="SoundOfVoice" id="currentVideo"    >
                            <source src="video/the_opening_letter.webm" type="video/webm">
                        </video>
                    </div>
                    <div class="game__help">!!!</div>
                    <div class="game__time">!!!</div>
                    <div class="game__dialogue dialogue">
                        <div id="wholedialogue" class="dialogue__window">
                            
                        </div>
                        <div class="dialogue__scroll"></div>
                    </div>
                    <div id="inventory" class="game__inventory"><img alt="" src="pics/emptyinventory.png"></div>
                </div>
            `
        setVoiceVolume();
        setMusicVolume();
        document.getElementById('currentVideo')
        .addEventListener('ended', map1, false);
    }
}