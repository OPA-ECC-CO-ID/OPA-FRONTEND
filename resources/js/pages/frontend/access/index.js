import "@/pages/frontend/entry"
import "@/pages/frontend/utils/dropdown";

export function loadData(url, resSuccess) {
    $.ajax({
        url: API_URL + url,
        type: "GET",
        success: function (response) {
            if (response.data) {
                resSuccess(response.data);
            }
        },
        error: function (error) {
            handleFormError(error);
        },
    });
}
export function updateData(url, data, resSuccess) {
    $.ajax({
        url: API_URL + url,
        type: "PUT",
        data: data,
        contentType: "application/json",
        success: function (response) {
            if (response.data) {
                resSuccess(response.data);
            }
        },
        error: function (error) {
            handleFormError(error);
        },
    });
}
export function validasiPhone(input) {
    const regex = /^(08|628)\d+$/;
    const key = "phone";
    const value = "Nomor telepon harus diawali dengan 08 atau 628";
    const inputElement = $("#" + key);
    if (!regex.test(input)) {
        inputElement.addClass("is-invalid");
        if (inputElement.parent().find(".invalid-feedback").length === 0) {
            inputElement
                .parent()
                .append("<div class='invalid-feedback'>" + value + "</div>");
        }
        return false;
    } else {
        inputElement.removeClass("is-invalid filled");
        inputElement.parent().find(".invalid-feedback").remove();
        return true;
    }
}
