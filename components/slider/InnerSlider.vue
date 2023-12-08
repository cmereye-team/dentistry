<template>
  <div>
    <div class="inner_slider">
      <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
        <div class="swiper-wrapper" :id="isCmerdental == true ? 'explain' : ''">
          <div class="swiper-slide w-full" v-for="(imgItem, index) in SliderImgList" :key="index">
            <!-- <div v-if="imgItem.type === 1">
              <video :src="imgItem.url" class="myvideo" controls ref="sliderVideos"></video>
              <div v-show="videoPauseShow" class="prism-big-play-btn" @click="videoPlay()">
                <div class="outter"></div>
              </div>
            </div> -->
            <div v-if="imgItem.type === 2">
              <a :href="imgItem.link">
                <img class="w-full img_item" :src="imgItem.url" :srcset="imgItem.srcset" /></a>
            </div>
          </div>
        </div>
        <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
        <!-- :style="{opacity:showSwitchBtn==true?'1':'0'}" -->
        <!-- <div class="bg-white flex items-center justify-between bt_box" v-show="showSwitchBtn">
          <div class="swiper-button-prev">
            <i class="fa fa-angle-left" aria-hidden="true" style="color: #f09038"></i>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next">
            <i class="fa fa-angle-right" aria-hidden="true" style="color: #f09038"></i>
          </div>
        </div> -->

        <!-- <div>
          <div class="swiper-button-prev">
          </div>
          <div class="swiper-button-next">
          </div>
        </div> -->
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    SliderImgList: {
      type: Array,
      default: function () {
        return [];
      },
    },
    // isCmerdental: {
    //   type: String,
    //   default: false,
    // },
    // spareId: {
    //   type: Number,
    //   default: function () {
    //     return [
    //     ]
    //   }
    // },
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        centeredSlides: true,
        spaceBetween: 50,
        slidesPerView: "1",
        pagination: {
          el: ".swiper-pagination",
          clickable :true,
          // type: "fraction",
        },

        // navigation: {
        //   nextEl: ".swiper-button-next", //下一页dom节点
        //   prevEl: ".swiper-button-prev", //前一页dom节点
        // },
        // on: {
          // slideChange() {
            // console.log('onSlideChangeEnd', this);
          // },
          // tap() {
            // console.log('onTap', this);
          // },
        // },
      },
      // videoPauseShow: true,
      // showSwitchBtn: true,
    };
  },
  created() {
    //直接使用this.$refs获取DOM元素
    // console.log(this.$refs.btn); // undefined
    // this.$nextTick(() => {
      // console.log(this.$refs.sliderVideos);

      // console.log(this.spareId, "-------------");
      // console.log(this);

      // let sliderVideo = echarts.init(this.$refs.sliderVideos[index]);

      // console.log(sliderVideo, "-------------");
    // });
  },
  methods: {
    // videoPlay() {
    //   //点击盒子让播放按钮隐藏
    //   this.videoPauseShow = false;
    //   this.showSwitchBtn = false;
    //   //触发video的播放事件
    //   document.querySelectorAll(".myvideo").forEach((item) => item.play());
    //   // document.querySelector('.myvideo').play();
    // },
  },
  mounted() {
    // document.querySelectorAll(".myvideo").forEach((item) =>
    //   item.addEventListener("play", () => {
    //     this.videoPauseShow = false;
    //     this.showSwitchBtn = false;
    //   })
    // );

    // this.$refs.btn[0].addEventListener("play", () => {
    //   this.videoPauseShow = false;
    //   this.showSwitchBtn = false;
    // });

    // document.querySelectorAll(".myvideo").forEach((item) =>
    //   item.addEventListener("pause", () => {
    //     this.videoPauseShow = true;
    //     this.showSwitchBtn = true;
    //   })
    // );

    // this.$refs.btn[0].addEventListener("pause", () => {
    //   this.videoPauseShow = true;
    //   this.showSwitchBtn = true;
    // });
  },
};
</script>
<style scoped>
.img_item {
  width: 100%;
  height: 281px;
}

/* .prism-big-play-btn {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 48%;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  background: url("https://static.cmereye.com/imgs/cmermedical/images/common/videobt.png") no-repeat;
  background-size: contain;
  cursor: pointer;
} */

/* .outter {
  border: 7px solid rgba(255, 255, 255, 0.51);
  width: 64px;
  height: 64px;
  border-radius: 100%;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
} */

/* .outter:hover { */
/* content: ""; */
/* width: 80px; */
/* height: 80px; */
/* position: absolute; */
/* left: 50%; */
/* top: 50%; */
/* margin-left: -40px; */
/* margin-top: -40px; */
/* border-radius: 50%; */
/* //a1为经过@keyframes 规则建立的动画名称，可本身定义web
            // a2 为动画时常 ，例如：1s   2s   可自行规定浏览器
            // a3 为css自带的动画效果，有以下几个：
            // 类名称+持续时间+（变化方式,延迟时间，重复次数（infinite循环），重复方式，开始结束的状态） */
/* animation: warn 1s ease-out 0s infinite; */
/* } */

/* // 在warn方法里,用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。
          // 0% 是动画的开始，100% 是动画的完成，建议使用百分比，会更加详细： */
/* @keyframes warn {
  0% {
    // transform: scale表示缩放，值表示倍数，可以指定X/Y轴
    transform: scale(0.5);
    opacity: 1;
  }

  30% {
    opacity: 1;
  }

  100% {
    transform: scale(1.4);
    opacity: 0;
  }
} */


.swiper-pagination {
  position: absolute;
  width: 100%;
  left: 0;
  transform: translate(15%, 0);
  bottom: -12%;
  display: flex;
    justify-content: center;
    align-items: center;
}



/* .bt_box {
  position: absolute;
  width: 13vw;
  bottom: 0;
  z-index: 11;
  height: 2.5vw;
  padding: 0 1vw;
  border-radius: 0 10px 0 0;
  display: flex;
  align-items: center;
} */

@media only screen and (min-width: 768px) {
  ::v-deep .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #57B2F3;
    margin: 0 5px
  }
  ::v-deep .swiper-pagination-bullet-active {
    width: 15px;
    height: 15px;
  }
}

@media only screen and (max-width: 768px) {
  /* 
  .bt_box {
    width: 30vw;
    height: 8.5vw;
    padding: 0 3vw;
  }

  .swiper-button-prev,
  .swiper-button-next {
    font-size: 14px;
  } */
}
</style>
