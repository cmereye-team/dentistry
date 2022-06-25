<template>
<div class="nar sticky-sm-top sticky-top" style="width=90%">
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="index">
      <img src="@/asset/image/common/logo.svg" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " href="/aboutMe">關於我們</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/doctorTeam">我們的團隊</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown">
           牙科服務
          </a>
          <!-- 注意：这个ul是包含在li里面的 是下拉菜单的内容 -->
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">植牙</a></li>
            <li><a class="dropdown-item" href="#">根管治療（杜牙根）</a></li>
            <li><a class="dropdown-item" href="#">Invisalign 隱適美</a></li>
            <li><a class="dropdown-item" href="#">瓷貼片</a></li>
            <li><a class="dropdown-item" href="#">牙齒美白</a></li>
            <li><a class="dropdown-item" href="#">全瓷牙冠及全鋯牙冠</a></li>
            <li><a class="dropdown-item" href="#">拔牙及智慧齒脫除</a></li>
            <li><a class="dropdown-item" href="#">牙周病治療</a></li>
            <li><a class="dropdown-item" href="#">全口牙托及局部牙托</a></li>
            <li><a class="dropdown-item" href="#">矯齒 action</a></li>
            <li><a class="dropdown-item" href="#">洗牙</a></li>
            <li><a class="dropdown-item" href="#">補牙</a></li>
            <li><a class="dropdown-item" href="#">一般口腔檢查</a></li>
            <li><a class="dropdown-item" href="#">兒童牙科保健及治療</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/facilities">儀器及設備</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/equipment">健康資訊</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/news">最新消息</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contactUs">聯絡我們</a>
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
  .sticky-top {
    // position: -webkit-sticky;
    position: inherit !important;
    top: 0;
    z-index: 1020;
}
  .navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5rem;
    // padding-bottom: 11.5rem;
}
  .navbar-light .navbar-toggler-icon {
    background-image: url('@/asset/image/banner/BurgerBtn.png') no-repeat !important;
}
.dropdown-menu {
  border:0px;
}
.dropdown-item {
  color: #9BD0F5;
}
.navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    line-height: 15vw;
}
.navbar-light .navbar-nav .nav-link[data-v-cf6431d8] {
    color: #57B2F3 !important;
    border-bottom: 1px solid #C2C7CD;
}
  .navbar-collapse {
    // height: 303vw;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #57B2F3 !important;
  }
 .navbar>.container, .navbar>.container-fluid, .navbar>.container-lg, .navbar>.container-md, .navbar>.container-sm, .navbar>.container-xl, .navbar>.container-xxl{
  width: 100%;
  background-color: #fff;
  border-radius: 80px 80px 80px 80px;
}
.navbar-brand {
  margin-right: 0
}
img{
  width: 90%;
}
}
</style>
