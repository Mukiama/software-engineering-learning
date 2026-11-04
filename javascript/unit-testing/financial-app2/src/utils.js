export function calculateTotalInterest(investments) {
    let totalInterest = 0;
    for (const investment of investments) {
        const interest = (investment.amount * investment.rate * investment.years) / 100;
        totalInterest += interest;
    }
    return totalInterest;

}