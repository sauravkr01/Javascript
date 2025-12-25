// ================= REDUCE() – ALL IN ONE =================

// Base Array
let arr = [1, 2, 4, 5, 3];

// --------------------------------------------------------
// 1️⃣ SUM of elements
function reduceSum(arr) {
    let sum = arr.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
    console.log("Sum :", sum);
}
reduceSum(arr);

// --------------------------------------------------------
// 2️⃣ PRODUCT of elements
function reduceProduct(arr) {
    let product = arr.reduce(function (acc, curr) {
        return acc * curr;
    }, 1);
    console.log("Product :", product);
}
reduceProduct(arr);

// --------------------------------------------------------
// 3️⃣ MAX element
function reduceMax(arr) {
    let max = arr.reduce(function (acc, curr) {
        return curr > acc ? curr : acc;
    }, arr[0]);
    console.log("Max :", max);
}
reduceMax(arr);

// --------------------------------------------------------
// 4️⃣ MIN element
function reduceMin(arr) {
    let min = arr.reduce(function (acc, curr) {
        return curr < acc ? curr : acc;
    }, arr[0]);
    console.log("Min :", min);
}
reduceMin(arr);

// --------------------------------------------------------
// 5️⃣ TOTAL COUNT (array length)
function reduceCount(arr) {
    let count = arr.reduce(function (acc) {
        return acc + 1;
    }, 0);
    console.log("Total Count :", count);
}
reduceCount(arr);

// --------------------------------------------------------
// 6️⃣ CONDITION BASED COUNT ( > 3 )
function reduceConditionCount(arr) {
    let count = arr.reduce(function (acc, curr) {
        if (curr > 3) acc++;
        return acc;
    }, 0);
    console.log("Count (>3) :", count);
}
reduceConditionCount(arr);

// --------------------------------------------------------
// 7️⃣ EVEN NUMBERS ARRAY (reduce → array)
function reduceEvenArray(arr) {
    let evenArr = arr.reduce(function (acc, curr) {
        if (curr % 2 === 0) acc.push(curr);
        return acc;
    }, []);
    console.log("Even Array :", evenArr);
}
reduceEvenArray(arr);

// --------------------------------------------------------
// 8️⃣ ODD NUMBERS ARRAY
function reduceOddArray(arr) {
    let oddArr = arr.reduce(function (acc, curr) {
        if (curr % 2 !== 0) acc.push(curr);
        return acc;
    }, []);
    console.log("Odd Array :", oddArr);
}
reduceOddArray(arr);

// --------------------------------------------------------
// 9️⃣ FREQUENCY COUNT (object)
function reduceFrequency(arr) {
    let freq = arr.reduce(function (acc, curr) {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
    console.log("Frequency :", freq);
}
reduceFrequency([1, 2, 2, 3, 3, 3]);

// --------------------------------------------------------
// 🔟 FLATTEN ARRAY (array ke andar array)
function reduceFlatten(arr) {
    let flat = arr.reduce(function (acc, curr) {
        return acc.concat(curr);
    }, []);
    console.log("Flattened :", flat);
}
reduceFlatten([[1, 2], [3, 4], [5]]);

// --------------------------------------------------------
// 1️⃣1️⃣ STRING JOIN
function reduceStringJoin(arr) {
    let str = arr.reduce(function (acc, curr) {
        return acc + curr;
    }, "");
    console.log("Joined String :", str);
}
reduceStringJoin(["H", "e", "l", "l", "o"]);

// ================= END =================
