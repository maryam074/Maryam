function convertDollarToNaira(dollarAmount, exchangeRate) {
    if (typeof dollarAmount !== `number` || typeof exchangeRate !==`number`) {
        throw new Error(`Both dollar amount and exchange rate should be numbers`);
    }
    return dollarAmount * exchangeRate;
}
let dollarAmount = parseFloat(prompt("Enter amount in Dollar:"));
const exchangeRate = 1500;

try {
    const nairaAmount =convertDollarToNaira(dollarAmount, exchangeRate);

    alert(`${dollarAmount} USD is equivalent to ${nairaAmount.toFixed(2)} NGN`);
}   catch (error) {
    alert(error.message);
}