import apiConfig from './apiConfig';
import axiosClient from './axiosClient';

interface MovieType {
  page: number
  results: []
  total_pages: number
  total_results: number
  type: string
  params: any | undefined
}

export const category = {
  movie: 'movie',
  tv: 'tv'
}
export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated'
}
export const tvType = {
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air'
}

const moviedbApi = {
  fetchMoviesList: async () => {
    const res = await axiosClient.get(`${apiConfig.baseUrl}movie/popular?api_key=${apiConfig.apiKey}`)
      .then((res) => console.log(res)
      )
      .catch((error) => console.log(error)
      )
    return res;
  }
}
export default moviedbApi;