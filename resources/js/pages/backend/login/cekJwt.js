$(document).ready(function () {
    // Cek apakah token JWT ada dalam cookie
    let jwtToken = Cookies.get("jwtToken");

    if (!jwtToken) {
        // Jika tidak ada token, redirect ke halaman login
        window.location.href = APP_URL + "/login";
    }
});
