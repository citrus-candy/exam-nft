<template>
  <v-container>
    <v-row>
      <v-col>
        <v-carousel v-model="carousel">
          <v-carousel-item v-for="(image, i) in details[3]" :key="i">
            <v-sheet height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <img :src="image" />
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col>
        <v-row class="flex-column mt-2 details">
          <v-col class="mt-4">
            <div class="text-h3">{{ details[0] }}</div>
          </v-col>
          <v-divider></v-divider>
          <v-col>
            <v-chip
              class="ma-2"
              v-for="(tag, i) in details[4]"
              :key="i"
              color="pink"
              label
              text-color="white"
            >
              <v-icon left>
                mdi-label
              </v-icon>
              {{ tag }}
            </v-chip>
          </v-col>
          <v-col>
            <div class="text-h6" v-html="details[1]"></div>
          </v-col>
          <v-divider></v-divider>
          <v-col class="mt-4" :class="{ 'mb-4': !isAuth }">
            <div class="text-h4">{{ details[2] }} ペリカ</div>
          </v-col>
          <v-col
            v-show="isAuth"
            class="mt-4 mb-4 add-cart-btn"
            :class="{ 'mb-4': isAuth }"
          >
            <v-btn @click="addCart">
              <v-icon left>mdi-cart-plus</v-icon>
              カートに入れる
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      carousel: 0,
      details: [
        "過去問",
        "過去問題集（かこもんだいしゅう）は入学試験や資格試験などにおいて過去に出題された問題を集め、解答や解説を加えた問題集である。略称は過去問（かこもん）。<br />近年では、著作権問題が顕在化することを避けるため、特に入学試験問題の国語や英語において、本文を掲載しないものも増えている。また、出題内容の外部への漏洩を禁止している資格試験において、受験者から出題内容を収集して配布する、あるいは転売するといった違法紛いの行為があり、問題視されることがある。",
        10000,
        [
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          "https://1.bp.blogspot.com/-l5Etn0Hw8cE/W959-8ROh8I/AAAAAAABP6g/QILkoXN7XT4Yng5FBELeRDPciEAgfGUDQCLcBGAs/s300/test_touan_naname.png"
        ],
        ["解答あり", "数学"]
      ]
    };
  },
  methods: {
    addCart() {
      this.$store.commit("incrementItems");
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters["isAuth"];
    }
  }
};
</script>

<style scoped>
.details {
  background: #ffffff42;
  backdrop-filter: blur(1px);
  border-radius: 10px;
}
.add-cart-btn {
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}
</style>
