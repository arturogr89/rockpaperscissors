function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); 
    if (choice === 0) return 'Rock';
    if (choice === 1) return 'Paper';
    return 'Scissors'; 
}

