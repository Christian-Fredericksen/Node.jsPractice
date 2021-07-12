// THIS IS TO GIVE A GENERAL UNDERSTANDING OF BUILT IN MODULES, THEIR FUNCTIONS, AND
// A HANDFUL OF OPTIONS TO INVOKE THEM.

// the OS Module is a built in module that provides many properties and methods for interacting 
// with the operating system and the server.
// the general set up to use these built in modules looks something like this:

const os = require('os')  // set some var equal to the module. because it's built in we DO NOT
                          // use the './'directory notation.
                          // this gives us use of 'os.builtInFunctions()' For example:

// we can get info about the user:
const user = os.userInfo() // <--- var assignment is one way to invoke methods of built in modules.
console.log(user)         // run 'node 8-os-module' in the terminal and you will get a user object{}
                          // with attributes and values.  

// let's invoke another function in a console log:
console.log(`The System Uptime is ${os.uptime()} seconds.`) // let's use template string (`back-ticks`)
                          // and interpolate our function invocation. running 'node 8-os-module' will
                          // give us the same user{} and a message telling us how long the system has
                          // been running in seconds.
                
// wanna try to invoke a bunch of stuff in an object?:
const currentOS = {         // <---here we set a var and create an {} that contains a few
    name: os.type(),        // <---(properties:) set to ( module.function() )
    release: os.release(),  // <---(properties:) set to ( module.function() )
    totalMem: os.totalmem(),// <---(properties:) set to ( module.function() )
    freeMem: os.freemem(),  // <---(properties:) set to ( module.function() )
}
console.log(currentOS)      // run 'node 8-os-module' and we get all the previous data and
                            // the object we just created.

// here we have explored, a little bit, the OS Module that comes built into node.js. this is just
// scratching the surface of what we can do with this module to interact with the operating system.
// let's move on and see how node.js let's interact with the file system. Something we can't do with 
// JavaScript in the browser. 
