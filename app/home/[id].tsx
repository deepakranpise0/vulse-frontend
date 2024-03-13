const QuizPage: React.FC<QuizProp> = ({ quizData }) => {
	return (
		<div>
			<h1>{quizData.title}</h1>
		</div>
	);
};

export default QuizPage;
