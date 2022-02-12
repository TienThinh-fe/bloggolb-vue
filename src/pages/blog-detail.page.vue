<template>
  <div class="blog-page-wrapper">
    <header>
      <div>BLOGGOLB READER</div>
      <router-link to="/home">Go back Home</router-link>
    </header>
    <transition appear appear-active-class="fade-enter-active">
      <blog-detail :id="id"></blog-detail>
    </transition>
  </div>
</template>

<script>
import BlogDetail from "../components/blog/BlogDetail.vue";

export default {
  components: {
    BlogDetail,
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.blog-page-wrapper {
  height: fit-content;
  background-color: rgb(255, 237, 219);
  padding: 32px 0;

  header {
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    div {
      font-size: 28px;
      font-weight: 500;
    }
    a {
      color: black;
    }
  }
}

.fade-enter-active {
  animation: go ease-out 1.5s;
}

@keyframes go {
  from {
    transform: translateY(1000px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
