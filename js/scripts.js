// business logic
// function pig Dice(player1, player2) {
//   this.player1 = player1;
//   this.player2 = player2;
// }




// user interface logic
// $(document).ready(function() {
//   $("form#new-player").submit(function(event) {
//     event.preventDefault();
//     var inputtedplayer1 = $("input#new-player-1").val();
//     var inputtedplayer2 = $("input#new-player-2").val();
//
//     var newPlayer = new Player(inputtedplayer1, inputtedplayer2);
//
//     $("input#new-player-1").val("");
//     $("input#new-player-2").val("");
//   });
// });
function check(){


function Dice(turnScore, totalScore) {
  this.turnScore = turnScore;
  this.totalScore=totalScore;
}
Dice.prototype.Diceroll=function(){
  var diceValues=Math.floor(Math.random)()*6 ) + 1;
  if (diceValues === 1){
  turnScore=0;
}
  else {
    turnScore=turnScore+diceValues;
  };
}
document.getElementById('new').innerHTML=turnScore;
});
