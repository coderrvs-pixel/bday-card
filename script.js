const params = new URLSearchParams(window.location.search);
const selectedColor = params.get("color");
const themeColor = /^#[0-9a-f]{6}$/i.test(selectedColor || "") ? selectedColor : "#ff4a75";
const red = parseInt(themeColor.slice(1, 3), 16);
const green = parseInt(themeColor.slice(3, 5), 16);
const blue = parseInt(themeColor.slice(5, 7), 16);
const contrast = (red * 299 + green * 587 + blue * 114) / 1000 > 155 ? "#111111" : "#ffffff";

document.documentElement.style.setProperty("--theme-color", themeColor);
document.documentElement.style.setProperty("--theme-contrast", contrast);
