//given a deck of cards
//create a function to completely shuffle them.
//your shuffle must be completely random.
let shuffleDeck = (deck) => {
    let newArr = [], count = 0; 

    for (let i = deck.length-1; i>=0; i--){
        newArr.push(deck.splice(Math.floor(Math.random()*deck.length),1)[0]);
    }
    return newArr;
};
