<template>
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" v-if="item.completed === tag">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ item.title }}</h5>
      <small>{{ item.createAt }}</small>
    </div>
    <p class="mb-1">{{ item.content }}</p>
    <small v-if="item.completed">已完成</small>
    <div class="float-right" v-else>
      <button class="btn btn-primary btn-sm" v-on:click="onCompleted(item.id)">完成</button>
    </div>
  </a>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    item: Object, 
    tag: Boolean
  },
  methods: {
    onCompleted(id) {
      this.$emit('click-complete', id);
    }
  }
}
</script>
