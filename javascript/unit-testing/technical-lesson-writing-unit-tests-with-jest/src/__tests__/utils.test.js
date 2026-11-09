import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";

    const points = pointsForWord(word);

    expect(points).toBe(7);
  });
});

//Handling edge cases
it("handles uppercase and lowercase input", () => {
  const word = "TeSt";

  const points = pointsForWord(word);

  expect(points).toBe(7);
});

it("returns 0 for an empty string", () => {
  const word = "";

  const points = pointsForWord(word);

  expect(points).toBe(0);
});

it("ignores non-alphanumeric characters", () => {
  const word = "hello, world!";

  const points = pointsForWord(word);

  expect(points).toBe(17);
});
