//implement a recursive method that verifies whether a string passed as a parameter is a palindrome
//if palindrome, return true, else return false

public static boolean palindrome(String s) {
  if (s.length() <= 1)
    return true;
  else
    return (s.charAt(0) == s.charAt(s.length()-1)) &&
            palindrome(s.substring(1,s.length()-1));
}


public boolean isPalindrome(String s,int begin, int end) {
   if (begin < 0) return false;
   while(begin < end) {
      if (s.charAt(begin++) != s.charAt(end--)) return false; 
   }
   return true;
}

