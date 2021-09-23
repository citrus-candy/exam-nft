export const state = () => ({
  name: "",
  items: [],
  itemsId: []
});

export const mutations = {
  setUserName(state, payload) {
    state.name = payload;
  },
  setItems(state, payload) {
    state.items.push(payload);
  },
  resetItems(state) {
    state.items.length = 0;
  },
  setItemsId(state, payload) {
    state.itemsId.push(payload);
  }
};

export const actions = {
  async addUser({ dispatch }, { uid, name, email, password }) {
    try {
      await this.$fire.firestore
        .collection("users")
        .add({
          uid: uid,
          name: name,
          created_at: this.$fireModule.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
          dispatch(
            "auth/signInWithEmail",
            {
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

  async getUser({ commit }, { uid }) {
    try {
      await this.$fire.firestore
        .collection("users")
        .where("uid", "==", uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(doc.id, " => ", doc.data());
            commit("setUserName", doc.data().name);
          });
        });
    } catch (e) {
      console.error(e);
    }
  },

  async addItems(
    { commit },
    { uid, title, description, price, tags, imageUrl }
  ) {
    try {
      await this.$fire.firestore.collection("items").add({
        uid: uid,
        title: title,
        description: description,
        price: price,
        tags: tags,
        image_url: imageUrl,
        created_at: this.$fireModule.firestore.FieldValue.serverTimestamp(),
        updated_at: this.$fireModule.firestore.FieldValue.serverTimestamp()
      });
    } catch (e) {
      console.error(e);
    }
  },

  async getItemsSnapshot({ commit }) {
    try {
      await this.$fire.firestore
        .collection("items")
        .onSnapshot(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(doc.id, " => ", doc.data());
            commit("setItems", doc.data());
            commit("setItemsId", doc.id);
          });
        });
    } catch (e) {
      console.error(e);
    }
  }
};

export const getters = {
  name(state) {
    return state.name;
  },
  items(state) {
    return state.items;
  },
  itemsId(state) {
    return state.itemsId;
  }
};
