<template>

  <nav class="custom">
      <router-link to="/">
        <a class="custom-title">top rated</a>
      </router-link>
    <router-link to="/">
      <a class="custom-title ml-3">now playing</a>
    </router-link>
    <router-link to="/">
      <a class="custom-title ml-3">upcoming</a>
    </router-link>
    <router-link to="/">
      <a class="custom-title ml-3">popular</a>
    </router-link>
    <router-link to="/">
      <a class="custom-title ml-3">favorite</a>
    </router-link>
    <router-link to="/detail">
      <a class="custom-title ml-3">profile</a>
    </router-link>

  </nav>

</template>

<script>
import Container from "../components/Container"

export default {
  name:"MidHeader",
  components: {Container}
}
</script>

<style scoped>
.custom{
  background-color:rgba(var(--black));
  height: 60px;
  &-title {
    font-size: 18px;
    color: rgba(var(--white));
    text-decoration: underline;
    text-decoration-color:rgb(var(--blue)) ;

    &:hover {
      color: rgb(var(--blue));
    }

  }
}
</style>