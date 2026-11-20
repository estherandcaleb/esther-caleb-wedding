# Esther & Caleb — Animated Wedding Invitation

A responsive, custom static wedding invitation website with an envelope opening interaction, countdown, details, photo and RSVP link.

## Preview locally
1. Unzip the folder.
2. Open `index.html` in a browser. (Fonts load from Google Fonts when online.)

## Personalise
Open `script.js` and edit:
- `rsvpUrl`: paste the published URL of your RSVP Google Form.
- `musicUrl`: add a local MP3 path such as `assets/music.mp3`. Only use music you have permission to share.
- `weddingDate`: date/time used by the countdown.

Update the wedding time, dress code and other details in `index.html` when confirmed.

## Free publishing with GitHub Pages
1. Create/sign in to a GitHub account and make a new public repository (e.g. `esther-caleb-invitation`).
2. Upload the contents of this folder to the repository root (index.html, styles.css, script.js, assets/).
3. In the repository, open **Settings → Pages**. Choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
4. GitHub will publish a free URL similar to `https://yourusername.github.io/esther-caleb-invitation/`. Share that URL on WhatsApp. Guests do not need GitHub accounts.

GitHub Pages is free for public repositories. For ordinary wedding guest traffic, it should be more than sufficient; it does have service/usage limits and is not a guaranteed unlimited hosting service.

## RSVP collection
This version has a button ready to link to a Google Form. Create a form with guest name, attending/not attending, number attending and message/dietary needs; publish it, copy its responder URL and paste it into `CONFIG.rsvpUrl` in `script.js`. The invitation itself is static; RSVPs are collected by the form provider, not by this site.
