
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
//SetDeckCard(GetRandomCardOfType("special"), GetRandomColor()); 

function CreateGame() {
    let stack = [];

    for (var i = 0; i < Object.keys(game).length; i++) {
        for (n = 0; n <= game[i].amount; n++) {
            stack.push(game[i].name);
            //game[game.length].color = game[i].color;
            //game[game.length].location = "deck";
        }
    }

    return stack;
}

var stack = CreateGame();

console.log(stack);