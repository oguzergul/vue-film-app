
<template>
  <div class="position-absolute w-100 h-100 customBg ">
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped>
.customBg {
  background-color: rgb(var(--yellow));

  text-align: center;
  padding: 30px;
}
</style>