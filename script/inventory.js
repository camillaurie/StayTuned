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

document
    .getElementById("wrapper")
    .addEventListener("click", changeTheCursorFromInventory); 
function changeTheCursorFromInventory(event) {
    if (event && event.target.id == 'apartmentkeys') {
        console.log(inventoryContains, inventoryContains.length, '0');
        document.getElementById("pointers").href = "style/pointers_keys.css";
        onHandRightNow = 'keys';
        console.log(inventoryContains);
        if (inventoryContains.length == 1) {
            inventoryContains = inventoryContains.filter(filterKeys);
            document
                .getElementById("inventory")
                .innerHTML = `
                    <div class="inventory__place"></div>
                    <div class="inventory_close_gif">
                        <img id="closed_inventory_gif" alt="" src="pics/sprites/inventory_closes.gif">
                    </div>
                    <audio class="SoundEffects" autoplay>
                        <source src="audio/Clik7.wav" type="audio/mpeg">
                    </audio>`
            console.log(inventoryContains);
        }
    }
}


function filterKeys(item) {
    return item != 'keys';
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
                <div class="inventory__place">
                    <div id="apartmentkeys" class="inventory__keys"></div>
                </div>
                <video autoplay onended="killVideoOpenGif()" id="inventory_opens_video_gif" class="inventory_open_gif">
                    <source src="pics/sprites/inventory_opens.webm">
                </video>
                <audio class="SoundEffects" autoplay>
                    <source src="audio/Clik7.wav" type="audio/mpeg">
                </audio>`
}