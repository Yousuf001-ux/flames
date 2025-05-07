let form = document.getElementById("form")
let firstInput = document.getElementById("firstname")
let secondInput = document.getElementById("secondname")
let scoreContainer = document.getElementById("score-container")
let scoreValue = document.getElementById("score-value")
let goBack = document.getElementById("back")

form.addEventListener("submit",displayScore)
function displayScore(event){
    if(firstInput.value && secondInput.value){
        showOverlay()
        event.preventDefault()
        let number = Math.floor(Math.random()*100)
        scoreValue.textContent = `${number}%`
    
        form.reset()
    }else {
        alert("Please fill the fields")
    }  
}

goBack.addEventListener("click",hideOverlay)

function showOverlay(){
    if(scoreContainer.classList.contains("score-container")){
        scoreContainer.classList.remove("score-container")
        scoreContainer.classList.add("score-container-visible")
    }
}

function hideOverlay(){
    if(scoreContainer.classList.contains("score-container-visible")){
        scoreContainer.classList.remove("score-container-visible")
        scoreContainer.classList.add("score-container")
    }
}