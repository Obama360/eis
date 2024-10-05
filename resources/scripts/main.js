//Hide UI elements
document.getElementById("game-menu").setAttribute("style", "visibility: hidden;");

function GetRandomCardOfType(type) {
    let card;

    do {
        card = Object.keys(cards)[Math.floor(Math.random() * Object.keys(cards).length)];
    } while (!cards[card].type.includes(type));

    return cards[card];
}

function GetRandomColor() {
    return colors[Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)]].color;
}

function SetDeckCard(card, color) {
    document.getElementById("game-deck-card").setAttribute("style", "background-color: "+ color);
    document.getElementById("deck-card-center-symbol").innerHTML = card.symbol;
}

SetDeckCard(cards["game"], GetRandomColor());

function CreateGame() {

    let deck = [];

    for (i = 0; i < Object.keys(game).length; i++) {
        for(n = 0; n < game[i]["amount"]; n++) {
            card = {"name": game[i]["name"], "color": game[i]["color"], "holder": "deck"};
            deck.push(card);
        }
    }
    console.log(deck);
    return deck;
}

function StartGame() {
    //UI changes
    document.getElementById("game-startmenu").setAttribute("style", "visibility: hidden;");
    document.getElementById("game-menu").setAttribute("style", "visibility: visible;");

    //Get Data for game
    var deck = CreateGame();
    var opponentAmount = document.getElementById("opponentAmount").value;
    var cpuDelay = document.getElementById("turnDelay").value;
    console.log("Creating game with "+opponentAmount+" opponents");

    //Make player deck
    for(i = 0; i < 7; i++) {
        //uuh continue here G.
    }
}

function StopGame() {
    //UI changes
    document.getElementById("game-startmenu").setAttribute("style", "visibility: visible;");
    document.getElementById("game-menu").setAttribute("style", "visibility: hidden;");

}
