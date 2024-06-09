function convertTemperature(value,fromUnit, toUnit) {
    let convertedValue;

    switch (fromUnit.toLowerCase()) {
        case `celcius`:
        case `c`:
            convertedValue = value;
            break;
        case `fahrenhiet`:
        case `f`:
            convertedValue = (value - 32) * 5 / 9;
            break;
        case `kelvin`:
        case `k`:
            convertedValue = value - 273.15;
            break;
        defult:
            throw new Error(`Invalid toUnit`);
    }
}
try {
    let value = parseFloat(prompt("Enter the temperature value:"));
    if (isNaN(value)){
        throw new Error(`Invalid temperature value`);
}

    let fromUnit = prompt("Enter the unit you are converting from Celcius, Fahrehiet, Kelvin):").toLowerCase();
    let toUnit = prompt("Enter the unit you are converting to (Celcius, Fahrehiet, Kelvin):").toLowerCase();

    let result = convertTemperature(value, fromUnit, toUnit);
    alert(`The converted temperature $ {result.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`);
} catch (error) {
    alert(error.message);
}
