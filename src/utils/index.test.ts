import { capitalize, getNewPrice } from ".";

test("capitalize works correctly", () => {
  expect(capitalize("")).toEqual("");
  expect(capitalize("ismoil")).toEqual("Ismoil");
});

test("getNewPrice works correctly", () => {
  expect(getNewPrice(100)).toEqual(100);
  expect(getNewPrice(100, 10)).toEqual(90);
});
