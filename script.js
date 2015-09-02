function randomNum(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function makeSquares(number){
  var width = Math.floor(960/number);
  var gameWidth = width*number;
  $("#gameContainer").css({"width": gameWidth+"px"});
  $("#gameContainer").css({"height": gameWidth+"px"});
  var k = 1;
  for (i=1; i <= number; i++){
    for(j=1; j <= number; j++){
      $("#gameContainer").append("<div id="+k+" class='square'></div>");
      k++;
    }
  }
  $(".square").css({"width": width+"px"});
  $(".square").css({"height": width+"px"});
  squareHover();
}

function squareHover(){
  $(".square").hover(function(){
    var randomChecked = $("#randomColor").prop("checked");
    var eraserChecked = $("#eraserMode").prop("checked");
    if(randomChecked === true){
      var color = "rgb("+randomNum(0,255)+","+randomNum(0,255)+","+randomNum(0,255)+")";
      $(this).css({"background": color});
    }else if(eraserChecked === true){
      $("#randomColor").prop("checked", false);
      var opacity = $(this).css("opacity");
      $(this).css("opacity", opacity - 0.1);
    }else{
      var color = $("#colorPicker").val();
      $(this).css({"background": color});
    }
  });
}


function resetButton(){
  $("#resetColorButton").click(function(){
    $(".square").css({"background": "#000000"});
    $(".square").css({"opacity": "1"});
  });
}


function newGrid(){
  $("#newGridButton").click(function(){
    $("#sizeText").toggle();
  });
  $("#sizeBoxGo").click(function(){
    var size = $("#sizeInput").val();
    var sizeIsNum = isNaN(size);
    if (sizeIsNum === true){
      alert("Oops, that's not a number! Try again.");
    }else{
      $("#gameContainer").empty();
      $("#sizeText").toggle();
      $("#sizeInput").val("25");
      makeSquares(size);
    }
  });
}

function eraserAndRandom(){
  $("#eraserMode").click(function(){
    $("#randomColor").prop("checked", false);
  });
  $("#randomColor").click(function(){
    $("#eraserMode").prop("checked", false);
  });
}

$(document).ready(function(){
  makeSquares(25);
  newGrid();
  resetButton();
  eraserAndRandom();
});
