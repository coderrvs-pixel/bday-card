const params = new URLSearchParams(window.location.search);
const selectedColor = params.get("color");

if (/^#[0-9a-f]{6}$/i.test(selectedColor || "")) {
    const red = parseInt(selectedColor.slice(1, 3), 16);
    const green = parseInt(selectedColor.slice(3, 5), 16);
    const blue = parseInt(selectedColor.slice(5, 7), 16);
    const contrast = (red * 299 + green * 587 + blue * 114) / 1000 > 155 ? "#111111" : "#ffffff";
    document.documentElement.style.setProperty("--theme-color", selectedColor);
    document.documentElement.style.setProperty("--theme-contrast", contrast);
}
