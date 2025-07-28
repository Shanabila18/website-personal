// // Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// // Ketika Hamburger menu di Klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// // Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// // Klik diluar elemen
const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Modal Box
const itemdetailbuttons = document.querySelectorAll(".item-detail-button");
const itemdetailmodal = document.querySelector("#item-detail-modal");

itemdetailbuttons.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();

    // Ambil data dari tombol
    const name = btn.getAttribute("data-name");
    const description = btn.getAttribute("data-description");
    const image = btn.getAttribute("data-image");

    // Set data ke modal
    document.querySelector("#modal-name").textContent = name;
    document.querySelector("#modal-description").textContent = description;
    document.querySelector("#modal-image").src = image;

    // Tampilkan modal
    itemdetailmodal.style.display = "flex";
  };
});

// klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemdetailmodal.style.display = "none";
  e.preventDefault();
};

// klik diluar modal
window.onclick = (e) => {
  if (e.target === itemdetailmodal) {
    itemdetailmodal.style.display = "none";
  }
};
