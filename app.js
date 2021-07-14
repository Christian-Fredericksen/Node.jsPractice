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
// will see that the '.join' method cleans it up nicely
