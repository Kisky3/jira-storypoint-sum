import axios, { AxiosPromise } from "axios";

export default {
  getJiraStoryPointData(team: string, sprint: string): AxiosPromise | void {
    let URL =
      process.env.JIRA_API_BASE_URL +
      "project=" +
      team +
      " AND sprint=" +
      sprint;
    return axios.post("", []).then((res) => res.data);
  },
};
