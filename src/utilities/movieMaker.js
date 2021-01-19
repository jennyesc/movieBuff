// Trim

export function shortenPars (string) {
     let untrimmed = string;
     const trimLength = 150;
        return `${untrimmed.substring(0, trimLength)}`;
  };

//  default shortenPars;

//Change rating into percentage

// export function percentNumber (int) {
//     return Math.floor(int * 10);
//  };

//  export  percentNumber;

export const percentNumber = (int) => {
    return `${Math.floor(int * 10)}`;
 };