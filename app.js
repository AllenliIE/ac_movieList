const express = require('express')
const movieList = require('./movies.json')
const app = express()
const port = 3000

//express temolate engine
const exphbs = require('express-handlebars')
//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting static files
app.use(express.static('public'))

//route setting 
app.get('/', (req, res) => {
  res.render('index', { movies: movieList.results })
})

//search querystring
app.get('/search', (req, res) => {
  const movies = movieList.results.filter(movie => {
    //movie title include req.query.keyword
    return movie.title.toLowerCase().includes(req.query.keyword.toLowerCase())
  })
  res.render('index', { movies: movies, keyword: req.query.keyword })
})

//route show setting params
app.get('/movies/:movie_id', (req, res) => {
  const movie = movieList.results.find(movie => movie.id === Number(req.params.movie_id))

  res.render('show', { movie: movie })
})


//start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost: ${port}`)
})

//static files


// movieList
  //create a variable to store movieOne
  // const movieList = [
  //   {
  //     id: 1,
  //     image: 'https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
  //     title: 'Jurassic World: Fallen Kingdom',
  //   }, {
  //     id: 2,
  //     image: 'https://movie-list.alphacamp.io/posters/rv1AWImgx386ULjcf62VYaW8zSt.jpg',
  //     title: 'Ant-Man and the Wasp',
  //   }, {
  //     id: 3,
  //     image: 'https://movie-list.alphacamp.io/posters/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
  //     title: 'Thor: Ragnarok',
  //   }, {
  //     id: 4,
  //     image: 'https://movie-list.alphacamp.io/posters/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
  //     title: 'Avengers: Infinity War',
  //   }, {
  //     id: 5,
  //     image: 'https://movie-list.alphacamp.io/posters/80PWnSTkygi3QWWmJ3hrAwqvLnO.jpg',
  //     title: 'Mission: Impossible - Fallout',
  //   }, {
  //     id: 6,
  //     image: 'https://movie-list.alphacamp.io/posters/x1txcDXkcM65gl7w20PwYSxAYah.jpg',
  //     title: 'Incredibles 2',
  //   }, {
  //     id: 7,
  //     image: 'https://movie-list.alphacamp.io/posters/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg',
  //     title: 'Fifty Shades Freed',
  //   }, {
  //     id: 8,
  //     image: 'https://movie-list.alphacamp.io/posters/2slvblTroiT1lY9bYLK7Amigo1k.jpg',
  //     title: 'The First Purge',
  //   }