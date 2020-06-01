import ApiService from "../../src/common/api.service";
import JwtService from "../../src/common/jwt.service";
import jwtService from "../../src/common/jwt.service";

const state = {
  errors: null,
  isAuthenticated: JwtService.getToken() ? true : false,
  user: {},
};

const getters = {
  currentUser: (state) => state.user,
  isAuthenticated: (state) => state.isAuthenticated,
};

const actions = {
  async login({ commit }, paramData) {
    try {
      const res = await ApiService.post("users/login", {
        user: paramData.credentials,
      });
      commit("set_auth", res.data.user);
      paramData.$router.push({ name: "homeGlobal" });
    } catch (error) {
      commit("set_error", error.response.data.errors);
    }
  },
  async logout({ commit }) {
    commit("purge_auth");
    this.$router.push({ name: "home" });
  },
  async register({ commit }, paramData) {
    try {
      const res = await ApiService.post("/users", {
        user: paramData.credentials,
      });
      commit("set_auth", res.data.user);
      paramData.$router.push({ name: "homeGlobal" });
    } catch (error) {
      commit("set_error", error.response.data.errors);
    }
  },
  async check_auth({ commit, state }) {
    //state.user!=={}
    if (Object.keys(state.user).length !== 0) {
      return;
    } else if (jwtService.getToken()) {
      ApiService.setHeader();
      const { data } = await ApiService.get();
      commit("set_auth", data.user);
    } else {
      commit("purge_auth");
    }
  },
};

const mutations = {
  set_auth: (state, user) => {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    JwtService.saveToken(state.user.token);
  },
  purge_auth: (state) => {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  },
  set_error: (state, error) => {
    state.errors = error;
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};
