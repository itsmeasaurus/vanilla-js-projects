const customIterable = {
    data: [10, 20, 30, 40, 50],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next() {
                if (index < customIterable.data.length) {
                    return { value: customIterable.data[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        }
    }
}

const iterator = customIterable[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());