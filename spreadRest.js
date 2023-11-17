function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }


  //trying to work with git

  const filterOutOdds = nums => Array.prototype.slice.call(...) => nums.filter(num % 2 === 0)

 
  
  // I did not know how to get here... const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

 
const findMin = (...args) => Math.min(...args)


const mergeObjects = (object1,object2)=> ({...object1,...object2})
//why does there have to be () around the arrow function

const doubleAndReturnArgs = (val, ...vals) => [val, ...vals + ...vals]

//almost got this one - need help with mapping

const removeRandom = items => items.pop //did this one wrong:(

const extend = (array1,array2)=> {
return [...array1 + ...array2];
} 

const addKeyValue = (obj,key,val)=>{
    return {...obj + key + val};
} //why doesnt this work? - the coultion is a lot more complicated:) I remeber watching it in the video but I am not so clear

const removeKey = (obj, key)=>{
    let newObj = obj + key.pop();
    return newObj;
}
//why doesnt this work?

const combine = (obj1,obj2) => {
    return {...obj1,...obj2};
}

const update = (obj,key,val) => {
    return {}

} //want to discuss