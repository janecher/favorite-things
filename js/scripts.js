$(document).ready(function(){
  $("form#input").submit(function(event){
    let inputArray=[];
    inputArray.push($("#color").val(), $("#season").val(), $("#animal").val(), $("#food").val());
    let newArray=[];
    newArray.push(inputArray[1], inputArray[0], inputArray[2]);
    $("li#first").text(newArray[0]);
    $("li#second").text(newArray[1]);
    $("li#third").text(newArray[2]);
    $(".result").show();
    event.preventDefault();
  });
});