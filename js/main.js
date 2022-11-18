//Get the deck
let deckId = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        deckId = data.deck_id
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


document.querySelector('#drawCards').addEventListener('click', getFetch)
document.querySelector('#hitMe').addEventListener('click', hitMeOnce)
document.querySelector('#stay').addEventListener('click', stayRightThere)


function getFetch(){
  
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // let val1 = Number(cardValue(data.cards[0].value))
        // let val2 = Number(cardValue(data.cards[1].value))
        // let val3 = Number(cardValue(data.cards[2].value))
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player1_2').src = data.cards[1].image
        document.querySelector('#dealer1').src = data.cards[2].image
        // document.querySelector('#dealer1_2').src = data.cards[3].image.add('hidden')
        
        })
    }


    function hitMeOnce() {
      const urlNew = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`


  fetch(urlNew)
      .then(res => res.json())
      .then(data => {
        // let hitMeCardOne = Number(cardValue(data.cards[0].value))
        document.querySelector('#hitMeCardOne').src = data.cards[0].image
      })
    };

    function stayRightThere() {
      const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`
      
      fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
      document.querySelector('#dealer1_2').src = data.cards[3].image
      })
    }
