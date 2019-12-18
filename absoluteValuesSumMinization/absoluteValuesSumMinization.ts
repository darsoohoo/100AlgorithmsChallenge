function absoluteValuesSumMinimization(a: number[]): number {
    // check if array has even or odd numbers
    // if even divide the array length by 2 and then get the last number of the array
    // if odd divide the array length by two then round down the decimal and get value of that index
    const isEven = a.length % 2 === 0;
    if (isEven) {
        return a[a.length / 2 - 1];
    } else {
        return a[Math.floor(a.length / 2)];
    }

}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8])); 