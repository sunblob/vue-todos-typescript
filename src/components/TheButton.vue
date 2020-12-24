<template>
  <!-- <button
    @click="onClick"
    class="button app-button"
    :class="{ 'is-green': isGreen }"
  > -->
  <button
    v-bind="$attrs"
    v-on="buttonListeners"
    class="button app-button"
    :class="{
      'is-green': isGreen,
      'is-danger': isDanger,
      'is-warning': isWarning,
    }"
    :style="{ width: width, 'font-size': fontSize }"
  >
    <slot>Button</slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  inheritAttrs: false,
})
export default class TheButton extends Vue {
  @Prop(Boolean)
  readonly isGreen?: boolean;
  @Prop(Boolean)
  readonly isWarning?: boolean;
  @Prop(Boolean)
  readonly isDanger?: boolean;

  @Prop(String)
  readonly width?: string;

  @Prop(String)
  readonly fontSize?: string;

  get buttonListeners() {
    // `Object.assign` объединяет объекты вместе, чтобы получить новый объект
    return Object.assign({}, this.$listeners);
  }
}
</script>

<style lang="scss" scoped>
.is-green {
  background-color: green !important;

  &:hover {
    background-color: darkgreen !important;
  }

  &:focus {
    background-color: darkgreen !important;
  }
}

.is-warning {
  background-color: #ffa753 !important;

  &:hover {
    background-color: #da812f !important;
  }

  &:focus {
    background-color: #da812f !important;
  }
}

.is-danger {
  background-color: #ff5a5a !important;

  &:hover {
    background-color: #ce4343 !important;
  }

  &:focus {
    background-color: #ce4343 !important;
  }
}

.button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}

.app-button {
  font-size: 1rem;
  border-radius: 5px;
  background-color: #795899;
  padding: 10px;
  font-weight: bold;
  color: white;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #592e85;
  }

  &:focus {
    outline: none;
    background-color: #592e85;
  }
}
</style>
