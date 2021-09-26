const fs = require('fs').promises;
const path = require('path');

main()
.catch(console.error);

async function main() {
  const csv = (await fs.readFile(path.resolve(__dirname, '..', 'data', 'germany.csv'))).toString();
  const lines = csv.split('\n');
  const rules = lines
  .filter(Boolean)
  .map((line, index) => {
    const parts = line.split(',').map(part => part?.trim());
    const [url, flags] = parts;
    return {
      id: index + 1,
      priority: 1,
      action: { type: 'block' },
      condition: {
        urlFilter: url,
        resourceTypes: convertFlagsToResourceTypes(flags)
      }
    };
  });
  await fs.writeFile(path.resolve(__dirname, '..', 'src', 'rules.json'), JSON.stringify(rules, null, 2));
}

function convertFlagsToResourceTypes(flags) {
  const resourceTypeFlags = (Array.isArray(flags) ? flags : [flags]).filter(isValidResourceTypeFlag);
  return resourceTypeFlags.length > 0 ? resourceTypeFlags : undefined;
}

function isValidResourceTypeFlag(flag) {
  return [
    'main_frame',
    'sub_frame',
    'stylesheet',
    'script',
    'image',
    'font',
    'object',
    'xmlhttprequest',
    'ping',
    'csp_report',
    'media',
    'websocket',
    'webtransport',
    'other'
  ].includes(flag);
}
