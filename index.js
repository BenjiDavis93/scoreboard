let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function h1(){
    homeScore+=1;
    homeScoreEl.textContent=homeScore;
}

function h2(){
    homeScore+=2;
    homeScoreEl.textContent=homeScore;
}

function h3(){
    homeScore+=3;
    homeScoreEl.textContent=homeScore;
}

function g1(){
    guestScore+=1;
    guestScoreEl.textContent=guestScore;
}

function g2(){
    guestScore+=2;
    guestScoreEl.textContent=guestScore;
}

function g3(){
    guestScore+=3;
    guestScoreEl.textContent=guestScore;
}

function hReset(){
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
}

function gReset(){
    guestScore = 0;
    guestScoreEl.textContent = guestScore;
}