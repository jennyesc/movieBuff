// Date Maker

 function formatDate(string){
     let options = { year: 'numeric', month: 'short', day: 'numeric' };
     return new Date(string).toLocaleDateString([],options);
 }

export  default formatDate;