<template>
    <div class="col-md-6">
      <div class="list-group">
        <TaskItem v-bind:item="item" v-on:click-complete="onCompleted" v-bind:tag="tag" v-for="item in items"></TaskItem>
      </div>
    </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  name: 'TaskList',
  props: {
    items: Array,
    tag: Boolean
  },
  components: {
    TaskItem
  },
  methods: {
    onCompleted(id) {
      this.$emit('click-complete', id);
    }
  }
}
</script>
