const https = require('https');

let options = {
    hostname: 'api.github.com',
    port: 443,
    method: 'GET',
    path: '/users/douglaszuqueto',
    headers: {'user-agent': 'node.js'}
};

let req = https.request(options, (res) => {
    let body = '';

    res.setEncoding('utf8');
    res.on('data', (data) => body += data.toString());

    res.on('end', () => console.log(JSON.parse(body)));
});

req.end();

req.on('error', (err) => {
    console.log(err);
});
