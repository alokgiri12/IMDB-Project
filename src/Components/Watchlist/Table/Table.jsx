import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { genreids } from "../Mock/WatchListData";
import { filterOnGenre,filterOnSearchstr,sortOnRatings,sortOnPopularity  } from "./Helper";

const Table = ({ favourites = [], setFavourites}) => {
  const [genre, setGenre] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genre")
  const [searchStr, setSearchStr] = useState("")
  const [sortRatings, setSortRatings] = useState("")
  const [sortPopularity, setSortPopularity] = useState("")
  const [filteredMovies, setFilteredMovies] = useState(favourites)
  useEffect(() => {
    const temp = favourites.map((movie) => genreids[movie.genre_ids[0]]);
    setGenre(["All Genre", ...temp]);
  }, [favourites]);

  useEffect(()=>{setFilteredMovies(filterOnGenre(favourites,currGenre))},[currGenre])
  useEffect(()=>{setFilteredMovies(filterOnSearchstr(favourites,searchStr))},[searchStr])
  useEffect(()=>{setFilteredMovies(sortOnRatings(favourites,sortRatings))},[sortRatings])
  useEffect(()=>{setFilteredMovies(sortOnPopularity(favourites,sortPopularity))},[sortPopularity])

  const DeletMovie = (movie) => {
    const newArr = favourites.filter((m)=> m.id != movie.id)
    setFavourites(newArr)
    localStorage.setItem("imdbwatchlist",JSON.stringify(newArr))
  }

  
  
  return (
    <>
      <div className="mt-6 flex space-x-2 justify-center">
        {genre &&
          genre.length > 0 &&
          genre.map((eachGenre, index) => {
            return (
              <div key={index}
                className={
                  currGenre == eachGenre
                    ? "m-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold"
                    : "m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold"
                }
                onClick={() => {
                  setCurrGenre(eachGenre);
                }}
              >
                {eachGenre}
              </div>
            );
          })}
      </div>
      <div className="text-center">
        <input
          type="text"
          className="border bg-gray-200 border-4 text-center p-1 m-2"
          placeholder="Search for the movie"
          value={searchStr}
          onChange={(e)=> setSearchStr(e.target.value) }
        />
      </div>
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <TableHeader setSortRatings={setSortRatings} setSortPopularity={setSortPopularity}/>
        <TableBody movies={filteredMovies} DeletMovie={DeletMovie} />
      </table>
    </>
  );
};

export default Table;
