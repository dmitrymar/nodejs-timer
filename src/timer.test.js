const timer = require("./timer");

test("If no value is enter - a prompt is printed", () => {
  expect(timer()).toBe(null);
});
