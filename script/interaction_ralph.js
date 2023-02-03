function signTheListScreen1() {
    document.getElementById("video")
        .innerHTML = `<img src="pics/studio_hallways/SE2F_0.png">`
}

function hereYouAre() {
    document.getElementById("video")
        .innerHTML = `
        <video id="currentVideo" playsinline controls autoplay>
            <source src="video/ralph_hereyouare.webm" type="video/webm">
        </video>
        `
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Here you are.
        </p>
        `

    document.getElementById('currentVideo')
    .addEventListener('ended', signTheListScreen1, false);
}
function wellForThePastMonthchange() {
    document.getElementById("video")
        .innerHTML = `
        <video id="currentVideo" playsinline controls autoplay>
            <source src="video/mattie_theyretotallybizarre.webm" type="video/webm">
        </video>
        `
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
    document
        .getElementById("video")
        .innerHTML = `
            <img src="pics/studio_hallways/ralph.png">
        `
    document.getElementById("wholedialogue")
        .innerHTML = `
            <p class="dialogue__character">Can I help you?</p>
            <p id='noThankYouJustLooking' class='dialogue__options'>
                No, thank you - just looking.
            </p>
            <p id='yesMattieJensenLeftAVisitorsPassForMe' class='dialogue__options'>
                Yes, Mattie Jensen left a visitor's pass for me. It should be listed under Nancy Drew.
            </p>
    `
    document
        .getElementById("wrapper")
        .addEventListener("click", handleClickWithRalph);

    function handleClickWithRalph(event) { 
        const video = document.getElementById('currentVideo');
        
        let dialogueOptionId = '';
        if (event) {
            dialogueOptionId = event.target.id;
        }
        console.log('dodod', dialogueOptionId);
        if (video && video.ended) {
            //in case we're slow and we make our choice after the video has already ended
            myHandlerWithRalph();
        } else if (document.getElementById('video').innerHTML.includes('ralph.png')) {
            myHandlerWithRalph();
        } else {
            //in case we're fast enough to choose before the video ends
            video.addEventListener('ended', myHandlerWithRalph, false);
        }
        function myHandlerWithRalph() {
            if (dialogueOptionId == 'noThankYouJustLooking') {
                noThankYouJustLooking();
            }
            if (dialogueOptionId == 'yesMattieJensenLeftAVisitorsPassForMe') {
                yesMattieJensenLeftAVisitorsPassForMe();
            }
        }
    }


    function noThankYouJustLooking() {
        document.getElementById("audio")
            .innerHTML = `
            <audio controls autoplay onended="goBackToSpinningStudio1"><source src="audio/Ng09.wav" type="audio/mpeg"></audio>
            `
    }
    function yesMattieJensenLeftAVisitorsPassForMe() {
        document.getElementById("audio")
            .innerHTML = `
            <audio controls autoplay onended="hereYouAre()"><source src="audio/Ng01.wav" type="audio/mpeg"></audio>
            `
    }
}