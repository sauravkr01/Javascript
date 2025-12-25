function counter() {
    let count = 0;

    return {
        increment () {
            count++;
            console.log(count);
        },
        decrement () {
            count--;
            console.log(count);
        }
    };
}
const myCounter = counter();
myCounter.increment(); // 1
myCounter.increment(); // 2
myCounter.decrement(); // 1
