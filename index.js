
function general(){
    
  function jackp(jack,jane){
 
  document.getElementById("number2").innerHTML= `Jackpot is: ${jack}`;

  
 
 document.getElementById("number1").innerHTML= `your number is: ${jane}`;


 }
 
 let jackpot= Math.floor(Math.random()*100+1);
 let yournum= document.getElementById("ent").value;
 jackp(jackpot, yournum);
 

 if(yournum==jackpot){
  document.getElementById("txt").innerHTML=`Congratulations you won JACKPOT`;


}
 else if(yournum<jackpot){
 
  
  
  document.getElementById("txt").innerHTML=`draw another card`;}
  
  else {
    
    document.getElementById("txt").innerHTML=`you LOOSE!`;
  }
 
}
function tryagain(){
  document.getElementById("ent").value="";
  document.getElementById("txt").innerHTML=`Want to play a round?`;
  document.getElementById("number2").innerHTML= "";
  document.getElementById("number1").innerHTML= "";
        

}





