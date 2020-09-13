<template>
  <section-card class="detail">
    <div>
      <film-card/>
    </div>
      <div>
        <CustomText tag="h1" class="mt-4">Overwiew</CustomText>
        <CustomText tag="a">In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.</CustomText>
        <div>
          <CustomText tag="h1">Cast</CustomText>
          <actor-card/>

        </div>
      </div>

  </section-card>
</template>

<script>
import SectionCard from "../components/Card/sectionCard";
import CustomText from "../components/CustomText";
import IconIMDB from "../icons/imdb.svg"
import FilmCard from "../components/Card/filmCard";
import Base from "../components/Base";
import ActorCard from "../components/Card/actorCard";

export default {
  name:"Detail",
  components: {ActorCard, Base, FilmCard, CustomText, SectionCard,IconIMDB}
}
</script>

<style scoped>
.detail {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 20px;
}
</style>