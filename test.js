var config = require('./config.json');
// With ES5 
var JiraApi = require('jira-client');
 
// Initialize 
jira = new JiraApi({
  protocol: 'https',
  host: config.host,
  username: config.user,
  password: config.password,
  apiVersion: '2',
  strictSSL: true
});

for (var k in jira) {
	console.log(k);
}

jira.findIssue('TMU-8')
  .then(function(issue) {
    console.log(issue);
  })
  .catch(function(err) {
    console.error(err);
  });
