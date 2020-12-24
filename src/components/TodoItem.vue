<template>
  <div v-if="!editMode" class="todo-item">
    <div class="todo-item-content">
      <div class="todo-item-content-title">
        {{ title }}
      </div>
      <div class="todo-item-content-description">
        {{ description }}
      </div>
    </div>
    <div class="buttons-wrapper">
      <the-button @click="editMode = true" isWarning>Edit</the-button>
      <the-button @click="deleteTodo" isDanger>Delete</the-button>
    </div>
  </div>
  <div v-else class="todo-item">
    <form class="app-form">
      <div class="form-control">
        <label class="label">Title</label>
        <input
          type="text"
          class="form-input"
          placeholder="Todo title"
          v-model="todo.title"
        />
      </div>
      <div class="form-control">
        <label class="label">Description</label>
        <textarea
          v-model="todo.description"
          rows="2"
          type="text"
          class="form-input"
          placeholder="Todo description"
        ></textarea>
      </div>
      <div class="buttons-wrapper">
        <the-button @click.prevent="editTodo" isWarning>Update</the-button>
        <the-button @click.prevent="editMode = false" isDanger
          >Cancel</the-button
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TheButton from '@/components/TheButton.vue';
import store from '@/store';

@Component({
  components: {
    TheButton,
  },
})
export default class TodoItem extends Vue {
  @Prop(String)
  readonly title!: string;

  @Prop(String)
  readonly description!: string;

  @Prop(String)
  readonly _id!: string;

  editMode = false;

  todo = {
    _id: this._id,
    title: this.title,
    description: this.description,
  };

  editTodo() {
    store.dispatch('updateTodo', { ...this.todo });
    this.editMode = false;
  }

  deleteTodo() {
    store.dispatch('deleteTodo', this.todo._id);
  }
}
</script>

<style lang="scss" scoped>
.buttons-wrapper {
  display: flex;
  gap: 5px;
}

.todo {
  &-item {
    background-color: gray;
    min-height: 60px;
    margin: 10px;
    padding: 10px;
    color: white;
    border-radius: 5px;
    font-size: 23px;
    text-align: start;

    &-content {
      margin-bottom: 10px;
      &-title {
        font-weight: bold;
      }

      &-description {
        font-size: 19px;
      }
    }
  }
}
</style>
