const getters = {
  getBlogList(state) {
    return state.blogList;
  },
  hasBlog(state) {
    return state.blogList.length > 0;
  },
  getBlogWithId: (state) => (id) => {
    return state.blogList.find((blog) => blog.id === id);
  },
};

export default getters;
