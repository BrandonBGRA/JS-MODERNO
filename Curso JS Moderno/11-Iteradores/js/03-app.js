// Fizz Buzz

// 3 6 9 12... vamos a imprimir fizz
// 5 10 15... vamos a imprimir buzz
// 15 30 45... vamos a imprimir fizzbuzz

for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} Fizzbuzz`);
    continue;
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  }
}
