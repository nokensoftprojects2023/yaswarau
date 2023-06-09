var x = document.getElementById("myAudio");
    
function playAudio() {
    let intro = document.getElementById("intro");
    var lokasi = document.getElementById("lokasi");
    var bride_groom = document.getElementById("bride-room");
    var firman = document.getElementById("firman");
    var footer = document.getElementById("footer");
    var buku_tamu = document.getElementById("buku-tamu");

    let btn_pause = document.getElementById("pause-btn");
    let btn_play = document.getElementById("play-btn");
    let sound_controls = document.getElementById("sound-controls");

    intro.classList.add("d-none");
    bride_groom.classList.remove("d-none");
    lokasi.classList.remove("d-none");
    buku_tamu.classList.remove("d-none");
    footer.classList.remove("d-none");
    firman.classList.remove("d-none");
    btn_pause.classList.remove("d-none");
    btn_play.classList.add("d-none");
    sound_controls.classList.remove("d-none");
    x.play();
}

function playButton() {
    let btn_pause = document.getElementById("pause-btn");
    let btn_play = document.getElementById("play-btn");
    btn_pause.classList.remove("d-none");
    btn_play.classList.add("d-none");
    x.play();
}

function pauseButton() {
    let btn_pause = document.getElementById("pause-btn");
    let btn_play = document.getElementById("play-btn");
    btn_pause.classList.add("d-none");
    btn_play.classList.remove("d-none");
    x.pause();
}