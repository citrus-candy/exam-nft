export const state = () => ({
  cartItems: [],
  tags: ["一般科目", "専門科目", "数学", "英語"]
});

export const getters = {
  cartItems(state) {
    return state.cartItems;
  },
  cartItemsCount(state) {
    return state.cartItems.length;
  },
  tags(state) {
    return state.tags;
  }
};

export const mutations = {
  cartItems(state, payload) {
    state.cartItems.push(payload);
  },
  resetItems(state) {
    state.cartItems = [];
  }
};
