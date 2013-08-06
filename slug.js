var command = process.argv.slice(2)[0];

var hem  = require('hem-haml-coffee');

hem.exec(command);
