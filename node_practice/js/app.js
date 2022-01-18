// const username = 'suraj';
// const age = 1;
// const hobby = [{'indoor':'carrom'},{'outdoor':'cricket'}];
// console.log(`my name  is ${username}. My fav indoor game is ${hobby[0]['indoor']} and outdoor game is ${hobby[1]['outdoor']}`);

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

/* Measureing time */

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

const first = new Promise((resolve, reject) => {
    setTimeout(reject, 500, 'first')
  })
  const second = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'second')
  })
  
  Promise.any([first, second]).catch(error => {
    console.log(error) // AggregateError
  })

  