const moviesUrl = "http://localhost:3000/Movies"
getMovies()

function getMovies() {
    fetch(moviesUrl)
    .then(res => res.json())
    .then(movieCollection => renderMovies(movieCollection))
}

function renderMovies(movieCollection){
    movieCollection.forEach(movie => {
        const movieImgOne = document.createElement('img')
        const movieImgTwo = document.createElement('img')
        movieImgOne.src = movie.image
        movieImgOne.dataset.id = movie.id
        movieImgOne.width = 300
        movieImgOne.height = 450

        movieImgTwo.src = movie.image
        movieImgTwo.width = 350
        movieImgTwo.height = 550
        movieImgTwo.dataset.title = movie.title
        movieImgTwo.dataset.year = movie.year
        movieImgTwo.dataset.genre = movie.genre
        movieImgTwo.dataset.img = movie.image
        movieImgTwo.dataset.iratedmg = movie.rated
        movieImgTwo.dataset.description = movie.description


        const h2 = document.createElement('h2')
        const btnDiv = document.createElement('div')
        const likeBtn = document.createElement('button')
        const dislikeBtn = document.createElement('button')
        h2.textContent = movie.title

        likeBtn.textContent = "Like"
        dislikeBtn.textContent ="Dislike"
        btnDiv.append(likeBtn, dislikeBtn)
        const movieDiv = document.querySelector(".Movies")
        movieDiv.append(h2, movieImgOne, btnDiv)
        
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')
        divCard.setAttribute('id', 'ids' + movie.id)
        divCard.append(h2, movieImgOne,btnDiv)
        movieDiv.append(divCard) 

        movieImgOne.addEventListener('click', () =>{
        // console.log(movieImgOne)
        const movieDetails = document.querySelector('.movies-details')
        const pTitle = document.createElement('p')
        const pDescription = document.createElement('p')
        const pGenre = document.createElement('p')
        const pYear = document.createElement('p')
        const pRated = document.createElement('p')
        pDescription.setAttribute('class', 'descript')
 
        pDescription.textContent =movie.description
        pGenre.textContent = [`Genre: ${movie.genre}`]
        pTitle.textContent = movie.title
        pYear.textContent =  [`Year: ${movie.year}`]
        pRated.textContent = [`Rated: ${movie.rated}`]

        movieDetails.innerHTML = ''
        movieDetails.append(pTitle)
        movieDetails.append(movieImgTwo)
        movieDetails.append(pDescription)
        movieDetails.append(pGenre)
        movieDetails.append(pYear)
        movieDetails.append(pRated)
    })
            likeBtn.addEventListener('click', () =>{
            // console.log(divCard)
            // console.log(e.target)
            let watchList = document.querySelector('.watch-list')
            watchList.appendChild(divCard)
        })  
        
            dislikeBtn.addEventListener('click', () =>{
            // console.log(divCard)
            fetch(`http://localhost:3000/Movies/${movie.id}`, {
            method: "DELETE"
     })
            divCard.remove();
        })

  })
}


//todo: if we wanted to go filter by genre
// let fullMovieList = []
// function filterFunction(){
    // filter fullMovieList based on input value
    // once we have a filtered array
    // call renderMovies with new filtered array
// }
// fullMovieList = movieCollection
// console.log(movieCollection[0].genre)
// serchBar.addEventListener('chage', (e)=>{
// let serchBar = document.querySelector('.searchBar').value
// })
