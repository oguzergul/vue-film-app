<template>
  <Base>
    <form>
      <div class="form-group">
        <label><a href="">Your name</a></label>
        <input class="form-control input">
      </div>
      <div class="form-group">
        <label><a href="">Email address</a></label>
        <input class="form-control input">
      </div>
      <div class="form-group">
        <label><a href="">Password</a></label>
        <input  class="form-control input">
      </div>
      <div class="form-group">
        <label><a href="">Re-enter password</a></label>
        <input  class="form-control input">
      </div>
      <button class="btn btn-warning  btn-lg btn-block">Sign Up</button>
      <div class="link">
        <a href="">Already have an account ? </a>
        <router-link to="/login">
          <a class="ml-2" href="">Sign In </a>
        </router-link>

      </div>
    </form>
  </Base>
</template>

<script>
import Base from "../Base";

export default {
  name:"LoginForm",
  components: {Base}
}
</script>

<style scoped>
.input {
  min-width:350px ;
}
.link {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}
</style>