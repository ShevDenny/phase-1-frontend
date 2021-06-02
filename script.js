const moviesUrl = "http://localhost:3000/Movies"
getMovies()


function getMovies() {
    fetch(moviesUrl)
    .then(res => res.json())
    .then(movieCollection => renderMovies(movieCollection))
}

function renderMovies(movieCollection){
    movieCollection.forEach(movie => {
        let movieImg = document.createElement('img')
        movieImg.src = movie.image
        movieImg.width = 350
        movieImg.height = 550
        let h2 = document.createElement('h2')
        h2.textContent = movie.title
        let btnDiv = document.createElement('div')
        let likeBtn = document.createElement('button')
        let dislikeBtn = document.createElement('button')
        likeBtn.textContent = "Like"
        dislikeBtn.textContent ="Dislike"
        btnDiv.append(likeBtn, dislikeBtn)
        let movieDiv = document.querySelector(".Movie")
        movieDiv.append(h2, movieImg, btnDiv)
        
        let divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')
        divCard.append(h2, movieImg,btnDiv)
        movieDiv.append(divCard)   
    // likeBtn.addEventListener('click', addToWatchList)
      
        // dislikeBtn.addEventListener('click', removeMovie)  
    
 })   

 function addToWatchList(){
    let newCard = document.querySelector('likeBtn').addEventListener('click', ()=>{
        console.log(newCard)
    })
 }

 
}

// function addToWatchList(e){
//     // // console.log(e)
//     // let addedCard = 
//     // let li = document.createElement('li')
//     let newCard = document.querySelector('div.card')
//     console.log(newCard)
//     // li.textContent = input.value
//     // input.value = ""
//     // document.querySelector("").appendChild('li')
// }


