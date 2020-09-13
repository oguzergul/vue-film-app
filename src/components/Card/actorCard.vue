<template>
  <div class="img-fluid">
    <img
        class=" img-fluid custom-image"
        src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="">
  </div>
</template>

<script>
import IconStar from "../../icons/star.svg";
import IconFav from "../../icons/fav.svg"
export default {
  name:"ActorCard",
  components:{
    IconFav,
    IconStar
  }
}
</script>

<style scoped>
.custom {
  display: flex;
  align-items: center;
  height: 450px;
  padding-top: 10px;
  min-width: 100px;
  min-height: 450px;
  max-width: 150px;
  max-height: 450px;
  background-color: rgba(var(--gray));
  margin-top: 10px;
  margin-left: 10px;
  margin-right:10px ;
  &-rate {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &-image {
    height: 240px;
    max-width: 250px;
  }
  &-name {
    display: flex;
    min-width:160px ;
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