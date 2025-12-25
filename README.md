# 🍪 Cookie Monster Browser Extension

[![Chrome Web Store Download](./static/chrome_web_store.png)](https://chrome.google.com/webstore/detail/cookie-monster-plugin/mcfkbhecnoikhkemapgbdmndejfcpfdj)

Everyone loves cookies, especially advertisers and publishers. The European Union too, but they want to make sure everyone consents to cookies, and consents, and consents, and consents.... until the internet is barely usable.

That's when Cookie Monster comes into play. In a quest to make sure it gets to eat more cookies than anyone else, Cookie Monster will eat up those consent dialogs. And without consent, there won't be any advertisers cookies for you (but more for Cookie Monster, yummy!).

# FAQ

## Which browsers are supported?
Right now this is published as a Chrome Extension in the [Chrome Web Store](https://chrome.google.com/webstore/detail/cookie-monster-plugin/mcfkbhecnoikhkemapgbdmndejfcpfdj) and works in Chrome. A Safari version is planned in the future.

## Ok, but what does it really do?
Cookie Monster works a bit like an ad blocker but instead of ads it blocks cookie consent dialogs.

## How can I help?
Submit pages that still have cookie consent dialogs here: https://github.com/zoellner/cookie-monster/issues

## How can I contribute even more?
You can donate to the development of this browser extension here: https://github.com/sponsors/zoellner

# Development

This extension is built using [WXT](https://wxt.dev/), a modern framework for building browser extensions with TypeScript.

## Setup

1. Clone the repository
2. Install dependencies: `npm install`

## Development Workflow

### Building the Extension

- **Development mode** (with hot reload): `npm run dev`
- **Production build**: `npm run build`
- **Create ZIP for distribution**: `npm run zip`

### Working with Blocking Rules

The blocking rules are stored in CSV files in the `data/` folder and automatically compiled to JSON during the build process.

- **Source**: `data/germany.csv`
- **Compiled output**: `public/rules.json` (auto-generated, don't edit directly)
- **Manual compilation**: `npm run compile`

To add new cookie consent domains:
1. Edit `data/germany.csv`
2. Add entries in the format: `domain-pattern, resource-type` (e.g., `*.cookiebot.com, script`)
3. The rules will be automatically compiled when you build

### Project Structure

```
cookie-monster/
├── data/              # CSV source files for blocking rules
├── entrypoints/       # Extension entrypoints (background scripts, etc.)
├── public/            # Static assets (icons, compiled rules)
├── scripts/           # Build scripts
├── .output/           # Build output (gitignored)
└── wxt.config.ts      # WXT configuration
```

### Testing Locally

1. Run `npm run dev` to start development mode
2. The extension will automatically load in Chrome
3. Visit German websites with cookie consent dialogs to test
4. Changes to CSV files will trigger automatic recompilation and reload

## Releasing

Releases are automated via GitHub Actions:

1. Update version: `npm version patch` (or `minor`/`major`)
2. Push changes: `git push && git push --tags`
3. Create a GitHub Release from the tag
4. GitHub Actions will automatically build and publish to Chrome Web Store

### Chrome Web Store Secrets

The following secrets need to be configured in GitHub repository settings:

- `CHROME_EXTENSION_ID` - Your Chrome Web Store extension ID
- `CHROME_CLIENT_ID` - OAuth 2.0 Client ID
- `CHROME_CLIENT_SECRET` - OAuth 2.0 Client Secret
- `CHROME_REFRESH_TOKEN` - OAuth refresh token

## Contributing

If you'd like to contribute to the development, please submit your PRs. All contributions are welcome!
