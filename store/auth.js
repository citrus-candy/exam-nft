export const state = () => ({
  uid: null
});

export const mutations = {
  setUserId(state, payload) {
    state.uid = payload;
  }
};

export const actions = {
  async signUp({ dispatch }, { name, email, password }) {
    try {
      await this.$fire.auth
        .createUserWithEmailAndPassword(email, password)
        .then(result => {
          dispatch(
            "firestore/addUser",
            {
              uid: result.user.uid,
              name: name,
              email: email,
              password: password
            },
            { root: true }
          );
        });
    } catch (e) {
      console.error(e);
    }
  },

  async signInWithEmail({ commit }, { email, password }) {
    try {
      await this.$fire.auth
        .signInWithEmailAndPassword(email, password)
        .then(result => commit("setUserId", result.user.uid));
    } catch (e) {
      console.error(e);
    }
  },

  signInWithTwitter() {
    const authTwitter = this.$fire.auth.TwitterAuthProvider();
    return this.$fire.auth.signInWithPopup(authTwitter);
  },

  signInWithGoogle() {
    const authGoogle = this.$fire.auth.GoogleAuthProvider();
    return this.$fire.auth.signInWithPopup(authGoogle);
  },

  async signOut({ commit }) {
    try {
      await this.$fire.auth.signOut().then(() => commit("setUserId", null));
    } catch (e) {
      console.error(e);
    }
  },

  onAuthStateChanged({ commit }) {
    this.$fire.auth.onAuthStateChanged(user => {
      if (user) {
        commit("setUserId", user.uid);
      }
    });
  }
};

export const getters = {
  uid(state) {
    return state.uid;
  },
  isAuth(state) {
    return !!state.uid;
  }
};
