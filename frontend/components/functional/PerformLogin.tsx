import HTTPS_CODE from "../../assets/HTTPS_CODE";

export const loginUser = async (email: string, password: string) => {
    try { //                       Use actual IP to resolve double local host issue  
        const response = await fetch(`http://192.168.0.226:8080/users/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        if(response.status == HTTPS_CODE.SUCCESS) {
            return response.json
        }
        return null
      } catch(e) {
        console.error(`Login failed : ${e}`)
      }
}