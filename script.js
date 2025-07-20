// script.js
const form = document.getElementById("pledgeForm");
const pledgeList = document.getElementById("pledgeList");
const pledgeCount = document.getElementById("pledgeCount");
const thankYou = document.getElementById("thankYou");
let count = 1;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name").value.trim();
  const pledgeInput = document.getElementById("pledge").value.trim();

  if (nameInput && pledgeInput) {
    const entry = document.createElement("div");
    entry.className = "submitted-pledge";
    entry.innerHTML = `<p><strong>${count}. ${nameInput}</strong> pledged:</p><blockquote>"${pledgeInput}"</blockquote>`;

    pledgeList.appendChild(entry);
    pledgeCount.textContent = count;
    count++;

    thankYou.style.display = "block";
    setTimeout(() => {
      thankYou.style.display = "none";
    }, 3000);

    form.reset();
  }
});