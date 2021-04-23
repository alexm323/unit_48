// add whatever parameters you deem necessary
// function countPairs(nums,target) {
//     let left = 0;
//     let right = nums.length -1;
//     let pairCounter = 0;
//     while(left < right){
//         console.log(left)
//         const sum = nums[left] + nums[right];
//         if(sum === target){
//             pairCounter++;
//         }
//         left++;
//     }
//     return pairCounter;
// }

function countPairs(arr, num) {
    arr.sort((a, b) => a - b);
    let count = 0;
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum === num) {
            count++;
            start++;
            end--;
        } else if (sum < num) {
            start++;
        } else {
            end--;
        }
    }
    return count;
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