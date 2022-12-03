import { GetData } from '../utils.js';

const CalorieCounting = (dayNumber) => {
	let data = GetData(dayNumber).map((i) => (i === '' ? '_new_' : i));

	let resultDict = [];
	let elfNum = 1;

	for (let i of data) {
		if (i === '_new_') {
			elfNum = elfNum + 1;
			continue;
		}

		if (!resultDict[elfNum]) {
			resultDict[elfNum] = 0;
		}

		resultDict[elfNum] = resultDict[elfNum] + Number(i);
	}

	resultDict = resultDict.sort((a, b) => {
		return b - a;
	});

	const mostCalories = resultDict[0];
	const topThreeCalories = resultDict.slice(0, 3).reduce((a, b) => {
		return a + b;
	}, 0);

	console.log(
		`Most Calories: ${mostCalories}`,
		`Top Three Calories: ${topThreeCalories}`
	);
};

export { CalorieCounting };
