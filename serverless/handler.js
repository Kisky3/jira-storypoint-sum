// handler.js

'use strict';

module.exports.hello = function (event, context, callback) {
// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');

const bodyData = `{
  "projectIds": [
    10000,
    10001,
    10002
  ],
  "includeCollapsedFields": true
}`;

fetch('https://your-domain.atlassian.net/rest/api/3/jql/autocompletedata', {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'email@example.com:<api_token>'
    ).toString('base64')}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: bodyData
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    callback(null, response);
    return response.text();
  })
  .then(text => {console.log(text)})
  .catch(err => console.error(err));

};
