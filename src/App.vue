<template>
  <div id="app">
    <div class="window-layout">
      <div class="window-left-nav xy-drag">
        <mu-avatar color="red">
          L
        </mu-avatar>
        <mu-tooltip placement="right" :content="nav.title" v-for="nav in leftNav" :key="nav.id">
          <mu-button icon :class="getLeftNavClass(nav.id)"
                     @click="toggleLeftNav(nav.id)">
            <mu-icon :value="nav.icon"></mu-icon>
          </mu-button>
        </mu-tooltip>
        <div class="window-left-bottom">
          <mu-menu placement="right-end" :open.sync="openAddMenu">
            <mu-button icon>
              <mu-icon size="18" value="add"></mu-icon>
            </mu-button>
            <mu-list slot="content">
              <mu-list-item button>
                <mu-list-item-action class="mu-item-action-icon">
                  <mu-icon value="person_add"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>添加好友</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-list-item-action class="mu-item-action-icon">
                  <mu-icon value="group_add"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>创建群</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-list-item-action class="mu-item-action-icon">
                  <mu-icon value="location_city"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>创建企业</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-list-item-action class="mu-item-action-icon">
                  <mu-icon value="library_add"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>加入企业</mu-list-item-title>
              </mu-list-item>
            </mu-list>
          </mu-menu>
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
        openAddMenu: false,
        leftNavActiveed: 'chat',
        leftNav: [
          {
            id: 'chat',
            title: '消息',
            icon: 'chat'
          },
          {
            id: 'apps',
            title: '企业应用',
            icon: 'apps'
          },
          {
            id: 'news',
            title: '靠谱新闻',
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
