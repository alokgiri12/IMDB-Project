import React, { useEffect, useState } from "react";
import { GetTrendingMovies } from "../../Service/GetTrendingMovies";
import Pagination from "./Pagination";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [counter, setCounter] = useState(1);
  const [watchList, setWatchList] = useState([]);
  const [hover, setHover] = useState("");

  useEffect(()=>{
    async function fetchMyMovies(){
      const result = await GetTrendingMovies(counter)
      setMovies(result)
    }
    fetchMyMovies()
  },[counter])

  const onPrev =()=>{
    if(counter==1){
      setCounter(1)
    }else{
      setCounter(counter-1)
    }
  }

  const onNext =()=>{
    setCounter(counter+1)
  }

  const addMovietoWatchList = (movie) =>{
  if(!watchList.includes(movie)){
    const newWatchList = [...watchList, movie];
    setWatchList(newWatchList);
    localStorage.setItem("imdbwatchlist", JSON.stringify(newWatchList))
    }
  }
  

  const removeMoviefromWatchList = (movie) =>{
  const filteredWatchlist = watchList.filter((movieId)=>{
    return movieId!== movie.id
  })
  setWatchList(filteredWatchlist)
  localStorage.setItem("imdbwatchlist", JSON.stringify(filteredWatchlist))
  }

  const showButton = (id) =>{
    setHover(id)
  }

  const hideButton =() =>{
    setHover("")
  }

  return (
    <div>
      <div className="text-2xl text-center mb-8 font-bold">Trending Movies</div>

      <div className="flex flex-wrap">
        {movies.map((movie) => {
          return (
            <div key={movie.id}
              className="w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 md:h[40vh] md:w[180px] hover:scale-110 duration-300 relative flex items-end"
              style={{
                backgroundImage:
                  `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
              }}
              onMouseOver={()=>{showButton(movie.id)}}
              onMouseOut={hideButton}
            >
              <div className="absolute top-2 right-2 bg-gray-900 bg-opacity-5 rounded-2xl p-1.5" 
              style={{display:hover === movie.id ? "block" : "none"}}>
                {
                  watchList.includes(movie) === true?
                  (<button onClick={()=>removeMoviefromWatchList(movie)}>❌</button>)
                  : (<button onClick={()=>addMovietoWatchList(movie)}>😍</button>)
                }
                 
              </div>
              <div className="text-white text-center font-bold w-full bg-gray-900 bg-opacity-60">
                {movie.title}
              </div>  
            </div>
          );
        })}
      </div>
      <Pagination onPrev={onPrev} onNext={onNext} counter={counter}/>
    </div>
  );
};

export default Movies;
