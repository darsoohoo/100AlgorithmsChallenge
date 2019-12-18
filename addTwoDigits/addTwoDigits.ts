function addTwoDigits(n: any): number {
    let sum = 0;
    
    let array = `${n}`.split('');
    
    array.forEach(element => {
        sum += parseInt(element, 10);
    });
    return sum;   
}

console.log(addTwoDigits(29));