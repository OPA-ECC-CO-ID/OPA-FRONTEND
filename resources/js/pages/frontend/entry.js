import "@/bootstrap";

import swal from "sweetalert2";
import.meta.glob(["../img/**"]);
import "@css/frontend/entry.css";

import Cookies from "js-cookie";

// import './demo.js'
// import './tes.js'
import $ from "jquery";
window.$ = $;
window.Swal = swal;

window.Cookies = Cookies;
