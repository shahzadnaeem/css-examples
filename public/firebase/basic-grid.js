
console.log('basic-grid');

const numCards = 10;

function getCardContent( num )
{
    const length = num % 10 + 1;

    let misc = ""

    for ( let i = 0; i < length; i ++ ) {
        misc = misc + `${i} `;
    }

    return `Card-${num} <br/> ${misc}`;
}

function populateCards( num )
{
    const container = document.querySelector('.basic-grid');

    for ( let i = 0; i < num; i ++ ) {
        let div = document.createElement('div');
        div.innerHTML = getCardContent(i);
        div.className = "card cardN";

        container.appendChild( div );
    }
}

populateCards( numCards );
