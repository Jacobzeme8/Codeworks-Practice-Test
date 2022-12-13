const ageToVote = 100

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

// YOUR JS CODE

let currentYear = 2022
let jsReleaseYear = 1995

  let age = currentYear - jsReleaseYear
  console.log("Current age of java script is ", age)



if(age >= ageToVote){
  console.log("JavaScript is old enough to vote")
}
else{
  console.log("JavaScript is not old enought to vote")
}
console.log("starting")
let i
for(i=0; i<=100; i++){
  if(i % 10 ==0 ){
  console.log(i)
  }
  if(i==50){
    console.log("Halfway")
  }
  if(i==100){
    console.log("finished")
  }
}


console.log(`${user.name} lives at ${user.address.street} ${user.address.city}`)

for(let x=0; x<5; x++){
  if(cases[x].releaseYear == 1903){
  console.log(cases[x].title, cases[x].releaseYear)
  }
}





