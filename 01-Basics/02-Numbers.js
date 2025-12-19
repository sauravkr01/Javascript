function findparseInt(val){
    console.log("original number" , val);
    console.log("after parseInt" , parseInt(val));
}
findparseInt("12x");
findparseInt("12.3");

function findparseFloat(val){
    console.log("original number" , val);
    console.log("after parseInt" , parseFloat(val));
}
findparseFloat("12x");
findparseFloat("12.3x");