let cards = document.querySelectorAll(".card")
let card1
let card2
let flipedCard = false;
let activation = false;

[...cards].forEach(card => {
  let position = Math.floor(Math.random() * 12)
  card.style.order = position
});

cards.forEach(card => card.addEventListener('click', flipCard));


function flipCard(){
  let a = event.target.parentElement
  if (activation) return activation
  a.classList.add('flip')

  if (!flipedCard) {
    flipedCard = true;
    card1 = a
    return
  }
  card2 = a

  if (card1.dataset.number == card2.dataset.number) {
    cardLock()
  } else {
    flipBack()
  }
}

function cardLock(){
  card1.removeEventListener('click', flipCard);
  card2.removeEventListener('click', flipCard);
  cleareCard();
}

function flipBack(){
  activation = true
  setTimeout(() => {
    card1.classList.remove('flip')
    card2.classList.remove('flip')
    cleareCard()
  }, 1000)
  
}

function cleareCard(){
  activation = false;
  flipedCard = false;
  card1 = null;
  card2 = null;
}