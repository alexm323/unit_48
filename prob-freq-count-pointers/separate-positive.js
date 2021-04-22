// add whatever parameters you deem necessary
function separatePositive(nums) {
    let idx = 0;
    for(let num of nums){
        let currentValue = nums[idx]
        console.log(currentValue)
        if(num < 0){
            
            nums.splice(idx,1)
            nums.push(currentValue)

        }
        idx++;
    }
    return nums;
}

// inputs: array of unsorted numbers
//outputs: array of unsorted positve integers on the left and negative on the right 

// do not copy array, instead move the values around, sort of sorting but not sorting ?
// maybe i can do some weird splice and move thing 



// separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
// separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
// separatePositive([-5, 5]) // [5, -5]
// separatePositive([1, 2, 3]) // [1, 2, 3]

// for this one only the first one isnt working, not really seeing how to manipulate it better 

