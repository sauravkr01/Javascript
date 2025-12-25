function outer() {
    let msg = "Hello, World!";

    setTimeout(() => {
        console.log(msg);
    }, 2000);
}
outer(); // After 2 seconds, prints "Hello, World!"