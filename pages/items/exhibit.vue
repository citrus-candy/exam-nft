<template>
  <v-container class="pa-16" fill-height>
    <v-card class="ma-auto" min-width="800">
      <v-card-title class="pa-8 justify-center">
        <div class="text-h4">過去問の出品</div>
      </v-card-title>
      <v-divider></v-divider>
      <v-form ref="exhibit_form">
        <v-card-text>
          <v-text-field
            v-model="title"
            class="pl-16 pr-16 mt-2"
            width="500"
            label="タイトル*"
            :rules="[titleRules.required]"
            outlined
          ></v-text-field>
        </v-card-text>
        <v-card-text>
          <v-textarea
            v-model="description"
            class="pl-16 pr-16"
            label="詳細"
            outlined
          ></v-textarea>
        </v-card-text>
        <v-card-text>
          <v-text-field
            v-model="price"
            class="pl-16 pr-16"
            label="価格*"
            suffix="コイン"
            type="number"
            :rules="[priceRules.required, priceRules.valid]"
            outlined
          ></v-text-field>
        </v-card-text>
        <v-card-subtitle class="pl-16 pr-16 text-h5">タグ</v-card-subtitle>
        <v-card-text>
          <v-chip-group
            v-model="selectTags"
            class="pl-16 pr-16"
            column
            multiple
          >
            <v-chip
              v-for="(tag, i) in tags"
              :key="i"
              class="ma-2"
              color="black"
              label
              filter
              outlined
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
        <v-card-text>
          <v-file-input
            v-model="files"
            class="pl-16 pr-16"
            color="deep-purple accent-4"
            counter
            accept="image/png, image/jpeg, application/pdf"
            label="過去問の画像またはPDF"
            multiple
            placeholder="ファイルを選択してください"
            hint="選択できるファイル：.png / .jpeg / .pdf"
            persistent-hint
            outlined
            :show-size="1000"
          >
            <template v-slot:selection="{ index, text }">
              <v-chip
                v-if="index < 2"
                color="deep-purple accent-4"
                dark
                label
                small
              >
                {{ text }}
              </v-chip>
              <span
                v-else-if="index === 2"
                class="text-overline grey--text text--darken-3 mx-2"
              >
                +{{ files.length - 2 }} File(s)
              </span>
            </template>
          </v-file-input>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <v-row class="flex-column align-center ma-2">
            <v-col cols="9" sm="auto">
              <v-btn class="pa-5" @click="addItems" :loading="isLoading">
                <div class="text-h6">出品</div>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      selectTags: null,
      files: [],
      title: null,
      description: null,
      price: 0,
      titleRules: {
        required: value => !!value || "タイトルは必須です"
      },
      priceRules: {
        required: value => !!value || "価格は必須です",
        valid: value => value >= 0 || "整数値を入力してください"
      }
    };
  },
  methods: {
    async addItems() {
      if (this.$refs.exhibit_form.validate()) {
        this.isLoading = true;
        await this.$store
          .dispatch("firestore/addItems", {
            uid: this.$store.getters["auth/uid"],
            title: this.title,
            description: this.description,
            price: parseInt(this.price),
            tags: this.selectTags,
            imageUrl: this.files
          })
          .then(() => {
            this.isLoading = false;
            this.$router.push("/");
          });
      }
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
    tags() {
      return this.$store.getters["tags"];
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
