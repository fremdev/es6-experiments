import { varCanChange, CONST_EXAMPLE } from './modules/variables';
import testSpread from './modules/spread';
import testTemplates from './modules/templates';

console.log(`This is my let variable: ${varCanChange},\nand this is my const variable: ${CONST_EXAMPLE}.\nLet's move on!`);

testSpread();
testTemplates();
