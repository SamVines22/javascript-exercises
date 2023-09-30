const palindromes = function (string) {
    let lower = string.toLowerCase();
    let split_words = lower.split(" ");
    let str = split_words.join("");
    let no_punc = str.replace(/[?,.!]/g,"");
    let arr = no_punc.split("");
    let reverse_arr = [];
    for (let x = arr.length - 1; x>=0; x-- )
    {
        reverse_arr.push(arr[x]);
    }   
     let reverse_str = reverse_arr.join("");
     console.log(reverse_str);
     console.log(no_punc);
     if (no_punc == reverse_str)
     {
        return true;
     }
     else {return false} 
    

};

// Do not edit below this line
module.exports = palindromes;
