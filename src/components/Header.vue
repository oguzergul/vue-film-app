<template>
  <nav class="navbar custom ">
    <Container>
      <router-link to="/">
        <CustomText tag="h2">VIZONTELE</CustomText>
      </router-link>

      <router-link to="/login">
          <CustomText tag="a"> Sign In</CustomText>
      </router-link>
    </Container>
  </nav>

</template>

<script>
import Container from "../components/Container"
import CustomText from "../components/CustomText";
export default {
  name:"Header",
  components: {Container,CustomText}
}
</script>

<style scoped>
.custom{
  background-color:rgba(var(--black));
  height: 60px;
}
</style>