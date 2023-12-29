import "@/pages/frontend/profile/personality-result";
import "@/pages/frontend/profile/index";
import { alertSuccess, handleFormError } from "./alert.js";
import Cookies from "js-cookie";
//import "@/pages/frontend/app-frontend";
import { loadData, updateData } from "./index.js";
import * as select2_ from "select2";
import "select2/dist/css/select2.css";
import "@css/frontend/custom-select2.css";
window.select2 = select2_;
if (import.meta.env.MODE === "development") {
    select2();
}

const id_last_edu = Cookies.get("user_id");

function loadUniv() {
    loadData("/api/v1/ipedia/universities?limit=-1", function (data) {
        $("#university_id").append(
            data.data.map(function (item) {
                return `<option value="${item.id_university}">${item.university_name}</option>`;
            })
        );
    });
}
function loadMajor() {
    loadData("/api/v1/ipedia/majors?limit=-1", function (data) {
        $("#major_id").append(
            data.data.map(function (item) {
                return `<option value="${item.id_major}">${item.major_name}</option>`;
            })
        );
    });
}
function loadLastEdu() {
    $("#university_id").select2();
    $("#major_id").select2();
    loadData("/api/v1/profile/last-edu/" + id_last_edu, function (data) {
        const university = $(
            `<option value="${data.university.id_university}" hidden>${data.university.university_name}</option>`
        );
        const major = $(
            `<option value="${data.major.id_major}" hidden>${data.major.major_name}</option>`
        );
        $("#education_type_id").val(data.education_type_id);
        $("#university_id").append(university);
        $("#major_id").append(major);
        $("#submajor").val(data.submajor);
        $("#started_date").val(data.started_date);
        $("#finished_date").val(data.finished_date);
    });
}

$(document).ready(function () {
    loadLastEdu();
    loadMajor();
    loadUniv();
    $("#form-last-edu").on("submit", function (e) {
        let data = {
            id_last_edu: id_last_edu,
            education_type_id: $("#education_type_id").val(),
            university_id: $("#university_id").val(),
            major_id: $("#major_id").val(),
            submajor: $("#submajor").val(),
            started_date: $("#started_date").val(),
            finished_date: $("#finished_date").val(),
            modified_id: 12,
        };
        let JSONData = JSON.stringify(data);
        e.preventDefault();
        updateData(
            "/api/v1/profile/last-edu/" + id_last_edu,
            JSONData,
            function () {
                alertSuccess();
            }
        );
    });
});
