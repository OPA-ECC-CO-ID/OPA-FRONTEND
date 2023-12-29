//import './bootstrap'
import "@/app";
import "@/bootstrap";
// import './jstable.js'
//import 'bootstrap/dist/css/bootstrap.min.css'
import swal from "sweetalert2";
//import.meta.glob(["../img/**"]);
// import "@/pages/backend/core/bootstrap.min.js";
import "@css/backend/app-backend.css";
import "@/pages/backend/script.js";
//import "@/pages/backend/soft-ui-dashboard.min.js";
import "@/pages/backend/core/popper.min.js";
// import DataTable from 'datatables.net-dt/js/dataTables.dataTables.min.js'

import $ from "jquery";
window.$ = $;
window.Swal = swal;

import {
    focused,
    defocused,
    toggleSidenav,
    navbarColorOnResize,
} from "@/pages/backend/soft-ui-dashboard.js";
window.focused = focused;
window.toggleSidenav = toggleSidenav;
window.defocused = defocused;
window.navbarColorOnResize = navbarColorOnResize;


// // GLOBAL SETUP
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        Authorization: "Bearer " + Cookies.get("jwtToken"),
    },
});

