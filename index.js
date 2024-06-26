const cardcontainer = document.querySelector(".card-container");
let card = [];
let cardOne, cardTwo;
let LockBoard = false;
let score = 0;

score = document.querySelector(".score");

 // const cards= {
 //  "https://evetsai0.github.io/cardfronts/cat.jpg"
 //  "https://evetsai0.github.io/cardfronts/creeper.jpg"
 //  "https://evetsai0.github.io/cardfronts/deer.jpg"
 //  "https://evetsai0.github.io/cardfronts/dog.jpg"
 //  "https://evetsai0.github.io/cardfronts/doraemon.jpg"
 //  "https://evetsai0.github.io/cardfronts/eevee.jpg"
 //  "https://evetsai0.github.io/cardfronts/ghost.jpg"
 //  "https://evetsai0.github.io/cardfronts/kirby.jpg"
 // }

document.querySelector(".score").textContent = score;

function Reset() { //restart
  LockBoard = false;
  CardOne = null;
  CardTwo = null;
  
}

function FlipCard{
	if(LockBoard == false) return;
	if(CardOne == current){
		return;
	}
	this.classList.add("flipped");

	if (!CardOne) {
    CardOne = this;
    return;
    }

  CardTwo = this;
  score++;
  document.querySelector(".score").textContent = score;
  LockBoard = true;

  checkForMatch();
}

function ShuffleCards() {
  let cur = cards.length,
    random,
    tmpValue;
  while (cur !== 0) {
    random = Math.floor(Math.random() * cur);
    cur -= 1;
    tmpValue = cards[cur];
    cards[cur] = cards[random];
    cards[random] = tmpValue;
  }
}

function Match(){
   let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
   isMatch ? disableCards() : unflipCards(); //成功不能再點->disableCards 反->unflipCards
}

function unflipCards() {
    CardOne.classList.remove("flipped");
    CardTwo.classList.remove("flipped");
    Reset();
}


