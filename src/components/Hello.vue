<template>
  <div class="hello">
    <mu-container>
      <mu-button class="demo-button" color="primary" @click="open()">Alert</mu-button>
    </mu-container>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      open() {
        this.$alert('Hello world', 'Alert');
        this.$confirm('Hello world ?', 'Confirm');
        this.$prompt('Input Some I', 'Prompt');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
