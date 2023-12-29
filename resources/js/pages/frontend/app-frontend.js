import "@/bootstrap";
import.meta.glob(["../img/**"]);
import "@css/frontend/app-frontend.css";
import "@/pages/frontend/main.js";
import "@/pages/frontend/access/cek-onboarding.js";
import Cookies from "js-cookie";
import AOS from "aos";
AOS.init();
import $ from "jquery";
window.$ = $;
window.Cookies = Cookies;

// GLOBAL SETUP AJAX HEADER
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        Authorization: "Bearer " + Cookies.get("jwtUser"),
    },
});
