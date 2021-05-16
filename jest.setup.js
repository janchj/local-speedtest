/* eslint-disable */

const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(process.cwd(), ".env.test") });

global.console = {
  log: console.log,
  error: jest.fn(), // console.error are ignored in tests
  warn: jest.fn(), // console.warn are ignored in tests
  info: jest.fn(), // console.info are ignored in tests
  debug: jest.fn(), // console.debug are ignored in tests
};
