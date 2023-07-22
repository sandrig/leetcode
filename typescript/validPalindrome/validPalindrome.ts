export function isPalindrome(s: string): boolean {
  // Remove all characters except letters and numbers and convert to lowercase
  const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Checking if the string being cleared is a palindrome
  let left = 0;
  let right = cleanedString.length - 1;

  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
