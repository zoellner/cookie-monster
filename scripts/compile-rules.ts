import * as fs from 'fs/promises';
import * as path from 'path';

// DeclarativeNetRequest types
type ResourceType =
  | 'main_frame'
  | 'sub_frame'
  | 'stylesheet'
  | 'script'
  | 'image'
  | 'font'
  | 'object'
  | 'xmlhttprequest'
  | 'ping'
  | 'csp_report'
  | 'media'
  | 'websocket'
  | 'webtransport'
  | 'other';

interface Rule {
  id: number;
  priority: number;
  action: { type: 'block' };
  condition: {
    urlFilter: string;
    resourceTypes?: ResourceType[];
  };
}

async function main(): Promise<void> {
  const csvPath = path.resolve(process.cwd(), 'data', 'germany.csv');
  const outputPath = path.resolve(process.cwd(), 'public', 'rules.json');

  const csv = await fs.readFile(csvPath, 'utf-8');
  const lines = csv.split('\n');

  const rules: Rule[] = lines
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
          resourceTypes: convertFlagsToResourceTypes(flags),
        },
      };
    });

  await fs.writeFile(outputPath, JSON.stringify(rules, null, 2));
  console.log(`Compiled ${rules.length} rules from CSV to JSON`);
}

function convertFlagsToResourceTypes(flags?: string): ResourceType[] | undefined {
  if (!flags) return undefined;

  const resourceTypeFlags = (Array.isArray(flags) ? flags : [flags])
    .filter(isValidResourceType);

  return resourceTypeFlags.length > 0 ? resourceTypeFlags : undefined;
}

function isValidResourceType(flag: string): flag is ResourceType {
  const validTypes: ResourceType[] = [
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
    'other',
  ];

  return validTypes.includes(flag as ResourceType);
}

main().catch(console.error);
