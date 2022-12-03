import { CalorieCounting } from './Day1/calorieCounting.js';
import { RockPaperScissors } from './Day2/rockPaperScissors.js';
import { RucksackReorganization } from './Day3/rucksackReorganization.js';

const dayNumber = Number(process.argv.slice(2)[0]);

if (!dayNumber) {
	throw new Error('Invalid day number');
}

const GetAnswer = () => {
	switch (dayNumber) {
		case 1:
			CalorieCounting();
			return;
		case 2:
			RockPaperScissors();
			return;
		case 3:
			RucksackReorganization();
			return;
	}
};

GetAnswer();
