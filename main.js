// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var title = document.contactForm.title.value;
    var message = document.contactForm.message.value;
    
	// Defining error variables with a default value
    var nameErr = emailErr = titleErr = messageErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } 
    else if(name.length < 4){
        printError("nameErr", "Name is too short (at least 4 characters)");
    }
    else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate title number
    if(title == "") {
        printError("titleErr", "Please enter a title");
    } else {
        printError("titleErr", "");
        titleErr = false;
    }
    
    // Validate message
    if(message == "") {
        printError("messageErr", "Please enter a message");
    } 
    else if(message.length < 20){
        printError("messageErr", "Message is too short (at least 20 characters)");
    }
    else {
        printError("messageErr", "");
        messageErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || titleErr || messageErr ) == true) {
       return false;
    } else {
        // Creating a string to show successful validation
        var status = "Message sent successfully!";
        alert(status);
    }
};