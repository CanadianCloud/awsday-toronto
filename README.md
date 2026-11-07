# AWS Community Day Toronto

City of Builders website for https://toronto.awsday.ca.

## Preview

Serve this directory with any static HTTP server, for example:

```sh
python -m http.server 8080
```

No framework, package installation, build step, tracking or backend is required.

## Content

`index.html` contains editable, accessible page content and dialog panels. Shared appearance lives in `styles.css`; `app.js` handles navigation and native dialogs. Images and locally hosted fonts live in `assets/`. All paths are relative, so the site also works under the GitHub project path.

Dates, venue, speakers and programme are deliberately unconfirmed. The updates button links visitors to the existing CanadianCloud LinkedIn announcements; it does not claim to collect email subscriptions. Volunteer, speaker and sponsorship enquiries open the visitor’s email app addressed to the published info@awsday.ca contact.

To publish confirmed details, replace the corresponding panel and hero copy, and point the updates CTA at the confirmed registration URL. Update canonical, social metadata, sitemap and CNAME if the domain changes.

## Hosting

GitHub Pages serves `main` from `/`. The working project URL inherits the CanadianCloud organization domain. This repo is independent of the main awsday.ca site.

The custom domain `toronto.awsday.ca` is configured through the root `CNAME` file and DNS points to `canadiancloud.github.io`.

## Assets

City artwork was generated for this design. Community photo reused from CanadianCloud/awsday.github.io, public/Instagram/ig3.jpg, and captioned as a past Canadian community event. Nunito is licensed under the SIL Open Font License; see assets/OFL.txt.

## Past events

The footer links to `past-events/index.html`. The 2026 card opens the locally preserved original awsday.ca website at `past-events/2026/`, including its speakers pages and interactive schedule. The 2025 and 2024 cards link to the existing archives on awsday.ca.

The 2026 archive was built from CanadianCloud/awsday.github.io commit `e3238b0177c67a8b073750cf0ff72b57609ffbd3` with Next.js 14.2.5, static export and base path `/past-events/2026`. Root asset paths were moved under the archive; linked resources, fonts and video are stored locally. The original repository and live awsday.ca were not modified. See `past-events/2026/provenance.json` for the capture date and source HTML hash.

The archive notice, closed-registration dialog and `noindex,follow` metadata distinguish this historical promotional website from a current event. Original event content and visual design are retained. Update the archive index to add future years; keep existing year folders unchanged.
