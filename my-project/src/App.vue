<template>
  <div id="app" class="container mt-5">
    <div class="row justify-content-md-center">
    <TaskMenu v-on:click-select="onSelected" v-bind:items="menus" />
    <TaskList  v-bind:tag="currentMenuStatus" v-on:click-complete="onCompleted" v-bind:items="tasks" />
    </div>
  </div>
</template>

<script>
import TaskMenu from './components/TaskMenu.vue';
import TaskList from './components/TaskList.vue';
import axios from 'axios';
import * as R from 'ramda';

export default {
  name: 'app',
  components: {
    TaskMenu,
    TaskList
  },
  data() {
    return {
      menus: [
        {
          tag: false,
          text: '未完成'
        },
        {
          tag: true,
          text: '完成'
        }
      ],
      currentMenuStatus: false,
      tasks: [] // [{id, title, content, completed, createAt, completeAt }]Î
    };
  },
  beforeCreate() {
    axios
      .get('https://api.myjson.com/bins/oufit')
      .then(response => response.data)
      .then(data => (this.tasks = data))
      .catch(console.log);
  },
  methods: {
    onSelected(tag) {
      this.currentMenuStatus = tag;
    },
    onCompleted(id) {
      var index = R.findIndex(R.propEq('id', id))(this.tasks);
      this.tasks[index].completed = true;
      this.save();
    },
    save() {
      axios
        .put('https://api.myjson.com/bins/oufit', this.tasks)
        .then(response => response.data)
        .then(data => alert('更新成功'))
        .catch(console.log);
    }
  }
};
</script>
