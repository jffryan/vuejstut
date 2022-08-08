setTimeout(() => {
  console.log("I will print 1 second after the program executes");
}, 1000);

const interval = setInterval(() => {
  console.log("I will run EVERY two seconds until you kill me.");
}, 2000);

// clearInterval(interval);

setTimeout(() => {
  clearTimeout(interval);
}, 10000);
