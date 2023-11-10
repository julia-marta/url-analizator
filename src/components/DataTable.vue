<template>
  <v-row justify="center" no-gutters>
    <v-col cols="8">
      <SkeletonLoader />
      <v-simple-table v-if="showTable">
        <template>
          <thead>
            <tr>
              <th class="text-left text-h6" colspan="2">
                {{ tableTitle }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in normalizedData" :key="item.key">
              <th
                :colspan="item.colspan"
                :class="{ 'text-subtitle-2 grey lighten-3': item.colspan }"
              >
                {{ item.th }}
              </th>
              <td v-if="item.td">{{ item.td }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <ErrorMessage />
    </v-col>
  </v-row>
</template>

<script>
import ErrorMessage from "@/components/ErrorMessage.vue";
import SkeletonLoader from "@/components/SkeletonLoader.vue";
import { mapGetters } from "vuex";

export default {
  name: "DataTable",
  components: {
    ErrorMessage,
    SkeletonLoader,
  },
  computed: mapGetters(["normalizedData", "tableTitle", "showTable"]),
};
</script>
