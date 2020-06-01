<template>
  <div>
    <div>
      <h3 v-text="article.title"></h3>
      <img :src="article.author.image" />
      <p v-text="article.author.username"></p>
    </div>
    <p>{{ article.body }}</p>
    <div>
      <CommentEditor
        :slug="slug"
        v-if="isAuthenticated"
        :userImage="currentUser.image"
      />
      <Comment
        v-for="(comment, index) in comments"
        :key="index"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../store";
import CommentEditor from "../components/CommentEditor";
import Comment from "../components/Comment";
export default {
  name: "RwArticle",
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  components: {
    CommentEditor,
    Comment,
  },
  computed: {
    ...mapGetters(["isAuthenticated", "article", "comments", "currentUser"]),
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch("fetch_article", to.params.slug),
      store.dispatch("fetch_comments", to.params.slug),
    ]).then(() => {
      next();
    });
  },
};
</script>

<style></style>
