$(document).ready(function() {

var users = [
  {
    name: "Player 1",
    score: 0,
}];
//board
var cards = [{
    name: "King of Hearts",
    imageFront: "images/king-of-hearts.png",
    imageBack: "images/back.png"
},
{
    name: "King of Diamonds",
    imageFront: "images/king-of-diamonds.png",
    imageBack: "images/back.png"
},
{
    name: "Queen of Hearts",
    imageFront: "images/queen-of-hearts.png",
    imageBack: "images/back.png"
},
{
    name: "Queen of Diamonds",
    imageFront: "images/queen-of-diamonds.png",
    imageBack: "images/back.png"
}];
var pairs = [{}];
var deck = [];

var createDeck = function() {

    cards.forEach(function (card, index){
      for(var i= (cards.length)-1; i >=0; i--){
        deck.push(card)
        console.log(deck);
    }
  }
)};

var printBoard = function(){
  deck.forEach(function (card, i){
    $(".board").append('<img src="'+deck[i].imageFront+'">')
    
  })
};




createDeck();
printBoard();
});
