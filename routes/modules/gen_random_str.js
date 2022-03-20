// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  console.log('index: ',index)
  return array[index]
}

// define generate Random String function
function generateRanStr() {
  
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '0123456789'
     
  const length = 5
  let collection = []

  collection = collection.concat(lowerCaseLetters.split(''))
  collection = collection.concat(upperCaseLetters.split(''))
  collection = collection.concat(numbers.split(''))
  
  //console.log('collection', collection, collection.length)
  
  // start generating random string
  //console.log('sample(collection)', sample(collection))
  let ranStr = ''
  for (let i = 0; i < length; i++) {
    ranStr += sample(collection)
  }

  // return the generated random string
  //console.log('Random String', ranStr)
  return ranStr
  //console.log('This function will generate password')
}

// invoke generateRanStr function
//generateRanStr()

// export generatePassword function for other files to use
module.exports = generateRanStr