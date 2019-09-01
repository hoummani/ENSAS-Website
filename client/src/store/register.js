const register = {
  namespaced: true,
  state: {
    currentUser: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  },
  mutations: {
    RGISTER(state, payload) {
      state.currentUser.firstName = payload.firstName;
      state.currentUser.lastName = payload.lastName;
      state.currentUser.email = payload.email;
      state.currentUser.password = payload.password;
    }
  },
  actions: {
    onRegister(context, data) {
      context.commit("RGISTER", data);
      console.log(data);
    }
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    }
  }
};
export default register;
