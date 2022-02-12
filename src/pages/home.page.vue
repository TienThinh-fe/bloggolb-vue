<template>
  <div class="home-wrapper">
    <header>
      <h1 class="noselect">BLOGGOLB</h1>
      <div class="des noselect">An blog page built with VueJS</div>
      <base-button toProp="/add" :type="'router'">Add new blog</base-button>
    </header>
    <h3 v-if="!hasBlog">We are waiting for the first blog</h3>
    <blog-list v-else></blog-list>
  </div>
</template>

<script>
import BlogList from "../components/blog/BlogList.vue";

export default {
  components: {
    BlogList,
  },
  computed: {
    hasBlog() {
      return this.$store.getters.hasBlog;
    },
  },
};
</script>

<style lang="scss">
.home-wrapper {
  header {
    background-color: rgb(245, 210, 210);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 120px;
      font-weight: 600;
    }
    .des {
      margin-top: 16px;
      font-size: 20px;
    }
  }
}
</style>