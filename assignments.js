

//for loop 

for (let rep=1; rep<=0; rep++){
    console.log(`lifting weights repetition ${rep}`)
}

const jonas=[
    'Jonas',
   'schedeman',
    2037-1991,
   'teacher',
   ['michael','jon']

];

for(let i= 0 ; i<jonas.length; i++){
    console.log(jonas[i]);
}


const years = [1991, 2007, 1969,2020];
const ages = [];

for (let i=0;i<years.length;i++){
    ages.push(2037-years[i])
}

console.log(ages)

console.log('ONLY STRINGS')
for (let i=0;i<years.length;i++){
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i])
}


console.log('break with number')
for (let i=0;i<years.length;i++){
    if(typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i])
}