document.querySelector('#btn1').addEventListener('click', loadUser);

function loadUser() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);

    xhr.onload = function() {
        if (this.status == 200) {
            const user = JSON.parse(this.responseText);
            
            let output = '';

            output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Email: ${user.email}</li>
                </ul>
            `;

            document.querySelector('#user').innerHTML = output;
        }
    }

    xhr.send();
}