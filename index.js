const getSumOfSequence = (number) => {
    let array = [];
    for (let i = 1; i <= number; i++){
        array.push(i);
    }
    return (1 + array.length);
}
console.log(getSumOfSequence(13));
