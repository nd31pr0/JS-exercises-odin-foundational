// Algorithm
// - remove space and punctuation from String
// - reverse the string and store in new variable
// - compare reversed string and string with punctuation and space removed. 
// - if both are same, return true else false.

const palindromes = function (text) {
    const cleanText = text.replace(/[^\w\s\']|_/g, "")
                          .replace(/\s+/g, "").toLowerCase();
                          
    // To reverse string, we need to separate the xters, reverse and then join again                      
    const revText = cleanText.split("").reverse().join("");
    return (cleanText === revText) ? true : false;
    //console.log(result);
    // return result;               
};

// Do not edit below this line
module.exports = palindromes;



console.log(palindromes("Hey eh"));


