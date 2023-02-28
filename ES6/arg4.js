function pick(...book) {
    let result ={};
    // for (let i = 1, len = arguments.length; i < len; i++) {
    //     result[book[i]] = book[book[i]];
    //     console.log(arguments[i]);
    // }
   result=Object.assign(...book);
    return result;
}

let book = {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    year: 2015
};

let bookData = pick(...book);

console.log(bookData); 
//console.log(bookData.year);  