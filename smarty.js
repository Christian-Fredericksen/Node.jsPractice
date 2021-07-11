const pets = ['cat', 'dog']
const cat = 'Fluffy'
const dog = 'Fido'

const animalIntro = (pet, name) => {
    console.log(`My ${pet}'s name is ${name}!`)
}

animalIntro(pets[0], cat)
animalIntro(pets[1], dog)

module.exports = {pets, cat, dog}