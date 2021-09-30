import axios, { AxiosPromise } from "axios";

export default {
  getJiraStoryPointData(): AxiosPromise | void {
    let URL = process.env.JIRA_API_BASE_URL;
    return axios.post("", []).then((res) => res.data);
  },
};
