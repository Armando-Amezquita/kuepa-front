export const getMessagesDB = async() => {
    try {

        const setting = { 
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("auth") || null,
            }, 
        } 

        const url = 'http://localhost:3000/api/chat';
        const data =  await (await fetch(url, setting)).json();
        return data
      
    } catch (error) {
        console.log("Ocurrio un error",error);
    }
} 

export const sendMessagesDB = async({ message }) => {
    try {
        const token = localStorage.getItem("auth")
        
        const msg = { message }
        const setting = { 
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "token": token,
            }, 
            body: JSON.stringify(msg) 
        } 

        const url = 'http://localhost:3000/api/chat';
        const data =  await (await fetch(url, setting)).json();
        return data
      
    } catch (error) {
        console.log("Ocurrio un error",error);
    }
} 
