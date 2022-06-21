//jshint esversion:9

// ****************************************************************
// 0. APP DESCR:
// 
// Message-sharing app where user enters string, 
// string is converted to base64 and URL address is generated with base64 hash
// user can take the URL and enter it into an input
// to convert the hash inside of the URL into a string
// and read the displayed string
//
// ****************************************************************

// ****************************************************************
// 1. Decoding Secret Messages from URL
// ****************************************************************

// generate a URL string, then add URL string to Address bar
// refresh the page to see the console.log message from decoded hash

// check the current URL
// see if there is an encoded message
//      window.location.hash will give us our hash info! 
const { hash } = window.location;

// decode the message
// display the message
console.log(atob(hash.replace('#', '')));

// ****************************************************************
// 2. Event Handler for Form Submission
// ****************************************************************

// Takes user input
// Converts user input to base64
// Represents base64 conversion inside of secondary input field in card

document.querySelector('form').addEventListener('submit',
    event => {
        // Stop Reloading of Page on Form Submission
        event.preventDefault();

        // Hide the user input
        document.querySelector('#message-form').classList.add('hide');
        // Reveal the new input element
        document.querySelector('#link-form').classList.remove('hide');

        // Capture user input value
        const input = document.querySelector('#message-input');

        // Convert input to base64 string
        const encrypted = btoa(input.value);

        // Set secondary input field to encrypted value
        // and generate URL strings
        const linkInput = document.querySelector('#link-input');
        
        // window.location gets current URL when inside of template literal
        linkInput.value = `${window.location}#${encrypted}`; 

        // Select the input inside of the input field
        linkInput.select();
        
    }
);

