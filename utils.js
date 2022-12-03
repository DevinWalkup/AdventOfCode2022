import { readFileSync } from 'fs';

const GetData = (dayNumber) => {
	return readFileSync(`./Day${dayNumber}/data.txt`, { encoding: 'utf-8' })
		.toString()
		.split('\n');
};

export { GetData };
