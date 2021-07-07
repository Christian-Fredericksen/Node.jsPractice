const sayHi = (name) => {
    console.log(`Hello there, ${name}.`)
}

module.exports = sayHi  // because it is the only thing we are exporting we don't need to 
// wrap it in any braces.

// go back to '3-modulesLesson.js' where we left off
// to learn how the app can receive this export{} obj.