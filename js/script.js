const API_KEY = "kPnN9IiBwR9MUGKqQBt7TSGtrxmj2olevvrjercb4YDrP2Wnc0"

let buttonDiv = document.getElementById("buttons")
let words = ['fish','house','boat','beach', 'cat', 'guitar']
// let randomNumber = Math.floor((Math.random() * words.length))
let correctAnswer = ""
let galleryDiv = document.getElementById("gallery")
let newScore = document.getElementById("scoring")
// let score = 0

console.log(correctAnswer)
console.log(buttonDiv)

words.forEach(function(singleWord) {
    let newButton = document.createElement('button')
    newButton.innerHTML = singleWord
    newButton.classList.add("btn", "btn-warning", "mx-2")
    newButton.onclick = function(){
        if (singleWord == correctAnswer) {
            // score ++
            newScore.innerHTML++
            imgGenerator()
        } else {
            alert("Wrong Biatch!")
        }
    }
    buttonDiv.append(newButton)
    // console.log(newButton)
    
})

function imgGenerator() {
    galleryDiv.innerHTML = null
    let randomNumber = Math.floor((Math.random() * words.length))
    correctAnswer = words[randomNumber]
    fetch(`https://api.tumblr.com/v2/tagged?api_key=${API_KEY}&tag=${correctAnswer}`)
    .then(function (response){
        return response.json()
    })
    .then(function (result) {
        // console.log(result.response)
        result.response.forEach(function(post){
          if(post.type == "photo"){
            //   console.log(post.photos[0].original_size.url)
              const pic = document.createElement("img")
                pic.src = post.photos[0].original_size.url
                pic.height = 200
                galleryDiv.appendChild(pic)
          }  
        })
    })
}

imgGenerator()