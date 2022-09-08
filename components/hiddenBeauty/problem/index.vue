<template>
  <div class="bg-white py-5 pb-0 py-xs-2 main-container">
    <div class="flex justify-center texts">
      <h2>Invisalign 隱適美常見問題</h2>
      <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="">
    </div>
    <div class="coll-box">
      <el-collapse v-model="activeNames" @change="handleChange" accordion>
        <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt="">  :class="judgeActive('1')!==-1? 'backgroud1':'backgroud2'"-->
        <el-collapse-item name="1">
          <template slot="title">
            <div class="contents">
              <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('1') !== -1 ? 'p2' : 'p1'">整個隱適美療程需時多久?</p>
            </div>
            <i :class="judgeActive('1') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>
              <ul>
                <li>療程時間需視乎你的矯齒複雜程度，平均需1年至1年半，複雜個案則可能需2年或以上，而最快約3個月左右可見矯齒效果。</li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <div class="contents">
              <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('2') !== -1 ? 'p2' : 'p1'">隱適美療程有年齡限制嗎?</p>
            </div>
            <i :class="judgeActive('2') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>
              <ul>
                <li>隱適美療程並沒有特別的年齡限制，只要有足夠牙齒數量及經牙醫評估你的狀況合適就可以。</li>
                <li>兒童為最理想的矯齒黃金期，由於兒童的骨質較軟，令移動速度及效果較好。家長可考慮於小</li>
                <li>童7歲左右的換牙階段，找牙醫作檢查及評估，及早針對牙冠及早期矯正需要。</li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <div class="contents">
              <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('3') !== -1 ? 'p2' : 'p1'">戴上隱適美牙箍會有痛楚嗎？</p>
            </div>
            <i :class="judgeActive('3') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>

              <ul>
                <li>隱適美牙箍以漸進緩和的矯正力道移動你的牙齒，相比其他矯正療程引起的痛楚較低。</li>
                <li>而某些使用者會於剛戴上新牙箍數天內或會感到緊繃的感覺，此為牙齒移動的跡象，不適感亦會於數天後消失。</li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
         <el-collapse-item name="4">
          <template slot="title">
            <div class="contents">
              <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('4') !== -1 ? 'p2' : 'p1'">隱適美的全方位矯齒療程同副線隱適美‧易（Invisalign Go）有什麼分別？</p>
            </div>
            <i :class="judgeActive('4') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>
              <ul>
                <li>隱適美的全方位矯齒療程可解決輕微至複雜的矯齒個案，包括開咬、深咬、錯咬、倒及、哨牙等較複雜的牙齒問題。</li>
                <li>隱適美‧易（Invisalign Go）矯齒療程主要處理較輕微至中度的牙齒問題，適合想於較短時間內改善牙縫、牙齒擠擁等牙齒排列問題，價格亦較為優惠。</li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template slot="title">
            <div class="contents">
              <!-- <img src="https://static.cmereye.com/static/lkximg/image/free/Q.png" alt=""> -->
              <i class="title1"></i>
              <p :class="judgeActive('5') !== -1 ? 'p2' : 'p1'">對小朋友而言，隱適美兒童專線 (Invisalign First) 矯齒療程安全嗎？</p>
            </div>
            <i :class="judgeActive('5') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
          </template>
          <div class="discon">
            <i class="title2"></i>
            <span>
              <ul>
                <li>Invisalign First 矯齒牙箍採用已獲專利的SmartTrack材料，並且得到美國FDA認證其安全性。</li>
                <li>Invisalign First更根據兒童的短小牙齒進行優化，使用相應附件，提供穩定力度。牙箍亦可加上藍色依從性顯示點，方便檢查及監察牙箍佩戴時間，達致最佳療程效果。</li>
              </ul>
            </span>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    //判断是否打开
    judgeActive(data) {
      console.log(data);
      return this.activeNames.indexOf(data)
    }
  }
}
</script>
<style lang="scss" scoped>
p {
  margin-bottom: 0;
}

.texts {
  text-align: center;

  h2 {
    font-weight: 500;
    color: #79828D;
    margin-bottom: 0vw;
  }

  image {
    text-align: center;
  }
}

@media only screen and (max-width: 768px) {
  ::v-deep .el-collapse-item__arrow{
  display: none;
}
 ::v-deep .el-collapse-item__header {
  font-weight: 400;
  font-size: 19px;
  height: 82px;
  padding: 0 2vw;
  justify-content: space-between;
  line-height: 24px;
}
::v-deep .el-collapse-item__header.is-active{
  background-color: #ECF7FC;

}

 ::v-deep .el-collapse-item__content{
  font-weight: 400;
  font-size: 19px;
  padding-left: 2vw;
  // background-color: #DFDFDF;
}
.coll-box{
  padding: 3vw;
  width: 100%;
}
.contents{
  display: flex;
  align-items: center;
  width: fit-content;
  p{
    color: #79828D;
         width: 87%;
        text-align: -webkit-left;
  }
  span{
    color: #9BA5B1;

  }
}
.discon{
  margin: 1vw 0 0 0;
  display: flex;
  ul{
    padding-left: 0.2vw;
  }
   span{
    color: #9BA5B1;
    font-size: 16px;
    width: 84%;
  }
}
.title1{
  display: inline-block;
  width: 40px;
  height: 25px;
 background-image: url(https://static.cmereye.com/static/lkximg/image/implant/Q.png) ;
 background-repeat: no-repeat;
}
.title2{
  display: inline-block;
  width: 40px;
  height: 25px;
  background-image: url(https://static.cmereye.com/static/lkximg/image/implant/A.png);
  background-repeat: no-repeat;
  color: #fff;
}
.downArrow1{
  display: inline-block;
  width: 12px;
  height: 12px;
  background-image: url(https://static.cmereye.com/static/lkximg/image/implant/+.png);
}
}

@media only screen and (min-width: 768px) and (max-width: 4096px) {
  ::v-deep .el-collapse-item__arrow {
    display: none;
  }

  ::v-deep .el-collapse-item__header {
    font-weight: 400;
    font-size: 19px;
    height: 82px;
    padding: 0 2vw;
    justify-content: space-between;
  }

  ::v-deep .el-collapse-item__header.is-active {
    background-color: #ECF7FC;

  }

  ::v-deep .el-collapse-item__content {
    font-weight: 400;
    font-size: 19px;
    padding-left: 2vw;
    // background-color: #DFDFDF;
  }

  .coll-box {
    margin: 30px auto;
    width: 60%;
  }

  .contents {
    display: flex;
    align-items: center;

    p {
      color: #79828D;
     
    }

    span {
      color: #9BA5B1;

    }
  }

  .discon {
    margin: 1vw 0 0 0;
    display: flex;

    ul {
      padding-left: 0.2vw;
    }

    span {
      color: #9BA5B1;
      font-size: 16px;

    }
  }

  .title1 {
    display: inline-block;
    width: 40px;
    height: 25px;
    background-image: url(https://static.cmereye.com/static/lkximg/image/implant/Q.png);
    background-repeat: no-repeat;
  }

  .title2 {
    display: inline-block;
    width: 40px;
    height: 25px;
    background-image: url(https://static.cmereye.com/static/lkximg/image/implant/A.png);
    background-repeat: no-repeat;
    color: #fff;
  }

  .downArrow1 {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-image: url(https://static.cmereye.com/static/lkximg/image/implant/+.png);
  }

  .downArrow2 {
    // display: inline-block;
    // width: 12px;
    // height: 12px;
    // background-image: url(https://static.cmereye.com/static/lkximg/image/implant/+.png);
    // transform: rotate(-180deg);
  }


}
</style>
<style lang="scss">
@media only screen and (max-width: 768px) {
.coll-box .discon{
  margin-top: 5vw;
}
}

</style>