<template>
  <div>
    <router-link to="/signup">
      <SignupForm/>
    </router-link>
  </div>
</template>

<script>
import SignupForm from "../components/Register/form-signup";
export default {
  name:"Signup",
  components: {SignupForm}
}
</script>

<style scoped>

</style>