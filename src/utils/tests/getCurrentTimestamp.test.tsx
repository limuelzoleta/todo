import { getCurrentTimestamp } from "..";

test("getCurrentTimestamp", () => {
  expect(typeof getCurrentTimestamp()).toBe("number");
  expect(getCurrentTimestamp()).toBeLessThanOrEqual(new Date().getTime());
});
