// #SET MAX TIME CONTDOWN
$.ajax({
    url: API_URL + "/api/v1/icareer/config/1",
    type: "GET",
    timeout: 5000,
    success: function (response) {
        localStorage.setItem(
            "MAX_TIME_ICAREER",
            response.data.max_time_per_page
        );
    },
    error: function (xhr, status, error) {
        if (status === "timeout") {
            window.location.href = `${APP_URL}/error-500`;
        } else if (xhr.status === 500) {
            window.location.href = `${APP_URL}/error-500`;
        } else {
            window.location.href = `${APP_URL}/error-500`;
            console.log(xhr);
        }
    },
});
