<template>
  <v-container class="pa-16" fill-height>
    <v-card class="ma-auto">
      <v-card-title class="pa-8 justify-center">
        <div class="text-h4">カート</div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-content>
            <v-row>
              <v-col cols="4">
                <img class="item-img" :src="item[3]" />
              </v-col>
              <v-col>
                <v-row class="flex-column">
                  <v-col>
                    <p class="text-h5">{{ item[0] }}</p>
                  </v-col>
                  <v-col>
                    <p class="text-h5">{{ item[2] }} ペリカ</p>
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
            <p class="text-h5 text">合計：20000 ペリカ</p>
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
      items: [
        [
          "過去問",
          "過去問題集（かこもんだいしゅう）は入学試験や資格試験などにおいて過去に出題された問題を集め、解答や解説を加えた問題集である。略称は過去問（かこもん）。<br />近年では、著作権問題が顕在化することを避けるため、特に入学試験問題の国語や英語において、本文を掲載しないものも増えている。また、出題内容の外部への漏洩を禁止している資格試験において、受験者から出題内容を収集して配布する、あるいは転売するといった違法紛いの行為があり、問題視されることがある。",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ],
        [
          "過去問",
          "過去問題集（かこもんだいしゅう）は入学試験や資格試験などにおいて過去に出題された問題を集め、解答や解説を加えた問題集である。略称は過去問（かこもん）。<br />近年では、著作権問題が顕在化することを避けるため、特に入学試験問題の国語や英語において、本文を掲載しないものも増えている。また、出題内容の外部への漏洩を禁止している資格試験において、受験者から出題内容を収集して配布する、あるいは転売するといった違法紛いの行為があり、問題視されることがある。",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ]
      ]
    };
  },
  methods: {
    buyItems() {
      this.$store.commit("resetItems");
      this.$router.push("/");
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
