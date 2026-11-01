const params = new URLSearchParams(window.location.search);

window.cardSettingsPromise = (async () => {
    let settings = {
        color: params.get("color"),
        name: params.get("name"),
        message: params.get("message")
    };
    const cardId = params.get("cardId");
    const encodedCard = params.get("card");

    if (cardId) {
        try {
            const response = await fetch(`/.netlify/functions/cards?id=${encodeURIComponent(cardId)}`);
            if (!response.ok) throw new Error("Birthday card not found.");
            settings = await response.json();
        } catch (error) {
            console.error("Could not load the birthday card.", error);
        }
    } else if (encodedCard) {
        try {
            const base64 = encodedCard.replace(/-/g, "+").replace(/_/g, "/");
            const binary = atob(base64);
            const compressed = Uint8Array.from(binary, (character) => character.charCodeAt(0));
            const stream = new Blob([compressed]).stream().pipeThrough(new DecompressionStream("gzip"));
            settings = JSON.parse(new TextDecoder().decode(await new Response(stream).arrayBuffer()));
        } catch (error) {
            console.error("Could not read the birthday card link.", error);
        }
    }

    const selectedColor = settings.color;
    if (/^#[0-9a-f]{6}$/i.test(selectedColor || "")) {
        const red = parseInt(selectedColor.slice(1, 3), 16);
        const green = parseInt(selectedColor.slice(3, 5), 16);
        const blue = parseInt(selectedColor.slice(5, 7), 16);
        const contrast = (red * 299 + green * 587 + blue * 114) / 1000 > 155 ? "#111111" : "#ffffff";
        document.documentElement.style.setProperty("--theme-color", selectedColor);
        document.documentElement.style.setProperty("--theme-contrast", contrast);
    }

    document.documentElement.classList.remove("theme-pending");
    return settings;
})();
