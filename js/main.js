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
// document.querySelector('#stay').addEventListener('click', stayRightThere)


function getFetch(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // let val1 = Number(cardValue(data.cards[0].value))
        // let val2 = Number(cardValue(data.cards[1].value))
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player1_2').src = data.cards[1].image
        document.querySelector('#dealer1').src = data.cards[2].image
        document.querySelector('#dealer1_2').src = data.cards[3].image

        function cardValue(val){
          if(val === "ACE"){
            return 11
          }else if (val === "KING"){
            return 10
          }else if(val === "QUEEN"){
            return 10
          }else if(val === "JACK"){
            return 10
          }else{
            return val
          }
        }

        document.querySelector('#showMe').value = Number(cardValue(data.cards[0].value)) + Number(cardValue(data.cards[1].value))

        

        // if(val1 + val2 < 21) {
        //   document.querySelector('#score').innerText = val1 + val2
        // }else {
        //   document.querySelector('#score').innerText = 'BUST'
        // }
        // document.querySelector('#dealer1_2').src = data.cards[3].image.add('hidden')
          document.querySelector('#hitMe').classList.toggle('hidden')
          document.querySelector('#hitMe').addEventListener('click', hitMeOnce)
          let curNum = 4
          function hitMeOnce() {
          // let hitCount = (data.cards.length - 1)
          // document.querySelector('#hitMeCardOne').src = data.cards[hitCount].image

          //code below works, but it doesn't increment as it should.  If the second i statement is set to 52 then it runs until it hits the end, grabs that card and then displays it.  I need it to grab the next one every time, and then it needs to remember where it ended
          
          document.querySelector('#hitMeCardOne').src = data.cards[curNum].image
          document.querySelector('#hitMeTwo').classList.toggle('hidden')
          document.querySelector('#showMe').value = Number(cardValue(data.cards[0].value)) + Number(cardValue(data.cards[1].value)) + Number(cardValue(data.cards[4].value))
      
          document.querySelector('#hitMe').classList.toggle('hidden')
          return curNum = curNum + 1
        }
        console.log(curNum)

        
        document.querySelector('#hitMeTwo').addEventListener('click', hitMeAgain)
        function hitMeAgain(){
          document.querySelector('#hitMeCardTwo').src = data.cards[curNum].image
          document.querySelector('#showMe').value = Number(cardValue(data.cards[0].value)) + Number(cardValue(data.cards[1].value)) + Number(cardValue(data.cards[4].value)) + Number(cardValue(data.cards[5].value))
          document.querySelector('#hitMeTwo').classList.toggle('hidden')
          document.querySelector('#hitMeThree').classList.toggle('hidden')
          
          return curNum = curNum + 1
        }

        document.querySelector('#hitMeThree').addEventListener('click', hitMeThreeTimes)
        function hitMeThreeTimes(){
          document.querySelector('#hitMeCardThree').src = data.cards[curNum].image
          document.querySelector('#showMe').value = Number(cardValue(data.cards[0].value)) + Number(cardValue(data.cards[1].value)) + Number(cardValue(data.cards[4].value)) + Number(cardValue(data.cards[5].value)) + Number(cardValue(data.cards[6].value))
          document.querySelector('#hitMeThree').classList.toggle('hidden')
          document.querySelector('#hitMeFour').classList.toggle('hidden')
          return curNum = curNum + 1
        }

        document.querySelector('#hitMeFour').addEventListener('click', hitMeFourTimes)
        function hitMeFourTimes(){
          document.querySelector('#hitMeCardFour').src = data.cards[curNum].image
          document.querySelector('#showMe').value = Number(cardValue(data.cards[0].value)) + Number(cardValue(data.cards[1].value)) + Number(cardValue(data.cards[4].value)) + Number(cardValue(data.cards[5].value)) + Number(cardValue(data.cards[6].value))  + Number(cardValue(data.cards[7].value))
          document.querySelector('#hitMeFour').classList.toggle('hidden')
          return curNum = curNum + 1
        }

        
      

        

    })
  };

























    function cardValue(val){
      if(val === "ACE"){
        return 11
      }else if (val === "KING"){
        return 10
      }else if(val === "QUEEN"){
        return 10
      }else if(val === "JACK"){
        return 10
      }else{
        return val
      }
    }