export function validPalindrome(s: string): boolean {
  function isPalindromeRange(start: number, end: number): boolean {
    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // Try skipping the left character or the right character
      return (
        isPalindromeRange(left + 1, right) || isPalindromeRange(left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true;
}
