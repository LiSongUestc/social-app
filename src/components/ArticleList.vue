<template>
  <div>
      <ArticlePreview 
        v-for="(article,index) in articles"
        :key="index+article.title"
        :article="article"
      />
      <Pagination />
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import ArticlePreview from './ArticlePreview'
import Pagination from './Pagination'
export default {
    name:'ArticleList',
    props:{
        type:{
            type:String,
            default: 'all',
            required: false
        }
    },
    components:{
      ArticlePreview,
      Pagination
    },
    computed:{
      listConfig(){
        const type = this.type;
        const filter = {
          limit: 20
        };
        return {type, filter}
      },
      ...mapGetters(['articles'])
    },
    mounted(){
      this.fetchArticles();
    },
    methods:{
      fetchArticles(){
        this.$store.dispatch("fetch_articles",this.listConfig)
      }
    }
}
</script>

<style>

</style>