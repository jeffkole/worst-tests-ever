'use strict';

function triple(number) {
  return number + number + number;
}

function calculate_total(order) {
  var price = order.price;
  var tax_rate = 0.10;
  var total = price * (1 + tax_rate);
  order.total = total;
  return order;
}

module.exports = {
  calculate_total: calculate_total,
  triple: triple
};
