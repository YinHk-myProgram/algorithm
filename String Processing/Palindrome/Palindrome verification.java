//implement a recursive method that verifies whether a string passed as a parameter is a palindrome

public static boolean palindrome(String s) {
  if (s.length() <= 1)
    return true;
  else
    return (s.charAt(0) == s.charAt(s.length()-1)) &&
            palindrome(s.substring(1,s.length()-1));
}

