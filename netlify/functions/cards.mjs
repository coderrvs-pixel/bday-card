import { randomBytes } from "node:crypto";
import { getStore } from "@netlify/blobs";

const allowedOrigins = new Set([
    "https://coderrvs-pixel.github.io",
    "https://happy-bday-gift.netlify.app"
]);

function jsonResponse(body, status, origin) {
    const headers = { "Content-Type": "application/json" };
    if (allowedOrigins.has(origin)) headers["Access-Control-Allow-Origin"] = origin;
    headers.Vary = "Origin";
    return new Response(JSON.stringify(body), { status, headers });
}

export default async function handler(request) {
    const origin = request.headers.get("origin");
    if (origin && !allowedOrigins.has(origin)) return jsonResponse({ error: "Origin not allowed." }, 403, origin);

    if (request.method === "OPTIONS") {
        if (!allowedOrigins.has(origin)) return new Response(null, { status: 403 });
        return new Response(null, {
            status: 204,
            headers: {
                "Access-Control-Allow-Origin": origin,
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
                Vary: "Origin"
            }
        });
    }

    const store = getStore("birthday-cards");
    if (request.method === "POST") {
        let card;
        try {
            card = await request.json();
        } catch {
            return jsonResponse({ error: "Invalid card data." }, 400, origin);
        }

        if (
            typeof card.name !== "string" || !card.name.trim() || card.name.length > 80 ||
            typeof card.message !== "string" || !card.message.trim() || card.message.length > 10000 ||
            typeof card.color !== "string" || !/^#[0-9a-f]{6}$/i.test(card.color)
        ) {
            return jsonResponse({ error: "Check the name, message, and color fields." }, 400, origin);
        }

        const id = randomBytes(6).toString("base64url");
        await store.setJSON(id, {
            color: card.color,
            name: card.name.trim(),
            message: card.message.trim()
        });
        return jsonResponse({ id }, 201, origin);
    }

    if (request.method === "GET") {
        const id = new URL(request.url).searchParams.get("id");
        if (!id || !/^[A-Za-z0-9_-]{8}$/.test(id)) return jsonResponse({ error: "Invalid card link." }, 400, origin);
        const card = await store.get(id, { type: "json" });
        if (!card) return jsonResponse({ error: "Birthday card not found." }, 404, origin);
        return jsonResponse(card, 200, origin);
    }

    return jsonResponse({ error: "Method not allowed." }, 405, origin);
}