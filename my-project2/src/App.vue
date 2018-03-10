<template>
  <div id="app">
    <router-view/>

    
    <mt-tabbar v-model="selected">
      <mt-tab-item id="task">
        <img slot="icon" src="http://placeholder.qiniudn.com/100x100">
        任务
      </mt-tab-item>
      <mt-tab-item id="history">
        <img slot="icon" src="http://placeholder.qiniudn.com/100x100">
        历史
      </mt-tab-item>
    </mt-tabbar>    
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui'
import router from './router'

export default {
  name: 'App',
  components: {
    Tabbar,
    TabItem
  },
  data () {
    return {
      selected: 'task',
      showNav: false
    }
  },
  watch: {
    selected (newValue, oldValue) {
      router.push(newValue)
    }
  }
}
</script>
