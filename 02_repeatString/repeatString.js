const repeatString = function(word, repeat) {
let resultString = "";
for (let i = 0; i < repeat; i++) {
    resultString = resultString.concat(word);
};

if(repeat < 0){
    return "Error";
}
return resultString;
}

// Do not edit below this line
module.exports = repeatString;