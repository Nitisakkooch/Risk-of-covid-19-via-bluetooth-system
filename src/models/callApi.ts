import axios from "axios";
import _ from "lodash";

export default axios.create({
  baseURL: "https://l4b70829dc.execute-api.us-east-2.amazonaws.com/",
  headers: {
    "Content-type": "application/json"
  }
});