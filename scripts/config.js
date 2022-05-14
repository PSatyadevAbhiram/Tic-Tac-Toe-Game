function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;
    /*Adding + like that changes string to int */
    playerConfigOverlay.style.display = 'block';
    backdropElement.style.display = 'block'; 
}
function closePlayerConfig() {
    playerConfigOverlay.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
    /*Can alternatively do this like
    inputElement = documnt.geElementbyId('playername')
    inputElement.value = '';
     */
}
function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const playerName = formData.get('playerName').trim(); 
    /*parameter is the 'name' in the input field*/ 
    if(!playerName){ // playerName === ''
        event.target.firstElementChild.classList.add('error');
        errorElement.textContent = 'Please enter a valid Name';
        return;
    }
    const updatedPlayerElement = document.getElementById('player-'+editedPlayer+'-data');
    updatedPlayerElement.children[1].textContent = playerName;

    players[editedPlayer - 1].name = playerName;

    closePlayerConfig();
   
}
