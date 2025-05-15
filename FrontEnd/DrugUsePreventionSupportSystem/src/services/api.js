import axios from "axios";

const API = {
  callApi: function () {
    axios.create({
      baseURL: "",
    });
  },
};

export default API;
