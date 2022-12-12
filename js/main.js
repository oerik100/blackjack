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
// document.querySelector('#hitMe').addEventListener('click', hitMeOnce)
// document.querySelector('#stay').addEventListener('click', stayRightThere)


function getFetch(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let card0 = data.cards[0]
        let card1 = data.cards[1]
        let card2 = data.cards[2]
        let card3 = data.cards[3]
        let card4 = data.cards[4]
        let card5 = data.cards[5]
        let card6 = data.cards[6]
        let card7 = data.cards[7]
        let card8 = data.cards[8]
        let card9 = data.cards[9]
        let card10 = data.cards[10]
        let card11 = data.cards[11]
        let card12 = data.cards[12]
        let card13 = data.cards[13]
        let card14 = data.cards[14]
        let card15 = data.cards[15]
        let card16 = data.cards[16]
        let card17 = data.cards[17]
        let card18 = data.cards[18]
        let card19 = data.cards[19]
        let card20 = data.cards[20]
        let card21 = data.cards[21]
        let card22 = data.cards[22]
        let card23 = data.cards[23]
        let card24 = data.cards[24]
        let card25 = data.cards[25]
        let card26 = data.cards[26]
        let card27 = data.cards[27]
        let card28 = data.cards[28]
        let card29 = data.cards[29]
        let card30 = data.cards[30]
        let card31 = data.cards[31]
        let card32 = data.cards[32]
        let card33 = data.cards[33]
        let card34 = data.cards[34]
        let card35 = data.cards[35]
        let card36 = data.cards[36]
        let card37 = data.cards[37]
        let card38 = data.cards[38]
        let card39 = data.cards[39]
        let card40 = data.cards[40]
        let card41 = data.cards[41]
        let card42 = data.cards[42]
        let card43 = data.cards[43]
        let card44 = data.cards[44]
        let card45 = data.cards[45]
        let card46 = data.cards[46]
        let card47 = data.cards[47]
        let card48 = data.cards[48]
        let card49 = data.cards[49]
        let card50 = data.cards[50]
        let card51 = data.cards[51]


        // let val1 = Number(cardValue(data.cards[0].value))
        // let val2 = Number(cardValue(data.cards[1].value))
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player1_2').src = data.cards[1].image
        document.querySelector('#dealer1').src = data.cards[2].image
        document.querySelector('#dealer1_2').src = data.cards[3].image
        
        // if(val1 + val2 < 21) {
        //   document.querySelector('#score').innerText = val1 + val2
        // }else {
        //   document.querySelector('#score').innerText = 'BUST'
        // }
        // document.querySelector('#dealer1_2').src = data.cards[3].image.add('hidden')
          document.querySelector('#hitMe').addEventListener('click', hitMeOnce)
          function hitMeOnce() {
          document.querySelector('#hitMeCardOne').src = card51.image
          console.log(card51.image)
        }


        

        

    })
  };


    // function hitMeOnce() {
    //   const urlNew = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`

    //   fetch(urlNew)
    //     .then(res => res.json())
    //     .then(data1 => {
    //       console.log(data1)
    //     })
    // }


  //   function hitMeOnce() {
  //     const urlNew = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`


  // fetch(urlNew)
  //     .then(res => res.json())
  //     .then(data => {
  //       let val3 = Number(cardValue(data.cards[3].value))
  //       // let hitMeCardOne = Number(cardValue(data.cards[0].value))
  //       document.querySelector('#hitMeCardOne').src = data.cards[0].image
  //       if(val1 + val2 + val3 < 21) {
  //         document.querySelector('#score').innerText = val1 + val2 + val3
  //       }else {
  //         document.querySelector('#score').innerText = 'BUST'
  //       }
  //     })
  //   };

  //   function stayRightThere() {
  //     const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`
      
  //     fetch(url)
  //     .then(res => res.json()) // parse response as JSON
  //     .then(data => {
  //     document.querySelector('#dealer1_2').src = data.cards[3].image
  //     })
  //   }


    // function cardValue(val){
    //   if(val === "ACE"){
    //     return 11
    //   }else if (val === "KING"){
    //     return 10
    //   }else if(val === "QUEEN"){
    //     return 10
    //   }else if(val === "JACK"){
    //     return 10
    //   }else{
    //     return val
    //   }
    // }