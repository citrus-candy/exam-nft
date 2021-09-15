<template>
  <v-row>
    <v-col cols="12">
      <div class="text-center">
        <v-pagination v-model="page" :length="6"></v-pagination>
      </div>
    </v-col>
    <v-col lg="3" v-for="(item, i) in items" :key="i">
      <v-hover v-slot="{ hover }">
        <v-card class="ma-auto" max-width="300" @click="details(i)">
          <v-img
            :class="{ 'on-hover': hover }"
            :src="item[3]"
            height="200px"
          ></v-img>
          <v-card-title>{{ item[0] }}</v-card-title>
          <v-card-subtitle>{{ item[1] }}</v-card-subtitle>
          <v-card-text class="text-h5 align-self-end">
            {{ item[2] }} ペリカ
          </v-card-text>
          <v-card-actions>
            <v-chip
              class="ma-2"
              v-for="(tag, i) in item[4]"
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
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12">
      <div class="text-center">
        <v-pagination v-model="page" :length="6"></v-pagination>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      items: [
        [
          "過去問",
          "去年のやつです",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ],
        [
          "過去問",
          "去年のやつです",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ],
        [
          "過去問",
          "去年のやつです",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ],
        [
          "過去問",
          "去年のやつです",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ],
        [
          "過去問",
          "去年のやつです",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ],
        [
          "過去問",
          "去年のやつです",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ],
        [
          "過去問",
          "去年のやつです",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ],
        [
          "過去問",
          "去年のやつです",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ],
        [
          "過去問",
          "去年のやつです",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ],
        [
          "過去問",
          "去年のやつです",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ],
        [
          "過去問",
          "去年のやつです",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ],
        [
          "過去問",
          "去年のやつです",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ],
        [
          "過去問",
          "去年のやつです",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ],
        [
          "過去問",
          "去年のやつです",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ],
        [
          "過去問",
          "去年のやつです",
          10000,
          "https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png",
          ["解答あり", "数学"]
        ]
      ]
    };
  },
  methods: {
    details(id) {
      this.$router.push(`/items/${id}`);
    }
  }
};
</script>

<style scoped>
.v-image {
  transition: opacity 0.4s ease-in-out;
}

.v-image:not(.on-hover) {
  opacity: 0.6;
}
</style>
