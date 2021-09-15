<template>
  <v-row class="flex-column">
    <v-col>
      <v-card class="mx-auto" max-width="300" tile>
        <v-card-title>カテゴリ</v-card-title>
        <v-list-group v-for="(subject, i) in subjects" :key="i">
          <template v-slot:activator>
            <v-list-item-title>{{ subject[0] }}</v-list-item-title>
          </template>
          <v-list flat>
            <v-list-item-group color="primary">
              <v-list-item v-for="(grade, i) in subject[1]" :key="i">
                <v-list-item-title>
                  {{ grade }}
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-list-group>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      subjects: [
        ["知能情報工学科", ["1年", "2年", "3年", "4年"]],
        ["情報・通信工学科", ["1年", "2年", "3年", "4年"]],
        ["知的システム工学科", ["1年", "2年", "3年", "4年"]],
        ["物理情報工学科", ["1年", "2年", "3年", "4年"]],
        ["生命化学情報工学科", ["1年", "2年", "3年", "4年"]],
        ["情工１類", ["Ⅰクラス", "Ⅱクラス"]],
        ["情工２類", ["Ⅲクラス"]],
        ["情工３類", ["Ⅳクラス", "Ⅴクラス"]]
      ],
      gradients: [
        ["#222"],
        ["#42b3f4"],
        ["red", "orange", "yellow"],
        ["purple", "violet"],
        ["#00c6ff", "#F0F", "#FF0"],
        ["#f72047", "#ffd200", "#1feaea"]
      ]
    };
  }
};
</script>
