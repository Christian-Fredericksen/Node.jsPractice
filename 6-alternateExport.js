// we are used to declaring variables and assigning values like this:
const itemsA = ['item1', 'item2']
const person = {
    name: 'bob',
}
// and exporting like this:
module.exports = {itemsA, person}


// an alternative to accomplish the same thing would look like this:
module.exports.itemsB = ['item3', 'item4'] // <----here we are accessing the exports{} obj,
// declaring a varaiable, setting its value equal to an array and making it a property of
// the exports{} obj all in one clean line.
// we can also export an obj{} as the value of a property in the exports{} obj like this:
module.exports.friend = person //<---here we accessed the exports{} obj of this
// '6-alternativeExport.js' module, and assigned it a 'friend' property equal to our person{} obj.
// Navigate back to '3-modulesLesson.js' to see what this returns.