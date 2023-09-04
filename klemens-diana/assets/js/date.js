const tanggalTujuan = new Date('Sep 16, 2023 08:00:00').getTime();

const hitungMundur = setInterval(function () {
  const sekarang = new Date().getTime();
  const selisih = tanggalTujuan - sekarang;

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);
  const teks = document.getElementById('date');
  
  document.getElementById('days').innerHTML = hari + ' Days';
  document.getElementById('hours').innerHTML = jam + ' Hours';
  document.getElementById('minutes').innerHTML = menit + ' Minutes';
  document.getElementById('seconds').innerHTML = detik + ' Seconds';

  if (selisih < 0) {
    clearInterval(hitungMundur);
    document.getElementById('countdown').innerHTML = '00 Days 00 Hours 00 Minutes 00 Seconds';
  }
}, 1000);
