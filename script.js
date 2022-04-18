function computerPlay() {
    let computerPlay = Math.floor(Math.random() * 3) + 1;
    if (computerPlay == 1) {
        computerPlay = "Rock";
    } else if (computerPlay == 2) {
        computerPlay = "Paper"; 
    } else {
        computerPlay = "Scissors";
    }
    return computerPlay;
}
    


