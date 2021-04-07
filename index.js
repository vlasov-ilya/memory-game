let cards = document.querySelectorAll(".card")

function flipCard(){
  event.target.parentElement.classList.toggle("flip")
}

cards.forEach(card => card.addEventListener('click', flipCard));

