export const login = async(user, password) => {
    try {
        const loginObj = { user, password, }

        const setting = { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginObj) 
        } 

        const url = 'http://localhost:3000/api/auth/login';
        const data =  await (await fetch(url, setting)).json();

        return data
      
    } catch (error) {
        console.log("Ocurrio un error",error);
    }
} 
export const signup = async(payload) => {
    try {
        const signupObj = { ...payload }

        const setting = { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupObj) 
        } 

        const url = 'http://localhost:3000/api/auth/signup';
        const data =  await (await fetch(url, setting)).json();

        return data
      
    } catch (error) {
        console.log("Ocurrio un error",error);
    }
} 
