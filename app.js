let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple","green"];

let started = false;
let level = 0;

let h2= document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started== false){
        console.log("game is started");
         started = true;

         Levelup();
    }
});

function gameFlash(btnFlash){
    btnFlash.classList.add("flash")
    setTimeout(function (){
        btnFlash.classList.remove("flash");

    }, 550);

}

function userflash(btnFlash){
    btnFlash.classList.add("userflash")
    setTimeout(function (){
        btnFlash.classList.remove("userflash");

    }, 100);

}

function Levelup(){
    userSeq= [];
    level++;
    h2.innerText = `Level ${level}`;

    let randidx =Math.floor(Math.random()*btns.length);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(idx){

    if (userSeq[idx] == gameSeq[idx]){
        if (userSeq.length == gameSeq.length){

            setTimeout( Levelup, 1000);
        }
    }
    else{
        h2.innerHTML =` Game over! Your score was <b>${level}</b> Press any Key to start. `
        document.querySelector("body").style.backgroundColor = "red"; 
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 350)
        reset();
    }


}

function btnPress() {
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length -1);



};
let allbtns= document.querySelectorAll(".btn")
for (btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started= false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}
