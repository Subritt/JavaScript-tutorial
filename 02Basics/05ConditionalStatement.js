var prompt = require('prompt-sync')({sigint: true});

var weight = Number(prompt('Enter your weight in kilograms: '));
var height = Number(prompt('Enter your height in meters: '));

var bmi = weight/(height ** 2);
console.log('\nYour BMI: ', bmi.toFixed(2));

if (bmi < 18.5) {
    console.log("You are UNDERWEIGHT!");
}else if(bmi >= 18.5 && bmi < 25){
    console.log("You are NORMAL :)");
}else if(bmi >= 25 && bmi < 30){
    console.log("You are OVERWEIGHT!");
}else{
    console.log("You fall under OBESE Range");
}