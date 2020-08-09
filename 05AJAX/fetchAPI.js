// Events
document.querySelector('#get-text').addEventListener('click', getText);
document.querySelector('#get-users').addEventListener('click', getUsers);
document.querySelector('#get-api-data').addEventListener('click', getApiData);
document.querySelector('#add-post').addEventListener('submit', addPost);

// Get Text
function getText(){
    fetch('sample.txt')
    .then(res => res.text())
    .then(data => {
        document.querySelector('.output').innerHTML = data;
    }).catch(error => console.log(error))
}

// Get Users
function getUsers() {
    fetch('users.json')
    .then(res => res.json())
    .then(users => {
        let output = '<h2>Users</h2>';
        users.forEach(user => {
            output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Emai: ${user.email}</li>
                </ul>
            `;
        });
        document.querySelector('.output').innerHTML = output;
    })
}

// Get API Data
function getApiData() {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        let output = '<h2>Posts</h2>';
        data.forEach(result => {
            output += `
                <div class="posts">
                    <h3>${result.title}</h3>
                    <p>${result.body}</p>
                </div>
            `;
        });
        document.querySelector('.output').innerHTML = output;
    })
}

// Add Post
function addPost(e) {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: {
            body: JSON.stringify({title: title, body: body})
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}