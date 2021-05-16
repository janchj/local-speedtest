import { main } from "./main";
import * as SpeedTest from "./speed-test";
import * as Database from "./database";

describe("main", () => {
  it("should call API", async () => {
    const spyMetrics = jest
      .spyOn(SpeedTest, "getMetrics")
      .mockResolvedValueOnce({ download: 1, upload: 2, ping: 3 });

    const spyPersist = jest
      .spyOn(Database, "persistMetrics")
      .mockResolvedValueOnce(undefined);

    await main();
    expect(spyMetrics).toBeCalledTimes(1);
    expect(spyPersist).toBeCalledTimes(1);
  });
});
