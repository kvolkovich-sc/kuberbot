let exec = require('child_process').exec;

module.exports = (options) => (req, res) => {
  let { user, repo, branch } = req.params;

  res.send(`Event: "branch-or-tag-deletion". ${user}/${repo}/${branch}`);
  res.end();
};
