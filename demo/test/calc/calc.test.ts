import { defineFeature, loadFeature } from 'jest-cucumber';
import { multiply, add, subtract } from '../../src/calc';

const feature = loadFeature('demo/test/calc/calc.feature');

defineFeature(feature, (test) => {
	let value1;
	let value2;
	let result;
	test('check calculator functions', ({ given, and, when, then }) => {
		given(/^I have entered (.*) into the calculator$/, (no1) => {
			value1 = no1;
		});

		and(/^I have entered (.*) into the calculator$/, (no2) => {
			value2 = no2;
		});

		when(/^I press (.*)$/, async (btnType) => {
			if (btnType === 'add') {
				result = add(value1, value2);
			} else if (btnType === 'multiply') {
				result = multiply(value1, value2);
			}
		});

		then(/^the result should be (.*) on the screen$/, (answer) => {
			expect(result).toEqual(parseFloat(answer));
		});
	});
});
