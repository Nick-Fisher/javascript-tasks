// memory O(1)

const isLetter = (character: string) => {
  return character.toLowerCase() !== character.toUpperCase();
};

const isPalindrome = (str: string): boolean => {
  let start = 0,
    end = str.length - 1;

  while (start < end) {
    const firstChar = str[start],
      endChar = str[end];

    if (!isLetter(firstChar)) {
      start++;
      continue;
    }

    if (!isLetter(endChar)) {
      end--;
      continue;
    }

    if (firstChar.toLowerCase() !== endChar.toLowerCase()) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};

console.log(isPalindrome(',sh4l4hs'));
