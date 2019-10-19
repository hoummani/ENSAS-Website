import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

//importing store modules

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, user) {
      state.status = "success";
      state.user = user;
    },
    login_success(state, user, token) {
      state.status = "success";
      state.user = user;
      state.token = token;
    },
    auth_error(state) {
      state.status = "error";
    },
    UPDATE_PROFILE(state, user) {
      state.user = user;
    },
    logOut(state) {
      state.status = "";
      state.token = "";
    }
  },
  actions: {
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          method: "post",
          data: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
          },
          url: "http://localhost:3000/user/register",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => {
            const user = response.data.user;
            commit("auth_success", user);
            resolve(response);
          })
          .catch(err => {
            commit("auth_error");
            reject(err);
          });
      });
    },
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          method: "post",
          data: {
            email: user.email,
            password: user.password
          },
          url: "http://localhost:3000/user/login",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => {
            const token = response.data.token;
            const user = response.data.userSend;
            localStorage.setItem("token", token);
            commit("login_success", user, token);
            resolve(response);
          })
          .catch(error => {
            commit("auth_error");
            reject(error);
          });
      });
    },
    updateProfile({ commit, getters }, user) {
      const activeToken = getters.activeToken;
      return new Promise((resolve, reject) => {
        axios({
          method: "post",
          data: {
            email: user.email,
            photo: user.photo,
            cin: user.cin,
            cne: user.cne,
            firstNameAr: user.firstNameAr,
            lastNameAr: user.lastNameAr,
            birthDay: user.birthDay,
            birthPlace: user.birthPlace,
            address: user.address,
            nationality: user.nationality,
            phone: user.phone,
            fatherFullName: user.fatherFullName,
            fatherJob: user.fatherJob,
            motherFullName: user.motherFullName,
            motherJob: user.motherJob,
            parentAddress: user.parentAddress,
            parentPhone: user.parentPhone,
            level: user.level,
            filiere: user.filiere,
            bacType: user.bacType,
            mention: user.mention,
            bacGetYear: user.bacGetYear,
            bacLycee: user.bacLycee,
            bacDirection: user.bacDirection,
            bacAccademie: user.bacAccademie
          },
          url: "http://localhost:3000/users/profile",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${activeToken}`
          }
        })
          .then(response => {
            const user = response.data.user;
            commit("UPDATE_PROFILE", user);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    logOut({ commit }) {
      return new Promise(resolve => {
        commit("logOut");
        localStorage.removeItem("token");
        resolve();
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    activeToken: state => state.token,
    currentUser: state => state.user
  }
});
