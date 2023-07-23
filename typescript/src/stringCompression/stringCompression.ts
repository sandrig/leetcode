export function compress(chars: string[]): number {
  let writeIndex = 0; // Index to write compressed characters
  let readIndex = 0; // Index to read source characters

  while (readIndex < chars.length) {
    const currentChar = chars[readIndex];
    let count = 0;

    // Counting the number of repeated characters
    while (readIndex < chars.length && chars[readIndex] === currentChar) {
      readIndex++;
      count++;
    }

    // Write a compressed character
    chars[writeIndex] = currentChar;
    writeIndex++;

    // If the character is repeated more than once, record the number of repetitions
    if (count > 1) {
      for (const digit of count.toString().split("")) {
        chars[writeIndex] = digit;
        writeIndex++;
      }
    }
  }

  // Returning the new length of the compressed string
  return writeIndex;
}
