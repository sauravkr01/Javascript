// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Length
function getLength(str) {
    console.log("Original String :" , str);
    console.log("Length:" , str.length);
}
getLength("Saurav Kumar")

// indexOf()
function getIndexOf (str , target) {
    console.log("Original String :" , str);
    console.log("indexOf :" , str.indexOf(target));
}
getIndexOf("saurav Kumar" , "m");

// lastIndexOf() 
function findLastIndexOf(str, target) {
    console.log("Original String :" , str);
    console.log("LastIndexOf :", str.lastIndexOf(target));
}
findLastIndexOf("saurav kumar" , "ar")