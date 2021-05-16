require("dotenv").config();

const { SPEEDTEST_INTERVAL } = process.env;

const SPEEDTEST_INTERVAL_AS_NUMBER = Number(SPEEDTEST_INTERVAL) || 60;
const SPEEDTEST_INTERVAL_IN_MILISECONDS = SPEEDTEST_INTERVAL_AS_NUMBER * 1000;

import { main } from "./main";

setInterval(() => {
  main();
}, SPEEDTEST_INTERVAL_IN_MILISECONDS);
