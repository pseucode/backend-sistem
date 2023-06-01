const routes = require('./routes');
const Hapi = require('@hapi/hapi');
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'http://0.0.0.0',
    });

server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();