// Date Maker

 function formatDate(string){
     let options = { year: 'numeric', month: 'long', day: 'numeric' };
     return new Date(string).toLocaleDateString([],options);
 }

// and then when i call into the return it looks like this:

// {formatDate(movie.release_date)}

export  default formatDate;