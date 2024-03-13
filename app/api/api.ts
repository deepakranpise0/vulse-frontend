import {
  useQuery,
  UseQueryResult,
} from 'react-query';

const apiUrl = process.env.API_URL;

export const fetchQuizData = async (): Promise<Quiz[]> => {
  const token = localStorage.getItem('token')||'';
  const response = await fetch(`${apiUrl}quizzes`,{
     method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  if (!response.ok) {
    throw new Error('Failed to fetch quizzes');
  }
  return await response.json();
};

export const useQuizData = (): UseQueryResult<Quiz[]> => {
  return useQuery('quizData', fetchQuizData);
};

export const fetchUsersData = async (): Promise<User[]> => {
  const token = localStorage.getItem('token')||'';
  const response = await fetch(`${apiUrl}users`,{
     method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return await response.json();
};

export const useUsersData = (): UseQueryResult<User[]> => {
  return useQuery('usersData', fetchUsersData);
};

export const fetchResultsData = async (): Promise<QuizResultResponse[]> => {
  const token = localStorage.getItem('token')||'';
  const response = await fetch(`${apiUrl}quizzes/results`,{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  if (!response.ok) {
    throw new Error('Failed to fetch user results');
  }
  return await response.json();
};

export const useResultsData = (): UseQueryResult<QuizResultResponse[]> => {
  return useQuery('usersResultData', fetchResultsData);
};

export const useLogin = (loginRequest: login): UseQueryResult<string> => {
  const queryKey = 'useLogin';
    const token = localStorage.getItem('token')||'';
    const queryFn = async (): Promise<string> => {
      const response = await fetch(`${apiUrl}users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginRequest),
      });
      if (!response.ok) { 
        throw new Error('Failed to logged in')
      }
    return await response.json();
  };

  return useQuery(queryKey, queryFn);
};

export const useSubmitQuiz = (loginRequest: login): UseQueryResult<string> => {
  const queryKey = 'useSubmitQuiz';
    const token = localStorage.getItem('token')||'';
    const queryFn = async (): Promise<string> => {
      const response = await fetch(`${apiUrl}users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(loginRequest),
      });
      if (!response.ok) { 
        throw new Error('Failed to logged in')
      }
    return await response.json();
  };

  return useQuery(queryKey, queryFn);
};

export const useGetQuizById = (id: number): UseQueryResult<Quiz> => {
  const queryKey = 'useGetQuizById';
    const token = localStorage.getItem('token')||'';
    const queryFn = async (): Promise<string> => {
      const response = await fetch(`${apiUrl}quizzes?id=${id}`, {
      method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch quizzes');
      }
      const data=await response.json()
      return data[0];
  };
  return useQuery(queryKey, queryFn);
};

export const useDeleteQuizById = (id: number): UseQueryResult<string> => {
  const queryKey = `deleteQuizById-${id}`;

  const queryFn = async (): Promise<string> => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }

      const response = await fetch(`${apiUrl}quizzes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete quiz');
      }

      return await response.json();
    } catch (error) {
      throw new Error(`Error deleting quiz: ${error}`);
    }
  };

  return useQuery(queryKey, queryFn);
};




