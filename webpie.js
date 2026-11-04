
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Menu navigasi untuk HP
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const menuTerbuka = navLinks.classList.contains("active");

    menuToggle.textContent = menuTerbuka ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", menuTerbuka);
});

// Tutup menu setelah link diklik
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Tahun otomatis pada footer
document.getElementById("year").textContent =
    new Date().getFullYear();

// Formulir kontak
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("message").value.trim();

    if (!nama || !email || !pesan) {
        formMessage.textContent = "Mohon lengkapi semua kolom.";
        return;
    }

    formMessage.textContent =
        "Terima kasih, " + nama +
        "! Formulir berhasil diperiksa. " +
        "Pengiriman pesan memerlukan layanan email atau backend.";

    contactForm.reset();
});
