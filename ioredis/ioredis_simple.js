const Redis = require('ioredis');
const redis = new Redis({
    host: '127.0.0.1'
});

redis.on('error', (err) => console.log('Error: ', err));
redis.on('ready', () => {
    console.log('Connected');

    redis.get('key', (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
    });
});


