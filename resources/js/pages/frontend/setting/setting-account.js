import "@/pages/frontend/app-frontend";
import { errorAPI } from "../utils/error";

$(document).ready(function () {
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function isNotEmpty(inputValue) {
        return inputValue.trim() !== "";
    }

    function isValidName(name) {
        const namePattern = /^[A-Za-z\s]+$/;
        return namePattern.test(name);
    }
    $(".form-control").on("input", function () {
        const inputValue = $(this).val().trim();
        const controlId = $(this).attr("id");
        const errorSpan = $(`#validasi-${controlId}`);

        if (controlId === "email") {
            if (!isValidEmail(inputValue)) {
                errorSpan.text("Please enter a valid email address");
                $(`#${controlId}`).addClass("is-invalid");
            } else {
                errorSpan.text("");
                clearError(controlId);
            }
        } else if (controlId === "full_name") {
            if (!isNotEmpty(inputValue)) {
                errorSpan.text("Please provide a name");
                $(`#${controlId}`).addClass("is-invalid");
            } else if (!isValidName(inputValue)) {
                errorSpan.text(
                    "Please enter a valid name (only letters and spaces)"
                );
                $(`#${controlId}`).addClass("is-invalid");
            } else {
                errorSpan.text("");
                clearError(controlId);
            }
        } else {
            if (!isNotEmpty(inputValue)) {
                errorSpan.text(
                    `Please provide a ${
                        controlId === "username" ? "username" : "valid input"
                    }`
                );
                $(`#${controlId}`).addClass("is-invalid");
            } else {
                errorSpan.text("");
                clearError(controlId);
            }
        }

        toggleSaveButton();
    });

    function hasValidationError() {
        return $(".error-text")
            .toArray()
            .some(function (element) {
                return $(element).text() !== "";
            });
    }

    function toggleSaveButton() {
        const btnSave = $(".btn-save");
        btnSave.prop("disabled", hasValidationError());
    }

    function clearError(controlId) {
        $(`#validasi-${controlId}`).text("");
        $(`#${controlId}`).removeClass("is-invalid");
    }

    function loadUserData() {
        const user_id = Cookies.get("user_id");
        $.ajax({
            url: `${API_URL}/api/v1/users/${user_id}`,
            type: "GET",
            timeout: 5000,
            contentType: "application/json",
            success: function (response) {
                console.log(response.data);
                $("#full_name").val(response.data.name);
                $("#username").val(response.data.username);
                $("#email").val(response.data.email);
            },
            error: function (xhr, status, error) {
                errorAPI(xhr, status, error);
            },
        });
    }

    loadUserData();

    $(".btn-edit button").click(function (event) {
        event.preventDefault();

        const parentGroup = $(this).closest(".form-group");
        const originalValue = parentGroup.find(".form-control").val();

        const btnEdit = parentGroup.find(".btn-edit");
        const btnSudahEdit = parentGroup.find(".btn-sudah-edit");

        btnEdit.addClass("d-none");
        btnSudahEdit.removeClass("d-none");

        const inputField = parentGroup.find(".form-control");
        inputField.removeAttr("readonly");
        inputField.data("originalValue", originalValue);
        inputField.focus();
    });

    $(".btn-cancel").click(function (event) {
        event.preventDefault();

        const parentGroup = $(this).closest(".form-group");
        const btnEdit = parentGroup.find(".btn-edit");
        const btnSudahEdit = parentGroup.find(".btn-sudah-edit");

        const controlId = parentGroup.find(".form-control").attr("id");

        clearError(controlId);

        btnEdit.removeClass("d-none");
        btnSudahEdit.addClass("d-none");

        const inputField = parentGroup.find(".form-control");
        inputField.attr("readonly", true);
        inputField.val(inputField.data("originalValue"));
    });

    $(".btn-save").click(function (event) {
        event.preventDefault();
        if (!hasValidationError()) {
            const parentGroup = $(this).closest(".form-group");
            const updatedValue = parentGroup.find(".form-control").val();
            const userId = Cookies.get("user_id");

            const originalName = $("#full_name").val();
            const originalEmail = $("#email").val();
            const originalUsername = $("#username").val();

            const dataToSend = {
                name: originalName,
                email: originalEmail,
                username: originalUsername,
            };

            const controlId = parentGroup.find(".form-control").attr("id");
            if (controlId === "full_name") {
                dataToSend["name"] = updatedValue;
            } else if (controlId === "email") {
                dataToSend["email"] = updatedValue;
            } else if (controlId === "username") {
                dataToSend["username"] = updatedValue;
            }

            if (
                updatedValue !==
                parentGroup.find(".form-control").data("originalValue")
            ) {
                const saveSetting = new bootstrap.Modal(
                    document.getElementById("saveSetting")
                );
                saveSetting.show();

                $("#btn-yakin")
                    .off("click")
                    .on("click", function () {
                        $.ajax({
                            url: `${API_URL}/api/v1/users/setting-account/${userId}`,
                            type: "PUT",
                            timeout: 5000,
                            contentType: "application/json",
                            data: JSON.stringify(dataToSend),
                            success: function (response) {
                                $("#validasi-email").text("");
                                $("#validasi-full_name").text("");
                                $("#validasi-username").text("");
                                console.log(
                                    "Data berhasil diperbarui:",
                                    response
                                );
                            },
                            error: function (xhr, status, error) {
                                $("#validasi-email").text("");
                                $("#validasi-full_name").text("");
                                $("#validasi-username").text("");

                                console.log("Error:", error);
                                if (xhr.status === 422) {
                                    const errorResponse = xhr.responseJSON;
                                    console.log(errorResponse.message);
                                    if (errorResponse.message.email) {
                                        $("#validasi-email").text(
                                            errorResponse.message.email[0]
                                        );
                                    }
                                    if (errorResponse.message.name) {
                                        $("#validasi-full_name").text(
                                            errorResponse.message.name[0]
                                        );
                                    }
                                    if (errorResponse.message.username) {
                                        $("#validasi-username").text(
                                            errorResponse.message.username[0]
                                        );
                                    }
                                }
                            },
                        });
                        saveSetting.hide();
                    });
            } else {
                console.log("Tidak ada perubahan data");
            }

            const btnEdit = parentGroup.find(".btn-edit");
            const btnSudahEdit = parentGroup.find(".btn-sudah-edit");

            btnEdit.removeClass("d-none");
            btnSudahEdit.addClass("d-none");

            const inputField = parentGroup.find(".form-control");
            inputField.attr("readonly", true);
            inputField.data("originalValue", updatedValue);
        }
    });

    $("#btn-tidak-yakin").on("click", function () {
        loadUserData();
    });

    toggleSaveButton();
});
