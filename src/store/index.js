import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'film-app'
})

export default new Vuex.Store({

  state: {
    Movies: [],
    favorites: [],
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.Movies = movies;
    },
    SET_FAVORITE(state, movie) {
      state.favorites.push(movie);
    },
    REMOVE_FAVORITE(state, movie) {
      const index = state.favorites.findIndex((item) => item.imdbID === movie.imdbID);
      state.favorites.splice(index, 1);
    }
  },
  actions: {
    searchMovie({commit}, searchText) {
      const axios = require('axios');
      axios.get('http://www.omdbapi.com/?=tt3896198&apikey=6a71067&s=' + searchText).then((response) => {
          commit('SET_MOVIES', response.data.Search)
      })
    },
  },
  getters: {
    getFavorites: (state) => state.favorites,
  },
  plugins: [vuexLocal.plugin]
})