// add whatever parameters you deem necessary
function separatePositive(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        // if the left is negative and right is positive, swap them 
        if(nums[left] < 0 && nums[right] > 0){
            let tempVal = nums[left];
            nums[left] = nums[right];
            nums[right] = tempVal;
            left++;
            right--;

        }else{
            // if left val is positive already we just skip to next num
            if(nums[left] > 0) {
                
                left++;
            }else{
                right--;
            }

        }
    }
    return nums;

}
  
  // TIME COMPLEX: O(n)
// inputs: array of unsorted numbers
//outputs: array of unsorted positve integers on the left and negative on the right 

// do not copy array, instead move the values around, sort of sorting but not sorting ?
// maybe i can do some weird splice and move thing 
// separatePositive([10, -1, -3, 6, -8, -2]) // [2, 10, 6, -3, -1, -8]

// if the one on the left is negative and the one on the right is positive swap places 
// if theyre both positive , one at the end comes to beginnning , rightValue goes to temp and then unshift 
// if both negative then left goes to end 
// if left is positive and right is negative return 
// instead of moving array around, set the indexes to those values 



// separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
// separatePositive([-5, 5]) // [5, -5]
// separatePositive([1, 2, 3]) // [1, 2, 3]

// for this one only the first one isnt working, not really seeing how to manipulate it better 

module.exports = {separatePositive}