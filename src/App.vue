<template>
  <div id="app">
    <div class="window-layout">
      <div class="window-left-nav xy-drag">
        <mu-avatar color="red">
          L
        </mu-avatar>
        <mu-button icon v-for="nav in leftNav" :key="nav.id" :class="getLeftNavClass(nav.id)"
                   @click="toggleLeftNav(nav.id)">
          <mu-icon :value="nav.icon"></mu-icon>
        </mu-button>
        <div class="window-left-bottom">
          <mu-button icon>
            <mu-icon size="18" value="add"></mu-icon>
          </mu-button>
          <mu-button icon>
            <mu-icon size="18" value="star_border"></mu-icon>
          </mu-button>
          <mu-button icon>
            <mu-icon size="18" value="settings"></mu-icon>
          </mu-button>
        </div>
      </div>
      <div class="window-content">
        <keep-alive>
          <component v-bind:is="currentTabComponent"></component>
        </keep-alive>
      </div>
    </div>
    <div class="window-tools">
      <mu-icon @click="minWindow" value="remove"></mu-icon>
      <mu-icon @click="toggleWindowMinMax" value="fullscreen"></mu-icon>
      <mu-icon @click="closeApp" class="close" value="close"></mu-icon>
    </div>
  </div>
</template>
<script>
  import MainChat from './components/main/chat'
  import MainApps from './components/main/apps'
  import MainNews from './components/main/news'

  export default {
    name: 'app',
    components: {MainChat, MainApps, MainNews},
    data() {
      return {
        leftNavActiveed: 'chat',
        leftNav: [
          {
            id: 'chat',
            icon: 'chat'
          },
          {
            id: 'apps',
            icon: 'apps'
          },
          {
            id: 'news',
            icon: 'fiber_new'
          }
        ]
      }
    },
    computed: {
      currentTabComponent: function () {
        console.log(this.leftNavActiveed)
        return 'main-' + this.leftNavActiveed.toLowerCase()
      }
    },
    methods: {
      toggleLeftNav(leftNavActiveed) {
        this.leftNavActiveed = leftNavActiveed;
      },
      getLeftNavClass(leftNavActiveed) {
        return this.leftNavActiveed === leftNavActiveed ? 'nav-active' : '';
      },
      closeApp() {
        this.$toast.success('关闭APP')
      },
      toggleWindowMinMax() {
        this.$toast.message('最大化 还原')
      },
      minWindow() {
        this.$toast.message('最小化')
      }
    }
  }
</script>

<style lang="less">
  @import "less/app";
  @import "less/window";
</style>
