# Java - Code Question - Reverse String

## Question

```java
/*
Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.
Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 

Examples:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
*/

import java.io.*;
import java.util.*;

class Solution {
  public static char[] reverseString(char[] s) {
    return s;
  }

  public static void main(String[] args) {
    System.out.println(reverseString("hello".toCharArray()));
  }
}
```

## Solution

```java
public static class Solution1 {
        public String reverseString(String s) {
            int i = 0;
            int j = s.length() - 1;
            char[] chars = s.toCharArray();
            while (i < j) {
                char temp = chars[i];
                chars[i++] = chars[j];
                chars[j--] = temp;
            }
            return new String(chars);
        }
    }
```

https://leetcode.com/problems/reverse-string/

https://github.com/fishercoder1534/Leetcode/blob/master/src/main/java/com/fishercoder/solutions/_344.java    