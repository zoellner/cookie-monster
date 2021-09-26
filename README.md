# Cookie Monster Browser Extension

Everyone loves cookies, especially advertisers and publishers. The European Union too, but they want to make sure everyone consents to cookies, and consents, and consents, and consents.... until the internet is barely usable. That's when Cookie Monster comes into play. In a quest to make sure it gets to eat more cookies than anyone else, Cookie Monster will eat up those consent dialogs. And without consent, there won't be any advertisers cookies for you (but more for Cookie Monster, yummy!).

# FAQ

## Which browsers are supported?
Right now this is published as a Chrome Extension in the Chrome Web Store and works in Chrome. A Safari version is planned in the future

## Ok, but what does it really do?
Cookie Monster works a bit like an ad blocker but instead of ads it blocks cookie consent dialogs.

## How can I help?
Submit pages that stil have cookie consent dialogs here: https://github.com/zoellner/cookie-monster/issues

## How can I contribute even more?
You can donate to the development of this browser extension here: https://github.com/sponsors/zoellner


# Development
If you'd like to contribute to the development please submit your PRs against the develop branch.
The data in `src/rules.json` is compiled out of the csv files in the `data/` folder. Don't edit the json file directly.
The compilation can be run using `npm run compile`.
