// Code for making full page
$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: true,
        paddingTop: "20px",
        paddingBottom: "20px",
        scrollBar: true,
        slidesNavigation: true,
        slidesNavPosition: "top",
        scrollOverflow: true
    });
});

//Fake ticke functionality
var btnAccept = document.getElementById("accept");
var btnReject = document.getElementById("reject");

btnAccept.addEventListener('click', function() {
    $('#giftmodal').modal('hide');
    $('#giftmodal').on('hidden.bs.modal', function() {
        document.getElementById("acceptMsg").classList.remove('hide');
        document.getElementById("resourcesBtn").classList.remove('hide');
    });
});

btnReject.addEventListener('click', function() {
    $('#giftmodal').modal('hide');
    $('#giftmodal').on('hidden.bs.modal', function() {
        document.getElementById("rejectMsg").classList.remove('hide');
        document.getElementById("resourcesBtn").classList.remove('hide');
    });
});
