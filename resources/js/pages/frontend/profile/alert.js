function handleFormError(error) {
    let errors = error.responseJSON.errors;
    $.each(errors, function (key, value) {
        $("#" + key).addClass("is-invalid");
        $("#" + key)
            .parent()
            .append("<div class='invalid-feedback'>" + value + "</div>");
    });
}

function alertSuccess() {
    const successModal = new bootstrap.Modal(
        document.getElementById("modalsuccess")
    );
    $("input,select").removeClass("filled is-invalid");
    $(".invalid-feedback").remove();

    successModal.show();
}

export { handleFormError, alertSuccess };
