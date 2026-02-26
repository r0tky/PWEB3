function kirimPesan() {
    alert("Pesan berhasil dikirim!");
    return false;
}

/* Animasi fade saat scroll */
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.85;

    faders.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add("show");
        }
    });
});