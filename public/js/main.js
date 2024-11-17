document.getElementById('userForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    await fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    });

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
});

document.getElementById('getUsers').addEventListener('click', async function () {
    const response = await fetch('/users');
    const users = await response.json();

    const userList = document.getElementById('userList');

    while (userList.firstChild) {
        userList.removeChild(userList.firstChild);
    }

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(listItem);
    });
});
