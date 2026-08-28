const selectedThemeColor = new URLSearchParams(window.location.search).get("color");

if (/^#[0-9a-f]{6}$/i.test(selectedThemeColor || "")) {
    document.documentElement.style.setProperty("--theme-color", selectedThemeColor);
    document.documentElement.style.setProperty("--theme-contrast", "#ffffff");
    document.documentElement.style.setProperty("--accent", selectedThemeColor);
}
