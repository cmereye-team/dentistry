<template>
<div class="nar sticky-sm-top sticky-top" style="width=90%">
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="@/asset/image/common/logo.svg" alt="">
    </a>
    <div><a class="nav-link engmb" href="#" >ENG</a></div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse pcshow" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " href="/">首页</a>
        </li>
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
            <div class="drop">
               <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <a href="/implant">
                        <div class="service_pic"> <img src="@/asset/image/about-me/serve/Frame.png" title="植牙"
                            alt="植牙" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">植牙</p>
                        </div>
                      </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <a href="#">
                        <div class="service_pic"> <img class="imgya" src="@/asset/image/about-me/serve/Group.png" title="根管治療（杜牙根）"
                            alt="根管治療（杜牙根）" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">根管治療<br>（杜牙根）</p>
                        </div>
                      </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <a href="#">
                        <div class="service_pic"> <img src="@/asset/image/about-me/serve/tif.png" title="Invisalign隱形牙箍"
                            alt="Invisalign隱形牙箍" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">Invisalign<br>隱形牙箍</p>
                        </div>
                      </a>
                  </div>
                </div>
              </div>
            </li>
             <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <a href="#">
                        <div class="service_pic"> <img src="@/asset/image/about-me/serve/Group_0.png" title=" 瓷貼片"
                            alt=" 瓷貼片" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 "> 瓷貼片</p>
                        </div>
                      </a>
                  </div>
                </div>
              </div>
            </li>
            </div>
           <div class="drop">
               <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <a href="#">
                        <div class="service_pic"> <img src="@/asset/image/about-me/serve/Group_1.png" title="牙齒美白" alt="牙齒美白" /></div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">牙齒美白</p>
                        </div>
                      </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <a href="#">
                        <div class="service_pic"> <img class="quanci" src="@/asset/image/about-me/serve/Frame01.png" title="全瓷牙冠及全鋯牙冠" alt="全瓷牙冠及全鋯牙冠" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">全瓷牙冠<br>及全鋯牙冠</p>
                        </div>
                      </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <a href="#">
                        <div class="service_pic"> <img class="imgba" src="@/asset/image/about-me/serve/Frame02.png" title="拔牙及智慧齒脫除" alt="拔牙及智慧齒脫除" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">拔牙及智慧齒脫除</p>
                        </div>
                      </a>
                  </div>
                </div>
              </div>
            </li>
             <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <a href="#">
                        <div class="service_pic"> <img src="@/asset/image/about-me/serve/Frame03.png" title="牙周病治療" alt="牙周病治療" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 "> 牙周病治療</p>
                        </div>
                      </a>
                  </div>
                </div>
              </div>
            </li>
            </div>
           <div class="drop">
               <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <a href="#">
                        <div class="service_pic"><img class="allya" src="@/asset/image/about-me/serve/Group_2.png" title="全口牙托及局部牙托" alt="全口牙托及局部牙托" /></div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">全口牙托及<br>局部牙托</p>
                        </div>
                      </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <a href="#">
                        <div class="service_pic"> <img class="quanci" src="@/asset/image/about-me/serve/Frame04.png" title="矯齒" alt="矯齒" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">矯齒</p>
                        </div>
                      </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <a href="#">
                        <div class="service_pic"><img src="@/asset/image/about-me/serve/Group_3.png" title="洗牙" alt="洗牙" /></div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">洗牙</p>
                        </div>
                      </a>
                  </div>
                </div>
              </div>
            </li>
             <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <a href="#">
                        <div class="service_pic"><img src="@/asset/image/about-me/serve/Group_4.png" title="補牙" alt="補牙" />  </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 "> 補牙</p>
                        </div>
                      </a>
                  </div>
                </div>
              </div>
            </li>
            </div>
              <div class="drop">
               <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <a href="#">
                        <div class="service_pic"><img src="@/asset/image/about-me/serve/Group_5.png" title="一般口腔檢查"  alt="一般口腔檢查" /></div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">一般口腔檢查</p>
                        </div>
                      </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <a href="#">
                        <div class="service_pic"> <img src="@/asset/image/about-me/serve/Group_6.png" title="兒童牙科保健及治療" alt="兒童牙科保健及治療" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">兒童牙科<br>保健及治療</p>
                        </div>
                      </a>
                  </div>
                </div>
              </div>
            </li>
            </div>
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
        <li class="nav-item">
          <a class="nav-link eng" href="/contactUs" >ENG</a>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse mbshow" id="navbarNavDropdown">
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
         <ul class="dropdown-menu  ">
            <li><a class="dropdown-item" href="/implant">植牙</a></li>
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
        <li class="nav-item">
          <a class="nav-link eng" href="/contactUs" >ENG</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</template>
<style lang="scss" scoped>
@media only screen and (min-width: 1000px) and (max-width: 1440px) {
  .navbar-expand-lg .navbar-nav .nav-link{
    padding-right: 0;
  }
}
//pc
@media only screen and (min-width: 768px) {
  .mbshow{
    display: none !important;
  }
  .allya{
    margin-bottom: 0 !important;
  }
  .quanci{
    margin: 1.6vw 0 !important;
  }
  .dropdown-menu {
    border-radius: 1.25rem !important;
  }
  .nav-items{
    padding: 0 0.2vw !important;
  }
  .drop{
    display: flex;
  }
  .imgba{
    margin-bottom: 0 !important;
    margin-top: 0.4vw !important;
  }
  .imgya{
    margin-left: 2vw !important;
    margin-bottom: 0 !important;
    margin-top: 0.4vw !important;
  }
  .serve_con{
    width: 73vw;
    display: flex;
    text-align: center;
    justify-content: center;
    padding-left: 31vw;
  }
  .service_box .service_item {
    margin-bottom: 3.571rem;
  }
}

.service_box .service_item .service_hover {
  width: 160px;
  height: 160px;
  overflow: hidden;
  position: relative;
  transition: all .3s ease-in-out;
  // box-shadow: 0 0 15px lightgray;
  border-radius: 1.071rem;
  cursor: pointer;
}

// .service_box .service_item .service_hover:before {
//   position: absolute;
//   content: "";
//   width: 400px;
//   height: 40px;
//   background: rgba(255, 255, 255, 0.3);
//   left: 0;
//   top: 0;
//   bottom: 0;
//   margin: auto;
//   transform: rotate(-45deg) translateY(-232px) translateX(-55px);
//   ;
//   transition: all .3s ease-in;
// }

.service_box .service_item:hover .service_hover:before {
  transform: rotate(-45deg) translateY(115px) translateX(-55px);
  ;
}
  .service_box .service_item:hover .service_hover {
  background: #9BD0F5;
  border-radius: 1.071rem;
  // box-shadow: 0 5px 15px lightgray;
  // transform: translate(2px, -2px);
}
.service_box .service_item .service_pic .service_txt{
  background-color: #b3d7ff;
}
.service_box .service_item:hover .service_hover p {
  color: #ffffff;
}



  .service_box .service_item[data-v-47af9056] {
    flex: 1 0 36.333333%;
    max-width: 44.333333%;
    margin-bottom: 1.428rem;
    padding-right: 0;
    // margin: 1vw;
}
.service_box .service_item .service_pic[data-v-47af9056] {
    width: 55%;
    text-align: center;
    margin: auto;
    height: 19vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6vw;
}
.service_box .service_item .service_txt[data-v-47af9056] {
    padding-left: 5px;
    padding-right: 5px;
    height: 8vw;
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: center;
    margin-top: 4vw;
    // font-weight: 500 !important;
}
.service_box .row[data-v-47af9056] {
    padding-right: 15px;
    justify-content: center;
}
  .service_box .row {
    padding-right: 15px;
  }
  .serve_con{
    text-align: left;
    padding: 5vw;
    color: #79828D;
  }
  .service_box .service_item {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    margin-bottom: 1.428rem;
    padding-right: 0;
  }
  .service_box .service_item img {
    max-width: 100%;
    margin: 1vw 0;
  }


.service_box .service_item {
  text-align: center;
  // display: flex;
  // align-items: center;
  justify-content: center;
  flex-flow: column;
  margin: 1vw;
}
   .service_box .service_item .service_hover {
    // height: auto;
    padding-bottom: 1rem;
    // z-index: 999;
    background: #ECF7FC;
    padding: 0;
  }
a{
  
    text-decoration: none;
}
.service_pic img {
  max-width: 80px;
}
.box{
  margin: 5vw 17.5vw;
}
.service_box {
  display: flex;
  justify-content: left;
}
  .engmb{
    display: none;
  }
  .eng{
    color: #00477B !important;
  }
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
          width: 18vw;
          padding-left: 2vw;
        }
      }
      ul{
        li{
            padding: 0 1vw;
            font-weight: 500;
          a{
            color: #505050;
          }
        }
      }
    }
  
//mb
@media only screen and (max-width: 768px) {
    .nar{
      .navbar-brand{
        img{
          width: 45vw;
          padding-left: 2vw;
        }
      }
      }
  .pcshow{
    display: none;
  }
   .engmb{
    display: block !important;
    margin-left: 20vw;
    color: #00477B !important;

  }
  .eng{
    display: none;
  }
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
    background: url('@/asset/image/banner/BurgerBtn.png') no-repeat !important;
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
    margin-bottom: 206px;
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


