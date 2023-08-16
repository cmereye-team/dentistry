<template>
<div class="nar sticky-sm-top sticky-top" style="width=90%">
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
     <nuxt-link class="navbar-brand" to="/">
      <img src="https://static.cmereye.com/static/lkximg/image/common/Logo.svg" alt="">
     </nuxt-link>
    <!-- <a class="navbar-brand" href="/">
      <img src="https://static.cmereye.com/static/lkximg/image/common/Logo.svg" alt=""></img>
    </a> -->
    <!-- <div><a class="nav-link engmb" href="#" >ENG</a></div> -->
    <button class="navbar-toggler floatsty" type="button" @click="floatsty" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse pcshow" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link class="nav-link "  to="/">首頁</nuxt-link>
          <!-- <a class="nav-link " href="/">首頁</a> -->
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link "  to="/about-us">關於我們</nuxt-link>
          <!-- <a class="nav-link " href="/aboutMe">關於我們</a> -->
        </li>
        <!-- <li class="nav-item"> -->
          <!-- <nuxt-link class="nav-link "  to="/our-medical-team">我們的團隊</nuxt-link> -->
          <!-- <a class="nav-link" href="/doctorTeam">我們的團隊</a> -->
        <!-- </li> -->
        <li class="nav-item dropdown">
          <nuxt-link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown">牙科服務</nuxt-link>
          <!-- <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown">
           牙科服務
          </a> -->
          <!-- 注意：这个ul是包含在li里面的 是下拉菜单的内容 -->
          <ul class="dropdown-menu">
            <div class="drop">
               <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <nuxt-link to="/implant">
                      <div class="service_pic"> 
                        <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame.png" title="植牙" alt="植牙" />
                        </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">植牙</p>
                        </div></nuxt-link>

                    <!-- <a href="/implant">
                        <div class="service_pic"> <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame.png" title="植牙"
                            alt="植牙" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">植牙</p>
                        </div>
                      </a> -->
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <nuxt-link to="/rct">
                      <div class="service_pic"> <img class="imgya" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group.png" title="根管治療（杜牙根）"
                            alt="根管治療（杜牙根）" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">根管治療<br>（杜牙根）</p>
                        </div>
                        </nuxt-link>
                    <!-- <a href="/rct">
                        <div class="service_pic"> <img class="imgya" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group.png" title="根管治療（杜牙根）"
                            alt="根管治療（杜牙根）" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">根管治療<br>（杜牙根）</p>
                        </div>
                      </a> -->
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <nuxt-link to="/invisalign">
                      <div class="service_pic"> <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/tif.png" title="Invisalign隱形牙箍"
                            alt="Invisalign隱形牙箍" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">Invisalign<br>隱形牙箍</p>
                        </div>
                        </nuxt-link>
                    <!-- <a href="/invisalign">
                        <div class="service_pic"> <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/tif.png" title="Invisalign隱形牙箍"
                            alt="Invisalign隱形牙箍" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">Invisalign<br>隱形牙箍</p>
                        </div>
                      </a> -->
                  </div>
                </div>
              </div>
            </li>
             <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <nuxt-link to="/veneers">
                      <div class="service_pic"> <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_0.png" title=" 瓷貼片"
                            alt=" 瓷貼片" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 "> 瓷貼片</p>
                        </div>
                    </nuxt-link>
                    <!-- <a href="/veneers">
                        <div class="service_pic"> <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_0.png" title=" 瓷貼片"
                            alt=" 瓷貼片" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 "> 瓷貼片</p>
                        </div>
                      </a> -->
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
                    <nuxt-link to="/teeth-whitening">
                      <div class="service_pic"> <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_1.png" title="牙齒美白" alt="牙齒美白" /></div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">牙齒美白</p>
                        </div>
                    </nuxt-link>
                    <!-- <a href="/teeth-whitening">
                        <div class="service_pic"> <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_1.png" title="牙齒美白" alt="牙齒美白" /></div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">牙齒美白</p>
                        </div>
                      </a> -->
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <nuxt-link to="crowns-and-bridges">
                      <div class="service_pic"> <img class="quanci" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame01.png" title="全瓷牙冠及全鋯牙冠" alt="全瓷牙冠及全鋯牙冠" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">全瓷牙冠<br>及全鋯牙冠</p>
                        </div>
                    </nuxt-link>
                    <!-- <a href="/crowns-and-bridges">
                        <div class="service_pic"> <img class="quanci" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame01.png" title="全瓷牙冠及全鋯牙冠" alt="全瓷牙冠及全鋯牙冠" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">全瓷牙冠<br>及全鋯牙冠</p>
                        </div>
                      </a> -->
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <nuxt-link to="/extractions-and-wisdom-teeth-extraction">
                      <div class="service_pic"> <img class="imgba" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame02.png" title="拔牙及智慧齒脫除" alt="拔牙及智慧齒脫除" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">拔牙及智慧齒脫除</p>
                        </div>
                    </nuxt-link>

                    <!-- <a href="/extractions-and-wisdom-teeth-extraction">
                        <div class="service_pic"> <img class="imgba" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame02.png" title="拔牙及智慧齒脫除" alt="拔牙及智慧齒脫除" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">拔牙及智慧齒脫除</p>
                        </div>
                      </a> -->
                  </div>
                </div>
              </div>
            </li>
             <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <nuxt-link to="/periodontal-treatment">
                       <div class="service_pic"> <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame03.png" title="牙周病治療" alt="牙周病治療" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 "> 牙周病治療</p>
                        </div>
                    </nuxt-link>
                    <!-- <a href="/periodontal-treatment">
                        <div class="service_pic"> <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame03.png" title="牙周病治療" alt="牙周病治療" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 "> 牙周病治療</p>
                        </div>
                      </a> -->
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
                    <nuxt-link to="/complete-and-partial-denture">
                      <div class="service_pic"><img class="allya" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_2.png" title="全口牙托及局部牙托" alt="全口牙托及局部牙托" /></div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">全口牙托及<br>局部牙托</p>
                        </div>
                    </nuxt-link>
                    <!-- <a href="/complete-and-partial-denture">
                        <div class="service_pic"><img class="allya" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_2.png" title="全口牙托及局部牙托" alt="全口牙托及局部牙托" /></div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">全口牙托及<br>局部牙托</p>
                        </div>
                      </a> -->
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <nuxt-link to="/orthodontics">
                       <div class="service_pic"> <img class="quanci" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame04.png" title="矯齒" alt="矯齒" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">矯齒</p>
                        </div>
                    </nuxt-link>

                    <!-- <a href="/orthodontics">
                        <div class="service_pic"> <img class="quanci" src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame04.png" title="矯齒" alt="矯齒" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">矯齒</p>
                        </div>
                      </a> -->
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <nuxt-link to="/scaling-and-polishing">
                      <div class="service_pic"><img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_3.png" title="洗牙" alt="洗牙" /></div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">洗牙</p>
                        </div>
                    </nuxt-link>

                    
                    <!-- <a href="/scaling-and-polishing">
                        <div class="service_pic"><img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_3.png" title="洗牙" alt="洗牙" /></div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">洗牙</p>
                        </div>
                      </a> -->
                  </div>
                </div>
              </div>
            </li>
             <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <nuxt-link to="/fillings">
                      <div class="service_pic"><img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_4.png" title="補牙" alt="補牙" />  </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 "> 補牙</p>
                        </div>
                    </nuxt-link>
                    <!-- <a href="/fillings">
                        <div class="service_pic"><img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_4.png" title="補牙" alt="補牙" />  </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 "> 補牙</p>
                        </div>
                      </a> -->
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
                    <nuxt-link to="/general-oral-examination">
                       <div class="service_pic"><img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_5.png" title="一般口腔檢查"  alt="一般口腔檢查" /></div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">一般口腔檢查</p>
                        </div>
                    </nuxt-link>
                    <!-- <a href="/general-oral-examination">
                        <div class="service_pic"><img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_5.png" title="一般口腔檢查"  alt="一般口腔檢查" /></div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">一般口腔檢查</p>
                        </div>
                      </a> -->
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item nav-items">
              <div class="service_box">
                <div class=" service_item" >
                  <div class="service_hover">
                    <nuxt-link to="/children-dentistry">
                      <div class="service_pic"> <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_6.png" title="兒童牙科保健及治療" alt="兒童牙科保健及治療" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">兒童牙科<br>保健及治療</p>
                        </div>
                    </nuxt-link>
                    <!-- <a href="/children-dentistry">
                        <div class="service_pic"> <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_6.png" title="兒童牙科保健及治療" alt="兒童牙科保健及治療" /> </div>
                        <div class="service_txt">
                          <p class="fs-sm-16 ">兒童牙科<br>保健及治療</p>
                        </div>
                      </a> -->
                  </div>
                </div>
              </div>
            </li>
            </div>
          </ul>
           
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/facilities">儀器及設備</nuxt-link>
          <!-- <a class="nav-link" href="/facilities">儀器及設備</a> -->
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/oral-health-information">健康資訊</nuxt-link>

          <!-- <a class="nav-link" href="/equipment">健康資訊</a> -->
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/news">最新消息</nuxt-link>
          <!-- <a class="nav-link" href="/news">最新消息</a> -->
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/contact-us">聯絡我們</nuxt-link>
          <!-- <a class="nav-link" href="/contactUs">聯絡我們</a> -->
        </li>
        <!-- <li class="nav-item">
          <nuxt-link class="nav-link eng" to="#">ENG</nuxt-link>
        </li> -->
      </ul>
    </div>
    <div class="gnav"  :class="action === 1 ? 'action' : ''" >
      <div class="collapse navbar-collapse mbshow" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link class="nav-link "  to="/">首頁</nuxt-link>
          <!-- <a class="nav-link " href="/">首頁</a> -->
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/about-us">關於我們</nuxt-link>
          <!-- <a class="nav-link " href="/aboutMe">關於我們</a> -->
        </li>
        <!-- <li class="nav-item"> -->
          <!-- <nuxt-link class="nav-link" to="/our-medical-team">我們的團隊</nuxt-link> -->
          <!-- <a class="nav-link" href="/doctorTeam">我們的團隊</a> -->
        <!-- </li> -->
        <li class="nav-item dropdown">
          <nuxt-link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown">牙科服務</nuxt-link>
          <!-- <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown">
           牙科服務
          </a> -->
          <!-- 注意：这个ul是包含在li里面的 是下拉菜单的内容 -->
         <ul class="dropdown-menu  ">
            <li><nuxt-link class="dropdown-item" to="/implant">植牙</nuxt-link></li>
            <li><nuxt-link class="dropdown-item" to="/rct">根管治療（杜牙根）</nuxt-link></li>
            <li><nuxt-link class="dropdown-item" to="/invisalign">Invisalign 隱適美</nuxt-link></li>
            <li><nuxt-link class="dropdown-item" to="/veneers">瓷貼片</nuxt-link></li>
            <li><nuxt-link class="dropdown-item" to="/teeth-whitening">牙齒美白</nuxt-link></li>
            <li><nuxt-link class="dropdown-item" to="/crowns-and-bridges">全瓷牙冠及全鋯牙冠</nuxt-link></li>
            <li><nuxt-link class="dropdown-item" to="/extractions-and-wisdom-teeth-extraction">拔牙及智慧齒脫除</nuxt-link></li>
            <li><nuxt-link class="dropdown-item" to="/periodontal-treatment">牙周病治療</nuxt-link></li>
            <li><nuxt-link class="dropdown-item" to="/complete-and-partial-denture">全口牙托及局部牙托</nuxt-link></li>
            <li><nuxt-link class="dropdown-item" to="/orthodontics">矯齒</nuxt-link></li>
            <li><nuxt-link class="dropdown-item" to="/scaling-and-polishing">洗牙</nuxt-link></li>
            <li><nuxt-link class="dropdown-item" to="/fillings">補牙</nuxt-link></li>
            <li><nuxt-link class="dropdown-item" to="/general-oral-examination">一般口腔檢查</nuxt-link></li>
            <li><nuxt-link class="dropdown-item" to="/children-dentistry">兒童牙科保健及治療</nuxt-link></li>
          </ul>
           
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/facilities">儀器及設備</nuxt-link>

          <!-- <a class="nav-link" href="/facilities">儀器及設備</a> -->
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/oral-health-information">健康資訊</nuxt-link>
          <!-- <a class="nav-link" href="/equipment">健康資訊</a> -->
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/news">最新消息</nuxt-link>
          <!-- <a class="nav-link" href="/news">最新消息</a> -->
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/contact-us">聯絡我們</nuxt-link>
          <!-- <a class="nav-link" href="/contactUs">聯絡我們</a> -->
        </li>
        <!-- <li class="nav-item">
          <nuxt-link class="nav-link eng" to="#">ENG</nuxt-link>
        </li> -->
      </ul>
    </div>
    </div>
    
  </div>
</nav>
</div>
</template>
<script>

export default {
  data() {
    return {
      action:0
    }
  },
  computed: {

  },
  methods: {
    floatsty() {
      if(this.action === 0){
        this.action = 1
      }else{
        this.action = 0
      }
      console.log(this.action);
    }
  }
}
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 1000px) and (max-width: 1440px) {
  .navbar-expand-lg .navbar-nav .nav-link{
    padding-right: 0;
  }
}
//pc
@media only screen and (min-width: 760px) {
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
    margin-right: 5vw;
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
      padding-right: 0.3rem;
    padding-left: 0.3rem;
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
            font-weight: 500;
          }
        }
      }
    }
  
//mb
@media only screen and (max-width: 760px) {
  .action{
    pointer-events: all !important;
    opacity: 1 !important;
    
  }
  .gnav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 56px;
    opacity: 0;
    padding: 64px 40px 40px;
    pointer-events: none;
    transition: .4s ease-out;
    // transform: translateY(-100%);
    background-color: #fff;
    overflow-y: scroll;
    z-index: 999;
  }
  .floatsty{
    float: right;
    right: 0;
    position: fixed;
    z-index: 9999;
    border: 0;
  }
    .nar{
      .navbar-brand{
        img{
          width: 42vw;
          padding-left: 2vw;
        }
      }
      }
  .pcshow{
    display: none;
  }
   .engmb{
    display: block !important;
    margin-left: 19.4vw;
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
    background: url('https://static.cmereye.com/static/lkximg/image/banner/BurgerBtn.png') no-repeat !important;
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


