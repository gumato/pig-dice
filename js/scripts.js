business logic
function pig Dice(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}




user interface logic
$(document).ready(function() {
  $("form#new-player").submit(function(event) {
    event.preventDefault();
    var inputtedplayer1 = $("input#new-player-1").val();
    var inputtedplayer2 = $("input#new-player-2").val();

    var newPlayer = new Player(inputtedplayer1, inputtedplayer2);

    $("input#new-player-1").val("");
    $("input#new-player-2").val("");
  });
});
