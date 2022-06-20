//jshint esversion:9

// Event Handler for Form Submission
document.querySelector('form').addEventListener('submit',
    event => {
        // Stop Reloading of Page on Form Submission
        event.preventDefault();

        // Capture user input value
        const input = document.querySelector('input');

        // Print the user input
        console.log(input.value);
    }
);

