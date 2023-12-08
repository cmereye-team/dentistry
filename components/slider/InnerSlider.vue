<template>
  <div class="md:font-black">
    <div class="inner_slider">
      <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
        <div class="swiper-wrapper" :id="isCmerdental == true ? 'explain' : ''">
          <div class="swiper-slide w-full" v-for="(imgItem, index) in SliderImgList" :key="index">
            <div v-if="imgItem.type === 1">
              <video :src="imgItem.url" class="myvideo" controls ref="sliderVideos"></video>
              <div v-show="videoPauseShow" class="prism-big-play-btn" @click="videoPlay()">
                <div class="outter"></div>
              </div>
            </div>
            <div v-else-if="imgItem.type === 2">
              <a :href="imgItem.link">
                <img :class="isCmerdental == true ? `cerdental${index + 1}` : ''" class="w-full img_item" :src="imgItem.url"
                  :srcset="imgItem.srcset" /></a>
            </div>
          </div>
        </div>
        <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
        <!-- :style="{opacity:showSwitchBtn==true?'1':'0'}" -->
        <div class="bg-white flex items-center justify-between bt_box" v-show="showSwitchBtn">
          <div class="swiper-button-prev">
            <i class="fa fa-angle-left" aria-hidden="true" style="color: #f09038"></i>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next">
            <i class="fa fa-angle-right" aria-hidden="true" style="color: #f09038"></i>
          </div>
        </div>
      </div>
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
    isCmerdental: {
      type: String,
      default: false,
    },
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
          type: "fraction",
        },

        navigation: {
          nextEl: ".swiper-button-next", //下一页dom节点
          prevEl: ".swiper-button-prev", //前一页dom节点
        },
        on: {
          slideChange() {
            // console.log('onSlideChangeEnd', this);
          },
          tap() {
            // console.log('onTap', this);
          },
        },
      },
      videoPauseShow: true,
      showSwitchBtn: true,
    };
  },
  created() {
    //直接使用this.$refs获取DOM元素
    // console.log(this.$refs.btn); // undefined
    this.$nextTick(() => {
      // console.log(this.$refs.sliderVideos);

      // console.log(this.spareId, "-------------");
      console.log(this);

      // let sliderVideo = echarts.init(this.$refs.sliderVideos[index]);

      // console.log(sliderVideo, "-------------");
    });
  },
  methods: {
    videoPlay() {
      //点击盒子让播放按钮隐藏
      this.videoPauseShow = false;
      this.showSwitchBtn = false;
      //触发video的播放事件
      document.querySelectorAll(".myvideo").forEach((item) => item.play());
      // document.querySelector('.myvideo').play();
    },
  },
  mounted() {
    document.querySelectorAll(".myvideo").forEach((item) =>
      item.addEventListener("play", () => {
        this.videoPauseShow = false;
        this.showSwitchBtn = false;
      })
    );

    // this.$refs.btn[0].addEventListener("play", () => {
    //   this.videoPauseShow = false;
    //   this.showSwitchBtn = false;
    // });

    document.querySelectorAll(".myvideo").forEach((item) =>
      item.addEventListener("pause", () => {
        this.videoPauseShow = true;
        this.showSwitchBtn = true;
      })
    );

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
.prism-big-play-btn {
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
}

.outter {
  border: 7px solid rgba(255, 255, 255, 0.51);
  width: 64px;
  height: 64px;
  border-radius: 100%;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
}

.outter:hover {
  content: "";
  width: 80px;
  height: 80px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -40px;
  margin-top: -40px;
  border-radius: 50%;
  /* //a1为经过@keyframes 规则建立的动画名称，可本身定义web
            // a2 为动画时常 ，例如：1s   2s   可自行规定浏览器
            // a3 为css自带的动画效果，有以下几个：
            // 类名称+持续时间+（变化方式,延迟时间，重复次数（infinite循环），重复方式，开始结束的状态） */
  animation: warn 1s ease-out 0s infinite;
}

/* // 在warn方法里,用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。
          // 0% 是动画的开始，100% 是动画的完成，建议使用百分比，会更加详细： */
@keyframes warn {
  0% {
    /* // transform: scale表示缩放，值表示倍数，可以指定X/Y轴 */
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
}

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next,
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background: none;
}

.swiper-pagination,
.swiper-button-prev,
.swiper-button-next {
  position: static;
}

.swiper-button-prev,
.swiper-button-next {
  width: auto;
  height: auto;
  margin: 0;
}

.bt_box {
  position: absolute;
  width: 13vw;
  bottom: 0;
  z-index: 11;
  height: 2.5vw;
  padding: 0 1vw;
  border-radius: 0 10px 0 0;
  display: none;
  align-items: center;
}

@media only screen and (min-width: 768px) {

}

@media only screen and (max-width: 768px) {

  .bt_box {
    width: 30vw;
    height: 8.5vw;
    padding: 0 3vw;
  }

  .swiper-button-prev,
  .swiper-button-next {
    font-size: 14px;
  }
}

/* //全屏按钮 */
video::-webkit-media-controls-fullscreen-button {
  display: none;
}

/* //播放按钮 */
video::-webkit-media-controls-play-button {
  display: none;
}

/* //进度条 */
video::-webkit-media-controls-timeline {
  /* display: none; */
}

/* //观看的当前时间 */
video::-webkit-media-controls-current-time-display {
  /* display: none;             */
}

/* //剩余时间 */
video::-webkit-media-controls-time-remaining-display {
  /* display: none;             */
}

/* //音量按钮 */
video::-webkit-media-controls-mute-button {
  /* display: none;             */
}

video::-webkit-media-controls-toggle-closed-captions-button {
  /* display: none;             */
}

/* //音量的控制条 */
video::-webkit-media-controls-volume-slider {
  /* display: none;             */
}

/* //所有控件 */
video::-webkit-media-controls-enclosure {
  /* display: none; */
}
</style>
