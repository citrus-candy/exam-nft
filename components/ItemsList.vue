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
            src="https://4.bp.blogspot.com/-gc_pG0Lr7GE/VJ6XKoPXnZI/AAAAAAAAqGo/1Hp3nOZo9CM/s400/test_print_mondaiyoushi.png"
            height="200px"
          ></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.description }}</v-card-subtitle>
          <v-card-text class="text-h5 align-self-end">
            {{ item.price }} コイン
          </v-card-text>
          <v-card-actions>
            <v-chip
              class="ma-2"
              v-for="(tag, i) in item.tags"
              :key="i"
              color="black"
              label
              outlined
            >
              <v-icon left>
                mdi-label
              </v-icon>
              {{ tags[tag] }}
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
      page: 1
    };
  },
  created() {
    this.$store.commit("firestore/resetItems");
    this.$store.dispatch("firestore/getItemsSnapshot");
  },
  methods: {
    details(i) {
      this.$router.push(`/items/${i}`);
    }
  },
  computed: {
    items() {
      return this.$store.getters["firestore/items"];
    },
    itemsId() {
      return this.$store.getters["firestore/itemsId"];
    },
    tags() {
      return this.$store.getters["tags"];
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
