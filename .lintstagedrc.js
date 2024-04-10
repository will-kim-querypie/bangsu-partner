const path = require('path');

const buildLintCommand = filenames =>
  `next lint --fix --quiet --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`;

const buildPrettierCommand = filenames =>
  `prettier --write ${filenames.map(f => path.relative(process.cwd(), f)).join(' ')}`;

module.exports = {
  '*.{ts,tsx}': [buildPrettierCommand, buildLintCommand],
  '*.{js,css,md}': [buildPrettierCommand],
};
