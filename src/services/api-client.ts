import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dd79a14a48be4336871a9145fbf3451f",
  },
});
