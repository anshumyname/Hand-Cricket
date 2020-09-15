
var gsum=0; var gyt=0;
var inning1=0;

function play(){
  call();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function f(){
  var y= 1+getRandomInt(4);
  var x= document.getElementById("score").innerHTML;
  // x=~~x;
  // y=~~y;
  document.getElementById("image").src="/static/"+y+".jpg"
  document.getElementById("mscore").innerHTML= y;
  // console.log(x, y);
  if(x==y){
    inning1=inning1^1;
    document.getElementById("next").disabled=false;
    alert("___YOU_ARE_OUT__");
    clearInterval(m);
    return;
  }
  if(inning1==0){

    document.getElementById("total").innerHTML=gsum;
    
    gsum+= parseInt(x);  
  }
  else{
    document.getElementById("mtotal").innerHTML=gyt;
    console.log("going to next inning -- ",y );
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



