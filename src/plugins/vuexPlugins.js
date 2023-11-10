import Axios from "@/plugins/axios";

export default function (store) {
  store.$axios = Axios;
}
