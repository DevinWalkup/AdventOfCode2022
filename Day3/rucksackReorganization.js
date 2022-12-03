import { GetData } from '../utils.js';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const letters = alphabet.split('');

const RucksackReorganization = (dayNumber) => {
	GetCompartmentTotal(dayNumber);
	ElfIdentification(dayNumber);
};

const GetAlphabeticalNumber = (l) => {
	let index = letters.indexOf(l);

	if (index > -1) {
		return Math.ceil(index + 1);
	}

	index = letters.indexOf(l.toLowerCase());

	return Math.ceil(index + 1) + 26;
};

const GetCompartmentTotal = (dayNumber) => {
	const data = GetData(dayNumber);

	const total = data.reduce((sum, row) => {
		const half = Math.ceil(row.length / 2);
		let compartments = [row.slice(0, half), row.slice(half)];

		let matchingLetter = compartments[1]
			.split('')
			.find((val) => compartments[0].includes(val));

		return sum + GetAlphabeticalNumber(matchingLetter);
	}, 0);

	console.log(`The compartment total is: ${total}`);
};

const ElfIdentification = (dayNumber) => {
	const data = GetData(dayNumber);

	let total = 0;
	for (let i = 0; i < data.length; i += 3) {
		let group = data.slice(i, i + 3);

		let matchingLetter = group[0]
			.split('')
			.find((val) => group[1].includes(val) && group[2].includes(val));

		total = total + GetAlphabeticalNumber(matchingLetter);
	}

	console.log(`Sum of priorities: ${total}`);
};

export { RucksackReorganization };
