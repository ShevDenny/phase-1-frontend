const moviesUrl = "http://localhost:3000/Movies"
getMovies()


function getMovies() {
    fetch(moviesUrl)
    .then(res => res.json())
    .then(movieCollection => renderMovies(movieCollection))
}

function renderMovies(movieCollection){
    movieCollection.forEach(movie => {
        const movieImg = document.createElement('img')
        movieImg.src = movie.image
        movieImg.width = 350
        movieImg.height = 550

        const h2 = document.createElement('h2')
        const btnDiv = document.createElement('div')
        const likeBtn = document.createElement('button')
        const dislikeBtn = document.createElement('button')
        h2.textContent = movie.title

        likeBtn.textContent = "Like"
        dislikeBtn.textContent ="Dislike"
        btnDiv.append(likeBtn, dislikeBtn)
        const movieDiv = document.querySelector(".Movies")
        movieDiv.append(h2, movieImg, btnDiv)

        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')
        divCard.setAttribute('id', 'ids' + movie.id)
        divCard.append(h2, movieImg,btnDiv)
        movieDiv.append(divCard)   

            console.log(movieCollection)
            likeBtn.addEventListener('click', (e) =>{
            console.log(divCard)
            let watchList = document.querySelector('.watch-list')
            watchList.appendChild(divCard)
        })   

          // console.log(movieCollection)
            dislikeBtn.addEventListener('click', (e) =>{
            console.log(divCard)
            divCard.remove();

        })  
  }) 
 }

