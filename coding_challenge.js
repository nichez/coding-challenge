function findLongestWord(sentence) {
  if (!sentence) {
    return;
  }

  function countVowels(word) {
    const vowels = "aeiouAEIOU";
    return word.split("").filter((char) => vowels.includes(char)).length;
  }

  const words = sentence
    .split(/\s+/)
    .map((word) => word.replace(/[^a-zA-Z]/g, ""))
    .filter((word) => word.length > 0)
    .map((word) => ({
      word,
      length: word.length,
      vowelCount: countVowels(word),
    }));

  let longestWord = "";
  let maxWordLength = 0;
  let maxVowelCount = 0;

  for (const wordData of words) {
    if (
      wordData.length > maxWordLength ||
      (wordData.length === maxWordLength && wordData.vowelCount > maxVowelCount)
    ) {
      longestWord = wordData.word;
      maxWordLength = wordData.length;
      maxVowelCount = wordData.vowelCount;
    }
  }

  return longestWord;
}

const input =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";

const result1 = findLongestWord(input);
const result2 = findLongestWord(null);
const result3 = findLongestWord("");

console.log("result1 ", result1);
console.log("result2 ", result2);
console.log("result3 ", result3);
