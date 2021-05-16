import { getMetrics } from "./speed-test";
import { persistMetrics } from "./database";

export const main = async () => {
  try {
    const { download, upload, ping } = await getMetrics();
    console.debug("response", { download, upload, ping });
    await persistMetrics({ download, upload, ping });
  } catch (err) {
    console.warn(err);
  }
};
