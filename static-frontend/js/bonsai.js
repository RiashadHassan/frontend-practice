const toggleDropdown = (element) => {
    const classes = document.querySelectorAll(".product-dropdown-menu, .template-dropdown-menu")
    classes.forEach(dropDown => {
        if (dropDown !== element) {
            dropDown.classList.remove("active");
        };
    });
    element.classList.toggle("active")
};

document.addEventListener("DOMContentLoaded", () => {
    const productToggle = document.getElementById("product-dropdown-toggle")

    productToggle.addEventListener("click", (e) => {
        e.preventDefault();
        const productDropDown = productToggle.querySelector(".product-dropdown-menu")
        toggleDropdown(productDropDown)

    });

    const templateToggle = document.getElementById("template-dropdown-toggle")

    templateToggle.addEventListener("click", (e) => {
        e.preventDefault();
        const templateDropdown = templateToggle.querySelector(".template-dropdown-menu")

        toggleDropdown(templateDropdown)

    });


});