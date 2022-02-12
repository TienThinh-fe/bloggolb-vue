<template>
  <div class="add-blog-wrapper">
    <header>
      <div>BLOGGOLB CREATING</div>
      <router-link to="/home">Go back Home</router-link>
    </header>
    <blog-add></blog-add>
  </div>
</template>

<script>
import BlogAdd from "../components/blog/BlogAdd.vue";

export default {
  components: {
    BlogAdd,
  },
};
</script>

<style lang="scss" scoped>
.add-blog-wrapper {
  background-color: rgb(241, 227, 212);
  display: flex;
  flex-direction: column;
  padding: 32px 0;

  header {
    max-width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    div {
      font-size: 28px;
      font-weight: 500;
    }
    a {
      color: black;
    }
  }

  div {
    width: 80%;
    margin: 0 auto;
  }
}
</style>