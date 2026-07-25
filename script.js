const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const pos = card.getBoundingClientRect().top;

if(pos < window.innerHeight-80){

card.style.opacity=1;
card.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity=0;
card.style.transform="translateY(50px)";
card.style.transition=".7s";

});
