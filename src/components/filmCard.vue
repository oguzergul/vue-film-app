<template>
  <div class="row">
    <div v-for="(item, index) in dataList" :key="index" class="card">
      <div class="card-image">
        <img
            class="card-image-poster"
            @click="$router.push({name:'Detail', params:{id:item.imdbID,Poster:item.Poster,Title:item.Title,Year:item.Year,}})"
            :src="item.Poster">
      </div>
      <div class="card-name">
        <CustomText tag="h5">{{item.Title}}</CustomText>
      </div>


      <div @click.prevent=" setFavorite(item)" class="card-button">
        <CustomText>ADD LIST</CustomText>
      </div>
    </div>
  </div>

</template>

<script>
import CustomText from "./CustomText";
export default {
  name:"FilmCard",
  components: {CustomText},
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
  }
}
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  background-color: rgb(var(--gray));
  justify-content: center;
  height: 470px;
  width: 230px;
  padding:10px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;

  &-image{
    height: 320px;
    width: 210px;

    &-poster {
      height: inherit;
      width: inherit;
    }
  }
  &-name {
    display: flex;
    height: 50px;
    width:240px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }

  &-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width:210px;
    background-color: rgb(var(--yellow));

  }
}
</style>