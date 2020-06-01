import { ArticlesService, CommentsService } from "../common/api.service";
const state = {
  article: {
    author: {},
    title: "",
    description: "",
    body: "",
    tagList: [],
  },
  comments: [],
};

const getters = {
  article(state) {
    return state.article;
  },
  comments(state) {
    return state.comments;
  },
};

const actions = {
  async fetch_article({ commit }, slug) {
    const { data } = await ArticlesService.get(slug);
    commit("set_article", data.article);
  },
  async fetch_comments({commit}, slug) {
    const { data } = await CommentsService.get(slug);
    commit('set_comments', data.comments);
  },
  async comment_create({ dispatch}, payload) {
    await CommentsService.post(payload.slug, payload.comment);
    dispatch('fetch_comment', payload.slug)
  }
};

const mutations = {
  set_article(state, article) {
    state.article = article;
  },
  set_comments(state, comments) {
    state.comments = comments;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
