document.getElementById('NewGame').addEventListener('click', theOpeningLetter);

function theOpeningLetter() {

    document
    .getElementById("wrapper")
    .innerHTML = `
            <div class="game">
                <div id='audio' class="game__menu">!!!</div>
                <div id='video' class="game__scene">
                    <video id="currentVideo" onended="handleClickById()" playsinline controls autoplay >
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
            document.getElementById('currentVideo')
            .addEventListener('ended', map1, false);
}