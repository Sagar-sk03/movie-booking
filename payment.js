// Show seat & total
document.getElementById("seatCount").innerText =
  localStorage.getItem("seats");

document.getElementById("totalAmount").innerText =
  localStorage.getItem("total");

// Hide all first
function hideAll() {
  document.getElementById("card").style.display = "none";
  document.getElementById("upi").style.display = "none";
  document.getElementById("netbanking").style.display = "none";

  document.getElementById("btn-card").classList.remove("active");
  document.getElementById("btn-upi").classList.remove("active");
  document.getElementById("btn-net").classList.remove("active");
}

// Select method
function selectMethod(method) {
  hideAll();

  document.getElementById(method).style.display = "block";

  if (method === "card") {
    document.getElementById("btn-card").classList.add("active");
  }
  if (method === "upi") {
    document.getElementById("btn-upi").classList.add("active");
  }
  if (method === "netbanking") {
    document.getElementById("btn-net").classList.add("active");
  }
}

// Default selection
selectMethod("upi");

// Pay button
function payNow() {
  alert("Payment Successful ✅");
  window.location.href = "confirm.html";
}