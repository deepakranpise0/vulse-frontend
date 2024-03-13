import React, { useState } from 'react';

const apiUrl = process.env.API_URL;

const QuizForm = () => {
    const [title, setQuizName] = useState('');
	const [questions, setQuestions] = useState([
		{ text: '', options: ['', '', '', ''], correctOption: 0 },
	]);

	const handleQuestionChange = (index: number, value: string) => {
		const newQuestions = [...questions];
		newQuestions[index].text = value;
		setQuestions(newQuestions);
	};

	const handleOptionChange = (index: number, optionIndex: number, value: string) => {
		const newQuestions = [...questions];
		newQuestions[index].options[optionIndex] = value;
		setQuestions(newQuestions);
	};

	const handleCorrectAnswerChange = (index: number, value: number) => {
		const newQuestions = [...questions];
		newQuestions[index].correctOption = value;
		setQuestions(newQuestions);
	};

	const handleAddQuestion = () => {
		setQuestions([
			...questions,
			{ text: '', options: ['', '', '', ''], correctOption: 0 },
		]);
	};

	const handleRemoveQuestion = (index: number) => {
		const newQuestions = [...questions];
		newQuestions.splice(index, 1);
		setQuestions(newQuestions);
    };
    
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await fetch(`${apiUrl}quizzes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title,questions }),
            });

            if (!response.ok) {
                throw new Error('Failed to create quiz');
            }

            const data = await response.json();
            console.log(data); // Handle success response
        } catch (error) {
            console.error('Error creating quiz:', error); // Handle error
        }
    };

	return (
		<div className="container mx-auto">
			<h1 className="text-3xl font-bold my-4">Create Quiz</h1>
			<form>
				<div className="mb-4">
					<label htmlFor="title" className="block font-medium">
						Quiz Name
					</label>
					<input
						type="text"
						id="quizName"
						value={title}
						onChange={(event) => setQuizName(event.target.value)}
						className="border border-gray-300 rounded-md p-2 w-full"
					/>
				</div>
				{questions.map((question, index) => (
					<div key={index} className="my-4">
						<label className="block mb-2 font-semibold">{`Question ${
							index + 1
						}`}</label>
						<input
							type="text"
							value={question.text}
							onChange={(e) => handleQuestionChange(index, e.target.value)}
							className="w-full border-gray-300 rounded-md px-4 py-2"
						/>
						<div className="grid grid-cols-2 gap-4 mt-2">
							{question.options.map((option, optionIndex) => (
								<input
									key={optionIndex}
									type="text"
									value={option}
									onChange={(e) =>
										handleOptionChange(index, optionIndex, e.target.value)
									}
									className="border-gray-300 rounded-md px-4 py-2"
								/>
							))}
						</div>
						<label className="block mb-2 font-semibold mt-2">
							Correct Answer
						</label>
						<select
							value={question.correctOption}
							onChange={(e) =>
								handleCorrectAnswerChange(index, parseInt(e.target.value))
							}
							className="w-full border-gray-300 rounded-md px-4 py-2"
						>
							{question.options.map((_, optionIndex) => (
								<option key={optionIndex} value={optionIndex}>{`Option ${
									optionIndex + 1
								}`}</option>
							))}
						</select>
						<button
							type="button"
							onClick={() => handleRemoveQuestion(index)}
							className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
						>
							Remove Question
						</button>
					</div>
				))}
				<button
					type="button"
					onClick={handleAddQuestion}
					className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
				>
					Add Question
				</button>
				<button
					type="submit"
					className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
					onClick={handleSubmit}
				>
					Create Quiz
				</button>
			</form>
		</div>
	);
};

export default QuizForm;
