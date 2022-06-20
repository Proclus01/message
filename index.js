//jshint esversion:9

// Event Handler for Form Submission

// Takes user input
// Converts user input to base64
// Represents base64 conversion inside of secondary input field in card

document.querySelector('form').addEventListener('submit',
    event => {
        // Stop Reloading of Page on Form Submission
        event.preventDefault();

        // Capture user input value
        const input = document.querySelector('#message-input');

        // Convert input to base64 string
        const encrypted = btoa(input.value);

        // Set secondary input field to encrypted value
        // and generate URL string
        const linkInput = document.querySelector('#link-input');
        
        // window.location gets current URL when inside of template literal
        linkInput.value = `${window.location}#${encrypted}`; 

        // Select the input inside of the input field
        linkInput.select();
        
    }
);

