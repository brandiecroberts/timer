// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.


const args = process.argv.slice(2);

const timer = function(time) {
  time = time * 1000;
  if (args > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log("Wake up!");
    }, time);
  } else if (args === isNaN)
    return;
};
timer(args);