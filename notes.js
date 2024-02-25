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
