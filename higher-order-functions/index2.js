function times(m) {
    return function(n) {
        return m * n;
    }
}

const double = times(2);
const triple = times(3);

console.log(double(3));
console.log(triple(3));