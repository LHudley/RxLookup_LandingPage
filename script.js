
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const items = card.querySelectorAll("ul li");

    // Only add toggle if there are more than 5 items
    if (items.length > 5) {
      card.classList.add("collapsed");

      const toggle = document.createElement("div");
      toggle.className = "card-toggle";
      toggle.innerHTML = `<span>Show more <span class="arrow">▼</span></span>`;
      card.appendChild(toggle);

      toggle.addEventListener("click", () => {
        card.classList.toggle("expanded");
        card.classList.toggle("collapsed");

        const isExpanded = card.classList.contains("expanded");
        toggle.innerHTML = isExpanded 
          ? `<span>Show less <span class="arrow">▲</span></span>`
          : `<span>Show more <span class="arrow">▼</span></span>`;
      });
    }
  });
});
