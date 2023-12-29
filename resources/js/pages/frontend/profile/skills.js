// import "@/pages/frontend/app-frontend";
import "@/pages/frontend/profile/index";
import { alertSuccess, handleFormError } from "./alert.js";
import Cookies from "js-cookie";
import { loadData, updateData } from "./index.js";
import * as select2_ from "select2";
import "select2/dist/css/select2.css";
import "@css/frontend/custom-select2.css";
window.select2 = select2_;
if (import.meta.env.MODE === "development") {
    select2();
}

const id_user = Cookies.get("user_id");
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
    loadData(`/api/v1/ipedia/skills/member/?type=hard`, function (data) {
        let options = "";
        data.forEach((skill) => {
            options += `<option value="${skill.id_skill}">${skill.skill_name}</option>`;
        });
        $("#hardSkills").append(options);
    });
}

function loadIsiHardSkills() {
    loadData(
        `/api/v1/profile/user-skills/${id_user}?type=hard`,
        function (data) {
            let selectedSkills = data.map((skill) => skill.skill_id);
            $("#hardSkills").val(selectedSkills);
            $("#hardSkills").trigger("change");
        }
    );
}
function loadIsiSoftSkills() {
    loadData(
        `/api/v1/profile/user-skills/${id_user}?type=soft`,
        function (data) {
            let selectedSkills = data.map((skill) => skill.skill_id);
            $("#softSkills").val(selectedSkills);
            $("#softSkills").trigger("change");
        }
    );
}
function loadAbout() {
    loadData("/api/v1/profile/bio/" + id_user, function (data) {
        $("#job_title").val(data.job_title);
        $("#short_biography").val(data.short_biography);
        $("#positive").val(data.positive);
        $("#negative").val(data.negative);

        loadIsiHardSkills();
        loadIsiSoftSkills();
    });
}
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
            url: API_URL + "/api/v1/profile/skills/update/" + id_user,
            type: "PUT",
            data: jsonData,
            contentType: "application/json",
            success: function (response) {
                alertSuccess();
            },
            error: function (xhr, status, error) {
                console.log(error);
            },
        });
    });
    $("#hardSkills").select2();
    $("#softSkills").select2();
});
