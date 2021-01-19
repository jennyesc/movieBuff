// Trim

function shortenPars (string) {
     let untrimmed = string;
     const trimLength = 150;
     return untrimmed.substring(0, trimLength);
  };

  export default shortenPars;

// export const shortenPars = (string) => {
//     let untrimmed = string;
//     const trimLength = 55;
//     return (untrimmed.substring(0, trimLength)};
//  };