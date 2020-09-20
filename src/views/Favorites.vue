<template>
  <div>
    <FilmCard :data-list="$store.getters.getFavorites" />
  </div>
</template>

<script>

import FilmCard from "../components/filmCard";

export default {
  name: "Favorites",
  components: {
    FilmCard,

  },
};
</script>

<style>
</style>