//import "@/pages/frontend/app-frontend";
import "@/pages/frontend/profile/index";
import { alertSuccess, handleFormError } from "./alert.js";
import Cookies from "js-cookie";
import { loadData, updateData, validasiPhone } from "./index.js";
import * as select2_ from "select2";
import "select2/dist/css/select2.css";
import "@css/frontend/custom-select2.css";
window.select2 = select2_;
if (import.meta.env.MODE === "development") {
    select2();
}

const id_bio = Cookies.get("user_id");

// load country
function loadCountry() {
    loadData("/api/v1/ipedia/zone-country?limit=-1", function (data) {
        $("#bio_country_id").append(
            data.data.map(function (item) {
                return `<option value="${item.id_country}">${item.country_name}</option>`;
            })
        );
    });
}

// load province
function loadProvince() {
    loadData("/api/v1/ipedia/zone-province?limit=-1", function (data) {
        const bioProvinceSelect = $("#bio_province_id");
        data.data.forEach(function (item) {
            const option = `<option value="${item.id_province}">${item.province_name}</option>`;
            bioProvinceSelect.append(option);
        });
    });
}

// load city
function loadCity(idProvince, callback) {
    loadData(
        "/api/v1/ipedia/zone-city/member?id_province=" + idProvince,
        function (data) {
            const bioCitySelect = $("#bio_city_id");
            bioCitySelect.empty(); // Empty the city options before adding new ones
            data.forEach(function (item) {
                const option = `<option value="${item.id_city}">${item.city_name}</option>`;
                bioCitySelect.append(option);
            });

            if (typeof callback === "function") {
                callback(); // Call back if exists
            }
        }
    );
}

// SHOW DATA
function loadBio() {
    loadData("/api/v1/profile/bio/" + id_bio, function (data) {
        $("#full_name").val(data.full_name);
        $("#phone").val(data.phone);
        $("#gender").val(data.gender);
        $("#birth_place").val(data.birth_place);
        $("#birth_date").val(data.birth_date);

        $("#city-box").toggle(data.bio_city_id !== 0);
        if (data.bio_city_id !== 0) {
            $("#bio_city_id").val(data.city.id_city).trigger("change");
        }

        $("#province-box").toggle(data.bio_province_id !== 0);
        if (data.bio_province_id !== 0) {
            $("#bio_province_id")
                .val(data.city.province.id_province)
                .trigger("change");
        }

        $("#bio_country_id")
            .val(data.bio_country_id || data.city.province.country.id_country)
            .trigger("change");

        if (data.bio_province_id !== 0) {
            loadCity(data.city.province.id_province, function () {
                $("#bio_city_id").val(data.city.id_city);
            });
        }
    });
}

$(document).ready(function () {
    loadCountry();
    loadProvince();
    $("#bio_province_id").select2();
    $("#bio_city_id").select2();
    $("#bio_country_id").select2();

    $("#bio_province_id").on("change", function () {
        const selectedProvince = $(this).val();
        loadCity(selectedProvince, function () {
            $("#bio_city_id").select2(); // Re-initialize select2 after loading new cities
        });
    });

    $("#bio_country_id").on("change", function () {
        const selected = $(this).val();
        if (selected == 100) {
            $("#province-box").show();
            $("#city-box").show();
        } else {
            $("#province-box").hide();
            $("#city-box").hide();
        }
    });

    $("#phone").on("change", function () {
        let isValid = validasiPhone($(this).val());
        if (!isValid) {
            $("#update-button").attr("disabled", true); // Disable submit button
        } else {
            $("#update-button").removeAttr("disabled"); // Enable submit button
        }
    });

    // UPDATE DATA
    $("#update-button").on("click", function (e) {
        e.preventDefault();
        let data = {
            id_bio: id_bio,
            gender: $("#gender").val(),
            birth_place: $("#birth_place").val(),
            birth_date: $("#birth_date").val(),
            bio_country_id: $("#bio_country_id").val(),
            bio_province_id: $("#bio_province_id").val(),
            bio_city_id: $("#bio_city_id").val(),
            full_name: $("#full_name").val(),
            phone: $("#phone").val(),
            modified_id: id_bio,
            creation_id: id_bio,
        };

        if ($("#bio_country_id").val() != 100) {
            data.bio_province_id = 0;
            data.bio_city_id = 0;
        } else {
            data.bio_province_id = $("#bio_province_id").val();
            data.bio_city_id = $("#bio_city_id").val();
        }

        let JSONData = JSON.stringify(data);
        updateData("/api/v1/profile/bio/" + id_bio, JSONData, function () {
            alertSuccess();
        });
    });

    // Load bio data and cities based on the province in bio data
    loadBio();
});
