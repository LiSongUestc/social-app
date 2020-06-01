<template>
  <div>
    <div class="article-meta">
      <router-link to="">
        <img :src="article.author.image" />
        {{ article.author.username }}
      </router-link>
      <router-link :to="{name: 'article', params: {slug: article.slug}}">
        <h3 v-text="article.title"></h3>
        <p v-text="article.description"></p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name:'ArticlePreview',
    components:{

    },
    props:{
        article:{
            type: Object,
            required: true
        }
    }
};
</script>

<style></style>
