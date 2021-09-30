import axios, { AxiosPromise } from "axios";

export default {
  getJiraStoryPointData(): AxiosPromise | void {
    return axios.post("", []).then((res) => res.data);
  },
};
