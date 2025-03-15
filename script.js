const lengthConversions = {
    "mm": 0.001,
    "cm": 0.01,
    "m": 1,
    "km": 1000,
    "in": 0.0254,
    "ft": 0.3048,
    "yd": 0.9144,
    "mi": 1609.34
};

// Get DOM elements
const inputField = document.getElementById("fromValue");
const inputUnit = document.getElementById("fromUnit");
const outputField = document.getElementById("toValue");
const outputUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");
const copyBtn = document.getElementById("copyBtn");

// Convert function
const convertLength = () => {
    let inputValue = parseFloat(inputField.value);
    if (isNaN(inputValue)) {
        outputField.value = "Invalid Input";
        return;
    }

    let fromUnit = inputUnit.value;
    let toUnit = outputUnit.value;

    let result = (inputValue * lengthConversions[fromUnit]) / lengthConversions[toUnit];
    outputField.value = result.toFixed(6);
};

// Swap function (swap input and output fields)
swapBtn.addEventListener("click", () => {
    let tempUnit = inputUnit.value;
    inputUnit.value = outputUnit.value;
    outputUnit.value = tempUnit;

    let tempValue = inputField.value;
    inputField.value = outputField.value;
    outputField.value = tempValue;
});

// Copy function

if (copyBtn) { 
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(outputField.value).then(() => {
            alert("Copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    });
}

// Event Listeners
convertBtn.addEventListener("click", convertLength);
inputField.addEventListener("input", convertLength);
inputUnit.addEventListener("change", convertLength);
outputUnit.addEventListener("change", convertLength);

