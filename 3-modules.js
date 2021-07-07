// Node is written in CommonJS, every file in node is a module (by default)
// Modules - Are Encapsulated Code (we only share minimum data )

// to run the code on lines 16 - 22 & the function calls on lines 57 - 59 
// enter 'node 3-modules.js' into the command line to see what is returned in terminal.
// so far we have a few names, a function, and 3 function calls.
// we can see this file getting messy already.
// also note the secret variable (sv) is vulnerable and subject to change.
// it's too accessible. Kind of *GLOBAL*, if you will. see line 2 above.
// let's start putting things in their own modules.
// the names will go in one module. There we can make the sv off limits. 
// the functions in another. Comment out lines 16-22 when done.

//*********************************************
//*********************************************  
// const secret = 'SUPER SECRET'           
// const john = 'John'                     
// const peter = 'Peter'                   
                                        
// const sayHi = (name) => {               
//     console.log(`Hello there, ${name}!`)
// }                                       
//*********************************************
//*********************************************

// at this point we have no access to the sayhi() function, or the peter and john variables.
// running 'node 3-modules.js' will throw an error saying:
// 'ReferenceError: sayhi is not defined'

// let's go to the module '4-names.js' to see how we begin gaining/restricting
// access to the information in that module.

              // CONTINUITY BREAK //
              // CONTINUITY BREAK //
              // CONTINUITY BREAK //

// remember in '2-globals.js' we learned of the global variable 'require'
// " require    - function to use modules (CommonJS) "
// this is why we have lines 43 & 45. Go ahead and comment those back in and comment out lines 57-59.



 const names = require('./4-names') // we set a var equal to require(), passing in the path
// of the export{} obj we want to use as an argument.
 console.log(names) // this will return a reference to the names module and how it's connected to
// this '3-modules.js' file. But most importantly it returns the export{} obj we shared.
// run 'node 3-modules.js' in the command line and see for yourself.

// this '3-modules.js' file now has access to the minimum data we want to share from the
// '4-names.js' file. and the 'secret' variable is safely stored and protected. We also have
// access to the info in '5-functions.js'.

// comment back in line 'sayHi' and run the node command again. we see it runs the 'sayHi' function.
// for Susan just fine. But errors at peter. That's because we must refference the module these 
// variables live in. Change the call to look like 'sayHi(names.peter)' and the same for john.

 const sayHi = require('./5-functions')
 sayHi('Susan')
 sayHi(names.peter)
 sayHi(names.john)

 // an alternative way of exporting data is called "exporting as you go". open up the
 // '6-alternativeExport.js' module/file to see what that looks like.

              // CONTINUITY BREAK //
              // CONTINUITY BREAK //
              // CONTINUITY BREAK //

// now comment in lines 70 & 71 and see how it all works.
 const data = require('./6-alternateExport') // set a variable equal to the object path
 console.log(data)

// now for something really fun. check out the '7-brainGrenade.js' module

// now comment in line 76 and run the node command for this module
 require('./7-brainGrenade')
// because we invoke the function in the module, when the app reaches the 'require'd file that 
// function will run.


