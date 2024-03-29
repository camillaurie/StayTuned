function signTheListScreen1() {
    document.getElementById("video")
        .innerHTML = `
            <img src="pics/studio_hallways/SE2D_0.webp">
            <div class="redmagnifying" onclick="placeholder();" id="SE2F_0" style="
                display: none;
            "></div>`
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            You'll need to come to this desk every time you enter so I can log you in.
        </p>
        `
    document.getElementById("media_elements")
        .innerHTML = `
        <audio controls autoplay class="SoundOfVoice" onended="getCloserToLogInPaper(); clearTheAudio();"><source src="audio/Ral05.wav" type="audio/mpeg"></audio>
        `;
        setVoiceVolume();
    z = 17;
}

function getCloserToLogInPaper() {
    document.getElementById("wholedialogue")
        .innerHTML = ``
    document.getElementById("video")
        .innerHTML = `
            <img src="pics/studio_hallways/SE2F_0.webp"> 
            <div class="redmagnifying" onclick="signThePaper();" style="
                height: 30px;
                width: 410px;
                top: 240px;
                left: 62px;
            "></div>`
}

function signThePaper() {
    document.getElementById("wholedialogue")
        .innerHTML = `
            <p class='dialogue__character'>
                Have a nice day.
            </p>`;
    document.getElementById("media_elements")
        .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="RalphJustLetUsIn();"><source src="audio/Ral07.wav" type="audio/mpeg"></audio>`;
            setVoiceVolume();
    document.getElementById("video")
        .innerHTML = `
            <img src="pics/studio_hallways/SE2F_1.webp">`;
}

function hereYouAre() {
    document.getElementById("inventoryclicksound").play();
    document.querySelector('.inventory__place').innerHTML = passInInventory + document.querySelector('.inventory__place').innerHTML;
    inventoryContains.push('pass');
    console.log(inventoryContains);
    document.getElementById("video")
        .innerHTML = `
        <video playsinline autoplay controls class="SoundOfVoice" onplaying="setVoiceVolume()" onended="signTheListScreen1()" id="currentVideo"   >
            <source src="video/ralph_hereyouare.webm" type="video/webm">
        </video>
        `
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Here you are. You'll need to sign for it.
        </p>
        `
    document.getElementById('currentVideo')
    .addEventListener('ended', signTheListScreen1, false);
}
function wellForThePastMonthchange() {
    document.getElementById("video")
        .innerHTML = `
        <video playsinline autoplay controls class="SoundOfVoice" id="currentVideo"   >
            <source src="video/mattie_theyretotallybizarre.webm" type="video/webm">
        </video>
        `
    setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            They're totally bizarre. Not only did he get letters, but somebody sent him a box of poisoned chocolates, a broken watch - and then there's that whole thing with the teleprompter.
        </p>
        <p id='letters1' class='dialogue__options'>
            Tell me about the letters.
        </p>
        <p id='chocolates1' class='dialogue__options'>
            Someone sent him poisoned chocolates?
        </p>
        <p id='watch' class='dialogue__options'>
            What was the broken watch about?
        </p>
        <p id='teleprompter' class='dialogue__options'>
            So, what happened with the teleprompter?
        </p>
        `
}



function interaction_ralph() {
    document.getElementById("video")
        .innerHTML = `
        <video playsinline autoplay controls class="SoundOfVoice" id="currentVideo"   >
            <source src="video/ralph_canihelpyou.webm" type="video/webm">
        </video>
    `
    setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
            <p class="dialogue__character">Can I help you?</p>
            <p id='noThankYouJustLooking' class='dialogue__options'>
                No, thank you - just looking.
            </p>`

            if (document.getElementById('inventory__place').innerHTML.includes('inventory__visitors_pass') == false) {
                document.getElementById("wholedialogue")
                    .innerHTML += `
                        <p id='yesMattieJensenLeftAVisitorsPassForMe' class='dialogue__options'>
                            Yes, Mattie Jensen left a visitor's pass for me. It should be listed under Nancy Drew.
                        </p>`
            } else {
                document.getElementById("wholedialogue")
                    .innerHTML += `
                        <p id='helloHereIsMyPass' class='dialogue__options'>
                            Hello...here is my pass.
                        </p>`
            }
    document
        .getElementById("wrapper")
        .addEventListener("click", handleClickWithRalph);

    function handleClickWithRalph(event) { 
        const video = document.getElementById('currentVideo');
        
        let dialogueOptionId = '';
        if (event) {
            dialogueOptionId = event.target.id;
        }
        if (video && video.ended) {
            //in case we're slow and we make our choice after the video has already ended
            myHandlerWithRalph();
        } else if (document.getElementById('video').innerHTML.includes('ralph.png')) {
            myHandlerWithRalph();
        } else if (video) {
            video.addEventListener('ended', myHandlerWithRalph, false);
        }
        function myHandlerWithRalph() {
            if (dialogueOptionId == 'noThankYouJustLooking') {
                noThankYouJustLooking();
            }
            if (dialogueOptionId == 'yesMattieJensenLeftAVisitorsPassForMe') {
                yesMattieJensenLeftAVisitorsPassForMe();
            }
            if (dialogueOptionId == 'helloHereIsMyPass') {
                helloHereIsMyPass();
            }
        }
    }


    function noThankYouJustLooking() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls 
                class="SoundOfVoice" 
                 
                autoplay 
                onended="
                    exploringTheStudioDay();">
                <source src="audio/Ng09.wav" type="audio/mpeg">
            </audio>`
            setVoiceVolume();
    }
    function yesMattieJensenLeftAVisitorsPassForMe() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); hereYouAre()"><source src="audio/Ng01.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
    function helloHereIsMyPass() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); youMayProceed()"><source src="audio/Ng04.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
}

function youMayProceed() {
    document.getElementById("video")
        .innerHTML = 
        document.getElementById("video")
            .innerHTML = `
            <video playsinline autoplay controls class="SoundOfVoice" id="currentVideo" onended="RalphJustLetUsIn();">
                <source src="video/ralph_hellomissdrew.webm" type="video/webm">
            </video>`
        setVoiceVolume();
        document.getElementById("wholedialogue")
            .innerHTML = `
            <p class='dialogue__character'>
                Hello, Ms. Drew. Thank you - you may proceed.
            </p>`
}
