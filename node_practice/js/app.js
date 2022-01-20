// const username = 'suraj';
// const age = 1;
// const hobby = [{'indoor':'carrom'},{'outdoor':'cricket'}];
// console.log(`my name  is ${username}. My fav indoor game is ${hobby[0]['indoor']} and outdoor game is ${hobby[1]['outdoor']}`);

const { path } = require("express/lib/application");

// const { response } = require("express");

/* console.count() */

// const x = 1
// const y = 2
// const z = 3
// console.count(
//   'The value of x is ' + x + 
//   ' and has been checked .. how many times?'
// );
// console.count(
//   'The value of x is ' + x + 
//   ' and has been checked .. how many times?'
// );
// console.count(
//   'The value of y is ' + y + 
//   ' and has been checked .. how many times?'
// );

/* console.trace */ 

// const function2 = () =>  console.trace()
// const function1 = () => function2()
// function1()

/* Measuring time */

// const doSomething = (a, b) => {return a+b};
// const doSomething1 = (a, b) => {return a*b};
// const measureDoingSomething = () => {
//     console.time('doSomething()');
//     doSomething();
//     console.timeEnd('doSomething()');
//     console.time('doSomething1()');
//     doSomething1();
//     console.timeEnd('doSomething1()');
// }
// measureDoingSomething();

/* color console or use Chalk library */ 

// console.log('\x1b[33m%s\x1b[0m', 'hi!')

/*  Progress bar ( Progress Bar Library )*/

// const ProgressBar = require('progress');
// const bar = new ProgressBar(':bar', {total: 5});
// const timer = setInterval(() => {
//     bar.tick();{
//         if(bar.complete){
//             clearInterval(timer);
//         }
//     }
// },100);

/*Commandline I/O */ 

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question(`What's your name?`,name => {
//     console.log(`hi ${name}!`);
//     readline.close();
// });

/* same using 'inquirer' library */

// const inquirer = require('inquirer')

// var questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?"
//   }
// ];

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers['name']}!`)
// });


// const items = require('./other_js_library/car');
// const car = items.car;
// console.log(car);

/* Simple event loop*/
// const bar = () => console.log('bar');
// const baz = () => console.log('baz');
// const foo = () => {
//     console.log('foo');
//     bar();
//     baz();
// }
// foo();

/* Queuing function execution */
// const bar = () => console.log('bar');
// const baz = () => console.log('baz');
// const foo = () => {
//     console.log('foo');
//     setTimeout(bar,0);
//     baz();
// }
// foo();

/* ES6 Job Queue */

// const bar = () => console.log('bar');
// const baz = () => console.log('baz');
// const foo = () => {
//     console.log('foo');
//     setTimeout(bar,0);
//     new Promise((resolve,reject) => resolve('After baz and before bar')).then(resolve => console.log(resolve));
//     baz();
// }
// foo();

/* process.nextTick() */
// const bar = () => console.log('bar');
// const baz = () => console.log('baz');
// const foo = () => {
//     console.log('foo');
//     setTimeout(bar,0);
//     new Promise((resolve,reject) => resolve('After baz and before bar')).then(resolve => console.log(resolve));
//     process.nextTick(() => {
//         baz();
//       })
      
      
    
// }
// foo();

/* Zero Delay */

// setTimeout(() => {
//     console.log('after ')
//   }, 0);
  
//   console.log(' before ');
  
/* XHR request */

// if(window.XMLHttpRequest){
//     xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = () => {
//         if (xmlhttp.readyState === 4 ){
//             xmlhttp.status === 200 ? console.log(xhr.responseText): console.error('error');
//         }
//     }
//     xmlhttp.open('GET', 'https://www.netguru.com/blog/node-js-books');
//     xmlhttp.send();
// } else{
//     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
// }

/* Promises */

// let done = true
// const isItDoneYet = new Promise((resolve, reject) => {
//   if (done) {
//     const workDone = 'Here is the thing I built';
//     resolve(workDone);
//   } else {
//     const why = 'Still working on something else';
//     reject(why);
//   }
// })
// const checkIfItsDone = () => {
//   isItDoneYet
//     .then(ok => {
//       console.log(ok)
//     })
//     .catch(err => {
//       console.error(err)
//     })
// }
// checkIfItsDone()

/* Promisifying */

// const fs = require('fs');
// const getFile = (fileName) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, (err, data) => {
//       if (err) {
//         reject(err)  // calling `reject` will cause the promise to fail with or without the error passed as an argument
//         return        // and we don't want to go any further
//       }
//       resolve(data)
//     })
//   })
// }
// getFile('/Desktop/algoLearn')
// .then(data => console.log(data))
// .catch(err => console.error(err));

/* Chaining promises */

// const status = response => {
//     if (response.status >= 200 && response.status < 300) {
//       return Promise.resolve(response)
//     }
//     return Promise.reject(new Error(response.statusText))
//   }
//   const json = response => response.json();
  
//   fetch('../../../../../suraj/Desktop/test.json')
// //   .then(status)    // note that the `status` function is actually **called** here, and that it **returns a promise***
//   .then(json)      // likewise, the only difference here is that the `json` function here returns a promise that resolves with `data`
//   .then(data => {  // ... which is why `data` shows up here as the first parameter to the anonymous function
//     console.log('Request succeeded with JSON response', data)
//   })
//   .catch(error => {
//     console.log('Request failed', error)
//   })

/* Handling errors in Promises */

// new Promise((resolve, reject) => {
//     throw new Error('Error')
//   }).catch(err => {
//     console.error(err)
//   });
  
  // or
  
//   new Promise((resolve, reject) => {
//     reject('Error')
//   }).catch(err => {
//     console.error(err)
//   });

/* Cascading errors */

// new Promise((resolve, reject) => {
//     throw new Error('Error')
//   })
//     .catch(err => {
//       throw new Error('Error')
//     })
//     .catch(err => {
//       console.error(err)
//     })

/* Orchestrating promises */

// const f1 = fetch('/testFolder/test.json');
// const f2 = fetch('/testFolder/test1.json');

// Promise.all([f1, f2])
//   .then(res => {
//     console.log('Array of results', res)
//   })
//   .catch(err => {
//     console.error(err)
//   });
// The ES2015 destructuring assignment syntax allows you to also do
//   Promise.all([f1, f2]).then(([res1, res2]) => {
//     console.log('Results', res1, res2)
//   })

/* Promise.race() */

// const first = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'first')
//   })
//   const second = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'second')
//   })
  
//   Promise.race([first, second]).then(result => {
//     console.log(result) // second
//   })

/* Promise.any() */

// const first = new Promise((resolve, reject) => {
//     setTimeout(reject, 500, 'first')
//   })
//   const second = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'second')
//   })
  
//   Promise.any([first, second]).catch(error => {
//     console.log(error) // AggregateError
//   })

  /*  Async and Await */

  // const doSomethingAsync = () => {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve('I did something'), 3000)
  //   })
  // }

  // const doSomething = async () => {
  // console.log(await doSomethingAsync())
  // }
  // console.log('Before')
  // doSomething()
  // console.log('After')

  // const aFunction = async () => {
  //   return 'test'
  // }
  // aFunction().then(console.log) 

  /* Same As */

  // const aFunction = () => {
  //   return Promise.resolve('test')
  // }
  
  // aFunction().then(console.log) ;

  /* Function using Promises */
  // const getData = () =>{
  //   return fetch('../testFolder/test.json')
  //   .then(response => response.json())
  //   .then(id)
  //   .then(userResponse => userResponse.json())
  // }
  // getData()

  /* Function using Async and await */

  // const getData = async () =>{
  //   const res = await fetch('https://dummyjson.com/products');
  //   const products = await res.json();
  //   const product = products[0];
  //   const productRes = await fetch(`/products/${product.title}`);
  //   const productData = await productRes.json()
  //   return productData
  // }

  // getData()

  /* Multiple async functions in series */

  // const promiseToDoSomething = () =>{
  //   return new Promise(resolve => {
  //     setTimeout(() => { 'I did something'},10000)
  //   }) ;
  // };

  // const watchOverSomeoneDoingSomething = async () => {
  //   const something = await promiseToDoSomething()
  //   return something + '\nand I  watchd';
  // };

  // const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
  //   const something = await watchOverSomeoneDoingSomething()
  //   return something + '\nand I watched as well'
  // };
  
  // watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
  //   console.log(res);
  // });
  
  /* EventEmitter */
  
   // eventEmitter.on('start',() =>{
  //   console.log('started');
  // })
  // eventEmitter.emit('start')


  // eventEmitter.on('start', number => {
  //   console.log(`started ${number}`)
  // })
  
  // eventEmitter.emit('start', 23)

  /* Multiple argument EventEmitter */

  // eventEmitter.on('start', (start, end) => {
  //   console.log(`started from ${start} to ${end}`)
  // });
  
  // eventEmitter.emit('start', 1, 100);

  /* HTTP web server */
  // const http = require('http');
  // const port = process.env.PORT || 3000
  // const server = http.createServer((req, res) => {
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/html');
  //   res.end('<h1>Hello World!</h1>');
  // });

  // server.listen(port, () => {
  //   console.log(`Server running at port ${port}`);
  // });

  /* Making HTTP requests with Node.js */

  // const https = require('https');
  // const options = {
  //   hostname: 'localhost',
  //   port: 443,
  //   path: '/todos',
  //   method: 'GET'
  // }
  // const req = https.request(options, res => {
  //   console.log(`statusCode: ${res.statusCode}`);

  //   res.on('data', d => {
  //     process.stdout.write(d);
  //   })
  // })

  // req.on('error', error =>{
  //   console.error(error)
  // })
  // req.end();

  /* HTTP request body data using Node.js in */

  // const axios = require('axios');
  // axios.post('https://dummyjson.com',{
  //   aa:'users'
  // })

  // const express = require('express')
  // const app = express();
  // app.use(
  //   express.urlencoded({
  //     extended: true
  //   })
  // )

  // app.use(express.json());
  // app.post('/todos',(req,res) =>{
  //   console.log(req.body.todo)
  // })

  /* Get HTTP request body data using Node.js */
  // const https = require('https');
  // const server = https.createServer((req,res) => {
  //   let data = "";
  //   req.on('data', chunk => {
  //     console.log(`Data chuck available:${chunk}`)
  //   })
  //   req.on('end',() => {
  //     console.log(JSON.parse(data).todo);
  //     res.end();
  //   });
  // });

  /* with for Await of */

  // const https = require('https');
  // const server = https.createServer(async (req,res) => {
  //   const buffers = [];

  //   for await (const chunk of req){
  //     buffers.push(chunk);

  //   }
  //   const data = Buffer.concat(buffers).toString();
  //   console.log(JSON.parse(data).todo);
  //   res.end();
  // });

  /* Working with file descriptors in Node.js */

  // const fs = require('fs');
  // fs.open('/testFolder/test.txt', 'r', (err,fd) => {
  // })

  // const fs = require('fs')
  // try{
  //   const fd = fs.openSync('../testFolder/test.txt','r')
  //   console.log(fd);
  // } catch (err){
  //   console.error(err)
  // }

  /* Node.js file stats */
// stat() 

  // const fs = require('fs')
  // fs.stat('../testFolder/test.txt', (err,stats) => {
  //   if(err){
  //     console.error(err)
  //     return
  //   }
  // });
// sync()
  // const fs = require('fs');
  // try{
  //   const stats = fs.statSync('../testFolder/test.txt');
  //   console.log(stats);
  // } catch (err){
  //   console.error(err);
  // }

  //stats.isFile(),stats.isDirectory(), stats.isSymboliclink(), stats.size

  // const fs = require('fs')
  // fs.stat('../testFolder/test.txt', (err,stats) =>{
  //   if(err){
  //     console.error(err)
  //     return
  //   }
  //   console.log(stats.isFile());
  //   console.log(stats.isDirectory());
  //   console.log(stats.isDirectory());
  //   console.log(stats.isDirectory());
  //   console.log(stats.isDirectory());
  //   console.log(stats.isSymbolicLink());
  //   console.log(stats.size);
  // });

  /* Node.js File Paths */
// const path = require('path');
// const notes = "../testFolder/test.txt";
// console.log(path.dirname(notes));
// console.log(path.basename(notes));
// console.log(path.extname(notes));
// console.log(path.basename(notes, path.extname(notes)));

//const name = "testFolder";
// path.join('/', name, 'test.txt');
//absolute path
// path.resolve('test.txt');
// when it contains relative specifiers like . or .., or double slashes
// path.normalize('../testFolder/test.txt');

/* Reading files with Node.js */
// const fs = require('fs');
// fs.readFile('../testFolder/test.txt', 'utf8', (err,data) => {
//   if(err){
//     console.error(err)
//     return
//   }
//   console.log(data)
// });
/* Read File Synchronously */ 

// const fs = require('fs');
// try{
//   const data = fs.readFileSync('../testFolder/test.txt', 'utf8');
//   console.log(data);
// } catch (err){
//   console.error(err);
// }

 /* Writing files with Node.js  */

//  const fs = require('fs')
//  const content = "Some content!";
//  fs.writeFile('../testFolder/test.txt', content, err => {
//    if(err){
//      console.error(err);
//      return ;
//    }

//  });

//Write File Synchronously

// const fs = require('fs');
// const content = 'Some content!! synchronously';
// try{
//   fs.writeFileSync('../testFolder/test.txt', content)
// } catch(err){
//   console.error(err);
// }

// fs.writeFile('../testFolder/test.txt', content, { flag: 'a+' }, err => {})

/* Append to a file */
// const fs = require('fs');
// const content = "Appended text";
// fs.appendFile('../testFolder/test.txt', content, err =>{
//   if(err){
//     console.error(err);
//     return
//   }

// });
/* Working with folders in Node.js */

// const fs = require('fs');
// const folderName = '../testFolder/SubFolder';

// try{
//   if(!fs.existsSync(folderName)){
//     fs.mkdirSync(folderName);
//     console.log('Folder is created.');

//   }else{
//     console.log('Already Exists.');
//   }
// } catch (err){
//   console.error(err);
// }

/* Read the content of a directory */

// const fs = require('fs');
// const pathName = require('path');
// const folderPath = '../testFolder';
// // console.log(fs.readdirSync(folderPath));

// // You can get the full path: 
// let show = fs.readdirSync(folderPath).map(fileName => { 
//   return pathName.join(folderPath, fileName);
// });
// console.log(show);

// filter the results to only return the files, and exclude the folders: 

// const isFile = fileName => {
//   return fs.lstatSync(fileName).isFile();
// }
// let show = 
// fs.readdirSync(folderPath).map(fileName => {
//   return pathName.join(folderPath, fileName)
// })
// .filter(isFile);

// console.log(isFile);

/* Rename Folder */
// fs.renameSync('../testFolder/Sub-Folder','../testFolder/SubFolder', err => {
//   if (err){
//     console.error(err);
//     return
//   }
// });

/* Remove Folder */
// const dir = "../testFolder/subFolder";
// fs.rmdir()

// fs.rmdir(dir, {recursive:true}, (err) =>{
//   if(err){
//     throw err;
//   }
//   console.log(`${dir} is deleted!`);
// });
// fs.rm()

// fs.rm(dir, {recursive:true}, (err) =>{
//   if(err){
//     throw err;
//   }
//   console.log(`${dir} is deleted!`);
// });

/* using fs-extra library */
// const fs = require('fs-extra');

// const dir = '../testFolder/subFolder';

// fs.remove(dir, err => {
//   console.error(err);
// });

/* using fs-extra library using Promise */
// const dir = '../testFolder/subFolder';
// fs.remove(dir)
// .then(() => {
//   console.log(`${dir} is deleted!`);
// })
// .catch(err =>{
//   console.error(err);
// })

/* using fs-extra library using with async/await: */

// async function removeDir(dir){
//   try{
//     await fs.remove(dir)
//     console.log(`${dir} is deleted!`);
//   } catch (err){
//     console.error(err);
//   }
// }
// const dir = '../testFolder/subFolder1';
// removeDir(dir);
// =======================================================
/* 'path' Module */
const PATH = require('path');
const dir = '../testFolder/test.txt';
const folderName = 'users';
// console.log(PATH.basename(dir));  //test.txt 
// console.log(PATH.delimiter);   // ;(windows) :(Linux/MacOS)
// console.log(PATH.dirname(dir));    //../testFolder
// console.log(PATH.extname(dir));   //.txt
// console.log(PATH.format({dir:'../testFolder', base:'test.txt'}));    //../testFolder/test.txt
// console.log(PATH.format({root:'../testFolder', name:'test', ext:'.txt'}));    //../testFoldertest.txt
// console.log(PATH.isAbsolute(dir)); // false {false if './' , true if '/'}
// console.log(PATH.join('/', 'users', folderName, 'test1.txt'));  ///users/users/test1.txt
// console.log(PATH.normalize('/users/joe/..//test1.txt'));  ///users/test1.txt
// console.log(PATH.parse('/users/test.txt'));    //{root: '/', dir: '/users', base: 'test.txt', ext: '.txt', name: 'test'}
// console.log(PATH.posix);
// console.log(PATH.relative('/Users/joe', '/Users/joe/test.txt'));  //'test.txt'
// console.log(PATH.relative('/Users/joe', '/Users/joe/something/test.txt'));  //'something/test.txt'

// console.log(PATH.resolve('tmp', 'joe.txt'));    // '/tmp/joe.txt'
// console.log(PATH.sep);
// console.log(PATH.win32);

// =======================================================

/* 'os' Module */

// const OS = require('os');

// console.log(OS.arch());
// console.log(OS.constants);
// console.log(OS.cpus());
// console.log(OS.endianness());
// console.log(OS.EOL);
// console.log(OS.freemem());
// console.log(OS.hostname());
// console.log(OS.loadavg());
// console.log(OS.networkInterfaces());
// console.log(OS.platform());
// console.log(OS.release());
// console.log(OS.tmpdir());
// console.log(OS.totalmem());
// console.log(OS.type());
// console.log(OS.uptime());
// console.log(OS.userInfo());
// =====================================================

/* 'events' Module */ 

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();
// eventEmitter.on('scream', function() {
//   console.log('A scream is detected!');
// });
// eventEmitter.emit('scream');
// //.................
// eventEmitter.off('scream', function() {
//   console.log('A scream is removed!');
// });
// eventEmitter.emit('scream');
// //.................
// eventEmitter.addListener('Listenerscream', function() {
//   console.log('A Listenerscream is detected!');
// });
// eventEmitter.emit('Listenerscream');
// //.................
// eventEmitter.removeListener('Listenerscream', function() {
//   console.log('A Listenerscream is removed!');
// });
// //.................
eventEmitter.once('my-event', () => {
  console.log('A MyEvents ');
});

  eventEmitter.emit('my-event'); 
  eventEmitter.emit('my-event');
// //.................
  // eventEmitter.emit('Listenerscream')
  // console.log(eventEmitter.eventNames());  // 'scream'
  // console.log(eventEmitter.defaultMaxListeners);  //  10
  // console.log(eventEmitter.getMaxListeners());   // Default: 10
  // console.log(eventEmitter.listenerCount('scream')); //  1
  // console.log(eventEmitter.listeners('scream'));  //A scream is detected! [ [Function (anonymous)] ]
  // console.log(eventEmitter.prependListener());
  // console.log(eventEmitter.prependOnceListener());
  // console.log(eventEmitter.removeAllListeners());
  // console.log(eventEmitter.removeListener());
  // console.log(eventEmitter.setMaxListeners(50));
