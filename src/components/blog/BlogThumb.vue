<template>
  <li>
    <div class="context">
      <h2 @click="goToDetails">{{ title }}</h2>
      <div class="content">
        <span>{{ overflowContent }}</span>
      </div>
      <div class="author">By {{ author }}</div>
      <div class="create-date">Posted at: {{ createDate }}</div>
      <base-button :type="'router'" :toProp="readMorePath"
        >Read more</base-button
      >
    </div>
    <div class="sample-image">
      <img :src="imageUrl" alt="sample" />
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "title", "author", "content", "createDate", "imageUrl"],
  computed: {
    overflowContent() {
      return this.content.length > 100
        ? `${this.content.substring(0, 100)}...`
        : this.content;
    },
    readMorePath() {
      return `/detail/${this.id}`;
    },
  },
  methods: {
    goToDetails() {
      this.$router.replace(this.readMorePath);
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  background-color: rgb(252, 243, 243);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 1;
  padding: 12px 24px;
  margin-bottom: 44px;
  border-radius: 8px;
  display: flex;

  .context {
    h2 {
      font-size: 32px;
      font-weight: 600;
      padding-bottom: 8px;
      cursor: pointer;
    }
    .author {
      font-size: 14px;
      padding-bottom: 8px;
    }
    .content {
      font-size: 16px;
      font-weight: 400;
      padding-bottom: 8px;
      line-height: 20px;
    }
    .create-date {
      font-size: 14px;
      padding-bottom: 8px;
    }
  }
  .sample-image {
    max-width: 100%;
    max-height: 100%;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: cover;
      width: 80%;
      height: 80%;
    }
  }
}
</style>