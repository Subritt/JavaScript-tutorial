var prompt = require('prompt-sync')({sigint: true});
    
let sellingPrice = Number(prompt('Selling Price: '));
let listingPrice = Number(prompt('Listed Price: '));

displayDiscountPercentage(sellingPrice, listingPrice);

function displayDiscountPercentage(sellingPrice, listingPrice){
    var getDiscountPercentage = ((listingPrice - sellingPrice)/listingPrice) * 100;
    console.log(Math.floor(getDiscountPercentage) + "% off");
}