import { varCanChange, CONST_EXAMPLE } from './modules/variables';
import testSpread from './modules/spread';
import testTemplates from './modules/templates';
import testFunctions from './modules/functions';
import testForLoops from './modules/for';
import testObjects from './modules/objects';

console.log(`This is my let variable: ${varCanChange},\nand this is my const variable: ${CONST_EXAMPLE}.\nLet's move on!`);

testSpread();
testTemplates();
testFunctions();
testForLoops();
testObjects();
