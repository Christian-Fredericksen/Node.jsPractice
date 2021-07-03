// data to isolate
const secret = 'SUPER SECRET'
// data to share
const john = 'John'
const peter = 'Peter'

// this console log:

console.log(module)

// produces this '4-names.js' Module{} obj(ect). in this Module{} obj are several
// properties including an exports{} obj. CommonJS syntax says that any info 
// included in the exports{} obj will be available throughout the app. Remember
// we're only sharing the info we want to.
// so we can set the content of this Module{}'s export{}. EXCLUSIVE OF 
// **const secret = 'SUPER SECRET'** keeping it isolated here and inmutable by any 
// part of the application. 
// this is how we access the export{} and set its value:

module.exports = { john, peter }

// we now have the exports{} obj in this '4-names.js' Module{} ready to share ONLY the data we want.
// go back to '3-modulesLesson.js' where we left off
// to learn how the app can receive this export{} obj.