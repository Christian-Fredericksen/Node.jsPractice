// NEXT WE WILL look at the fs --file system-- module. There are two approaches we can use with this
// module. Asynchronously (non-blockin) or synchronously (blocking). Right now we will cover the setup
// for both approaches. Later on we will discuss the differences between the two and when you might
// choose one over the other. For now let's just think of it as two different methods.
// let's look at the synchronous approaches first.
// let's just destructure the methods we want to explore.

const {readFileSync, writeFileSync} = require('fs');  // KEEP IN MIND this line of code is the same as writing:
// const fs = require('fs');
// fs.readFileSync          
// THIS IS JUST a different way to access the methods - by destructuring them from the module.

// IN YOUR 'content' folder add two new .txt files. 'first.txt' and 'second.txt'
// in 'first.txt' write 'Hello this is the first text file.'
// in 'second.txt' write 'Hello this is the second text file.'
// NOW LET'S SEE how we can read from the file system.
// we have 'readFileSync'. a method that takes two parameters. 1: a path to the specific file and
// 2: the end coding so the node know how to decode the file. by default we will use 'utf8' but if
// want to be specific you can enter the second parameter and a list of options will pop up. just
// select 'utf8'.
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first, second)  //  NOW IF WE run the node command for this file we should be returned
// the content of both of the '.txt' files we created.
// here we have demonstrated how to read a file. lets create one utilizing the 'writeFileSync' method








