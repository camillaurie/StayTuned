// document
//     .getElementById("v2")   
//     .addEventListener("click", wellForThePastMonth);
// document
//     .getElementById("v3")
//     .addEventListener("click", theyReTotallyBizzare);





document.getElementById("wholedialogue").addEventListener("click", handleClickById);

function handleClickById(event) { 
    let dialogueOptionId = event.target.id;
    console.log('dodod', dialogueOptionId);
    if (dialogueOptionId == 'itsAlwaysNice') {
        believeMeItsNot();
    }
    if (dialogueOptionId == 'butItCantBeAll') {
        yesItCanBeAllThatBad();
    }
    if (dialogueOptionId == 'imHappyToHelp') {
        wellForThePastMonth();
    }
    if (dialogueOptionId == 'haveYouEverReceived') {
        ohIveGottenSomeOddOnes();
    }
    if (dialogueOptionId == 'weird') {
        theyReTotallyBizzare();
    }
    if (dialogueOptionId == 'someoneSentHimPoisoned000beforeLetters') {
        ricksAMajorChocoholic000beforeLetters();
    }
    if (dialogueOptionId == 'someoneSentHimPoisoned000afterLetters') {
        ricksAMajorChocoholic000afterLetters();
    }
    if (dialogueOptionId == 'tellMeAboutTheLetters000afterChocolates') {
        wellTheFirstOnesHad000afterChocolates();
    }
    if (dialogueOptionId == 'tellMeAboutTheLetters000beforeChocolates') {
        wellTheFirstOnesHad000beforeChocolates();
    }
    if (dialogueOptionId == 'soWhatHappenedWith') {
        wellIwasReadingtheTeleprompter();
    }
    if (dialogueOptionId == 'whatWasTheBrokenWatch') {
        someoneSentHimABrokenWatch();
    }
  }


function  believeMeItsNot() {
    document.getElementById("video")
        .innerHTML = `
        <video playsinline controls autoplay>
            <source src="video/mattie_believeme.webm" type="video/webm">
        </video>
        `

    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Believe me, it's not all that exciting, with 5am shoots, a million lines to learn, people all uptight and yelling. And now Rick's getting these death threats!
        </p>
        <p id='butItCantBeAll' class='dialogue__options'>
            But it can't be all that bad being a star, can it?
        </p>
        <p id='imHappyToHelp' class='dialogue__options'>
            Tell me about the death threats. 
        </p>
        `
};

function  yesItCanBeAllThatBad() {
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
        Yes, it can be all that bad. If Rick leaves the show, 'Light of Our Love' could be in a lot of trouble. Everyone's worries that the show could get cancelled.
        </p>
        <p id='imHappyToHelp' class='dialogue__options'>
            Tell me about death threats.
        </p>
        `
};

function wellForThePastMonth() {
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Well, for the past month, my co-star, Rick Arlen, has been getting these awful death threats. At first, we all shrugged it off - you get the occasional 'odd' letter in this business. But, then they started to get... weird.
        </p>
        <p id='weird' class='dialogue__options'>
            Weird?
        </p>
        <p id="haveYouEverReceived" class='dialogue__options'>
            Have you ever recieved an 'odd' letter?
        </p>
        `
};

function ohIveGottenSomeOddOnes() {
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Oh, I've gotten some odd ones here and there, but nothing like what Rick has been getting. In fact...
        `

    theyReTotallyBizzare();
}

function theyReTotallyBizzare() {
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            They're totally bizarre. Not only did he get letters, but somebody sent him a box of poisoned chocolates, a broken watch - and then there's that whole thing with the teleprompter.
        </p>
        <p id='tellMeAboutTheLetters000beforeChocolates' class='dialogue__options'>
            Tell me about the letters.
        </p>
        <p id='someoneSentHimPoisoned000beforeLetters' class='dialogue__options'>
            Someone sent him poisoned chocolates?
        </p>
        <p id='whatWasTheBrokenWatch' class='dialogue__options'>
            What was the broken watch about?
        </p>
        <p id="soWhatHappenedWith" class='dialogue__options'>
            So, what happened with the teleprompter?
        </p>
        `
};

function  someoneSentHimABrokenWatch() {
    document.getElementById("wholedialogue")
    .innerHTML = `
    <p class='dialogue__character'>
        Someone sent him a broken watch with the hands at five minutes to midnight and a note saying, 'The time's running out'. That one really freaked me out!
    </p>
    <p id='v7' class='dialogue__options'>
        Did Rick go to the police?
    </p>
    <p id='tellMeAboutTheLetters000beforeChocolates' class='dialogue__options'>
        Tell me about the letters.
    </p>
    <p id='someoneSentHimPoisoned000beforeLetters' class='dialogue__options'>
        Someone sent him poisoned chocolates?
    </p>
    `
}

function wellIwasReadingtheTeleprompter() {
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Well, I was reading the teleprompter during a scene with Rick. All of the sudden, my lines read, 'YOU'RE GOING TO DIE A HORRIBLE DEATH, RICK'. At the time, we all thought it was some sick joke, but nobody admitted to doing it.
        </p>
        <p id="v7" class='dialogue__options'>
            Did Rick go to the police?
        </p>
        <p id='tellMeAboutTheLetters000beforeChocolates' class='dialogue__options'>
            Tell me about the letters, OK?
        </p>
        <p id='someoneSentHimPoisoned000beforeLetters' class='dialogue__options'>
            Someone sent him poisoned chocolates?
        </p>
        `
}

function ricksAMajorChocoholic000afterLetters() {
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Rick's a major chocoholic; his fans and friends are always sending him boxes of candy. But these chocolates were so nasty, Rick spit them out. I've NEVER seen Rick say no to chocolate before.
        </p>
        `
        
    nancyImRunningLate();
}

function ricksAMajorChocoholic000beforeLetters() {
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Rick's a major chocoholic; his fans and friends are always sending him boxes of candy. But these chocolates were so nasty, Rick spit them out. I've NEVER seen Rick say no to chocolate before.
        </p>
        <p id="v7" class='dialogue__options'>
            Did Rick go to the police?
        </p>
        <p id='tellMeAboutTheLetters000afterChocolates' class='dialogue__options'>
            Tell me about the letters.
        </p>
        `
};

function wellTheFirstOnesHad000beforeChocolates() {
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Well, the first ones had the letters cut out of magazines, you know, like on a ransom note? They were all signed by someone named B. T. Kaisuur. Somehow, the news leaked out, and the press totally jumped on them. Then they started getting ugly and twisted.
        </p>
        <p id="v7" class='dialogue__options'>
            Did Rick go to the police?
        </p>
        <p id='someoneSentHimPoisoned000afterLetters' class='dialogue__options'>
            Someone sent him poisoned chocolates?
        </p>
        `
};

function wellTheFirstOnesHad000afterChocolates() {
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Well, the first ones had the letters cut out of magazines, you know, like on a ransom note? They were all signed by someone named B. T. Kaisuur. Somehow, the news leaked out, and the press totally jumped on them. Then they started getting ugly and twisted.
        </p>
        `

    nancyImRunningLate();
};


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function nancyImRunningLate() {
    await delay(2000);
    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Nancy, I'm running late; I need to get to the studio. Hey, why don't you come over and visit? I'll leave a visitor's pass for you at the security desk.
        </p>
        `

    await delay(2000);

    //function addHouseKeysToInventory();

    document.getElementById("wholedialogue")
        .innerHTML = `
        <p class='dialogue__character'>
            Oh, before I forget, here's a copy of the house keys. I'm ALWAYS losing my keys, so I've got plenty of copies. I'll write the studio's address on your map. Just catch a taxicab outside, and show them the map. They'll know how to get there.
        </p>
        `
}