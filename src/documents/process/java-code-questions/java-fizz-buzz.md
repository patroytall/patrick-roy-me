# Java - Code Question - Fizz Buzz

## Question

```java
/*
Fizz Buzz

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i if non of the above conditions are true.

Examples:

Input: n = 3
Output: ["1","2","Fizz"]

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

Constraints:
1 <= n <= 104
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
https://leetcode.com/problems/fizz-buzz/

## Solution - Reverse String

```java
public static class Solution {
  public List<String> fizzBuzz(int n) {
    List<String> result = new ArrayList();
    for (int i = 1; i <= n; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        result.add("FizzBuzz");
      } else if (i % 3 == 0) {
        result.add("Fizz");
      } else if (i % 5 == 0) {
         result.add("Buzz");
      } else {
         result.add(Integer.toString(i));
      }
    }
    return result;
  }
}
```

https://github.com/fishercoder1534/Leetcode/blob/master/src/main/java/com/fishercoder/solutions/_412.java