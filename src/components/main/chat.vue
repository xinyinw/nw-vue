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
        <mu-appbar style="width: 100%;">
          <mu-avatar slot="left">
            <img :src="nowChatView.headimg"/>
          </mu-avatar>
          {{nowChatView.title}}
        </mu-appbar>
      </div>
    </div>
    <div class="chat-lastlist">
      <mu-list textline="two-line" :value="lastListValue">
        <mu-list-item avatar button :ripple="true" @click="selectChat(item)" v-for="item in lastdata" :key="item.id"
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
    <div class="chat-putview">
      <div class="chat-putview-tools">
        <mu-button flat>
          <mu-icon value="insert_emoticon"></mu-icon>
        </mu-button>
        <mu-button flat>
          <mu-icon value="photo"></mu-icon>
        </mu-button>
        <mu-button flat>
          <mu-icon value="folder_open"></mu-icon>
        </mu-button>
        <mu-button flat>
          <mu-icon value="code"></mu-icon>
        </mu-button>
        <div class="chat-putview-tools-right">
          <mu-button flat>
            <mu-icon value="access_time" left></mu-icon>
            历史消息
          </mu-button>
        </div>
      </div>
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
        nowChatView: {
          id: 'test',
          headimg: 'https://cn.vuejs.org/images/logo.png',
          title: '小一',
          desc: '来了吗',
          lasttime: '2018-01-09 11:11:22'
        },
        lastdata: [
          {
            id: 'test',
            headimg: 'https://cn.vuejs.org/images/logo.png',
            title: '小一',
            desc: '来了吗',
            type: 'friend',
            lasttime: '2018-01-09 11:11:22'
          },
          {
            id: 'test2',
            headimg: 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
            title: '小二',
            desc: '来了',
            type: 'friend',
            lasttime: '2018-01-09 11:11:22'
          },
          {
            id: 'test3',
            headimg: 'https://www.easyicon.net/api/resizeApi.php?id=1175790&size=128',
            title: '群组',
            desc: '小二:来了',
            type: 'group',
            lasttime: '2018-01-09 11:11:22'
          }
        ]
      };
    },
    methods: {
      selectChat(chatdata) {
        this.lastListValue = chatdata.id;
        this.nowChatView = chatdata;
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
  .chat-putview-tools {
    .mu-flat-button .mu-button-wrapper {
      padding: 0 6px;
    }
  }
</style>
