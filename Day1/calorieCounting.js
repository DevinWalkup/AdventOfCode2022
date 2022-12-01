import { readFileSync } from 'fs';

const CalorieCounting = () => {
	let data = readFileSync('./Day1/data.txt', {
		encoding: 'utf-8',
	})
		.toString()
		.split('\n')
		.map((i) => (i === '' ? '_new_' : i));

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

	console.log(
		resultDict.sort((a, b) => {
			return b - a;
		})[0]
	);
};

export { CalorieCounting };
