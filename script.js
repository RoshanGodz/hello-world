let cards = ["A", "B", "C", "D", "A", "B", "C", "D"];
let firstCard = "";
let secondCard = "";
let lock = false;

let game = document.getElementById("game");

// Shuffle cards
cards.sort(() => 0.5 - Math.random());

// Create buttons
cards.forEach(function(letter) {
    let btn = document.createElement("button");
    btn.innerText = "?";

    btn.addEventListener("click", function() {

        if(lock || btn.innerText !== "?") return;

        btn.innerText = letter;

        if(firstCard === "") {
            firstCard = btn;
        } else {
            secondCard = btn;
            lock = true;

            if(firstCard.innerText === secondCard.innerText) {
                firstCard = "";
                secondCard = "";
                lock = false;
            } else {
                setTimeout(function() {
                    firstCard.innerText = "?";
                    secondCard.innerText = "?";
                    firstCard = "";
                    secondCard = "";
                    lock = false;
                }, 1000);
            }
        }
    });

    game.appendChild(btn);
});
