// Using split, reverse and join
const isPalindrome = str => {
  let strReverse = str.split("").reverse().join("");
  if (str === strReverse) {
    console.log("The string is a palindrome");
  } else {
    console.log("NOT a palindrome");
  }
}


// Using for loop
function checkPalindrome(string) {
	const stringLength = string.length;
	for (let i = 0; i < stringLength / 2; i++) {
		if (string[i] !== string[stringLength - 1 - i]) {
			return 'It is not a palindrome.';
		}
	}
	return 'It is a palindrome.';
}



