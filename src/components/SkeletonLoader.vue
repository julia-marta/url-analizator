<template>
  <v-skeleton-loader
    v-if="isLoading"
    width="100%"
    class="mx-auto"
    type="table-heading, list-item, list-item, list-item, list-item, list-item"
  ></v-skeleton-loader>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SkeletonLoader",
  computed: mapGetters(["isLoading"]),
};
</script>
