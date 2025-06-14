
document.addEventListener("DOMContentLoaded", () => {
  const numOfCategories = 6;
  const categories = document.querySelector(".server-categories");

  for (let i = 0; i < numOfCategories; i++) {
    const category = document.createElement("div");
    category.className = "category-box";
    category.textContent = `Category ${i + 1}`;
    categories.appendChild(category);
  }
});
