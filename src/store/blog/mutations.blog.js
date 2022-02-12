const mutations = {
  addBlog(state, payload) {
    state.blogList.unshift(payload);
  },
  removeBlog(state, payload) {
    console.log(payload);
    state.blogList = state.blogList.filter((blog) => blog.id !== payload.id);
    console.log(state.blogList);
  },
};

export default mutations;
