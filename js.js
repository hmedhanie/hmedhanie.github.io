var arr = [1,2,3,4];
var b = arr.map(mapped);
function mapped(values,i,array){
return values*2;
}
console.log(b);