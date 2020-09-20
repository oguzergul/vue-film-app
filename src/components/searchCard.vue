<template>
  <div class="row">
    <div   class="custom">
      <img
        @click="$router.push({name:'Detail', params:{id:item.imdbID,Poster:item.Poster,Title:item.Title,Year:item.Year,}})"
        class="custom-image"
        :src="item.Poster"
      />
      <div>
        <CustomText class="mt-3" tag="h5">{{item.Title}}</CustomText>
        <button @click.prevent=" setFavorite(item) " class="custom-fav-button">
          <CustomText class="button-text" tag="a">{{buttonText}}</CustomText>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomText from "./CustomText";

export default {
  name: "SearchCard",
  components: {
    CustomText,
  },
  props: {
    dataList: {
      type: Array,
      required: true,
    },
  },
  computed:{
    buttonText() {
      return this.isFavorite ? "ADD LIST" : "REMOVE LIST";
    },
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
};
</script>

<style scoped>
.custom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(var(--gray));
  height: 420px;
  width: 220px;
  border-radius: 2px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  &-fav {
    display: flex;
    align-items: center;
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

  &-image {
    height: 240px;
    max-width: 250px;
    margin-top: 30px;
  }
  &-name {
    display: flex;
    min-width: 160px;
    min-height: 50px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    &-text {
      font-size: 26px;
      color: rgb(var(--white));
    }
  }
}
</style>