
var gsum=0; var gyt=0;
var inning1=0;

function reset(){
  gsum=0;
  gyy=0;
  inning1=0;
  document.getElementById("score-title").innerHTML="BATTING";
  document.getElementById("mscore-title").innerHTML="BALLING";
  document.getElementById("total").innerHTML=0;
  document.getElementById("mtotal").innerHTML=0;
  document.getElementById('result').style.display="none";
  clearInterval(m);

}

function play(){
  
  if(inning1==0){
    document.getElementById("score-title").innerHTML="BATTING";
    document.getElementById("mscore-title").innerHTML="BALLING";
  }else{
    document.getElementById("mscore-title").innerHTML="BATTING";
    document.getElementById("score-title").innerHTML="BALLING";
  }
  call();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var modal = document.getElementById('modal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function f(){
  var y= 1+getRandomInt(4);
  var x= document.getElementById("score").innerHTML;
  // x=~~x;
  // y=~~y;
  document.getElementById("image").src="/static/"+y+".jpg"
  document.getElementById("mscore").innerHTML= y;
  var curt= document.getElementById("total").innerHTML;
  var curmt= document.getElementById("mtotal").innerHTML;
  console.log(x, y);
  if(x==y || curmt>curt){
    inning1=inning1^1;
    document.getElementById("next").disabled=false;
    if(inning1==1)
      document.getElementById('show').src="/static/out.jpg";
    else{
      if(gsum>gyt){
        document.getElementById('show').src="/static/win.jpg";
      }else if(gsum==gyt){
        document.getElementById('show').src="/static/tied.jpg";
      }
      else{
        document.getElementById('show').src="/static/lose.jpg";
      }
      document.getElementById("result").style.display='block';
      var get= (gsum>gyt)?"Won":"Lose";
      var runs= Math.abs(gsum-gyt);
      if(gsum!=gyt)
        document.getElementById("result").innerHTML="You "+get+" by "+ runs+" runs !!";
      else
        document.getElementById("result").innerHTML=" MATCH DRAW ";
    }
    document.getElementById('modal').style.display='block';
    clearInterval(m);
    return;
  }
  if(inning1==0){

    document.getElementById("total").innerHTML=gsum;
    
    gsum+= parseInt(x);  
  }
  else{
    document.getElementById("mtotal").innerHTML=gyt;
    
    gyt+=y;
  }
}
function call(){
    m= setInterval(f,1500);
}



