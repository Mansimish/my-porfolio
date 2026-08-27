
const buttons = document.querySelectorAll(".tab-btn");
const cards = document.querySelectorAll(".skill-card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        cards.forEach(card => {
if (filter === "all") {
                card.style.display = "block";
            }

            else if (card.dataset.category === filter) {
                card.style.display = "block";
            }

            else {
                card.style.display = "none";
            }

        });

    });

});
