const API_BASE_URL = 'http://localhost:8080/api';

export const api = {
    register: async (userData: { email: string; password: string; firstName: string; lastName: string }) => {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        return response.json();
    },

    login: async (credentials: { email: string; password: string }) => {
        const response = await fetch(`${API_BASE_URL}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
            credentials: 'include', // Important for cookies/session
        });
        return response.json();
    },
};