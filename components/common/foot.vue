<template>
  <div class="main_footer">
    <div class="section">
      <div>
        <ul>
          <li>
            <a href="https://www.facebook.com/dental.cmer/" class="Facebook">
              <img
                src="https://static.cmereye.com/static/lkximg/image/common/FB.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/cmerdental/" class="IG">
              <img
                src="https://static.cmereye.com/static/lkximg/image/common/IG.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UChTznjEW5KXzeubsUeW91tQ/videos"
              class="Youtube"
            >
              <img
                src="https://static.cmereye.com/static/lkximg/image/common/YT.svg"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="copyright">
        <span>
          <nuxt-link to="/policy#A1">私隱政策</nuxt-link>
        </span>
        &nbsp; &nbsp; &nbsp;
        <span>
          <!-- <nuxt-link to="/policy#A2">免責條款</nuxt-link> -->
          <a href="/policy#A2">免責條款</a>
        </span>
      </div>
      <div class="copyright long">
        ©2023 希瑪牙科（希瑪醫療集團旗下牙科中心）
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    //   policy(){
    //     this.$router.push({
    //           path:"/policy",
    //           query:{
    //           }
    //       })
    //   }
  },
};
</script>
<style lang="scss" scoped>
a {
  color: #57b2f3;
  text-decoration: none;
}
@media only screen and (min-width: 760px) {
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
    background: #ecf7fc;
    padding: 5.5vw 0 2vw;
    .section {
      margin: 0 auto;
      img {
        width: 3vw;
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
        cursor: pointer;
        display: flex;
        justify-content: center;
        font-size: 0.9vw;
        margin-top: 1vw;
        color: #57b2f3;
        span {
          border-bottom: 1px solid;
        }
      }
    }
  }
}
@media only screen and (max-width: 760px) {
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
    padding-bottom: 20vw;

    .section {
      margin: 0 auto;
      img {
        width: 11vw;
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
        color: #57b2f3;
        justify-content: center;
        font-size: 14px;
        margin-top: 1vw;
        span {
          border-bottom: 1px solid;
          font-size: 17px;
        }
        .long {
          margin-bottom: 10vw;
        }
      }
    }
  }
}
</style>
