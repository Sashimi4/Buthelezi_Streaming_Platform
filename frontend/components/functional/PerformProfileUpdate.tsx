import HTTPS_CODE from "../../assets/HTTPS_CODE";

export const updateUser = async (email: string, username: string) => {
    try { //                       Use actual IP to resolve double local host issue  
        const response = await fetch(`http://192.168.0.226:8080/users/pofile`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: username,
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