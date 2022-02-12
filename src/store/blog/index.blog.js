import mutations from "./mutations.blog";
import actions from "./actions.blog";
import getters from "./getters.blog";
import { getDate, getId } from "../../utilities/index";

const BlogModule = {
  state() {
    return {
      blogList: [
        {
          id: getId(),
          author: "Tien Thinh",
          title: "How to learn VueJS for Beginner",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum sed arcu non odio. Non sodales neque sodales ut etiam sit. Consectetur adipiscing elit duis tristique sollicitudin. Etiam sit amet nisl purus in mollis nunc. Mauris commodo quis imperdiet massa tincidunt nunc. Iaculis nunc sed augue lacus viverra vitae congue. Eros donec ac odio tempor orci dapibus ultrices. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Tristique sollicitudin nibh sit amet commodo. Vel facilisis volutpat est velit egestas dui id. Id diam vel quam elementum pulvinar etiam non quam. Fermentum dui faucibus in ornare quam viverra orci sagittis. Mauris sit amet massa vitae tortor. Dictumst vestibulum rhoncus est pellentesque. Aliquam id diam maecenas ultricies mi. Arcu risus quis varius quam quisque id diam vel. Sit amet commodo nulla facilisi. Elementum tempus egestas sed sed risus pretium quam vulputate. Dictum non consectetur a erat nam at lectus urna. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Amet est placerat in egestas erat imperdiet. Duis convallis convallis tellus id. Rhoncus dolor purus non enim praesent elementum facilisis. Consequat mauris nunc congue nisi vitae suscipit. Id consectetur purus ut faucibus pulvinar. Morbi tristique senectus et netus et malesuada fames ac. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Sit amet commodo nulla facilisi nullam. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Eu facilisis sed odio morbi quis commodo odio aenean. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.",
          createDate: getDate(),
          imageUrl:
            "https://cdn.dribbble.com/users/213309/screenshots/14137936/media/cfdc86de7e47f0fa2bd41233a72c906d.png?compress=1&resize=400x300",
        },
        {
          id: getId(),
          author: "Thuy Tien",
          title: "Love yourself and love everyone",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createDate: getDate(),
          imageUrl:
            "https://cdn.dribbble.com/users/213309/screenshots/14137936/media/cfdc86de7e47f0fa2bd41233a72c906d.png?compress=1&resize=400x300",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};

export default BlogModule;
