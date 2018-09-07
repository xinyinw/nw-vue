<template>
  <div id="app">
    <div class="window-layout">
      <div class="window-left-nav">
        <mu-avatar color="red">
          L
        </mu-avatar>
        <mu-button icon v-for="nav in leftNav" :key="nav.id" :class="getLeftNavClass(nav.id)"
                   @click="toggleLeftNav(nav.id)">
          <mu-icon :value="nav.icon"></mu-icon>
        </mu-button>
        <div class="window-left-bottom">
          <mu-button icon>
            <mu-icon size="18" value="apps"></mu-icon>
          </mu-button>
          <mu-button icon>
            <mu-icon size="18" value="fiber_new"></mu-icon>
          </mu-button>
        </div>
      </div>
      <div class="window-content">
        <router-view></router-view>
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
  export default {
    name: 'app',
    data() {
      return {
        leftNavActiveed: 'chat',
        leftNav: [
          {
            id: 'chat',
            icon: 'chat',
            com: 'chat'
          },
          {
            id: 'apps',
            icon: 'apps',
            com: 'apps'
          },
          {
            id: 'fiber_new',
            icon: 'fiber_new',
            com: 'fiber_new'
          }
        ]
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
  @import "less/window";
</style>
