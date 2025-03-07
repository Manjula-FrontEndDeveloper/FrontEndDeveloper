const myHero=['My krishna', 'The Buddha', 'Sri Rama', 'Lord Vishnu']
const moreHero=[' Bhagth Singh', ' Mangal Pandey', ' Rani Laxmi Bai']

myHero.push(moreHero)
const allHero=myHero.concat(moreHero)
const allNewHero=myHero.join(moreHero)
console.log(myHero)
console.log(allHero)
console.log(allNewHero)

// spread operator----
const myNewHeros=[...myHero, ...moreHero]

//------
const oneMoreArray=[1, 2, 3, [4, 6, 8], 0, 6, 7, [1, 8,[7,8,9]]]
const realArray=oneMoreArray.flat(Infinity)
console.log(realArray);
console.log(Array.isArray('Manjula'));
console.log(Array.from('Manjula'));
console.log(Array.from({name:'Manjula'}));// inteview purpose

const score1=100
const score2=200
const score3=300

console.log(Array.of(score1, score2, score3))


