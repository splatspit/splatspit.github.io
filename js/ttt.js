const board = document.getElementById("board")
const boxes = document.querySelectorAll(".box")
const playerName = document.getElementById("player")
let input = "O"
let clickCounter = 0
let winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

// section to change player
function changePlayer(){
    if(input == 'X'){
        input = 'O'
    } else {
        input = 'X'
    }
    playerName.innerHTML = input

}
// winner validation section
function validateWin(){
  let winner = false
  winningCombos.forEach(function(element){
    if (boxes[element[0]].innerHTML == input && boxes[element[1]].innerHTML == input && boxes[element[2]].innerHTML == input) {
      winner = true
    } 
     });
  return winner;
    }

// Game Reset
function gameReset(){
  console.log("game end")
}

// Game start
playerName.innerHTML = input

board.onclick = function(event) {
    if(event.target.innerHTML == "")
    {
        const element = event.target
        element.innerText = input
        if (validateWin()){
          alert("Player " + input +  " WIN LIAO!")
          gameReset()
          
        } 
        else {
              changePlayer(clickCounter++)
              if (clickCounter == 9)
              alert("Draw Game!")
              }
        } else {
              alert("taken")
              }

    }

// Winner Function

// let boxes = document.querySelectorAll(".box");
// let player = "X";

// function changePlayer() {
//   if (player == "X") {
//     player = "O";
//   } else {
//     player = "X";
//   }
// }

// boxes.forEach(function(box) {
//   box.onclick = function(event) {
//     if (event.target.innerHTML == "") {
//       event.target.innerHTML = player;
//       if (checkWin()) {
//         alert('You Won')
//       } else {
//         changePlayer();
//       }
//     } else {
//       alert("Space already taken!");
//     }
//   };
// });

// let winningCombos = [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [0,3,6],
//   [1,4,7],
//   [2,5,8],
//   [0,4,8],
//   [2,4,6],
// ]


// function checkWin() {
//   let winner = false
//   winningCombos.forEach(function(element){
//     if (boxes[element[0]].innerHTML ==÷ player && boxes[element[1]].innerHTML == player && boxes[element[2]].innerHTML == player) {
//       winner = true
//     } 
//   });

//   return winner;
// }