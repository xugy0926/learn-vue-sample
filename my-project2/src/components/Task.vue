<template>
  <div>
    <mt-cell :title="item.title" v-for="item in items" :key="item.id"></mt-cell>
  </div>
</template>

<script>
import { Cell } from 'mint-ui'
import { getTask } from '../api/getTask'


export default {
  name: 'Task',
  data () {
    return {
      items: []
    }
  },
  components: {
    Cell
  },
  created () {
    getTask(false).then(data => this.items = data)
  },
}
</script>
