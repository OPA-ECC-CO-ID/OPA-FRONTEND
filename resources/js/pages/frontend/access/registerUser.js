import "@/pages/frontend/entry";
import "@/pages/frontend/entry/cekJwtUser";

$(document).ready(function () {
    const form = $('#myForm'),
        nameInput = $('.name'),
        emailField = $('.email-field'),
        emailInput = $('.email'),
        usernameField = $('.username-field'),
        usernameInput = $('.username'),
        passField = $('.login-password'),
        passInput = $('.password'),
        eyeIcons = $('.show-hide'),
        check = $('#check'),
        // captchaElement = $('#captchaElement'),
        registerButton = $('#registerButton');

    function checkEmail() {
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        const isValidEmail = emailInput.val().match(emailPattern);

        emailField.toggleClass("invalid", !isValidEmail);

        return isValidEmail;
    }

    function togglePasswordVisibility() {
        const pInput = passInput;
        const isPasswordVisible = pInput.attr('type') === "password";

        eyeIcons.toggleClass("bi-eye-slash", !isPasswordVisible).toggleClass("bi-eye", isPasswordVisible);
        pInput.attr('type', isPasswordVisible ? 'text' : 'password');
    }

    eyeIcons.on('click', togglePasswordVisibility);

    function loginPass() {
        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const isValidPassword = passInput.val().match(passPattern);

        passField.toggleClass("invalid", !isValidPassword);

        return isValidPassword;
    }

    emailInput.on("keyup", checkEmail);
    passInput.on("keyup", loginPass);

    function isFormValid() {
        const isValidEmail = checkEmail();
        const isValidPassword = loginPass();

        return isValidEmail && isValidPassword;
    }

    // CAPTCHA verification callback
    // function onCaptchaVerify(response) {
    //     // The response parameter contains the reCAPTCHA token
    //     // Perform additional actions or enable the submit button
    //     console.log('reCAPTCHA verified:', response);

        // Enable the submit button and change its color
        //registerButton.prop('disabled', false).css('background-color', '#34499C');
    //}

    // CAPTCHA verification callback
    // window.onCaptchaVerify = onCaptchaVerify;

    form.on('input', function () {
        let isFormFilled =
            nameInput.val() &&
            emailInput.val() &&
            usernameInput.val() &&
            passInput.val();
        let isChecked = check.prop('checked');
        // let isCaptchaFilled = grecaptcha.getResponse() !== '';

        // Checking if form, checkbox, and captcha are filled
        // let isConditionsMet = isFormFilled && isChecked && isCaptchaFilled && isFormValid();
        let isConditionsMet = isFormFilled && isChecked && isFormValid();

        // Enabling or disabling the register button based on conditions
        registerButton.prop('disabled', !isConditionsMet).css('background-color', isConditionsMet ? '#34499C' : '#D2D2D2');
    });
});



// Fungsi untuk menampilkan pesan error
//function displayError(message) {
    // $('.password-error .error-text').text(message);
    //$('.error-text').show(); // Tampilkan pesan error
//}


$(document).ready(function () {
    $('form').on('submit', function (e) {
        // Mencegah perilaku default dari form (mencegah refresh halaman)
        e.preventDefault();

        // Mengambil data dari input form
        let name = $('.name').val();
        let email = $('.email').val();
        let username = $('.username').val();
        let password = $('.password').val();

        // Membuat objek data untuk dikirim ke API
        let data = {
            name: name,
            email: email,
            username: username,
            password: password,
        };

        $.ajax({
            url: API_URL + '/api/v1/register',
            type: 'POST',
            data: data,

            success: function (response) {
                Cookies.set("jwtUser", response.data.token, {
                    expires: 14,
                });
                Cookies.set("user_id", response.data.user.id);
                localStorage.setItem("ID_REGIS", response.data.user.id)
                window.location.href = '/onboarding';
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (jqXHR.status === 422) {
                    try {
                        var response = JSON.parse(jqXHR.responseText);

                        // Tampilkan pesan kesalahan email
                        if (response.message && response.message.email && response.message.email.length > 0) {
                            var emailErrorMessage = response.message.email[0];
                            $('.error-api').text(emailErrorMessage).show();
                            $('.email-field .input-field-register input.email').css('border-color', 'red');
                        } else {
                            $('.error-api').text('').hide();
                            $('.email-field .input-field-register input.email').css('border-color', '');
                        }

                        // Tampilkan pesan kesalahan username
                        if (response.message && response.message.username && response.message.username.length > 0) {
                            var usernameErrorMessage = response.message.username[0];
                            $('.error-api-username').text(usernameErrorMessage).show();
                            $('.username-field .input-field-register input.username').css('border-color', 'red');
                        } else {
                            $('.error-api-username').text('').hide();
                            $('.username-field .input-field-register input.username').css('border-color', '');
                        }
                    } catch (e) {
                        console.error('Error parsing JSON response:', e);
                    }
                } else {
                    console.error('Unhandled error:', jqXHR.status, textStatus, errorThrown);
                }
            },

        });
    });
});
