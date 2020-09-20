<template>
  <div >
    <div class="search">
      <input v-model="searchText" placeholder="Search movie or series"   class="form-control mx-auto search-input">
    </div>

    <div class="search-card">
      <FilmCard :data-list="Movies"/>
    </div>

  </div>
</template>

<script>

import debounce from 'lodash/debounce';
import { mapState } from 'vuex';
import SearchCard from "../components/searchCard";
import FilmCard from "../components/filmCard";

export default {
  name:"Home",
  components: {FilmCard, SearchCard },
  data() {
    return {
      searchText: '',
    }
  },
  watch: {
    searchText: debounce( function (newVal) {
      this.$store.dispatch('searchMovie', newVal);
    }, 500)
  },
  computed: {
    ...mapState(['Movies'])
  }
}
</script>

<style scoped>
.search{
  display: flex;

  &-input {
    max-width:800px ;
    margin-top:50px ;
  }
}

</style>