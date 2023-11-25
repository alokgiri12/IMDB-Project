import axios from "axios"
export const GetTrendingMovies = async (page) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=030f32f41672de4482b0a7ef3494102e&page=${page}`
  )
    return response?.data?.results
};
