import * as SpeedTest from "./speed-test";

describe("speed-test", () => {
  describe("getMetrics", () => {
    it("should call API", async () => {
      const spy = jest
        .spyOn(SpeedTest, "getMetrics")
        .mockResolvedValueOnce({ download: 1, upload: 2, ping: 3 });
      await SpeedTest.getMetrics();
      expect(spy).toBeCalledTimes(1);
    });
  });
});
