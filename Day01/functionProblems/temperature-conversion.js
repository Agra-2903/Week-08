const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Function to handle temperature conversion
function temperatureConverter() {
    let choice = prompt("Choose the conversion type:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius\nEnter 1 or 2: ");
    let temperature;

    switch(choice) {
        case '1': // Celsius to Fahrenheit
            temperature = parseFloat(prompt("Enter temperature in Celsius (0°C to 100°C): "));
            if (temperature >= 0 && temperature <= 100) {
                let degF = celsiusToFahrenheit(temperature);
                console.log(`${temperature}°C is equal to ${degF.toFixed(2)}°F`);
            } else {
                console.log("Invalid input! Please enter a temperature between 0°C and 100°C.");
            }
            break;

        case '2': // Fahrenheit to Celsius
            temperature = parseFloat(prompt("Enter temperature in Fahrenheit (32°F to 212°F): "));
            if (temperature >= 32 && temperature <= 212) {
                let degC = fahrenheitToCelsius(temperature);
                console.log(`${temperature}°F is equal to ${degC.toFixed(2)}°C`);
            } else {
                console.log("Invalid input! Please enter a temperature between 32°F and 212°F.");
            }
            break;

        default:
            console.log("Invalid selection! Please enter 1 for Celsius to Fahrenheit or 2 for Fahrenheit to Celsius.");
    }
}

// Call the temperatureConverter function to start the program
temperatureConverter();
