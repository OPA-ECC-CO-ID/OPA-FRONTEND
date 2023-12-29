// HANDLE UPLOAD FOTO
$(document).ready(function () {
    const id_bio = Cookies.get("user_id");
    // hide image
    $("#profile-no-image").addClass("d-none");

    // Mengambil profile
    $.ajax({
        url: `${API_URL}/api/v1/profile/bio/${id_bio}`,
        type: "GET",
        success: function (response) {
            $("#profile-no-image").addClass("d-none");
            $("#profile-image").removeClass("d-none");
            $("#profile-name").text(response.data.full_name);
            if (response.data.photo) {
                $("#profile-image").attr("src", response.data.photo);
            } else {
                console.log("Foto tidak tersedia.");
                $("#profile-no-image").removeClass("d-none");
                $("#profile-image").addClass("d-none");
            }
        },
        error: function (xhr, status, error) {},
    });

    $("#fileInput").change(function () {
        if (validateImage(this)) {
            displayImage(this);
        } else {
            alert("Pilih file gambar (format: JPG, JPEG, PNG)");
        }
    });

    $("#removeImage").click(function (e) {
        e.preventDefault();
        var id = Cookies.get("user_id");

        // Menghapus gambar dari API
        $.ajax({
            url: `${API_URL}/api/v1/profile/bio/remove-photo/${id}`,
            type: "DELETE",
            success: function (response) {
                console.log("Foto berhasil dihapus dari API:");
                $("#profile-no-image").removeClass("d-none");
                $("#profile-image").addClass("d-none");
            },
            error: function (xhr, status, error) {
                console.error("Terjadi kesalahan saat menghapus foto:", error);
            },
        });
    });
});

function validateImage(input) {
    var file = input.files[0];
    var validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (file && !validImageTypes.includes(file.type)) {
        return false;
    }
    return true;
}

function displayImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#profile-image").attr("src", e.target.result);

            var id = Cookies.get("user_id");

            var formData = new FormData();
            formData.append("photo", input.files[0]); // Memasukkan file ke dalam FormData

            $.ajax({
                url: `${API_URL}/api/v1/profile/bio/upload-photo/${id}`,
                type: "POST",
                data: formData,
                contentType: false,
                processData: false,
                success: function (response) {
                    if (response && response.data && response.data.photo) {
                        $("#profile-no-image").addClass("d-none");
                        $("#profile-image").removeClass("d-none");
                        // Mengganti gambar profil dengan foto yang baru diunggah
                        $("#profile-image").attr("src", response.data.photo);
                    } else {
                        console.error("Respon tidak sesuai yang diharapkan");
                    }
                },
                error: function (xhr, status, error) {
                    console.error(
                        "Terjadi kesalahan saat mengunggah foto:",
                        error
                    );
                    alert("Terjadi kesalahan saat mengunggah foto");
                },
            });
        };

        reader.readAsDataURL(input.files[0]); // Membaca file sebagai URL data
    }
}
