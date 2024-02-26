//alert("fdd");

let scoreDolphins = (96+108+89)/3
let scoreKoalas= (88+91+110)/3


if(scoreDolphins>scoreKoalas){console.log("Dolphins win the trophy")}
else if(scoreDolphins<scoreKoalas) {console.log("Koalas win the trophy")}
else {console.log("Both win the trophy")}


function fruitprocessor(orange,apple){
    const juice = `Juice with ${apple} apples and ${orange} oranges`
    return juice

}

console.log(fruitprocessor(12,32))

const applejuice= fruitprocessor(5,3)
console.log(applejuice)


//function declaration
function calcage1(birthyeah){
    return 2037-birthyeah
}


const age1 = calcage1(1991)

//function expression

const calcage2=function(birthyeah){
    return 2037 - birthyeah
}

const age2 = calcage2(1993)


console.log(age1,age2)


//Arrow functions
const greet = (name) => {
    console.log(`Hello, ${name}!`);
  };
  
  greet("John"); // Output: Hello, John!


  //funciton inside other functions
  
const cutPieces = function (fruit){
    return fruit * 4;
}

const fruitprocessor = function (apples,oranges){
    const applePieces = cutPieces(apples)
    const orangePieces = cutPieces(oranges)
    
    const juice = `Juice with ${applePieces} and ${orangePieces}`

    return juice
}

console.log(fruitprocessor(3,4))

const calcAverage =  (first,second,third) => {
    let avg = (first+second+third)/3
    return avg

    
}
let scoreDolphins =calcAverage(1,1,1)
let scoreKoalas=calcAverage(1,1,2)


function checkWinner (avgDolphins, avgKoalas){
    if (avgDolphins>avgKoalas){
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`)

    }
    else if (avgDolphins<avgKoalas){
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`)
    }
    else{
        console.log("No team wins...")

    }

    
}

checkWinner(scoreDolphins,scoreKoalas)


//Arrays

const friends = ['ds', 'sd', 'ls']


friends[2] = 'jay'

console.log(friends[2])


console.log(friends.length)

//add elements

friends.push('jays') //lo agrega al final

friends.unshift('john')//lo agrega al inicio

//remove elements

friends.pop();//removes the last one
friends.shift();//removes first one


friends.indexOf('jays');//returns the number of the elements in the array
friends.includes('bob');//returns a boolean if its true or false

//objects

const jonas={
    firstname: 'Jonas',
    lastname: 'schedeman',
    age: 2037-1991,
    job: 'teacher',
    friends: ['michael','jon']

};

console.log(jonas['job'])



const interestedIn = prompt('what do you want to know about jonas');

if (jonas[interestedIn]){
    console.log(jonas[interestedIn])
}

jonas.location='portugal'

jonas['twitter']='ddddddddd'

const interestedIns = prompt('what do you want to know about jonas');

if (jonas[interestedIns]){
    console.log(jonas[interestedIns])
}

//challenge

console.log(`${jonas.firstname} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`)


//method

const jonas={
    firstname: 'Jonas',
    lastname: 'schedeman',
    age: 2037-1991,
    job: 'teacher',
    friends: ['michael','jon'],
    hasdriverslicense: true,
    birthyear: 1991,

    calcAge: function () {
        this.age=2037-this.birthyear;
        return this.age;
    }
,
    getsummary: function(){
        return `${this.firstname} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasdriverslicense  ? 'a' : 'no'} drivers license`
    }
};

console.log(jonas.calcAge());

console.log(jonas.getsummary());


const mark ={
    fullname: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function (){
        const markbmi =  BMI=this.mass/(this.height*this.height);
       return markbmi
    }
};


const john ={
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function (){
        const johnbmi = BMI=this.mass/(this.height*this.height);
        return johnbmi
     }
};

console.log(`John smiths bmi ${john.calcBMI()} is higher than mark millers ${mark.calcBMI()}`)




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