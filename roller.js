$(document).ready(function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        $("#rollbtn").click();
      }
    });
  });

function roll(){
    var inputStr = $("#inputSeed").val();
    var roll1 = new Math.seedrandom(inputStr);
    var diceNum = getDiceNumber();
    var deletePos = Math.round(roll1() * inputStr.length);
    var editedStr = inputStr.substr(0, deletePos) + diceNum + inputStr.substr(deletePos);
    var roll2 = new Math.seedrandom(editedStr);
    var result = Math.ceil(roll2() * diceNum);
    $("#result-number").text(filterResult(result.toString()));
}

function getDiceNumber(){
    return parseInt($('#RollType').val());
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