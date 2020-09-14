var m;

var a= document.getElementsByClassName("score");
var gsum=0; var gyt=0;
var inning1=0;

function play(){
  call();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function f(){
  var x= 1+getRandomInt(12);
  var y=1+getRandomInt(12);
  // x=~~x;
  // y=~~y;
  document.getElementsByClassName("score")[0].innerHTML=x;
  document.getElementsByClassName("mscore")[0].innerHTML=y;
  if(x==y){
    inning1=inning1^1;
    document.getElementById("next").disabled=false;
    alert("___YOU_ARE_OUT__");
    clearInterval(m);
    return;
  }
  if(inning1==0){
    document.getElementsByClassName("total")[0].innerHTML=gsum;
    gsum+=x;  
  }
  else{
    document.getElementsByClassName("mtotal")[0].innerHTML=gyt;
    gyt+=y;
  }
}
function call(){
    m= setInterval(f,2000);
}

function results(){
  if(gsum==gyt){
    alert("Draw");
  }
  else if(gsum>gyt){
    alert("Player 1 Won");
  }
  else{
    alert("Player 2 Won")
  }  
}

call();





