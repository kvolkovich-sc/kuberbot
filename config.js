'use strict';

module.exports = {
  port: process.env.PORT || '3020',
  host: process.env.HOST || 'localhost',
  githubToken: process.env.GH_TOKEN || '',
  githubUser: process.env.GH_USER || '',
  azureUser: process.env.AZURE_USER || '',
  azurePass: process.env.AZURE_PASS || ''
};
