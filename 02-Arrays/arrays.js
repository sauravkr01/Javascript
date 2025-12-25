// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()


// push() , last me ek element jod deta h

let arr = [1, 2,4,5,3];

function pushExample(arr, element) {
    console.log("Origina Array :" , arr);
    arr.push(element);
    console.log("After Push:" , arr);
}
pushExample(arr, 6);

// pop() , last se ek element uda deta 
function popExample(arr) {
    console.log("Origina Array :" , arr);
    arr.pop();
    console.log("After Pop:" , arr);
}
popExample(arr);

//shift() , start ka ek element uda deta h
function shiftExample(arr) {
    console.log("Origina Array :" , arr);
    arr.shift();
    console.log("After Shift:" , arr);
}
shiftExample(arr);

//unshift() , start me ek element jod deta h
function unshiftExample(arr, element) {
    console.log("Origina Array :" , arr);
    arr.unshift(element);
    console.log("After Unshift:" , arr);
}
unshiftExample(arr, 0);

//slice() , given range ka element dega 
function sliceExample(arr, start, end) {
    console.log("Origina Array :" , arr);
    let slicedArray = arr.slice(start, end);
    console.log("After Slice:" , slicedArray);
}
sliceExample(arr, 1, 4);

// sort() , strings wale me default or direct sort use kr skte  h but number wale me thoda logic use kro
function sortExample(arr) {
    console.log("Original Array :" , arr);
    arr.sort(function(a, b) {
        return a - b;
    });
    console.log("After Sort:" , arr);
} 
sortExample(arr);

// find()
function findExample1(arr, target) {
    console.log("Original Array :" , arr);
    let foundElement = arr.find(function(element) {
        return element === target;
    });
    console.log("After Find:" , foundElement);
}
findExample1(arr, 4);

function findExample2(arr, target) {
    console.log("Original Array :" , arr);
    let foundElement = arr.find(function(element) {
        return element > target;
    });
    console.log("After Find:" , foundElement);
}
findExample2(arr, 3);

//concat
function concatExample(arr1, arr2) {
    console.log("Original Array :" , arr1);
    console.log("2nd Array :" , arr2);
    let concatenatedArray = arr1.concat(arr2);
    console.log("After Concat:" , concatenatedArray);
}
concatExample(arr, [7, 8, 9]);

//splice => delete , insert , replace
function spliceExample(arr, index, deleteCount, ...items) {
    console.log("Original Array :" , arr);
    arr.splice(index, deleteCount, ...items);
    console.log("After Splice:" , arr);
}
spliceExample(arr, 1, 2, 3, 4);

// forEach()
function forEachExample(arr) {
    console.log("Original Array :" , arr);
    arr.forEach(function(element) {
        console.log(element);
    });
}
forEachExample(arr);

// map() → har element ko transform karta hai (new array deta hai)
function mapExample(arr) {
    console.log("Original Array :", arr);

    let mappedArray = arr.map(function(element) {
        return element * 2;
    });

    console.log("After Map :", mappedArray);
}
mapExample(arr);

// filter() → condition ke base pe elements chhantta hai (new array deta hai)
function filterExample(arr) {
    console.log("Original Array :", arr);

    let filteredArray = arr.filter(function(element) {
        return element > 3;
    });

    console.log("After Filter :", filteredArray);
}
filterExample(arr);

// reduce() → poore array ko ek single value me convert karta hai
function reduceExample(arr) {
    console.log("Original Array :", arr);

    let sum = arr.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);

    console.log("After Reduce (Sum) :", sum);
}
reduceExample(arr);
