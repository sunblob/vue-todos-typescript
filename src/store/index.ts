import { Todo } from '@/models/Todo';
import Vue from 'vue';

const INITIAL_DATA = {
  todos: [
    new Todo('Title 1', 'Epic description'),
    new Todo('Title 2', 'Epic description 2'),
    new Todo('Title 3', 'Epic description 3'),
  ],
};

const store = {
  state: {
    todos: [],
  },
  actions: {
    initStore(state: Record<any, any>) {
      const todos = localStorage.getItem('my_todos');
      const parsedTodos = JSON.parse(todos!);

      if (!parsedTodos || !parsedTodos.length) {
        INITIAL_DATA.todos.forEach((todo, index) => {
          // state.todos
          Vue.set(state.todos, index, todo);
        });
      } else {
        parsedTodos.forEach((todo: Todo, index: number) => {
          // state.todos.push(todo);
          Vue.set(state.todos, index, todo);
        });
        // Vue.set(state.todos, 'todos', JSON.parse(todos));
      }

      console.log(state.todos);

      return state.todos;
    },
    createTodo(state: Record<any, any>, todo: Todo) {
      state.todos.push(new Todo(todo.title, todo.description));
      localStorage.setItem('my_todos', JSON.stringify(state.todos));
    },
    updateTodo(state: Record<any, any>, todoUpdate: Todo) {
      const idx = state.todos.findIndex(
        (todo: Todo) => todo._id === todoUpdate._id
      );

      Vue.set(state.todos, idx, todoUpdate);
      localStorage.setItem('my_todos', JSON.stringify(state.todos));
    },
    deleteTodo(state: Record<any, any>, todoId: string) {
      const idx = state.todos.findIndex((todo: Todo) => todo._id === todoId);

      state.todos.splice(idx, 1);
      localStorage.setItem('my_todos', JSON.stringify(state.todos));
    },
  },

  dispatch(action: string, payload?: any) {
    if (!this.actions[action]) return;
    return this.actions[action](this.state, payload);
  },
};

export default store;
