//0. Факториал числа
let factorialNumber = +prompt ("Please enter your number");
let result = 1;

for(i = 0; i < factorialNumber; i++){
  result = result * (factorialNumber - i);
}

alert(result); 

// 1  Вывод чисел от 25 до 0 (порядок уменьшения)
// WHILE
let counter = 25;
while(counter >= 0){
  counter--;
  console.log(counter);
}

// DO...WHILE
let counter = 25;
do{
  console.log(counter);
  counter--;
}
while(counter >= 0);

// FOR
for(let i = 25; i >= 0; i--){
  console.log(i);
}



// 2  Вывод чисел от 10 до 50, которые кратны 5
// WHILE
let counter = 10;
while(true){
  if (counter % 5 === 0){
    console.log(counter);
  }
  counter++;
  if(counter > 50){
    break;
  }
}

// DO...WHILE

//FOR
for (let i = 10; i <= 50; i++){
  if (i % 5 === 0){
    console.log(i);
  }
}


// 3  Найти сумму чисел в пределах от 1 до 100
// WHILE

// DO...WHILE
let result = 0;
let i = 1;

do{
  i = i + 1;
  result = result + i;
  console.log(result);
}
while(i <= 100);

// FOR
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);



// 4  Предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит
// WHILE
const correctPassword = 6;
while(true){
  const getPassword = +prompt("Решите пример: 2 + 2 * 2");
  if(getPassword === correctPassword){
    break;
  }
}
alert("Правильно");

// DO...WHILE
// FOR