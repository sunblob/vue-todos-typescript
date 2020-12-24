<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <todo-list :todos="todos" />
        <div class="todo-create-btn-container">
          <todo-create @todo-created="createTodo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from '@/components/TodoList.vue';
import TodoCreate from '@/components/TodoCreate.vue';
import TheButton from '@/components/TheButton.vue';

import { Todo } from '@/models/Todo';

import store from '@/store/index';

@Component({
  components: {
    TodoList,
    TodoCreate,
    TheButton,
  },
})
export default class App extends Vue {
  todos = store.state.todos;

  createTodo(todo: Todo) {
    store.dispatch('createTodo', todo);
  }

  created() {
    this.todos = store.dispatch('initStore');
    console.log(this.todos);
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app-error {
  color: #ff1212;
}

.todo {
  &-wrapper {
    display: flex;
    justify-content: center;
  }

  &-create-btn-container {
    margin: 10px;
  }

  &-container {
    width: 400px;
    min-height: 200px;
    background-color: #ededed;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }
}

.app-form {
  .label {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }

  .form-input {
    padding: 10px;
    font-size: 17px;
    border-radius: 5px;
    font-family: inherit;
    width: 100%;
    max-width: 100%;
    border: 1px solid #795899;

    &:focus {
      outline: none;
      box-shadow: 0 0 5px #592e85;
      border: 1px solid #592e85;
    }
  }

  .form-control {
    margin-bottom: 10px;
  }
}
</style>
