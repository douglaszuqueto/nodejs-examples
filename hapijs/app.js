const hapi = require('hapi');
const server = new hapi.Server();

server.connection({port: 3000});
server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply('Hello HapiJS');
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server runnning: ', server.info.uri);
});
