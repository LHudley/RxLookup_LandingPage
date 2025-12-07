
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

function searchCards() {
  const input = document.getElementById('searchBar');
  const filter = input.value.toLowerCase();
  const cards = document.getElementsByClassName('card');

   // If search bar is cleared, show all cards again
  if (filter === "") {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "";
    }
    return;
  }

  // Otherwise
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const text = card.textContent || card.innerText;
    
    if (text.toLowerCase().indexOf(filter) > -1) {
      card.style.display = "";
    } else {
      card.style.display = "none";      
    }
  }

}