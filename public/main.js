class Deck {
    constructor() {
      this.deck = [];
      const suits = ['H', 'S', 'C', 'D'];
      
      const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  
      for (let suit in suits) {
        for (let value in values) {
          this.deck.push({value:values[value], suit:suits[suit]});
        }
      }
    }

    shuffle() {
        const { deck } = this;
        let m = deck.length, i;
      
        while (m) {
          i = Math.floor(Math.random() * m--);
      
          [deck[m], deck[i]] = [deck[i], deck[m]];
        }
      
        return this;
    }

    display(){
        let imgPath = "./img/cards/"
        let card_deck = document.querySelector("#card_deck");
        card_deck.innerHTML = "";
        deck1.deck.map((card)=>{
            let imgNode = document.createElement("img");
            imgNode.classList.add("card");
            imgNode.setAttribute("id", `${card.suit}${card.value}`);
            imgNode.src= `${imgPath}${card.value}${card.suit}.png`;
            card_deck.appendChild(imgNode);
            const suitsName = {
                H:"Hearts",
                S:"Spades",
                C:"Clubs",
                D:"Diamonds"
            }
            document.querySelector(`#${card.suit}${card.value}`).addEventListener("click", (e)=>{
                window.alert(`Card ${e.target.id[1]} of ${suitsName[e.target.id[0]]} is clicked`)
            })
        })   
        
    }
    
}

let deck1 = new Deck();
deck1.display();
document.querySelector("#shuffle").addEventListener("click", ()=>{
    deck1.shuffle();
    deck1.display();
})


