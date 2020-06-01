import { ArticlesService } from "../common/api.service";

const state = {
  articles: [],
  articleCount: 0,
};

const getters = {
  articleCount(state) {
    return state.articleCount;
  },
  articles(state) {
    return state.articles;
  },
};

const actions = {
  async fetch_articles({ commit }, params) {
    try {
      const res = await ArticlesService.query(params.type, params.filter);
      console.log(res.data)
      commit("set_articles", res.data);
    } catch (error) {
      throw new Error(error);
    }
  },
};

const mutations = {
  set_articles(state, data) {
    state.articles = data.articles;
    state.articleCount = data.articleCount;
  },
};

export default { state, getters, actions, mutations };
