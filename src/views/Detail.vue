<template>

    <div class="filmCard">
        <div class="filmCard-name">
            <CustomText tag="h2">{{title}}</CustomText>
        </div>

        <div class="filmCard-image">
            <img class="filmCard-image-poster" :src="poster" />
        </div>

      <div class="filmCard-year">
        <CustomText tag="h2">{{year}}</CustomText>
      </div>



    </div>

</template>

<script>
import CustomText from "../components/CustomText";

export default {
  name: "Detail",
  components: {
    CustomText,
  },
  props: {
    dataList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      imdbID: "",
      title: "",
      poster: null,
      year: "",
    };
  },
  methods: {
    setFavorite(movieItem) {

      if (this.isFavorite(movieItem.imdbID)) {
        this.$store.commit('REMOVE_FAVORITE', movieItem);
      } else {
        this.$store.commit('SET_FAVORITE', movieItem);
      }
    },
    isFavorite(imdbID) {
      return this.$store.state.favorites.filter((item) => item.imdbID === imdbID)[0];
    }
  },
  created() {
    this.id = this.$route.params.imdbID;
    this.title = this.$route.params.Title;
    this.poster = this.$route.params.Poster;
    this.year = this.$route.params.Year;
  },

};
</script>

<style scoped>
.filmCard {
  margin-left:auto;
  margin-right:auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  width:420px;
  padding: 20px;
  margin-top: 20px;
  background-color: rgb(var(--gray));
  &-name {
    margin-top: 20px;
  }
    &-image{
      height: 400px;
      width: 250px;
      margin-top: 20px;
      &-poster{
        height: inherit;
        width: inherit;
      }
    }
  &-year{
    margin-top: 20px;
  }
}
</style>
