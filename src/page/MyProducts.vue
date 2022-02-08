<template>
  <div class="product">
     <products></products>
  </div>
</template>

<script>
import Products from "../components/Products";
export default {
  name: "MyProducts",
  components: {Products}
}
</script>

<style scoped>
.product{
  margin-top: 50px;
}
</style>