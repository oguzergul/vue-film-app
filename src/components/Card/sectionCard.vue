<template>
  <div class="custom">
    <slot/>
  </div>
</template>

<script>
export default {
  name:"SectionCard",
  props:["title"]
}
</script>

<style scoped>
.custom {
  display: flex;
  min-height: 500px;
  display: flex;
  padding: 20px;
  background-color: rgba(var(--darker));
  margin-top: 10px;

}
</style>