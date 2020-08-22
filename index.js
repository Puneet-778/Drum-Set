var len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var btnHTML=this.innerHTML;
    playSound(btnHTML);
    playAnimation(btnHTML);
   
  });
}
document.addEventListener('keypress',function(e)
{
 var boardKey= e.key;
 playSound(boardKey);
 playAnimation(boardKey);
})



function playSound(key)
{
  switch(key)
  {
    case 'w':
    var crack=new Audio("sounds/crash.mp3");
    crack.play();
    break;

    case 's':
    var snare=new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case 'a':
    var kick=new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    case 'd':
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case 'j':
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case 'k':
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case 'l':
    var tom4=new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    default: console.log(btnHTML);

  }
}



function playAnimation(abtn)
{
  document.querySelector("."+abtn).classList.add("pressed");

  setTimeout(function()
  { document.querySelector("."+abtn).classList.remove("pressed");
    
  },100);

}

