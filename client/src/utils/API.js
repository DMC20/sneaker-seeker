// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};
  
export const createUser = (userData) => {
    return fetch('/api/SignUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};
  
export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};
  
export const searchShoes = (query) => {
    return fetch(`https://the-sneaker-database.p.rapidapi.com/sneakers?limit=100&brand=${query}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
            "x-rapidapi-key": "90010f48fcmsh67c1ef52e0aacbep1ab420jsn8d9992b34041"
        }
    });
};