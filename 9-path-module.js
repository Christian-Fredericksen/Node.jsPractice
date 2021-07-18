// ANOTEHR USEFUL MODULE is a path module that allows us to easily interact with the file path.

const path = require("path"); //<---LIKE BEFORE, we set a var equal to whatever module. in this case
// the 'path' module. like we saw in the os module, if we enter 'path.' here
// in the text editor we will get a list of this module's built-in
// methods and properties.

console.log(path.sep); // A USEFUL PROPERTY is a separater property that returns a platform specific
// separater. running '9-path-module.js' will return my specific platform's
// separator in the console, which is a forward slash '/'.
// different platforms have different values to represent their separators.

// LET'S LOOK AT the '.join' method. This does (2) things: FIRST it joins a sequence of path segments
// together using that platform specific separator as the eliminator. and SECONDLY it returns a
// normalized path result. To demonastrate lets create a new FOLDER not a file called 'content'.
// then inside that folder create another folder called 'subfolder'. and in that folder create a
// text FILE called 'test.txt'. you can type anything into this file. now let's see what it looks
// like when we .join them together:

const filePath = path.join("/content", "subfolder", "test.txt"); // AS USUAL SET a var equal to the

// to the module.property in this case 'path.join()' and we pass in the args as strings. If we

console.log(filePath); // WE SHOULD SEE the complete and normalized file path.
//  VOILA!
// Now here is something neat. change the args we passed in to include some craziness like this
// path.join("/content/", "./subfolder/", "//test.txt/") run the app in the command line and you
// will see that the '.join' method cleans it up nicely.
// Let's say we only want the last portion of our file path, the "test.txt" part. How do we access
// that? Like this:
const base = path.basename(filePath); // SET A VAR equal to the module.method(thePath)
console.log(base) // IF WE RUN '9-path-module.js' in the command line we should see all of our
// console logs. first the 'path.sep', then 'filePath' to demonstrate 'path.join' followed
// by 'base' demonstrating the 'basename' method.

// AT THIS POINT IT IS IMPORTANT TO REMEMBER THAT UP TO THIS POINT WE ARE JUST GLOSSING OVER SOME
// IMPORTANT BASICS OF NODE.JS. TO UNDERSTAND WHAT'S AVAILABLE AND THE SYNTAX TO ACCESS IT.
// REMEMBER THIS STUFF. IT ALL CONNECTS AND YOU WILL SEE HOW AS WE MOVE FORWARD AND START
// BUILDING SOME REAL WORLD APPLICABLES. WITH THAT SAID...ONWARD!

// NOW FOR THE last method to highlight in this path module is the 'resolve' method.
// Sometimes our apps need to return an 'absolute path' or 'full path'.
// The absolute path includes the complete location of the file or folder, including which
// drive it is on. Why would we want to know this? Because our app will run in different environments.
// And the path to a resource on your local environment would be different from one on, say, Heroku.

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');  // REMEMBER IN MODULE
// 2 we talked aboute the global var "double underscore dirname"? as usual, we set a var equal to
// 'module.method()'. we pass into the 'resolve()' method the global var '__dirname' followed by the
// path we want.
console.log(absolute) // NOTICE THE FULL path in the console.

// These are just a few of methods available. For more info be sure to check the official docs at:
// https://nodejs.dev/learn/the-nodejs-path-module


