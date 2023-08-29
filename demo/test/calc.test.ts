import { multiply, add } from '../src/calc'
import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('demo/test/calc.feature');

defineFeature(feature, test=>{
  let value1;
  let value2;
  let result;
  test('Add two numbers', ({
    given,
    and,
    when,
    then
  }) => {
    given(/^I have entered (.*) into the calculator$/, (no1) => {
      value1 = no1;
    });
  
    and(/^I have entered (.*) into the calculator$/, (no2) => {
      value2 = no2;
    });
  
    when(/^I press (.*)$/, async (btnType) => {
    
          result= add(value1, value2);
        
    });
  
    then(/^the result should be (.*) on the screen$/, (answer) => {
      console.log(result)
      expect(result).toEqual(parseFloat(answer))
    });
  });

})