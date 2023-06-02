<template>
  <div>
    <div class="step section main-container"></div>
    <div class="list">
      <div class="main-container">
        <ul class="step_list flex justify-between items-center">
          <li v-for="(stepItem, index) in serContentList" :key="index" cals>
            <img :src="stepItem.src" alt />
            <strong>{{ stepItem.des }}</strong>
            <p>{{ stepItem.content }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      serContentList: [
        {
          src: "https://static.cmereye.com/imgs/2023/06/247d60c76b7ffa09.png",
          link: "",
          des: "美白牙齒",
          content:
            "我們提供美容牙科治療，旨在改善牙齒的顏色和外觀，讓牙齒更加明亮和有吸引力。"
        },
        {
          src: "https://static.cmereye.com/imgs/2023/06/f7e33159569b6f81.png",
          link: "",
          des: "隱形牙箍",
          content:
            "我們提供隱形牙箍矯齒服務為大家脫離傳統金屬牙箍的限制，從而更有自信地改善牙齒的位置和咬合。"
        }
      ]
    };
  },
  computed: {
    clientHeight: {
      get() {
        return this.$store.getters.windowHeight;
      }
    }
  }
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

//pc
@media only screen and (min-width: 740px) {
  .step_list {
    padding-left: 0px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    max-width: 780px;
    img {
      margin-bottom: 2vw;
      padding: 0 2vw;
    }

    li {
      text-align: left;
      color: #fff;
      margin: 0 2vw;

      p {
        padding-left: 2.5vw;
        padding-top: 1vw;
        font-family: "Noto Sans CJK TC";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        text-align: justify;
        letter-spacing: 0.1em;
        padding-bottom: 37px;
      }

      strong {
        padding-left: 15px;
        font-weight: 400;
        font-size: 33px;
        margin-top: 17px;
        border-left: 10px solid #ecf7fc;
        margin-left: calc(2vw + 10px);
        height: 40px;
        line-height: 40px;
        display: inline-block;
      }
    }
  }

  .list {
    background-image: linear-gradient(to bottom, #fff 10%, #9bd0f5 0);
  }
}

//mb
@media only screen and (max-width: 740px) {
  .step.section .step_list li {
    padding: 40px 5vw;
  }

  ul {
    padding: 0;

    img {
      padding-left: 9vw;
      padding-bottom: 6vw;
    }
  }

  li {
    background-image: linear-gradient(to bottom, #fff 30%, #9bd0f5 0);
  }

  p {
    padding: 2vw 4vw 9vw 4vw;
    color: #fff;
    font-size: 17px;
  }

  strong {
    margin-top: 17px;
    padding-left: 4vw;
    color: #fff;
    font-weight: 400;
    font-size: 33px;
    border-left: 10px solid #ecf7fc;
    margin-left: calc(2vw + 10px);
    height: 40px;
    line-height: 40px;
    display: inline-block;
  }

}
</style>
