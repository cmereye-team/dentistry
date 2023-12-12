<template>
  <div class="main-container mb_attention">
    <div class="attention">
      <div class="why_significance">洗牙後要注意什麼？</div>
      <div>
        <div>
          <img src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Group-12125.4y1j4bj5n7c0.png"
            alt="注意清潔牙縫">
          <div>注意清潔牙縫</div>
        </div>
        <div>
          <img src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Group-1126.4j9fje953hu0.png"
            alt="避免過度清潔口腔">
          <div>避免過度清潔口腔</div>
        </div>
        <div>
          <img src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Group-1058.1nja6fe7qacg.png"
            alt="忌吃冷熱刺激食物">
          <div>忌吃冷熱刺激食物</div>
        </div>
        <div>
          <img src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Group-1127.4z2jxfopbkk0.png"
            alt="避免吸煙和飲酒">
          <div>避免吸煙和飲酒</div>
        </div>
        <div>
          <img src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Group-1128.3zlvalznbca0.png"
            alt="定期覆診檢查">
          <div>定期覆診檢查</div>
        </div>
      </div>
    </div>
    <div class="bg-white py-5 pb-0 py-xs-2 ">
      <div class="why_significance">定期洗牙為何重要？</div>
      <div class="coll-box">
        <el-collapse v-model="activeNames" @change="handleChange" accordion>
          <el-collapse-item name="1">
            <template slot="title">
              <div class="contents">
                <i :class="judgeActive('1') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
                <div :class="judgeActive('1') !== -1 ? 'p2' : 'p1'">為甚麼會出現牙石？</div>
              </div>
            </template>
            <div class="discon">
              <span>
                <ul>
                  <li>
                    口腔的細菌、食物殘渣及口水會在牙齒表面、牙縫及牙齦間形成牙菌膜。若牙菌膜未能仔細清除，便會積聚鈣成牙石。因此建議至少每半年洗牙一次，保持口腔衛生。
                  </li>
                </ul>
              </span>
            </div>
          </el-collapse-item>
          <el-collapse-item name="2">
            <template slot="title">
              <div class="contents">
                <i :class="judgeActive('2') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
                <div :class="judgeActive('2') !== -1 ? 'p2' : 'p1'">牙齦發炎可以洗牙嗎？</div>
              </div>
            </template>
            <div class="discon">
              <span>
                <ul>
                  <li>
                    在洗牙後幾天內感到輕微酸痛，甚至有牙齦出血的情況，是由於牙齦在洗牙前出現發炎情況，因此在清除口中細菌時，會引起牙齦紅腫及充血。只要繼續注意口腔衛生，口腔不適及牙齦出血的現象就會逐漸消失，牙齦亦會回復健康。
                  </li>
                </ul>
              </span>
            </div>
          </el-collapse-item>
          <el-collapse-item name="3">
            <template slot="title">
              <div class="contents">
                <i :class="judgeActive('3') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
                <div :class="judgeActive('3') !== -1 ? 'p2' : 'p1'">洗牙會傷害琺瑯質？</div>
              </div>
            </template>
            <div class="discon">
              <span>
                <ul>
                  <li>
                    口腔的細菌、食物殘渣及口水會在牙齒表面、牙縫及牙齦間形成牙菌膜。若牙菌膜未能仔細清除，便會積聚鈣成牙石。因此建議至少每半年洗牙一次，保持口腔衛生。
                  </li>
                </ul>
              </span>
            </div>
          </el-collapse-item>
          <el-collapse-item name="4">
            <template slot="title">
              <div class="contents">
                <i :class="judgeActive('4') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
                <div :class="judgeActive('4') !== -1 ? 'p2' : 'p1'">洗牙後會令牙齒變鬆？</div>
              </div>
            </template>
            <div class="discon">
              <span>
                <ul>
                  <li>
                    口腔的細菌、食物殘渣及口水會在牙齒表面、牙縫及牙齦間形成牙菌膜。若牙菌膜未能仔細清除，便會積聚鈣成牙石。因此建議至少每半年洗牙一次，保持口腔衛生。
                  </li>
                </ul>
              </span>
            </div>
          </el-collapse-item>
          <el-collapse-item name="5">
            <template slot="title">
              <div class="contents">
                <i :class="judgeActive('5') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
                <div :class="judgeActive('5') !== -1 ? 'p2' : 'p1'">洗牙可以令牙齒變白？</div>
              </div>
            </template>
            <div class="discon">
              <span>
                <ul>
                  <li>
                    口腔的細菌、食物殘渣及口水會在牙齒表面、牙縫及牙齦間形成牙菌膜。若牙菌膜未能仔細清除，便會積聚鈣成牙石。因此建議至少每半年洗牙一次，保持口腔衛生。
                  </li>
                </ul>
              </span>
            </div>
          </el-collapse-item>
          <el-collapse-item name="6">
            <template slot="title">
              <div class="contents">
                <i :class="judgeActive('6') !== -1 ? 'downArrow2' : 'downArrow1'"></i>
                <div :class="judgeActive('6') !== -1 ? 'p2' : 'p1'">為何洗牙後會出現牙齒敏感或牙縫變大的情況？</div>
              </div>
            </template>
            <div class="discon">
              <span>
                <ul>
                  <li>
                    口腔的細菌、食物殘渣及口水會在牙齒表面、牙縫及牙齦間形成牙菌膜。若牙菌膜未能仔細清除，便會積聚鈣成牙石。因此建議至少每半年洗牙一次，保持口腔衛生。
                  </li>
                </ul>
              </span>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
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
@media screen and (min-width: 768px) {
  ::v-deep .el-collapse-item__header.is-active {
    background: transparent;
  }

  .attention {
    &>div:nth-child(2) {
      width: 940px;
      display: flex;
      flex-wrap: wrap;
      margin: 56px auto 90px;

      &>div {
        // flex: 1;
        width: calc(100% / 3);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;

        &>div {
          margin: 7px;
          color: #79828D;
          text-align: center;
          font-family: Noto Sans TC;
          font-size: 25px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%;
          text-wrap: nowrap;
          /* 40px */
        }
      }

      &>div:nth-child(4) {
        margin-left: 15%;
      }
    }
  }

  .why_significance {
    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2.5px;
    position: relative;
    padding-bottom: 15px;
  }

  .why_significance::after {
    content: '';
    background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Vector.5u4eydocd6c0.png');
    display: inline-block;
    width: 52px;
    height: 10px;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }

  .contents {
    &>i {
      margin-right: 20px;
    }

    &>div {
      color: #79828D;
      font-family: Noto Sans;
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 2.1px;
    }
  }

  .discon {
    margin: 0 !important;
    li {
      margin-left: 60px;
    }
    ul {
      margin-bottom: 0 !important;
    }
  }
  ::v-deep .el-collapse-item__content{
    padding-bottom: 20px !important;
  }
}

@media only screen and (max-width: 767px) {
  ::v-deep .el-collapse-item__header.is-active {
    background: transparent !important;
  }
  .attention {
    &>div:nth-child(2) {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.25rem;
      margin-top: 3.75rem;
      &>div{
        &>div:nth-child(2) {
          margin-top: 0.5rem;
          color: #79828D;
          text-align: center;
          font-family: Noto Sans TC;
          font-size: 1rem;
          font-style: normal;
          font-weight: 500;
          line-height: 160%; /* 25.6px */
        }
      }
    }
  }
  .mb_attention {
    padding: 0 1.25rem;
    margin-bottom: 3.4375rem;
  }

  .why_significance {
    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: .1563rem;
    padding-bottom: .9375rem;
    position: relative;
  }

  .why_significance::after {
    content: '';
    background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Vector.5u4eydocd6c0.png');
    display: inline-block;
    width: 3.25rem;
    height: 0.625rem;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }

  .contents p {
    color: #79828D;
    font-size: 1rem;
    line-height: 1.5625rem;
  }

  ::v-deep .el-collapse-item__arrow {
    display: none;
  }

  ::v-deep .el-collapse-item__header {
    font-weight: 400;
    font-size: 1.1875rem;
    height: 5.125rem;
    padding: 0 2vw;
    justify-content: space-between;
  }

  ::v-deep .el-collapse-item__header.is-active {
    background-color: #ECF7FC;

  }

  ::v-deep .el-collapse-item__content {
    font-weight: 400;
    font-size: 1.1875rem;
    padding-left: 2vw;
    // background-color: #DFDFDF;
  }
  ::v-deep .el-collapse {
    &>div:last-child {
      .p1,.p2 {
        line-height: 1.2;
        max-width: 83%;
      }
    }
  }
  .coll-box {
    padding: 3vw;
    width: 100%;
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
    // margin: 1vw 0 0 0;
    display: flex;
    justify-content: flex-end;

    // ul {
    //   padding-left: 0.2vw;
    // }

    span {
      color: #9BA5B1;
      font-size: 1rem;
      width: 84%;
    }
  }

  .title1 {
    display: inline-block;
    width: 2.5rem;
    height: 1.5625rem;
    // background-image: url(~@/asset/image/implant/Q.png);
    // background-repeat: no-repeat;
  }

  .title2 {
    display: inline-block;
    width: 40px;
    height: 25px;
    background-image: url(~@/asset/image/implant/A.png);
    background-repeat: no-repeat;
    color: #fff;
  }

  .downArrow1 {
    display: inline-block;
    width: 2.25rem;
    height: 2.25rem;
    transition: all .5s;
    background-size: 100% 100%;
    background-image: url(https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Group-1018+.55g66fshwgc0.png);
    margin-right: 1.25rem;
  }
  .downArrow2 {
    display: inline-block;
    width: 2.25rem;
    height: 2.25rem;
    transition: all .5s;
    background-size: 100% 100%;
    background-image: url(https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Group-1018.77gibtpj4xw0.png);
    margin-right: 1.25rem;
  }
}

@media only screen and (min-width: 767px) and (max-width: 4096px) {
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
    background: transparent;
  }

  ::v-deep .el-collapse-item__content {
    font-weight: 400;
    font-size: 19px;
    padding-left: 2vw;
    // background-color: #DFDFDF;
  }

  .coll-box {
    margin: 3vw auto;
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
      width: fit-content;
    }
  }

  .title1 {
    display: inline-block;
    width: 40px;
    height: 25px;
    background-image: url(~@/asset/image/implant/Q.png);
    background-repeat: no-repeat;
  }

  .title2 {
    display: inline-block;
    width: 40px;
    height: 25px;
    background-image: url(~@/asset/image/implant/A.png);
    background-repeat: no-repeat;
    color: #fff;
  }

  .downArrow1 {
    display: inline-block;
    width: 44px;
    height: 44px;
    transition: all .5s;
    background-image: url(https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Group-1018+.55g66fshwgc0.png);
  }

  .downArrow2 {
    display: inline-block;
    width: 44px;
    height: 44px;
    transition: all .3s;
    background-image: url(https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Group-1018.77gibtpj4xw0.png);
    // transform: rotate(-180deg);
  }
}</style>
