import { datasQ } from "./datas";

const getRandomDataQuestion = () => {

	const dataQ = Math.floor(Math.random() * datasQ.length);

	return 	datasQ[dataQ].question;

};

export default getRandomDataQuestion;