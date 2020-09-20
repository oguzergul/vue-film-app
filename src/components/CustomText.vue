<template>
  <component :is="tag" :class="size">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'CustomText',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    size: {
      type: String,
      default: 'normal',
      validator: function(value) {
        return ['normal'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style scoped>
.normal {
  color: white;
  font-family: "Bebas Neue";
  text-align: center;

}

</style>