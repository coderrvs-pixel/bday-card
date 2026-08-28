const selectedThemeColor = new URLSearchParams(window.location.search).get("color");

if (/^#[0-9a-f]{6}$/i.test(selectedThemeColor || "")) {
    document.documentElement.style.setProperty("--theme-color", selectedThemeColor);
}
