
// your code
const contenLocation = "html/";
const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const content = urlParams.get('content')
console.log(urlParams.has('content'));
console.log(content);


var contentFile = content + ".html";

if (urlParams.has('content')) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', contenLocation + contentFile, true);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) {
            contentIndex();
            return;
        }

        document.getElementById('pageMain').innerHTML = this.responseText;
        highLight(content);
    };
    xhr.send();

} else {
    contentIndex()
}




function contentIndex() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', contenLocation + "main.html", true);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        document.getElementById('pageMain').innerHTML = this.responseText;
        highLight("main")
    };
    xhr.send();

}


function highLight(content) {
    $('document').ready(function () {
        var navLink = document.getElementById(content + "MenuItem");
        console.log(navLink);
        navLink.classList.add("active");
        if (navLink.dataset.hasOwnProperty("parent")) {

            document.getElementById(navLink.dataset.parent).classList.add("active");
        }
    });
}