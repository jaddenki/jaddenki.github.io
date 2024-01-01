document.addEventListener("DOMContentLoaded", function () {
    // Load the initial content
    loadContent("home.html");

    // Add event listeners to navigation links
    document.getElementById("link-home").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default behavior (full page reload)
        loadContent("home.html");
    });

    document.getElementById("link-about").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default behavior (full page reload)
        loadContent("about.html");
    });

    // Add more event listeners for other pages as needed
});

function loadContent(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main-content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", page, true);
    xhttp.send();
}
