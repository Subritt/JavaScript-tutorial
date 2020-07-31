// Create Event Listener
document.querySelector('#btn').addEventListener('click', loadText);

function loadText() {
    // Create XHR Object
    const xhr = new XMLHttpRequest();
    
    // OPEN(type, url/file, async)
    xhr.open('GET', 'sample.txt', true);

    xhr.onload = function() {
        if (this.status == 200) {
            console.log(this.responseText);
        }
    }

    // Send request
    xhr.send();
}