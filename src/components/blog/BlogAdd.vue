<template>
  <div class="add-blog-form">
    <form>
      <div class="form-control">
        <label for="title">Title (*)</label>
        <input
          class="input-field"
          type="text"
          id="title"
          v-model.trim="titleInput.value"
          @focus="handleTypeAction"
        />
      </div>
      <div class="form-control">
        <label for="author">Author (*)</label>
        <input
          class="input-field"
          type="text"
          id="author"
          v-model.trim="authorInput.value"
          @focus="handleTypeAction"
        />
      </div>
      <div class="form-control">
        <label for="content">Content (*)</label>
        <textarea
          class="input-field"
          type="text"
          id="content"
          v-model.trim="contentInput.value"
          @focus="handleTypeAction"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="image">Image (Enter an url)</label>
        <input
          class="input-field"
          type="text"
          id="image"
          v-model.trim="imageInput.value"
          @focus="handleTypeAction"
        />
      </div>
      <p v-if="!formIsValid">
        Oopss! Some thing is empty or too short, make your story more attractive
      </p>
      <base-button
        class="add-blog-btn"
        toProp="/home"
        :type="'button'"
        @click="handleAddBlog($event)"
        >Add your blog</base-button
      >
    </form>
  </div>
</template>

<script>
import { getDate, getId } from "../../utilities/index";

export default {
  data() {
    return {
      titleInput: { value: "", isValid: true },
      contentInput: { value: "", isValid: true },
      authorInput: { value: "", isValid: true },
      imageInput: { value: "", isValid: true },
      formIsValid: true,
    };
  },
  methods: {
    formValidation() {
      if (
        this.titleInput.value === "" ||
        this.contentInput.value === "" ||
        this.authorInput.value === ""
      ) {
        this.formIsValid = false;
      }
      if (this.contentInput.value.length < 100) {
        this.formIsValid = false;
      }
    },
    handleTypeAction() {
      this.formIsValid = true;
    },
    handleAddBlog(event) {
      event.preventDefault();

      this.formValidation();

      if (!this.formIsValid) {
        return;
      }

      const newBlog = {
        id: getId(),
        title: this.titleInput.value,
        content: this.contentInput.value,
        author: this.authorInput.value,
        createDate: getDate(),
        imageUrl: this.imageInput.value,
      };

      this.$store.commit("addBlog", newBlog);

      console.log(this.$store.getters.getBlogList);

      this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss" scoped>
.add-blog-form {
  width: 80%;
  margin: 32px auto;
  form {
    .form-control {
      label {
        font-size: 16px;
        font-weight: 500;
        display: block;
        margin-bottom: 8px;
      }
      .input-field {
        width: 90%;
        padding: 12px 20px;
        margin-bottom: 20px;
        font-family: "Lora", serif;
        border: 1px solid black;
        border-radius: 4px;
      }
      textarea {
        resize: none;
        min-height: 300px;
      }
    }
    .add-blog-btn {
      width: fit-content;
    }
  }
}
</style>