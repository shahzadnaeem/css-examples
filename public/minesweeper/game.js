
const PLAYING=0;
const WON=1;
const LOST=2;


let status = PLAYING;
let turn = 0;
let todo = "";

let statusElem = document.querySelector( `.status` );

function updateStatus() {

    let s = `Turn #${turn} - `;

    if ( status === PLAYING ) {
        s = s + "PLAYING...";
    } else if ( status === WON ) {
        s = s + "You WON!!!";
    } else {
        s = s + "You LOST!!!";
    }

    if ( todo ) {
        s = s + ` [TODO: ${todo}]`
    }

    statusElem.innerHTML = s;
}

function updateBoard() {

    todo = "updateBoard";

    updateStatus();
}

function playGame() {
    while ( status == PLAYING ) {
        let input = window.prompt( "Pick a square: " );

        turn

        if ( input === "x" ) {
            status = LOST;
        } else if ( input === "y" ) {
            status = WON;
        }

        updateBoard();
    }
}

updateBoard();

window.setTimeout( () => { playGame() }, 1000 );
