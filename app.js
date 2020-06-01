/* let age = 2;
let age; // переменная
age = 2;
10; //литерал
let age = 10;
`Hi, How are you`;
let name;
let a = 10;
let b = 4;
a + b;
console.log(a + b);
let a;
a = 10;
let b;
b = 4;
let a, b;
a = 4;
b = 6;
let a = b = 3;
console.log(a + b);
let a = 3;
let b = 3;
let c = 4;
console.log(a);
console.log(b);
console.log(c);
b = c;
console.log(a + b);
console.log(a, b);
console.log(`fdf`, a, b);


let a = 2;
console.log(a);
console.log(typeof a);
let a = Infinity;
let a = `Hello`; 


const pin = 1;
pin = 2; 

let car = {
  color: `red`,
  maxSpeed: 250,
  audio: {
    brand: `Sony`,
    speakers: 12
  }
};
console.log(typeof car);
console.log(car);
car.color = `green`;



car[`color`] = `red`;
let carProp = `color`;
car[carProp] = `red`;
console.log(car.audio.brand);



let car = {
  color: `red`,
  maxSpeed: 250,
  audio: {
    brand: `Sony`,
    speakers: 12
  }
};

if(car.color == `red`){
  console.log(`Автомобиль красный`);
}else if(car.color == `green`){
  console.log(`Автомобиль зеленый`);
}else{
  console.log(`Цвет неопределен`);
}

сar.color `green` ? `Зеленый` : `Красный `




//Функции
let car = {
  color: `red`,
  maxSpeed: 250,
  audio: {
    brand: `Sony`,
    speakers: 12
  }
};

console.log(car.color);
car.color = `green`;
console.log(car.color);

function colorReset() {
  car.color = `red`;
  console.log(car.color);
}
 colorReset();



 //Параметры
 let car = {
  color: `red`,
};

let car2 = {
  color: `green`,
};

colorChange(car2);

function colorChange(theCar) {
  theCar.color = `yellow`;
}
console.log(`car: ` + car.color);
console.log(`car2: ` + car2.color);
 */

/* //RETURN
function watch(message){
  return message + `  Вообще пидорская`;
}
let message = watch(`Пидорская тема2`); 

console.log(message);

//RETURN
function watch(message){
  return;
}
let message = watch(`Пидорская тема2`); 

console.log(message);
 */

  
//Анонимные функции
/* (function() {
  console.log(`We are anonymus`);
})();


setTimeout(function(){
  console.log(`Test`); 
},3000);

//Стрелочная функция
let anonym = function(){
  console.log(`you are anonymus`);
}; 
anonym();

let anonym = () => {
  let count = 2;
  return `you are anonymus ` + 2;
}
console.log(anonym());

let anonym = (message) => {
  let count = 2;
  return message + 2;
}
console.log(anonym(`we are anon`));

let anonym = message => {
  let count = 2;
  return message + 2;
}
console.log(anonym(`we are anon`)); */


//Методы
/* function getMessage(){
  console.log(`Я функция`);
};
getMessage();

let car = {
  getMessage: function(){
    console.log(`Я метод`);
  }
}
car.getMessage();

let car = {
  color: `red`,
  open: function(message){
    console.log(message);
  } 
}
car.open(`Открыто`);

let car = {
  color: `red`,
  open(message){
    console.log(message);
  } 
}
car.open(`Открыто - 2`);

let car = {
  color: `red`,
  open(){
    console.log(`Открыто - 3`);
  } 
}
car.open(); */


/* //Массивы
let array = [1, 3, 10, 69];
console.log(array[2]);


let car = {
  color: `red`
}
let array = [10,`Просто о мире `, `ХаудиХо`, {
  color: `red`}];
   
console.log(array[3]);


//Циклы
for( let i = 0; i <= 1000; i++){
  console.log(`Iron man, Mark - ` + i);
}

 
let drivers = [`Ivan`, `Vanyok`, `Lexa`];
console.log(drivers[0]);
console.log(drivers[1]);

for( let i = 0; i < drivers.length; i++){
  console.log(drivers[i]);
}
 */

 //Объект против Класса
//  let hater = {
//    firstName: `Bill`,
//    lastName: `Gates`,
//    getName(){
//      return `${this.firstName} ${this.lastName}`;
//    }
//  }
//  console.log(hater.getName());
 

//  let hater2 = {
//   firstName: `Doc`,
//   lastName: `Doom`,
//   getName(){
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// console.log(hater2.getName());

// class Hater {
//   constructor(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   sayName(){
//     console.log(`Еще один уебок: ${this.firstName} ${this.lastName}`);
    
//   }
// }

// let hater1 = new Hater(`Norman`, `Osborn`);
// hater1.sayName();
// let hater2 = new Hater(`Сеньйор`, `Местный`);
// hater2.sayName();












//Sorax
