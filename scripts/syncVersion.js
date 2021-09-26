const path = require('path');
const fs = require('fs').promises;
const pkg = require('../package.json');
const manifest = require('../src/manifest.json');

manifest.version = pkg.version;

fs.writeFile(path.resolve(__dirname, '..', 'src', 'manifest.json'), JSON.stringify(manifest, null, 2))
.then(() => console.log(`Manifest updated to version ${manifest.version}`));
