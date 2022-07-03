
export const searchMovie = async (keyword: string) => {
    try { //                        Use actual IP to resolve double local host issue  
        const response = await fetch(`http://192.168.0.226:8080/search?keyword=${keyword}`, { //issue here if the movie has special characters and whitespaces
          method: 'GET',
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });
        const json = await response.json();
        console.log(json)
        return json;
      } catch(e) {
        console.error(`Search failed : ${e}`)
        return []
      }
}