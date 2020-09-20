<template>
  <div>
    <div class="filmcard">
      <div>
        <div class="filmcard-header">
          <CustomText tag="h2">{{title}} / {{year}}</CustomText>
        </div>

        <div class="filmcard-body">
          <div>
            <img class="filmcard-body-image" :src="poster" />
          </div>

          <div>
            <button class="filmcard-body-button">
              <CustomText class="button-text" tag="a">Add My List</CustomText>
            </button>
          </div>
        </div>
      </div>
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
  created() {
    this.id = this.$route.params.imdbID;
    this.title = this.$route.params.Title;
    this.poster = this.$route.params.Poster;
    this.year = this.$route.params.Year;
  },

};
</script>

<style scoped>
.filmcard {
  min-height: 400px;
  margin-top: 50px;
  padding: 20px;
  border-radius: 2px;
  background-color: rgb(var(--gray));
  &-header {
  }
  &-body {
    display: grid;
    grid-template-columns: 200px 1fr;
    justify-content: center;
    margin-top: 20px;
    &-image {
      height: 250px;
    }
    &-button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 55px;
      width: 120px;
      background-color: rgb(var(--yellow));
      &-text {
        color: rgb(var(--black));
      }
    }
  }
}
</style>
