function 
 calculateSimpleInterest(principal, rate, time) {
    return(principal, rate, time) /100;
 }

 const principal =
 parseFloat(prompt("Enter the principal amount:"));
 const rate = parseFloat(prompt("Enter the rate of interest"));
 const time = parseFloat(prompt("Enter the time period in years"));

 if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    alert("Please enter valid numerical values for all inputs");
 } else {
     const interest =
calculateSimpleInterest(principal, rate, time);     

alert(`The simple interest is ${interest}`)
}