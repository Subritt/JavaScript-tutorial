// Events
document.querySelector('#btn1').addEventListener('click', loadUser);
document.querySelector('#btn2').addEventListener('click', loadUsers);

// For user.json
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

// For users.json
function loadUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);

    xhr.onload = function() {
        if(this.status == 200) {
            const users = JSON.parse(this.responseText);
            
            let output = '';
            users.forEach(user => {
                output += `
                    <ul>
                        <li>ID: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>Email: ${user.email}</li>
                    </ul>
                `;                
            });

            document.querySelector('#users').innerHTML = output;
        }
    }

    xhr.send();
}