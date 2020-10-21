document.addEventListener('keydown',function(event){
    console.log(event);
    if(event.keyCode == 38){
        document.addEventListener('click',moveUp())
    }
    else if(event.keyCode == 37){
        document.addEventListener('click',moveLeft())
    }
    else if(event.keyCode == 39){
        document.addEventListener('click',moveRight())
    }
    else if(event.keyCode == 40){
        document.addEventListener('click',moveDown())
    }
});
function moveUp(){
    let tank=document.getElementById("tank").style.top;
    console.log(tank)
    console.log(document.getElementById("tank").style.left)
    let a = parseInt(tank)-19
    if(a>=0 && a<190){
        document.getElementById("tank").style.top=a+"px"   
    }
    document.getElementById("tank").addEventListener('click',boomno())
}
function moveLeft(){
    let tank=document.getElementById("tank").style.left;
    console.log(document.getElementById("tank").style.top)
    console.log(tank)
    let a = parseInt(tank)-19
    if(a>=0 && a<190){
        document.getElementById("tank").style.left=a+"px"   
    }
    document.getElementById("tank").addEventListener('click',boomno())
}
function moveRight(){
    let tank=document.getElementById("tank").style.left;
    console.log(document.getElementById("tank").style.top)
    console.log(tank)
    let a = parseInt(tank)+19
    if(a>=0 && a<190){
        document.getElementById("tank").style.left=a+"px"   
    }
    document.getElementById("tank").addEventListener('click',boomno())
}
function moveDown(){
    let tank=document.getElementById("tank").style.top;
    console.log(tank)
    console.log(document.getElementById("tank").style.left)
    let a = parseInt(tank)+19
    if(a>=0 && a<190){
        document.getElementById("tank").style.top=a+"px"   
    }
    document.getElementById("tank").addEventListener('click',boomno())
}
function boomno(){
    let check=1;
    let x=document.getElementById("tank").style.top;
    let y=document.getElementById("tank").style.left;
    let a=document.getElementById("boom").style.top;
    let b=document.getElementById("boom").style.left;
    let message = document.getElementById("message");
    if(parseInt(x)==parseInt(a)+19 && parseInt(y)==parseInt(b)){
        console.log("hello tung")
        document.getElementById("boom").style.width="19px"
        document.getElementById("boom").style.height="19px"
        document.getElementById("boom").style.backgroundSize="100% 100%"
        document.getElementById("boom").style.backgroundImage="url('explosion.png')"
        check=0
    }
    if(check==0){
        message.innerText="GAME OVER!!!"
        document.getElementById("len").disabled =true
        document.getElementById("trai").disabled =true
        document.getElementById("xuong").disabled =true
        document.getElementById("phai").disabled =true
        document.getElementById("playagain").hidden=false
    }
}