function randomColor() {
    var textArray = [
        '#3f51b5',
        '#9e0fa2',
        '#b73333',
        '#3f51b5',
        '#00984e'
    ];
    var randomIndex = Math.floor(Math.random() * textArray.length);
    var randomElement = textArray[randomIndex];
    document.getElementById("body").style.backgroundColor = randomElement;

    var x = document.getElementsByClassName("timeline-img");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = randomElement;
    }
}