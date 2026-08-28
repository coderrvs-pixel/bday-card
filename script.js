let clickAudioContext;

function applyCardSettings() {
    const params = new URLSearchParams(window.location.search);
    const color = params.get("color");
    if (color && /^#[0-9a-f]{6}$/i.test(color)) {
        const red = parseInt(color.slice(1, 3), 16) / 255;
        const green = parseInt(color.slice(3, 5), 16) / 255;
        const blue = parseInt(color.slice(5, 7), 16) / 255;
        const maximum = Math.max(red, green, blue);
        const minimum = Math.min(red, green, blue);
        const lightness = (maximum + minimum) / 2;
        const saturation = maximum === minimum ? 0 : (maximum - minimum) / (1 - Math.abs(2 * lightness - 1));
        let hue = 0;
        if (maximum !== minimum) {
            const difference = maximum - minimum;
            if (maximum === red) hue = 60 * (((green - blue) / difference) % 6);
            else if (maximum === green) hue = 60 * ((blue - red) / difference + 2);
            else hue = 60 * ((red - green) / difference + 4);
        }
        if (hue < 0) hue += 360;
        const monochrome = (nextLightness) => `hsl(${hue} ${Math.round(saturation * 100)}% ${nextLightness}%)`;
        document.documentElement.style.setProperty("--accent", color);
        document.documentElement.style.setProperty("--accent-soft", `${color}33`);
        document.documentElement.style.setProperty("--accent-dark", monochrome(Math.max(18, lightness * 100 - 18)));
        document.documentElement.style.setProperty("--accent-light", monochrome(Math.min(88, lightness * 100 + 18)));
        document.documentElement.style.setProperty("--accent-pale", monochrome(96));
    }

    const question = params.get("question");
    const questionText = document.getElementById("questionText");
    if (question && questionText) questionText.textContent = question;
}

function playClickSound() {
    clickAudioContext = clickAudioContext || new (window.AudioContext || window.webkitAudioContext)();
    if (clickAudioContext.state === "suspended") clickAudioContext.resume();

    const oscillator = clickAudioContext.createOscillator();
    const gain = clickAudioContext.createGain();
    const now = clickAudioContext.currentTime;
    oscillator.frequency.setValueAtTime(720, now);
    oscillator.frequency.exponentialRampToValueAtTime(420, now + 0.06);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
    oscillator.connect(gain).connect(clickAudioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.06);
}

document.addEventListener("click", (event) => {
    if (event.target.closest("button, a")) playClickSound();
});

applyCardSettings();
