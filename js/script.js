// Script navbar start
// Pilih elemen hamburger dan sidebar (aside)
const hamburger = document.querySelector("#hamburger");
const aside = document.querySelector("aside");

// Toggle class untuk menampilkan sidebar saat hamburger di klik
hamburger.onclick = (e) => {
  e.preventDefault(); // Mencegah aksi default dari link
  aside.classList.toggle("active");
  console.log("Toggle active class", aside.classList.contains("active")); // Debugging
};

// Tutup sidebar jika klik di luar sidebar atau hamburger
document.addEventListener("click", function (e) {
  if (
    !aside.contains(e.target) &&
    e.target !== hamburger &&
    !hamburger.contains(e.target)
  ) {
    aside.classList.remove("active");
  }
});

// Nav dan Side ketika di scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  const sidebar = document.querySelector("aside");

  if (window.scrollY > 50) {
    // Tambahkan kelas 'transparent' jika scroll lebih dari 50px
    navbar.classList.add("transparent");
    sidebar.classList.add("transparent");
  } else {
    // Hapus kelas 'transparent' jika scroll kurang dari 50px
    navbar.classList.remove("transparent");
    sidebar.classList.remove("transparent");
  }
});
// Script navbar end
