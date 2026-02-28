/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  var x = init;
  return {
    increment: function () {
      return ++x;
    },
    decrement: function () {
      return --x;
    },
    reset: function () {
      x = init;
      return x;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
