let name="modules concepts"
function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a-b;
}
// module.exports.name=name;
// module.exports.add=add;
// module.exports.subtract=subtract;
//==same bellow==
module.exports={name,add,subtract}