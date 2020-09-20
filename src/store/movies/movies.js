


const movies = {
  state: {
    movies: [],
    movieDetail: {},
    movieTypes:{},
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.searchMovies = movies;
    },
  },
  actions: {
    searchMovie({commit},searchText) {
      const axios = require('axios');
      axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=6a71067").then((response)=>{
        console.log(response)
      })
    }
  },
  getters: {
    movies: (state) => state.movies,
  },
};
export default movies;
