//export const url = "http://localhost:5000/api"
export const url = "https://to-do-app-back-end-production.up.railway.app/api"


export const setHeaders = () => {
    const header = {
        headers: {
            "x-auth-token" : localStorage.getItem("token")
        }
    }
    
    return header
}