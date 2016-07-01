const testSpread = function() {
  /*
  We have an array with programming languages names
  */
  const someLanguages = ['JavaScript', 'Java', 'Python'];
  /*
  For adding languages names from first array to another array
  we can use ES6 spread operator(...)
  */
  const languages = [...someLanguages, 'C++', 'PHP', 'Ruby'];
  showLanguages(languages);

  /**
  * Show languages from languages list to console
  * @param {Array} languagesList - array with languages names
  */
  function showLanguages(languagesList) {
    let currentNum = 1;
    console.log('Your programming languages list:');
    languagesList.forEach(function(language) {
      console.log(`${currentNum} ${language}`);
      currentNum++;
    });
  }

  /*
  Another way to use spread operator is
  to pass elements of an array as an arguments:
  */
  const settings = [2, 10, true];
  showNumbers(...settings);

  /**
  * Show numbers from range to console
  * @param {number} min - Range minimum
  * @param {number} max - Range maximum
  * @param {Boolean} oddOnly - if true, show only odd numbers from range
  */
  function showNumbers(min, max, oddOnly) {
    let startNum = min;
    let step = 1;
    if (oddOnly) {
      startNum = (min % 2 === 0) ? (min + 1) : min;
      step = 2;
    }
    console.log(`There are numbers from ${min} to ${max}, oddOnly: ${oddOnly}:`);
    for (let i = startNum; i <= max; i += step) {
      console.log(i);
    }
  }
};

export default testSpread
