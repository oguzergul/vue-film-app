<template>
  <nav class="navbar custom ">
    <Container>
      <router-link to="/">
        <IconNetflix/>
      </router-link>

      <router-link to="/list">
        <CustomText tag="a">Home</CustomText>
      </router-link>

      <router-link to="/list">
        <CustomText tag="a">Movie</CustomText>
      </router-link>

      <router-link to="/detail">
        <CustomText tag="a">Series</CustomText>
      </router-link>

    </Container>
  </nav>

</template>

<script>
import Container from "../components/Container"
import CustomText from "../components/CustomText";
import IconNetflix from "../icons/netflix.svg"
export default {
  name:"Header",
  components: {Container,CustomText,IconNetflix}
}
</script>

<style scoped>
.custom{
  background-color:rgba(var(--black));
  height: 60px;
  &-navbar{

  }
}
</style>