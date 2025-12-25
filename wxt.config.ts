import { defineConfig } from 'wxt';
import { execSync } from 'child_process';

export default defineConfig({
  manifestVersion: 3,

  // Build output location
  outDir: '.output',

  // Source directory (WXT expects entrypoints/ here)
  srcDir: '.',

  // Public assets directory
  publicDir: 'public',

  manifest: {
    name: 'Cookie Monster',
    description: 'This extension deals with cookie consent screens in the EU',
    version: process.env.npm_package_version || '1.1.0', // Auto-sync from package.json
    author: 'Andreas Zoellner',

    permissions: [
      'declarativeNetRequest',
      'declarativeNetRequestFeedback',
    ],

    action: {
      default_icon: {
        '16': 'img/cookie16.png',
        '32': 'img/cookie32.png',
        '48': 'img/cookie48.png',
        '128': 'img/cookie128.png',
      },
    },

    icons: {
      '16': 'img/cookie16.png',
      '32': 'img/cookie32.png',
      '48': 'img/cookie48.png',
      '128': 'img/cookie128.png',
    },

    declarative_net_request: {
      rule_resources: [
        {
          id: 'ruleset_1',
          enabled: true,
          path: 'rules.json',
        },
      ],
    },
  },

  // Hooks to integrate CSV compilation
  hooks: {
    // Run before build starts
    'build:before': async () => {
      console.log('Compiling CSV rules to JSON...');

      // Run the compilation script
      execSync('tsx scripts/compile-rules.ts', { stdio: 'inherit' });

      console.log('Rules compilation complete');
    },
  },
});
