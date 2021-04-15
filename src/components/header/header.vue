<template>
  <div id="setHeader">
    <header class="navigation box-padding">
      <div class="navigation__container">
        <div class="nav_left">
          <div class="nav_logo"></div>
        </div>
        <nav class="nav_right">
          <template v-for="nav in navList" :key="nav.id">
            <ul
              @mousemove="moveNav(nav.id)"
              @mouseleave="leaveNav"
              class="nav_menu_list"
            >
              <li :class="{ active: nav.id == is_open }"> 
                <a class="nav_menu_list_link" :href="nav.href">{{ $t(`nav.${nav.title}`) }}</a>
                <ul v-if="nav.id == is_open" class="menu_chidren">
                  <li class="menu_chidren_item" v-for="(item,idx) in nav.children" :key="idx">
                    <a class="menu_chidren_item_link" target="_blank" :href="item.link">{{ item.label }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </template>
          <span style="margin-top: 1.25rem;cursor: pointer;" @click="switchLanguage">{{ local }}</span>
        </nav>
      </div>
    </header>
  </div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(items, key) in swiperList"
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
import { computed, defineComponent, onMounted, reactive,ref,toRefs } from "vue";
import { useStore } from 'vuex';
import { useI18n } from "vue-i18n";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
SwiperCore.use([Pagination, Navigation, Autoplay]);
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import { setItem } from '../../utils/storage/storage';

export default defineComponent({
  name:'',
  components:{},
  setup(prop, context) {
    const store = useStore();
    const i18n = useI18n();
    // 在vue3中有两种构建响应式对象的方法：reactive和ref
    // reactive()函数接收一个普通对象，返回一个响应式的数据对象。
    // 在使用之前需要导入 const msg = ref(999);
    // import { reactive,ref } from 'vue'
    // return {} 要return 出去
    const state = reactive({
      local: i18n.locale.value == 'cn' ? '英文' : '中文',
      is_open: -1,
      navList: [
        {
          id: 0,
          title: 'home',
          href: "/index.html",
          children:[
            {
              label: '首页11',
              link: "/index.html",
            },
            {
              label: '首页12',
              link: "/index.html",
            }
          ]
        },
        {
          id: 1,
          title:'services',
          href: "/about.html",
          children:[
            {
              label: '服务1',
              link: "/index.html",
            },
            {
              label: '服务2s服务1',
              link: "https://www.baidu.com",
            }
          ]
        },
        {
          id: 2,
          title: 'caseShows',
          href: "/home.html",
          children:[
            {
              label: '服务1',
              link: "/index.html",
            },
            {
              label: '服务2s',
              link: "https://www.baidu.com",
            }
          ]
        },
        {
          id: 3,
          title: 'solution',
          href: "/home.html",
          children:[
            {
              label: '服务1服务1服务1',
              link: "/index.html",
            },
            {
              label: '服务2s',
              link: "https://www.baidu.com",
            }
          ]
        },
        {
          id: 4,
          title: 'contactUs',
          href: "/home.html",
          children:[
            {
              label: '服务1服务1服务1',
              link: "/index.html",
            },
            {
              label: '服务2s',
              link: "https://www.baidu.com",
            }
          ]
        }
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

    const deviceComputed = computed({
      get:() => {
       return store.state.device;
      },
      set:(val:any) => {
       
      },
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
    const moveNav = (index: number) => {
        state.is_open = index;
    };
    const leaveNav = () => {
        state.is_open = -1;
    };
   
    const switchLanguage = () => {
      const locale = i18n.locale.value === "cn" ? "en" : "cn";
      i18n.locale.value = locale;
      setItem('locale',locale);
      state.local = locale == 'cn' ? '英文' : '中文';
    }
    //将响应式数据对象return出去供template使用
    return {
      // 将代理对象转换为纯对象。并使用扩展操作符展开，方便使用，否则使用方式为state.???方式。转换后可以直接使用state里的对象属性
      ...toRefs(state),
      i18n,
      deviceComputed,
      moveNav,
      leaveNav,
      switchLanguage,
    };
  },
});
</script>
<style lang="scss" src="./style.scss"></style>