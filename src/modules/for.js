const testForLoops = function() {
  const jsFrameworks = [
    'Angular',
    'React',
    'Ember',
    'Backbone',
  ];
  /*
  In JavaScript we already have many for loops.
  Let's start with simple for loop:
  */
  for (let i = 0; i < jsFrameworks.length; i++) {
    console.log(jsFrameworks[i]);
  }
  /*
  Another way to loop throw array is forEach method:
  */
  jsFrameworks.forEach(function(framework) {
    console.log(framework);
  });
  /*
  Also we have for...in loop.
  The for...in loop is used to loop through an object's properties.
  But we can easily achieve the same result with this loop:
  */
  for (let index in jsFrameworks) {
    if(jsFrameworks.hasOwnProperty(index)) {
      console.log(jsFrameworks[index]);
    }
  }
  /*
  Finally, in ES6 we have one more for loop: for...of
  for...of loop is for looping over iterable objects(Arrays, Sets, Maps)
  */
  for (const framework of jsFrameworks) {
    console.log(framework);
  }
};

export default testForLoops
