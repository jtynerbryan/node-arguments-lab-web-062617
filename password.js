const length = process.argv[2]
const numberOfPasswords = process.argv[3]

function generatePassword(length) {
  let password = []

  for (let i = 0; i < length; i++) {
    password.push(Math.floor(Math.random() * 10)).toString()
  }

  console.log(password.join(''))
}

for (let i = 0; i < numberOfPasswords; i++) {
  generatePassword(length)
}

process.exit(0)
