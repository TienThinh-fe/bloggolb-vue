import { createStore } from "vuex";

import BlogModule from "./blog/index.blog";

const store = createStore({
  modules: {
    blog: BlogModule,
  },
});

export default store;
