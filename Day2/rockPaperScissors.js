import { readFileSync } from 'fs';

const actionToLetter = [
	{
		key: 'rock',
		opponent: 'A',
		response: 'X',
		value: 1,
		beats: 3,
		losesTo: 2,
	},
	{
		key: 'paper',
		opponent: 'B',
		response: 'Y',
		value: 2,
		beats: 1,
		losesTo: 3,
	},
	{
		key: 'scissor',
		opponent: 'C',
		response: 'Z',
		value: 3,
		beats: 2,
		losesTo: 1,
	},
];

const RockPaperScissors = () => {
	GetTotalScore();
	GetScoreBasedOnRequiredMove();
};

const GetData = () => {
	return readFileSync('./Day2/data.txt', {
		encoding: 'utf-8',
	})
		.toString()
		.split('\n')
		.map((d) => {
			let parts = d.split('');
			return [parts[0], parts[2]];
		});
};

const GetTotalScore = () => {
	let data = GetData();

	let score = data.reduce((sum, round) => {
		let opponentMove = actionToLetter.find((a) => a.opponent === round[0]);
		let responseMove = actionToLetter.find((a) => a.response === round[1]);

		return (
			sum +
			(responseMove.value + GetRoundMultiplier(opponentMove, responseMove))
		);
	}, 0);

	console.log(`Total score: ${score}`);
};

const GetRoundMultiplier = (opponentMove, responseMove) => {
	let roundMultiplier = 0;
	if (opponentMove.value === responseMove.value) {
		roundMultiplier = 3;
	} else if (responseMove.beats === opponentMove.value) {
		roundMultiplier = 6;
	}

	return roundMultiplier;
};

const GetScoreBasedOnRequiredMove = () => {
	let data = GetData();

	let responseToAction = [
		{
			letter: 'X',
			result: 'lose',
		},
		{
			letter: 'Y',
			result: 'draw',
		},
		{
			letter: 'Z',
			result: 'win',
		},
	];

	let score = data.reduce((sum, round) => {
		let opponentMove = actionToLetter.find((a) => a.opponent === round[0]);
		let requiredMove = responseToAction.find((a) => a.letter === round[1]);
		let responseMove = null;
		if (requiredMove.result === 'lose') {
			responseMove = actionToLetter.find(
				(a) => a.losesTo === opponentMove.value
			);
		} else if (requiredMove.result === 'draw') {
			responseMove = actionToLetter.find((a) => a.value === opponentMove.value);
		} else {
			responseMove = actionToLetter.find((a) => a.beats === opponentMove.value);
		}

		return (
			sum +
			(responseMove.value + GetRoundMultiplier(opponentMove, responseMove))
		);
	}, 0);

	console.log(`Score Based on Required Moves: ${score}`);
};

export { RockPaperScissors };
