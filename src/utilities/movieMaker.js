// Trim

export function shortenPars (string) {
     let untrimmed = string;
     const trimLength = 75;
        return `${untrimmed.substring(0, trimLength)}`;
  };


//Change rating into percentage

export const percentNumber = (int) => {
    return `${Math.floor(int * 10)}`;
 };

//Time convert
export function timeConvert (num) { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return `${hours + "hr" + " " + minutes + "m" }`;         
};



// export const fetchTopRated = async () => {
//    const res = await fetch( `${MD_TOP_URL}api_key=${MD_API_KEY_ONLY}${MD_LAN}`);
//      let data = await res.json();
//      console.log(data);
//      setMovies(data.results.splice(0,20));

//      useEffect( () => {
//       fetchTopRated();

//    }, [] );
//    return function movieTop(arr) {
//       return arr.map((movie, i) => {
//          {movies !== null && movieTop(movies)}

//       };