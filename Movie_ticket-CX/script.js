$(document).ready(function () {

  const ticketPrice = 150;

  // ✅ FIX 1: correct key name
  const movie = localStorage.getItem("selectedMovie");
  $("#movie-name").text("Movie: " + movie);

  // Seat click
  $(".seat").click(function () {
    if (!$(this).hasClass("booked")) {
      $(this).toggleClass("selected");
      updateTotal();
    }
  });

  // 3D card effect
  const cards = document.querySelectorAll(".movie");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -(y - centerY) / 10;
      const rotateY = (x - centerX) / 10;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0)";
    });
  });

  // Update total
  function updateTotal() {
    let selectedSeats = $(".seat.selected").length;
    let total = selectedSeats * ticketPrice;

    $("#count").text(selectedSeats);
    $("#total").text(total);
  }

  // Booking button
  $("#book").click(function () {
    let seats = $(".seat.selected").length;

    if (seats === 0) {
      showToast("⚠️ Select seats first!");
      return;
    }

    localStorage.setItem("seats", seats);
    localStorage.setItem("total", seats * ticketPrice);

    showToast("✅ Booking Successful!");

    setTimeout(() => {
      window.location.href = "confirm.html";
    }, 1500);
  });

  // Toast
  function showToast(msg) {
    let toast = $("<div class='toast'></div>").text(msg);
    $("body").append(toast);

    setTimeout(() => toast.addClass("show"), 100);
    setTimeout(() => {
      toast.removeClass("show");
      setTimeout(() => toast.remove(), 500);
    }, 2000);
  }

});