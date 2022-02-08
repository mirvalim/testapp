<template>
  <el-container class="body">
    <el-header>
      <div class="header">

        <a href="#" class="logo"><i class="fas fa-untensils"></i>ONLAYN SAVDO</a>

        <div id="menu-bar" class="fas fa-bars"></div>

        <nav class="navbar">

          <a class="atag" href="#home">
            <router-link to="/myproducts">My Product</router-link>
          </a>
        </nav>
      </div>
    </el-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>


</template>

<script>
export default {


}
</script>

<style scoped>
.body{
  height: 100vh;
  background-color: darkgray;
}

.header{
  position: fixed;
  top: 0;left: 0;right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fffdfd;
  padding: 2rem 9%;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
}
.header .logo{
  font-size: 1.5rem;
  font-weight: bolder;
  color: blue;

}
.aside{
  background-color: white;
}
.header .logo i{
  padding-right: .5rem;
  color: red;
}
.header .navbar a{
  font-size: 1rem;
  margin-left:2rem ;
  font-weight: bold;
  list-style: none;
  text-decoration: none;
  color: #666;
}

#menu-bar{
  font-size: 3rem;
  cursor: pointer;
  color: #666;
  border: .1rem solid #666;
  border-radius:.3rem;
  padding: .5rem 1.5rem;
  display: none;
}
.atag{
  border: 1px solid white;

}



@media(max-width: 991px)  {
  html{
    font-size: 55%;
  }
  .header{
    padding: 2rem;
  }
}

@media(max-width: 768px) {
  #menu-bar{
    display: initial;
  }
  .header .navbar{
    position: absolute;
    top: 100%;left: 0;right: 0;
    background: #f7f7f7;
    border-top: .1rem solid rgba(0,0,0,.1);
    clip-path: polygon(0 0, 100% 0, 0 0);
  }


  .header .navbar a{
    margin: 1.5rem;
    padding: 1.5rem;
    display: block;
    border: .2rem solid rgba(0,0,0,.1);
    border-left: .5rem solid red;
    background: #fff;
  }
}
@media(max-width: 400px)  {
  html{
    font-size: 50%;
  }

}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
