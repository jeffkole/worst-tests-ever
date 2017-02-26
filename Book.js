'use strict';

const Book = {};
Book.create = function create(spec) {
  const {
    title,
    author,
    genre
  } = spec;


  function clone() {
    return create({
      title,
      author
    });
  }

  return Object.freeze({
    title,
    author,
    genre,

    clone
  });
};

module.exports = Book;
