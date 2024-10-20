//your JS code here. If required.
// Function to determine the DOM level of an element
function findDomLevel() {
    // Get the element with id 'level'
    let element = document.getElementById('level');
    let level = 0;

    // Traverse up the DOM tree until no parent exists (i.e., we reach the root <html> element)
    while (element) {
        level++;
        element = element.parentElement;
    }

    // Display the DOM level using alert
    alert("The level of the element is: " + level);
}

// Call the function
findDomLevel();
