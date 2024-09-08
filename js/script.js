const button_close = document.getElementById("close")
const button_show = document.getElementById("menu")
const menu = document.getElementById("form_menu")
const blurr = document.getElementById("blur")

button_close.addEventListener('click', () => {
    menu.classList.add('hidden');
    menu.classList.remove('visible');
    blurr.style.display = 'none';
    // menu.style.display = 'none'
});

button_show.addEventListener('click', () => {
    menu.classList.add('visible');
    menu.classList.remove('hidden');
    blurr.style.display = 'block';
    // menu.style.display = 'block'
});

// ▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
// ▒▒█▒▒▒▄██████████▄▒▒▒▒
// ▒█▐▒▒▒████████████▒▒▒▒
// ▒▌▐▒▒██▄▀██████▀▄██▒▒▒
// ▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
// ▐┼▐▒▒██████████████▒▒▒
// ▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
// ▒▒█████──────────▐███▌
// ▒▒█▀▀██▄█─▄───▐─▄███▀▒
// ▒▒█▒▒███████▄██████▒▒▒
// ▒▒▒▒▒██████████████▒▒▒
// ▒▒▒▒▒█████████▐▌██▌▒▒▒
// ▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
// ▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒