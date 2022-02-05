// Add your functions here

   
function map(array, f){
    let newArray = [];
    for(let a of array){
      newArray.push(f(a));
    }
    return newArray
}

function reduce(src, cb, start){
    let r = (!!start) ? start : src[0]
    let i = (!!start) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }