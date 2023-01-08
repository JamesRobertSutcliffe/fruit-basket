

// DATA STORE

let fruit = {
 Apple: 0,
 Banana: 0,
 Kiwi: 0
}

let fruitPrice = {
    Apple: 0,
    Banana: 0,
    Kiwi: 0
   }


// Define number of fruit in each basket // 

let appleQuant = 0;
let applePrice = 0;
function addApple(){
    let applePlus = fruit.Apple + 1;
    let applePricePlus = fruitPrice.Apple + 1.50;
    if (fruit.Apple >= 0){
    fruit.Apple = applePlus};
    if (fruitPrice.Apple >= 0){
        fruitPrice.Apple = applePricePlus};
    document.getElementById('displayApple').innerHTML = fruit.Apple;
    document.getElementById('displayApplePrice').innerHTML = "£" + fruitPrice.Apple.toFixed(2);
    total();
    toggle();
    }

function minusApple(){
    let appleMinus = fruit.Apple - 1;
    let applePriceMinus = fruitPrice.Apple - 1.50;
    if (fruit.Apple > 0){
    fruit.Apple = appleMinus};
    if (fruitPrice.Apple > 0){
        fruitPrice.Apple = applePriceMinus};    
    document.getElementById('displayApple').innerHTML = fruit.Apple;
    document.getElementById('displayApplePrice').innerHTML = "£" + fruitPrice.Apple.toFixed(2);
    total();
    toggle();
    }

function addBanana(){
    let bananaPlus = fruit.Banana + 1;
    let bananaPricePlus = fruitPrice.Banana + 0.99;
    if (fruit.Banana >= 0){
    fruit.Banana = bananaPlus};
    if (fruitPrice.Banana >= -1){
        fruitPrice.Banana = bananaPricePlus};
    document.getElementById('displayBanana').innerHTML = fruit.Banana;
    document.getElementById('displayBananaPrice').innerHTML = "£" + fruitPrice.Banana.toFixed(2);
    total();
    toggle();
    }
        
    function minusBanana(){
    let bananaMinus = fruit.Banana - 1;
    let bananaPriceMinus = fruitPrice.Banana - 0.99;
    if (fruit.Banana > 0){
    fruit.Banana = bananaMinus}; 
    if (fruitPrice.Banana > 0){
        fruitPrice.Banana = bananaPriceMinus};    
    document.getElementById('displayBanana').innerHTML = fruit.Banana;
    document.getElementById('displayBananaPrice').innerHTML = "£" + fruitPrice.Banana.toFixed(2);
    total();
    toggle();
    }

    function addKiwi(){
    let kiwiPlus = fruit.Kiwi + 1;
    let kiwiPricePlus = fruitPrice.Kiwi + 1;
    if (fruit.Kiwi >= 0){
    fruit.Kiwi = kiwiPlus};
    if (fruitPrice.Kiwi >= 0){
        fruitPrice.Kiwi = kiwiPricePlus};
    document.getElementById('displayKiwi').innerHTML = fruit.Kiwi;
    document.getElementById('displayKiwiPrice').innerHTML = "£" + fruitPrice.Kiwi.toFixed(2);
    total();
    toggle();
    }
            
    function minusKiwi(){
    let kiwiMinus = fruit.Kiwi - 1;
    let kiwiPriceMinus = fruitPrice.Kiwi - 1;
    if (fruit.Kiwi > 0){
    fruit.Kiwi = kiwiMinus};
    if (fruitPrice.Kiwi > 0){
        fruitPrice.Kiwi = kiwiPriceMinus};      
    document.getElementById('displayKiwi').innerHTML = fruit.Kiwi;
    document.getElementById('displayKiwiPrice').innerHTML = "£" + fruitPrice.Kiwi.toFixed(2);
    total();
    toggle();
    }
        

/// Creates total price

let modalTotalValue = 0;
function total(){
const fruitArray = Object.values(fruitPrice);
    let total = 0;
for (let x in fruitArray){
    total += fruitArray[x];
    document.getElementById('displayBasket').innerHTML = "£" + total.toFixed(2);
    modalTotalValue = total.toFixed(2);
 }};


function modalTotal(){
document.getElementById('displayBasket2').innerHTML = "£" + modalTotalValue;
document.getElementById('modalAppleQuant').innerHTML = fruit.Apple;
document.getElementById('modalApplePrice').innerHTML = "£" + fruitPrice.Apple.toFixed(2);
document.getElementById('modalBananaQuant').innerHTML = fruit.Banana;
document.getElementById('modalBananaPrice').innerHTML = "£" + fruitPrice.Banana.toFixed(2);
document.getElementById('modalKiwiQuant').innerHTML = fruit.Kiwi;
document.getElementById('modalKiwiPrice').innerHTML = "£" + fruitPrice.Kiwi.toFixed(2);
toggleModal()
toggleModalEmpty()
};

// Clear functions

function clearBasket(){
    clearApple()
    clearBanana()
    clearKiwi()
    toggle();
}

function clearApple(){
    fruitPrice.Apple = 0;
    fruit.Apple = 0;
    document.getElementById('displayApplePrice').innerHTML = "£" + fruitPrice.Apple;
    document.getElementById('displayApple').innerHTML = fruit.Apple;
    total()
    toggle();
    
}

function clearBanana(){
    fruitPrice.Banana = 0;
    fruit.Banana = 0;
    document.getElementById('displayBananaPrice').innerHTML = "£" + fruitPrice.Banana;
    document.getElementById('displayBanana').innerHTML = fruit.Banana;
    total()
    toggle();
}

function clearKiwi(){
    fruitPrice.Kiwi = 0;
    fruit.Kiwi = 0;
    document.getElementById('displayKiwiPrice').innerHTML = "£" + fruitPrice.Kiwi;
    document.getElementById('displayKiwi').innerHTML = fruit.Kiwi;
    total()
    toggle();
}

// toggle baskets visibility

function toggleApple() {
const appleBasket = document.getElementById('apple-basket');
    if (fruitPrice.Apple > 0) {
 appleBasket.classList.remove('hide');
        } else {
            appleBasket.classList.add('hide');
}};

function toggleBanana() {
    const bananaBasket = document.getElementById('banana-basket');
      if (fruitPrice.Banana > 0) {
     bananaBasket.classList.remove('hide');
            } else {
    bananaBasket.classList.add('hide');
    }};

    function toggleKiwi() {
        const kiwiBasket = document.getElementById('kiwi-basket');
          if (fruitPrice.Kiwi > 0) {
        kiwiBasket.classList.remove('hide');
                } else {
        kiwiBasket.classList.add('hide');
        }};

// toggle modal basket visibility

function toggleModal(){
    const appleModal = document.getElementById('apple-modal');
    const bananaModal = document.getElementById('banana-modal');
    const kiwiModal = document.getElementById('kiwi-modal');
    if (fruitPrice.Apple > 0) {
        appleModal.classList.remove('hide');
     } if (fruitPrice.Banana > 0) {
            bananaModal.classList.remove('hide');
      } if (fruitPrice.Kiwi > 0) {
                kiwiModal.classList.remove('hide');
    } if (fruitPrice.Apple == 0) {
        appleModal.classList.add('hide');
    } if (fruit.Banana == 0) {
        bananaModal.classList.add('hide');
    } if (fruitPrice.Kiwi == 0) {
        kiwiModal.classList.add('hide');
    }};

function toggleModalEmpty(){
    const emptyModal = document.getElementById('empty-modal');
    if (modalTotalValue > 0){
        emptyModal.classList.add('hide')
    } else {
        emptyModal.classList.remove('hide') 
    }
};

// EMPTY BASKET IMAGE TOGGLE

   function toggleEmpty(){
    const emptyBasket = document.getElementById('empty');
    const fruitArray = Object.values(fruitPrice);
    let total = 0;
for (let x = 0; x < fruitArray.length; x++){
    total += fruitArray[x];
if (total > 0) {
    emptyBasket.classList.add('hide');
    } else {
        emptyBasket.classList.remove('hide');
    }
}};

function toggle(){
    toggleApple()
    toggleBanana()
    toggleKiwi()
    toggleEmpty();
    toggleModal();
    toggleModalEmpty();
    modalTotal();
}


