/*

Array with inventory objects. 
By default becomes active only after talking to Mattie.
Contains apartment keys by default.

If keys are the only ones and taken:
    Gif closing the inventory.
    All cursors look like keys.
    Even after moving.

    let onHandRightNow = '';
    in variables. USE IT!







*/

let inventoryContains = ['keys']

function closeEmptyInventory() {
    inventoryContains = [];
    document
        .getElementById("inventory")
        .innerHTML = `
            <div id="inventory__place" class="inventory__place"></div>
            <div class="inventory_close_gif">
                <img id="closed_inventory_gif" alt="" src="pics/sprites/inventory_closes.gif">
            </div>
            <audio controls id="inventoryclicksound" class="SoundEffects" autoplay>
                <source src="audio/Clik7.wav" type="audio/mpeg">
            </audio>
        `
    ;
}

document
    .getElementById("wrapper")
    .addEventListener("click", changeTheCursorFromInventory); 
function changeTheCursorFromInventory(event) {
    if (event && event.target.id == 'apartmentkeys' && onHandRightNow == '') {
        document.getElementById("pointers").href = "style/pointers_keys.css";
        onHandRightNow = 'keys';
        if (inventoryContains.length == 1) {
            closeEmptyInventory();
        } else if (inventoryContains.length > 1) {
            inventoryContains = inventoryContains.filter(filterKeys);
            document.getElementById('apartmentkeys').remove();
            document.getElementById("inventoryclicksound").play();
        }
    }

    if (event && event.target.id == 'visitorspass' && onHandRightNow == '') {
        document.getElementById("pointers").href = "style/pointers_pass.css";
        onHandRightNow = 'pass';
        inventoryContains = inventoryContains.filter(filterPass);
        document.getElementById('visitorspass').remove();
        document.getElementById("inventoryclicksound").play();
    }

    if (event && event.target.id == 'remotecontrol' && onHandRightNow == '') {
        document.getElementById("pointers").href = "style/pointers_remote.css";
        onHandRightNow = 'remote';
        inventoryContains = inventoryContains.filter(filterRemote);
        document.getElementById('remotecontrol').remove();
        document.getElementById("inventoryclicksound").play();
    }

    if (event && event.target.id == 'inventory__place' && onHandRightNow != '') {
        inventoryContains.push(onHandRightNow);
        document.getElementById("pointers").href = "style/pointers_default.css";
        if (onHandRightNow == 'keys') {
            document.getElementById('inventory__place').innerHTML = keysInInventory + document.getElementById('inventory__place').innerHTML
        }
        if (onHandRightNow == 'pass') {
            document.getElementById('inventory__place').innerHTML = passInInventory + document.getElementById('inventory__place').innerHTML
        }
        if (onHandRightNow == 'remote') {
            document.getElementById('inventory__place').innerHTML = remoteInInventory + document.getElementById('inventory__place').innerHTML
        }
        document.getElementById("inventoryclicksound").play();
        onHandRightNow = '';
    }

    if (event && event.target.className.includes('inventory__visitors_pass') && (onHandRightNow == 'keys' || onHandRightNow == 'remote')) {
        inventoryContains.push(onHandRightNow);
        document.getElementById("pointers").href = "style/pointers_default.css";
        if (onHandRightNow == 'keys') {
            document.getElementById('inventory__place').innerHTML = keysInInventory + document.getElementById('inventory__place').innerHTML;
        }
        if (onHandRightNow == 'remote') {
            document.getElementById('inventory__place').innerHTML = remoteInInventory + document.getElementById('inventory__place').innerHTML;
        }
        document.getElementById("inventoryclicksound").play();
        onHandRightNow = '';
    }

    if (event && event.target.className.includes('inventory__keys') && (onHandRightNow == 'pass' || onHandRightNow == 'remote')) {
        inventoryContains.push(onHandRightNow);
        document.getElementById("pointers").href = "style/pointers_default.css";
        if (onHandRightNow == 'remote') {
            document.getElementById('inventory__place').innerHTML = remoteInInventory + document.getElementById('inventory__place').innerHTML;
        }
        if (onHandRightNow == 'pass') {
            document.getElementById('inventory__place').innerHTML = passInInventory + document.getElementById('inventory__place').innerHTML;
        }
        document.getElementById("inventoryclicksound").play();
        onHandRightNow = '';
    }

    if (event && event.target.className.includes('inventory__remote_control') && (onHandRightNow == 'keys' || onHandRightNow == 'pass')) {
        inventoryContains.push(onHandRightNow);
        document.getElementById("pointers").href = "style/pointers_default.css";
        if (onHandRightNow == 'keys') {
            document.getElementById('inventory__place').innerHTML = keysInInventory + document.getElementById('inventory__place').innerHTML;
        }
        if (onHandRightNow == 'pass') {
            document.getElementById('inventory__place').innerHTML = passInInventory + document.getElementById('inventory__place').innerHTML;
        }
        document.getElementById("inventoryclicksound").play();
        onHandRightNow = '';
    }

    // here it's more complicated
}

let keysInInventory = `<div id="apartmentkeys" class="inventory__item inventory__keys"></div>`
let passInInventory = `<div id="visitorspass" class="inventory__item inventory__visitors_pass"></div>`
let remoteInInventory = `<div id="remotecontrol" class="inventory__item inventory__remote_control"></div>`

function filterKeys(item) {
    return item != 'keys';
}

function filterPass(item) {
    return item != 'pass';
}

function filterRemote(item) {
    return item != 'remote';
}


document
    .getElementById("wrapper")
    .addEventListener("click", openTheInventoryAgain); 
function openTheInventoryAgain(event) {
    if (event && event.target.id == "closed_inventory_gif") {
        closedInventoryToInventoryWithKeys()
    }
}

function killVideoOpenGif() {
    document.getElementById('inventory_opens_video_gif').remove();
}

function closedInventoryToInventoryWithKeys() {
    inventoryContains.push('keys');
    onHandRightNow = '';
    document.getElementById("pointers").href = "style/pointers_default.css";
    document
        .getElementById("inventory")
        .innerHTML = `
            <div id="inventory__place" class="inventory__place">
                <div id="apartmentkeys" class="inventory__item inventory__keys"></div>
            </div>
            <video playsinline autoplay controls onended="killVideoOpenGif()" id="inventory_opens_video_gif" class="inventory_open_gif">
                <source src="pics/sprites/inventory_opens.webm">
            </video>
            <audio controls id="inventoryclicksound" class="SoundEffects" autoplay>
                <source src="audio/Clik7.wav" type="audio/mpeg">
            </audio>`
}