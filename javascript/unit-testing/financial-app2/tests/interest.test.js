import { calculateTotalInterest } from "../src/utils";

describe("calculateTotalInterest", () => {
  it("calculates the total interest for a list of investments", () => {
    const investments = [
      { amount: 1000, rate: 5, years: 2 },
      { amount: 2000, rate: 3, years: 4 }
    ];

    const totalInterest = calculateTotalInterest(investments);

    expect(totalInterest).toBe(340);
  });
});