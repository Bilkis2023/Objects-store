var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userFirstNameSpan = document.querySelector("#user-first-name");
var userLastNameSpan = document.querySelector("#user-last-name");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

signUpButton.addEventListener("click", function (event) {
    event.preventDefault();

    // create user object from submission:
    var user = {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
    };
    //   validate the fields:
    if (user.firstName === "") {
        displayMessage("error", "first name can not be blank");
    } else if (user.lastName === "") {
        displayMessage("error", "last name can not be blank");
    } else if (user.email === "") {
        displayMessage("error", "email can not be blank");
    } else if (user.password === "") {
        displayMessage("error", "password can not be blank");
    } else {
        displayMessage("success", "You have done your registration successfully");

        // set new submission:
        console.log(user);
        localStorage.setItem("user", user);


        // get most recent submission:
        var lastUser = localStorage.getItem("user");

        userFirstNameSpan.textContent = lastUser.firstName;
        userLastNameSpan.textContent = lastUser.lastName;
        userEmailSpan.textContent = lastUser.email;
        userPasswordSpan.textContent = lastUser.password;
    }
});


