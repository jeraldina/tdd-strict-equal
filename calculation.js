function strictEqual(a, b) {
  // eslint-disable-next-line eqeqeq
  if (typeof (a) == typeof (b) && a == b) {
    return true
  }
  else {
    return false
  }
}
module.exports = strictEqual
