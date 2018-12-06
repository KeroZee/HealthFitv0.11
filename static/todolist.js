$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

function Calendar(){
    window.location.replace('../schedule');
}

function save() {
    var yes = confirm('Are you sure to submit all your inputs?');
}

function Dec(){
    nov = document.getElementById("November");
    dec = document.getElementById("December");
    nov.style.display = 'none';
    dec.style.display = 'block';
}
