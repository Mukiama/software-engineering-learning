export function calculateTotalInterest(investments) {
    return investments.reduce((total, investment) => 
    total + investment.amount * (investment.rate / 100) * investment.years, 0);
}