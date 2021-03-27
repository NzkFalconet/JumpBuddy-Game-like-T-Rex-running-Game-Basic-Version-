var character = document.getElementById("character");
var block = document.getElementById("block");

function clickFunction(){
    if(character.classList !="animate")
    {
        character.classList.add("animate");
    }

    setTimeout(function(){
        character.classList.remove("animate");
        //....and whatever else you need to do
}, 500 );
}
       

var checkDead = setInterval(function(){
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top")) ;
    var blockLeft= parseInt(window.getComputedStyle(block).getPropertyValue("left")) ;

     if(blockLeft<20 && blockLeft>0 && characterTop>=130 )
     {
         block.style.animation = "none";
         block.style.display ="none";
         alert("u loose");
     }

},10)