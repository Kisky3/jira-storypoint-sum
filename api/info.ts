import axios, { AxiosPromise } from "axios";
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
  getJiraStoryPointData(team: String, sprint: String): AxiosPromise | void {
    let URL = process.env.VUE_APP_JIRA_API_BASE_URL
    this.$axios({
      url: "https://kou.atlassian.net/rest/api/3/search?jql=project+%3D+blue+AND+status+%3D+Done+AND+sprint+%3D+%22%E3%82%B9%E3%83%97%E3%83%AA%E3%83%B3%E3%83%88+1%22",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        Authorization: "Basic " + string,
      },
      adapter: jsonpAdapter, // ここがポイントです。requireしたアダプタを利用してい
      data: {
        bodyData
      }
    })
      .then((response) => {
        this.prefecture = response.data.results[0].address1 // 都道府県
        this.city = response.data.results[0].address2 // 市区町村
      })
      .catch((_error) => {
        console.log('エラーが発生しました') // 
      })
      .finally(() => {
        setTimeout(() => {
          this.searching = false // 2度押し対策です。ASP側に迷惑かけないように…
        }, 3000)
      })

      // TODO: fix ts error
      // @ts-ignore: Unreachable code error
      // .get(URL, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     'Accept': 'application/json',
      //     Authorization: "Basic " + string,
      //   },
      //   data: {
      //     bodyData
      //   },
      // })
      // // TODO: fix ts type after
      // .then((res: any) => {
      //   alert("hey");
      //   console.log(res);
      //   return res;
      // });
  },
};
