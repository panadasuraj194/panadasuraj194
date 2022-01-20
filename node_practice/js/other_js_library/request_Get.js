const https = require('https');
  const options = {
    hostname: 'localhost',
    port: 3100,
    path: '/testFolder/test1.json',
    method: 'GET'
  }
  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', d => {
      process.stdout.write(d);
    })
  })

  req.on('error', error =>{
    console.error(error)
  })
  req.end()
