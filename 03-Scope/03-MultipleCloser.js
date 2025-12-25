function createUser(name) {
    return function () {
        console.log("Hello, " + name);
    };
}
const u1 = createUser("saurav");
const u2 = createUser("anurag");
u1(); // Hello, saurav
u2(); // Hello, anurag