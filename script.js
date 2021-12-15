// Elements
let quoteArea = document.querySelector('.quote');
const btnChange = document.querySelector('.new-quote');

let quotes = ['"If you want to live a happy life, tie it to a goal, not to people or things"',
    '"Never let the fear of striking out keep you from playing the game."', '"In order to write about life first you must live it."',
    '"I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later."',
    '"Insomnia sharpens your math skills because you spend all night calculating how much sleep you’ll get if you’re able to ‘fall asleep right now."',
    '"I walk around like everything’s fine, but deep down, inside my shoe, my sock is sliding off."',
    '"I never feel more alone than when I’m trying to put sunscreen on my back."',
    '"If I’m not back in five minutes, just wait longer."',
    '"As you get older, three things happen. The first is your memory goes, and I can’t remember the other two."',
    '"I grew up with six brothers. That’s how I learned to dance: waiting for the bathroom."', '"Anyone who lives within their means suffers from a lack of imagination."'];
// Functions
function randomQuote() {
    // random value from array
    let randomItem = quotes[Math.floor(Math.random() * quotes.length)];
    // write it on p element
    quoteArea.innerHTML = randomItem;
}

randomQuote();

// Event listeners
btnChange.addEventListener('click', randomQuote);
