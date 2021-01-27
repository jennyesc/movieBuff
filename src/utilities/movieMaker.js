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
  return `${hours}hr ${minutes}m`;         
};
