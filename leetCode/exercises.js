//1. EASY - Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Constraints:
// 1 <= n <= 500
// nums.length == 2n
// 1 <= nums[i] <= 10^3

const shuffle = function(nums, n) {
    let shuffled = []
    for (let i = 0; i < n; i++) {
        shuffled.push(nums[i])
        shuffled.push(nums[i + n])
    }
    return shuffled
};

// Runtime: 88 ms
// Memory Usage: 40.6 MB

/************************************/

// 2. EASY - Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Constraints:
// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

const twoSum = (nums, target) => {
    const indices = {}
    nums.forEach((item, i) => {
        indices[item] = i
    });
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (indices [complement] !== undefined && indices[complement] !== i) {
            return [i, indices[complement]]
        }
    }
    
};

// Runtime: 84 ms
// Memory Usage: 41.5 MB

/*********************************/ 

// 3. EASY - Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Constraints:
// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

const runningSum = function(nums) {
    let result = []
    let sum = 0
    nums.forEach(function(num){
       sum = sum + num
        result.push(sum)
    })
    return result;
};

// Runtime: 80 ms
// Memory Usage: 39.1 MB