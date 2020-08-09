// Events
document.querySelector('#btn').addEventListener('click', getName);

// Get Name from php server
function getName() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'YOUR_PHP_SERVER_LINK', true);

    xhr.onload = function() {
        console.log(this.responseText);
    }

    xhr.send();
}