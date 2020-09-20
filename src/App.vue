<template>
  <div>
    <Header/>
    <Loading v-if="$store.state.isLoading" />
    <Container>
      <router-view/>
    </Container>

  </div>
</template>
<script>

import Container from "./components/Container";
import Header from "./components/Header";
import Loading from "./components/Loading";

export default {
  components: {
    Header,
    Container,
    Loading
  },
  created() {
    window.vueInstance = this;
  }
}
</script>