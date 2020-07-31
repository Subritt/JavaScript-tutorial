// Create Event Listener
document.querySelector('#btn').addEventListener('click', loadText);

function loadText() {
    // Create XHR Object
    const xhr = new XMLHttpRequest();
    
    // OPEN(type, url/file, async)
    xhr.open('GET', 'sample.txt', true);

    console.log('READYSTATE: ', xhr.readyState);

    // OPTIONAL - used for loaders
    xhr.onprogress = function() {
        console.log('READYSTATE: ', xhr.readyState);
    }

    xhr.onload = function() {
        console.log('READYSTATE: ', xhr.readyState); // onload won't run until readyState -> 4
        if (this.status == 200) {
            // console.log(this.responseText);

            // responseText in innerHTML
            document.querySelector('#file-text').innerHTML = xhr.responseText;
        }
    }

    xhr.onerror = function() {
        console.log('Request error...');
    }

    // xhr.onreadystatechange = function () {
    //     console.log('READYSTATE: ', xhr.readyState); // checks for all readyState values
    //     if (this.readyState == 4 && this.status == 200) {
    //         // console.log(this.responseText);
    //     }
    // }

    // Send request
    xhr.send();
}

/**
 * readyState Values
 * 0: request not initialized
 * 1: server connection established
 * 2: request received
 * 3: processing request
 * 4: request finished and response is ready
 */

/**
 * HTTP Statuses
 * 200: "OK"
 * 403: "Forbidden"
 * 404: "Not Found"
*/