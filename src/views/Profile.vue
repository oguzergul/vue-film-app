

  <template>
    <Container>
      <Base>
       <div class="name">
         <CustomText tag="h6">Name:</CustomText>
         <CustomText tag="h6">Surname:</CustomText>
         <CustomText tag="h6">Email:</CustomText>
       </div>
      </Base>

    </Container>
  </template>

<script>
import Base from "../components/Base";
import Container from "../components/Container";
import CustomText from "../components/CustomText";
export default {
  name:"Profile",
  components: {CustomText, Container, Base}
}
</script>

<style scoped>
.profile{
  display: flex;
  &-image{
    height: 180px;
    width: 150px;
    border-width: 2px;
    border-style: dashed;
    border-color:rgb(var(--dark));
    background-color: rgb(var(--blue));
  }
}
</style>