const board = document.getElementById("board")
const boxes = document.querySelectorAll(".box")
let input = "O"
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



function changePlayer(){
    if(input == 'X'){
        input = 'O'
    } else {
        input = 'X'
    }
}

function validateWin(){
  let winner = false
  // winningCombos.forEach(function(element){
  //   if (boxes[element[0]].innerHTML == player && boxes[element[1]].innerHTML == player && boxes[element[2]].innerHTML == player) {
  //     winner = true
  //   } 
  //    });

  // return winner;

    }
// Game start
board.onclick = function(event) {
    if(event.target.innerHTML == "")
    {
        const element = event.target
        element.innerText = input
        validateWin()
        changePlayer()
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
//     if (boxes[element[0]].innerHTML == player && boxes[element[1]].innerHTML == player && boxes[element[2]].innerHTML == player) {
//       winner = true
//     } 
//   });

//   return winner;
// }