<template>
  <v-app-bar color="#FFCC99" fixed app>
    <v-spacer></v-spacer>
    <v-btn to="/" text tile nuxt>
      <v-icon left>mdi-home</v-icon>
      ホーム
    </v-btn>
    <v-btn v-show="!isAuth" to="/login" text tile nuxt>
      <v-icon left>mdi-account</v-icon>
      ログイン
    </v-btn>
    <v-btn v-show="isAuth" @click="logout" text tile>
      <v-icon left>mdi-logout</v-icon>
      ログアウト
    </v-btn>
    <v-badge
      v-show="isAuth"
      :content="cartItems"
      :value="cartItems"
      color="orange"
      overlap
    >
      <v-btn to="/cart" text tile nuxt>
        <v-icon>mdi-cart</v-icon>
        カート
      </v-btn>
    </v-badge>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("auth/signOut");
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
    cartItems() {
      return this.$store.getters["cartItemsCount"];
    }
  }
};
</script>
