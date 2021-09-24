<template>
  <v-container class="pa-16" fill-height>
    <v-card class="ma-auto">
      <v-card-title class="pa-8 justify-center">
        <div class="text-h4">カート</div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-list-item v-for="(id, i) in cartItems" :key="i">
          <v-list-item-content>
            <v-row>
              <v-col cols="4">
                <img
                  class="item-img"
                  src="https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png"
                />
              </v-col>
              <v-col>
                <v-row class="flex-column">
                  <v-col>
                    <p class="text-h5">{{ items[id].title }}</p>
                  </v-col>
                  <v-col>
                    <p class="text-h5">{{ items[id].price }} コイン</p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <v-row class="flex-column align-center ma-2">
          <v-col>
            <p class="text-h5 text">合計：{{ totalPrice }} コイン</p>
          </v-col>
          <v-col cols="9" sm="auto">
            <v-btn class="pa-5" @click="buyItems">
              <div class="text-h6">購入</div>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  middleware: ["redirect"],
  data() {
    return {
      totalPrice: 0
    };
  },
  mounted() {
    this.cartItems.forEach(cartItem => {
      this.totalPrice += this.items[cartItem].price;
    });
  },
  methods: {
    buyItems() {
      this.$store.commit("resetItems");
      this.$router.push("/");
    }
  },
  computed: {
    items() {
      return this.$store.getters["firestore/items"];
    },
    cartItems() {
      return this.$store.getters["cartItems"];
    }
  }
};
</script>

<style scoped>
p {
  text-align: right;
}
.v-card {
  min-width: 640px;
}
.item-img {
  width: 100%;
}
@media screen and (max-width: 750px) {
  .v-card {
    min-width: 100%;
  }
}
</style>
