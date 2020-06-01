<template>
  <div>
    <form @submit.prevent="onSubmit(slug, comment)">
      <div>
        <textarea
          rows="3"
          placeholder="write a comment"
          v-model="comment"
        ></textarea>
      </div>
      <div>
        <img :src="userImage" />
        <button type="submit">Post Comment</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CommentEditor",
  props: {
    slug: { type: String, required: true },
    userImage: { type: String, required: true },
  },
  data() {
    return {
      comment: null,
    };
  },
  methods: {
    onSubmit(slug, comment) {
      this.$store
        .dispatch("comment_create", { slug, comment })
        .then(() => {
          this.comment = null;
        })
        .catch(() => {});
    },
  },
};
</script>

<style></style>
