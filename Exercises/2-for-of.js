'use strict';

const sum = (...args) => {
  let res = 0;
  for (const e of args) {
    res += e;
  }
  return res;
};

module.exports = { sum };
