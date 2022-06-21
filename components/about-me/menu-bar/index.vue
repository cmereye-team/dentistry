<template>
<div class="nar sticky-sm-top sticky-top" style="width=90%">
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="@/asset/image/common/logo.png" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " href="#">關於我們</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">我們的團隊</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown">
           牙科服務
          </a>
          <!-- 注意：这个ul是包含在li里面的 是下拉菜单的内容 -->
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">儀器及設備</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">健康資訊</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">最新消息</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">聯絡我們</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">ENG</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</div>
</template>
<style lang="scss" scoped>
//pc
@media only screen and (min-width: 768px) {
  .navbar>.container, .navbar>.container-fluid, .navbar>.container-lg, .navbar>.container-md, .navbar>.container-sm, .navbar>.container-xl, .navbar>.container-xxl{
  width: 90%;
  background-color: #fff;
  border-radius: 80px 80px 80px 80px;

}
    .navbar-light .navbar-nav .nav-link {
      color: #57B2F3;
    }
    .nar{
      
      
      
      .navbar-brand{
        img{
          padding-left: 2vw;
        }
      }
      ul{
        li{
          padding: 0 1.3vw;
          font-weight: 800;
          a{
            color: #57B2F3;
          }
        }
      }
    }
  
}
//mb
@media only screen and (max-width: 768px) {
 .navbar>.container, .navbar>.container-fluid, .navbar>.container-lg, .navbar>.container-md, .navbar>.container-sm, .navbar>.container-xl, .navbar>.container-xxl{
  width: 100%;
  background-color: #fff;
  border-radius: 80px 80px 80px 80px;
}
.navbar-brand {
  margin-right: 0
}
img{
  width: 50%;
}
}
</style>
