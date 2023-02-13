function InventoryPushKeys() {
    InventoryArray.push('Apartment_Keys');
}

let InventoryArray = [];



document
    .getElementById("wrapper")
    .addEventListener("click", takeFromInventory);
function takeFromInventory(event) {
    if (event && event.target.id == 'apartmentkeys') {
        if (InventoryArray.length == 1) {
            // play a gif of inventory closing !!!
        };
        document.getElementById('activelocationspot').classList.add('keys_in_hand');
        document.querySelector('.redmagnifying').classList.add('red_keys_in_hand');
        document.querySelector('.activeleftside').classList.add('blue_keys_in_hand');
        document.querySelector('.activerightside').classList.add('blue_keys_in_hand');
    }
}