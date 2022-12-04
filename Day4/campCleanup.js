import { GetData } from '../utils.js';

const CampCleanup = (dayNumber) => {
	const data = GetData(dayNumber).map((record) => {
		return record.split(',').map((r) => {
			return r.split('-').map((num) => Number(num));
		});
	});

	getClashingPairsTotal(data);
	getOverlappingPairsTotal(data);
};

const getClashingPairsTotal = (data) => {
	const total = data.reduce((total, row) => {
		if (isClashingPair(row)) {
			return total + 1;
		}

		return total;
	}, 0);

	console.log(`Total clashing pairs: ${total}`);
};

const getOverlappingPairsTotal = (data) => {
	const total = data.reduce((total, row) => {
		if (isClashingPair(row)) {
			return total + 1;
		}

		if (isContainingPair(row)) {
			return total + 1;
		}

		return total;
	}, 0);

	console.log(`Total overlapping pairs: ${total}`);
};

const isClashingPair = (pair) => {
	let firstPair = pair[0];
	let secondPair = pair[1];
	if (firstPair[0] <= secondPair[0] && firstPair[1] >= secondPair[1]) {
		return true;
	}

	if (secondPair[0] <= firstPair[0] && secondPair[1] >= firstPair[1]) {
		return true;
	}

	return false;
};

const isContainingPair = (pair) => {
	let firstPair = fillArray(pair[0][0], pair[0][1]);
	let secondPair = fillArray(pair[1][0], pair[1][1]);

	if (firstPair.some((v) => secondPair.includes(v))) {
		return true;
	}

	return false;
};

const fillArray = (min, max) => {
	let toReturn = [];

	for (let i = min; i <= max; i++) {
		toReturn.push(i);
	}

	return toReturn;
};

export { CampCleanup };
