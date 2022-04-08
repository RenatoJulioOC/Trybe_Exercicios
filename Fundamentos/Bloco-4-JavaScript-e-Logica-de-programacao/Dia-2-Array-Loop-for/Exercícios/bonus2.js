//CRESCENTE

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let segunda = 1; segunda < numbers.length; segunda++) {
    for (let primeira = 0; primeira < segunda; primeira++) {
        if (numbers[segunda] < numbers[primeira]) {
            let position = numbers[primeira];
            numbers[primeira] = numbers[segunda]
            numbers[segunda] = position;
        }
    }
}
console.log(numbers);