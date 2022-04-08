let numbers = [0];

for (let i = 0; i <= numbers.length; i++) {
 if (numbers[i] < 25) {
       numbers.push((numbers[i] + 1) / 2);
  }
}
console.log(numbers);