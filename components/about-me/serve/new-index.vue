<template>
  <div class="bg-white pb-0 py-xs-2 main-container serve-top">
    <div class="flex justify-center texts">
      <h2>牙科服務</h2>
      <img src="https://static.cmereye.com/static/lkximg/image/about-me/serve/Vector.png" alt="" />
      <p class="serve_con">
        點擊以下圖示，了解更多牙科資訊
      </p>
    </div>
    <div class="mb-padding">
      <div class="service_box_line service_box1">
        <div>高階牙科</div>
        <div>
          <div v-for="(item, index) in adDentistry" :key="index">
            <nuxt-link :to="item.link">
              <div class="service_pic">
                <img :src="item.img" />
              </div>
              <div class="service_txt">
                <p class="fs-sm-16" v-html="item.name" :class="`p_style_${index}`"></p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="service_box_line service_box2">
        <div>基本牙科</div>
        <div>
          <div v-for="(item, index) in basicDentistry" :key="index">
            <nuxt-link :to="item.link">
              <div class="service_pic">
                <img :src="item.img" />
              </div>
              <div class="service_txt">
                <p class="fs-sm-16" v-html="item.name"></p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="service_box_line service_box3">
        <div>美容牙科</div>
        <div>
          <div v-for="(item, index) in cosmeticDentistry " :key="index">
            <nuxt-link :to="item.link">
              <div class="service_pic">
                <img :src="item.img" />
              </div>
              <div class="service_txt">
                <p class="fs-sm-16" v-html="item.name"></p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <a class="serve_btn bp-btn" href="https://api.whatsapp.com/send?phone=85295128192" target="_blank">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="78" height="88" viewBox="0 0 78 88" fill="none">
            <g filter="url(#filter0_d_162_825)">
              <path
                d="M50.887 24.9586C48.854 23.1774 49.8505 19.9399 51.5404 18.0128C53.2303 16.0856 56.2488 15.9688 58.2818 17.75C60.3148 19.5312 60.5922 22.5387 58.9023 24.4659C57.2124 26.393 52.92 26.7398 50.887 24.9586Z"
                fill="#96D8EF" stroke="white" stroke-width="0.73648" stroke-miterlimit="10" />
              <path
                d="M26.8777 19.4001C29.2356 18.0788 28.9363 14.7063 27.6843 12.4725C26.4324 10.2351 23.5052 9.49053 21.1473 10.8118C18.7895 12.1331 17.8916 15.0129 19.1399 17.2503C20.3918 19.484 24.5162 20.7177 26.8777 19.4001Z"
                fill="#96D8EF" stroke="white" stroke-width="0.73648" stroke-miterlimit="10" />
              <path
                d="M29.7324 14.9467C29.528 17.4287 30.2982 19.896 33.375 20.8268C34.8715 21.2794 36.3096 21.0531 37.828 21.6115C39.2587 22.1371 40.5326 22.9912 42.0035 23.4328C45.4198 24.4658 48.9201 22.2648 49.8581 18.9909C50.2706 17.5455 50.329 16.0162 50.2596 14.5161C50.1355 11.8224 49.5771 7.96808 47.1426 6.36941C45.095 5.02624 43.3029 7.44249 41.4231 6.21246C40.0325 5.30363 39.1784 3.76701 37.2987 4.02981C36.3716 4.1612 35.5322 4.643 34.7912 5.21238C31.853 7.46439 30.0317 11.2932 29.7324 14.9467Z"
                fill="white" />
              <path
                d="M40.24 7.57388C40.8313 8.04837 41.3641 8.59586 41.8058 9.20905L41.7364 9.1981C42.3788 8.71996 43.1052 8.35862 43.8643 8.12502C43.1161 8.39147 42.4117 8.77836 41.7985 9.2784C41.7766 9.29665 41.7474 9.293 41.7291 9.2711V9.26745C41.2692 8.68346 40.7254 8.16517 40.1268 7.72718C40.083 7.69433 40.0757 7.63593 40.1049 7.59213C40.1341 7.54833 40.1962 7.54103 40.24 7.57388Z"
                fill="#96D8EF" />
              <path
                d="M29.7464 15.7059C29.2646 15.7534 34.0789 13.6182 42.7328 16.122C47.485 17.4944 47.7624 17.5126 50.0217 12.0779C50.9379 16.3994 49.6531 19.6478 49.3611 20.2209C49.3611 20.2172 39.2399 14.7569 29.7464 15.7059Z"
                fill="#E6F4FC" />
              <path
                d="M61.0156 47.38C61.0923 46.358 61.293 45.4053 61.512 44.2958C62.2201 40.7115 61.4646 36.255 60.0812 32.8678C55.548 21.783 42.7879 13.9685 30.1263 15.5854C24.6915 16.2789 19.5853 18.447 15.5485 21.8195C13.5593 23.4802 11.9679 25.5096 10.6904 27.7251C9.82173 29.2325 9.26329 30.875 8.53695 32.4445C7.83981 33.9519 6.68644 35.2074 5.9893 36.6893C4.83227 39.1457 4.49648 42.1533 4.62788 44.825C6.29589 55.1726 17.5851 61.1694 28.7138 63.9798C28.7174 63.9798 28.7211 63.9798 28.7247 63.9835C28.7284 63.9835 28.732 63.9871 28.7357 63.9871C39.8862 66.7027 52.6682 66.6771 58.979 58.3115C61.1872 55.3806 61.3332 52.8621 61.0266 49.2998C60.9682 48.6063 60.9718 47.9822 61.0156 47.38Z"
                fill="white" />
              <path
                d="M45.0654 40.7558C45.269 40.7558 45.4341 40.5907 45.4341 40.3871C45.4341 40.1835 45.269 40.0185 45.0654 40.0185C44.8618 40.0185 44.6968 40.1835 44.6968 40.3871C44.6968 40.5907 44.8618 40.7558 45.0654 40.7558Z"
                fill="white" />
              <path
                d="M37.6013 51.9486C38.7088 48.4489 37.0515 44.8032 33.8996 43.8059C30.7477 42.8085 27.2949 44.837 26.1874 48.3367C25.0799 51.8364 26.7372 55.4821 29.8891 56.4795C33.041 57.4769 36.4938 55.4483 37.6013 51.9486Z"
                fill="#F5AAB3" />
              <mask id="mask0_162_825" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="25" y="43" width="13"
                height="14">
                <path
                  d="M37.6013 51.9486C38.7088 48.4489 37.0515 44.8032 33.8996 43.8059C30.7477 42.8085 27.2949 44.837 26.1874 48.3367C25.0799 51.8364 26.7372 55.4821 29.8891 56.4795C33.041 57.4769 36.4938 55.4483 37.6013 51.9486Z"
                  fill="white" />
              </mask>
              <g mask="url(#mask0_162_825)">
                <path
                  d="M34.0574 47.2923L31.7653 46.5659C31.3565 46.4382 31.1338 46.0039 31.2616 45.5951L32.0719 43.0401C32.1996 42.6313 32.634 42.4087 33.0427 42.5364L35.3349 43.2628C35.7437 43.3905 35.9663 43.8248 35.8386 44.2336L35.0283 46.7886C34.8969 47.1974 34.4626 47.42 34.0574 47.2923Z"
                  fill="white" />
              </g>
              <path
                d="M37.6013 51.9486C38.7088 48.4489 37.0515 44.8032 33.8996 43.8059C30.7477 42.8085 27.2949 44.837 26.1874 48.3367C25.0799 51.8364 26.7372 55.4821 29.8891 56.4795C33.041 57.4769 36.4938 55.4483 37.6013 51.9486Z"
                stroke="#F5AAB3" stroke-width="0.130225" stroke-miterlimit="10" />
              <path
                d="M21.7091 34.7364C21.8462 34.7364 21.9573 34.6253 21.9573 34.4882C21.9573 34.3511 21.8462 34.24 21.7091 34.24C21.5721 34.24 21.4609 34.3511 21.4609 34.4882C21.4609 34.6253 21.5721 34.7364 21.7091 34.7364Z"
                fill="white" />
              <path
                d="M18.4879 47.0209C19.3746 44.2188 17.2096 41.0347 13.6522 39.909C10.0949 38.7832 6.49223 40.1422 5.60553 42.9443C4.71882 45.7464 6.88382 48.9305 10.4412 50.0562C13.9986 51.1819 17.6012 49.8229 18.4879 47.0209Z"
                fill="#F8BEBC" />
              <path d="M10.2412 43.4823L11.7194 42.7122" stroke="white" stroke-width="0.245478" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.5552 44.4127L13.1648 43.5768" stroke="white" stroke-width="0.245478" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M58.7334 56.427C59.3057 53.5441 56.8025 50.6181 53.1426 49.8916C49.4826 49.1651 46.0517 50.9133 45.4795 53.7962C44.9072 56.6791 47.4104 59.605 51.0703 60.3315C54.7303 61.058 58.1612 59.3099 58.7334 56.427Z"
                fill="#F8BEBC" />
              <path d="M50.9854 54.2751L52.0913 53.0269" stroke="white" stroke-width="0.245478" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round" />
              <path d="M52.5474 54.6725L53.7482 53.3184" stroke="white" stroke-width="0.245478" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M14.9571 29.5098C11.3181 34.4627 11.2013 39.9705 15.4134 43.0619C18.326 45.2008 22.2314 45.0402 25.3375 43.416C29.1991 41.3939 31.5899 37.8608 31.8782 33.5429C32.1483 29.5171 29.0677 25.7065 25.0601 25.0204C21.1146 24.3451 17.2675 26.3635 14.9571 29.5098Z"
                fill="#CCEAF4" />
              <path
                d="M28.4298 38.342C30.8561 35.7788 30.8673 31.8496 28.4548 29.5661C26.0424 27.2825 22.1198 27.5092 19.6935 30.0725C17.2672 32.6357 17.256 36.5648 19.6684 38.8484C22.0809 41.132 26.0035 40.9052 28.4298 38.342Z"
                fill="#424343" stroke="#424343" stroke-width="0.122739" stroke-miterlimit="10" />
              <path
                d="M25.4506 32.7622C27.1217 32.7622 28.4764 31.4075 28.4764 29.7364C28.4764 28.0653 27.1217 26.7106 25.4506 26.7106C23.7795 26.7106 22.4248 28.0653 22.4248 29.7364C22.4248 31.4075 23.7795 32.7622 25.4506 32.7622Z"
                fill="white" stroke="white" stroke-width="0.122739" stroke-miterlimit="10" />
              <path
                d="M19.0558 39.3247C19.9689 39.3247 20.7092 38.5845 20.7092 37.6713C20.7092 36.7581 19.9689 36.0179 19.0558 36.0179C18.1426 36.0179 17.4023 36.7581 17.4023 37.6713C17.4023 38.5845 18.1426 39.3247 19.0558 39.3247Z"
                fill="white" stroke="white" stroke-width="0.122739" stroke-miterlimit="10" />
              <path
                d="M56.9572 40.1354C57.49 46.26 54.7234 51.0231 49.5186 51.4757C45.9198 51.7896 42.664 49.6216 40.8573 46.6177C38.609 42.8838 38.4046 38.6243 40.4047 34.781C42.2662 31.204 46.8797 29.547 50.661 31.0471C54.384 32.5217 56.6214 36.2482 56.9572 40.1354Z"
                fill="#CCEAF4" />
              <path
                d="M48.0755 45.6616C51.3238 44.9656 53.3576 41.6036 52.6181 38.1523C51.8787 34.701 48.6459 32.4673 45.3977 33.1633C42.1494 33.8593 40.1156 37.2213 40.855 40.6726C41.5945 44.1239 44.8272 46.3576 48.0755 45.6616Z"
                fill="#424343" stroke="#424343" stroke-width="0.122739" stroke-miterlimit="10" />
              <path
                d="M47.8759 37.8975C49.547 37.8975 50.9017 36.5428 50.9017 34.8717C50.9017 33.2006 49.547 31.8459 47.8759 31.8459C46.2048 31.8459 44.8501 33.2006 44.8501 34.8717C44.8501 36.5428 46.2048 37.8975 47.8759 37.8975Z"
                fill="white" stroke="white" stroke-width="0.122739" stroke-miterlimit="10" />
              <path
                d="M49.2115 46.6317C50.1247 46.6317 50.8649 45.8914 50.8649 44.9782C50.8649 44.0651 50.1247 43.3248 49.2115 43.3248C48.2984 43.3248 47.5581 44.0651 47.5581 44.9782C47.5581 45.8914 48.2984 46.6317 49.2115 46.6317Z"
                fill="white" stroke="white" stroke-width="0.122739" stroke-miterlimit="10" />
              <path
                d="M35.8747 41.3236C35.9842 40.8172 35.3974 40.2606 34.564 40.0802C33.7306 39.8999 32.9662 40.1642 32.8566 40.6705C32.747 41.1769 33.3338 41.7335 34.1672 41.9139C35.0006 42.0942 35.7651 41.8299 35.8747 41.3236Z"
                fill="#E6F4FC" />
            </g>
            <g filter="url(#filter1_d_162_825)">
              <path
                d="M40.4593 74.5574L51.2339 81.1929C53.0151 82.2916 55.3474 81.7368 56.4423 79.9556L73.0787 52.9498C74.1773 51.1686 73.6225 48.8363 71.8414 47.7413L61.0668 41.1058C59.2856 40.0071 56.9533 40.5619 55.8583 42.3431L39.222 69.3489C38.1233 71.1301 38.6781 73.4624 40.4593 74.5574Z"
                fill="#8CD1F8" />
              <path
                d="M55.8806 79.3273L72.2615 52.734C73.174 51.2484 72.7141 49.3067 71.2286 48.3905L60.7569 41.9411C59.2714 41.0286 57.3296 41.4885 56.4135 42.974L40.0326 69.5674C39.1201 71.0529 39.58 72.9947 41.0655 73.9108L51.5372 80.3603C53.0227 81.2727 54.9681 80.8092 55.8806 79.3273Z"
                fill="white" />
              <path
                d="M63.3332 45.8212L66.6071 47.836C66.8444 47.982 67.1546 47.909 67.3006 47.6717L67.3189 47.6389C67.4649 47.4016 67.3919 47.0914 67.1546 46.9454L63.8806 44.9306C63.6434 44.7846 63.3332 44.8576 63.1872 45.0949L63.1689 45.1277C63.0229 45.365 63.0959 45.6752 63.3332 45.8212Z"
                fill="#8CD1F8" />
              <path
                d="M50.8608 58.3076C51.0506 58.147 51.2258 58.001 51.401 57.8587C51.8536 57.4827 52.3062 57.1104 52.7552 56.7308C52.788 56.7016 52.8063 56.6359 52.8063 56.5921C52.7552 55.7308 52.8573 54.8876 53.1457 54.0737C53.7041 52.486 54.7188 51.2669 56.208 50.4785C57.8505 49.6062 59.5805 49.4419 61.3434 50.0259C63.318 50.6829 64.705 52.0042 65.4569 53.9532C66.0336 55.4534 66.0445 56.9754 65.4971 58.4828C65.0043 59.8333 64.1502 60.9137 62.9385 61.6911C61.6646 62.5123 60.2667 62.8445 58.7593 62.7131C57.9454 62.6401 57.1752 62.4174 56.4416 62.0488C55.2408 61.4465 54.31 60.5633 53.6421 59.3953C53.5764 59.2821 53.5143 59.1617 53.4596 59.0449C53.4267 58.9755 53.3829 58.9427 53.3063 58.9208C52.5325 58.731 51.7587 58.5375 50.9886 58.3441C50.9557 58.3404 50.9229 58.3258 50.8608 58.3076ZM59.2265 60.4465C59.5148 60.5888 59.836 60.7056 60.1937 60.7348C60.847 60.7895 61.3361 60.5414 61.6865 59.9939C61.7705 59.8625 61.7814 59.7493 61.6902 59.6106C61.4785 59.2967 61.285 58.9719 61.0806 58.6543C60.9675 58.4791 60.8507 58.304 60.7193 58.1434C60.6098 58.0083 60.5295 58.0047 60.3653 58.0631C60.0623 58.1726 59.7557 58.2784 59.4491 58.3806C59.3068 58.428 59.2119 58.3879 59.1206 58.2675C59.0695 58.1945 59.0221 58.1215 58.971 58.0485C58.3213 57.136 58.0402 56.1103 58.0439 55.0008C58.0439 54.7453 58.0877 54.7015 58.3322 54.6321C58.5804 54.5628 58.8286 54.4971 59.0476 54.3511C59.1535 54.2817 59.2119 54.1905 59.2301 54.0664C59.2703 53.7817 59.3177 53.5006 59.3615 53.216C59.4017 52.9386 59.4491 52.6648 59.482 52.3874C59.5039 52.2086 59.4455 52.0589 59.2666 51.9823C59.117 51.9166 58.9673 51.8326 58.8104 51.7925C58.668 51.7596 58.5074 51.745 58.3687 51.7779C57.511 51.9823 56.9818 52.5371 56.7409 53.3765C56.6095 53.8401 56.5803 54.3182 56.6277 54.7964C56.6825 55.3256 56.7263 55.8548 56.8139 56.3804C56.927 57.0557 57.1497 57.6981 57.4672 58.3076C57.7483 58.8441 58.1315 59.3113 58.5184 59.7712C58.7191 60.0085 58.9308 60.2494 59.2265 60.4465Z"
                fill="#00C207" />
              <path
                d="M48.1636 58.9205C48.2512 58.8439 48.3242 58.7818 48.3935 58.7234C49.4009 57.8913 50.4083 57.0554 51.4157 56.2232C51.5033 56.1539 51.5434 56.0809 51.5434 55.9678C51.5653 54.9896 51.7661 54.0515 52.1529 53.1537C52.9194 51.3871 54.1604 50.0622 55.8978 49.23C57.7665 48.3358 59.7046 48.2117 61.6829 48.8321C62.4749 49.0803 63.2013 49.4599 63.8765 49.9454C64.8985 50.679 65.6978 51.6024 66.2709 52.723C67.0155 54.1866 67.2782 55.7342 67.0556 57.3657C66.9534 58.1103 66.7454 58.8256 66.4278 59.5045C65.8913 60.6543 65.1284 61.6215 64.1174 62.3953C63.1575 63.1326 62.0844 63.6144 60.8982 63.8479C59.4528 64.1326 58.033 64.0158 56.646 63.5012C56.0985 63.2968 55.5802 63.0377 55.0948 62.7165C54.0801 62.0485 53.2479 61.1981 52.6311 60.1433C52.58 60.0593 52.5216 60.0119 52.423 59.99C51.2076 59.6907 49.9922 59.3877 48.7804 59.0848C48.587 59.0264 48.3862 58.9753 48.1636 58.9205ZM50.8609 58.3074C50.9229 58.3256 50.9558 58.3402 50.9923 58.3475C51.7661 58.541 52.5362 58.7344 53.31 58.9242C53.3866 58.9424 53.4304 58.9753 53.4633 59.0483C53.518 59.1687 53.5801 59.2855 53.6458 59.3987C54.3101 60.563 55.2444 61.4463 56.4453 62.0522C57.1752 62.4208 57.949 62.6435 58.763 62.7165C60.2704 62.8479 61.6683 62.5157 62.9421 61.6945C64.1539 60.9134 65.008 59.8367 65.5007 58.4862C66.0482 56.9751 66.0373 55.4531 65.4606 53.9566C64.7087 52.0076 63.3254 50.6827 61.3471 50.0293C59.5842 49.4453 57.8541 49.6096 56.2117 50.4819C54.7188 51.2739 53.7078 52.4894 53.1494 54.0771C52.861 54.891 52.7588 55.7342 52.8099 56.5955C52.8136 56.643 52.7917 56.7087 52.7588 56.7342C52.3099 57.1138 51.8573 57.4861 51.4047 57.8621C51.2259 58.0008 51.0507 58.1468 50.8609 58.3074Z"
                fill="#FBFEFB" />
              <path
                d="M59.2269 60.4464C58.9313 60.2493 58.7196 60.012 58.5152 59.7638C58.1283 59.3003 57.7451 58.8367 57.464 58.3002C57.1465 57.6943 56.9238 57.0483 56.8107 56.373C56.7231 55.8511 56.6793 55.3182 56.6245 54.789C56.5771 54.3108 56.6026 53.8327 56.7377 53.3691C56.9786 52.5333 57.5042 51.9749 58.3656 51.7705C58.5043 51.7376 58.6685 51.7522 58.8072 51.7851C58.9642 51.8216 59.1138 51.9092 59.2635 51.9749C59.4423 52.0552 59.5007 52.2048 59.4788 52.38C59.4459 52.6574 59.3985 52.9311 59.3583 53.2085C59.3145 53.4932 59.2671 53.7743 59.2269 54.059C59.2087 54.1831 59.154 54.2743 59.0445 54.3437C58.8255 54.4897 58.5773 54.5554 58.3291 54.6247C58.0882 54.6904 58.0444 54.7379 58.0407 54.9934C58.0371 56.1029 58.3181 57.1286 58.9678 58.041C59.0189 58.114 59.0664 58.187 59.1175 58.26C59.205 58.3805 59.3 58.4206 59.4459 58.3732C59.7525 58.271 60.0591 58.1651 60.3621 58.0556C60.5263 57.9972 60.6066 58.0009 60.7161 58.1359C60.8475 58.2965 60.9643 58.4717 61.0775 58.6469C61.2855 58.9645 61.479 59.2893 61.687 59.6032C61.7783 59.7419 61.7673 59.8587 61.6834 59.9865C61.333 60.5339 60.8439 60.7821 60.1905 60.7274C59.8365 60.7055 59.5153 60.5887 59.2269 60.4464Z"
                fill="#FBFEFB" />
              <path
                d="M60.5196 82.9154C65.4805 82.9154 69.5021 78.8938 69.5021 73.9329C69.5021 68.972 65.4805 64.9504 60.5196 64.9504C55.5587 64.9504 51.5371 68.972 51.5371 73.9329C51.5371 78.8938 55.5587 82.9154 60.5196 82.9154Z"
                fill="white" stroke="#CCEAF3" stroke-width="0.399964" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
            </g>
            <defs>
              <filter id="filter0_d_162_825" x="0.601074" y="0" width="65.1812" height="69.593"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.639216 0 0 0 0 0.835294 0 0 0 0 0.921569 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_162_825" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_162_825" result="shape" />
              </filter>
              <filter id="filter1_d_162_825" x="34.6577" y="36.5415" width="42.9854" height="50.5739"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.639216 0 0 0 0 0.835294 0 0 0 0 0.921569 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_162_825" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_162_825" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
        <div class="btn_pc_style">
          <div class="btn1">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                <path
                  d="M0 32.2735C0.342011 31.0164 0.673335 29.8236 0.993971 28.6256C1.39655 27.1678 1.79022 25.7101 2.17498 24.2523C2.21215 24.0839 2.19142 23.9078 2.1162 23.7527C0.513392 20.8557 -0.150835 17.5284 0.216027 14.234C0.582889 10.9396 1.96257 7.84226 4.16292 5.37335C6.80288 2.29359 10.5466 0.387603 14.5782 0.0706911C16.7373 -0.134206 18.9152 0.106683 20.9783 0.778587C23.0414 1.45049 24.9461 2.53924 26.5755 3.97796C28.205 5.41668 29.5247 7.17502 30.4538 9.14506C31.3828 11.1151 31.9015 13.2552 31.9781 15.4341C32.0547 17.613 31.6876 19.7846 30.8992 21.8157C30.1108 23.8468 28.9178 25.6944 27.3934 27.2451C25.8691 28.7959 24.0456 30.0171 22.0348 30.8337C20.0241 31.6504 17.8685 32.0453 15.7005 31.9942C13.239 31.9559 10.8216 31.3318 8.64648 30.1729C8.49982 30.1093 8.33643 30.0961 8.18155 30.1352C5.57015 30.8122 2.96232 31.4963 0.358044 32.1876L0 32.2735ZM3.82625 28.4698L4.02932 28.4214C5.47218 28.04 6.92039 27.6693 8.35791 27.2771C8.50235 27.2299 8.65542 27.2155 8.80605 27.235C8.95669 27.2545 9.10113 27.3074 9.22897 27.3899C13.114 29.641 17.17 29.9794 21.2849 28.1904C24.0266 26.9996 26.2867 24.911 27.6973 22.2644C29.108 19.6179 29.5862 16.5692 29.054 13.6147C28.5219 10.6602 27.0108 7.97367 24.7666 5.99245C22.5225 4.01123 19.6774 2.85193 16.6944 2.70323C14.2595 2.58735 11.84 3.1494 9.7025 4.32748C7.56498 5.50556 5.79239 7.25396 4.58 9.38004C3.36761 11.5061 2.76248 13.9274 2.83127 16.3771C2.90006 18.8268 3.64009 21.2099 4.96985 23.2638C5.03729 23.3561 5.0813 23.4636 5.09806 23.5769C5.11483 23.6901 5.10383 23.8058 5.06604 23.9139C4.64922 25.4128 4.24842 26.9117 3.82625 28.4698Z"
                  fill="white" />
                <path
                  d="M10.976 8.60741C11.6226 8.44087 11.9379 8.87602 12.1784 9.49921C12.5364 10.4286 12.9265 11.3473 13.3166 12.2606C13.3909 12.3988 13.4235 12.5559 13.4102 12.7124C13.3969 12.8689 13.3384 13.0181 13.2418 13.1417C12.9212 13.5715 12.6112 14.012 12.2746 14.4257C12.1738 14.5306 12.1131 14.6679 12.1033 14.8134C12.0935 14.9589 12.1353 15.1032 12.2212 15.2208C13.4569 17.378 15.387 19.0474 17.6932 19.9538C17.8274 20.0248 17.9827 20.0443 18.1302 20.0088C18.2776 19.9732 18.4072 19.8849 18.4948 19.7604C18.8902 19.2608 19.307 18.7773 19.6864 18.2669C19.7595 18.1266 19.8842 18.0205 20.0339 17.9713C20.1837 17.9222 20.3466 17.9338 20.488 18.0037C21.6316 18.5409 22.7644 19.0781 23.892 19.6476C23.9578 19.6932 24.0127 19.7531 24.0524 19.8228C24.0922 19.8925 24.1159 19.9704 24.1218 20.0505C24.1817 20.6101 24.0855 21.1754 23.8439 21.683C23.6023 22.1907 23.2248 22.6207 22.7538 22.9248C22.1533 23.315 21.4738 23.5657 20.7648 23.6586C20.0557 23.7516 19.335 23.6844 18.6551 23.462C15.032 22.4466 12.2799 20.2386 10.0676 17.2354C9.21605 16.2089 8.57332 15.0243 8.1759 13.7488C7.94494 13.0069 7.90919 12.2176 8.07216 11.4577C8.23512 10.6979 8.59122 9.9935 9.10572 9.41327C9.6882 8.69337 9.90729 8.59667 10.976 8.60741Z"
                  fill="white" />
              </svg>
            </div>
            <div>WhatsApp 預約</div>
          </div>
          <div class="btn2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                <path
                  d="M0 32.2735C0.342011 31.0164 0.673335 29.8236 0.993971 28.6256C1.39655 27.1678 1.79022 25.7101 2.17498 24.2523C2.21215 24.0839 2.19142 23.9078 2.1162 23.7527C0.513392 20.8557 -0.150835 17.5284 0.216027 14.234C0.582889 10.9396 1.96257 7.84226 4.16292 5.37335C6.80288 2.29359 10.5466 0.387603 14.5782 0.0706911C16.7373 -0.134206 18.9152 0.106683 20.9783 0.778587C23.0414 1.45049 24.9461 2.53924 26.5755 3.97796C28.205 5.41668 29.5247 7.17502 30.4538 9.14506C31.3828 11.1151 31.9015 13.2552 31.9781 15.4341C32.0547 17.613 31.6876 19.7846 30.8992 21.8157C30.1108 23.8468 28.9178 25.6944 27.3934 27.2451C25.8691 28.7959 24.0456 30.0171 22.0348 30.8337C20.0241 31.6504 17.8685 32.0453 15.7005 31.9942C13.239 31.9559 10.8216 31.3318 8.64648 30.1729C8.49982 30.1093 8.33643 30.0961 8.18155 30.1352C5.57015 30.8122 2.96232 31.4963 0.358044 32.1876L0 32.2735ZM3.82625 28.4698L4.02932 28.4214C5.47218 28.04 6.92039 27.6693 8.35791 27.2771C8.50235 27.2299 8.65542 27.2155 8.80605 27.235C8.95669 27.2545 9.10113 27.3074 9.22897 27.3899C13.114 29.641 17.17 29.9794 21.2849 28.1904C24.0266 26.9996 26.2867 24.911 27.6973 22.2644C29.108 19.6179 29.5862 16.5692 29.054 13.6147C28.5219 10.6602 27.0108 7.97367 24.7666 5.99245C22.5225 4.01123 19.6774 2.85193 16.6944 2.70323C14.2595 2.58735 11.84 3.1494 9.7025 4.32748C7.56498 5.50556 5.79239 7.25396 4.58 9.38004C3.36761 11.5061 2.76248 13.9274 2.83127 16.3771C2.90006 18.8268 3.64009 21.2099 4.96985 23.2638C5.03729 23.3561 5.0813 23.4636 5.09806 23.5769C5.11483 23.6901 5.10383 23.8058 5.06604 23.9139C4.64922 25.4128 4.24842 26.9117 3.82625 28.4698Z"
                  fill="#79828D" />
                <path
                  d="M10.976 8.60741C11.6226 8.44087 11.9379 8.87602 12.1784 9.49921C12.5364 10.4286 12.9265 11.3473 13.3166 12.2606C13.3909 12.3988 13.4235 12.5559 13.4102 12.7124C13.3969 12.8689 13.3384 13.0181 13.2418 13.1417C12.9212 13.5715 12.6112 14.012 12.2746 14.4257C12.1738 14.5306 12.1131 14.6679 12.1033 14.8134C12.0935 14.9589 12.1353 15.1032 12.2212 15.2208C13.4569 17.378 15.387 19.0474 17.6932 19.9538C17.8274 20.0248 17.9827 20.0443 18.1302 20.0088C18.2776 19.9732 18.4072 19.8849 18.4948 19.7604C18.8902 19.2608 19.307 18.7773 19.6864 18.2669C19.7595 18.1266 19.8842 18.0205 20.0339 17.9713C20.1837 17.9222 20.3466 17.9338 20.488 18.0037C21.6316 18.5409 22.7644 19.0781 23.892 19.6476C23.9578 19.6932 24.0127 19.7531 24.0524 19.8228C24.0922 19.8925 24.1159 19.9704 24.1218 20.0505C24.1817 20.6101 24.0855 21.1754 23.8439 21.683C23.6023 22.1907 23.2248 22.6207 22.7538 22.9248C22.1533 23.315 21.4738 23.5657 20.7648 23.6586C20.0557 23.7516 19.335 23.6844 18.6551 23.462C15.032 22.4466 12.2799 20.2386 10.0676 17.2354C9.21605 16.2089 8.57332 15.0243 8.1759 13.7488C7.94494 13.0069 7.90919 12.2176 8.07216 11.4577C8.23512 10.6979 8.59122 9.9935 9.10572 9.41327C9.6882 8.69337 9.90729 8.59667 10.976 8.60741Z"
                  fill="#79828D" />
              </svg>
            </div>
            <div>WhatsApp 預約</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrollY: 0,
      scrollYNum: 0,
      isHoverAnimate: false,
      adDentistry: [
        {
          link: '/implant',
          name: '微創植牙/種植牙',
          img: 'https://static.cmereye.com/imgs/2023/12/57732f633a997d95.png'
        },
        {
          link: '/rct',
          name: `根管治療 (杜牙根)`,
          img: 'https://static.cmereye.com/imgs/2023/12/298de7f7370976ab.png'
        },
        {
          link: '/periodontal-treatment',
          name: `牙周病治療`,
          img: 'https://static.cmereye.com/imgs/2023/12/bc1c1cdd16eb124a.png'
        },
        {
          link: '/extractions-and-wisdom-teeth-extraction',
          name: `拔牙及剝智慧齒`,
          img: 'https://static.cmereye.com/imgs/2023/12/bf496ebdf0a60544.png'
        },
        {
          link: '/complete-and-partial-denture',
          name: `全口牙托<span class="pcShow">/</span><br class="mbShow" />局部牙托`,
          img: 'https://static.cmereye.com/imgs/2023/12/1ecf290d714a0367.png'
        },
      ],
      basicDentistry: [
        {
          link: '/scaling-and-polishing',
          name: `洗牙`,
          img: 'https://static.cmereye.com/imgs/2023/12/0543183b780abdfe.png'
        },
        {
          link: '/fillings',
          name: `補牙`,
          img: 'https://static.cmereye.com/imgs/2023/12/c4ec73cc3358570e.png'
        },
        {
          link: '/general-oral-examination',
          name: `一般口腔檢查`,
          img: 'https://static.cmereye.com/imgs/2023/12/fe2fc699dee06320.png'
        },
        {
          link: '/children-dentistry',
          name: `兒童牙科`,
          img: 'https://static.cmereye.com/imgs/2023/12/c8e2ae1c0b80dbf8.png'
        }
      ],
      cosmeticDentistry: [
        {
          link: '/veneers',
          name: `全瓷貼片`,
          img: 'https://static.cmereye.com/imgs/2023/12/207351d3afe0d62e.png'
        },
        {
          link: '/orthodontics',
          name: `矯齒`,
          img: 'https://static.cmereye.com/imgs/2023/12/588c65469ac643fc.png'
        },
        {
          link: '/invisalign',
          name: `隱形牙箍`,
          img: 'https://static.cmereye.com/imgs/2023/12/578230be8392aa70.png'
        },
        {
          link: '/teeth-whitening',
          name: `美白牙齒`,
          img: 'https://static.cmereye.com/imgs/2023/12/cdc53cbef72b0392.png'
        },
        {
          link: '/crowns-and-bridges',
          name: `全瓷牙冠<span class="pcShow">/</span><br class="mbShow" />全鋯牙冠`,
          img: 'https://static.cmereye.com/imgs/2023/12/eacf82fc433bf385.png'
        },

      ]
    }
  },
  methods: {
    getScrollY(){
      this.scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      if(this.scrollY > 1750 || this.scrollY < 1600){
        this.isShow = true;
      }else{
        this.isShow = false;
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.texts {
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-weight: 500;
    color: #79828d;
    margin-bottom: 0vw;
  }

  image {
    text-align: center;
  }
}

.service_box .service_item .service_hover {
  width: 100%;
  height: auto;
  padding-bottom: 1rem;
  z-index: 999;
  background: #ecf7fc;
  padding: 0;
}

a {
  text-decoration: none;
}

.box {
  display: table;
  margin: 50px auto;
}

.service_box {
  display: flex;
  justify-content: left;
}

@media only screen and (max-width: 760px) {
  .pcShow {
    display: none;
  }

  .service_box {
    padding-top: 3rem;
  }
}

.service_box .service_item {
  text-align: center;
  justify-content: center;
  flex-flow: column;
  margin: 1vw;
}

@media only screen and (min-width: 100px) and (max-width: 991px) {
  .imgya {
    margin-left: 7vw !important;
  }

  .yas {
    width: 16vw !important;
  }

  .box {
    margin: 0;
  }

  .service_txt {
    color: #505050;
    font-weight: 600;
  }

  .service_box {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    padding-top: 0 !important;
  }

  ::v-deep .service_box .service_item {
    flex: 1 0 36.333333% !important;
    margin-bottom: 1.428rem !important;
    padding-right: 0 !important;
  }

  ::v-deep .service_box .service_item .service_pic {
    width: 55% !important;
    text-align: center !important;
    margin: auto !important;
    height: 19vw !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    margin-top: 6vw !important;
  }

  ::v-deep .service_box .service_item .service_txt {
    width: 100% !important;
    padding-left: 5px !important;
    padding-right: 5px !important;
    height: 8vw !important;
    display: flex !important;
    align-items: center !important;
    flex-flow: column !important;
    justify-content: center !important;
    margin-top: 4vw !important;
  }

  ::v-deep .service_box .row {
    padding-right: 15px;
    justify-content: center;
  }

  .service_box .row {
    padding-right: 15px;
  }

  .serve_con {
    text-align: left;
    padding: 5vw;
    color: #79828d;
  }

  .service_box .service_item {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    margin-bottom: 1.428rem;
    padding-right: 0;
  }

  .service_box .service_item img {
    max-width: 100%;
  }
}

@media only screen and (min-width: 760px) and (max-width: 7680px) {
  .service_pic img {
    max-width: 200px;
    // width: 6vw;
  }

  .service_txt {
    color: #505050;
    font-weight: 600;
  }

  .imgya {
    margin-left: 35px !important;
  }

  .serve_con {
    display: flex;
    justify-content: center;
    padding-top: 17.72px;
    margin: 0 200px;

    color: #79828D;
    text-align: center;
    font-family: Noto Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2px;
  }

  .service_box .service_item {
    // margin-bottom: 3.571rem;
  }
}

.service_box .service_item .service_hover {
  width: 173px;
  height: 173px;
  overflow: hidden;
  position: relative;
  // transition: all .3s ease-in-out;
  // box-shadow: 0 0 15px lightgray;
  border-radius: 1.071rem;
  cursor: pointer;
}

@media only screen and (min-width: 100px) and (max-width: 991px) {
  .service_box .service_item .service_hover {
    width: 100%;
    height: auto;
    padding-bottom: 1rem;
  }

  .service_box .service_item {
    position: relative;
  }

  .service_box .service_item:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto auto;
    border-radius: 20px;
    width: 97%;
    height: 108%;
    margin-left: 9.5px;
    z-index: 0 !important;
    background: linear-gradient(120deg,
        rgba(0, 123, 255, 0) 20%,
        rgba(0, 123, 255, 0.25),
        rgba(255, 255, 255, 0),
        #b3d7ff,
        rgba(255, 255, 255, 0),
        #4777d8,
        rgba(0, 123, 255, 0.25),
        rgba(0, 123, 255, 0.5),
        rgba(0, 123, 255, 0.25),
        rgba(255, 255, 255, 0));
    background-size: 482%;
    filter: blur(0px);
    transition: 1s;
    animation: animate 8s linear alternate
      /*,opacity 3s linear   alternate*/
    ;
  }

  @keyframes animate {
    0% {
      background-position: 0%;
    }

    50% {
      background-position: 100%;
    }

    75% {
      background-position: 75%;
    }

    100% {
      background-position: 0%;
    }
  }

  @keyframes opacity {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.5;
    }

    75% {
      opacity: 0.3;
    }

    100% {
      opacity: 0;
    }
  }
}

@media only screen and (min-width: 100px) and (max-width: 991px) {
  .service_box .service_item .service_hover {
    width: 100%;
    height: auto;
    padding-bottom: 1rem;
    z-index: 1 !important;
    background: #ecf7fc;
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1920px) {
  .service_box .service_item .service_hover {
    max-width: 100%;
  }
}

@media only screen and (min-width: 1000px) and (max-width: 1250px) {
  .service_box .service_item .service_hover {
    width: 17vw;
  }
}

.service_box .service_item:hover .service_hover {
  background: #9bd0f5;

  border-radius: 1.071rem;
  // box-shadow: 0 5px 15px lightgray;
  // transform: translate(2px, -2px);
}

.service_box .service_item .service_pic .service_txt {
  background-color: #b3d7ff;
}

.service_box .service_item:hover .service_hover p {
  color: #ffffff;
}

@media only screen and (min-width: 760px) and (max-width: 4096px) {
  .service_txt {
    .setWith {
      max-width: 106px;
    }
  }

  .service_box .service_item .service_pic {
    height: 7rem;
    line-height: 8rem;
  }
}

@media only screen and (min-width: 100px) and (max-width: 991px) {
  .service_box .service_item .service_pic {
    width: 55%;
    text-align: center;
    margin: auto;
    height: 19vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1920px) {
  .service_box .service_item .service_pic img {
    max-width: 120px;
  }
}

@media only screen and (min-width: 760px) and (max-width: 4096px) {
  .service_box .service_item .service_txt {
    // padding: 0 3rem 2rem;
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: center;
  }
}

@media only screen and (min-width: 100px) and (max-width: 760px) {
  .service_box .service_item .service_txt {
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
    height: 10vw;
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: center;
  }
}

.service_box p {
  color: #505050;
  font-size: 1.2rem;
  font-weight: 540;
  letter-spacing: 1px;
}

@media only screen and (min-width: 100px) and (max-width: 760px) {
  .service_box p {
    font-size: 1rem;
    padding-top: 0.2rem;
    font-weight: 540;
  }
}

@media only screen and (min-width: 1000px) and (max-width: 1440px) {
  ::v-deep .service_box .service_item .service_hover {
    width: 158px;
    height: 158px;
    overflow: hidden;
    position: relative;
    border-radius: 1.071rem;
    cursor: pointer;
  }

  .service_box .service_item .service_pic {
    line-height: 7rem;
    height: auto;
  }

  .service_box p {
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    /* or 133% */
    text-align: center;
    letter-spacing: 0.1em;
    color: #505050;
  }

  .serve_con {
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 0 27vw;
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #79828d;
    padding: 0;
    width: auto;
    margin-top: 2vw;
  }
}

@media screen and (max-width: 768px) {
  .mb-padding {
    padding: 0 1.25rem;
  }

  .serve-top {
    margin-top: 2.5rem;
  }

  .texts {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;

    h2 {
      margin-bottom: 0.5625rem;
      color: #79828D;
      text-align: center;
      font-family: Noto Sans;
      font-size: 25px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 2.5px;
    }

    p {
      color: #79828D;
      padding: 0;
      text-align: justify;
      font-family: Noto Sans;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.5px;
      margin: 27px auto 29px;
    }
  }

  .service_box_line {
    display: flex;
    flex-direction: column;

    &>div:nth-child(1) {
      padding-top: 20px;
      border-top: 1px solid #EBEBEB;
      color: #57B2F3;
      font-family: Noto Sans TC;
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 2.1px;
      position: relative;
    }

    &>div:nth-child(1)::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 1px;
      background: #299DF0;
      top: -1px;
      left: 0;
    }

    &>div:nth-child(2) {
      padding: 1.375rem 0;
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
      justify-items: center;

      &>div {
        border-radius: 1.25rem;
        background: #ECF7FC;
        width: 42.1333vw;
        height: 42.1333vw;

        &>a {
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: flex-end;
          width: 100%;
          height: 100%;
          align-items: center;
          border-radius: 1.25rem;

          &>div:nth-child(1) {
            width: 6.875rem;
            height: 6.875rem;
            border-radius: 1.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          &>div:nth-child(2) {
            color: #505050;

            text-align: center;
            font-family: Noto Sans;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
            /* 133.333% */
            letter-spacing: 1.5px;
          }

        }

        &>a:hover {
          border-radius: 1.25rem;
          background: #9BD0F5;
        }
      }
    }
  }

  .service_box3 {
    &>div:nth-child(1) {
      color: #FFB7B7;
    }

    &>div:nth-child(1)::before {
      background: #FF8585;
    }

    &>div:nth-child(2) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 1.25rem;

      &>div {
        background: #FFEBEB;

        &>a:hover {
          border-radius: 1.25rem;
          background: #FFB7B7;
        }
      }
    }
  }

  .mb-padding {
    &>a {
      display: flex;
      position: relative;
      width: fit-content;
      margin: 60px auto;

      &>div:nth-child(1) {
        position: absolute;
        width: 3.4375rem;
        right: -12%;
        top: -100%;
        z-index: 1;

        &>svg {
          width: 100%;
        }
      }

      &>div:nth-child(2) {
        &>div:nth-child(1) {
          margin-right: 0.3125rem;
        }

        display: flex;
        align-items: center;
        padding: .375rem 2.5rem .5rem 2.8125rem;
        background: #FFD333;
        border-radius: 4.625rem;
        color: #FFF;
        font-family: Noto Sans;
        font-size: 18.075px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.446px;
        position: relative;
        z-index: 10;
      }
    }
  }

  .box {
    .service_item {
      position: relative;
    }

    .service_item::before {
      content: "";
      background: url(https://static.cmereye.com/imgs/2023/09/5e0622e07d917d49.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      content: "";
      height: 27px;
      position: absolute;
      right: 6%;
      top: 50%;
      transform: translateY(-50%);
      width: 13px;
    }
  }

  .btn2 {
    display: none;
  }

  .btn1 {
    display: flex;
    align-items: center;

    &>div:nth-child(1) {
      margin-right: .375rem;
    }
  }
}

@media screen and (min-width: 768px) {
  .p_style_1 {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
  }

  .mbShow {
    display: none;
  }

  .serve-top {
    margin-top: 3rem;
  }

  @keyframes btnAnim {
    0% {
      clip-path: polygon(-10% 0, 0 0, -10% 100%, -20% 100%);
    }

    50% {
      clip-path: polygon(50% 0, 60% 0, 50% 100%, 40% 100%);
    }

    100% {
      clip-path: polygon(110% 0, 120% 0, 110% 100%, 100% 100%);
    }
  }

  .service_box_line {
    display: flex;
    border-top: 1px solid #EBEBEB;
    position: relative;

    &>div:nth-child(1) {
      flex: 1;
      font-family: Noto Sans TC;
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 2.1px;
      color: #57B2F3;
      padding-top: 19px;
    }

    &>div:nth-child(2) {
      flex: 4;
      display: grid;
      grid-template-rows: auto auto;
      /* 两行，自适应内容高度 */
      grid-template-columns: repeat(4, 1fr);
      /* 四列，每列平均分配剩余空间 */
      justify-items: center;
      max-width: 1220px;
      margin-bottom: 30px;

      &>div {
        flex: 1;
        width: 250px;
        height: 250px;
        margin: 0 15px;
        border-radius: 20px;
        background: #ECF7FC;
        margin-top: 30px;

        a {
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: flex-end;
          width: 100%;
          height: 100%;
          align-items: center;

          &>div:nth-child(1) {
            width: 150px;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          &>div:nth-child(2) {
            color: #505050;
            text-align: center;
            font-family: Noto Sans TC;
            font-size: 21px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 2.1px;
            margin-bottom: 29.4px;
          }
        }
      }

      &>div:hover {
        background: #9BD0F5;
      }
    }
  }

  .service_box1::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 30px;
    height: 1px;
    top: -1px;
    left: 0;
    background: #299DF0;
  }

  .service_box2::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 30px;
    height: 1px;
    top: -1px;
    left: 0;
    background: #299DF0;
  }

  .service_box3::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 30px;
    height: 1px;
    top: -1px;
    left: 0;
    background: #FF8585;
  }

  .service_box3 {
    &>div:nth-child(1) {
      color: #FFB7B7;
    }

    &>div:nth-child(2) {
      &>div {
        background: #FFEBEB;
      }

      &>div:hover {
        background: #FFB7B7;
      }
    }
  }

  .serve_btn {
    width: fit-content;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    margin: 90px auto 0;

  }

  .serve_btn {
    position: relative;
    text-decoration: none;

    &>div:nth-child(1) {
      position: absolute;
      top: -80%;
      right: -12%;
    }
  }

  .bp-btn .btn_pc_style {
    position: relative;
    display: flex;
    justify-content: center;
    max-width: 100%;
    width: fit-content;
    margin: 0 auto;
  }

  .btn_pc_style {
    &>div {
      display: flex;
    }
  }

  .bp-btn .btn_pc_style .btn1,
  .btn2 {
    box-shadow: 0px 1.74695px 3.4939px 0px rgba(157, 157, 157, 0.66);
    border-radius: 40px;
    padding: 10px 60px;
    background: #FFD333;
    cursor: pointer;
    top: 0;
    color: #FFF;
    font-family: 'Noto Sans CJK TC';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.92px;

    &>div:nth-child(1) {
      margin-right: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .bp-btn .btn_pc_style .btn2 {
    color: #79828D;
    background: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    animation: btnAnim .9s linear;
    animation-fill-mode: forwards;
    width: max-content;
    display: none;
  }

  .bp-btn .btn_pc_style:hover {
    .btn1 {
      color: #79828D;

      path {
        fill: #79828D;
      }
    }

    .btn2 {
      display: flex;
      animation: btnAnim .9s linear;
      animation-fill-mode: forwards;
    }
  }


  @keyframes btnAnim {
    0% {
      clip-path: polygon(-10% 0, 0 0, -10% 100%, -20% 100%);
    }

    50% {
      clip-path: polygon(50% 0, 60% 0, 50% 100%, 40% 100%);
    }

    100% {
      clip-path: polygon(110% 0, 120% 0, 110% 100%, 100% 100%);
    }
  }

}
</style>
