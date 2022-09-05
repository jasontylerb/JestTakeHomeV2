const http = require('http')
const soap = require('soap')
const service = require('./githubby')
const xml = require('fs').readFileSync('githubby.xml', 'utf8')
const server = http.createServer((request, response) => {
  response.end('404: Not Found: ' + request.url)
})
const path = '/githubby';
server.listen(80)
soapServer = soap.listen(server, path, service, xml)