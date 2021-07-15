$(document).ready(function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        roll();
      }
    });

    $(window).keyup(function(event){
      updateaBtnLabel();
    });

  });

var lastInputRan = "";
var lastDiceUsed = "";
var lastOutputMade = "";

function roll(){
    var inputStr = $("#inputSeed").val();
    var roll1 = new Math.seedrandom(inputStr);
    var diceNum = parseInt($('#RollType').val());
    var deletePos = Math.round(roll1() * inputStr.length);
    var editedStr = inputStr.substr(0, deletePos) + diceNum + inputStr.substr(deletePos);
    var roll2 = new Math.seedrandom(editedStr);
    var result = Math.ceil(roll2() * diceNum);
    
    lastInputRan = inputStr;
    lastDiceUsed = $('#RollType').val();
    lastOutputMade = $("#result-number").text();

    $("#result-number").text(filterResult(result.toString()));
    $("#rollbtn").html('Rolled!');
}

function filterResult(str_result){
  var rolltype = $('#RollType').val();
  switch(rolltype){
    case '2':
      return str_result.replace('1','Heads').replace('2','Tails');
    break;
    default:
      return str_result;
  }
}

function updateaBtnLabel(){
  if(lastInputRan === $("#inputSeed").val() && $( "select#RollType option:checked" ).val() === lastDiceUsed){
    $("#rollbtn").html('Rolled!');
  }else{
    $("#rollbtn").html('Roll the Dice');
  }
}