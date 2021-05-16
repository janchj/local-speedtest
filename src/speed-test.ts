import * as SpeedTest from "speedtest-net";

type Metrics = {
  download: number;
  upload: number;
  ping: number;
};

export const convertToMBPs = (value: number) => value / 125000;

export const getMetrics = async (): Promise<Metrics> => {
  console.debug({
    message: `getMetrics() started at: ${new Date().toISOString()}`,
  });

  const response = await SpeedTest({
    acceptLicense: true,
    acceptGdpr: true,
    verbosity: 2,
  });

  console.debug({
    message: `getMetrics() finished at: ${new Date().toISOString()}`,
    response,
  });

  const { download, upload, ping } = response;

  return {
    download: convertToMBPs(download.bandwidth),
    upload: convertToMBPs(upload.bandwidth),
    ping: ping.latency,
  } as Metrics;
};
