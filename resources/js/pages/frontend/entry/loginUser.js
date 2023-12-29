import "@/pages/frontend/entry";
import "@/pages/frontend/entry/cekJwtUser";
import Cookies from "js-cookie";

$(document).ready(function () {
    const loginForm = $('#loginForm'),
        passwordForm = $('#passwordForm'),
        emailField = $('.email-field'),
        emailInput = $('.email'),
        passField = $('.login-password'),
        passInput = $('.password'),
        newPassField = $('.create-password'),
        newPassInput = $('.newPassword'),
        cPassField = $('.confirm-password'),
        cPassInput = $('.cPassword'),
        eyeIcons = $('.show-hide'),
        eyeIconsNew = $('.new-show-hide'),
        eyeIconsConfirm = $('.confirm-show-hide'),
        loginButton = $('#loginButton'),
        passwordButton = $('#passwordButton');

    // Email Validation
    function checkEmail() {
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        const isValidEmail = emailInput.val().match(emailPattern);

        emailField.toggleClass("invalid", !isValidEmail);

        return isValidEmail;
    }

    // Function to hide/show password
    function togglePasswordVisibility(pInput, eyeIcons) {
       // const pInput = passInput;
        const isPasswordVisible = pInput.attr('type') === "password";

        eyeIcons.toggleClass("bi-eye-slash", !isPasswordVisible).toggleClass("bi-eye", isPasswordVisible);
        pInput.attr('type', isPasswordVisible ? 'text' : 'password');
    }

    // Event listener to hide/show password
    eyeIcons.on('click', function () {
         togglePasswordVisibility(passInput, eyeIcons);
    });
    eyeIconsNew.on('click', function () {
        togglePasswordVisibility(newPassInput, eyeIconsNew);
    });

    eyeIconsConfirm.on('click', function () {
        togglePasswordVisibility(cPassInput, eyeIconsConfirm);
    });

    // Password Validation
    function loginPass() {
        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const isValidPassword = passInput.val().match(passPattern);

        passField.toggleClass("invalid", !isValidPassword);

        return isValidPassword;
    }

    // Function to validate new password pattern
    function isValidateNewPassword() {
        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const newPasswordValid = newPassInput.val().match(passPattern);

        newPassField.toggleClass("invalid", !newPasswordValid);

        return newPasswordValid;
    }

    // Confirm Password Validation
    function isConfirmPass() {
        const isPasswordsMatch = newPassInput.val() === cPassInput.val();

        cPassField.toggleClass("invalid", !isPasswordsMatch);

        return isPasswordsMatch;
    }

    // Calling functions on keyup
    emailInput.on("input", checkEmail);
    passInput.on("input", loginPass);
    newPassInput.on("input",isValidateNewPassword);
    cPassInput.on("input", isConfirmPass);

    // Function to check if the login form is valid
    function isLoginFormValid() {
        const isValidEmail = checkEmail();
        const isValidPassword = loginPass();

        return isValidEmail && isValidPassword;
    }

    // Function to check if the change password form is valid
    function isChangePasswordFormValid() {
        const isNewPasswordValid = isValidateNewPassword();
        const isConfirmedPassword = isConfirmPass();

        return isNewPasswordValid && isConfirmedPassword;
    }

    // Using jQuery for immediate input changes for login form
    loginForm.on('input', function () {
        let isFormFilled =
            emailInput.val() &&
            passInput.val();

        let isConditionsMet = isFormFilled && isLoginFormValid();

        loginButton.prop('disabled', !isConditionsMet).css('background-color', isConditionsMet ? '#F9976A' : '#D2D2D2');
    });

    // Using jQuery for immediate input changes for change password form
    passwordForm.on('input', function () {
        let isFormFilled =
            newPassInput.val() &&
            cPassInput.val();

        let isConditionsMet = isFormFilled && isChangePasswordFormValid();

        passwordButton.prop('disabled', !isConditionsMet).css('background-color', isConditionsMet ? '#F9976A' : '#D2D2D2');
    });

    // Fungsi untuk menampilkan pesan error
    //function displayError(message) {
        // $('.password-error .error-text').text(message);
        //$('.error-text').show(); // Tampilkan pesan error
    //}

    // Fungsi untuk mengirim request login ke server
    function login() {
        let email = emailInput.val();
        let password = passInput.val();

        $.ajax({
            type: 'POST',
            url: API_URL + '/api/v1/login',
            data: {
                username_or_email: email,
                password: password
            },
            dataType: 'json',
            success: function(response) {
                if (response.data) {
                    Cookies.set("jwtUser", response.data.token, {
                        expires: 14,
                    });
                    Cookies.set("user_id", response.data.user.id);
                    window.location.href = APP_URL + "/index";
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (jqXHR.status === 401) {
                    var errorMessage = JSON.parse(jqXHR.responseText).message;
                    $('.error-api').text(errorMessage).show();
                }
            },
        });
    }

    // Function to send change password request to the server
    function changePassword() {
        let newPassword = newPassInput.val();

        $.ajax({
            type: 'POST',
            url: API_URL + '/api/v1/change-password/' + id_bio,
            data: {
                new_password: newPassword
            },
            dataType: 'json',
            success: function (response) {
            },
            error: function (error) {
            },
        });
    }

    // Function to send change password request to the server
    function changePassword() {
        let newPassword = newPassInput.val();

        $.ajax({
            type: 'POST',
            url: API_URL + '/api/v1/change-password/' + id_bio,
            data: {
                new_password: newPassword
            },
            dataType: 'json',
            success: function (response) {
            },
            error: function (error) {
            },
        });
    }

    // Event listener for login form submission
    loginForm.on('submit', function (e) {
        e.preventDefault();
        login();
    });

    // Event listener for change password form submission
    passwordForm.on('submit', function (e) {
        e.preventDefault();
        changePassword();
    });
});
