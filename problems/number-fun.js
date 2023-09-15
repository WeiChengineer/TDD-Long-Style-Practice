function returnsThree() {
  return 3
}

function reciprocal(num) {
  if (num < 1 || num > 1000000) {
    throw new RangeError('Number must be between 1 and 1,000,000.')
  }
  return 1 / num;
}

module.exports = {
  returnsThree,
  reciprocal
};