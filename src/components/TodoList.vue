<template>
  <div class="todo-list">
    <div v-if="todos && todos.length > 0">
      <todo-item
        v-for="todo in todos"
        :key="todo._id"
        :title="todo.title"
        :description="todo.description"
        :_id="todo._id"
      />
    </div>
    <div v-else class="no-todos">
      No todos :(
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TodoItem from '@/components/TodoItem.vue';
import { Todo } from '@/models/Todo';

@Component({
  components: {
    TodoItem,
  },
})
export default class TodoList extends Vue {
  @Prop(Array)
  readonly todos!: Todo[];
}
</script>

<style lang="scss" scoped>
.todo-list {
  flex: 1;
}

.no-todos {
  padding: 20px;
  font-size: 23px;
  font-weight: bold;
  text-align: center;
}
</style>
