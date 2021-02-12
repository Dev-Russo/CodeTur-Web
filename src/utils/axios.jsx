import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:52818/v1/",
  headers: {
    "Content-type": "application/json"
  }
});
