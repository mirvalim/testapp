<template>
  <div>
    <el-button @click="dialogVisible = true" type="primary">Produkt qo'shish</el-button>
    <div class="products">

      <div class="product-item">
        <div >
          <div class="product-item-grid">
            <div class="product-item-grid-2" v-for="(item, index) of $store.state.products" :key="index">
              <div>
                <div style="margin-left: 20px; margin-top: 25px">
                  <img  width="200" :src="item.photoUrl" alt="">
                </div>

              </div>
              <div>
                <h3>{{item.productName}}</h3>
                <h3>Price:{{item.price}}</h3>

                <el-tooltip class="item" effect="dark" :content="item.description" placement="top-start">
                  <el-button type="text">{{item.description.substring(0, 20)}}</el-button>
                </el-tooltip>
                <div style="margin-top: 20px">
                  <el-button style="width: 80px" @click="openModalForEdit(item)" type="primary">edit</el-button>
                  <el-button style="width: 80px" @click="deleteProduct(item)" type="danger">delete</el-button>
                </div>

              </div>
            </div>
          </div>
          <product-modal v-if="dialogVisible" :visible.sync="dialogVisible" :product="product" @closeModal="closeModal()"></product-modal>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
import ProductModal from "./ProductModul";
export default {
  name: "Products",
  components: {ProductModal},
  data (){
    return {
      dialogVisible: false,
      product: null
    }
  },
  methods: {
    openModalForEdit(item){
      this.product = item;
      this.dialogVisible = true;
    },
    closeModal(){
      this.product = null
    },
    deleteProduct(item){
      this.$store.commit("deleteProducts", item.id)
    }
  }
}
</script>

<style scoped>
.products{
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
}
.product-item{
  width: 1300px;
  height: 100%;

}
.product-item-grid{
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
.product-item-grid-2{
  display: grid;
  height: 250px;
  grid-template-columns: 1fr 1fr ;
  gap: 1rem;
  border-radius: 6px;
  background-color: white;
}
img{
  height: 150px;
}
</style>