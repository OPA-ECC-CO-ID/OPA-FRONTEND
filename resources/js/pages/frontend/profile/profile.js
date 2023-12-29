import "@/pages/frontend/profile/index";
import { alertSuccess, handleFormError } from "./alert.js";
import Cookies from "js-cookie";

import "@/pages/frontend/app-frontend";
import { loadData, updateData, validasiPhone } from "./index.js";
import moment from "moment-timezone";

const id_bio = Cookies.get("user_id");
function loadBio() {
    loadData("/api/v1/profile/bio/" + id_bio, function (data) {
        $("#nama_lengkap").text(data.full_name);
        $("#no_hp").text(data.phone);
        if (data.gender == "M") {
            $("#jk").text("Laki Laki");
        } else {
            $("#jk").text("Wanita");
        }
        $("#tempat_lahir").text(data.birth_place);
        $("#tanggal_lahir").text(data.birth_date);

        if (data.bio_city_id == 0 || data.bio_province_id == 0) {
            $("#provinsi").hide();
            $("#kota").hide();
            $("#negara_asal").text(data.country.country_name);
        } else {
            $("#provinsi").show();
            $("#kota").show();
            $("#negara_asal").text(data.city.province.country.country_name);
            $("#provinsi_asal").text(data.city.province.province_name);
            $("#kota_asal").text(data.city.city_name);
        }
    });
}
function loadLastEdu() {
    loadData("/api/v1/profile/last-edu/" + id_bio, function (data) {
        console.log(data);
        $("#pendidikan_terakhir").text(data.education_type.type_name);
        $("#pt").text(data.university.university_name);
        $("#prodi").text(data.major.major_name);
        $("#jurusan").text(data.submajor);
        $("#masuk").text(
            moment(data.started_date).locale("id").format("DD MMMM YYYY")
        );
        $("#lulus").text(
            moment(data.finished_date).locale("id").format("DD MMMM YYYY")
        );
    });
}

function loadIsiHardSkills() {
    loadData(
        `/api/v1/profile/user-skills/${id_bio}?type=hard`,
        function (data) {
            let selectedSkills = data.map((skill) => skill.skill.skill_name);
            $("#hard_skill").text(selectedSkills.join(", "));
        }
    );
}
function loadIsiSoftSkills() {
    loadData(
        `/api/v1/profile/user-skills/${id_bio}?type=soft`,
        function (data) {
            let selectedSkills = data.map((skill) => skill.skill.skill_name);
            $("#soft_skill").text(selectedSkills.join(" , "));
        }
    );
}

function loadSkills() {
    loadData("/api/v1/profile/bio/" + id_bio, function (data) {
        $("#job_title").text(data.job_title);
        $("#short_biography").text(data.short_biography);
        $("#positive").text(data.positive);
        $("#negative").text(data.negative);

        loadIsiHardSkills();
        loadIsiSoftSkills();
    });
}

$(document).ready(function () {
    loadBio();
    loadLastEdu();
    loadSkills();
});
