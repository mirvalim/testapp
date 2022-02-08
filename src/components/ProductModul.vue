<template>
  <el-dialog
      title="Porduct qo'shish"
      :visible.sync="visible"
      width="30%"
      :before-close="done => handleClose(done)">
    <el-form ref="form" :model="form" :rules="formRule" label-width="120px">
      <el-form-item prop="productName" label="Product nomi">
        <el-input v-model="form.productName" placeholder="Product nomi"></el-input>
      </el-form-item>
      <el-form-item prop="photoUrl" label="Product rasm manzili">
        <el-input v-model="form.photoUrl" placeholder="Product rasm manzili"></el-input>
      </el-form-item>
      <el-form-item prop="price" label="Product narxi">
        <el-input v-model="form.price" placeholder="Product narxi"></el-input>
      </el-form-item>
      <el-form-item prop="description" label="Product tavsifi">
        <el-input v-model="form.description" placeholder="Product tavsifi"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="saqlash">Saqlash</el-button>
    <el-button type="error" @click="handleClose">Bekor qilish</el-button>
  </el-dialog>
</template>

<script>
export default {
  name: "ProductModal",
  props: {
    visible: Boolean,
    product: Object
  },
  data() {
    return {
      form: {
        id: null,
        productName: "",
        photoUrl: "",
        price: null,
        description: ""
      },
      formRule: {
        productName: [{
          required: true,
          message: "Majburiy",
          trigger: "blur"
        }],
        photoUrl: [{
          required: true,
          message: "Majburiy",
          trigger: "blur"
        }],
        price: [{
          required: true,
          message: "Majburiy",
          trigger: "blur"
        }],
        description: [{
          required: true,
          message: "Majburiy",
          trigger: "blur"
        }]
      }

    }
  },
  methods: {
    saqlash() {
      let form = this.$refs["form"];
      form.validate(valid => {
        if (valid) {
          if (this.form.id) {
            this.$store.commit("editProducts", this.form)
          } else {
            this.$store.commit("addProducts", this.form)
          }
          this.handleClose()
        }
      })
    },
    handleClose() {
      this.form = {
        productName: "",
        photoUrl: "",
        price: null,
        description: ""
      }
      this.$emit("update:visible", false)
      this.$emit("closeModal")
    }
  },
  mounted() {
    if (this.product){
      console.log(this.$store.state.products)
      this.form = Object.assign({}, this.product)
    }
  }
}
</script>

<style scoped>

</style>