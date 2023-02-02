function interaction_ralph() {
    document
        .getElementById("wrapper")
        .addEventListener("click", handleClickTalkingToRalph);

    function handleClickTalkingToRalph(event) { 
        const video = document.getElementById('currentVideo');
        
        let dialogueOptionId = '';
        if (event) {
            dialogueOptionId = event.target.id;
        }
        console.log('dodod ralph', dialogueOptionId);
        if (video.ended) {
            //in case we're slow and we make our choice after the video has already ended
            myHandler();
        } else {
            //in case we're fast enough to choose before the video ends
            video.addEventListener('ended', myHandler, false);
        }
        function myHandler() {
            if (dialogueOptionId == 'itsAlwaysNice') {
                itsAlwaysNice();
            }
           
        }
    }
}
