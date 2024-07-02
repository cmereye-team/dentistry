<template>
  <div class="vedio_box md:font-black main-container">
    <div class="flex justify-center texts">
      <h2>診所地址</h2>
      <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="" />
    </div>

    <div class="adress">
      <ul>
        <li @click="addhandleClick(index)" v-for="(item, index) in addresslist"
          :class="addcurrentIndex == index ? 'actives' : ''" :id="item.id" :key="item.id">
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div v-if="showAllMap">
      <div class="justify-center addmap">
        <div id="map">
          <div class="map-title">中環</div>
          <img src="https://static.cmereye.com/static/lkximg/map/materials_中環.jpg" width="100%" />
        </div>
        <div>
          <div class="mapcontennt">
            <div class="map_style">
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                    <g clip-path="url(#clip0_122_5270)">
                      <path
                        d="M5.92848 15.4949C5.74956 15.448 5.58397 15.3627 5.44405 15.2455C5.30414 15.1283 5.19351 14.9821 5.12042 14.818C3.84263 12.55 2.55171 10.2851 1.27064 8.01712C0.659151 6.97139 0.428504 5.75872 0.615413 4.57216C0.802321 3.3856 1.39604 2.29336 2.30206 1.4693C2.85994 0.941649 3.53205 0.53929 4.27028 0.291021C5.00851 0.0427514 5.7946 -0.0452903 6.5723 0.0331997C7.84559 0.143755 9.0398 0.675617 9.95185 1.53834C10.8639 2.40106 11.4375 3.54137 11.575 4.76535C11.7231 5.84931 11.5092 6.95053 10.9641 7.90957C9.65015 10.2788 8.28696 12.6544 6.94677 15.0015C6.87439 15.1296 6.7741 15.2412 6.65277 15.3286C6.53144 15.4159 6.39194 15.477 6.24382 15.5076L5.92848 15.4949ZM8.34609 4.85709C8.34698 4.28095 8.11128 3.72784 7.69038 3.31838C7.26949 2.90892 6.69755 2.67632 6.09929 2.67131C5.8018 2.66965 5.50689 2.72448 5.23143 2.83266C4.95596 2.94085 4.70535 3.10027 4.49393 3.30182C4.28251 3.50336 4.11442 3.74306 3.99928 4.00721C3.88414 4.27137 3.82421 4.55479 3.82292 4.84127C3.82289 5.41715 4.05887 5.96979 4.47958 6.37907C4.90029 6.78835 5.47173 7.0212 6.06973 7.02704C6.36721 7.0287 6.66212 6.97388 6.93759 6.86569C7.21305 6.7575 7.46366 6.59807 7.67508 6.39653C7.88651 6.19499 8.05459 5.95529 8.16973 5.69113C8.28487 5.42698 8.3448 5.14356 8.34609 4.85709Z"
                        fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_122_5270">
                        <rect width="11.0599" height="15.4839" fill="white" transform="translate(0.557617 0.0136719)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>中環畢打街1-3號中建大廈11樓1102室</div>
              </div>
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                    <g clip-path="url(#clip0_145_117)">
                      <path
                        d="M9.36885 0H4.63064C4.30284 0 4.03711 0.259022 4.03711 0.578543V1.79773C4.03711 2.11725 4.30284 2.37627 4.63064 2.37627H9.36885C9.69664 2.37627 9.96238 2.11725 9.96238 1.79773V0.578543C9.96238 0.259022 9.69664 0 9.36885 0Z"
                        fill="white" />
                      <path
                        d="M10.3449 0.921726H3.65505C2.39085 0.921726 1.36475 1.92192 1.36475 3.15418V9.67504C1.36475 10.9073 2.39085 11.9075 3.65505 11.9075H10.3449C11.6091 11.9075 12.6352 10.9073 12.6352 9.67504V3.15091C12.6352 1.91865 11.6091 0.918457 10.3449 0.918457V0.921726ZM3.89313 9.86789C3.49409 9.86789 3.17217 9.5541 3.17217 9.16514C3.17217 8.77618 3.49409 8.46239 3.89313 8.46239C4.29217 8.46239 4.61409 8.77618 4.61409 9.16514C4.61409 9.5541 4.29217 9.86789 3.89313 9.86789ZM10.1101 9.86789C9.71109 9.86789 9.38918 9.5541 9.38918 9.16514C9.38918 8.77618 9.71109 8.46239 10.1101 8.46239C10.5092 8.46239 10.8311 8.77618 10.8311 9.16514C10.8311 9.5541 10.5092 9.86789 10.1101 9.86789ZM10.9485 5.61217C10.9485 6.08939 10.5528 6.47508 10.0632 6.47508H3.91325C3.42367 6.47508 3.02798 6.08939 3.02798 5.61217V3.39606C3.02798 2.91884 3.42367 2.53315 3.91325 2.53315H10.0598C10.5494 2.53315 10.9451 2.91884 10.9451 3.39606V5.61217H10.9485Z"
                        fill="white" />
                      <path d="M0 16.9837L3.31641 12.1724H3.75234L1.19713 17.0001L0 16.9837Z" fill="white" />
                      <path d="M13.9999 16.9837L10.6835 12.1724H10.2476L12.8028 17.0001L13.9999 16.9837Z" fill="white" />
                      <path d="M11.2502 13.5058H2.90723L3.24256 12.8521H10.66L11.2502 13.5058Z" fill="white" />
                      <path d="M12.464 15.6894H1.8374L2.17273 15.0356H12.1287L12.464 15.6894Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_145_117">
                        <rect width="14" height="17" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>中環地鐵站G出口（鄰近置地廣場）</div>
              </div>
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                    <circle cx="8.29493" cy="8.86182" r="7.79493" stroke="white" />
                    <path d="M8.74658 9.20769L8.74658 3.67773" stroke="white" stroke-linecap="round" />
                    <path d="M8.74651 9.20748L12.6175 11.6269" stroke="white" stroke-linecap="round" />
                  </svg>
                </div>
                <div>
                  <div>
                    <span>星期一至星期五</span><span>星期六</span><span>星期日及公眾假期</span>
                  </div>
                  <div>
                    <span>09:30 － 18:30</span><span>09:30 － 17:30</span><span>休息</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="button">
            <a class="link_more google_map" href="https://goo.gl/maps/PvdcUiRiCqSdmHSn9" aria-hidden="true"
              target="_blank">Google
              地圖</a>
            <a class="link_more" href="https://j.map.baidu.com/e7/6Wx" aria-hidden="true" target="_blank">百度地圖</a>
          </div>
        </div>
      </div>
      <!-- <div class="justify-center addmap">
        <div id="map">
          <div class="map-title">尖沙咀</div>
          <img src="https://static.cmereye.com/static/lkximg/map/materials_尖沙嘴.jpg" width="100%" />
        </div>
        <div>
          <div class="mapcontennt">
            <div class="map_style">
              <div>
                <div><img src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Frame.svg" alt="" /></div>
                <div>尖沙咀梳士巴利道18-24號K11 ATELIER辦公大樓1906室</div>
              </div>
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                    <g clip-path="url(#clip0_145_117)">
                      <path
                        d="M9.36885 0H4.63064C4.30284 0 4.03711 0.259022 4.03711 0.578543V1.79773C4.03711 2.11725 4.30284 2.37627 4.63064 2.37627H9.36885C9.69664 2.37627 9.96238 2.11725 9.96238 1.79773V0.578543C9.96238 0.259022 9.69664 0 9.36885 0Z"
                        fill="white" />
                      <path
                        d="M10.3449 0.921726H3.65505C2.39085 0.921726 1.36475 1.92192 1.36475 3.15418V9.67504C1.36475 10.9073 2.39085 11.9075 3.65505 11.9075H10.3449C11.6091 11.9075 12.6352 10.9073 12.6352 9.67504V3.15091C12.6352 1.91865 11.6091 0.918457 10.3449 0.918457V0.921726ZM3.89313 9.86789C3.49409 9.86789 3.17217 9.5541 3.17217 9.16514C3.17217 8.77618 3.49409 8.46239 3.89313 8.46239C4.29217 8.46239 4.61409 8.77618 4.61409 9.16514C4.61409 9.5541 4.29217 9.86789 3.89313 9.86789ZM10.1101 9.86789C9.71109 9.86789 9.38918 9.5541 9.38918 9.16514C9.38918 8.77618 9.71109 8.46239 10.1101 8.46239C10.5092 8.46239 10.8311 8.77618 10.8311 9.16514C10.8311 9.5541 10.5092 9.86789 10.1101 9.86789ZM10.9485 5.61217C10.9485 6.08939 10.5528 6.47508 10.0632 6.47508H3.91325C3.42367 6.47508 3.02798 6.08939 3.02798 5.61217V3.39606C3.02798 2.91884 3.42367 2.53315 3.91325 2.53315H10.0598C10.5494 2.53315 10.9451 2.91884 10.9451 3.39606V5.61217H10.9485Z"
                        fill="white" />
                      <path d="M0 16.9837L3.31641 12.1724H3.75234L1.19713 17.0001L0 16.9837Z" fill="white" />
                      <path d="M13.9999 16.9837L10.6835 12.1724H10.2476L12.8028 17.0001L13.9999 16.9837Z" fill="white" />
                      <path d="M11.2502 13.5058H2.90723L3.24256 12.8521H10.66L11.2502 13.5058Z" fill="white" />
                      <path d="M12.464 15.6894H1.8374L2.17273 15.0356H12.1287L12.464 15.6894Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_145_117">
                        <rect width="14" height="17" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>尖沙咀地鐵站J出口</div>
              </div>
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                    <circle cx="8.29493" cy="8.86182" r="7.79493" stroke="white" />
                    <path d="M8.74658 9.20769L8.74658 3.67773" stroke="white" stroke-linecap="round" />
                    <path d="M8.74651 9.20748L12.6175 11.6269" stroke="white" stroke-linecap="round" />
                  </svg>
                </div>
                <div>
                  <div>
                    <span>星期一至星期二</span><span>星期三至星期五</span><span>星期六</span><span>星期日及公眾假期</span>
                  </div>
                  <div>
                    <span>09:00 － 19:00</span><span>09:00 － 18:00</span><span>09:00 － 17:00</span><span>休息</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="button">
            <a class="link_more google_map" href="https://goo.gl/maps/ubJUKR2QrmmtYqUWA" aria-hidden="true"
              target="_blank">Google
              地圖</a>
            <a class="link_more" href="https://j.map.baidu.com/8f/37s" aria-hidden="true" target="_blank">百度地圖</a>
          </div>
        </div>
      </div> -->
      <div class="justify-center addmap">
        <div id="map">
          <div class="map-title">觀塘</div>
          <img src="https://static.cmereye.com/static/lkximg/map/materials_觀塘.jpg" width="100%" />
        </div>
        <div>
          <div class="mapcontennt">
            <div class="map_style">
              <div>
                <div><img src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Frame.svg" alt="" /></div>
                <div>觀塘開源道79號鱷魚恤中心16樓1601室</div>
              </div>
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                    <g clip-path="url(#clip0_145_117)">
                      <path
                        d="M9.36885 0H4.63064C4.30284 0 4.03711 0.259022 4.03711 0.578543V1.79773C4.03711 2.11725 4.30284 2.37627 4.63064 2.37627H9.36885C9.69664 2.37627 9.96238 2.11725 9.96238 1.79773V0.578543C9.96238 0.259022 9.69664 0 9.36885 0Z"
                        fill="white" />
                      <path
                        d="M10.3449 0.921726H3.65505C2.39085 0.921726 1.36475 1.92192 1.36475 3.15418V9.67504C1.36475 10.9073 2.39085 11.9075 3.65505 11.9075H10.3449C11.6091 11.9075 12.6352 10.9073 12.6352 9.67504V3.15091C12.6352 1.91865 11.6091 0.918457 10.3449 0.918457V0.921726ZM3.89313 9.86789C3.49409 9.86789 3.17217 9.5541 3.17217 9.16514C3.17217 8.77618 3.49409 8.46239 3.89313 8.46239C4.29217 8.46239 4.61409 8.77618 4.61409 9.16514C4.61409 9.5541 4.29217 9.86789 3.89313 9.86789ZM10.1101 9.86789C9.71109 9.86789 9.38918 9.5541 9.38918 9.16514C9.38918 8.77618 9.71109 8.46239 10.1101 8.46239C10.5092 8.46239 10.8311 8.77618 10.8311 9.16514C10.8311 9.5541 10.5092 9.86789 10.1101 9.86789ZM10.9485 5.61217C10.9485 6.08939 10.5528 6.47508 10.0632 6.47508H3.91325C3.42367 6.47508 3.02798 6.08939 3.02798 5.61217V3.39606C3.02798 2.91884 3.42367 2.53315 3.91325 2.53315H10.0598C10.5494 2.53315 10.9451 2.91884 10.9451 3.39606V5.61217H10.9485Z"
                        fill="white" />
                      <path d="M0 16.9837L3.31641 12.1724H3.75234L1.19713 17.0001L0 16.9837Z" fill="white" />
                      <path d="M13.9999 16.9837L10.6835 12.1724H10.2476L12.8028 17.0001L13.9999 16.9837Z" fill="white" />
                      <path d="M11.2502 13.5058H2.90723L3.24256 12.8521H10.66L11.2502 13.5058Z" fill="white" />
                      <path d="M12.464 15.6894H1.8374L2.17273 15.0356H12.1287L12.464 15.6894Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_145_117">
                        <rect width="14" height="17" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>觀塘地鐵站B3出口</div>
              </div>
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                    <circle cx="8.29493" cy="8.86182" r="7.79493" stroke="white" />
                    <path d="M8.74658 9.20769L8.74658 3.67773" stroke="white" stroke-linecap="round" />
                    <path d="M8.74651 9.20748L12.6175 11.6269" stroke="white" stroke-linecap="round" />
                  </svg>
                </div>
                <div>
                  <div>
                    <span>星期一至星期五</span><span>星期六</span><span>星期日及公眾假期</span>
                  </div>
                  <div>
                    <span>09:30 － 18:30</span><span>09:30 － 17:30</span><span>休息</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="button">
            <a class="link_more google_map" href="https://goo.gl/maps/SGs1wJ5upMoEqJ3k7" aria-hidden="true"
              target="_blank">Google
              地圖</a>
            <a class="link_more" href="https://j.map.baidu.com/f2/Vgzc" aria-hidden="true" target="_blank">百度地圖</a>
          </div>
        </div>
      </div>
      <div class="justify-center addmap">
        <div id="map">
          <div class="map-title">沙田</div>
          <img src="https://static.cmereye.com/static/lkximg/map/materials_沙田.jpg" width="100%" />
        </div>
        <div>
          <div class="mapcontennt">
            <div class="map_style">
              <div>
                <div><img src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Frame.svg" alt="" /></div>
                <div>沙田正街11-17號偉華中心2樓1C-1F號舖</div>
              </div>
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                    <g clip-path="url(#clip0_145_117)">
                      <path
                        d="M9.36885 0H4.63064C4.30284 0 4.03711 0.259022 4.03711 0.578543V1.79773C4.03711 2.11725 4.30284 2.37627 4.63064 2.37627H9.36885C9.69664 2.37627 9.96238 2.11725 9.96238 1.79773V0.578543C9.96238 0.259022 9.69664 0 9.36885 0Z"
                        fill="white" />
                      <path
                        d="M10.3449 0.921726H3.65505C2.39085 0.921726 1.36475 1.92192 1.36475 3.15418V9.67504C1.36475 10.9073 2.39085 11.9075 3.65505 11.9075H10.3449C11.6091 11.9075 12.6352 10.9073 12.6352 9.67504V3.15091C12.6352 1.91865 11.6091 0.918457 10.3449 0.918457V0.921726ZM3.89313 9.86789C3.49409 9.86789 3.17217 9.5541 3.17217 9.16514C3.17217 8.77618 3.49409 8.46239 3.89313 8.46239C4.29217 8.46239 4.61409 8.77618 4.61409 9.16514C4.61409 9.5541 4.29217 9.86789 3.89313 9.86789ZM10.1101 9.86789C9.71109 9.86789 9.38918 9.5541 9.38918 9.16514C9.38918 8.77618 9.71109 8.46239 10.1101 8.46239C10.5092 8.46239 10.8311 8.77618 10.8311 9.16514C10.8311 9.5541 10.5092 9.86789 10.1101 9.86789ZM10.9485 5.61217C10.9485 6.08939 10.5528 6.47508 10.0632 6.47508H3.91325C3.42367 6.47508 3.02798 6.08939 3.02798 5.61217V3.39606C3.02798 2.91884 3.42367 2.53315 3.91325 2.53315H10.0598C10.5494 2.53315 10.9451 2.91884 10.9451 3.39606V5.61217H10.9485Z"
                        fill="white" />
                      <path d="M0 16.9837L3.31641 12.1724H3.75234L1.19713 17.0001L0 16.9837Z" fill="white" />
                      <path d="M13.9999 16.9837L10.6835 12.1724H10.2476L12.8028 17.0001L13.9999 16.9837Z" fill="white" />
                      <path d="M11.2502 13.5058H2.90723L3.24256 12.8521H10.66L11.2502 13.5058Z" fill="white" />
                      <path d="M12.464 15.6894H1.8374L2.17273 15.0356H12.1287L12.464 15.6894Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_145_117">
                        <rect width="14" height="17" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>沙田地鐵站A3出口</div>
              </div>
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                    <circle cx="8.29493" cy="8.86182" r="7.79493" stroke="white" />
                    <path d="M8.74658 9.20769L8.74658 3.67773" stroke="white" stroke-linecap="round" />
                    <path d="M8.74651 9.20748L12.6175 11.6269" stroke="white" stroke-linecap="round" />
                  </svg>
                </div>
                <div>
                  <div>
                    <span>星期一至星期五</span><span>星期六</span><span>星期日及公眾假期</span>
                  </div>
                  <div>
                    <span>09:30 － 18:30</span><span>09:30 － 17:30</span><span>休息</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="button">
            <a class="link_more google_map" href="https://goo.gl/maps/SrWKtmDL1Ygixk2u9" aria-hidden="true"
              target="_blank">Google
              地圖</a>
            <a class="link_more" href="https://j.map.baidu.com/8f/jisf" aria-hidden="true" target="_blank">百度地圖</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="addcurrentIndex === 0 && showAllMap == false">
      <div class="justify-center addmap">
        <div id="map">
          <div class="map-title">中環</div>
          <img src="https://static.cmereye.com/static/lkximg/map/materials_中環.jpg" width="100%" />
        </div>
        <div>
          <div class="mapcontennt">
            <div class="map_style">
              <div>
                <div><img src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Frame.svg" alt="" /></div>
                <div>中環畢打街1-3號中建大廈11樓1102室</div>
              </div>
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                    <g clip-path="url(#clip0_145_117)">
                      <path
                        d="M9.36885 0H4.63064C4.30284 0 4.03711 0.259022 4.03711 0.578543V1.79773C4.03711 2.11725 4.30284 2.37627 4.63064 2.37627H9.36885C9.69664 2.37627 9.96238 2.11725 9.96238 1.79773V0.578543C9.96238 0.259022 9.69664 0 9.36885 0Z"
                        fill="white" />
                      <path
                        d="M10.3449 0.921726H3.65505C2.39085 0.921726 1.36475 1.92192 1.36475 3.15418V9.67504C1.36475 10.9073 2.39085 11.9075 3.65505 11.9075H10.3449C11.6091 11.9075 12.6352 10.9073 12.6352 9.67504V3.15091C12.6352 1.91865 11.6091 0.918457 10.3449 0.918457V0.921726ZM3.89313 9.86789C3.49409 9.86789 3.17217 9.5541 3.17217 9.16514C3.17217 8.77618 3.49409 8.46239 3.89313 8.46239C4.29217 8.46239 4.61409 8.77618 4.61409 9.16514C4.61409 9.5541 4.29217 9.86789 3.89313 9.86789ZM10.1101 9.86789C9.71109 9.86789 9.38918 9.5541 9.38918 9.16514C9.38918 8.77618 9.71109 8.46239 10.1101 8.46239C10.5092 8.46239 10.8311 8.77618 10.8311 9.16514C10.8311 9.5541 10.5092 9.86789 10.1101 9.86789ZM10.9485 5.61217C10.9485 6.08939 10.5528 6.47508 10.0632 6.47508H3.91325C3.42367 6.47508 3.02798 6.08939 3.02798 5.61217V3.39606C3.02798 2.91884 3.42367 2.53315 3.91325 2.53315H10.0598C10.5494 2.53315 10.9451 2.91884 10.9451 3.39606V5.61217H10.9485Z"
                        fill="white" />
                      <path d="M0 16.9837L3.31641 12.1724H3.75234L1.19713 17.0001L0 16.9837Z" fill="white" />
                      <path d="M13.9999 16.9837L10.6835 12.1724H10.2476L12.8028 17.0001L13.9999 16.9837Z" fill="white" />
                      <path d="M11.2502 13.5058H2.90723L3.24256 12.8521H10.66L11.2502 13.5058Z" fill="white" />
                      <path d="M12.464 15.6894H1.8374L2.17273 15.0356H12.1287L12.464 15.6894Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_145_117">
                        <rect width="14" height="17" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>中環地鐵站G出口（鄰近置地廣場）</div>
              </div>
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                    <circle cx="8.29493" cy="8.86182" r="7.79493" stroke="white" />
                    <path d="M8.74658 9.20769L8.74658 3.67773" stroke="white" stroke-linecap="round" />
                    <path d="M8.74651 9.20748L12.6175 11.6269" stroke="white" stroke-linecap="round" />
                  </svg>
                </div>
                <div>
                  <div>
                    <span>星期一至星期五</span><span>星期六</span><span>星期日及公眾假期</span>
                  </div>
                  <div>
                    <span>09:30 － 18:30</span><span>09:30 － 17:30</span><span>休息</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="button">
            <a class="link_more google_map" href="https://goo.gl/maps/PvdcUiRiCqSdmHSn9" aria-hidden="true"
              target="_blank">Google
              地圖</a>
            <a class="link_more" href="https://j.map.baidu.com/e7/6Wx" aria-hidden="true" target="_blank">百度地圖</a>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="addcurrentIndex === 1 && showAllMap == false">
      <!-- <div class="justify-center addmap">
        <div id="map">
          <div class="map-title">22尖沙咀</div>
          <img src="https://static.cmereye.com/static/lkximg/map/materials_尖沙嘴.jpg" width="100%" />
        </div>
        <div>
          <div class="mapcontennt">
            <div class="map_style">
              <div>
                <div><img src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Frame.svg" alt="" /></div>
                <div>尖沙咀梳士巴利道18-24號K11 ATELIER辦公大樓1906室</div>
              </div>
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                    <g clip-path="url(#clip0_145_117)">
                      <path
                        d="M9.36885 0H4.63064C4.30284 0 4.03711 0.259022 4.03711 0.578543V1.79773C4.03711 2.11725 4.30284 2.37627 4.63064 2.37627H9.36885C9.69664 2.37627 9.96238 2.11725 9.96238 1.79773V0.578543C9.96238 0.259022 9.69664 0 9.36885 0Z"
                        fill="white" />
                      <path
                        d="M10.3449 0.921726H3.65505C2.39085 0.921726 1.36475 1.92192 1.36475 3.15418V9.67504C1.36475 10.9073 2.39085 11.9075 3.65505 11.9075H10.3449C11.6091 11.9075 12.6352 10.9073 12.6352 9.67504V3.15091C12.6352 1.91865 11.6091 0.918457 10.3449 0.918457V0.921726ZM3.89313 9.86789C3.49409 9.86789 3.17217 9.5541 3.17217 9.16514C3.17217 8.77618 3.49409 8.46239 3.89313 8.46239C4.29217 8.46239 4.61409 8.77618 4.61409 9.16514C4.61409 9.5541 4.29217 9.86789 3.89313 9.86789ZM10.1101 9.86789C9.71109 9.86789 9.38918 9.5541 9.38918 9.16514C9.38918 8.77618 9.71109 8.46239 10.1101 8.46239C10.5092 8.46239 10.8311 8.77618 10.8311 9.16514C10.8311 9.5541 10.5092 9.86789 10.1101 9.86789ZM10.9485 5.61217C10.9485 6.08939 10.5528 6.47508 10.0632 6.47508H3.91325C3.42367 6.47508 3.02798 6.08939 3.02798 5.61217V3.39606C3.02798 2.91884 3.42367 2.53315 3.91325 2.53315H10.0598C10.5494 2.53315 10.9451 2.91884 10.9451 3.39606V5.61217H10.9485Z"
                        fill="white" />
                      <path d="M0 16.9837L3.31641 12.1724H3.75234L1.19713 17.0001L0 16.9837Z" fill="white" />
                      <path d="M13.9999 16.9837L10.6835 12.1724H10.2476L12.8028 17.0001L13.9999 16.9837Z" fill="white" />
                      <path d="M11.2502 13.5058H2.90723L3.24256 12.8521H10.66L11.2502 13.5058Z" fill="white" />
                      <path d="M12.464 15.6894H1.8374L2.17273 15.0356H12.1287L12.464 15.6894Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_145_117">
                        <rect width="14" height="17" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>尖沙咀地鐵站J出口</div>
              </div>
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                    <circle cx="8.29493" cy="8.86182" r="7.79493" stroke="white" />
                    <path d="M8.74658 9.20769L8.74658 3.67773" stroke="white" stroke-linecap="round" />
                    <path d="M8.74651 9.20748L12.6175 11.6269" stroke="white" stroke-linecap="round" />
                  </svg>
                </div>
                <div>
                  <div>
                    <span>星期一至星期二</span><span>星期三至星期五</span><span>星期六</span><span>星期日及公眾假期</span>
                  </div>
                  <div>
                    <span>09:00 － 19:00</span><span>09:00 － 18:00</span><span>09:00 － 17:00</span><span>休息</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="button">
            <a class="link_more google_map" href="https://goo.gl/maps/ubJUKR2QrmmtYqUWA" aria-hidden="true"
              target="_blank">Google
              地圖</a>
            <a class="link_more" href="https://j.map.baidu.com/8f/37s" aria-hidden="true" target="_blank">百度地圖</a>
          </div>
        </div>
      </div> -->
      <div class="justify-center addmap">
        <div id="map">
          <div class="map-title">觀塘</div>
          <img src="https://static.cmereye.com/static/lkximg/map/materials_觀塘.jpg" width="100%" />
        </div>
        <div>
          <div class="mapcontennt">
            <div class="map_style">
              <div>
                <div><img src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Frame.svg" alt="" /></div>
                <div>觀塘開源道79號鱷魚恤中心16樓1601室</div>
              </div>
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                    <g clip-path="url(#clip0_145_117)">
                      <path
                        d="M9.36885 0H4.63064C4.30284 0 4.03711 0.259022 4.03711 0.578543V1.79773C4.03711 2.11725 4.30284 2.37627 4.63064 2.37627H9.36885C9.69664 2.37627 9.96238 2.11725 9.96238 1.79773V0.578543C9.96238 0.259022 9.69664 0 9.36885 0Z"
                        fill="white" />
                      <path
                        d="M10.3449 0.921726H3.65505C2.39085 0.921726 1.36475 1.92192 1.36475 3.15418V9.67504C1.36475 10.9073 2.39085 11.9075 3.65505 11.9075H10.3449C11.6091 11.9075 12.6352 10.9073 12.6352 9.67504V3.15091C12.6352 1.91865 11.6091 0.918457 10.3449 0.918457V0.921726ZM3.89313 9.86789C3.49409 9.86789 3.17217 9.5541 3.17217 9.16514C3.17217 8.77618 3.49409 8.46239 3.89313 8.46239C4.29217 8.46239 4.61409 8.77618 4.61409 9.16514C4.61409 9.5541 4.29217 9.86789 3.89313 9.86789ZM10.1101 9.86789C9.71109 9.86789 9.38918 9.5541 9.38918 9.16514C9.38918 8.77618 9.71109 8.46239 10.1101 8.46239C10.5092 8.46239 10.8311 8.77618 10.8311 9.16514C10.8311 9.5541 10.5092 9.86789 10.1101 9.86789ZM10.9485 5.61217C10.9485 6.08939 10.5528 6.47508 10.0632 6.47508H3.91325C3.42367 6.47508 3.02798 6.08939 3.02798 5.61217V3.39606C3.02798 2.91884 3.42367 2.53315 3.91325 2.53315H10.0598C10.5494 2.53315 10.9451 2.91884 10.9451 3.39606V5.61217H10.9485Z"
                        fill="white" />
                      <path d="M0 16.9837L3.31641 12.1724H3.75234L1.19713 17.0001L0 16.9837Z" fill="white" />
                      <path d="M13.9999 16.9837L10.6835 12.1724H10.2476L12.8028 17.0001L13.9999 16.9837Z" fill="white" />
                      <path d="M11.2502 13.5058H2.90723L3.24256 12.8521H10.66L11.2502 13.5058Z" fill="white" />
                      <path d="M12.464 15.6894H1.8374L2.17273 15.0356H12.1287L12.464 15.6894Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_145_117">
                        <rect width="14" height="17" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>觀塘地鐵站B3出口</div>
              </div>
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                    <circle cx="8.29493" cy="8.86182" r="7.79493" stroke="white" />
                    <path d="M8.74658 9.20769L8.74658 3.67773" stroke="white" stroke-linecap="round" />
                    <path d="M8.74651 9.20748L12.6175 11.6269" stroke="white" stroke-linecap="round" />
                  </svg>
                </div>
                <div>
                  <div>
                    <span>星期一至星期五</span><span>星期六</span><span>星期日及公眾假期</span>
                  </div>
                  <div>
                    <span>09:30 － 18:30</span><span>09:30 － 17:30</span><span>休息</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="button">
            <a class="link_more google_map" href="https://goo.gl/maps/SGs1wJ5upMoEqJ3k7" aria-hidden="true"
              target="_blank">Google
              地圖</a>
            <a class="link_more" href="https://j.map.baidu.com/f2/Vgzc" aria-hidden="true" target="_blank">百度地圖</a>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="addcurrentIndex === 2 && showAllMap == false">
      <div class="justify-center addmap">
        <div id="map">
          <div class="map-title">沙田</div>
          <img src="https://static.cmereye.com/static/lkximg/map/materials_沙田.jpg" width="100%" />
        </div>
        <div>
          <div class="mapcontennt">
            <div class="map_style">
              <div>
                <div><img src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Frame.svg" alt="" /></div>
                <div>沙田正街11-17號偉華中心2樓1C-1F號舖</div>
              </div>
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                    <g clip-path="url(#clip0_145_117)">
                      <path
                        d="M9.36885 0H4.63064C4.30284 0 4.03711 0.259022 4.03711 0.578543V1.79773C4.03711 2.11725 4.30284 2.37627 4.63064 2.37627H9.36885C9.69664 2.37627 9.96238 2.11725 9.96238 1.79773V0.578543C9.96238 0.259022 9.69664 0 9.36885 0Z"
                        fill="white" />
                      <path
                        d="M10.3449 0.921726H3.65505C2.39085 0.921726 1.36475 1.92192 1.36475 3.15418V9.67504C1.36475 10.9073 2.39085 11.9075 3.65505 11.9075H10.3449C11.6091 11.9075 12.6352 10.9073 12.6352 9.67504V3.15091C12.6352 1.91865 11.6091 0.918457 10.3449 0.918457V0.921726ZM3.89313 9.86789C3.49409 9.86789 3.17217 9.5541 3.17217 9.16514C3.17217 8.77618 3.49409 8.46239 3.89313 8.46239C4.29217 8.46239 4.61409 8.77618 4.61409 9.16514C4.61409 9.5541 4.29217 9.86789 3.89313 9.86789ZM10.1101 9.86789C9.71109 9.86789 9.38918 9.5541 9.38918 9.16514C9.38918 8.77618 9.71109 8.46239 10.1101 8.46239C10.5092 8.46239 10.8311 8.77618 10.8311 9.16514C10.8311 9.5541 10.5092 9.86789 10.1101 9.86789ZM10.9485 5.61217C10.9485 6.08939 10.5528 6.47508 10.0632 6.47508H3.91325C3.42367 6.47508 3.02798 6.08939 3.02798 5.61217V3.39606C3.02798 2.91884 3.42367 2.53315 3.91325 2.53315H10.0598C10.5494 2.53315 10.9451 2.91884 10.9451 3.39606V5.61217H10.9485Z"
                        fill="white" />
                      <path d="M0 16.9837L3.31641 12.1724H3.75234L1.19713 17.0001L0 16.9837Z" fill="white" />
                      <path d="M13.9999 16.9837L10.6835 12.1724H10.2476L12.8028 17.0001L13.9999 16.9837Z" fill="white" />
                      <path d="M11.2502 13.5058H2.90723L3.24256 12.8521H10.66L11.2502 13.5058Z" fill="white" />
                      <path d="M12.464 15.6894H1.8374L2.17273 15.0356H12.1287L12.464 15.6894Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_145_117">
                        <rect width="14" height="17" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>沙田地鐵站A3出口</div>
              </div>
              <div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                    <circle cx="8.29493" cy="8.86182" r="7.79493" stroke="white" />
                    <path d="M8.74658 9.20769L8.74658 3.67773" stroke="white" stroke-linecap="round" />
                    <path d="M8.74651 9.20748L12.6175 11.6269" stroke="white" stroke-linecap="round" />
                  </svg>
                </div>
                <div>
                  <div>
                    <span>星期一至星期五</span><span>星期六</span><span>星期日及公眾假期</span>
                  </div>
                  <div>
                    <span>09:30 － 18:30</span><span>09:30 － 17:30</span><span>休息</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="button">
            <a class="link_more google_map" href="https://goo.gl/maps/SrWKtmDL1Ygixk2u9" aria-hidden="true"
              target="_blank">Google
              地圖</a>
            <a class="link_more" href="https://j.map.baidu.com/8f/jisf" aria-hidden="true" target="_blank">百度地圖</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
</script>
<script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/724128333/?random=1636507954390&amp;cv=9&amp;fst=1636507954390&amp;num=1&amp;bg=ffffff&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;u_h=1152&amp;u_w=2048&amp;u_ah=1112&amp;u_aw=2048&amp;u_cd=24&amp;u_his=1&amp;u_tz=480&amp;u_java=false&amp;u_nplug=2&amp;u_nmime=2&amp;gtm=2oab80&amp;sendb=1&amp;ig=1&amp;data=event%3Dgtag.config&amp;frm=0&amp;url=https%3A%2F%2Fwww.hkeyecmer.com%2Fteam%2F&amp;tiba=%E7%9C%BC%E7%A7%91%E9%86%AB%E7%94%9F&amp;hn=www.googleadservices.com&amp;async=1&amp;rfmt=3&amp;fmt=4"></script><script type="text/javascript" charset="utf-8" src="https://mqj.zoosnet.net/js/CdCheck.aspx?id=40126824&amp;sid=fdfd20355a524f8ca3ad942f4def42c9&amp;d=1636509748743"></script>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          title: "中環",
        },
        {
          id: 2,
          title: "銅鑼灣",
        },
        {
          id: 3,
          title: "灣仔",
        },
      ],
      list2: [
        {
          id: 1,
          title: "尖沙咀",
        },
        {
          id: 2,
          title: "鑽石山",
        },
        {
          id: 3,
          title: "觀塘",
        },
      ],
      list3: [
        {
          id: 1,
          title: "沙田",
        },
      ],
      addresslist: [
        {
          id: 1,
          title: "港島",
        },
        {
          id: 2,
          title: "九龍",
        },
        {
          id: 3,
          title: "新界",
        },
      ],
      currentIndex: 0, // 当前点击的tab的索引
      addcurrentIndex: 0, // 当前点击的tab的索引
      showAllMap: false,
    };
  },
  created() {},

  methods: {

    handleClick(index) {
      // console.log(index);
      this.currentIndex = index;
    },
    addhandleClick(index) {
      console.log(index);
      this.addcurrentIndex = index;
      this.showAllMap = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.texts {
  text-align: center;

  h2 {
    font-weight: 300;
    color: #79828d;
    margin-bottom: 0vw;
  }

  image {
    text-align: center;
  }
}

a {
  text-decoration: none;
  color: #57b2f3;

  &:hover {
    animation: 3s ease-in 1s 2 reverse both paused slidein;
  }
}

@media only screen and (min-width: 1000px) and (max-width: 1440px) {
  .mapcontennt {
    z-index: -1;
  }

  .mapcontennt::before {
    //这里就是小三角了
    content: "";
    display: block;
    position: absolute;
    left: -56px !important;
    top: 92px !important;
    border-width: 30px;
    border-style: dashed solid dashed dashed;
    border-color: transparent #8cd1f8 transparent transparent;
  }
}

//pc
@media only screen and (min-width: 768px) {
  .map_style {
    display: flex;
    flex-direction: column;
    min-width: 320px;

    &>div {
      display: flex;

      &>div:nth-child(1) {
        flex: 1;
        width: 17px;
        height: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: 2px;

        &>svg {
          width: 100%;
        }
      }

      &>div:nth-child(2) {
        flex: 9;
        color: #FFF;
        text-align: justify;
        font-family: Noto Sans;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.5px;
      }
    }

    &>div:nth-child(2) {
      margin: 20px 0;
    }

    &>div:nth-child(3) {
      &>div:nth-child(2) {
        display: flex;

        &>div {
          display: flex;
          flex-direction: column;
        }

        &>div:nth-child(1) {
          margin-right: 30px;
        }
      }
    }
  }

  #map {
    position: relative;

    .map-title {
      position: absolute;
      left: 10%;
      top: -50px;
      width: 25%;
      color: #fff;
      background: #8cd1f8;
      height: 50px;
      line-height: 50px;
      border-radius: 15px 15px 0 0;
      text-align: center;
      font-size: 18px;
      font-weight: 500;

      &::before {
        content: "";
        width: 20px;
        height: 20px;
        position: absolute;
        left: -20px;
        bottom: 0;
        background: radial-gradient(at 0% 0%, #fff 70%, #8cd1f8 40%);
      }

      &::after {
        content: "";
        width: 20px;
        height: 20px;
        position: absolute;
        right: -20px;
        bottom: 0;
        background: radial-gradient(at 100% 0%, #fff 70%, #8cd1f8 40%);
      }
    }

    img {
      border-radius: 30px 30px 30px 30px;
      border-radius: 10px 10px 10px 10px;
      box-shadow: 22px 22px 0px #8cd1f8;
    }
  }

  .button {
    display: flex;
    margin-left: 59px;
  }

  @keyframes slidein {
    0% {
      // background: linear-gradient(94.37deg, #4570b6 12.08%, #81dbec 92.9%);
    }

    100% {
      background: linear-gradient(94.37deg, #57b2f3 12.08%, #57b2f3 92.9%);
      color: white;
    }
  }

  .link_more {
    border: 2px solid #57b2f3;
    border-radius: 40px 40px 40px 40px;
    transition: all 0.5s;
    color: #57b2f3;
    text-decoration: none;
    display: block;
    padding: 15px;
    margin: 0 auto;
    margin-top: 1vw;
    text-align: center;
    width: 167px;
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */
    letter-spacing: 0.1em;

    &:hover {
      animation: 3s ease-in 1s 2 reverse both paused slidein;
    }
  }

  .button {
    &>a:nth-child(1) {
      border-radius: 100px;
      border: 1px solid #57B2F3;
      background: #57B2F3;
      color: #FFF;
      font-family: Noto Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.6px;
    }
  }

  .google_map:hover {
    border: 1px solid #57B2F3 !important;
    background: #fff !important;
    color: #57B2F3 !important;
  }


  .addmap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 148px;
  }

  .mapcontennt::before {
    //这里就是小三角了
    content: "";
    display: block;
    position: absolute;
    left: -59px;
    top: 95px;
    border-width: 30px;
    border-style: dashed solid dashed dashed;
    border-color: transparent #8cd1f8 transparent transparent;
  }

  .mapcontennt {
    background: #8cd1f8;
    border-radius: 30px 30px 30px 30px;
    margin-left: 87px;
    margin-top: 10px;
    position: relative;
    padding: 24px 30px;
    max-width: 400px;

    .addressMap {
      padding: 10px;
      font-size: 1rem;
    }

    .addrescoin {
      padding: 0.8vw 1.3vw 0 1.3vw;
      position: absolute;
      height: 40px;
      margin-bottom: 0.5vw;
    }

    .address1 {
      padding: 17px 58px 0px;
      color: white;
      margin-bottom: 0.5vw;
    }

    .address2 {
      padding: 0 1.3vw 0 1.3vw;
      color: white;
      margin-bottom: 0.5vw;
    }

    .address2::after {
      content: "";
      width: 100%;
      height: 1px;
      display: block;
      margin: 0 auto;
      border-bottom: 2px solid #fff;
      padding: 4px;
    }

    .week {
      padding: 0 1.3vw 0 1.8vw;
      color: white;
      float: left;
      font-size: 14px;
    }

    .week1 {
      padding: 1vw 3.3vw 0 2.5vw;
      position: relative;
      position: inherit !important;
      color: #fff;
      display: flex;
    }

    .week2 {
      position: relative;
      color: #fff;
      display: flex;
      font-size: 14px;
      // position: absolute;
      // width: max-content;
    }

    // p{
    //   padding: 0.8vw 1.3vw;
    //   color:white
    // }
  }

  .mapcontennt::after {
    display: block;
    content: "";
    clear: both;
  }

  .mapcontennt .week::after {
    content: "";
    clear: both;
  }

  #map {
    // height: 28vw;
    width: 673px;
    // border: 1px solid;
    border-radius: 10px 10px 10px 10px;
    // box-shadow: 15px 15px 5px #8CD1F8;
  }

  .map {
    border: #ddd;
  }

  .active {
    //  background-color: #F3FCFE;
    color: #57b2f3 !important;
    border-bottom: 2px solid #57b2f3;
    display: block;
  }

  .tab {
    display: flex;
    justify-content: center;

    ul {
      margin: 0;
      padding: 0;
      height: 50px;
      display: contents;
      // position: absolute;
    }

    li {
      cursor: pointer;
      box-sizing: border-box;
      list-style: none;
      text-align: center;
      float: left;
      margin: 1vw;
      color: #c2c7cd;

      // border-bottom: 2px solid linear-gradient(#81dbec,#4570b6 );
      // border-image: -webkit-linear-gradient(60deg, #81dbec, #4570b6) 1 2;
      width: 6vw;
    }
  }

  .vedio_box {
    padding-top: 60px;
    padding-bottom: 154px;
  }

  .adress {
    ul {
      padding: 0;
      display: flex;
      text-align: center;
      justify-content: center;
      margin-bottom: initial;

      li {
        font-family: "Noto Sans CJK TC";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        /* identical to box height */
        letter-spacing: 0.1em;
        height: 69px;
        width: 69px;
        color: white;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        margin: 29.375px;
        background: #9bd0f5;
        border-radius: 100%;
        cursor: pointer;
      }

      .actives {
        background: #57b2f3;
        border-radius: 100%;
      }

      // li:nth-of-type(1) {
      //   background: #57B2F3;
      //   border-radius: 100%;
      // }
    }
  }
}

//mb
@media only screen and (max-width: 767px) {
  .map_style {
    display: flex;
    flex-direction: column;
    min-width: 20rem;
    padding: 1.25rem 0.9375rem;

    &>div {
      display: flex;

      &>div:nth-child(1) {
        flex: 1;
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;

        &>svg {
          width: 100%;
        }
      }

      &>div:nth-child(2) {
        flex: 9;
        color: #FFF;
        text-align: justify;
        font-family: Noto Sans;
        font-size: 13px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.3px;
      }
    }

    &>div:nth-child(2) {
      margin: 20px 0;
    }

    &>div:nth-child(3) {
      &>div:nth-child(2) {
        display: flex;

        &>div {
          display: flex;
          flex-direction: column;
        }

        &>div:nth-child(1) {
          margin-right: 30px;
        }
      }
    }
  }

  .vedio_box {
    padding-bottom: 69px;
  }

  .actives {
    background: #57b2f3 !important;
    border-radius: 100% !important;
  }

  #addresd {
    // padding: 2.5vw 1.3vw 0 6.8vw;
  }

  // #map {
  //   // height: 55vw;
  //   width: 92%;
  //   // border: 1px solid;
  //   // border-radius: 10px 10px 10px 10px;
  //   box-shadow: 9px 9px 5px #8CD1F8;
  // }
  .addmap {
    padding-top: 130px;

    &:nth-of-type(1) {
      padding-top: 70px;
    }
  }

  #map {
    position: relative;

    .map-title {
      position: absolute;
      left: 20%;
      // transform: translateX(-50%);
      top: -40px;
      width: 25%;
      color: #fff;
      background: #8cd1f8;
      height: 40px;
      line-height: 40px;
      border-radius: 15px 15px 0 0;
      text-align: center;

      &::before {
        content: "";
        width: 18px;
        height: 18px;
        position: absolute;
        left: -18px;
        bottom: 0;
        background: radial-gradient(at 0% 0%, #fff 70%, #8cd1f8 40%);
      }

      &::after {
        content: "";
        width: 18px;
        height: 18px;
        position: absolute;
        right: -18px;
        bottom: 0;
        background: radial-gradient(at 100% 0%, #fff 70%, #8cd1f8 40%);
      }
    }

    img {
      border-radius: 30px 30px 30px 30px;
      // height: 28vw;
      width: 88vw;
      border-radius: 10px 10px 10px 10px;
      box-shadow: 13px 13px 0px #8cd1f8;
    }
  }

  @keyframes slidein {
    0% {
      // background: linear-gradient(94.37deg, #4570b6 12.08%, #81dbec 92.9%);
    }

    100% {
      background: linear-gradient(94.37deg, #57b2f3 12.08%, #57b2f3 92.9%);
      color: white;
    }
  }

  .mapcontennt::before {
    //这里就是小三角了
    content: "";
    display: block;
    position: absolute;
    left: 140px;
    top: -45px;
    border-width: 25px;
    border-style: solid solid dashed dashed;
    border-color: transparent transparent #8cd1f8 transparent;
  }

  .button {
    display: flex;
    // margin-left: 7vw;
  }

  .link_more {
    border: 2px solid #57b2f3;
    border-radius: 20px 20px 20px 20px;
    transition: all 0.5s;
    color: #57b2f3;
    text-decoration: none;
    font-weight: 600;
    display: block;
    padding: 1vw;
    margin: 0 auto;
    width: 28vw;
    letter-spacing: 0.2vw;
    margin-top: 3vw;
    text-align: center;

    &:hover {
      animation: 3s ease-in 1s 2 reverse both paused slidein;
    }
  }

  .mapcontennt {
    height: 65vw;
    width: 81vw;
    border: 1;
    background: #8cd1f8;
    border-radius: 16px 16px 16px 16px;
    margin-left: 3vw;
    margin-top: 37px !important;
    margin: 0 auto;
    position: relative;
  }

  // .mapcontennt {
  //   height: 65vw;
  //   width: 81vw;
  //   border: 1;
  //   background: #8cd1f8;
  //   border-radius: 16px 16px 16px 16px;
  //   margin-left: 3vw;
  //   margin-top: 37px !important;
  //   margin: 0 auto;
  //   position: relative;

  //   // .addrescoin {
  //   //   padding: 1vw 1.3vw 0 1.3vw;
  //   //   position: absolute;
  //   //   height: 6vw;
  //   //   margin-bottom: 0.5vw;
  //   //   margin: 2vw 0 0 2vw;
  //   // }

  //   .addressMap {
  //     padding: 10px;
  //   }

  //   .address1 {
  //     padding: 0.8vw 1.3vw 0 7.8vw;
  //     color: white;
  //     margin-bottom: 0.5vw;
  //     margin: 2vw 0 0 2vw;
  //   }

  //   .address2 {
  //     padding: 0 1.3vw 0 1.3vw;
  //     color: white;
  //     margin-bottom: 0.5vw;
  //     margin: 2vw 0 0 2vw;
  //   }

  //   .address2::after {
  //     content: "";
  //     width: 100%;
  //     height: 1px;
  //     display: block;
  //     margin: 0 auto;
  //     border-bottom: 2px solid #fff;
  //     padding: 4px;
  //   }

  //   .week {
  //     padding: 1vw 3.3vw 0 2.5vw;
  //     color: white;
  //     position: absolute;
  //   }

  //   .week1 {
  //     padding: 1vw 3.3vw 0 2.5vw;
  //     color: white;
  //   }

  //   .week2 {
  //     padding: 1vw 3.3vw 0 1.8vw;

  //     position: relative;
  //     color: #fff;
  //     display: flex;
  //     // position: absolute;
  //     margin-left: 40vw;
  //   }

  //   // p{
  //   //   padding: 0.8vw 1.3vw;
  //   //   color:white
  //   // }
  // }

  // .active {
  //   //  background-color: #F3FCFE;
  //   height: 7vw;
  //   color: #57b2f3 !important;
  //   border-bottom: 2px solid #57b2f3;
  //   display: block;
  // }

  // .tab {
  //   display: flex;
  //   justify-content: center;

  //   ul {
  //     margin: 0;
  //     padding: 0;
  //     height: 50px;
  //     display: contents;
  //     // position: absolute;
  //   }

  //   li {
  //     cursor: pointer;
  //     box-sizing: border-box;
  //     list-style: none;
  //     text-align: center;
  //     float: left;
  //     margin: 1vw;
  //     color: #c2c7cd;

  //     // border-bottom: 2px solid linear-gradient(#81dbec,#4570b6 );
  //     // border-image: -webkit-linear-gradient(60deg, #81dbec, #4570b6) 1 2;
  //     width: 17vw;
  //   }
  // }

  .adress {
    ul {
      padding: 0;
      display: flex;
      text-align: center;
      justify-content: center;

      li {
        margin: 2vw 2vw;
        background: #9bd0f5;
        border-radius: 100%;
        height: 80px;
        width: 80px;
        line-height: 80px;
        color: white;
        font-size: 20px;
      }
    }
  }
}
</style>