document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const bookButton = card.querySelector(".book-button");
    const payment = card.querySelector(".payment");
    let isReserved = false;

    bookButton.addEventListener("click", (e) => {
      e.stopPropagation();
      isReserved = true;

      card.addEventListener("mouseleave", () => {
        if (isReserved) {
          card.classList.add("reserved");
          payment.style.display = "block";
        }
      });
    });

    card.addEventListener("click", () => {
      if (card.classList.contains("reserved")) {
        card.classList.remove("reserved");
        payment.style.display = "block";

        isReserved = false;
      }
    });
  });
});
