<template>
  <v-app>
    <AppHeader />
    <v-main>
      <v-container class="pb-15 pt-15">
        <AppHero />
        <RequestForm />
        <DataTable />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from "@/layouts/AppHeader.vue";
import AppFooter from "@/layouts/AppFooter.vue";
import AppHero from "@/layouts/AppHero.vue";
import RequestForm from "@/components/RequestForm.vue";
import DataTable from "./components/DataTable.vue";

export default {
  name: "App",

  components: {
    AppHeader,
    AppFooter,
    AppHero,
    RequestForm,
    DataTable,
  },
};
</script>
