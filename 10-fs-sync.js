// NEXT WE WILL look at the fs --file system-- module. There are two approaches we can use with this
// module. Synchronously (blocking) or asynchronously (non-blocking). Right now we will cover the setup
// for both approaches. Later on we will discuss the differences between the two and when you might
// choose one over the other. For now let's just think of it as two different methods.
// let's look at the synchronous approach first.
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

writeFileSync('./content/result-sync.txt',  //  INVOKE THE METHOD and pass the file path you want to
//  create as the first parameter,
`Here is the result: ${first} ${second}`   //  and a value for the second parameter.
)
//  run the node command for this file and you will see a 'result-sync.txt' file was created as well
//  as the return in the console. if you open that .txt file you will see its content (value) is
//  a combining of 'first' and 'second' .txt files. this file and its content were created because
//  Node.js searched for the path we provided and did not find it. if it had found the file path, Node
//  would have overwritten the contents of the original file as we can see demonstrated by the 
//  following code:

writeFileSync('./content/result-sync.txt',
`See how things changed from the first time?: ${second} ${first}`,
// {flag: 'a'}
)
// the contents of the original file have been overwritten. 
// now if all you wanted to do was add to the file, you could do that with a third parameter.
// it is an options object with a property name 'flag:' with a value of 'a' comment back in line 41
// and you will see how this option 'a'ppends content to the original file. 

// This was the synchronous approach. next we will see how the asynchronous approach works.






