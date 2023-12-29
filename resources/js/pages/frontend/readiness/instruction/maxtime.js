// #SET MAX TIME CONTDOWN
$.ajax({
    url: API_URL + "/api/v1/career-readiness/setting",
    type: "GET",
    timeout: 5000,
    success: function (response) {
        localStorage.setItem(
            "MAX_TIME_READINESS",
            response.data.data[0].timer_per_page
        );

        console.log(response);
    },
    error: function (xhr, status, error) {
        errorAPI(xhr, status, error);
    },
});
