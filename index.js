import { GetSolutionForDay } from './program.js';

const dayNumber = Number(process.argv.slice(2)[0]);

if (!dayNumber) {
	throw new Error('Invalid day number');
}

GetSolutionForDay(dayNumber);
