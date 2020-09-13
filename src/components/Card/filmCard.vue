<template>
  <div class=" img-fluid card custom">
      <img class=" img-fluid custom-image" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="">

    <div class="custom-rate">
      <IconStar class="mt-3 "/>
      <a class="mt-3 ml-2" href="">9.8</a>
    </div>


    <div class="custom-name">
        <a class="custom-name-text">End Game</a>
    </div>


    <button  class=" btn custom-fav">
      <IconFav/>
      <a class="custom-fav-text">Watch Trailer</a>
    </button>


  </div>
</template>

<script>
import IconStar from "../../icons/star.svg";
import IconFav from "../../icons/fav.svg"
export default {
  name:"FilmCard",
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
  &-fav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    margin-top: 10px;
    border-radius: 2px;
    background-color: rgba(var(--yellow));
    height: 50px;
    &-text {
      font-size: 18px;
      margin-left:5px ;
      color:rgb(var(--dark));
    }
  }
}
</style>