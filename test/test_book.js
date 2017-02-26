'use strict';

var tap = require('tap');

var Book = require('../Book');

tap.test('Book.clone (fragile)', function (test) {
  var a = Book.create({
    title: 'Test Driven Development',
    author: 'Kent Beck'
  });
  var b = a.clone();
  test.equal(b.title, a.title, 'Title not cloned');
  test.equal(b.author, a.author, 'Author not cloned');
  test.end();
});

tap.test('Book.clone (future-proof)', function (test) {
  var proto = Book.create({});
  var spec = Object.keys(proto).reduce((spec, key) => {
    if (typeof proto[key] !== 'function') {
      spec[key] = Math.random().toString(36).replace(/[^a-z]+/g, '');
    }
    return spec;
  }, {});
  var a = Book.create(spec);
  var b = a.clone();
  Object.keys(a).forEach((key) => {
    if (typeof a[key] !== 'function') {
      test.equal(b[key], a[key], `Key '${key}' not cloned properly`);
    }
  });
  test.end();
});
