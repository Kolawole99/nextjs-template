module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',

  // This will lint and format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': filenames => [
    `pnpm biome --fix ${filenames.join(' ')}`,
    `pnpm biome --write ${filenames.join(' ')}`,
  ],

  // this will Format MarkDown and JSON
  '**/*.(md|json)': filenames => `pnpm biome --write ${filenames.join(' ')}`,
};
