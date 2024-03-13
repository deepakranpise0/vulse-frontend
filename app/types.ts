interface Quiz {
	id: number;
	title: string;
	createdAt: string;
	updatedAt: string;
	questions: Question[];
}

interface Question {
	id: number;
	text: string;
	options: string[];
	correctOption: number;
	quizId: number;
}

interface UserResult {
	id: number;
	username: string;
	quizname: string;
	score: number;
}

interface User {
	id: number;
	username: string;
	email: string;
	role: String;
}

interface QuizResultResponse{
    id: number;
    user: { username: string };
    quiz: { title: string };
    score: number;
}

interface QuizProps {
    quizzes: Quiz[]; // Users prop of type User[]
}

interface login { 
    username: string,
    password:string
}

interface QuizProp {
	quizData: Quiz; // Users prop of type User[]
}