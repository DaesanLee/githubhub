const APIKEY ="b94d4fd2a244f675d427ef88b94c7282";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const options={
    method: 'GET',
    headers:{
        'content-Type' : 'application/json:charset=utf-8'
    }
};
const popularURL = "https://api.themoviedb.org/3/movie/now_playing?api_key="+APIKEY+"&language=en-US&page=1"
fetch(popularURL,options)
    .then(response => response.json())
    .then(response => {console.log(response)})