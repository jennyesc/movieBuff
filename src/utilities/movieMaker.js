// Trim

export function shortenPars (string) {
     let untrimmed = string;
     const trimLength = 150;
        return `${untrimmed.substring(0, trimLength)}`;
  };


//Change rating into percentage

export const percentNumber = (int) => {
    return `${Math.floor(int * 10)}`;
 };