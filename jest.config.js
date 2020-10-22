/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
  projects: ['hooks/*'],
  preset: 'ts-jest/presets/default',
  testMatch: ['**/*.test.ts'],
  reporters: ["default", "jest-junit"]
};