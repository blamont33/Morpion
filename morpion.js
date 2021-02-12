let player2 = false;
let hit = 0;
let score1 = 0;
let score2 = 0;
let name1 = "Joueur 1";
let name2 = "Joueur 2";
let storage1 = sessionStorage.getItem("name1");
let storage2 = sessionStorage.getItem("name2");
let storageScore1 = sessionStorage.getItem("score1");
let storageScore2 = sessionStorage.getItem("score2");

initialisationName();

function play(event) {

    symbol(event);
    win(event);
    loose();

}

function initialisationName() {
    document.getElementById("player").innerText = "A vous de jouer " + (storage1 != null ? sessionStorage.getItem("name1") : name1);
    document.getElementById("scoreJ1").innerText = "Score de " + (storage1 != null ? sessionStorage.getItem("name1") : name1) + ": " + (storageScore1 === null ? "0" : storageScore1);
    document.getElementById("scoreJ2").innerText = "Score de " + (storage2 != null ? sessionStorage.getItem("name2") : name2) + ": " + (storageScore2 === null ? "0" : storageScore2);
}

function saveName() {
    name1 = document.getElementById("player1").value;
    sessionStorage.setItem("name1", name1);
    name2 = document.getElementById("player2").value;
    sessionStorage.setItem("name2", name2);
    initialisationName();

}

function symbol(event) {

    if (player2 === true && event.target.innerText === "") {
        event.target.innerHTML = "<div class='symbol'>O</div>";
        document.getElementById("player").innerText = "A vous de jouer " + (storage1 != null ? sessionStorage.getItem("name1") : name1);
        player2 = false;
    } else if (player2 === false && event.target.innerText === "") {
        event.target.innerHTML = "<div class='symbol'>X</div>";
        document.getElementById("player").innerText = "A vous de jouer " + (storage2 != null ? sessionStorage.getItem("name2") : name2);
        player2 = true;
    } else {
        window.alert("Cette case a déjà été jouée!")
        hit = hit - 1;
    }
}

let won = false;

function win(event) {


    let table = document.getElementsByTagName("button");
    if (table[0].innerText === "X" && table[1].innerText === "X" && table[2].innerText === "X" ||
        table[3].innerText === "X" && table[4].innerText === "X" && table[5].innerText === "X" ||
        table[6].innerText === "X" && table[7].innerText === "X" && table[8].innerText === "X" ||
        table[0].innerText === "X" && table[3].innerText === "X" && table[6].innerText === "X" ||
        table[1].innerText === "X" && table[4].innerText === "X" && table[7].innerText === "X" ||
        table[2].innerText === "X" && table[5].innerText === "X" && table[8].innerText === "X" ||
        table[0].innerText === "X" && table[4].innerText === "X" && table[8].innerText === "X" ||
        table[2].innerText === "X" && table[4].innerText === "X" && table[6].innerText === "X") {
        won = true;
        score1 = (storageScore1 === null ? score1 = score1 + 1 : JSON.parse(storageScore1) + 1);
        sessionStorage.setItem("score1", JSON.stringify(score1));
        setTimeout(function () {
            if (confirm("Bravo " + (storage1 != null ? sessionStorage.getItem("name1") : name1) + " vous avez gagné!! Voulez-vous rejouer ?")) {
                document.location.reload();
            } else {
                document.getElementById("game").innerText = ""
                document.getElementById("player").innerHTML = "Merci d'avoir joué! A bientôt!"
            }

        }, 10);

    } else if (table[0].innerText === "O" && table[1].innerText === "O" && table[2].innerText === "O" ||
        table[3].innerText === "O" && table[4].innerText === "O" && table[5].innerText === "O" ||
        table[6].innerText === "O" && table[7].innerText === "O" && table[8].innerText === "O" ||
        table[0].innerText === "O" && table[3].innerText === "O" && table[6].innerText === "O" ||
        table[1].innerText === "O" && table[4].innerText === "O" && table[7].innerText === "O" ||
        table[2].innerText === "O" && table[5].innerText === "O" && table[8].innerText === "O" ||
        table[0].innerText === "O" && table[4].innerText === "O" && table[8].innerText === "O" ||
        table[2].innerText === "O" && table[4].innerText === "O" && table[6].innerText === "O") {
        won = true;
        score2 = (storageScore2 === null ? score2 = score2 + 1 : JSON.parse(storageScore2) + 1);
        sessionStorage.setItem("score2", JSON.stringify(score2));
        setTimeout(function () {
            if (confirm("Bravo " + (storage2 != null ? sessionStorage.getItem("name2") : name2) + " vous avez gagné!! Voulez-vous rejouer ?")) {
                document.location.reload();
            } else {
                document.getElementById("game").innerText = ""
                document.getElementById("player").innerHTML = "Merci d'avoir joué! A bientôt!"
            }

        }, 10);
    }

}

function loose() {
    hit = hit + 1;
    console.log(hit);
    if (hit === 9 && won === false) {
        setTimeout(function () {
            if (confirm("Match nul!! Voulez-vous rejouer ?")) {
                document.location.reload();
            } else {
                document.getElementById("game").innerText = ""
                document.getElementById("player").innerHTML = "Merci d'avoir joué! A bientôt!"
            }

        }, 11);
    }
}

function eraseScore(){
    sessionStorage.removeItem("score1");
    sessionStorage.removeItem("score2");
    document.location.reload();
}

