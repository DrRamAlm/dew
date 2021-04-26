var xhr = new XMLHttpRequest();
xhr.open('GET', 'html/menu.html', true);
xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return;
    document.getElementById('pageHeader').innerHTML = this.responseText;
};
xhr.send();