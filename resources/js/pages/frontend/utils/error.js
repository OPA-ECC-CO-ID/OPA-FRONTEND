const errorAPI = (xhr, status,error) => {
    if (status === "timeout" || xhr.status === 500) {
        window.location.href = `${APP_URL}/error-500`;
    } else {
        // window.location.href = `${APP_URL}/error-500`;
        console.log(xhr);
    }
};

export { errorAPI };
