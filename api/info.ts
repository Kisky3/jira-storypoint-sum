import axios, { AxiosPromise } from "axios";

export default {
  getJiraStoryPointData(): AxiosPromise | void {
    return axios
      .post("https://marketenterprise.atlassian.net/rest/api/2/search?jql=", [])
      .then((res) => res.data);
  },
};
