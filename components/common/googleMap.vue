<template>
  <div class="vedio_box md:font-black main-container">
    <div class="flex justify-center texts">
      <h2>診所地址</h2>
      <img
        src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png"
        alt=""
      />
    </div>
    <div class="adress">
      <ul>
        <li
          @click="addhandleClick(index)"
          v-for="(item, index) in addresslist"
          :class="addcurrentIndex == index ? 'actives' : ''"
          :id="item.id"
          :key="item.id"
        >
          {{ item.title }}
        </li>
        <!-- <li>九龍</li>
        <li>新界</li> -->
      </ul>
    </div>
    <div v-if="addcurrentIndex === 0">
      <!-- <div class="tab flex justify-center" id="tab">
        <ul>
          <li @click='handleClick(index)' :class='currentIndex == index ? "active" : ""' class="tab1" :id="item.id + 3" :key='item.id'
            v-for='(item, index) in list'>
            <p class="tab1" :id="item.id + 3" >{{ item.title }}</p>
          </li>
        </ul>
      </div> -->
      <div class="justify-center addmap">
        <div id="map">
          <div class="map-title">中環</div>
          <!-- <img src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Mapgroup.jpg" width="100%" > -->
          <img
            src="https://static.cmereye.com/imgs/2024/11/515c7f2228ba300b.jpg"
            width="100%"
          />
          <!-- <iframe width="100%" height="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.9848698486852!2d114.18467229461001!3d22.280282274531697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400569abcc067%3A0xe007ab3d4e24f3df!2z5Lic6KeS5Lit5b-D!5e0!3m2!1szh-CN!2sus!4v1655884494712!5m2!1szh-CN!2sus"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
        </div>
        <div>
          <div class="mapcontennt">
            <div class="addressMap">
              <img
                class="addrescoin"
                src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Frame.svg"
                alt=""
              />
              <p class="address1" id="addresd">地址</p>
              <p class="address2">中環畢打街1-3號中建大廈11樓1102室</p>
              <img
                class="addrescoin"
                src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Group 65.svg"
                alt=""
              />
              <p class="address1">營業時間</p>
              <p class="week">
                星期一至星期五<br />
                上午9:30 - 下午6:30<br />星期日及公眾假期休息
              </p>
              <div class="clear"></div>
              <p class="week2">
                星期六<br />
                上午9:30 - 下午5:30
              </p>
            </div>
          </div>
          <div class="button">
            <a
              class="link_more"
              href="https://goo.gl/maps/PvdcUiRiCqSdmHSn9"
              aria-hidden="true"
              target="_blank"
              >Google 地圖</a
            >
            <a
              class="link_more"
              href="https://j.map.baidu.com/e7/6Wx"
              aria-hidden="true"
              target="_blank"
              >百度地圖</a
            >
          </div>
        </div>
      </div>
      <!-- <div class="justify-center addmap">
        <div id="map">
          <div class="map-title">銅鑼灣</div>
            <img src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Mapgroup.jpg" width="100%" >
            <img src="https://static.cmereye.com/static/lkximg/map/materials_銅鑼灣.jpg" width="100%" >
          <iframe width="100%" height="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.9848698486852!2d114.18467229461001!3d22.280282274531697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400569abcc067%3A0xe007ab3d4e24f3df!2z5Lic6KeS5Lit5b-D!5e0!3m2!1szh-CN!2sus!4v1655884494712!5m2!1szh-CN!2sus"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
          <div class="mapcontennt">
            <div class="addressMap">
            <img class="addrescoin" src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Frame.svg" alt="">
            <p class="address1 " id="addresd">地址</p>
            <p class="address2">銅鑼灣軒尼詩道555號東角中心11樓1112室</p>
            <img class="addrescoin" src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Group 65.svg" alt="">
            <p class="address1">營業時間</p>
            <p class="week">星期一至星期五<br> 上午9:30 - 下午6:00<br>星期日及公眾假期休息</p>
            <div class="clear"></div>
            <p class="week2">星期六<br> 上午9:30 - 下午1:00</p>
            </div>
          </div>
          <div class="button">
            <a  class="link_more"  href="https://goo.gl/maps/5ZgB51H2MZErvHNj8" aria-hidden="true" target="_blank">Google 地圖</a>
            <nuxt-link class="link_more" to="">Google 地圖</nuxt-link>
            <a  class="link_more"  href="https://j.map.baidu.com/40/Klt" aria-hidden="true" target="_blank">百度地圖</a>
          </div>
        </div>
      </div> -->
      <!-- <div class="justify-center addmap">
        <div id="map">
          <div class="map-title">灣仔</div>
          <img src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Mapgroup.jpg" width="100%">
          <img
            src="https://static.cmereye.com/static/lkximg/map/materials_灣仔.jpg"
            width="100%"
          />
          <iframe width="100%" height="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.9848698486852!2d114.18467229461001!3d22.280282274531697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400569abcc067%3A0xe007ab3d4e24f3df!2z5Lic6KeS5Lit5b-D!5e0!3m2!1szh-CN!2sus!4v1655884494712!5m2!1szh-CN!2sus"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
          <div class="mapcontennt">
            <div class="addressMap">
              <img
                class="addrescoin"
                src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Frame.svg"
                alt=""
              />
              <p class="address1" id="addresd">地址</p>
              <p class="address2">灣仔莊士敦道197號廣亞大樓地下</p>
              <img
                class="addrescoin"
                src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Group 65.svg"
                alt=""
              />
              <p class="address1">營業時間</p>
              <p class="week">
                星期一至星期五: <br />
                上午9:30 - 下午7:00<br />
                星期日及公眾假期休息
              </p>
              <div class="clear"></div>
              <p class="week2">
                星期六<br />
                上午9:30 - 下午5:00
              </p>
            </div>
          </div>
          <div class="button">
            <a
              class="link_more"
              href=" https://goo.gl/maps/s236tLRsiUEGMPzZ9"
              aria-hidden="true"
              target="_blank"
              >Google 地圖</a
            >
            <nuxt-link class="link_more" to="">Google 地圖</nuxt-link>
            <a
              class="link_more"
              href="https://j.map.baidu.com/6f/uosf"
              aria-hidden="true"
              target="_blank"
              >百度地圖</a
            >
          </div>
        </div>
      </div> -->
    </div>
    <div v-else-if="addcurrentIndex === 1">
      <!-- <div class="justify-center addmap">
        <div id="map">
          <div class="map-title">尖沙咀</div>
          <img
            src="https://static.cmereye.com/static/lkximg/map/materials_尖沙嘴.jpg"
            width="100%"
          />
        </div>
        <div>
          <div class="mapcontennt">
            <div class="addressMap">
              <img
                class="addrescoin"
                src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Frame.svg"
                alt=""
              />
              <p class="address1" id="addresd">地址</p>
              <p class="address2">
                尖沙咀梳士巴利道18-24號K11 ATELIER辦公大樓1906室
              </p>
              <img
                class="addrescoin"
                src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Group 65.svg"
                alt=""
              />
              <p class="address1">營業時間</p>
              <p class="week">
                星期一至星期二: <br />
                上午9:00 - 下午7:00<br />
                星期三至星期五: <br />
                上午9:00 - 下午6:00 <br />星期日及公眾假期休息
              </p>
              <div class="clear"></div>
              <p class="week2">
                星期六<br />
                上午9:00 - 下午5:00
              </p>
            </div>
          </div>
          <div class="button">
            <a
              class="link_more"
              href="https://goo.gl/maps/ubJUKR2QrmmtYqUWA"
              aria-hidden="true"
              target="_blank"
              >Google 地圖</a
            >
            <a
              class="link_more"
              href="https://j.map.baidu.com/8f/37s"
              aria-hidden="true"
              target="_blank"
              >百度地圖</a
            >
          </div>
        </div>
      </div> -->
      <!-- <div class="justify-center addmap">
        <div id="map">
          <div class="map-title">鑽石山</div>
            <img src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Mapgroup.jpg" width="100%" >
            <img src="https://static.cmereye.com/static/lkximg/map/materials_鑽石山.jpg" width="100%" >
          <iframe width="100%" height="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.9848698486852!2d114.18467229461001!3d22.280282274531697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400569abcc067%3A0xe007ab3d4e24f3df!2z5Lic6KeS5Lit5b-D!5e0!3m2!1szh-CN!2sus!4v1655884494712!5m2!1szh-CN!2sus"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
          <div class="mapcontennt">
            <div class="addressMap">
            <img class="addrescoin" src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Frame.svg" alt="">
            <p class="address1 " id="addresd">地址</p>
            <p class="address2">鑽石山龍蟠街3號荷里活廣場一樓116A舖</p>
            <img class="addrescoin" src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Group 65.svg" alt="">
            <p class="address1">營業時間</p>
            <p class="week">星期一至星期六:<br> 上午10:00 - 下午7:00<br>星期日及公眾假期休息</p>
            <div class="clear"></div>
            <p class="week2">星期日及公眾假期休息</p>
            </div>
          </div>
          <div class="button">
            <a  class="link_more"  href="https://goo.gl/maps/1zu6o9DuUuePjVb48" aria-hidden="true" target="_blank">Google 地圖</a>
            <nuxt-link class="link_more" to="">Google 地圖</nuxt-link>
            <a  class="link_more"  href="https://j.map.baidu.com/49/Zbdc" aria-hidden="true" target="_blank">百度地圖</a>
          </div>
        </div>
      </div> -->
      <div class="justify-center addmap">
        <div id="map">
          <div class="map-title">觀塘</div>
          <!-- <img src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Mapgroup.jpg" width="100%"> -->
          <img
            src="https://static.cmereye.com/static/lkximg/map/materials_觀塘.jpg"
            width="100%"
          />
          <!-- <iframe width="100%" height="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.9848698486852!2d114.18467229461001!3d22.280282274531697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400569abcc067%3A0xe007ab3d4e24f3df!2z5Lic6KeS5Lit5b-D!5e0!3m2!1szh-CN!2sus!4v1655884494712!5m2!1szh-CN!2sus"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
        </div>
        <div>
          <div class="mapcontennt">
            <div class="addressMap">
              <img
                class="addrescoin"
                src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Frame.svg"
                alt=""
              />
              <p class="address1" id="addresd">地址</p>
              <p class="address2">觀塘開源道79號鱷魚恤中心16樓1601室</p>
              <img
                class="addrescoin"
                src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Group 65.svg"
                alt=""
              />
              <p class="address1">營業時間</p>
              <p class="week">
                星期一至星期五: <br />上午9:30 - 下午6:30 <br />
                星期六: 上午9:30 - 下午5:30<br />星期日及公眾假期休息
              </p>
              <div class="clear"></div>
              <!-- <p class="week2">星期日及公眾假期休息</p> -->
            </div>
          </div>
          <div class="button">
            <a
              class="link_more"
              href="https://goo.gl/maps/SGs1wJ5upMoEqJ3k7"
              aria-hidden="true"
              target="_blank"
              >Google 地圖</a
            >
            <a
              class="link_more"
              href="https://j.map.baidu.com/f2/Vgzc"
              aria-hidden="true"
              target="_blank"
              >百度地圖</a
            >
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="addcurrentIndex === 2">
      <!-- <div class="tab flex justify-center" id="tab">
        <ul>
          <li @click='handleClick(index)' class="active tab3" :id="item.id + 9"  :key='item.id'
            v-for='(item, index) in list3'>
            <p  :id="item.id + 9" class="tab3">{{ item.title }}</p>
          </li>
        </ul>
      </div> -->
      <div class="justify-center addmap">
        <div id="map">
          <div class="map-title">沙田</div>
          <!-- <img src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Mapgroup.jpg" width="100%" > -->
          <img
            src="https://static.cmereye.com/static/lkximg/map/materials_沙田.jpg"
            width="100%"
          />
          <!-- <iframe width="100%" height="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.9848698486852!2d114.18467229461001!3d22.280282274531697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400569abcc067%3A0xe007ab3d4e24f3df!2z5Lic6KeS5Lit5b-D!5e0!3m2!1szh-CN!2sus!4v1655884494712!5m2!1szh-CN!2sus"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
        </div>
        <div>
          <div class="mapcontennt">
            <div class="addressMap">
              <img
                class="addrescoin"
                src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Frame.svg"
                alt=""
              />
              <p class="address1" id="addresd">地址</p>
              <p class="address2">沙田正街11-17號偉華中心2樓1C-1F號舖</p>
              <img
                class="addrescoin"
                src="https://static.cmereye.com/static/lkximg/image/about-me/mapstyle/Group 65.svg"
                alt=""
              />
              <p class="address1">營業時間</p>
              <p class="week">
                星期一至星期五: <br />
                上午9:30 - 下午6:30<br />星期日及公眾假期休息
              </p>
              <div class="clear"></div>
              <p class="week2">
                星期六<br />
                上午9:30 - 下午5:30
              </p>
            </div>
          </div>
          <div class="button">
            <a
              class="link_more"
              href="https://goo.gl/maps/SrWKtmDL1Ygixk2u9"
              aria-hidden="true"
              target="_blank"
              >Google 地圖</a
            >
            <a
              class="link_more"
              href="https://j.map.baidu.com/8f/jisf"
              aria-hidden="true"
              target="_blank"
              >百度地圖</a
            >
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
    };
  },
  created() {},

  methods: {
    // initMap() {
    //   var googleMap = new google.maps.Map(document.getElementById("map"), {
    //       center: {lat: 40, lng: 116},	//地图初始化中心点
    //       mapTypeId: google.maps.MapTypeId.ROADMAP,//地图类型（地图、地形图、卫星图 三种可选）
    //       disableDefaultUI: false,	//是否彻底停用默认用户界面
    //       zoomControl: false,			//是否显示右下角放大、缩小按钮
    //       mapTypeControl: false,		//是否显示左上角地图类型选择框
    //       scaleControl: false,		//是否右下角显示地图比例尺
    //       zoom: 13				   //地图缩放级别（放大、缩小也是修改此选项）
    //   });
    // };

    handleClick(index) {
      // console.log(index);
      this.currentIndex = index;
    },
    addhandleClick(index) {
      console.log(index);
      this.addcurrentIndex = index;
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
@media only screen and (min-width: 760px) {
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

  .addmap {
    display: flex;
    justify-content: center;
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
    height: 306px;
    width: 500px;
    border: 1;
    background: #8cd1f8;
    border-radius: 30px 30px 30px 30px;
    margin-left: 87px;
    margin-top: 10px;
    position: relative;
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
@media only screen and (max-width: 760px) {
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
    .addrescoin {
      padding: 1vw 1.3vw 0 1.3vw;
      position: absolute;
      height: 6vw;
      margin-bottom: 0.5vw;
      margin: 2vw 0 0 2vw;
    }
    .addressMap {
      padding: 10px;
    }
    .address1 {
      padding: 0.8vw 1.3vw 0 7.8vw;
      color: white;
      margin-bottom: 0.5vw;
      margin: 2vw 0 0 2vw;
    }

    .address2 {
      padding: 0 1.3vw 0 1.3vw;
      color: white;
      margin-bottom: 0.5vw;
      margin: 2vw 0 0 2vw;
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
      padding: 1vw 3.3vw 0 2.5vw;
      color: white;
      position: absolute;
    }
    .week1 {
      padding: 1vw 3.3vw 0 2.5vw;
      color: white;
    }
    .week2 {
      padding: 1vw 3.3vw 0 1.8vw;

      position: relative;
      color: #fff;
      display: flex;
      // position: absolute;
      margin-left: 40vw;
    }

    // p{
    //   padding: 0.8vw 1.3vw;
    //   color:white
    // }
  }

  .active {
    //  background-color: #F3FCFE;
    height: 7vw;
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
      width: 17vw;
    }
  }

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