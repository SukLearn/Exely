document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const priceButton = card.querySelector(".card__price-button");
    const bookButton = card.querySelector(".card__book-button");
    const payment = card.querySelector(".card__payment");
    let isReserved = false;

    bookButton.addEventListener("click", (e) => {
      e.stopPropagation();
      isReserved = true;

      card.addEventListener("mouseleave", () => {
        if (isReserved) {
          card.classList.add("reserved");
          payment.style.display = "block";
          priceButton.style.display = "none";
        }
      });
    });

    card.addEventListener("click", () => {
      if (card.classList.contains("reserved")) {
        card.classList.remove("reserved");
        payment.style.display = "none";
        priceButton.style.display = "flex";
        isReserved = false;
      }
    });
  });
});
