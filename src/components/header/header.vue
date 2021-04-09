<template>
  <div id="setHeader">
    <header class="header box-padding">
      <div class="navigation__container">
        <div class="nav_left">
          <div class="nav_logo"></div>
        </div>
        <nav class="nav_right">
          <template v-for="nav in state.navList" :key="nav.id">
            <ul
              :class="{ active: nav.id == state.nav_dynamic }"
              @mousemove="navClick(nav.id)"
              class="nav_menu_list"
            >
              <li>
                <a
                  style="display: inline-block; height: 100%"
                  :href="nav.href"
                  >{{ nav.name }}</a
                >
              </li>
            </ul>
          </template>
        </nav>
      </div>
    </header>
  </div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(items, key) in state.swiperList"
        :key="key"
      >
        <div class="swiper-BgMap">
          <img :src="items.bgMap" :alt="items.alt" style="width:100%;height:100%;" />
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";

import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
SwiperCore.use([Pagination, Navigation, Autoplay]);
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

export default defineComponent({
  setup(prop, context) {
    // reactive()函数接收一个普通对象，返回一个响应式的数据对象。类似于vue2的state方法
    const state = reactive({
      nav_dynamic: 0,
      navList: [
        {
          id: 0,
          name: "index",
          href: "/index.html",
        },
        {
          id: 1,
          name: "about",
          href: "/about.html",
        },
        {
          id: 2,
          name: "home",
          href: "/home.html",
        },
      ],
      swiperList: [
        {
          id: 0,
          bgMap: require("../../assets/banner/banner_03.png"),
          alt: "背景图第一张",
        },
        {
          id: 1,
          bgMap: require("../../assets/banner/banner_03.png"),
          alt: "背景图第二张",
        },
        {
          id: 2,
          bgMap: require("../../assets/banner/banner_03.png"),
          alt: "背景图第三张",
        },
      ],
    });

    onMounted(() => {
      createSwiper();
    });
    const createSwiper = () => {
      new SwiperCore(".swiper-container", {
        loop: true,
        autoplay: true, //可选选项，自动滑动
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    };
    //将响应式数据对象return出去供template使用
    return {
      state,
      navClick(index: number) {
        state.nav_dynamic = index;
      },
    };
  },
});
</script>
<style lang="scss" src="./style.scss"></style>
<style lang="scss">
.swiper-container {
  --swiper-theme-color: #e45612; /* 设置Swiper风格 */
  --swiper-navigation-color: #00ff33; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px; /* 设置按钮大小 */
}
.active {
  border-bottom: 6px solid #eb0180;
}
</style>