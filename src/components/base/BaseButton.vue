<template>
  <div class="base-button-wrapper">
    <button v-if="type === 'button'" class="base-button">
      <slot></slot>
    </button>
    <router-link :to="toProp" v-if="type === 'router'" class="base-router">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["toProp", "type"],
};
</script>

<style lang="scss">
.base-button-wrapper {
  margin: 28px 0 !important;
  .base-router {
    background-color: rgb(136, 111, 111);
    padding: 12px 32px;
    color: rgb(238, 238, 238);
    border-radius: 8px;
  }
  .base-button {
    background-color: rgb(156, 112, 112);
    padding: 12px 32px;
    color: rgb(238, 238, 238);
    border-radius: 8px;
    font-family: "Lora", serif;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
}
</style>