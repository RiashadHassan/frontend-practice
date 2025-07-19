const IMAGE_SRC = {
  dropdown_logo: "http://web.archive.org/web/20221117021714im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/59f05f389cd27200014f061e_icon-expand.png",
  logo: "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg",
  tick: "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg",
};

window.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img[data-src]");
  images.forEach((img) => {
    const key = img.dataset.src;
    if (IMAGE_SRC[key]) {
      img.src = IMAGE_SRC[key];
    }
  });
});

const toggleDropdown = (element) => {
  const classes = document.querySelectorAll(
    ".product-dropdown-menu, .template-dropdown-menu"
  );
  classes.forEach((dropDown) => {
    if (dropDown !== element) {
      dropDown.classList.remove("active");
    }
  });
  element.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", () => {
  const productToggle = document.getElementById("product-dropdown-toggle");

  productToggle.addEventListener("click", (e) => {
    e.preventDefault();
    const productDropDown = productToggle.querySelector(
      ".product-dropdown-menu"
    );
    toggleDropdown(productDropDown);
  });

  const templateToggle = document.getElementById("template-dropdown-toggle");

  templateToggle.addEventListener("click", (e) => {
    e.preventDefault();
    const templateDropdown = templateToggle.querySelector(
      ".template-dropdown-menu"
    );

    toggleDropdown(templateDropdown);
  });
});


//TODO: remove toggle dropdown when clicking outside and use DRY in domcontentLoaded