function InventoryPushKeys() {
    InventoryArray.push('Apartment_Keys');
}

function InventoryRemoveKeys() {
    InventoryArray.pop('Apartment_Keys');
}

let InventoryArray = [];



document
    .getElementById("wrapper")
    .addEventListener("click", takeFromInventory);
function takeFromInventory(event) {
    if (event && event.target.id == 'apartmentkeys') {
        if (InventoryArray.length == 1) {
            closeTheInventory();
        };
        changeGlassToKeys();
    }

    if (event && event.target.id == 'inventory_gif') {
        console.log('1bbb');
        if (document.getElementById('inventory_gif').includes('inventory_close_gif')) {
            console.log('2bbb');
            if (document.getElementById('activelocationspot').includes(keys_in_hand)) {
                console.log('3bbb');
                changeKeysToGlass();
                openTheInventoryWithKeys();
            }
        }
    }
}

function changeGlassToKeys() {
    document.getElementById('activelocationspot').classList.add('keys_in_hand');
    document.querySelector('.redmagnifying').classList.add('red_keys_in_hand');
    document.querySelector('.activeleftside').classList.add('blue_keys_in_hand');
    document.querySelector('.activerightside').classList.add('blue_keys_in_hand');
}

function changeKeysToGlass() {
    document.getElementById('activelocationspot').classList.remove("keys_in_hand");
    document.querySelector('.redmagnifying').classList.remove('red_keys_in_hand');
    document.querySelector('.activeleftside').classList.remove('blue_keys_in_hand');
    document.querySelector('.activerightside').classList.remove('blue_keys_in_hand');
}

function closeTheInventory() {
    document.getElementById("inventory")
        .innerHTML = `
            <div class="inventory__place"></div>
            <div id="inventory_gif" class="inventory_close_gif">
                <img alt="" src="pics/sprites/inventory_closes.gif">
            </div>
            <audio class="SoundEffects" autoplay>
                <source src="audio/Clik7.wav" type="audio/mpeg">
            </audio>`
}

function openTheInventoryWithKeys() {
    document.getElementById("inventory")
        .innerHTML = `
            <div class="inventory__place">
                <div id="apartmentkeys" class="inventory__keys"></div>
            </div>
            <div id="inventory_gif" class="inventory_open_gif">
                <img alt="" src="pics/sprites/inventory_opens.gif">
            </div>
            <audio class="SoundEffects" autoplay>
                <source src="audio/Clik7.wav" type="audio/mpeg">
            </audio>`
}