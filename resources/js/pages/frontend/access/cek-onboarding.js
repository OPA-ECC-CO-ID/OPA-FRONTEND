$(document).ready(function () {
    const id_regis = localStorage.getItem("ID_REGIS");
    
    $.ajax({
        url: API_URL + "/api/v1/profile/cek/" + id_regis,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            if (response === false) {
                window.location.href = '/onboarding';
            } else {
                console.log('Data diterima:', response);
            }
        },
        error: function (xhr, status, error) {
            console.error('Terjadi kesalahan dalam permintaan AJAX:', status, error);
        }
    });
});