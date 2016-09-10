'use strict';

var tap = require('tap');

var example = require('../example');

tap.test('triple', function (test) {
  test.equal(example.triple(3), 9);
  test.end();
});

tap.test('calculate_total', function (test) {
  var order = { price: 8, total: 8.64 };
  var result = example.calculate_total(order);
  test.equal(result.total, order.total);
  test.end();
});
