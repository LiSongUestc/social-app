import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from './jwt.service'

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = "https://conduit.productionready.io/api";
  },
  setHeader() {
    Vue.axios.defaults.headers.common['Authorization'] = `Token ${JwtService.getToken()}`
  },
  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },
  get() {
    return Vue.axios.get('user');
  }
};
export const ArticlesService = {
  query(type, params) {
    return Vue.axios.get("articles" + (type === "feed" ? "/feed" : ""), params);
  },
  get(slug) {
    return Vue.axios.get(`articles/${slug}`);
  },
};
export const CommentsService = {
  get(slug) {
    return Vue.axios.get(`articles/${slug}/comments`)
  },
  post(slug, payload) {
    return Vue.axios.post(`articles/${slug}/comments`, {
      comment: {
        body: payload
      }
    })
  }
}

export default ApiService;
