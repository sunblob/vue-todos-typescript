<template>
  <div
    class="modal"
    :class="{ 'is-active': isOpen }"
    @click.self="emitCloseModal"
  >
    <div class="modal-content">
      <span class="close" @click="emitCloseModal">&times;</span>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import TheButton from '@/components/TheButton.vue';

@Component({
  components: {
    TheButton,
  },
})
export default class TheModal extends Vue {
  @Prop(Boolean)
  readonly isOpen!: boolean;

  emitCloseModal() {
    this.$emit('close-modal');
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  &.is-active {
    display: block;
  }

  &-content {
    position: relative;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 40%;
    border-radius: 10px;

    .close {
      color: #aaa;
      line-height: 1rem;
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 28px;
      font-weight: bold;
      transition: color 0.2s ease-in-out;

      &:hover {
        cursor: pointer;
        color: #333;
      }
    }
  }
}
</style>
