// add whatever parameters you deem necessary
function createFrequencyCounter(str){
    let frequencies = new Map();

    for (let val of str.toString()){
        let valCount = frequencies.get(val) || 0;
        frequencies.set(val,valCount + 1);
    }
    return frequencies;
}

function sameFrequency(nums1,nums2) {
    const numMap1 = createFrequencyCounter(nums1);
    const numMap2 = createFrequencyCounter(nums2);

    if(numMap1.size !== numMap2.size) return false;
    for(let num of numMap1.keys()){
        if(numMap1.get(num) !== numMap2.get(num)) return false;
    }
    return true;
}
