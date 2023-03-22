



// !!!
// id ApartmentWithMattie after clicking at the spot in the room where Mattie sits.






function wellIwasReadingATeleprompter() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="defaultMattieImage();">
            <source src="video/mattie_welliwasreading.webm" type="video/webm">
        </video>
        `
    setVoiceVolume(); 
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Well, I was reading the teleprompter during a scene with Rick. All of the sudden, my lines read, 'YOU'RE GOING TO DIE A HORRIBLE DEATH, RICK'. At the time, we all thought it was some sick joke, but nobody admitted to doing it.
        </p>
        <p id='police' class='dialogue__options'>
            Did Rick go to the police?
        </p>
        <p id='letters1' class='dialogue__options'>
            Tell me about the letters.
        </p>
        <p id='chocolates1' class='dialogue__options'>
            Someone sent him poisoned chocolates?
        </p>
        `
}
function wellTheFirstOnes1() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="defaultMattieImage();">
            <source src="video/mattie_wellthefirstoneshadtheletters.webm" type="video/webm">
        </video>
        `
    setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Well, the first ones had the letters cut out of the magazines, you know, like on ransom note? They were all signed by someone named B. T. Kaisuur. Somehow, the news leaked out, and the press totally jumped on them. Then they started getting ugly and twisted.
        </p>
        <p id='chocolates2' class='dialogue__options'>
            Someone sent him poisoned chocolates?
        </p>
        <p id='policeafterletters' class='dialogue__options'>
            Did Rick go to the police?
        </p>
        `
}
function wellTheFirstOnes2() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="defaultMattieImage();">
            <source src="video/mattie_wellthefirstoneshadtheletters.webm" type="video/webm">
        </video>
        `
    setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Well, the first ones had the letters cut out of the magazines, you know, like on ransom note? They were all signed by someone named B. T. Kaisuur. Somehow, the news leaked out, and the press totally jumped on them. Then they started getting ugly and twisted.
        </p>
        <p id='policeafterchocolatesandletters' class='dialogue__options'>
            Did Rick go to the police?
        </p>
        `
}
function wellTheFirstOnes3() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="defaultMattieImage();">
            <source src="video/mattie_wellthefirstoneshadtheletters.webm" type="video/webm">
        </video>
        `
    setVoiceVolume(); 
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Well, the first ones had the letters cut out of the magazines, you know, like on ransom note? They were all signed by someone named B. T. Kaisuur. Somehow, the news leaked out, and the press totally jumped on them. Then they started getting ugly and twisted.
        </p>
        `
        document.getElementById('currentVideo')
        .addEventListener('ended', nancyImRunningLate, false);
}
function wellTheFirstOnes4() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="nancyImRunningLate();">
            <source src="video/mattie_wellthefirstoneshadtheletters.webm" type="video/webm">
        </video>
        `
    setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Well, the first ones had the letters cut out of the magazines, you know, like on ransom note? They were all signed by someone named B. T. Kaisuur. Somehow, the news leaked out, and the press totally jumped on them. Then they started getting ugly and twisted.
        </p>
        <p id='chocolates3' class='dialogue__options'>
            Someone sent him poisoned chocolates?
        </p>
        `
} 
function noAndThatsTheProblem0() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="defaultMattieImage();">
            <source src="video/mattie_noandthatstheproblem.webm" type="video/webm">
        </video>
        `
    setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            No, and that's the problem. No one is taking any of this seriously, especially Rick. He thinks nothing will ever hurt him.
        </p>
        <p id='lettersafterpolice' class='dialogue__options'>
            Tell me about the letters.
        </p>
        <p id='chocolatesafterpolice' class='dialogue__options'>
            Someone sent him poisoned chocolates?
        </p>
        `
}
function noAndThatsTheProblem1() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="defaultMattieImage();">
            <source src="video/mattie_noandthatstheproblem.webm" type="video/webm">
        </video>
        `
    setVoiceVolume(); 
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            No, and that's the problem. No one is laking any of this seriously, especially Rick. He thinks nothing will ever hurt him.
        </p>
        <p id='chocolates3' class='dialogue__options'>
            Someone sent him poisoned chocolates?
        </p>
        `
}
function noAndThatsTheProblem2() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="defaultMattieImage();">
            <source src="video/mattie_noandthatstheproblem.webm" type="video/webm">
        </video>
        `
    setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            No, and that's the problem. No one is laking any of this seriously, especially Rick. He thinks nothing will ever hurt him.
        </p>
        <p id='letters3' class='dialogue__options'>
            Tell me about the letters.
        </p>
        `
}
function noAndThatsTheProblem3() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="nancyImRunningLate();">
            <source src="video/mattie_noandthatstheproblem.webm" type="video/webm">
        </video>
        `
    setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            No, and that's the problem. No one is laking any of this seriously, especially Rick. He thinks nothing will ever hurt him.
        </p>
        `
        document.getElementById('currentVideo')
        .addEventListener('ended', nancyImRunningLate, false);
}
function ricksaMajorChocoholic1() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="defaultMattieImage();">
            <source src="video/mattie_ricksamajorchocoholic.webm" type="video/webm">
        </video>
        `
    setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Rick's a major chocoholic; his fans and friends are always sending him boxes of candy. But these chocolates were so nasty, Rick spit them out. I've NEVER seen Rick say no to chocolate before.
        </p>
        <p id='policeafterchocolates' class='dialogue__options'>
            Did Rick go to the police?
        </p>
        <p id='letters2' class='dialogue__options'>
            Tell me about the letters.
        </p>
        `
}
function ricksaMajorChocoholic2() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="defaultMattieImage();">
            <source src="video/mattie_ricksamajorchocoholic.webm" type="video/webm">
        </video>
        `
    setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Rick's a major chocoholic; his fans and friends are always sending him boxes of candy. But these chocolates were so nasty, Rick spit them out. I've NEVER seen Rick say no to chocolate before.
        </p>
        <p id='policeafterchocolatesandletters' class='dialogue__options'>
            Did Rick go to the police?
        </p>
        `
}
function ricksaMajorChocoholic3() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="defaultMattieImage();">
            <source src="video/mattie_ricksamajorchocoholic.webm" type="video/webm">
        </video>
        `
    setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Rick's a major chocoholic; his fans and friends are always sending him boxes of candy. But these chocolates were so nasty, Rick spit them out. I've NEVER seen Rick say no to chocolate before.
        </p>
        `
        document.getElementById('currentVideo')
        .addEventListener('ended', nancyImRunningLate, false);
}
function ricksaMajorChocoholic4() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="nancyImRunningLate();">
            <source src="video/mattie_ricksamajorchocoholic.webm" type="video/webm">
        </video>
        `
    setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Rick's a major chocoholic; his fans and friends are always sending him boxes of candy. But these chocolates were so nasty, Rick spit them out. I've NEVER seen Rick say no to chocolate before.
        </p>
        <p id='letters3' class='dialogue__options'>
            Tell me about the letters.
        </p>
        `
}
function someoneSentHimABrokenWatch() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="defaultMattieImage();">
            <source src="video/mattie_someonesenthimabrokenwatch.webm" type="video/webm">
        </video>
        `
    setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Someone sent him a broken watch with the hands at five minutes to midnight and a note saying, 'Time's running out'. That one really freaked me out!
        </p>
        <p id='police' class='dialogue__options'>
            Did Rick go to the police?
        </p>
        <p id='letters1' class='dialogue__options'>
            Tell me about the letters.
        </p>
        <p id='chocolates1' class='dialogue__options'>
            Someone sent him poisoned chocolates?
        </p>
        `
}
function nancyImRunningLate() {
    document.getElementById("video")
        .innerHTML = `
            <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay">
                <source src="video/mattie_nancyimrunninglate.webm" type="video/webm">
            </video>
            `
        setVoiceVolume();
        document.getElementById("wholedialogue")
            .innerHTML = `
            <p class='dialogue__character'>
                Nancy, I'm running late; I need to get to the studio. Hey, why don't you come over and visit? I'll leave a visitor's pass for you at the security desk.
            </p>
            `
        document.getElementById('currentVideo')
        .addEventListener('ended', ohBeforeIForget, false);
}


function ohBeforeIForget() {
    document.getElementById("video")
        .innerHTML = `
            <video class="SoundOfVoice" id="currentVideo" onended="removeInventoryGif(); defaultMattieImage();" playsinline controls autoplay>
                <source src="video/mattie_ohbeforeiforget.webm" type="video/webm">
            </video>`
        setVoiceVolume();
        document.getElementById("wholedialogue")
            .innerHTML = `
            <p class='dialogue__character'>
                Oh, before I forget, here's a copy of the house keys. I'm ALWAYS losing my keys, so I've got plenty of copies. I'll write the studio's address on your map. Just catch a taxicab outside, and show them the map. They'll know how to get there. 
            </p>`
    document.getElementById("inventory")
        .innerHTML = `
            <div id="inventory__place" class="inventory__place">
                <div id="apartmentkeys" class="inventory__item inventory__keys"></div>
            </div>
            <div id="inventory_gif" class="inventory_open_gif">
                <img alt="" src="pics/sprites/inventory_opens.gif">
            </div>
            <audio controls id="inventoryclicksound" class="SoundEffects" autoplay>
                <source src="audio/Clik7.wav" type="audio/mpeg">
            </audio>`
    setEffectsVolume();

    haveISpokenWithMattie = true;

    document.getElementById('currentVideo')
    .addEventListener('ended', exploringTheRoomDay, false);
    r = 6;
}

function removeInventoryGif() {
    document.getElementById("inventory_gif").remove();
}

function wellForThePastMonth() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="defaultMattieImage();">
            <source src="video/mattie_wellforthepast.webm" type="video/webm">
        </video>
        `
    setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
        Well, for the past month, my co-star, Rick Arlen, has been getting these awful death threats. At first, we all shrugged it off - you get the occasional 'odd' letter in this business. But, then they started to get... weird. 
        </p>
        <p id='weird' class='dialogue__options'>
            Weird?
        </p>
        <p id='haveYouEverReceived' class='dialogue__options'>
            Have you ever received an 'odd' letter?
        </p>
        `
}
function  yesItCanBeAllThatBad() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="defaultMattieImage();">
            <source src="video/mattie_yesitcan.webm" type="video/webm">
        </video>
        `
    setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
        Yes, it can be all that bad. If Rick leaves the show, 'Light of Our Love' could be in a lot of trouble. Everyone's worries that the show could get cancelled.
        </p>
        <p id='tellMeAboutTheDeath' class='dialogue__options'>
            Tell me about death threats.
        </p>
        `
};
function  believeMe() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="defaultMattieImage();">
            <source src="video/mattie_believeme.webm" type="video/webm">
        </video>
        `
        setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Believe me, it's not all that exciting, with 5am shoots, a million lines to learn, people all uptight and yelling. And now Rick's getting these death threats!
        </p>
        <p id='butItCantBeAll' class='dialogue__options'>
            But it can't be all that bad being a star, can it?
        </p>
        <p id='tellMeAboutTheDeath' class='dialogue__options'>
            Tell me about the death threats. 
        </p>
        `
};
function ohIveGottenSomeOdd() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="defaultMattieImage();">
            <source src="video/mattie_ohivegottensomeodd.webm" type="video/webm">
        </video>
        `
    setVoiceVolume();
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
        Oh, I've gotten some odd ones here and there, but nothing like what Rick has been getting. In fact...
        </p>
        `

    document.getElementById('currentVideo')
    .addEventListener('ended', theyreTotallyBizarre, false);
}
function theyreTotallyBizarre() {
    document.getElementById("video")
        .innerHTML = `
        <video class="SoundOfVoice" id="currentVideo" playsinline controls autoplay onended="defaultMattieImage();">
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

function seeingMattieForTheFirstTime() {
    document
        .getElementById("video")
        .innerHTML = `
                    <video class="SoundOfVoice" id="currentVideo" controls autoplay onended="interaction_mattie_first();">
                        <source src="video/mattie_welcome_2.webm" type="video/webm">
                    </video>
                
            `
}

function interaction_mattie_first() {
    document
        .getElementById("wrapper")
        .innerHTML = `
            <div class="game">
                <div id="menu_button" class="game__menu"></div>
                <div id='video' class="game__scene">
                    <video class="SoundOfVoice" id="currentVideo" controls autoplay  onended="defaultMattieImage();">
                        <source src="video/mattie_welcome.webm" type="video/webm">
                    </video>
                </div>
                <div class="game__help">!!!</div>
                <div class="game__time">!!!</div>
                <div class="game__dialogue dialogue">
                    <div id="wholedialogue" class="dialogue__window">
                        <p class="dialogue__character">Welcome to New York, Nancy! I'm really glad you could come out here on such a short notice.</p>
                        <p id="itsAlwaysNice" class="dialogue__options">It's always nice to come back to the Big Apple - and now I get to stay with a famous soap opera star. It must be exciting work.</p>
                        <p id="imHappyToHelp" class="dialogue__options">I'm happy to help in any way I can. Aunt Eloise told me that someone on the set is getting death threats.</p>
                    </div>
                    <div class="dialogue__scroll"></div>
                </div>
                <div id="inventory" class="game__inventory"><img alt="" src="pics/emptyinventory.png"></div>
            </div>
            `
    setVoiceVolume();
    document
        .getElementById("wrapper")
        .addEventListener("click", handleClickById);

    function handleClickById(event) { 
        const video = document.getElementById('currentVideo');
        
        let dialogueOptionId = '';
        if (event) {
            dialogueOptionId = event.target.id;
        }
        if (document.getElementById("video").innerHTML.includes('mattie-default.png') == true) {
            //in case we're slow and we make our choice after the video has already ended
            myHandler();
        } else if (video) {
            //in case we're fast enough to choose before the video ends
            video.addEventListener('ended', myHandler, false);
        }
        function myHandler() {
            if (dialogueOptionId == 'itsAlwaysNice') {
                itsAlwaysNice();
            }
            if (dialogueOptionId == 'imHappyToHelp') {
                imHappyToHelp();
            }
            if (dialogueOptionId == 'butItCantBeAll') {
                butItCantBeAll();
            }
            if (dialogueOptionId == 'tellMeAboutTheDeath') {
                tellMeAboutTheDeath();
            }
            if (dialogueOptionId == 'haveYouEverReceived') {
                haveYouEverReceived();
            }
            if (dialogueOptionId == 'weird') {
                weird();
            }
            //next are the final dichotomy options
            if (dialogueOptionId == 'chocolates1') {
                chocolates1();
            }
            if (dialogueOptionId == 'chocolates2') {
                chocolates2();
            }
            if (dialogueOptionId == 'chocolates3') {
                chocolates3();
            }
            if (dialogueOptionId == 'letters1') {
                letters1();
            }
            if (dialogueOptionId == 'letters2') {
                letters2();
            }
            if (dialogueOptionId == 'letters3') {
                letters3();
            }
            if (dialogueOptionId == 'policeafterchocolates') {
                policeafterchocolates();
            }
            if (dialogueOptionId == 'policeafterletters') {
                policeafterletters();
            }
            if (dialogueOptionId == 'policeafterchocolatesandletters') {
                policeafterchocolatesandletters();
            }
            if (dialogueOptionId == 'watch') {
                watch();
            }
            if (dialogueOptionId == 'teleprompter') {
                teleprompter();
            }
            if (dialogueOptionId == 'police') {
                police();
            }
            if (dialogueOptionId == 'lettersafterpolice') {
                lettersafterpolice();
            }
            if (dialogueOptionId == 'chocolatesafterpolice') {
                chocolatesafterpolice();
            }
        }
    }


    function letters1() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); wellTheFirstOnes1()"><source src="audio/Nma07.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
    function letters2() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); wellTheFirstOnes2()"><source src="audio/Nma07.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
    function letters3() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); wellTheFirstOnes3()"><source src="audio/Nma07.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }


    function police() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); noAndThatsTheProblem0()"><source src="audio/Nma11.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
    function policeafterletters() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); noAndThatsTheProblem1()"><source src="audio/Nma11.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
    function policeafterchocolates() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); noAndThatsTheProblem2()"><source src="audio/Nma11.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
    function policeafterchocolatesandletters() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); noAndThatsTheProblem3()"><source src="audio/Nma11.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }


    function lettersafterpolice() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); wellTheFirstOnes4()"><source src="audio/Nma07.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
    function chocolatesafterpolice() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); ricksaMajorChocoholic4()"><source src="audio/Nma08.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }


    function chocolates1() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); ricksaMajorChocoholic1()"><source src="audio/Nma08.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
    function chocolates2() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); ricksaMajorChocoholic2()"><source src="audio/Nma08.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
    function chocolates3() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); ricksaMajorChocoholic3()"><source src="audio/Nma08.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }


    function watch() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); someoneSentHimABrokenWatch()"><source src="audio/Nma09.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
    function teleprompter() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); wellIwasReadingATeleprompter()"><source src="audio/Nma10.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
    function itsAlwaysNice() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); believeMe()"><source src="audio/Nma01.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
    function imHappyToHelp() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); wellForThePastMonth()"><source src="audio/Nma02.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
    function butItCantBeAll() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); yesItCanBeAllThatBad()"><source src="audio/Nma03.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
    function tellMeAboutTheDeath() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); wellForThePastMonth()"><source src="audio/Nma12.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
    function weird() {
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); theyreTotallyBizarre()"><source src="audio/Nma05.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
    function haveYouEverReceived() {
        console.log('eoeoe')
        document.getElementById("media_elements")
            .innerHTML = `
            <audio controls autoplay class="SoundOfVoice" onended="clearTheAudio(); ohIveGottenSomeOdd()"><source src="audio/Nma06.wav" type="audio/mpeg"></audio>
            `
            setVoiceVolume();
    }
}

function defaultMattieImage() {
document
    .getElementById("video")
    .innerHTML = `
        <img src="pics/mattie-default.png">
    `;
}