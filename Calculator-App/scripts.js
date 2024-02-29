//Function to add value to the display
const addToDisplay = (value) => {
    const display = document.getElementById('display');
    
    // If the value is "Del", remove the last character from the display value
    if (value === 'Del') {
        display.value = display.value.slice(0, -1); // Remove the last character
    } else if (value === 'X') {
        display.value += '*'; // Replace 'X' with '*'
    } else {
        display.value += value; //Append value to display
    }
};

// function to clear the display
const clearDisplay = () => {
    document.getElementById('display').value = '';
}

// function to calculate the result of the expression
const calculate = () => {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value =result;
}


