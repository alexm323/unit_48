// add whatever parameters you deem necessary
function countPairs(nums,target) {
    let left = 0;
    let right = nums.length -1;
    let pairCounter = 0;
    while(left < right){
        console.log(nums[left])
        const sum = nums[left] + nums[right];
        if(sum === target){
            pairCounter++;
        }
        left++;
    }
    return pairCounter;
}
//inputs a number array to look through and a target value we want to add up to 
// outputs: number of pairs that add up to the target value 

// there will be no duplicates in the array 

// countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
// countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
// countPairs([4,6,2,7], 10) // 1 (4,6)
// countPairs([1,2,3,4,5], 10) // 0
// countPairs([1,2,3,4,5], -3) // 0
// countPairs([0,-4],-4) // 1
// countPairs([1,2,3,0,-1,-2],0) // 2
