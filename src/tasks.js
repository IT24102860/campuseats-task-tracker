// CampusEats task list
// Clear names, no magic numbers, no secrets (Lab 08 - Task 06)
const { uniq } = require("lodash");

const VIP_DISCOUNT = 0.1; // 10% discount for VIP customers

const tasks = uniq([
  "Design the menu screen",
  "Build the orders API",
  "Add user login",
]);

/**
 * Calculates the order total for a CampusEats customer.
 * @param {number} price        unit price of the item (must be >= 0)
 * @param {number} quantity     number of items (must be >= 0)
 * @param {string} customerType "vip" or "regular"
 * @returns {number} the total after any VIP discount
 */
function calculateTotal(price, quantity, customerType) {
  if (typeof price !== "number" || typeof quantity !== "number") {
    throw new TypeError("price and quantity must be numbers");
  }
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }
  const subtotal = price * quantity;
  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// The API key comes from an environment variable,
// e.g. process.env.API_KEY - it is never hard-coded or logged.
const apiKey = process.env.API_KEY;

if (require.main === module) {
  console.log(`CampusEats has ${tasks.length} open tasks`);
  console.log(`API key configured: ${apiKey ? "yes" : "no"}`);
}

module.exports = { tasks, calculateTotal, VIP_DISCOUNT };
