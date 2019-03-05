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

alert("wtf");
var name=prompt("Enter a number");
currScore1=0;
var totSum1=0;
var sum1[];
var sum2[];
var totSum2=0;
var currScore2=0;
$(document).ready(function(){
$("#start").click(function(){
  // $(".reg").hide();
  // $(".game").show();
  var name1=$("input#new-player-1").val();
  var name2=$("input#new-player-2").val();
  $("#pl1").text(name1);
  $("#pl2").text(name2);
});
});
function roll1(){
  var rollDice1=parseInt(Math.floor(Math.random()*6+1));
  document.getElementById('show1').innerHTML=rollDice1;
  alert("hi");
  if(rollDice1!=1){
    currScore1+=rollDice1;
    alert(currScore1);
  }
  else{
    currScore1=0;
    sum1[];
  };

};
$(document).ready(function(){
  $("#hold1").click(function(){
    sum1.push(currScore1);
    alert(sum1);
    sum1.forEach(function(sumz){
      totSum1+=(sumz);
    });
    alert(totSum1);
    currScore1=0;
    sum1[];
    if(totSum1>=100){
      alert("you are the winner");
    };
  });
});
function roll2(){
  var rollDice2=parseInt(Math.floor(Math.random()*6+1));
  document.getElementById('show2').innerHTML=rollDice2;
  if(rollDice2!=1){
    currScore2+=rollDice2;
    alert(currScore2);
  }
  else{
    currScore2=0;
    sum2[];
  };
};
$(document).ready(function(){
  $("#hold2").click(function(){
    sum2.push(currScore2);
    alert(sum2);
    sum2.forEach(function(sumz){
      totSum2+=(sumz);
    });
    alert(totSum2);
    currScore2=0;
    sum2[];
    if(totSum2>=100){
      alert("you are the winner");
    };
  });
});
