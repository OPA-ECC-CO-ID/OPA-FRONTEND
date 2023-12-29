// #SET MAX TIME CONTDOWN

$.ajax({
    url: API_URL + "/api/v1/personality/config/1",
    type: "GET",
    timeout: 5000, // Timeout set to 5 seconds
    success: function (response) {
        localStorage.setItem(
            "MAX_TIME_PERSONALITY",
            response.data.maxtime_per_page
        );
    },
    error: function (xhr, status, error) {
        errorAPI(xhr,status,error)
    },
});
