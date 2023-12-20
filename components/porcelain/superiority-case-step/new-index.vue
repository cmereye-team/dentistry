<template>
  <div class="superiority-case-step">
    <div class="superiority main-container">
      <div class="why_significance">全瓷貼片五大優勢</div>
      <div>
        <div>
          <img src="https://static.cmereye.com/imgs/2023/12/b6273252e09a8aeb.png" alt="">
        </div>
        <div>
          <div v-for="(item, index) in superiorityList" :key="index">
            <div>{{ item.title }}</div>
            <div>{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="case">
      <div class="main-container"></div>
    </div>
    <div class="main-container step">
      <div class="why_significance">全瓷貼片五步曲</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'superiority-case-step',
  data() {
    return {
      superiorityList: [
        {
          title: '即日定制',
          content: '利用電腦斷層掃描技術，全方位瞭解牙齒狀況，讓瓷貼片更符合其需求，當日可完成磨牙和裝貼步驟'
        },
        {
          title: '知名物料',
          content: '採用德國進口CEREC Tessera™物料，獲ISO優質認證'
        },
        {
          title: '自然仿真',
          content: '有多色選擇，光澤通透，近似真牙，以配合美齒期望'
        },
        {
          title: '堅固耐用',
          content: '瓷貼片堅硬度及耐用度，如保養得宜，壽命可長達10年或以上'
        },
        {
          title: '專屬微笑線設計',
          content: '引用先進技術，創造獨一無二的微笑曲線，符合黃金比例美學，無阻展現自信笑容'
        }
      ]
    };
  },
  methods: {}
}
</script>

<style  scoped lang='scss'>
@media screen and (min-width: 768px) {
  .superiority-case-step {
    margin-top: 109px;
  }

  .superiority {
    &>div:nth-child(2) {
      display: flex;

      &>div:nth-child(1) {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        
      }
      &>div:nth-child(2) {
        flex: 1;
      }
    }
  }

  .case {
    background: #ECF7FC;
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
    padding-bottom: 20px;
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
}

@media screen and (max-width: 767px) {
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
}</style>