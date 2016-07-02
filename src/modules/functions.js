const testFunctions = function() {
  /*
  Using ES6 we have an opportunity easily add defaults values
  to the functions parameters.
  Below you can see very simple example
  */
  function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting} ${name}`);
  }
  console.log('Greet without arguments:');
  greet();
  console.log('Greet with only one argument:');
  greet('Hi');
  console.log('Greet with both arguments:');
  greet('Hi', 'John');
  /*
  We can even explicitly say that first argument is undefined
  and we will use default value:
  */
  console.log('Greet with only second argument:');
  greet(undefined, 'Lynda');

  /*
  In ES6 we don't need pseusoarray arguments
  We can easily grab arguments array using spread operator:
  */
  function getAverage(...numbers) {
    const sum = numbers.reduce(function(prev, curr) {
      return prev + curr;
    });
    const avg = sum / numbers.length;
    return avg;
  }
  /*
  Now we can give the function getAverage as many arguments
  as we want and it will be working
  */
  console.log(getAverage(10, 20, 30));
  console.log(getAverage(100, 50, 5));
  const numbers = [1, 4, 37, 44, 55];
  console.log(getAverage(...numbers));
}

export default testFunctions
