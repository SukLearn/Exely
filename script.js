document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const bookButton = card.querySelector(".book-button");
    const priceButton = card.querySelector(".price-button");
    const image = card.querySelector(".image");
    const cardContent = card.querySelector(".card-header");
    const payment = card.querySelector(".payment");
    let isReserved = false;

    bookButton.addEventListener("click", (e) => {
      e.stopPropagation();
      isReserved = true;

      card.addEventListener("mouseleave", () => {
        if (isReserved) {
          cardContent.classList.add("reserved");
          payment.style.display = "block";
          priceButton.style.display = "none";
          image.style.opacity = "0.6";
          card.classList.add("no-background");
        }
      });
    });

    cardContent.addEventListener("click", () => {
      if (card.classList.contains("reserved")) {
        card.classList.remove("reserved");
        payment.style.display = "none";
        priceButton.style.display = "block";
        image.style.opacity = "1";
        card.classList.remove("no-background");

        isReserved = false;
      }
    });
  });
});
