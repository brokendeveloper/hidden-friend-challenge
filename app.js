let names = [];

function addNames() {
    let inputName = document.getElementById('amigo');
    let name = inputName.value.trim();

    if(name === '' || !isNaN(name)){
        alert('Please, write a valid name!');
        inputName.value = '';
        return;
    }

    if(names.includes(name)){
        alert('This name has been added');
        inputName.value = '';
        return;
    }

    names.push(name);
    showNamesOnScreen();
    inputName.value = '';

}

function showNamesOnScreen() {
    let friendsList = document.getElementById('listaAmigos');
    friendsList.innerHTML = '';
    names.forEach( name => {
        let arr = document.createElement('arr');
        arr.textContent = name;
        friendsList.appendChild(arr);
    });
}

