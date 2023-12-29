// Sidebar
$(document).ready(function () {
    $(".nav-link-menu").click(function (e) {
        e.preventDefault();
        $(this).next(".nav-item-menu").slideToggle();
    });

    // Active
    // Cari semua tag <a> dengan class 'active'
    var activeLinks = $("ul.nav-item-menu a.active");

    // Cek apakah ada tag <a> yang memiliki class 'active'
    if (activeLinks.length > 0) {
        // Temukan ul.nav-item-menu yang berada di atas tag <a> yang aktif pertama
        var activeUl = activeLinks.first().closest("ul.nav-item-menu");

        // Lakukan slide down pada ul.nav-item-menu yang aktif
        activeUl.slideDown();
    }

    // Cari semua elemen <ul> dengan class "nav-item-menu"
    $("ul.nav-item-menu").each(function () {
        // Cari elemen anak <a> yang memiliki class "active" di dalamnya
        var activeChildLink = $(this).find("a.active");

        // Jika ada elemen anak dengan class "active"
        if (activeChildLink.length > 0) {
            // Temukan elemen <a> yang berada di atas elemen anak tersebut
            var parentLink = activeChildLink
                .parent()
                .parent()
                .prev(".nav-link-menu");

            // Tambahkan class "active" ke elemen <a>
            parentLink.addClass("active");
        }
    });
});

// Akhhir Sidebar
