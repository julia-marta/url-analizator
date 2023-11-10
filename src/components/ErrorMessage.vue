<template>
  <v-alert
    text
    prominent
    type="error"
    icon="mdi-cloud-alert"
    v-if="error?.msg && !isLoading"
    >Возникла ошибка. Код ошибки: {{ error?.code }}. Причина: {{ error?.msg }}
  </v-alert>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ErrorMessage",
  computed: mapGetters(["error", "isLoading"]),
};
</script>
