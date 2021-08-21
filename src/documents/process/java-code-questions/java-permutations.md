# Java - Code Question - Permutations

## Question

```java
/*
Permutations

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]

Constraints:
1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/

import java.io.*;
import java.util.*;

class Solution {
  public static List<String> fizzBuzz(int n) {
    return new ArrayList<String>();
  }
 
  public static void main(String[] args) {
    System.out.println(fizzBuzz(3));
  }
}
```
https://leetcode.com/problems/permutations/

## Solution - Reverse String

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  return rec(nums);
};

function rec(nums) {
  if (nums.length === 1) {
    return nums;
  }
  const first = nums[0];
  const rest = nums.slice(1);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const subs = rest.length > 1 ? rec(rest) : [rest];
    for (sub of subs) {
      const sub2 = sub.slice();
      sub2.splice(i, 0, first);
      result.push(sub2);
    }
  }
  return result;
}
```

```java
import java.util.ArrayList;
import java.util.List;

public class _46 {

    public static class Solution1 {
        public List<List<Integer>> permute(int[] nums) {
            List<List<Integer>> result = new ArrayList();
            result.add(new ArrayList<>());
            return backtracking(nums, 0, result);
        }

        private List<List<Integer>> backtracking(int[] nums, int index, List<List<Integer>> result) {
            if (index == nums.length) {
                return result;
            }
            List<List<Integer>> newResult = new ArrayList<>();
            for (List<Integer> eachList : result) {
                for (int i = 0; i <= eachList.size(); i++) {
                    List<Integer> newList = new ArrayList<>(eachList);
                    newList.add(i, nums[index]);
                    newResult.add(newList);
                }
            }
            result = newResult;
            return backtracking(nums, index + 1, result);
        }
    }

}
```

https://github.com/fishercoder1534/Leetcode/blob/master/src/main/java/com/fishercoder/solutions/_46.java