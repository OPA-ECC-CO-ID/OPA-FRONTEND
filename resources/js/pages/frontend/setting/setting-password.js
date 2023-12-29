import "@/pages/frontend/app-frontend";
import { alertSuccess } from "../profile/alert";
import Cookies from "js-cookie";

$(document).ready(function () {
    const id_bio = Cookies.get("user_id");
    const passwordField = $('.current-password');
    const passwordInput = $('.currentPassword');
    const newPasswordField = $('.new-password');
    const newPasswordInput = $('.newPassword');
    const confirmPassField = $('.confirm-password');
    const confirmPassInput = $('.confirmPassword');
    const eyeIconCurrentPass = $('.show-hide-current');
    const eyeIconNewPass = $('.show-hide-new');
    const eyeIconConfirmPass = $('.show-hide-confirm');

    // Function to hide/show password
    function togglePasswordVisibility(input, eyeIcon) {
        const isPasswordVisible = input.attr('type') === "password";
        eyeIcon.toggleClass("bi-eye-slash", !isPasswordVisible).toggleClass("bi-eye", isPasswordVisible);
        input.attr('type', isPasswordVisible ? 'text' : 'password');
    }

    eyeIconCurrentPass.on('click', function () {
        togglePasswordVisibility(passwordInput, eyeIconCurrentPass);
    });

    eyeIconNewPass.on('click', function () {
        togglePasswordVisibility(newPasswordInput, eyeIconNewPass);
    });

    eyeIconConfirmPass.on('click', function () {
        togglePasswordVisibility(confirmPassInput, eyeIconConfirmPass);
    });

    // Function to validate current password
    function validateCurrentPassword() {
        const isCurrentPasswordValid = checkCurrentPassword();
        passwordField.toggleClass("invalid", !isCurrentPasswordValid);
        return isCurrentPasswordValid;
    }

    // Function to validate new password pattern
    function validateNewPassword() {
        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const isNewPasswordValid = newPasswordInput.val().match(passPattern);
        newPasswordField.toggleClass("invalid", !isNewPasswordValid);
        return isNewPasswordValid;
    }

    // Function to confirm password
    function validateConfirmPass() {
        const isPasswordsMatch = newPasswordInput.val() === confirmPassInput.val();
        confirmPassField.toggleClass("invalid", !isPasswordsMatch);
        return isPasswordsMatch;
    }

    // Calling functions on keyup
    passwordInput.on("input", validateCurrentPassword);
    newPasswordInput.on("input", validateNewPassword);
    confirmPassInput.on("input", validateConfirmPass);

    // Function to check if the change password form is valid
    function changePasswordFormValid() {
        const currentPasswordValid = validateCurrentPassword();
        const newPasswordValid = validateNewPassword();
        const confirmPasswordValid = validateConfirmPass();

        return currentPasswordValid && newPasswordValid && confirmPasswordValid;
    }

    $("#change-password").submit(function (e) {
        e.preventDefault();
        const data = {
            old_password: $("#currentPassword").val(),
            new_password: $("#newPassword").val(),
            new_password_confirmation: $("#confirmPassword").val()
        }
        $.ajax({
            type: "POST",
            url: API_URL + "/api/v1/profile/change-password/" + id_bio,
            data: data,
            success: function (response) {
                $("#currentPassword").val('');
                $("#newPassword").val('');
                $("#confirmPassword").val('');
                alertSuccess();
                $("#text-success").html("<span style='color: black; '>Perubahanmu telah berhasil disimpan.</span>");
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (jqXHR.status === 400) {
                    let errorMessage = JSON.parse(jqXHR.responseText).message;
                    let errorMessages = {
                        'Old password is incorrect': 'Kata sandi lama tidak benar',
                    };

                    errorMessage = errorMessages[errorMessage] ;
                    $('.error-api').text(errorMessage).show();
                }
            },
        });
    });
});
