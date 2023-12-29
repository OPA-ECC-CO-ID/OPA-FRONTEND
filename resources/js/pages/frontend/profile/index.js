import "@/pages/frontend/app-frontend";
import "@/pages/frontend/profile/fotoprofile";
import "@/pages/frontend/utils/dropdown";
import { handleFormError } from "./alert";
import Cookies from "js-cookie";

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

// ========================
//     COMPLETE REPORT
// ========================

$(document).ready(function () {
    const id_user = Cookies.get("user_id");

    // Fetch assessment data and populate table
    $.ajax({
        url: `${API_URL}/api/v1/complete-report/list/${id_user}`,
        method: "GET",
        success: function (response) {
            console.log(response);

            $.each(response.data.list_complete_report, function (index, item) {
                const assessmentName = item.category_name;
                const downloadStatus =
                    item.downloaded === null
                        ? '<i class="bi bi-x-circle"></i>'
                        : '<i class="bi bi-check-circle"></i>';
                const price = "Rp " + item.report_item[0].price;
                const priceCheckbox = parseInt(item.report_item[0].price);
                let isDisabled = "";

                switch (assessmentName) {
                    case "GAYA KEPRIBADIAN":
                        if (
                            response.data.assessment_status.personality ===
                            "not_completed"
                        ) {
                            isDisabled = "disabled";
                        }
                        break;
                    case "MINAT KARIER":
                        if (
                            response.data.assessment_status.icareer ===
                            "not_completed"
                        ) {
                            isDisabled = "disabled";
                        }
                        break;
                    case "KESIAPAN KARIER":
                        if (
                            response.data.assessment_status.career_readiness ===
                            "not_completed"
                        ) {
                            isDisabled = "disabled";
                        }
                        break;
                    case "PEMETAAN POTENSI":
                        isDisabled = "disabled";
                        break;
                    default:
                        break;
                }

                const newRow = `
                <tr>
                    <td><input type="checkbox" id="check-${
                        index + 1
                    }" ${isDisabled} value="${priceCheckbox}"></td>
                    <td>${assessmentName}</td>
                    <td class="text-center">${downloadStatus}</td>
                    <td class="text-center">${price}</td>
                </tr>`;

                $("#assessmentData").append(newRow);
            });
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    // Handle check-all checkbox change
    $("#check-all").on("change", function () {
        $('input[type="checkbox"]:not(#check-all)').each(function () {
            if (!$(this).prop("disabled")) {
                $(this).prop("checked", $("#check-all").prop("checked"));
            }
        });

        updateTotalHarga();
        updateBayarButtonStatus();
    });

    // Handle individual checkbox change
    $(document).on(
        "change",
        'input[type="checkbox"]:not(#check-all)',
        function () {
            updateCheckAllStatus();
            updateTotalHarga();
            updateBayarButtonStatus();
        }
    );

    function updateCheckAllStatus() {
        const checkAll = $("#check-all");
        const checkboxes = $('input[type="checkbox"]:not(#check-all)');

        checkAll.prop(
            "checked",
            checkboxes.length === checkboxes.filter(":checked").length
        );
    }

    function updateTotalHarga() {
        const totalHargaElement = $("#total-harga");
        let totalHarga = 0;

        $('input[type="checkbox"]:checked').each(function () {
            totalHarga += parseFloat($(this).val());
        });

        totalHargaElement.text("Rp " + totalHarga.toLocaleString());
    }

    function updateBayarButtonStatus() {
        const btnBayar = $("#btn-bayar");
        const checkedCheckboxes = $(
            'input[type="checkbox"]:checked:not(#check-all)'
        );

        btnBayar.prop("disabled", checkedCheckboxes.length === 0);
    }
});
