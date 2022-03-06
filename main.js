var screenwidth=screen.width;
var Newwidth=screen.width-70;
var Newheight=screen.height-300;
var lastX,lastY;



canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


colour="black";
linewidth=1;

if (screenwidth<992){
    canvas.width=Newwidth;
    canvas.height=Newheight;
    document.body.style.overflow="hidden";

}




canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart");
colour=document.getElementById("colour").value;
linewidth=document.getElementById("line-width").value;
lastX=e.touches[0].clientX - canvas.offsetLeft;
lastY=e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    console.log("my_tochmove");
    currentX=e.touches[0].clientX - canvas.offsetLeft;
    currentY=e.touches[0].clientY - canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=linewidth;

        ctx.moveTo(lastX,lastY);
        console.log("last position of X and Y="+lastX,lastY);

        ctx.lineTo(currentX,currentY);
        console.log("Current position of X and Y="+currentX,currentY);
        ctx.stroke();
    

    lastX=currentX;
    lastY=currentY;

}



function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

