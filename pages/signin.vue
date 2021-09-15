<template>
  <v-container class="pa-16" fill-height>
    <v-card class="ma-auto">
      <v-card-title class="pa-8 justify-center">
        <div class="text-h4">ユーザー登録</div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form ref="login_form">
          <v-row class="flex-column align-center ma-2">
            <v-col cols="12" sm="8">
              <v-text-field
                v-model="email"
                label="メールアドレス"
                :rules="[emailRules.required, emailRules.regex]"
                autofocus
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                v-model="password"
                label="パスワード"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[passwordRules.required]"
                :type="passwordShow ? 'text' : 'password'"
                outlined
                @click:append="passwordShow = !passwordShow"
              ></v-text-field>
            </v-col>
            <v-col cols="5" sm="auto">
              <v-btn class="pa-5" @click="signin">
                <div class="text-h6 pl-4 pr-4">登録</div>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <v-row class="flex justify-center ma-2">
          <v-col cols="8" sm="auto">
            <v-btn
              class="pa-5 text-capitalize caption"
              @click="login"
              color="#00FF00"
            >
              <v-icon left color="red">mdi-google</v-icon>
              <div class="text-h6">Googleで登録</div>
            </v-btn>
          </v-col>
          <v-col cols="8" sm="auto">
            <v-btn
              class="pa-5 text-capitalize caption"
              @click="login"
              color="#00FFFF"
            >
              <v-icon left color="blue">mdi-twitter</v-icon>
              <div class="text-h6">Twitterで登録</div>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      emailRules: {
        required: value => !!value || "メールアドレスは必須です",
        regex: value =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ) || "メールアドレスの形式が違います"
      },
      password: null,
      passwordShow: false,
      passwordRules: {
        required: value => !!value || "パスワードは必須です"
      }
    };
  },
  methods: {
    signin() {
      if (this.$refs.login_form.validate()) {
        this.$store.commit("changeAuthState", true);
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped>
.v-card {
  min-width: 640px;
}
@media screen and (max-width: 750px) {
  .v-card {
    min-width: 100%;
  }
}
</style>
