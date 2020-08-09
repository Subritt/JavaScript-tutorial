// Events
document.querySelector('#btn').addEventListener('click', getName);

// Get Name from php server
function getName() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1/AJAXtutorial/process.php', true);

    xhr.onload = function() {
        console.log(this.responseText);
    }

    xhr.send();
}