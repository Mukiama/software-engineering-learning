export function pointsForWord(word) {
  return [...word].reduce((points, char) => {
    if (!/[a-z0-9]/i.test(char)) {
      return points;
    }

    return points + (/[aeiou]/i.test(char) ? 1 : 2);
  }, 0);
}

const points = pointsForWord("mukiama");

console.log(points); // Output: 13c