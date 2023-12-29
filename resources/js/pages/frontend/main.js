var currentURL = window.location.href;
var segments = currentURL.split('/');
var lastSegment = segments[segments.length - 1];
let links = document.getElementsByTagName("a")
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var href = link.getAttribute("href");
    if (href && href.includes(lastSegment)) {
        link.classList.add("active");
    }
}

var textHead = document.querySelector(".text-head");

if (textHead) {
    var lastElement = textHead.lastElementChild;

    if (lastElement) {
        lastElement.classList.add("active");
    }
}




