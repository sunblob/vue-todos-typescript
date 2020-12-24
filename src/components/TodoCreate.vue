<template>
  <div>
    <the-button @click="openModal" width="100%" fontSize="23px"
      >Create</the-button
    >
    <the-modal :isOpen="isModalOpen" @close-modal="closeModal">
      <form class="app-form">
        <div class="form-control">
          <label class="label">Title</label>
          <input
            v-model="form.title"
            type="text"
            class="form-input"
            placeholder="Todo title"
          />
        </div>
        <div class="form-control">
          <label class="label">Description</label>
          <textarea
            rows="5"
            v-model="form.description"
            type="text"
            class="form-input"
            placeholder="Todo description"
          ></textarea>
        </div>
        <div class="app-error">
          <div class="form-error">
            {{ formError }}
          </div>
        </div>
        <the-button
          @click.prevent="createTodo"
          isGreen
          width="100%"
          fontSize="23px"
          >Confirm</the-button
        >
      </form>
    </the-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import TheModal from '@/components/TheModal.vue';
import TheButton from '@/components/TheButton.vue';

@Component({
  components: {
    TheModal,
    TheButton,
  },
})
export default class TodoCreate extends Vue {
  isModalOpen = false;

  form = {
    title: '',
    description: '',
  };

  formError = '';

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  get isFormValid() {
    return this.form.title.trim() && this.form.description.trim()
      ? true
      : false;
  }

  createTodo() {
    if (this.isFormValid) {
      this.$emit('todo-created', { ...this.form });
      this.isModalOpen = false;
      this.resetForm();
    } else {
      this.formError = 'Form Error! Title and description must not be empty!';
    }
  }

  resetForm() {
    this.form.title = '';
    this.form.description = '';
  }
}
</script>

<style lang="scss" scoped>
.form-error {
  margin: 5px 0 10px 0;
  text-align: start;
}
</style>
