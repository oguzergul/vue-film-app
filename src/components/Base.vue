<template>
  <div class="card custom">
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"Base"
}
</script>

<style scoped>
.custom {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(var(--gray));
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  max-width: 400px;

}
</style>