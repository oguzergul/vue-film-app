<template>
  <div class="fixed-bottom">
    <nav class="nav justify-content-center navbar-custom ">
      <a class="navbar-brand navbar-custom-text">Made with 💖 in İstanbul</a>
    </nav>
  </div>
</template>

<script>
export default {
  name:"Footer"
}
</script>

<style scoped>
.navbar-custom{
  display: flex;
  background-color:rgba(var(--dark));
  height: 60px;
  align-items: center;
  justify-content: center;
  &-text{
    color: rgba(var(--trans));
    font-size: 22px;
    font-family: saira;
  }
}
</style>