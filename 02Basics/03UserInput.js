/*
function to take user input using readline and process
*/
function userInput1(){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    readline.question('who are you?\n', name => {
        console.log(`Hello ${name}!`);
        readline.close();
    });
}

randomGuess();

/*
function to take user input using prompt-sync
*/
function randomGuess(){
    const prompt = require('prompt-sync')({sigint: true});

    // random number from 1 to 10
    const numberToGuess = Math.floor(Math.random() * 10) + 1;
    let foundCorrectNumber = false;

    while(!foundCorrectNumber){
        // user inout
        let guess = prompt('Guess a number from 1 to 10\n');
        // convert to number
        guess = Number(guess);

        // compare guess with numberToGuess
        if(guess === numberToGuess){
            console.log('\nCongrats! you got it!\n');
            foundCorrectNumber = true;
        }else{
            console.log('\nSorry! guess again\n');
        }
    }
}