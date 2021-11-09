import axios, { AxiosPromise } from "axios";
const buffer = new Buffer('JIRA ID' + ':' + 'JIRA PASSWAORD');
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
