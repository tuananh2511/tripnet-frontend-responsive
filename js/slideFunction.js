function openComments() {
    document.getElementById("comment").style.width = "400px";
    document.getElementById("myContent").style.marginRight = "400px";
    document.getElementById("report").style.width = "0";
}

function closeComments() {
    document.getElementById("comment").style.width = "0";
    document.getElementById("myContent").style.marginRight = "0";
}

function openReport() {
    document.getElementById("report").style.width = "400px";
    document.getElementById("myContent").style.marginRight = "400px";
    document.getElementById("comment").style.width = "0";
}

function closeReport() {
    document.getElementById("report").style.width = "0";
    document.getElementById("myContent").style.marginRight = "0";
}

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});