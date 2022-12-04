import { CalorieCounting } from './Day1/calorieCounting.js';
import { RockPaperScissors } from './Day2/rockPaperScissors.js';
import { RucksackReorganization } from './Day3/rucksackReorganization.js';
import { CampCleanup } from './Day4/campCleanup.js';

const dayNumber = Number(process.argv.slice(2)[0]);

if (!dayNumber) {
	throw new Error('Invalid day number');
}

const GetAnswer = () => {
	switch (dayNumber) {
		case 1:
			CalorieCounting(dayNumber);
			return;
		case 2:
			RockPaperScissors(dayNumber);
			return;
		case 3:
			RucksackReorganization(dayNumber);
			return;
		case 4:
			CampCleanup(dayNumber);
			return;
	}
};

GetAnswer();
