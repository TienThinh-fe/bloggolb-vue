<template>
  <div class="blog-list-wrapper">
    <div class="title">Blogs</div>
    <ul>
      <blog-thumb
        v-for="blog in blogList"
        :key="blog.id"
        :id="blog.id"
        :title="blog.title"
        :content="blog.content"
        :author="blog.author"
        :createDate="blog.createDate"
        :imageUrl="blog.imageUrl"
      ></blog-thumb>
    </ul>
  </div>
</template>

<script>
import BlogThumb from "./BlogThumb.vue";

export default {
  components: {
    BlogThumb,
  },
  computed: {
    blogList() {
      return this.$store.getters.getBlogList;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-list-wrapper {
  max-width: 80%;
  margin: 0 auto;
  .title {
    margin: 40px 0;
    font-size: 44px;
  }
}
</style>