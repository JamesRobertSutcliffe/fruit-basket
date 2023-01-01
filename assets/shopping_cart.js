

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

function addApple(){
    let applePlus = fruit.Apple + 1;
    let applePricePlus = fruitPrice.Apple + 1.50;
    if (fruit.Apple >= 0){
    fruit.Apple = applePlus;};
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
    if (fruitPrice.Banana >= 0){
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

function total(){
const fruitArray = Object.values(fruitPrice);
    let total = 0;
for (let x in fruitArray){
    total += fruitArray[x];
    document.getElementById('displayBasket').innerHTML = "£" + total.toFixed(2);
}
}

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



        // fix this

   function toggleEmpty(){
    if (fruitPrice.Apple < 0.01) {
console.log('sucess?');
    }};

function toggle(){
    toggleApple()
    toggleBanana()
    toggleKiwi()
    toggleEmpty();
}

console.log(fruitPrice)
