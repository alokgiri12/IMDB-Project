import { genreids } from "../Mock/WatchListData";

export const filterArrayOnMovies = (favourites, currGenre, searchStr,sortRatings,sortPopularity)=>{

  
  
   return filteredMovies
}


//Applying genre filter
 export const filterOnGenre = (favourites, currGenre) => {
    if(currGenre === "All Genre"){
      return  favourites
    }else{
      return favourites.filter((movie) => genreids[movie.genre_ids[0]] == currGenre)
    }
}

//Applying search filter
export const filterOnSearchstr = (favourites,searchStr) => {
    if(searchStr == ""){
        return favourites
    }else{
        return favourites.filter((movie)=>{
            return movie.title.toLowerCase().includes(searchStr.toLowerCase()) 
          })
    }   
}

//Applying sorting logic for Rating
export const sortOnRatings = (favourites, sortRatings) => {
    if(sortRatings.length>0){
        if(sortRatings==="ascending"){
            return favourites.sort((m1,m2)=>{
                return m1.vote_average - m2.vote_average
               })
        }else{
            return favourites.sort((m1,m2)=>{
                return m2.vote_average - m1.vote_average
              })
        } 
    
    }
    }

//Applying sorting logic for Popularity
export const sortOnPopularity = (favourites, sortPopularity) => {
    if(sortPopularity.length > 0){
        if(sortPopularity==="ascending"){
            return favourites.sort((m1,m2)=>{
                return m1.popularity - m2.popularity
            })
        }else{
            return favourites.sort((m1,m2)=>{
                return m2.popularity - m1.popularity
            })
        }
    }
}