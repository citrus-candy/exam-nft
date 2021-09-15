export const state = () => ({
  isAuth: false,
  cartItemsCount: 0
});

export const getters = {
  isAuth(state) {
    return state.isAuth;
  },
  cartItemsCount(state) {
    return state.cartItemsCount;
  }
};

export const mutations = {
  changeAuthState(state, isAuth) {
    state.isAuth = isAuth;
  },
  incrementItems(state) {
    state.cartItemsCount++;
  },
  resetItems(state) {
    state.cartItemsCount = 0;
  }
};
