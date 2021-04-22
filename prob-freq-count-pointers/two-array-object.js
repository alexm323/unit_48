// add whatever parameters you deem necessary
function twoArrayObject(keys,values) {
    let obj = {};
    let currIdx = 0;
    for(let key of keys){
        // if(currIdx > values.length){
        //     obj[key] = 'null';
        // }
        if(values[currIdx]){
            obj[key] = values[currIdx]
        }else{
            obj[key] = null;
        }
        
        
        currIdx ++;
    }
    return obj;
}

// inputs: keysArray , valuesArray 
// output: an object made of both they keys and values 

// if the keys are shorter then we ignore the rest of the values 
// if the values are shorter then we can set the keys to null as the remaining values 
// we can cycle through the keys and if the index of the key is greater than the values.length then keys[key] = null;

