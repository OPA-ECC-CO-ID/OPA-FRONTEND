import "@/pages/frontend/access/index";
import "@/pages/frontend/access/onboarding";
import "@/pages/frontend/entry/cekJwtUser";
import Cookies from "js-cookie";
import { loadData, updateData, validasiPhone } from "./index.js";
import "@/pages/frontend/entry";
import * as select2_ from "select2";
import "select2/dist/css/select2.css";
import "@css/frontend/onboarding-select2.css";
window.select2 = select2_;
if (import.meta.env.MODE === "development") {
    select2();
}

// GLOBAL SETUP
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        Authorization: "Bearer " + Cookies.get("jwtUser"),
    },
});

// load country
function loadCountry() {
    loadData("/api/v1/ipedia/zone-country?limit=-1", function (data) {
        $("#bio_country").append(
            data.data.map(function (item) {
                return `<option value="${item.id_country}">${item.country_name}</option>`;
            })
        );
    });
}
// load province
function loadProvince() {
    loadData("/api/v1/ipedia/zone-province?limit=-1", function (data) {
        $("#bio_province").append(
            data.data.map(function (item) {
                return `<option value="${item.id_province}">${item.province_name}</option>`;
            })
        );
    });
}

// load city
function loadCity(idProvince) {
    loadData(
        "/api/v1/ipedia/zone-city/member?id_province=" + idProvince,
        function (data) {
            $("#bio_city").append(
                data.map(function (item) {
                    return `<option value="${item.id_city}">${item.city_name}</option>`;
                })
            );
        }
    );
}

function loadUniv() {
    loadData("/api/v1/ipedia/universities?limit=-1", function (data) {
        $("#university").append(
            data.data.map(function (item) {
                return `<option value="${item.id_university}">${item.university_name}</option>`;
            })
        );
    });
}
function loadMajor() {
    loadData("/api/v1/ipedia/majors?limit=-1", function (data) {
        $("#major").append(
            data.data.map(function (item) {
                return `<option value="${item.id_major}">${item.major_name}</option>`;
            })
        );
    });
}
function loadLastEdu() {
    $("#university").select2();
    $("#major").select2();
    loadData("/api/v1/ipedia/universities?limit=-1", function (data) {
        const university = $(
            `<option value="${data.university.id_university}" hidden>${data.university.university_name}</option>`
        );
        const major = $(
            `<option value="${data.major.id_major}" hidden>${data.major.major_name}</option>`
        );
        $("#university").append(university);
        $("#major").append(major);
    });
}

const id_regis = localStorage.getItem("ID_REGIS");
// Memeriksa apakah nilai id_user tidak ada atau null
if (!id_regis) {
    // Jika tidak ada, redirect ke halaman register
    window.location.href = "/registerUser";
}
function loadSoftSkills() {
    loadData(`/api/v1/ipedia/skills/member/?type=soft`, function (data) {
        let options = "";
        data.forEach((skill) => {
            options += `<option value="${skill.id_skill}">${skill.skill_name}</option>`;
        });
        $("#softSkills").append(options);
    });
}
function loadHardSkills() {
    loadData(`/api/v1/ipedia/skills/member/?type=hard`,function (data) {
        let options = "";
        data.forEach((skill) => {
            options += `<option value="${skill.id_skill}">${skill.skill_name}</option>`;
        });
        $("#hardSkills").append(options);
    });
}

function loadIsiSoftSkills() {
    loadData(
        `/api/v1/profile/user-skills/${id_regis}?type=soft`,
        function (data) {
            let selectedSkills = data.map((skill) => skill.skill_id);
            $("#softSkills").val(selectedSkills);
            $("#softSkills").trigger("change");
        }
    );
}
function loadIsiHardSkills() {
    loadData(
        `/api/v1/profile/user-skills/${id_regis}?type=hard`,
        function (data) {
            let selectedSkills = data.map((skill) => skill.skill_id);
            $("#hardSkills").val(selectedSkills);
            $("#hardSkills").trigger("change");
        }
    );
}
function loadAbout() {
    loadData("/api/v1/profile/bio/" + id_regis, function (data) {
        $("#job_title").val(data.job_title);
        $("#short_biography").val(data.short_biography);
        $("#positive").val(data.positive);
        $("#negative").val(data.negative);

        loadIsiSoftSkills();
        loadIsiHardSkills();
    });
}

let id_bio = localStorage.getItem("ID_REGIS");
$(document).ready(function() {
    loadCountry();
    $("#bio_country").on("change", function () {
        const selected = $(this).val();
        if (selected == 100) {
            $("#province-box").show();
            $("#city-box").show();
        } else {
            $("#province-box").hide();
            $("#city-box").hide();
        }
    });
    $("#bio_province").on("click", function () {
        loadProvince();
    });
    $("#bio_province").on("change", function () {
        $("#bio_city").empty();
        loadCity($(this).val());
    });
    // last edu
    $("#university").on("click", function () {
        loadUniv();
    });
    $("#major").on("click", function () {
        loadMajor();
    });
    $("#phone").on("change", function () {
        let isValid = validasiPhone($(this).val());
        if (!isValid) {
            $("#update-button").attr("disabled", true); // Disable submit button
        } else {
            $("#update-button").removeAttr("disabled"); // Enable submit button
        }
    });

    // DATA DIRI
    $(document).ready(function () {
        $(".firstNext").on("click", function () {
            // Mengambil data dari form
            let data = {
                id_bio: id_bio,
                full_name: $("#name").val(),
                phone: $("#phone").val(),
                gender: $("#gender").val(),
                birth_place: $("#placeOfBirth").val(),
                birth_date: $("#date").val(),
                bio_country_id: $("#bio_country").val(),
                bio_province_id: $("#bio_province").val(),
                bio_city_id: $("#bio_city").val(),
                creation_id: id_bio,
                modified_id: id_bio,
            };

            if ($("#bio_country").val() != 100) {
                data.bio_province_id = 0;
                data.bio_city_id = 0;
            } else {
                data.bio_province_id = $("#bio_province").val();
                data.bio_city_id = $("#bio_city").val();
            }

            // Konversi data ke JSON
            let JSONData = JSON.stringify(data);

            // POST request ke server
            $.ajax({
                url: API_URL + "/api/v1/profile/bio",
                type: "POST",
                contentType: "application/json",
                data: JSONData,
                //success: function (result) {
                    // Handle success
                    //alert("Data berhasil disimpan!");
                //},
                //error: function (error) {
                    // Handle error
                    //alert("Terjadi kesalahan saat menyimpan data!");
                    //console.log(error);
                //}
            });
        });
    });

    // PENDIDIKAN
    $(document).ready(function () {
        loadLastEdu();
        loadMajor();
        loadUniv();
        $(".next-1").on("click", function () {
            // Mengambil data dari form
            let data = {
                id_last_edu: id_bio,
                education_type_id: $("#education").val(),
                university_id: $("#university").val(),
                major_id: $("#major").val(),
                submajor: $("#concentration").val(),
                started_date: $("#entryYear").val(),
                finished_date: $("#graduationYear").val(),
                creation_id: id_bio,
                modified_id: id_bio,
            };

            // Konversi data ke JSON
            let JSONData = JSON.stringify(data);

            // POST request ke server
            $.ajax({
                url: API_URL + "/api/v1/profile/last-edu",
                type: "POST",
                contentType: "application/json",
                data: JSONData,
                //success: function (result) {
                    // Handle success
                    //alert("Data berhasil disimpan!");
                //},
                //error: function (error) {
                    // Handle error
                    //alert("Terjadi kesalahan saat menyimpan data!");
                    //console.log(error);
                //}
            });
        });
    });

    // SELF PROFILE
    $(document).ready(function () {
        loadSoftSkills();
        loadHardSkills();
        loadAbout();
        $("#update-data").on("click", function (e) {
            e.preventDefault();
            let data = {
                short_biography: $("#short_biography").val(),
                positive: $("#positive").val(),
                negative: $("#negative").val(),
                job_title: $("#job_title").val(),
                soft_skills: $("#softSkills").val(),
                hard_skills: $("#hardSkills").val(),
            };

            // konversi object ke json
            let jsonData = JSON.stringify(data);

            // Kirim data API
            $.ajax({
                url: API_URL + "/api/v1/profile/skills/update/" + id_regis,
                type: "PUT",
                data: jsonData,
                contentType: "application/json",
                success: function (response) {
                    window.location.href = "/profile";
                    localStorage.removeItem("ID_REGIS");

                },
                error: function (xhr, status, error) {
                    console.log(error);
                },
            });
        });
        $("#softSkills").select2();
        $("#hardSkills").select2();
    });
});

