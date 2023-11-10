<template>
  <v-row justify="center" class="mb-5" no-gutters>
    <v-col cols="3">
      <v-select
        label="Тип запроса"
        :items="options"
        solo
        v-model="selected"
        @change="clearSelectError"
        v-bind="{
          error: !isSelectValid,
          ...(!isSelectValid && {
            'error-messages': ['Выберите тип запроса'],
          }),
        }"
      ></v-select>
    </v-col>
    <v-col cols="4">
      <v-text-field
        label="Введите адрес сайта"
        solo
        v-model="inputValue"
        @input="clearInputError"
        @keyup.enter="submit"
        v-bind="{
          error: !isInputValid,
          ...(!isInputValid && { 'error-messages': ['Введите адрес сайта'] }),
        }"
      ></v-text-field>
    </v-col>
    <v-col cols="1">
      <v-btn class="mt-1 ml-4" fab dark small @click="submit">
        <v-icon dark> mdi-arrow-top-right-thick </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "RequestForm",

  data: () => ({
    options: [
      {
        text: "Данные хостинга",
        value: "Host",
      },
      {
        text: "Технологии",
        value: "Tech",
      },
    ],
    selected: "",
    inputValue: "",
    isSelectValid: true,
    isInputValid: true,
  }),
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["setRequestType", "setRequestURL"]),
    clearInputError() {
      this.isInputValid = true;
    },
    clearSelectError() {
      this.isSelectValid = true;
    },
    submit() {
      if (!this.selected || !this.inputValue) {
        if (!this.selected) {
          this.isSelectValid = false;
        }
        if (!this.inputValue) {
          this.isInputValid = false;
        }
        return;
      }
      this.setRequestType(this.selected);
      this.setRequestURL(this.inputValue);
      this.fetchData();
    },
  },
};
</script>
