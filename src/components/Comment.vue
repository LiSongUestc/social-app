<template>
  <div>
    <div>
      <p>{{ comment.body }}</p>
    </div>
    <div>
      <img :src="comment.author.image" alt="" />
      <span>{{ comment.author.username }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: {
    comment: { type: Object, required: true },
  },
};
</script>

<style></style>
