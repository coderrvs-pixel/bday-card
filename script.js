const selectedThemeColor = new URLSearchParams(window.location.search).get("color");

if (/^#[0-9a-f]{6}$/i.test(selectedThemeColor || "")) {
    document.documentElement.style.setProperty("--theme-color", selectedThemeColor);
    const red = parseInt(selectedThemeColor.slice(1, 3), 16);
    const green = parseInt(selectedThemeColor.slice(3, 5), 16);
    const blue = parseInt(selectedThemeColor.slice(5, 7), 16);
    const textColor = (red * 299 + green * 587 + blue * 114) / 1000 > 155 ? "#111111" : "#ffffff";
    document.documentElement.style.setProperty("--theme-contrast", textColor);
    document.documentElement.style.setProperty("--accent", selectedThemeColor);
}
