// add whatever parameters you deem necessary
function averagePair(sortedNumsArray,targetAverage) {
    let left = 0; 
    let right = sortedNumsArray.length - 1;

    while(left < right){
        const avg = ((sortedNumsArray[left] + sortedNumsArray[right])/2)
        if(avg === targetAverage){
            return true
        } else if(avg < targetAverage){
            left ++;
        }else{
            right --;
        }
    }
    return false;
}
