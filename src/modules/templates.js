const testTemplates = function() {
  /* In ES6 it's possible to use backticks (``)
   for creating Template Literals:
  */
  let templateString = `Simple string`;

  /* Using this syntax it's possible to use
  single quote and double quote without any doubts:
  */
  templateString = `It's possible to use ' and " in one sentence without any problem now!`;

  /*
  Template Strings can contain placeholders for string substitution
  using the ${ } syntax, and it's very useful:
  */
  const myName = 'Alex';
  const stringWithSubstitution = `My name is ${myName} and I'm improving my skills in ES6 now`;
  console.log(`String with substitution: ${stringWithSubstitution}`);

  /*
  But we can do much more with template Literals!
  For example, we can use expression interpolation:
  */
  const today = new Date();
  const stringWithDate = `Today is ${today.toLocaleDateString()}`;
  console.log(`String with date: ${stringWithDate}`);

  /*
  Template Literals significantly simplify multiline strings.
  If you need new line - simply include it:
  */
  const multilineString = (
  `It's very easy adding
  new line
  with ES6 template literals`);
  console.log(multilineString);

  /*
  Also we can use feature called Tagged template:
  just place a function name before the template literal
  */

  /** Separate strings and expressions and show results in console
  * stringParts - Array of strings from template
  * ...expressions - Array of all values(substitutions) from template
  */
  function separateStrAndExp(stringParts, ...expressions) {
    const stringWithoutExp = stringParts.join('');
    console.log(`Our string without expression is: ${stringWithoutExp}`);

    console.log('Our expressions:');
    for (let i = 0; i < expressions.length; i++) {
      console.log(`Expression number ${i + 1}: ${expressions[i]}`);
    }
  }
  const taggedString = separateStrAndExp`My name is ${myName}. Today is ${today.toLocaleDateString()}`;
};

export default testTemplates
