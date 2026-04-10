window.onload = function () {

    let bookingId = localStorage.getItem("bookingId") || "BK" + Math.floor(Math.random()*10000);

    document.getElementById("movie").innerText = localStorage.getItem("movie") || "Inception";
    document.getElementById("seats").innerText = localStorage.getItem("seats") || 2;
    document.getElementById("total").innerText = localStorage.getItem("total") || 400;
    document.getElementById("bookingId").innerText = bookingId;

    // QR Code
    document.getElementById("qrImg").src =
      `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${bookingId}`;
};

// PRINT
function printTicket() {
    window.print();
}