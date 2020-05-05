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
const port = config[service]

const server = jsonServer.create()

const routesPath = `services/${service}/routes.json`

if (fs.existsSync(routesPath))
    server.use(jsonServer.rewriter(JSON.parse(fs.readFileSync(routesPath))))

server.use(jsonServer.router(`services/${service}/db.json`))
server.listen(port, () => {
    console.log(`Mock \`${service}\` is listening on port: ${port}`)
})
