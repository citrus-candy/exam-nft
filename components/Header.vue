<template>
  <v-app-bar color="#FFCC99" fixed app>
    <v-spacer></v-spacer>
    <v-btn to="/" text tile nuxt>
      <v-icon left>mdi-home</v-icon>
      ホーム
    </v-btn>
    <v-btn v-show="!isAuth" to="/user/login" text tile nuxt>
      <v-icon left>mdi-account</v-icon>
      ログイン
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
    <v-menu offset-y transition="slide-x-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-show="isAuth" v-bind="attrs" v-on="on" text tile>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item to="/items/exhibit" link>
          <v-list-item-icon>
            <v-icon>mdi-note-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            過去問を出品
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/user" link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            アカウント
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content @click="logout()">
            ログアウト
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
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
