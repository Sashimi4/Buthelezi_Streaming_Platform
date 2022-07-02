
export const registerUser = async (email: string, password: string) => {
    console.log(password)
    try { //                       Use actual IP to resolve double local host issue  
        const response = await fetch(`http://192.168.0.226:8080/users/registration`, {
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
        const json = await response.json();
        console.log(json);
      } catch(e) {
        console.error(`Reistration failed : ${e}`)
      }
}