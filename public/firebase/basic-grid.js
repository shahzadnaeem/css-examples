
console.log('basic-grid');

const numCards = 10;

function populateCards( num )
{
    const container = document.querySelector('.basic-grid');

    for ( let i = 1; i <= num; i ++ ) {
        let div = document.createElement('div');
        div.innerHTML = `Card-${i}`;
        div.className = "card";

        container.appendChild( div );
    }
}

populateCards( numCards );

