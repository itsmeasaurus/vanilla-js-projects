function copyArrayAndManipulate(array, instructions) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}

const multiplyBy2 = (input) => {
    return input * 2;
}

const divideBy2 = (input) => {
    return input / 2;
}

console.log(copyArrayAndManipulate([1, 2, 3], multiplyBy2));
console.log(copyArrayAndManipulate([1, 2, 3], divideBy2));
