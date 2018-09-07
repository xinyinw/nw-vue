<template>
  <div class="chat-view">
    <div class="chat-lastlist">

    </div>
    <div class="chat-content">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'chatView'
  }
</script>

<style lang="less" scoped>
.chat-view{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .chat-lastlist{
    width: 270px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: #c1c1c1;
  }
  .chat-content{
    position: absolute;
    left: 270px;
    top: 0;
    bottom: 0;
    right: 0;
    background: #FFFFFF;
  }
}
</style>
