

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


// below functions add and subtract fruit totals and push this to the object // 

function addApple(){
    let applePlus = fruit.Apple + 1;
    let applePricePlus = fruitPrice.Apple + 1.50;
    if (fruit.Apple >= 0){
    fruit.Apple = applePlus;};
    if (fruitPrice.Apple >= 0){
        fruitPrice.Apple = applePricePlus};
    document.getElementById('displayApple').innerHTML = fruit.Apple;
    document.getElementById('displayApplePrice').innerHTML = "£" + fruitPrice.Apple;
    console.log(fruitPrice);
    total();
    }

function minusApple(){
    let appleMinus = fruit.Apple - 1;
    let applePriceMinus = fruitPrice.Apple - 1.50;
    if (fruit.Apple > 0){
    fruit.Apple = appleMinus};
    if (fruitPrice.Apple > 0){
        fruitPrice.Apple = applePriceMinus};    
    document.getElementById('displayApple').innerHTML = fruit.Apple;
    document.getElementById('displayApplePrice').innerHTML = "£" + fruitPrice.Apple;
    console.log(fruitPrice);
    total();
    }

function addBanana(){
    let bananaPlus = fruit.Banana + 1;
    if (fruit.Banana >= 0){
    fruit.Banana = bananaPlus;}
    document.getElementById('displayBanana').innerHTML = fruit.Banana;
    total();
    }
        
    function minusBanana(){
    let bananaMinus = fruit.Banana - 1;
    if (fruit.Banana > 0){
    fruit.Banana = bananaMinus;}    
    document.getElementById('displayBanana').innerHTML = fruit.Banana;
    total();
    }

    function addKiwi(){
    let kiwiPlus = fruit.Kiwi + 1;
    if (fruit.Kiwi >= 0){
    fruit.Kiwi = kiwiPlus;}
    document.getElementById('displayKiwi').innerHTML = fruit.Kiwi;
    total();
    }
            
    function minusKiwi(){
    let kiwiMinus = fruit.Kiwi - 1;
    if (fruit.Kiwi > 0){
    fruit.Kiwi = kiwiMinus;}    
    document.getElementById('displayKiwi').innerHTML = fruit.Kiwi;
    total();
    }
        

/// create function that loops through the object - and gets the sum of all properties - push this to total - 
// put this function at end of all other functions

function total(){
const fruitArray = Object.values(fruitPrice);
    let total = 0;
for (let x in fruitArray){
    total += +fruitArray[x];
    document.getElementById('displayBasket').innerHTML = total;
}
}
// create function for clear basket that resets the value of the object to 0 

function clearBasket(){
    for (let x in fruit){
        fruit[x] = 0;
    }
     total();
    minusKiwi();
    minusApple();
    minusBanana();
    clearApple()
    clearTotal();
}

// find way to run clear total function -- event listener?

function clearTotal(){
    for (let i in fruitPrice){
        fruitPrice[i] = 0;
    }
    total();
    minusKiwi();
    minusApple();
    minusBanana();
}

function clearApple(){
    fruitPrice.Apple = 0;
    fruit.Apple = 0;
    document.getElementById('displayApplePrice').innerHTML = "£" + fruitPrice.Apple;
    document.getElementById('displayApple').innerHTML = fruit.Apple;
    total()
}




