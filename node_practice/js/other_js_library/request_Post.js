const https = require('https');
const data = new TextEncoder().encode(
    JSON.stringify({
        users: 'abcd',
    })
)

const options = {
    hostname: 'https://dummyjson.com',
    port:3200,
    path:'/users',
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
        'Content-Length':data.length
    }
}
const req = https.request(options,res =>{
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', d => {
        process.stdout.write(d)
    });
});

req.on('error',error => {
    console.error(error)
})

req.write(data)
req.end()