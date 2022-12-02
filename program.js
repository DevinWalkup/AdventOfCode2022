import { CalorieCounting } from './Day1/calorieCounting.js';
import { RockPaperScissors } from './Day2/rockPaperScissors.js';

const GetSolutionForDay = (dayNumber) => {
	switch (dayNumber) {
		case 1:
			CalorieCounting();
			return;
		case 2:
			RockPaperScissors();
			return;
	}
};

export { GetSolutionForDay };
