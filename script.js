let imgClass=document.querySelector(".imgClass");
let result=document.querySelector("#result");
let stone=document.getElementById("imgStone");
let paper=document.getElementById("imgPaper");
let sessior=document.getElementById("imgSessior");
let myPoint=document.querySelector(".myPoint");
let computerPoint=document.querySelector(".computerPoint");
let resetbtn=document.querySelector("#resetbtn");

stone.addEventListener("click",function(){
    let computerturn=Math.floor(Math.random() * 3);

    if(computerturn==0){
        result.innerText="Computer Select Stone , Tie";
    }else if(computerturn==1){
        result.innerText="Computer Select Paper , Computer Won"; 
        computerPoint.innerText++;
    }
    else {result.innerText="Computer Select Sessior , You Won";
        myPoint.innerText++;
    }

})
paper.addEventListener("click",function(){
    let computerturn=Math.floor(Math.random() * 3);

    if(computerturn==0){
        result.innerText="Computer Select Stone , You Won";
        myPoint.innerText++;
    }else if(computerturn==1){
        result.innerText="Computer Select Paper , Tie";
    }
    else {result.innerText="Computer Select Sessior , Computer Won";
        computerPoint.innerText++;
    }
})
sessior.addEventListener("click",function(){
    let computerturn=Math.floor(Math.random() * 3);

    if(computerturn==0){
        result.innerText="Computer Select Stone , Computer Won";
        computerPoint.innerText++;
    }else if(computerturn==1){
        result.innerText="Computer Select Paper , You Won";
        myPoint.innerText++;
    }
    else result.innerText="Computer Select Sessior , Tie";
})

resetbtn.addEventListener("click",function(){
    myPoint.innerText=0;
    computerPoint.innerText=0;
    result.innerText="";
})