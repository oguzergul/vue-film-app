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

export default {
  components: {
    Header,
    Container
  },

}
</script>