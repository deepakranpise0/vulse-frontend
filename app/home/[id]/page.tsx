'use client';
import React, {
  useEffect,
  useState,
} from 'react';

import { useRouter } from 'next/navigation';

import { useGetQuizById } from '@<prefix>/app/api/api';

const apiUrl = process.env.API_URL;

const QuizPage = ({ params }: { params: { id: number } }) => {
   const { id } = params;
		const { push } = useRouter();
		const [quiz, setQuiz] = useState<Quiz>();
		const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
		const [selectedOption, setSelectedOption] = useState<number | null>(null);
		const [token, setToken] = useState<string | null>(null);

		useEffect(() => {
			const storedToken = localStorage.getItem('token');
			if (storedToken) {
				setToken(storedToken);
			}
		}, []);

		const handleOptionSelect = (index: number) => {
			setSelectedOption(index);
		};

		const goToPreviousQuestion = () => {
			if (currentQuestionIndex > 0) {
				setCurrentQuestionIndex(currentQuestionIndex - 1);
				setSelectedOption(null);
			}
		};

		const goToNextQuestion = async () => {
			setSelectedOption(null);
			if (quiz && currentQuestionIndex < quiz.questions.length - 1) {
				setCurrentQuestionIndex(currentQuestionIndex + 1);
			} else {
				try {
					if (!token) {
						throw new Error('Token not found');
					}

					const response = await fetch(`${apiUrl}quizzes/${id}`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${token}`,
						},
						body: JSON.stringify({
							title: quiz?.title,
							responses: quiz?.questions.map((a) => ({
								id: a.id,
								selectedOption: a.correctOption,
							})),
						}),
					});

					if (!response.ok) {
						throw new Error('Failed to submit quiz');
					}

					const responseData = await response.json();
					console.log(responseData);
					push('/results');
				} catch (error) {
					console.error('Error submitting quiz:', error);
				}
			}
		};

		const { data: quizData, isLoading, isError } = useGetQuizById(id);

		useEffect(() => {
			if (quizData) {
				setQuiz(quizData);
			}
		}, [quizData]);

		if (isLoading) {
			return <div>Loading...</div>;
		}

		if (isError) {
			return <div>Error fetching quiz data.</div>;
		}
    return quiz && (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold my-4">Attempt Quiz : {quiz.title}</h1>
            <div className="flex justify-center">
                <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
                    <div className="mb-4">
                        <div className="text-xl text-red-400 font-semibold mb-2">
                            {currentQuestionIndex + 1} :
                            {quiz.questions[currentQuestionIndex].text}
                        </div>
                        <div>
                            {quiz.questions[currentQuestionIndex].options.map(
                                (option, index) => (
                                    <button
                                        key={index}
                                        className={`w-full text-left mt-2 p-2 rounded-lg focus:outline-none ${selectedOption === index
                                                ? 'bg-blue-500'
                                                : 'bg-blue-300 hover:bg-blue-400'
                                            }`}
                                        onClick={() => handleOptionSelect(index)}
                                    >
                                        {index + 1}: {option}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button
                            className="w-1/2 py-2 px-4 bg-red-300 text-white rounded hover:bg-green-700 mr-2"
                            onClick={goToPreviousQuestion}
                            disabled={currentQuestionIndex === 0}
                        >
                            Previous
                        </button>
                        <button
                            className="w-1/2 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 ml-2"
                            onClick={goToNextQuestion}
                            disabled={selectedOption === null}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default QuizPage;
