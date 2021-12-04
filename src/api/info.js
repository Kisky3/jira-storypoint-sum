import axios from "axios";
const buffer = new Buffer(
  process.env.VUE_APP_JIRA_ID + ":" + process.env.VUE_APP_JIRA_PASSWORD
);
const string = buffer.toString("base64");
const bodyData = `{
  "expand": [
    "names",
    "schema",
    "operations"
  ],
  "jql": "project = チームブルー",
  "maxResults": 15,
  "fieldsByKeys": false,
  "fields": [
    "summary",
    "status",
    "assignee"
  ],
  "startAt": 0
}`;

export default {
  getJiraStoryPointData(team, sprint) {
    console.log(team, sprint)
    let URL = process.env.VUE_APP_JIRA_API_BASE_URL
    axios
      // TODO: fix ts error
      // @ts-ignore: Unreachable code error
      .get(URL, {
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json',
          Authorization: "Basic " + string,
        },
        data: {
          bodyData
        },
      })
      // TODO: fix ts type after
      .then((res) => {
        alert("hey");
        console.log(res);
        return res;
      });
  },
};
