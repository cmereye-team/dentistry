<template>
  <div class="interval">
    <div class="this-background"></div>
    <div class="content main-container">
      <div>
        <div v-html="layoutPageText.text1" :style="{ maxWidth: maxWidth.length > 0 ? maxWidth : '' }"></div>
        <div :style="{ maxWidth: maxWidth.length > 0 ? maxWidth : '' }">{{ layoutPageText.text3 }}</div>
        <div :style="{ maxWidth: maxWidth.length > 0 ? maxWidth : '' }">{{ layoutPageText.text4 }}</div>
        <div v-if="layoutPage">
          {{ layoutPageText.text2.one }}<span class="layout_span_style">{{ layoutPageText.text2.two }}</span>{{
            layoutPageText.text2.three }}
        </div>
        <div v-if="layoutPage" class="pcShow">{{ layoutPageText.textPc.one }}<span class="layout_span_style pc_span_style">{{
          layoutPageText.textPc.two }}</span>{{ layoutPageText.textPc.three }}</div>
        <div v-if="layoutPage && isInvisalign" class="pcShow">{{ layoutPageText.textPc1.one }}<span class="layout_span_style pc_span_style">{{
          layoutPageText.textPc1.two }}</span>{{ layoutPageText.textPc1.three }}{{ layoutPageText.textPc1.four }}</div>
        <div v-if="layoutPage" class="mbShow mb_style">
          <span>{{ layoutPageText.textMb.one }}</span><span>{{ layoutPageText.textMb.two }}</span><span>{{
            layoutPageText.textMb.three }}</span><span>{{ layoutPageText.textMb.four }}</span>
        </div>
      </div>
      <div>
        <img :src="layoutPageScr" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    layoutPageScr: {
      type: String
    },
    layoutPageText: {
      type: Object,
      default() {
        return () => []
      }
    },
    layoutPage: {
      type: Boolean
    },
    maxWidth: {
      type: String
    },
    isInvisalign: {
      type: Boolean
    }
  },
  data() {
    return {
    }
  },
}
</script>
<style lang="scss" scoped>
@media screen and(min-width: 768px) {
  .mbShow {
    display: none;
  }

  .interval {
    width: 100%;
    position: relative;
    margin-top: 90px;

    &>div:nth-child(1) {
      background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Rectangle-311.15kdh026peow.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 50%;
      height: 305px;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
      bottom: -72px;
    }

    .content {
      display: flex;
      position: relative;
      z-index: 10;

      &>div {
        flex: 1;
      }

      &>div:nth-child(1) {
        color: #79828D;
        font-family: Noto Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.8px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-left: 120px;

        &>div {
          max-width: 476px;
        }

        &>div:nth-child(2) {
          margin: 32px 0 28px;

          &>span {
            color: #57B2F3;
            font-size: 25px;
            font-weight: 700;
            letter-spacing: 2.5px;
          }
        }

        &>div:nth-child(3) {
          &>span {
            color: #57B2F3;
            font-size: 25px;
            font-weight: 700;
            letter-spacing: 2.5px;
          }
        }
      }

      &>div:nth-child(2) {
        display: flex;
        justify-content: center;
      }
    }
  }
}

@media screen and(max-width: 767px) {
  .pcShow {
    display: none;
  }

  .interval {
    width: 100%;
    position: relative;
    margin-top: 90px;

    &>div:nth-child(1) {
      background: url('https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/dentistry/Rectangle-312.3q02akq228o0.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 100%;
      height: 195px;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
      bottom: 49.5%;
    }

    .content {
      display: flex;
      flex-direction: column-reverse;

      &>div:nth-child(1) {
        margin-top: 55px;
        color: #79828D;
        font-family: Noto Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.6px;
        padding: 0 38px;

        // &>div:nth-child(1) {
        //   padding: 0 30px;
        // }

        &>div:nth-child(2) {
          padding: 30px 0;

          &>span {
            color: #57B2F3;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: 3.3px;
          }
        }

        .mb_style {
          // padding: 0 30px;

          &>span {
            color: #79828D;
            font-family: Noto Sans;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: -0.32px;
          }

          &>span:nth-child(3) {
            color: #57B2F3;
            font-family: Noto Sans;
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 2.2px;
          }
        }
      }

      &>div:nth-child(2) {
        display: flex;
        justify-content: flex-end;
        position: relative;
        z-index: 10;

        &>img {
          width: 80%;
        }
      }
    }
  }
}
</style>