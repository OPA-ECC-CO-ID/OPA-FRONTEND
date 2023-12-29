    // Cek apakah ada data cookie jwtToken
    let jwtUser = Cookies.get("jwtUser");
    let userID = Cookies.get("user_id");
    let id_regis = localStorage.getItem("ID_REGIS");
    if (jwtUser && userID && !id_regis ) {
        window.location.href = APP_URL + "/index";
    }