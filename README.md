# Happy Bday Gift

A playful, IT-student-style way to say **Happy Birthday**. Instead of sending only a greeting, share a small interactive website: it starts with a cheeky birthday question, leads through a playful button challenge, and ends with a personalized birthday card.

**Create a birthday surprise:** [Open the sender page](https://happy-bday-gift.netlify.app/setup.html)

**Try the greeting:** [Open the birthday experience](https://happy-bday-gift.netlify.app/)

## What It Is For

Happy Bday Gift turns a familiar birthday wish into a memorable little experience. It is designed for friends who want to greet someone in a more personal and interactive way, with a light tech-inspired touch.

## Features

- Personalize the recipient's name, card message, and theme color.
- Share a short link for each custom card; the message itself is not exposed in the URL.
- Play through a multi-page birthday interaction with mischievous Yes and No buttons.
- Reveal a birthday cake, play a birthday tune, and blow out the candles.
- Open a custom message inside an animated birthday card.
- Use the responsive experience on desktop or mobile.

## How It Works

1. The sender enters the celebrant's name, chooses a color, and writes a message.
2. The sender page saves those details through a Netlify Function and Netlify Blobs, then creates a short `/c/<id>` link.
3. The recipient opens the link and moves through the interactive birthday flow.
4. The final page presents the cake and reveals the sender's message in the birthday card.

## Built With

- HTML for the pages and card structure.
- CSS for the responsive layout, themes, animations, and interactive details.
- JavaScript for the birthday flow, card settings, and effects.
- Netlify Functions and Netlify Blobs for saving personalized cards behind short links.

## Hosting

The live site is hosted on Netlify. New cards created on the sender page are available at their generated short links.