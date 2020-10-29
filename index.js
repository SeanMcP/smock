const fs = require("fs");
const jsonServer = require("json-server");

function exitLog(...message) {
  console.log(...message);
  process.exit(1);
}

const service = process.argv[2];
if (!service) exitLog("No service provided");

const configPath = `services/${service}.json`;

if (!fs.existsSync(configPath))
  exitLog(`No config file found for service \`${service}\``);

const config = JSON.parse(fs.readFileSync(configPath));

const { database, port, routes = {} } = config;

if (!database || !port) {
  const missing = [];
  !database && missing.push('"database"');
  !port && missing.push('"port"');
  exitLog("Missing required config fields:", ...missing);
}

const server = jsonServer.create();

server.use(jsonServer.rewriter(routes));

server.use(jsonServer.router(database));
server.listen(port, () => {
  console.log(`Mock \`${service}\` is listening on port: ${port}`);
});
