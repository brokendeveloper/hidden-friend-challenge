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
        let li = document.createElement('li');
        li.textContent = name;
        friendsList.appendChild(li);
    });
}


function giveawayHiddenFriend() {
    if(names.length < 2){
        alert('Is necessary 2 participants at least to the giveaway');
        return;
    }


    let namesToGiveaway = [...names];
    let results = {};

    let resultDiv = document.getElementById('resultado');
    resultDiv.innerHTML = '';

    for(let i = 0; i< names.length; i++){
        const sorterName = names[i];

        let freeNames = namesToGiveaway.filter(name => name !== sorterName);

        if(freeNames.length === 0){
            giveawayHiddenFriend();
            return;
        }

        const drawnIndex = Math.floor(Math.random() * freeNames.length);
        const drawnName = freeNames[drawnIndex];

        results[sorterName] = drawnName;

        const indexToRemove = namesToGiveaway.indexOf(drawnName);
        namesToGiveaway.splice(indexToRemove, 1);
    
    }
    
    showResultsOnScreen(results);
}

function showResultsOnScreen(results) {
    let resultDiv = document.getElementById('resultado');
    resultDiv.innerHTML = '';
    for(sorterName in results){
        let li = document.createElement('li');
        li.innerHTML = `<span>${sorterName}</span> tirou <span>${results[sorterName]}</span>`;
        resultDiv.appendChild(li);

    }
}