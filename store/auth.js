export const state = () => ({
  uid: null
});

export const mutations = {
  setUserId(state, payload) {
    state.uid = payload;
  }
};

export const actions = {
  signUp({ commit }, { email, password }) {
    return this.$fire.auth.createUserWithEmailAndPassword(email, password);
  },

  signInWithEmail({ commit }, { email, password }) {
    return this.$fire.auth
      .signInWithEmailAndPassword(email, password)
      .then(result => commit("setUserId", result.user.uid));
  },

  signInWithTwitter() {
    const authTwitter = this.$fire.auth.TwitterAuthProvider();
    return this.$fire.auth.signInWithPopup(authTwitter);
  },

  signInWithGoogle() {
    const authGoogle = this.$fire.auth.GoogleAuthProvider();
    return this.$fire.auth.signInWithPopup(authGoogle);
  },

  signOut({ commit }) {
    return this.$fire.auth.signOut().then(() => commit("setUserId", null));
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
