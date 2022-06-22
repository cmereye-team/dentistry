<template>
  <div class="main_footer">
    <div class="section ">
      <div>
        <ul>
          <li>
            <img src="@/asset/image/common/FB.svg" alt="">
          </li>
          <li>
            <img src="@/asset/image/common/IG.svg" alt="">
          </li>
          <li>
            <img src="@/asset/image/common/yt.svg" alt="">
          </li>
        </ul>
      </div>
      <div class="copyright">
        <span>私隱政策</span> | <span>免責條款</span>
      </div>
      <div class="copyright" >©2022 希瑪牙科（希瑪醫療集團旗下牙科中心）</div>
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  created() { },
  methods: {}
};
</script>
<style lang="scss" scoped>
.section {
  ul {
    padding: 0;
    display: flex;
    text-align: center;
    justify-content: center;

    li {
      margin: 2vw 2vw;
      height: 100px;
      width: 100px;
      line-height: 100px;

    }
  }
}
.main_footer {
  background: #f3fcfe;
  padding: 5.5vw 0 2vw;
  .section {
    margin: 0 auto;
    img {
      width: 5vw;
    }
    .main_menu {
      letter-spacing: 0.2vw;

      .child_menu {
        li {
          margin: 1vw 0;
          &:hover {
            color: #4570b6;
          }
        }
      }
    }
    .copyright {
      display: flex;
      justify-content: center;
      font-size: 0.9vw;
      margin-top: 1vw;
      span {
        border-bottom: 1px solid;
      }
    }
  }
}
</style>