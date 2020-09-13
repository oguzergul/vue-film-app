<template>
  <Base>
      <div class="form-group">
        <label><a href="">Email address</a></label>
        <input class="form-control input">
      </div>
      <div class="form-group">
        <label><a href="">Password</a></label>
        <input  class="form-control input">
      </div>


      <router-link to="/signup">
        <button class="btn btn-warning  btn-lg btn-block">Login</button>
      </router-link>

      <div class="link ">
        <a href="">Don't you have an account ? </a>
        <router-link to="/signup">
          <a class="ml-2" href="">Sign Up </a>
        </router-link>

      </div>
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