import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/home.page.vue";
import AddBlog from "./pages/add-blog.page.vue";
import BlogDetail from "./pages/blog-detail.page.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/add", component: AddBlog },
    { path: "/detail/:id", component: BlogDetail },
  ],
});

export default router;
