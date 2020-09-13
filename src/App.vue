<template>
  <div>
    <Header/>
    <Container>
      <router-view/>
    </Container>
  </div>
</template>
<script>
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {Footer, Header, Container}
}
</script>