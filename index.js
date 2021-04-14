let cards = document.querySelectorAll(".card");
let card1;
let card2;
let flipedCard = false;
let activation = false;
let sec = 0;
let time;


let flip = 0; 
let div = document.querySelectorAll('div');

[...cards].forEach(card => {
  let position = Math.floor(Math.random() * 12)
  card.style.order = position
});

cards.forEach((card) => card.addEventListener("click", flipCard));

function flipCard() {
  let a = event.target.parentElement;
  startStopwatch();
  if (activation) return activation;
  a.classList.add("flip");

  if (!flipedCard) {
    flipedCard = true;
    card1 = a;
    return;
  }

  if (a !== card1){
    card2 = a}

  if (card1.dataset.number == card2.dataset.number) {
    cardLock();
  } else {
    flipBack();
  }
}



function cardLock() {
  card1.removeEventListener("click", flipCard);
  card2.removeEventListener("click", flipCard);
  cleareCard();
  flip++
  winCheck();
}

function flipBack() {
  activation = true;
  setTimeout(() => {
    card1.classList.remove("flip");
    card2.classList.remove("flip");
    cleareCard();
  }, 1000);
}

function cleareCard() {
  activation = false;
  flipedCard = false;
  card1 = null;
  card2 = null;
}

function winCheck() {
  if (flip == (div.length/2)) {

    setTimeout(() => {alert( 'ПОБЕДА! \n Тебе понадобовилось ' + sec + ' секунд!', 250)})
    setTimeout(() => {window.location.reload()}, 300)

  }
}

function stopwatch() {
  sec++ 

  if(sec >= 0 ){
    time = setTimeout(stopwatch, 1000)

  }else if(flip == (div.length/2)){
    clearTimeout(time);
  }
}

function startStopwatch(){
  if( sec == 0 ){
    stopwatch()
  } 
}