function openChat() {
    document.getElementById("chat").style.width = "400px";
    document.getElementById("myContent").style.marginRight = "400px";
}

function closeChat() {
    document.getElementById("chat").style.width = "0";
    document.getElementById("myContent").style.marginRight = "0";
}

function bottom() {
    document.getElementById('bottom').scrollIntoView();
    window.setTimeout(function() {
        top();
    }, 2000);
};

bottom();