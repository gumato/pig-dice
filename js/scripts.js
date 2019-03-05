
var currScore1 = 0;
var totSum1 = 0;
var sum1 = [];
var sum2 = [];
var totSum2 = 0;
var currScore2 = 0;


$(document).ready(function(){

  $("button#start").click(function(){
    $("#reg").hide();
    $("#game").show();
    var name1=$("input#new-player-1").val();
    var name2=$("input#new-player-2").val();
    $("#pl1").text(name1);
    $("#pl2").text(name2);
  });
});


function roll1(){
  var rollDice1 = parseInt(Math.floor(Math.random()*6+1));
  $("#show1").text(rollDice1);
  if( rollDice1 === 1){
    currScore1=0;
    sum1 = [];
  }
  else{
    currScore1 += rollDice1;
    $("#currentScore1").text(currScore1);
  };
};
$(document).ready(function(){
  $("button#hold1").click(function(){
    sum1.push(currScore1);
    alert(sum1);
    sum1.forEach(function(sumz){
      totSum1+=(sumz);
    });
    $("#total-1").text(totSum1);
    currScore1=0;
    sum1 = [];
    if(totSum1 >= 100){
      alert( " you won the game!!!");
    };
  });
});

function roll2(){
  var rollDice2 = parseInt(Math.floor(Math.random()*6+1));
  $("#show2").text(rollDice2);
  if( rollDice2 === 1){
    currScore2=0;
    sum2 = [];
  }
  else{
    currScore2 += rollDice2;
    $("#currentScore2").text(currScore2);
  };
};
$(document).ready(function(){
  $("button#hold2").click(function(){
    sum2.push(currScore2);
    alert(sum2);
    sum2.forEach(function(sumz){
      totSum2+=(sumz);
    });
    $("#total-2").text(totSum2);
    currScore2=0;
    sum2 = [];
    if(totSum2 >= 100){
      alert( " you won the game!!!");
    };
  });
});
