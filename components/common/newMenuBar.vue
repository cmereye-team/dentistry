<template>
  <div class="nav-fa">
    <div class="nav-fu main-container new-main-container">
      <div class="pcshow header scroll-active">
        <div class="header-logo">
          <nuxt-link class="navbar-brand" to="/">
            <img src="https://static.cmereye.com/static/loffee/logo/bulelogo.svg" alt="">
          </nuxt-link>
        </div>
        <nav class="header-nav navbar-light navbar navbar-expand-lg">
          <div class="gnavd collapse navbar-collapse container-fluid" id="navbarNavDropdown">
            <ul class="flex">
              <li class="nav-item">
                <nuxt-link class="nav-link index" to="/">首頁</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link about-us" to="/about-us">關於我們</nuxt-link>
              </li>
              <li class="nav-item dropdown">
                <nuxt-link class="nav-link dropdown-toggle yaserve" to="/service" id="navbarDropdownMenuLink"
                  role="button" @click.native="toServicePages" data-bs-toggle="dropdown">牙科服務</nuxt-link>
                <!-- 注意：这个ul是包含在li里面的 是下拉菜单的内容 -->
                <ul class="dropdown-menu">
                  <div class="drop">
                    <li class="nav-item nav-items">
                      <div class="service_box">
                        <div class="service_item">
                          <div class="service_hover implant">
                            <nuxt-link to="/implant" class="implant">
                              <div class="service_pic">
                                <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame.png"
                                  title="植牙" alt="植牙" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">植牙</p>
                              </div>
                            </nuxt-link>

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
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/rct" class="rct">
                              <div class="service_pic">
                                <img class="imgya teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group.png"
                                  title="根管治療（杜牙根）" alt="根管治療（杜牙根）" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">根管治療<br />（杜牙根）</p>
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
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/invisalign" class="invisalign">
                              <div class="service_pic">
                                <img class="teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/tif.png"
                                  title="Invisalign隱形牙箍" alt="Invisalign隱形牙箍" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">Invisalign<br />隱形牙箍</p>
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
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/veneers" class="veneers">
                              <div class="service_pic">
                                <img class="teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_0.png"
                                  title=" 瓷貼片" alt=" 瓷貼片" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">瓷貼片</p>
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
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/teeth-whitening" class="teeth-whitening">
                              <div class="service_pic">
                                <img class="teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_1.png"
                                  title="牙齒美白" alt="牙齒美白" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">牙齒美白</p>
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
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="crowns-and-bridges" class="crowns-and-bridges">
                              <div class="service_pic">
                                <img class="quanci teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame01.png"
                                  title="全瓷牙冠及全鋯牙冠" alt="全瓷牙冠及全鋯牙冠" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">全瓷牙冠<br />及全鋯牙冠</p>
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
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/extractions-and-wisdom-teeth-extraction"
                              class="extractions-and-wisdom-teeth-extraction">
                              <div class="service_pic">
                                <img class="imgba teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame02.png"
                                  title="拔牙及智慧齒脫除" alt="拔牙及智慧齒脫除" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">拔牙及智慧齒脫除</p>
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
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/periodontal-treatment" class="periodontal-treatment">
                              <div class="service_pic">
                                <img class="teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame03.png"
                                  title="牙周病治療" alt="牙周病治療" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">牙周病治療</p>
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
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/complete-and-partial-denture" class="complete-and-partial-denture">
                              <div class="service_pic">
                                <img class="allya"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_2.png"
                                  title="全口牙托及局部牙托" alt="全口牙托及局部牙托" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">全口牙托及<br />局部牙托</p>
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
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/orthodontics" class="orthodontics">
                              <div class="service_pic">
                                <img class="quanci teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame04.png"
                                  title="矯齒" alt="矯齒" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">矯齒</p>
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
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/scaling-and-polishing" class="scaling-and-polishing">
                              <div class="service_pic">
                                <img class="teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_3.png"
                                  title="洗牙" alt="洗牙" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">洗牙</p>
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
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/fillings" class="fillings">
                              <div class="service_pic">
                                <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_4.png"
                                  title="補牙" alt="補牙" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">補牙</p>
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
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/general-oral-examination" class="general-oral-examination">
                              <div class="service_pic">
                                <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_5.png"
                                  title="一般口腔檢查" alt="一般口腔檢查" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">一般口腔檢查</p>
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
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/children-dentistry" class="children-dentistry">
                              <div class="service_pic">
                                <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_6.png"
                                  title="兒童牙科保健及治療" alt="兒童牙科保健及治療" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">兒童牙科<br />保健及治療</p>
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
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/oral-health-information">健康資訊</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/news">最新消息</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/contact-us">聯絡我們</nuxt-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div class="nar sticky-sm-top sticky-top home-content mbshow" style="width=90%">
      <div class="mbShow marquee">
        <div>首次洗牙包全口 <span>X-Ray</span> 檢查</div>
      </div>
      <nav class="navbar_pc navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <nuxt-link class="navbar-brand" to="/">
            <img src="https://static.cmereye.com/static/loffee/logo/bulelogo.svg" alt="" />
          </nuxt-link>
          <!-- <div><a class="nav-link engmb" href="#">ENG</a></div> -->
          <button class="navbar-toggler floatsty" type="button" @click="floatsty" data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown">
            <!-- <span class="navbar-toggler-icon"></span> -->
            <div id="hamburger" class="hamburglar" :class="isClosed === 1 ? 'is-open' : ''" @click="chickHandle">
              <div class="burger-icon">
                <div class="burger-container">
                  <span class="burger-bun-top"></span>
                  <span class="burger-filling"></span>
                  <span class="burger-bun-bot"></span>
                </div>
              </div>
              <!-- svg ring containter -->
              <div class="burger-ring">
                <svg class="svg-ring">
                  <path class="path" fill="none" stroke="#00477B" stroke-miterlimit="10" stroke-width="3"
                    d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2" />
                </svg>
              </div>
              <!-- the masked path that animates the fill to the ring -->
              <svg width="0" height="0">
                <mask id="mask">
                  <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff0000" stroke-miterlimit="10"
                    stroke-width="4" d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4" />
                </mask>
              </svg>
              <div class="path-burger">
                <div class="animate-path">
                  <div class="path-rotation"></div>
                </div>
              </div>
            </div>
          </button>
          <div class="collapse navbar-collapse pcshow" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <nuxt-link class="nav-link index" to="/">首頁</nuxt-link>
                <!-- <a class="nav-link " href="/">首頁</a> -->
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link about-us" to="/about-us">關於我們</nuxt-link>
              </li>
              <li class="nav-item dropdown">
                <nuxt-link class="nav-link dropdown-toggle yaserve" to="/service" id="navbarDropdownMenuLink"
                  role="button" data-bs-toggle="dropdown">牙科服務</nuxt-link>
                <!-- 注意：这个ul是包含在li里面的 是下拉菜单的内容 -->
                <ul class="dropdown-menu">
                  <div class="drop">
                    <li class="nav-item nav-items">
                      <div class="service_box">
                        <div class="service_item">
                          <div class="service_hover implant">
                            <nuxt-link to="/implant" class="implant">
                              <div class="service_pic">
                                <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame.png"
                                  title="植牙" alt="植牙" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">植牙</p>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item nav-items">
                      <div class="service_box">
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/rct" class="rct">
                              <div class="service_pic">
                                <img class="imgya teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group.png"
                                  title="根管治療（杜牙根）" alt="根管治療（杜牙根）" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">根管治療<br />（杜牙根）</p>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item nav-items">
                      <div class="service_box">
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/invisalign" class="invisalign">
                              <div class="service_pic">
                                <img class="teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/tif.png"
                                  title="Invisalign隱形牙箍" alt="Invisalign隱形牙箍" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">Invisalign<br />隱形牙箍</p>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item nav-items">
                      <div class="service_box">
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/veneers" class="veneers">
                              <div class="service_pic">
                                <img class="teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_0.png"
                                  title=" 瓷貼片" alt=" 瓷貼片" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">瓷貼片</p>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div class="drop">
                    <li class="nav-item nav-items">
                      <div class="service_box">
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/teeth-whitening" class="teeth-whitening">
                              <div class="service_pic">
                                <img class="teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_1.png"
                                  title="牙齒美白" alt="牙齒美白" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">牙齒美白</p>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item nav-items">
                      <div class="service_box">
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="crowns-and-bridges" class="crowns-and-bridges">
                              <div class="service_pic">
                                <img class="quanci teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame01.png"
                                  title="全瓷牙冠及全鋯牙冠" alt="全瓷牙冠及全鋯牙冠" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">全瓷牙冠<br />及全鋯牙冠</p>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item nav-items">
                      <div class="service_box">
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/extractions-and-wisdom-teeth-extraction"
                              class="extractions-and-wisdom-teeth-extraction">
                              <div class="service_pic">
                                <img class="imgba teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame02.png"
                                  title="拔牙及智慧齒脫除" alt="拔牙及智慧齒脫除" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">拔牙及智慧齒脫除</p>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item nav-items">
                      <div class="service_box">
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/periodontal-treatment" class="periodontal-treatment">
                              <div class="service_pic">
                                <img class="teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame03.png"
                                  title="牙周病治療" alt="牙周病治療" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">牙周病治療</p>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div class="drop">
                    <li class="nav-item nav-items">
                      <div class="service_box">
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/complete-and-partial-denture" class="complete-and-partial-denture">
                              <div class="service_pic">
                                <img class="allya"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_2.png"
                                  title="全口牙托及局部牙托" alt="全口牙托及局部牙托" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">全口牙托及<br />局部牙托</p>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item nav-items">
                      <div class="service_box">
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/orthodontics" class="orthodontics">
                              <div class="service_pic">
                                <img class="quanci teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Frame04.png"
                                  title="矯齒" alt="矯齒" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">矯齒</p>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item nav-items">
                      <div class="service_box">
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/scaling-and-polishing" class="scaling-and-polishing">
                              <div class="service_pic">
                                <img class="teshu"
                                  src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_3.png"
                                  title="洗牙" alt="洗牙" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">洗牙</p>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item nav-items">
                      <div class="service_box">
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/fillings" class="fillings">
                              <div class="service_pic">
                                <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_4.png"
                                  title="補牙" alt="補牙" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">補牙</p>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div class="drop">
                    <li class="nav-item nav-items">
                      <div class="service_box">
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/general-oral-examination" class="general-oral-examination">
                              <div class="service_pic">
                                <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_5.png"
                                  title="一般口腔檢查" alt="一般口腔檢查" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">一般口腔檢查</p>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item nav-items">
                      <div class="service_box">
                        <div class="service_item">
                          <div class="service_hover">
                            <nuxt-link to="/children-dentistry" class="children-dentistry">
                              <div class="service_pic">
                                <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Group_6.png"
                                  title="兒童牙科保健及治療" alt="兒童牙科保健及治療" />
                              </div>
                              <div class="service_txt">
                                <p class="fs-sm-16">兒童牙科<br />保健及治療</p>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                </ul>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link facilities" to="/facilities">儀器及設備</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link oral-health-information" to="/oral-health-information">健康資訊</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link news" to="/news">最新消息</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link contact-us" to="/contact-us">聯絡我們</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="gnav" :class="action === 1 ? 'action' : ''">
            <div class="collapse navbar-collapse mbshow" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/">首頁</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/about-us">關於我們</nuxt-link>
                </li>
                <li class="nav-item dropdown">
                  <nuxt-link class="nav-link dropdown-toggle" to="/service" id="navbarDropdownMenuLink" role="button"
                    data-bs-toggle="dropdown">牙科服務</nuxt-link>
                  <!-- 注意：这个ul是包含在li里面的 是下拉菜单的内容 -->
                  <ul class="dropdown-menu">
                    <li>
                      <nuxt-link class="dropdown-item" to="/implant">植牙</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link class="dropdown-item" to="/rct">根管治療（杜牙根）</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link class="dropdown-item" to="/invisalign">Invisalign 隱適美</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link class="dropdown-item" to="/veneers">瓷貼片</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link class="dropdown-item" to="/teeth-whitening">牙齒美白</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link class="dropdown-item" to="/crowns-and-bridges">全瓷牙冠及全鋯牙冠</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link class="dropdown-item" to="/extractions-and-wisdom-teeth-extraction">拔牙及智慧齒脫除</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link class="dropdown-item" to="/periodontal-treatment">牙周病治療</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link class="dropdown-item" to="/complete-and-partial-denture">全口牙托及局部牙托</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link class="dropdown-item" to="/orthodontics">矯齒</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link class="dropdown-item" to="/scaling-and-polishing">洗牙</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link class="dropdown-item" to="/fillings">補牙</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link class="dropdown-item" to="/general-oral-examination">一般口腔檢查</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link class="dropdown-item" to="/children-dentistry">兒童牙科保健及治療</nuxt-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/facilities">儀器及設備</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/oral-health-information">健康資訊</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/news">最新消息</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/contact-us">聯絡我們</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <el-backtop>
      <div class="toTop" @click="toPageTop">
        <div class="arrowTop" :style="{ display: toTopType ? 'none' : 'block' }"></div>
        <img class="ya" :style="{ top: toTopType ? '40%' : '50%' }"
          src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/new-hkcmereye/Group-654.3nyt17vc48m0.png"
          alt="">
        <div class="toTopline">
          <span :style="{ height: toTopType ? '10px' : '0px' }"></span>
          <span :style="{ height: toTopType ? '20px' : '0px' }"></span>
          <span :style="{ height: toTopType ? '15px' : '0px' }"></span>
        </div>
        <img class="pageTop"
          src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/new-hkcmereye/image-10.13h8v2f2dmkg.png"
          alt="">
      </div>
    </el-backtop>
  </div>
</template>
<script>
export default {
  data() {
    return {
      action: 0,
      isClosed: 0,
      toTopType: false,
      announcement: true, // 公告 true 开启 false 关闭
    };
  },
  computed: {},
  mounted() {
  },
  methods: {
    toServicePages() {
      this.$router.push("/service");
    },
    chickHandle() {
      if (this.isClosed === 0) {
        this.isClosed = 1;
      } else {
        this.isClosed = 0;
      }
    },
    floatsty() {
      if (this.action === 0) {
        this.action = 1;
      } else {
        this.action = 0;
      }
      console.log(this.action);
    },
    toPageTop() {
      this.toTopType = true
      setTimeout(() => {
        this.toTopType = false
      }, 500)
    }
  },
};
</script>
<style lang="scss" scoped>
//pc
@media only screen and (min-width: 760px) {
  ::v-deep .el-backtop {
    background: transparent;
    box-shadow: 0 0 0 transparent;
  }

  .service_box {
    .service_item {
      .service_txt[data-v-47af9056] {
        padding-left: 5px;
        padding-right: 5px;
        height: 8vw;
        display: flex;
        align-items: center;
        flex-flow: column;
        justify-content: center;
        margin-top: 4vw;
      }
    }

    // font-weight: 500 !important;
  }

  .service_box {
    .row[data-v-47af9056] {
      padding-right: 15px;
      justify-content: center;
    }
  }

  .service_box {
    .row {
      padding-right: 15px;
    }
  }

  .serve_con {
    text-align: left;
    padding: 5vw;
    color: #79828d;
  }

  .service_box {
    .service_item {
      text-align: center;
      // display: flex;
      // align-items: center;
      justify-content: center;
      flex-flow: column;
      margin: 0.2vw;
    }
  }

  .service_box {
    .service_item {
      .service_hover {
        // height: auto;
        padding-bottom: 1rem;
        // z-index: 999;
        background: #ecf7fc;
        padding: 0;
      }
    }
  }

  a {
    text-decoration: none;
  }

  .service_pic {
    line-height: 4.4rem;

    img {
      max-width: 45px;
    }

    .teshu {
      max-width: 60px;
    }
  }

  .box {
    margin: 5vw 17.5vw;
  }

  .service_box {
    display: flex;
    justify-content: left;
  }

  .engmb {
    display: none;
    margin-right: 5vw;
  }

  .eng {
    color: #00477b !important;
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
  }

  .nav-fa {
    /* 粘性定位 ( IE 浏览器不生效 ) */
    position: sticky; // 粘性定位
    top: 0; // 粘性定位
    z-index: 9999;
    // width: calc(100% - 120px);
    background: #fff;
    box-shadow: 2px -10px 12px darkslategrey;
  }

  .header-nav {
    position: relative;
    flex: 1;
    height: 104px;
    margin-left: 224px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .flex {
      display: flex;
      justify-content: flex-end;
      margin-top: 1rem;

      li {
        font-family: "Noto Sans CJK TC";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height */
        text-align: center;
        letter-spacing: 0.1em;
      }
    }
  }

  .header-logo {
    position: absolute;
    z-index: 1;
  }

  .scroll-active {
    background-color: #fff;
    border-radius: 16px;
  }

  // .navbar>.container,
  // .navbar>.container-fluid,
  // .navbar>.container-lg,
  // .navbar>.container-md,
  // .navbar>.container-sm,
  // .navbar>.container-xl,
  // .navbar>.container-xxl {
  //   display: block;
  // }

  .navbar-expand-lg .navbar-collapse {
    display: inline-block;
  }

  .nav-link {
    color: #57b2f3;
    font-size: 18px;
    padding: 0.7rem 1.25rem;
  }

  .navbar-expand-lg .navbar-collapse {
    justify-content: flex-end;
  }

  .mbshow {
    display: none !important;
  }

  .engmb {
    display: none;
    margin-right: 5vw;
  }

  .navbar-brand {
    img {
      position: absolute;
      // padding: 4px;
      // width: 271px;
      height: 80px;
      padding-top: 17px;
    }
  }

  .pcshow {
    position: relative;
  }

  .allya {
    margin-bottom: 0 !important;
  }

  .dropdown-menu {
    border-radius: 1.25rem !important;
  }

  .nav-item {
    .yuyue {
      background: #ffffff;
      border: 1px solid #5ba8de;
      border-radius: 10px;
      margin-left: 6px;
      font-family: "Noto Sans HK";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      /* identical to box height, or 125% */

      letter-spacing: 0.1em;

      color: #57b2f3;
    }
  }

  .nav-items {
    padding: 0 0.2vw !important;
  }

  .drop {
    display: flex;
  }

  .imgba {
    margin-bottom: 0 !important;
    margin-top: 0.4vw !important;
  }

  .imgya {
    margin-left: 1vw !important;
    margin-bottom: 0 !important;
    // margin-top: 0.4vw !important;
  }

  .serve_con {
    width: 73vw;
    display: flex;
    text-align: center;
    justify-content: center;
    padding-left: 31vw;
  }

  .service_box .service_item .service_hover {
    width: 100px;
    height: 100px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease-in-out;
    // box-shadow: 0 0 15px lightgray;
    border-radius: 1.071rem;
    cursor: pointer;
    padding: 0;
  }

  .service_box .service_item:hover .service_hover:before {
    transform: rotate(-45deg) translateY(115px) translateX(-55px);
  }

  .service_txt {
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    /* or 118% */

    text-align: center;
    letter-spacing: 0.1em;
    color: #505050;
  }

  .service_box .service_item:hover .service_hover {
    background: #9bd0f5;
    border-radius: 1.071rem;
    // box-shadow: 0 5px 15px lightgray;
    // transform: translate(2px, -2px);
  }

  .service_box .service_item .service_pic .service_txt {
    background-color: #b3d7ff;
  }

  .service_box .service_item:hover .service_hover p {
    color: #ffffff;
  }




  .toTop {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 100px;
    height: 100px;
    cursor: pointer;
    transition: all 0.5s;

    .arrowTop {
      position: absolute;
      top: 18px;
      left: 50%;
      width: 8px;
      height: 8px;
      border: 2px solid #fff;
      border-right: none;
      border-bottom: none;
      transform: translateX(-50%) rotate(45deg);
      transform-origin: center center;
      transition: all .7s;
    }

    .ya {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all .7s;
    }

    .toTopline {
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      width: 15px;

      span {
        width: 3px;
        height: 0;
        background: #fff;
        transition: all .7s;
        display: block;
      }
    }

    .pageTop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      animation: toTopRoto 5s linear infinite;
    }
  }

  @keyframes toTopRoto {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}

//mb
@media only screen and (max-width: 760px) {
  @keyframes scroll {
    from {
      transform: translate(300px, 0)
    }

    to {
      transform: translate(-300px, 0)
    }
  }

  .marquee {
    background: #57B2F3;
    width: 100%;
    padding: 6px 0;
    margin-bottom: 5px;
    overflow: hidden;

    &>div {
      color: #FFF;
      text-align: center;
      font-family: Noto Sans TC;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.9px;
      animation: scroll 5s linear 0s infinite;

      &>span {
        color: #FFD333;
        font-family: Noto Sans TC;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.9px;
      }
    }
  }

  .toTop {
    position: fixed;
    bottom: 80px;
    right: 10px;
    width: 100px;
    height: 100px;
    cursor: pointer;
    transition: all 0.5s;
    z-index: 99;

    .arrowTop {
      position: absolute;
      top: 18px;
      left: 50%;
      width: 8px;
      height: 8px;
      border: 2px solid #fff;
      border-right: none;
      border-bottom: none;
      transform: translateX(-50%) rotate(45deg);
      transform-origin: center center;
      transition: all .7s;
    }

    .ya {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all .7s;
      width: fit-content !important;
    }

    .toTopline {
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      width: 15px;

      span {
        width: 3px;
        height: 0;
        background: #fff;
        transition: all .7s;
        display: block;
      }
    }

    .pageTop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      animation: toTopRoto 5s linear infinite;
    }
  }

  @keyframes toTopRoto {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  ::v-deep .el-backtop {
    background: transparent;
    box-shadow: none;
    z-index: 99;
  }

  //mb hamburglar

  $color: #fff; // icon color

  $blue: #00477b; // background color

  $animation: 0.6s; // animation speed

  $scale: 1; // icon scale 68/68 default

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  // spacing + background-color

  body {
    background: $color;
    padding: 40px;
  }

  h4 {
    font-family: arial, helvetica, serif;
    color: $color;
    font-size: 18px;
    text-align: center;
    margin: 40px 0 0;
  }

  .hamburglar {
    transform: scale($scale);

    // margin: 40px auto;

    position: relative;

    display: block;

    width: 68px;

    height: 68px;

    background: none;

    -webkit-touch-callout: none;

    user-select: none;
  }

  // transition mask

  .path-burger {
    position: absolute;

    top: 0;

    left: 0;

    height: 68px;

    width: 68px;

    // two masks because... browser support.

    mask: url(#mask);

    -webkit-mask-box-image: url(https://raygun.io/upload/mask.svg);
  }

  .animate-path {
    position: absolute;

    top: 0;

    left: 0;

    width: 68px;

    height: 68px;
  }

  // what this does is create a small square that I then rotate behind an svg mask, giving the apparence of the line animating

  .path-rotation {
    height: 34px;

    width: 34px;

    margin: 34px 34px 0 0;

    transform: rotate(0deg);

    transform-origin: 100% 0;

    &:before {
      content: "";

      display: block;

      width: 30px;

      height: 34px;

      margin: 0 4px 0 0;

      background: $blue;
    }
  }

  // box rotation animation

  @keyframes rotate-out {
    0% {
      transform: rotate(0deg);
    }

    40% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate-in {
    0% {
      transform: rotate(360deg);
    }

    40% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  // offset moves

  // dasharray is the dash size

  // need to be able to control dash space size.

  .hamburglar.is-open {
    .path {
      animation: dash-in $animation linear normal;

      animation-fill-mode: forwards;
    }

    .animate-path {
      animation: rotate-in $animation linear normal;

      animation-fill-mode: forwards;
    }
  }

  .hamburglar.is-closed {
    .path {
      animation: dash-out $animation linear normal;

      animation-fill-mode: forwards;
    }

    .animate-path {
      animation: rotate-out $animation linear normal;

      animation-fill-mode: forwards;
    }
  }

  .path {
    stroke-dasharray: 240;

    stroke-dashoffset: 240;

    stroke-linejoin: round;
  }

  @keyframes dash-in {
    0% {
      stroke-dashoffset: 240;
    }

    40% {
      stroke-dashoffset: 240;
    }

    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes dash-out {
    0% {
      stroke-dashoffset: 0;
    }

    40% {
      stroke-dashoffset: 240;
    }

    100% {
      stroke-dashoffset: 240;
    }
  }

  // All good burgers need filling!

  .burger-icon {
    position: absolute;

    padding: 20px 16px;

    height: 68px;

    width: 68px;
  }

  .burger-container {
    position: relative;

    height: 28px;

    width: 36px;
  }

  .burger-bun-top,
  .burger-bun-bot,
  .burger-filling {
    position: absolute;

    display: block;

    height: 4px;

    width: 36px;

    border-radius: 2px;

    background: $blue;
  }

  .burger-bun-top {
    top: 0;

    transform-origin: 34px 2px;
  }

  .burger-bun-bot {
    bottom: 0;

    transform-origin: 34px 2px;
  }

  //.burger-filling {

  //  @include transition(all,($animation/2.5),ease-in-//out);

  //}

  // relative parent is the button

  .burger-filling {
    top: 12px;
  }

  // burger ring container

  .burger-ring {
    position: absolute;

    top: 0;

    left: 0;

    width: 68px;

    height: 68px;
  }

  .svg-ring {
    width: 68px;

    height: 68px;
  }

  // bun animations

  .hamburglar.is-open {
    .burger-bun-top {
      animation: bun-top-out $animation linear normal;

      animation-fill-mode: forwards;
    }

    .burger-bun-bot {
      animation: bun-bot-out $animation linear normal;

      animation-fill-mode: forwards;
    }
  }

  .hamburglar.is-closed {
    .burger-bun-top {
      animation: bun-top-in $animation linear normal;

      animation-fill-mode: forwards;
    }

    .burger-bun-bot {
      animation: bun-bot-in $animation linear normal;

      animation-fill-mode: forwards;
    }
  }

  @keyframes bun-top-out {
    0% {
      left: 0;

      top: 0;

      transform: rotate(0deg);
    }

    20% {
      left: 0;

      top: 0;

      transform: rotate(15deg);
    }

    80% {
      left: -5px;

      top: 0;

      transform: rotate(-60deg);
    }

    100% {
      left: -5px;

      top: 1px;

      transform: rotate(-45deg);
    }
  }

  @keyframes bun-bot-out {
    0% {
      left: 0;

      transform: rotate(0deg);
    }

    20% {
      left: 0;

      transform: rotate(-15deg);
    }

    80% {
      left: -5px;

      transform: rotate(60deg);
    }

    100% {
      left: -5px;

      transform: rotate(45deg);
    }
  }

  @keyframes bun-top-in {
    0% {
      left: -5px;

      bot: 0;

      transform: rotate(-45deg);
    }

    20% {
      left: -5px;

      bot: 0;

      transform: rotate(-60deg);
    }

    80% {
      left: 0;

      bot: 0;

      transform: rotate(15deg);
    }

    100% {
      left: 0;

      bot: 1px;

      transform: rotate(0deg);
    }
  }

  @keyframes bun-bot-in {
    0% {
      left: -5px;

      transform: rotate(45deg);
    }

    20% {
      left: -5px;

      bot: 0;

      transform: rotate(60deg);
    }

    80% {
      left: 0;

      bot: 0;

      transform: rotate(-15deg);
    }

    100% {
      left: 0;

      transform: rotate(0deg);
    }
  }

  // burger filling

  .hamburglar.is-open {
    .burger-filling {
      animation: burger-fill-out $animation linear normal;

      animation-fill-mode: forwards;
    }
  }

  .hamburglar.is-closed {
    .burger-filling {
      animation: burger-fill-in $animation linear normal;

      animation-fill-mode: forwards;
    }
  }

  @keyframes burger-fill-in {
    0% {
      width: 0;

      left: 36px;
    }

    40% {
      width: 0;

      left: 40px;
    }

    80% {
      width: 36px;

      left: -6px;
    }

    100% {
      width: 36px;

      left: 0px;
    }
  }

  @keyframes burger-fill-out {
    0% {
      width: 36px;

      left: 0px;
    }

    20% {
      width: 42px;

      left: -6px;
    }

    40% {
      width: 0;

      left: 40px;
    }

    100% {
      width: 0;

      left: 36px;
    }
  }

  .action {
    pointer-events: all !important;
    opacity: 1 !important;
  }

  .gnav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 56px;
    opacity: 0;
    padding: 64px 40px 40px;
    pointer-events: none;
    transition: 0.4s ease-out;
    // transform: translateY(-100%);
    background-color: #fff;
    overflow-y: scroll;
    z-index: 999;
  }

  .floatsty {
    float: right;
    right: 0;
    position: fixed;
    z-index: 9999;
    border: 0;
  }

  .nar {
    .navbar-brand {
      img {
        width: 42vw;
        // padding-left: 2vw;
        max-height: 60px;
      }
    }
  }

  .navbar_pc {
    margin: 5px auto;
  }

  .pcshow {
    display: none;
  }

  .engmb {
    display: block !important;
    margin-left: 19.4vw;
    color: #00477b !important;
  }

  .eng {
    display: none;
  }

  .sticky-top {
    // position: -webkit-sticky;
    position: inherit !important;
    top: 0;
    z-index: 1020;
  }

  // .navbar {
  //   position: relative;
  //   display: flex;
  //   flex-wrap: wrap;
  //   align-items: center;
  //   justify-content: space-between;
  //   padding-top: 0.5rem;
  //   // padding-bottom: 11.5rem;
  // }

  .navbar-light .navbar-toggler-icon {
    background: url("https://static.cmereye.com/static/lkximg/image/banner/BurgerBtn.png") no-repeat !important;
  }

  .dropdown-menu {
    border: 0px;
  }

  .dropdown-item {
    color: #9bd0f5;
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
    color: #57b2f3 !important;
    border-bottom: 1px solid #c2c7cd;
  }

  .navbar-light .navbar-nav .nav-link {
    color: #57b2f3 !important;
  }

  .navbar>.container,
  .navbar>.container-fluid,
  .navbar>.container-lg,
  .navbar>.container-md,
  .navbar>.container-sm,
  .navbar>.container-xl,
  .navbar>.container-xxl {
    width: 100%;
    background-color: #fff;
    border-radius: 80px 80px 80px 80px;
  }

  .navbar-brand {
    margin-right: 0;
  }

  img {
    width: 90%;
  }
}
</style>


