const test = require("node:test");
const assert = require("node:assert");
const { tasks, calculateTotal } = require("../src/tasks");

test("task list has three open tasks", () => {
  assert.strictEqual(tasks.length, 3);
});

test("regular customer pays the full subtotal", () => {
  assert.strictEqual(calculateTotal(500, 2, "regular"), 1000);
});

test("vip customer gets a 10% discount", () => {
  assert.strictEqual(calculateTotal(500, 2, "vip"), 900);
});

test("negative input is rejected", () => {
  assert.throws(() => calculateTotal(-1, 2, "regular"));
});
