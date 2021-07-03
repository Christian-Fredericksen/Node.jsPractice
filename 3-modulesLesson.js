// Node is written in CommonJS, every file in node is a module (by default)
// Modules - Are Encapsulated Code (we only share minimum data )

// to run the code on lines xx - xx enter 'node 3-modulesLesson.js'
// into the command line to see what is returned in terminal.
// so far we have a few names, a function, and 3 calls to a function.
// we can see this file getting messy already.
// also note the secret variable (sv) is vulnerable and subject to change.
// it's too accessible. Kind of *GLOBAL*, if you will. see line 2 above.
// let's start putting things in their own modules.
// the names will go in one module. There we can make the sv off limits. 
// the functions in another. Comment out lines 14-20 when done.

//*********************************************
//*********************************************  
// const secret = 'SUPER SECRET'           
// const john = 'John'                     
// const peter = 'Peter'                   
//                                         
// const sayHi = (name) => {               
//     console.log(`Hello there, ${name}!`)
// }                                       
//*********************************************
//*********************************************

// at this point we have no access to the sayhi() function, or the peter and john variables.
// running 'node 3-modulesLesson.js' will throw an error saying:
// 'ReferenceError: sayhi is not defined'

// let's go to the module '4-names.js' to see how we begin gaining/restricting
// access to the information in that module.

              // CONTINUITY BREAK //
              // CONTINUITY BREAK //
              // CONTINUITY BREAK //

// remember in '2-globals.js' we learned of the global variable 'require'
// " require    - function to use modules (CommonJS) "
// this is why we have lines xx & xx. Go ahead and comment those back in and comment out lines xx-xx.



const names = require('./4-names') // we set a var equal to the require() passing in the path
// of the export{} obj we want to use as an argument.
console.log(names) // this will return a reference to the names module and how it's connected to
// this modulesLesson file. But most importantly it returns the export{} obj we shared.
// run 'node 3-modulesLesson.js' in the command line and see for yourself.

// this modulesLesson file now has access to the minimum data we want to share from the
// '4-names.js' file. and the 'secret' variable is safely stored and protected.

const sayHi = require('./5-functions')
 sayHi('Susan')
 sayHi(names.peter)
 sayHi(names.john)


