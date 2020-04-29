const fs = require('fs')
const jsonServer = require('json-server')

function exitLog(message) {
    console.log(message)
    process.exit(1)
}

const service = process.argv[2]
if (!service) exitLog('No service provided')

const config = JSON.parse(fs.readFileSync('smock-config.json'))

if (!config[service]) exitLog('No config for service', service)

const { path, port } = config[service]

const server = jsonServer.create()
server.use(jsonServer.router(path))
server.listen(port, () => {
    console.log(`Mock \`${service}\` is listening on port: ${port}`)
})
