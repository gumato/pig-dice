// business logic
// function pig Dice(player1, player2) {
//   this.player1 = player1;
//   this.player2 = player2;
// }
//
//
//
//
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
currentScore=0;
$(document).ready(function(){
$("#start").click(function(){
  $(".reg").hide();
  $(".game").show();
  var name1=$("input#new-player-1").val();
  var name2=$("input#new-player-2").val();
  $("#pl1").text(name1);
  $("#pl2").text(name2);
});
});
function roll(){
  var rollDice=parseInt(Math.floor(Math.random()*6+1));
  document.getElementById('show1').innerHTML=rollDice;
  if(rollDice!=1){
    currentScore+=rollDice;
  }
  else{
    currentScore=0;
  }

};
