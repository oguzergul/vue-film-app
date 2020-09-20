<template>
  <section-card class="detail">
    <FilmCard/>
  </section-card>
</template>

<script>
import SectionCard from "../components/Card/sectionCard";
import CustomText from "../components/CustomText";
import IconIMDB from "../icons/imdb.svg"
import FilmCard from "../components/Card/filmCard";


export default {
  name:"Detail",
  components: { FilmCard, SectionCard }
}
</script>

<style scoped>
.detail {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 20px;
  margin-top: 40px;
}
</style>