// Tanggal target mundur
const targetDate = new Date("2023-09-16").getTime();

// Fungsi untuk mengupdate waktu mundur
function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        // Jika waktu sudah habis
        document.querySelector('.clock-text').innerHTML = "Waktu telah habis!";
        clearInterval(interval);
    } else {
        // Hitung hari, jam, menit, dan detik
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update tampilan clock
        document.querySelector('.days').textContent = String(days).padStart(2, '0');
        document.querySelector('.hours').textContent = String(hours).padStart(2, '0');
        document.querySelector('.minutes').textContent = String(minutes).padStart(2, '0');
        document.querySelector('.seconds').textContent = String(seconds).padStart(2, '0');
    }
}

// Pertama kali, panggil fungsi updateCountdown
updateCountdown();

// Set interval untuk mengupdate setiap detik
const interval = setInterval(updateCountdown, 1000);
