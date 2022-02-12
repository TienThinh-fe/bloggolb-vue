<template>
  <div class="blog-detail-wrapper">
    <div class="context">
      <div class="title noselect">{{ title }}</div>
      <div class="author">By {{ author }}</div>
      <div class="date">{{ createDate }}</div>
      <div class="content">
        <p>{{ content }}</p>
      </div>
    </div>
    <div class="image">
      <img :src="imageUrl" alt="" />
    </div>
    <base-button type="button" @click="removeBlog"
      >Remove this post</base-button
    >
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    blog() {
      return this.$store.getters.getBlogWithId(this.id);
    },
    title() {
      return this.blog.title;
    },
    author() {
      return this.blog.author;
    },
    content() {
      return this.blog.content;
    },
    createDate() {
      return this.blog.createDate;
    },
    imageUrl() {
      return this.blog.imageUrl;
    },
  },
  methods: {
    removeBlog() {
      console.log(1);
      this.$store.commit("removeBlog", { id: this.id });
      this.$router.replace("/home");
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-detail-wrapper {
  max-width: 80%;
  margin: 100px auto;
  .context {
    .title {
      font-size: 88px;
      font-weight: 500;
      padding-bottom: 20px;
    }
    .author,
    .date {
      font-size: 14px;
      font-weight: 400;
      padding-bottom: 20px;
      font-style: italic;
    }
    .content {
      margin-bottom: 32px;
      p {
        font-size: 20px;
        line-height: 36px;
      }
    }
  }
}
</style>