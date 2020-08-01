// Events
document.querySelector('#btn').addEventListener('click', loadUsers);

// loadUsers
function loadUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = function() {
        if (this.status == 200) {
            const users = JSON.parse(this.responseText);
            addUsersToDOM(users);
        }
    }

    // Send http request
    xhr.send();
}

// Add users in DOM
function addUsersToDOM(users) {
    let output = '';

    users.forEach(user => {
        output += `
            <div class='user'>
                <img src="${user.avatar_url}" alt="${user.login}" width="70" height="70">
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>username: ${user.login}</li>
                </ul>
            </div>
        `;
    });

    document.querySelector('#users').innerHTML = output;
}