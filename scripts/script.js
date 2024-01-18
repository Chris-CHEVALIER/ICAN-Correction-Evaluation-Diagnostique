let age = 17
console.log(age)

if (age > 0 && age < 110) {
  if (age >= 18) {
    document.write('Vous êtes majeur !')
  } else {
    document.write('Vous êtes mineur...')
  }
}

let fruits = ['banane', 'pomme', 'cerise']

console.table(fruits)

console.log(fruits[1])

fruits.push("concat")
for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i]
  console.log(fruit)
}


let lorem = document.querySelector('.lorem')
console.log(lorem)

lorem.addEventListener('click', function () {
  lorem.style.display = 'none'
})

