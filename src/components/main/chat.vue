<template>
  <div class="chat-view">
    <div class="chat-title xy-drag">
      <div class="search-bar">
        <mu-auto-complete :data="fruits" label=" " :full-width="true" action-icon="search" v-model="searchValue" avatar
                          slot="left">
          <template slot-scope="scope">
            <mu-list-item-action>
              <mu-avatar color="primary">
                {{scope.item.substring(0, 1)}}
              </mu-avatar>
            </mu-list-item-action>
          </template>
        </mu-auto-complete>
      </div>
      <div class="chat-window-title">
        <mu-appbar style="width: 100%;" title="Title">

        </mu-appbar>
      </div>
    </div>
    <div class="chat-lastlist">
      <mu-list textline="two-line" :value="lastListValue">
        <mu-list-item avatar button :ripple="true" @click="selectChat(item.id)" v-for="item in lastdata" :key="item.id"
                      :value="item.id">
          <mu-list-item-action>
            <mu-avatar>
              <img :src="item.headimg">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{item.title}}</mu-list-item-title>
            <mu-list-item-sub-title>{{item.desc}}</mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action>
            <mu-list-item-after-text>{{item.lasttime}}</mu-list-item-after-text>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </div>
    <div class="chat-content">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'main-chat',
    data() {
      return {
        fruits: [],
        searchValue: '',
        lastListValue: 'test',
        lastdata: [
          {
            id: 'test',
            headimg: 'https://cn.vuejs.org/images/logo.png',
            title: '小一',
            desc: '来了吗',
            lasttime: '2018-01-09 11:11:22'
          },
          {
            id: 'test2',
            headimg: 'https://cn.vuejs.org/images/logo.png',
            title: '小二',
            desc: '来了',
            lasttime: '2018-01-09 11:11:22'
          }
        ]
      };
    },
    methods: {
      selectChat(id) {
        this.lastListValue = id;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../less/chat/chat";
</style>
<style lang="less">
  .chat-lastlist {
    .mu-item.is-selected {
      background: rgba(0, 0, 0, .1);
    }
  }
</style>
