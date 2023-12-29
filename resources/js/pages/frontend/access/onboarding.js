document.addEventListener("DOMContentLoaded", function () {
    const slidePage = document.querySelector(".slide-page");
    const inputFirst = document.querySelectorAll(".first input, .first select");
    const inputSecond = document.querySelectorAll(".second input, .second select");
    const inputThird = document.querySelectorAll(".third input, .third select, .third textarea");
    const nextBtnFirst = document.querySelector(".firstNext");
    const prevBtnSec = document.querySelector(".prev-1");
    const nextBtnSec = document.querySelector(".next-1");
    const prevBtnThird = document.querySelector(".prev-2");
    const submitBtn = document.querySelector(".submit");
    const progressText = document.querySelectorAll(".step p");
    const progressCheck = document.querySelectorAll(".step .check");
    const bullet = document.querySelectorAll(".step .bullet");
    let current = 1;

    function toggleDropdownArrow(selectBox, dropdownIcon) {
        selectBox.addEventListener('click', function () {
            dropdownIcon.classList.toggle('bi-caret-down-fill');
            dropdownIcon.classList.toggle('bi-caret-up-fill');
        });

        $(selectBox).on('select2:open', function () {
            dropdownIcon.classList.remove('bi-caret-down-fill');
            dropdownIcon.classList.add('bi-caret-up-fill');
        });

        $(selectBox).on('select2:close', function () {
            dropdownIcon.classList.remove('bi-caret-up-fill');
            dropdownIcon.classList.add('bi-caret-down-fill');
        });
    }

    toggleDropdownArrow(document.getElementById('gender'), document.getElementById('gender').nextElementSibling);
    toggleDropdownArrow(document.getElementById('bio_country'), document.getElementById('bio_country').nextElementSibling);
    toggleDropdownArrow(document.getElementById('bio_province'), document.getElementById('bio_province').nextElementSibling);
    toggleDropdownArrow(document.getElementById('bio_city'), document.getElementById('bio_city').nextElementSibling);
    toggleDropdownArrow(document.getElementById('education'), document.getElementById('education').nextElementSibling);
    toggleDropdownArrow(document.getElementById('university'), document.getElementById('university').nextElementSibling);
    toggleDropdownArrow(document.getElementById('major'), document.getElementById('major').nextElementSibling);

    bullet[current - 1].classList.add("active");

    function checkFilledAndNavigate(input, button, nextPageMargin, addClass) {
        const isFilled = Array.from(input).every(element => {
            if (element.tagName.toLowerCase() === "input" || element.tagName.toLowerCase() === "select" || element.tagName.toLowerCase() === "textarea") {
                return element.value.trim() !== "";
            }
            return true;
        });

        if (isFilled) {
            slidePage.style.marginLeft = nextPageMargin;
            bullet[current - 1].classList.add("complete");
            progressCheck[current - 1].classList.add("complete");
            progressText[current - 1].classList.add("complete");
            bullet[current].classList.add("active");
            button.classList.add("complete");
            current += 1;
            document.body.classList.add(addClass);
        }

        const isCountryNotIndonesia = $("#bio_country").val() !== "100";
        const isProvinceCityFilled = isCountryNotIndonesia || ($("#bio_province").val() !== "" && $("#bio_city").val() !== "");

        if (isProvinceCityFilled) {
            $(".next-1").prop("disabled", false);
        } else {
            $(".next-1").prop("disabled", true);
        }

        const isFormComplete = Array.from(inputThird).every(element => {
            if (element.tagName.toLowerCase() === "input" || element.tagName.toLowerCase() === "select" || element.tagName.toLowerCase() === "textarea") {
                return element.value.trim() !== "";
            }
            return true;
        });

        if (isFormComplete) {
            submitBtn.removeAttribute("disabled");
            submitBtn.style.backgroundColor = "#34499c";
        } else {
            submitBtn.setAttribute("disabled", "disabled");
            submitBtn.style.backgroundColor = "";
        }
    }

    nextBtnFirst.addEventListener("click", function (event) {
        event.preventDefault();
        checkFilledAndNavigate(inputFirst, nextBtnFirst, "-100%", 'secActive');
    });

    nextBtnSec.addEventListener("click", function (event) {
        event.preventDefault();
        checkFilledAndNavigate(inputSecond, nextBtnSec, "-200%", 'thrActive');
    });

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        checkFilledAndNavigate(inputThird, submitBtn, 'submitActive');
        if (Array.from(inputThird).every(element => element.value.trim() !== "")) {
            window.location.href = 'index';
        }
    });

    function navigateToPreviousPage(prevBtn, prevPageMargin) {
        prevBtn.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = prevPageMargin;
            bullet[current - 2].classList.remove("complete");
            progressCheck[current - 2].classList.remove("complete");
            progressText[current - 2].classList.remove("complete");
            bullet[current - 1].classList.remove("active");
            current -= 1;
        });
    }

    navigateToPreviousPage(prevBtnSec, "0%");
    navigateToPreviousPage(prevBtnThird, "-100%");

    function checkFormFilledAndToggleButton(input, btn) {
        document.addEventListener("input", function () {
            const isFilled = Array.from(input).every(element => {
                if (
                    (element.tagName.toLowerCase() === "input" || element.tagName.toLowerCase() === "select") &&
                    element.type !== "hidden" &&
                    !element.disabled
                ) {
                    return element.value.trim() !== "";
                } else if (element.tagName.toLowerCase() === "textarea") {
                    return element.value.trim() !== "";
                } else if (element.tagName.toLowerCase() === "select" && $(element).hasClass("select2-hidden-accessible")) {
                    const selectedOptions = $(element).select2("data");
                    return selectedOptions && selectedOptions.length > 0;
                }
                return true;
            });

            if (isFilled) {
                btn.removeAttribute("disabled");
                btn.style.backgroundColor = "#34499c";
            } else {
                btn.setAttribute("disabled", "disabled");
                btn.style.backgroundColor = "";
            }
        });
    }

    checkFormFilledAndToggleButton(inputFirst, nextBtnFirst);
    checkFormFilledAndToggleButton(inputSecond, nextBtnSec);
    checkFormFilledAndToggleButton(inputThird, submitBtn);

    var buttons = document.querySelectorAll(".prev, .next");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    });
});
