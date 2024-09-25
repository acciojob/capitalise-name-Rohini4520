//your JS code here. If required.
function capitalizeName() {
    // Get the input field by id
    var inputField = document.getElementById("fname");

    // Convert the value to uppercase
    inputField.value = inputField.value.toUpperCase();
}

// Attach the event listener to trigger the function when the input field loses focus
window.onload = function() {
    var inputField = document.getElementById("fname");
    inputField.onblur = capitalizeName; // Attach the onblur event
};