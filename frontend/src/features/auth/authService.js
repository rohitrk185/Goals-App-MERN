import axios from 'axios'

const API_URL = 'http://localhost:5000/api/users/'

// Register user
const register = async (userData) => {
    console.log(API_URL);
    const response = await axios.post(API_URL, userData);
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

// Login user
const login = async (userData) => {
    console.log(API_URL);
    const response = await axios.post(API_URL + 'login', userData);
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

const logout = () => {
    localStorage.removeItem('user');
};


const authService = {
    register,
    logout,
    login,
}

export default authService;