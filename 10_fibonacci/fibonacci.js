const fibonacci = function(num) {
let F = [0, 1];
for(let i = 2; i <= num; i++) {
    F.push( F[i - 1] + F[i - 2])
    }
if(num < 1) return "OOPS";
return(F[num])

};

// Do not edit below this line

module.exports = fibonacci;
