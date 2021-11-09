import axios, { AxiosPromise } from "axios";
const buffer = new Buffer(process.env.VUE_APP_JIRA_ID + ':' + process.env.VUE_APP_JIRA_PASSWORD);
const string = buffer.toString('base64');
export default {
  getJiraStoryPointData(team: string, sprint: string): AxiosPromise | void {
    let URL =
      process.env.JIRA_API_BASE_URL +
      "project=" +
      team +
      " AND sprint=" +
      sprint;
    return axios.post(URL, []).then((res) => res.data);
  },
};
