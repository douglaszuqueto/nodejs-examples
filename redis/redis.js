const Redis = require('redis');
const redis = Redis.createClient(6379, '127.0.0.1');

redis.on('error', (err) => console.log('Error: ', err));
redis.on('ready', () => {
    console.log('Connected');

    redis.get('key', (err, value) => {
        if (err) {
            throw err;
        }
        console.log('Value:', value);
    })
});